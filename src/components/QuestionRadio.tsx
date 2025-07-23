import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Alert, AlertTitle } from "./ui/alert";

interface QuestionRadioProps {
    enunciation: string;
    options: { text: string; value: string }[];
    correctAnswer: string;
}

type FormData = {
    answer: string;
}

  export default function QuestionRadio({ enunciation, options, correctAnswer }: QuestionRadioProps) {

    // Create a form instance
    const form = useForm<FormData>({
        defaultValues: {
            answer: ""
        }
    });

    // Stay monitoring the answer field
    const selectedAnswer = form.watch("answer");
    const isCorrect = selectedAnswer === correctAnswer;

    // Function to personalize the radio input when user select an option
    function radioVisualFeedback(value: string) {
        const isSelected = selectedAnswer === value;
        const isRight = value === correctAnswer;

        if (!isSelected) return "flex items-center gap-2 p-1 pl-2 rounded-md";
        
        // Return the classes for the correct and wrong answer
        return cn(
            "flex items-center gap-2 p-2 rounded-md transition-colors",
            isRight 
                ? "border-success border dark:border-green-900/20" 
                : "border-destructive border dark:border-red-900/20"
        );
    }


    return (
        <Form {...form}>
            <form className="space-y-2">
                <h4 className="text-lg font-medium">{enunciation}</h4>
                
                <FormField
                    control={form.control}
                    name="answer"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
                                    {options.map((option) => (
                                        <FormItem 
                                            key={option.value} 
                                            className={cn("flex items-center ", radioVisualFeedback(option.value))}
                                        >
                                            <FormControl>
                                                    <RadioGroupItem value={option.value} tabIndex={0} />
                                            </FormControl>
                                            <FormLabel className="font-normal cursor-pointer !m-0">
                                                    {option.text}
                                            </FormLabel>
                                        </FormItem>
                                    ))}
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Feedback */}
                {selectedAnswer && (
                    <Alert variant={isCorrect ? "success" : "destructive"}>
                        <AlertTitle>
                            {isCorrect 
                                ? "Parabéns! Você acertou." 
                                : "Ops. Tente novamente"}
                        </AlertTitle>
                    </Alert>
                )}
            </form>
        </Form>
    );
}


           


// Example:
// const Q = [
//     {
//       enunciation:"Qual é a capital do Brasil?",
//       options:[
//           { text:"Brasília", value:"br"},
//           { text:"São Paulo", value:"sp"},
//           { text:"Rio de Janeiro", value:"rj"},
//           { text:"Belo Horizonte", value:"bh"},
//       ],
//       correctAnswer:"br"
//   },
//   {
//     enunciation:"Qual é a capital do Brasil?",
//     options:[
//         { text:"Brasília", value:"br"},
//         { text:"São Paulo", value:"sp"},
//         { text:"Rio de Janeiro", value:"rj"},
//         { text:"Belo Horizonte", value:"bh"},
//     ],
//     correctAnswer:"br"
//   }
//   ];

//   return (
//     <div className="border-b p-4 gap-4 flex">
//             <h4>Questions Kelvin</h4>
//             {
//               Q.map((question, index) => (
//                 <QuestionRadio
//                   
//                   enunciation={question.enunciation}
//                   options={question.options}
//                   correctAnswer={question.correctAnswer}
//                 />
//               ))
//             }
//           </div>
//   )