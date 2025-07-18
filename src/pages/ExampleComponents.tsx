import Img from "@/components/Img";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function ExampleComponents() {
  return (
    <div>
        <h4>ExampleComponents.tsx</h4>

        {/* Colors */}
        <div className="border-b p-4 gap-4 flex">
          <h4>Colors</h4>
          <div className="flex gap-2">
            <div className="w-32 h-20 p-2 bg-primary text-primary-foreground"><small>.bg-primary</small></div>
            <div className="w-32 h-20 p-2 bg-secondary"><small>.bg-secondary</small></div>
            <div className="w-32 h-20 p-2 bg-accent"><small>.bg-accent</small></div>
            <div className="w-32 h-20 p-2 bg-muted"><small>.bg-muted</small></div>
            <div className="w-32 h-20 p-2 bg-info"><small>.bg-info</small></div>
            <div className="w-32 h-20 p-2 bg-success"><small>.bg-success</small></div>
            <div className="w-32 h-20 p-2 bg-warning"><small>.bg-warning</small></div>
            <div className="w-32 h-20 p-2 bg-destructive"><small>.bg-destructive</small></div>
          </div>
        </div>

        {/* Typography */}
        <div className="border-b p-4 gap-4 ">
          <h4>Typography</h4>
          <h1>h1 Title</h1>
          <h2>h2 Title</h2>
          <h3>h3 Title</h3>
          <h4>h4 Title</h4>
          <h5>h5 Title</h5>
          <h6>h6 Title</h6>
          <p>Paragraph</p>
          <small>Small</small>
        </div>

        {/* Button */}
        <div className="border-b p-4 gap-4 flex">
          <h4>Button</h4>
          <Button variant="default">Botão</Button>
          <Button variant="destructive">Botão</Button>
          <Button variant="outline">Botão</Button>
          <Button variant="secondary">Botão</Button>
          <Button variant="ghost">Botão</Button>
          <Button variant="link">Botão</Button>
        </div>

        {/* Card */}
        <div className="border-b p-4 gap-4 flex">
          <h4>Card</h4>
          <Card className="max-w-[300px]">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <Img src={`./imgs/core/placeholder.png`} className={``} />
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>

        {/* Accordion */}
        <div className="border-b p-4 gap-4 flex">
          <h4>Accordion</h4>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Accordion Trigger</AccordionTrigger>
              <AccordionContent>Accordion Content</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Accordion Trigger</AccordionTrigger>
              <AccordionContent>Accordion Content</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Accordion Trigger</AccordionTrigger>
              <AccordionContent>Accordion Content</AccordionContent>
            </AccordionItem>              
          </Accordion>
        </div>

        {/* Carousel */}
        <div className="border-b p-4 gap-4 flex">
          <h4>Carousel</h4>
         
        </div>

        {/* Alert */}
        <div className="border-b p-4 gap-4 flex">
          <h4>Alert</h4>
         
        </div>


        {/* Divisors */}
        <div className="border-b p-4 gap-4 flex">
          <h4>Divisors</h4>
         
        </div>

        {/* Questions */}
        <div className="border-b p-4 gap-4 flex">
          <h4>Questions</h4>
         
        </div>
    </div>
  )
}
