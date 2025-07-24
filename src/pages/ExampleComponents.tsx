import AccordionContained from "@/components/AccordionContained";
import CarouselCard from "@/components/CarouselCard";
import { ClickReveal, ClickRevealContent, ClickRevealHidden, ClickRevealTrigger } from "@/components/ClickReveal";
import Divisor from "@/components/Divisor";
import Img from "@/components/Img";
import QuestionRadio from "@/components/QuestionRadio";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, HorizontalCard } from "@/components/ui/card";
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

  // Customizable carousel data - Easy to modify images and text
  const customCarouselData = [
    {
      imgSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop",
      title: "Technology Innovation",
      content: () => (
        <div>
          <h5 className="text-xl font-semibold mb-2">Advanced Solutions</h5>
          <p>Discover cutting-edge technology that transforms the way we work and live. Innovation at its finest.</p>
        </div>
      )
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop",
      title: "Team Collaboration",
      content: () => (
        <div>
          <h5 className="text-xl font-semibold mb-2">Working Together</h5>
          <p>Effective teamwork drives success. Learn how collaboration can boost productivity and creativity.</p>
        </div>
      )
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      title: "Data Analytics",
      content: () => (
        <div>
          <h5 className="text-xl font-semibold mb-2">Smart Insights</h5>
          <p>Transform raw data into actionable insights. Make informed decisions with powerful analytics tools.</p>
        </div>
      )
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
      title: "Future Growth",
      content: () => (
        <div>
          <h5 className="text-xl font-semibold mb-2">Scaling Success</h5>
          <p>Plan for tomorrow with strategic growth initiatives. Build sustainable foundations for long-term success.</p>
        </div>
      )
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
    content: () => <p>Yes. It adheres to the WAI-ARIA design pattern.</p>
  },
  {
    title: "Is it styled?",
    content: () => <p>Kelvin esteve aqui</p>
  },
  {
    title: "Is it animated?",
    content: () => <p>Yes. It's animated by default, but you can disable it if you prefer.</p>
  },
];

// Accordion registration moved to builder-registry.tsx

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

        {/* Custom Carousel with Editable Content */}
        <div className="border-b p-4 gap-4 flex flex-col">
          <h4>Custom Carousel - Editable Content</h4>
          <div className="space-y-4">
            <div>
              <h6 className="text-sm text-muted-foreground mb-2">Layout 1:2 (Image:Content)</h6>
              <CarouselCard items={customCarouselData} layout="1:2" />
            </div>
            <div>
              <h6 className="text-sm text-muted-foreground mb-2">Layout 2:1 (Content:Image)</h6>
              <CarouselCard items={customCarouselData} layout="2:1" />
            </div>
            <div>
              <h6 className="text-sm text-muted-foreground mb-2">Layout 1:1 (Equal Split)</h6>
              <CarouselCard items={customCarouselData} layout="1:1" />
            </div>
          </div>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <h6 className="font-semibold mb-2">How to customize:</h6>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Change <code>imgSrc</code> to update images</li>
              <li>• Modify <code>title</code> for slide titles</li>
              <li>• Edit <code>content()</code> function to change text and layout</li>
              <li>• Use different <code>layout</code> props: "1:1", "1:2", "2:1"</li>
            </ul>
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
