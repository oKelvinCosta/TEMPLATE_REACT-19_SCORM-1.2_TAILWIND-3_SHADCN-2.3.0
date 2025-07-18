import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@shared/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@shared/components/ui/carousel";
import Img from "./Img";

/**
 * Componente que renderiza um card com um carrossel de imagens.
 *
 * @prop {Object[]} items - Array com as informações dos slides do carrossel.
 * @prop {string} items[].imgSrc - URL da imagem do slide.
 * @prop {ReactNode} items[].title - Titulo do slide.
 * @prop {ReactNode} items[].content - Conte do do slide.
 *
 * @returns Um carrossel com os slides informados.
 */

export default function CarouselCard({ items, layout = "1:2" }) {
  // Informação do Slide atual
  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const layoutMap = {
    "1:1": {
      grid: "grid-cols-1 md:grid-cols-2",
      img: "col-span-1",
      content: "col-span-1",
    },
    "1:2": {
      grid: "grid-cols-1 md:grid-cols-3",
      img: "col-span-1",
      content: "col-span-2",
    },
    "2:1": {
      grid: "grid-cols-1 md:grid-cols-3",
      img: "col-span-2",
      content: "col-span-1",
    },
  };

  const { grid, img: colsImg, content: colsContent } = layoutMap[layout];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi} className="w-full p-x-[80px]">
        <CarouselContent className="items-center">
          {items.map((item, key) => {
            return (
              <CarouselItem key={key}>
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <div className={`grid gap-2 ${grid}`}>
                      <Img
                        src={`${item.imgSrc}`}
                        className={`aspect-video md:aspect-video  mb-4 sm:mb-0 h-full  ${colsImg}`}
                      />
                      <div className={`flex items-center  ml-0 sm:ml-4 ${colsContent}`}>
                        <div>{item.content()}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <ul className="py-2 text-center text-sm flex space-x-2 justify-center">
          {Array.from({ length: count }).map((_, key) => {
            return (
              <li key={key}>
                <button
                  onClick={() => api.scrollTo(key)}
                  className={`rounded-full w-3 h-3 ${
                    key + 1 == current ? "bg-muted outline-0" : "bg-gray-800 border-0 "
                  }   transition-all`}
                ></button>
              </li>
            );
          })}
        </ul>
      </Carousel>
    </>
  );
}
