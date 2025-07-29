import AccordionContained from '@/components/AccordionContained';
import CarouselCard from '@/components/CarouselCard';
import {
  ClickReveal,
  ClickRevealContent,
  ClickRevealHidden,
  ClickRevealTrigger,
} from '@/components/ClickReveal';
import Divisor from '@/components/Divisor';
import Img from '@/components/Img';
import QuestionRadio from '@/components/QuestionRadio';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  HorizontalCard,
} from '@/components/ui/card';
import { Terminal } from 'lucide-react';

export default function ExampleComponents() {
  const itemsCarouselCard = [
    {
      imgSrc: './imgs/core/placeholder.png',
      title: 'Title',
      content: () => (
        <p>
          Slide 1 - Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis
          volutpat erat hendrerit non. Nam vulputate dapibus. Sapien in monti palavris qui num
          significa nadis i pareci latim. A ordem dos tratores não altera o pão duris. Aenean
          aliquam molestie leo, vitae iaculis nisl.
        </p>
      ),
    },
    {
      imgSrc: './imgs/core/placeholder.png',
      title: 'Title',
      content: () => (
        <p>
          Slide 2 - Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis
          volutpat erat hendrerit non. Nam vulputate dapibus. Sapien in monti palavris qui num
          significa nadis i pareci latim. A ordem dos tratores não altera o pão duris. Aenean
          aliquam molestie leo, vitae iaculis nisl.
        </p>
      ),
    },
    {
      imgSrc: './imgs/core/placeholder.png',
      title: 'Title',
      content: () => (
        <p>
          Slide 3 - Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis
          volutpat erat hendrerit non. Nam vulputate dapibus. Sapien in monti palavris qui num
          significa nadis i pareci latim. A ordem dos tratores não altera o pão duris. Aenean
          aliquam molestie leo, vitae iaculis nisl.
        </p>
      ),
    },
  ];

  const Q = [
    {
      enunciation: 'Qual é a capital do Brasil?',
      options: [
        { text: 'Brasília', value: 'br' },
        { text: 'São Paulo', value: 'sp' },
        { text: 'Rio de Janeiro', value: 'rj' },
        { text: 'Belo Horizonte', value: 'bh' },
      ],
      correctAnswer: 'br',
    },
    {
      enunciation: 'Qual é a capital do Brasil?',
      options: [
        { text: 'Brasília', value: 'br' },
        { text: 'São Paulo', value: 'sp' },
        { text: 'Rio de Janeiro', value: 'rj' },
        { text: 'Belo Horizonte', value: 'bh' },
      ],
      correctAnswer: 'br',
    },
  ];

  const AccordionItems = [
    {
      title: 'Is it accessible?',
      content: () => <p>Yes. It adheres to the WAI-ARIA design pattern.</p>,
    },
    {
      title: 'Is it styled?',
      content: () => <p>Kelvin esteve aqui</p>,
    },
    {
      title: 'Is it animated?',
      content: () => <p>Yes. It's animated by default, but you can disable it if you prefer.</p>,
    },
  ];

  // Accordion registration moved to builder-registry.tsx

  return (
    <div>
      <h4>ExampleComponents.tsx</h4>

      {/* Colors */}
      <div className="flex gap-4 border-b p-4">
        <h4>Colors</h4>
        <div className="flex flex-wrap gap-2">
          <div className="h-20 w-32 bg-gray-700 p-2 text-primary-foreground">
            <small>.bg-gray-700</small>
          </div>
          <div className="h-20 w-32 bg-gray-400 p-2">
            <small>.bg-gray-400</small>
          </div>
          <div className="h-20 w-32 bg-gray-200 p-2">
            <small>.bg-gray-200</small>
          </div>
          <div className="h-20 w-32 bg-gray-50 p-2">
            <small>.bg-gray-50</small>
          </div>
          <div className="h-20 w-32 bg-primary p-2 text-primary-foreground">
            <small>.bg-primary</small> <br />
            <small>.bg-indigo-400</small>
          </div>
          <div className="h-20 w-32 bg-indigo-200 p-2">
            <small>.bg-indigo-200</small>
          </div>
          <div className="h-20 w-32 bg-secondary p-2">
            <small>.bg-secondary</small> <br />
            <small>.bg-indigo-200</small>
          </div>
          <div className="bg-azure-200 h-20 w-32 p-2">
            <small>.bg-azure-200</small>
          </div>
          <div className="bg-coral-400 h-20 w-32 p-2 text-primary-foreground">
            <small>.bg-coral-400</small>
          </div>
          <div className="bg-coral-200 h-20 w-32 p-2">
            <small>.bg-coral-200</small>
          </div>

          <div className="h-20 w-32 bg-lime-400 p-2">
            <small>.bg-lime-400</small>
          </div>
          <div className="h-20 w-32 bg-lime-200 p-2">
            <small>.bg-lime-200</small>
          </div>
          <div className="h-20 w-32 bg-accent p-2">
            <small>.bg-accent</small>
          </div>
          <div className="h-20 w-32 bg-muted p-2">
            <small>.bg-muted</small>
          </div>

          <div className="h-20 w-32 bg-success p-2 text-success-foreground">
            <small>.bg-success</small>
          </div>
          <div className="h-20 w-32 bg-destructive p-2 text-destructive-foreground">
            <small>.bg-destructive</small>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="gap-4 border-b p-4">
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
      <div className="flex gap-4 border-b p-4">
        <h4>Button</h4>
        <Button variant="default">Botão</Button>
        <Button variant="destructive">Botão</Button>
        <Button variant="outline">Botão</Button>
        <Button variant="secondary">Botão</Button>
        <Button variant="ghost">Botão</Button>
        <Button variant="link">Botão</Button>
      </div>

      {/* Card */}
      <div className="flex gap-4 border-b p-4">
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
            <Img src={`./imgs/core/placeholder.png`} className={`max-h-[300px] max-w-[300px]`} />
            <div className="flex flex-col gap-2">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Card Content - Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna
                  nisi, quis volutpat erat hendrerit non.
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
      <div className="flex gap-4 border-b p-4">
        <h4>Accordion</h4>
        <AccordionContained items={AccordionItems} />
      </div>

      {/* Carousel */}
      <div className="flex gap-4 border-b p-4">
        <h4>Carousel</h4>
        <div>
          <p className="mb-0">Layout 1:2</p>
          <CarouselCard items={itemsCarouselCard} />
          <p className="mb-0">Layout 1:1</p>
          <CarouselCard items={itemsCarouselCard} layout="1:1" />
          <p className="mb-0">Layout 2:1</p>
          <CarouselCard items={itemsCarouselCard} layout="2:1" />
        </div>
      </div>

      {/* Alert */}
      <div className="flex gap-4 border-b p-4">
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
      <div className="flex gap-4 border-b p-4">
        <h4>Divisors</h4>
        <div>
          <Divisor place="top" marginDistance="60px" src="./imgs/divisor_1.webp" />
          <div className="bg-[#3d4d57] p-4">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dignissimos suscipit nam
              excepturi officia esse modi earum inventore laborum quidem, incidunt reprehenderit
              harum illo tempore nulla assumenda facere nihil dolores?
            </p>
          </div>

          <div className="bg-blue-500">
            <Divisor place="top" marginDistance="40px" src="./imgs/divisor_1.webp" />
            <div className="p-4">
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dignissimos suscipit
                nam excepturi officia esse modi earum inventore laborum quidem, incidunt
                reprehenderit harum illo tempore nulla assumenda facere nihil dolores?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Questions */}
      <div className="flex gap-4 border-b p-4">
        <h4>Questions</h4>
        {Q.map((question, index) => (
          <QuestionRadio
            key={index}
            enunciation={question.enunciation}
            options={question.options}
            correctAnswer={question.correctAnswer}
          />
        ))}
      </div>

      {/* Click Reveal */}
      <div className="flex gap-4 border-b p-4">
        <h4>Click Reveal</h4>

        <ClickReveal>
          <ClickRevealContent>
            <h4>Click Reveal</h4>
            <p>Este é meu conteúdo de teste para te provar, será que esse conteúdo se revelará?</p>
            <Img src={`./imgs/core/placeholder.png`} className="h-[80px] w-[80px]" isCircle />
          </ClickRevealContent>
          <ClickRevealTrigger>Reveal</ClickRevealTrigger>
          <ClickRevealHidden isRevealed={false}>
            <p>Este é meu conteúdo de teste para te provar, será que esse conteúdo se revelará?</p>
          </ClickRevealHidden>
        </ClickReveal>
      </div>

      {/* Image map */}
      <div className="flex gap-4 border-b p-4">
        <h4>Image map</h4>
      </div>

      {/* YouTube Video */}
      <div className="flex gap-4 border-b p-4">
        <h4>YouTube Video</h4>
      </div>

      {/* Video Box */}
      <div className="flex gap-4 border-b p-4">
        <h4>Video Box</h4>
      </div>
    </div>
  );
}
