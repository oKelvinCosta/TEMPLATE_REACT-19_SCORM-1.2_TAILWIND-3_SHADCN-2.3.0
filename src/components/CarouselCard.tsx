import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import React from 'react';
import Img from './Img';

interface CarouselCardProps {
  items: {
    imgSrc: string;
    title: React.ReactNode;
    content: () => React.ReactNode;
  }[];
  layout?: '1:1' | '1:2' | '2:1';
}

export default function CarouselCard({ items, layout = '1:2', ...props }: CarouselCardProps) {
  // Info current slide
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const layoutMap = {
    '1:1': {
      grid: 'grid-cols-1 md:grid-cols-2',
      img: 'col-span-1',
      content: 'col-span-1',
    },
    '1:2': {
      grid: 'grid-cols-1 md:grid-cols-3',
      img: 'col-span-1',
      content: 'col-span-2',
    },
    '2:1': {
      grid: 'grid-cols-1 md:grid-cols-3',
      img: 'col-span-2',
      content: 'col-span-1',
    },
  };

  const { grid, img: colsImg, content: colsContent } = layoutMap[layout];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="py-3">
      <Carousel setApi={setApi} className="w-full" {...props}>
        <CarouselContent className="items-center">
          {items.map((item, key) => {
            return (
              <CarouselItem key={key}>
                <Card className="p-6">
                  <CardContent className="flex items-center justify-center">
                    <div className={`grid gap-2 ${grid}`}>
                      <Img
                        src={`${item.imgSrc}`}
                        className={`mb-4 aspect-video h-full sm:mb-0 md:aspect-video ${colsImg}`}
                      />
                      <div className={`ml-0 flex items-center sm:ml-4 ${colsContent}`}>
                        <div className="flex flex-col">
                          <h3>{item.title}</h3>
                          <div>{item.content()}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        {/* Butons */}
        <CarouselPrevious className="left-auto right-10 top-[calc(100%+0.5rem)] translate-y-0" />
        <CarouselNext className="right-0 top-[calc(100%+0.5rem)] translate-y-0" />
      </Carousel>
      {/* Bullets */}
      <div className="mt-4 flex items-center justify-start gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn('h-3.5 w-3.5 rounded-full border-2', {
              'border-primary': current === index + 1,
            })}
          />
        ))}
      </div>
    </div>
  );
}
