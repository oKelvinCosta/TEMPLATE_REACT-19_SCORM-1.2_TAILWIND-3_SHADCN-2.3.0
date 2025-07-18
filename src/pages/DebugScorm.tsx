import { Button } from "@/components/ui/button";
import { LESSON_STATUS, useScorm } from "@/contexts/ScormContext";

export default function DebugScorm() {
  
  const { scormSet} = useScorm();

  function handleConcludeScorm(){
    //@ts-expect-error  
    scormSet('cmi.core.lesson_KELVIN',LESSON_STATUS.completed);
  }


  return (
    <div className="w-full ">
      <h4>DebugScorm.tsx</h4>

      <Button onClick={handleConcludeScorm} variant="destructive">DEBUGAR</Button>
    
    </div>
  )
}



