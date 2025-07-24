import AccordionContained from "@/components/AccordionContained";
import CarouselCard from "@/components/CarouselCard";
import { ClickReveal, ClickRevealContent, ClickRevealHidden, ClickRevealTrigger } from "@/components/ClickReveal";
import Divisor from "@/components/Divisor";
import Img from "@/components/Img";
import QuestionRadio from "@/components/QuestionRadio";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, HorizontalCard } from "@/components/ui/card";
import { Builder } from '@builder.io/react';
import { Terminal } from "lucide-react";

export default function ExampleComponents() {

  const itemsCarouselCard = [
    {
      imgSrc: "./imgs/core/placeholder.png",
      title: "Title",
      content: () => <p>Slide 1 - Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Sapien in monti palavris qui num significa nadis i pareci latim. A ordem dos tratores não altera o pão duris. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
    },
    {
      imgSrc: "./imgs/core/placeholder.png",
      title: "Title",
      content: () => <p>Slide 2 - Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Sapien in monti palavris qui num significa nadis i pareci latim. A ordem dos tratores não altera o pão duris. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
    },
    {
      imgSrc: "./imgs/core/placeholder.png",
      title: "Title",
      content: () => <p>Slide 3 - Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Sapien in monti palavris qui num significa nadis i pareci latim. A ordem dos tratores não altera o pão duris. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
    }
  ]

const Q = [
  {
    enunciation:"Qual é a capital do Brasil?",
    options:[
        { text:"Brasília", value:"br"},
        { text:"São Paulo", value:"sp"},
        { text:"Rio de Janeiro", value:"rj"},
        { text:"Belo Horizonte", value:"bh"},
    ],
    correctAnswer:"br"
},
{
  enunciation:"Qual é a capital do Brasil?",
  options:[
      { text:"Brasília", value:"br"},
      { text:"São Paulo", value:"sp"},
      { text:"Rio de Janeiro", value:"rj"},
      { text:"Belo Horizonte", value:"bh"},
  ],
  correctAnswer:"br"
}
];

const AccordionItems = [
  {
    title: "Is it accessible?",
    content: "<p>Yes. It adheres to the WAI-ARIA design pattern.</p>"
  },
  {
    title: "Is it styled?",
    content: "<p>Yes. It comes with default styles that matches the other components' aesthetic.</p>"
  },
  {
    title: "Is it animated?",
    content: "<p>Yes. It's animated by default, but you can disable it if you prefer.</p>"
  },
];

Builder.registerComponent(AccordionContained, {
  name: 'AccordionContained',
  inputs: [
    {
      name: 'items',
      type: 'list',
      subFields: [
        { name: 'title', type: 'string' },
        { name: 'content', type: 'richText' },
      ],
      defaultValue: [
        {
          title: 'O que é Builder.io?',
          content: '<p>É uma plataforma para criar páginas visualmente com integração ao seu código.</p>',
        },
        {
          title: 'Como integro com React?',
          content: '<p>Use <code>Builder.registerComponent</code> para tornar seus componentes editáveis.</p>',
        },
        {
          title: 'Posso adicionar mais itens?',
          content: '<p>Sim, diretamente no editor visual ao adicionar novos itens à lista.</p>',
        },
      ],
    },
  ],
});

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
        <div className="border-b p-4 gap-4 flex ">
        
          <h4>Card</h4>
          
            <div className="flex flex-col gap-4">
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
        

          <HorizontalCard>
            <Img src={`./imgs/core/placeholder.png`} className={`max-w-[300px] max-h-[300px]`} />
            <div className="flex flex-col gap-2">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Card Content - Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non.
                </p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </div>
          </HorizontalCard>

            </div>
        
          
     
        </div>

        {/* Accordion */}
        <div className="border-b p-4 gap-4 flex">
          <h4>Accordion</h4>
          <AccordionContained items={AccordionItems}/>
        </div>

        {/* Carousel */}
        <div className="border-b p-4 gap-4 flex">
          <h4>Carousel</h4>
          <div>
            <CarouselCard items={itemsCarouselCard} />
            <CarouselCard items={itemsCarouselCard} layout="1:1" />
            <CarouselCard items={itemsCarouselCard} layout="2:1" />
            <CarouselCard items={itemsCarouselCard} />
          </div>
        </div>

        {/* Alert */}
        <div className="border-b p-4 gap-4 flex">
          <h4>Alert</h4>
          <Alert variant="default">
            <Terminal />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components and dependencies to your app using the cli.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <Terminal />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components and dependencies to your app using the cli.
            </AlertDescription>
          </Alert>
          
        </div>


        {/* Divisors */}
        <div className="border-b p-4 gap-4 flex">
          <h4>Divisors</h4>
          <div>
          <Divisor place="top" marginDistance="60px" src="./imgs/divisor_1.webp" />
            <div className="bg-[#3d4d57] p-4">
              <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dignissimos suscipit nam excepturi officia esse modi earum inventore laborum quidem, incidunt reprehenderit harum illo tempore nulla assumenda facere nihil dolores?</p>
            </div>
           
            <div className="bg-blue-500 ">
               <Divisor place="top" marginDistance="40px" src="./imgs/divisor_1.webp" />
              <div className="p-4">
              <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dignissimos suscipit nam excepturi officia esse modi earum inventore laborum quidem, incidunt reprehenderit harum illo tempore nulla assumenda facere nihil dolores?</p>
              </div>
            </div>
          </div>
         
        </div>

        {/* Questions */}
        <div className="border-b p-4 gap-4 flex">
     
          <h4>Questions</h4>
          {
            Q.map((question, index) => (
              <QuestionRadio
                key={index}
                enunciation={question.enunciation}
                options={question.options}
                correctAnswer={question.correctAnswer}
              />
            ))
          }
     
     
        </div>

        {/* Click Reveal */}
        <div className="border-b p-4 gap-4 flex">
     
          <h4>Click Reveal</h4>
          
          <ClickReveal>
            <ClickRevealContent>
              <h4>Click Reveal</h4>
              <p>Este é meu conteúdo de teste para te provar, será que esse conteúdo se revelará?</p>
              <Img src={`./imgs/core/placeholder.png`}  className="w-[80px] h-[80px]" isCircle/>
            </ClickRevealContent>
            <ClickRevealTrigger>Reveal</ClickRevealTrigger>
            <ClickRevealHidden isRevealed={false}>
              <p>Este é meu conteúdo de teste para te provar, será que esse conteúdo se revelará?</p>
            </ClickRevealHidden>
          </ClickReveal>
     
     
        </div>

  
    </div>
  )
}
