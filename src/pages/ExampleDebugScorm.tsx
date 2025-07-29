import { Button } from '@/components/ui/button';
import { LESSON_STATUS, useScorm } from '@/contexts/ScormContext';

export default function ExampleDebugScorm() {
  const { scormSet } = useScorm();

  function handleConcludeScorm() {
    //@ts-expect-error - Testing an error intentionally
    scormSet('cmi.core.lesson_KELVIN', LESSON_STATUS.completed);
  }

  return (
    <div className="w-full">
      <h4>ExampleDebugScorm.tsx</h4>
      <p> After setup the SCORM Package in LMS, click the button and see the console log</p>

      <Button onClick={handleConcludeScorm} variant="destructive">
        DEBUGAR
      </Button>
    </div>
  );
}
