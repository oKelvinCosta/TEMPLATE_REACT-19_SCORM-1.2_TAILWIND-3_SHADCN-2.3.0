import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { RandomId } from '@/lib/RandomId';

interface AccordionProps {
  items: {
    title: string;
    content: () => React.ReactNode;
  }[];
}

export default function AccordionContained({ items }: AccordionProps) {
  return (
    <Accordion type="single" collapsible className="my-3 w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={`${RandomId('accordionItem')}${index}`}
          value={`${RandomId('itemValue')}${index}`}
          className=":first:mt-0 mt-2 w-full rounded-md border bg-card text-card-foreground shadow-none [&_h3]:mb-0"
        >
          <AccordionTrigger className="px-4 text-lg">{item.title}</AccordionTrigger>
          <AccordionContent className="px-4">{item.content()}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

// interface AccordionProps {
//   items: {
//     title: string;
//     content: () => React.ReactNode
//     }[];
// }

// export default function AccordionContained(
//   { items }: AccordionProps
// ) {
//   return (
//     <Accordion
//       type="single"
//       collapsible
//       className="my-3 w-full"
//     >
//       {items.map((item, index) => (
//         <AccordionItem
//           key={`${RandomId('accordionItem')}${index}`}
//           value={`${RandomId('itemValue')}${index}`}
//           className="rounded-md bg-card text-card-foreground mt-2 :first:mt-0 shadow-none border w-full [&_h3]:mb-0"
//         >
//           <AccordionTrigger className="px-4 text-lg">{item.title}</AccordionTrigger>
//           <AccordionContent className="px-4">{item.content()}</AccordionContent>
//         </AccordionItem>
//       ))}
//     </Accordion>
//   );
// }
