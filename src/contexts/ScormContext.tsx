// ScormProvider
//  1. Performs polling to check if SCORM is ready
//  2. Only renders children when SCORM is ready
//  3. If initialization fails, ScormProvider shows an error message and does not render children
//  4. Expose some functions to interact with the SCORM API

// Read the documentation of pipwerks-scorm-api-wrapper for more information and understand what happens under the hood!
// https://pipwerks.com/using-a-scorm-wrapper-to-simplify-the-workflow/

import pipwerks, { type SCORMAPI } from 'pipwerks-scorm-api-wrapper';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

/**
 * SCORM Field Constants
 *
 * These constants define the standardized SCORM data model fields used for communication
 * with the Learning Management System (LMS). Each field represents a specific piece of
 * learner or course data that can be read from or written to the SCORM API.
 */
const FIELDS = {
  /** Tracks the learner's location in the content */
  lessonLocation: 'cmi.core.lesson_location' as const,
  /** Current status of the lesson */
  lessonStatus: 'cmi.core.lesson_status' as const,
  /** Data to persist between sessions */
  suspendData: 'cmi.suspend_data' as const,
  /** Name of the student from the LMS */
  studentName: 'cmi.core.student_name' as const,
  /** Raw score achieved by the student */
  scoreRaw: 'cmi.core.score.raw' as const,
} as const;

type Fields = (typeof FIELDS)[keyof typeof FIELDS];

/**
 * Lesson Status Constants
 *
 * These constants define the standardized SCORM lesson status states that can be used
 * to track the learner's progress through the course content.
 */
export const LESSON_STATUS = {
  /** The lesson has not been attempted */
  notAttempted: 'not attempted' as const,
  /** The lesson has been started but not completed */
  incomplete: 'incomplete' as const,
  /** The lesson has been completed */
  completed: 'completed' as const,
  /** The lesson has been passed */
  passed: 'passed' as const,
  /** The lesson has been failed */
  failed: 'failed' as const,
} as const;

// type LessonStatus = typeof LESSON_STATUS[keyof typeof LESSON_STATUS];

/**
 * Interface defining the SCORM Context API
 *
 * @interface ScormContextType
 * @property {boolean} isScormInitialized - Indicates if SCORM API is properly initialized
 * @property {Function} scormGet - Retrieves a SCORM field value
 * @property {Function} scormSet - Sets a SCORM field value
 * @property {Function} scormSave - Saves all pending SCORM data
 * @property {Function} scormQuit - Terminates the SCORM session
 */
interface ScormContextType {
  isScormInitialized: boolean;
  scormGet: (key: Fields) => string;
  scormSet: (key: Fields, value: string) => boolean;
  scormSave: () => boolean;
  scormQuit: () => boolean;
}

// Function to verify the initialization of the SCORM
// It'll be useful if the LMS have delay to initialize the SCORM
// HOW TO TEST:
// You can test locally, after the build, use Open With Live Server to open the index.html
const initializeScormWithTimeout = (timeoutMs: number = 5000): Promise<SCORMAPI> => {
  return new Promise((resolve, reject) => {
    let checkScormTimeoutId: NodeJS.Timeout | null = null;

    const checkScorm = () => {
      console.log('checkScorm');

      // If the SCORM is initialized, resolve the promise
      if (pipwerks.SCORM && pipwerks.SCORM.connection && pipwerks.SCORM.isAvailable) {
        clearTimeout(timeoutId);
        if (checkScormTimeoutId) {
          clearTimeout(checkScormTimeoutId);
        }
        resolve(pipwerks.SCORM);
      } else {
        // If the SCORM is not initialized, check again after 500ms
        checkScormTimeoutId = setTimeout(checkScorm, 500);
      }
    };

    // If the time to initialize the SCORM exceeds the timeout, reject the promise
    const timeoutId = setTimeout(() => {
      clearTimeout(timeoutId);
      if (checkScormTimeoutId) {
        clearTimeout(checkScormTimeoutId);
      }
      reject(new Error('Timeout ao inicializar SCORM'));
    }, timeoutMs);

    // Start checking the SCORM initialization
    checkScorm();
  });
};

const ScormContext = createContext<ScormContextType | undefined>(undefined);

interface ScormProviderProps {
  children: ReactNode;
}
export function ScormProvider({ children }: ScormProviderProps) {
  const [isScormInitialized, setIsScormInitialized] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [scorm, setScorm] = useState<SCORMAPI>(pipwerks.SCORM);

  // DEBUG
  // 2 manners of debug:
  // 1. While in local development, the debug is enabled by default
  // 2. While in production, the debug is disabled by default,
  // but you can enable the debug by setting the environment variable VITE_ENABLE_SCORM_DEBUG=true
  // so the logs will be shown in the console while you test in the production environment (LMS)

  // Returns TRUE if the environment is development (using npm run dev). When building(npm run build or npm run scorm), the value will be "production", returning false.
  const isDevelopment = process.env.NODE_ENV === 'development';

  // Activate the debug based on the environment variable
  pipwerks.debug.isActive = import.meta.env.VITE_ENABLE_SCORM_DEBUG === 'true';

  useEffect(() => {
    /**
     * Handles SCORM API behavior in development environments.
     *
     * This function:
     * 1. Checks if the current environment is development (process.env.NODE_ENV === "development")
     * 2. If in development mode:
     *    - Logs a warning message about SCORM API unavailability in development
     *    - Sets SCORM initialization state to true to allow component rendering
     *    - Sets initializing state to false to complete the initialization process
     * 3. Returns early if in development mode, allowing the component to render without SCORM API
     *
     * Note: This is a development-only function that simulates SCORM API readiness
     *       to allow development and testing without a real SCORM environment.
     */
    function developmentEnvironment() {
      if (isDevelopment) {
        console.log(
          '%c ------- ScormWrapper - DEVELOPMENT ENVIRONMENT ------- \n SCORM API not available in development environment. \n -------------------------------------------------------',
          'background: #00f; color: white'
        );
        setIsScormInitialized(true);
        setIsInitializing(false);
        return;
      }
    }

    // Loading State Management
    /*
     * LOADING STATES:
     *
     * The component handles three main states:
     * 1. Loading: isInitializing = true
     * - Displays loading indicator
     * - The SCORM API is being initialized
     *
     * 2. Error: !isScormInitialized && !isInitializing
     * - Displays error message
     * - SCORM API initialization failed
     * - In development, remains in debug mode
     *
     * 3. Ready: isScormInitialized && !isInitializing
     * - Renders child components
     * - The SCORM API is fully functional
     */

    const initializeScorm = async () => {
      developmentEnvironment();
      if (!isDevelopment) {
        try {
          const SCORM = await initializeScormWithTimeout();
          SCORM.init();
          setScorm(SCORM);
          setIsScormInitialized(true);
          setIsInitializing(false);
        } catch (error) {
          console.error('Erro ao inicializar SCORM:', error);
          setIsScormInitialized(false);
          setIsInitializing(false);
        }
      }
    };

    /**
     * Handles the browser's beforeunload event to ensure proper SCORM session cleanup.
     *
     * This function is called when the user is about to leave the page and performs the following:
     * 1. Saves all pending SCORM data to the LMS
     * 2. Terminates the SCORM session gracefully
     *
     * This ensures that all learner progress and data are properly saved before the user leaves the course.
     */
    const handleBeforeUnload = () => {
      if (scorm) {
        scorm.save();
        scorm.quit();
      }
    };

    initializeScorm();

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [scorm, isDevelopment]);

  // Don’t forget the pipwerks wrapper has additional automation running under the hood;
  // in the example above, the scorm.set function first checks to ensure the connection is active,
  // then attempts to set the value. If the connection is not active, or if the call is not successful,
  // the pipwerks wrapper will ping the LMS to get the error code and display the error in your JavaScript console.

  // Function to get values
  const scormGet = (key: Fields) => scorm.get(key);

  // Function to set values
  // Sanitize any user input before saving to SCORM variables
  const scormSet = (key: Fields, value: string) => scorm.set(key, value);

  // Function to save
  const scormSave = () => scorm.save();

  // Function to quit, after save
  const scormQuit = () => scorm.quit();

  if (isInitializing) {
    return <div className="flex w-full items-center justify-center p-6">Carregando SCORM...</div>;
  }

  if (!isScormInitialized) {
    return (
      <div className="flex w-full items-center justify-center p-6">
        Falha ao conectar com o SCORM
      </div>
    );
  }

  return (
    <ScormContext.Provider
      value={{
        isScormInitialized,
        scormGet,
        scormSet,
        scormSave,
        scormQuit,
      }}
    >
      {children}
    </ScormContext.Provider>
  );
}

// Hook to use the ScormContext
// The ScormContext is a context that provides functions to interact with the SCORM API.
export const useScorm = (): ScormContextType => {
  const context = useContext(ScormContext);
  if (context === undefined) {
    throw new Error('useScorm must be used within a ScormProvider');
  }
  return context;
};

// Example of use of the context and general functions

// Home.tsx
// import { Button } from "@/components/ui/button";
// import { LESSON_STATUS, useScorm } from "@/contexts/ScormContext";
// import { Link } from "react-router-dom";

// export default function Home() {

//   const {scormSet, scormSave, scormQuit, scormGet} = useScorm();

//   function handleConcludeScorm(){
//     scormSet('cmi.core.lesson_status',LESSON_STATUS.completed);
//     scormSave();
//     scormQuit();
//   }

//   const isCourseCompleted = scormGet("cmi.core.lesson_status") === LESSON_STATUS.completed;

//   return (
//     <div className="w-full flex justify-center items-center">
//       <p className="text-2xl font-bold">Home.tsx</p>

//       <Button onClick={handleConcludeScorm} disabled={isCourseCompleted}>Concluir SCORM</Button>
//       <Link to="/debug-scorm">Debug SCORM</Link>
//     </div>
//   )
// }

// -----------

// Example of test DEBUG

// import { Button } from "@/components/ui/button";
// import { LESSON_STATUS, useScorm } from "@/contexts/ScormContext";

// export default function DebugScorm() {

//   const { scormSet} = useScorm();

//   function handleConcludeScorm(){
//     //@ts-expect-error
//     scormSet('cmi.core.lesson_KELVIN',LESSON_STATUS.completed);
//   }

//   return (
//     <div className="w-full flex justify-center items-center">
//       <p className="text-2xl font-bold">Home.tsx</p>

//       <Button onClick={handleConcludeScorm} variant="destructive">DEBUG</Button>

//     </div>
//   )
// }
