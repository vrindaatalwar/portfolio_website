"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by these companies",
  logos = [],
}: Logos3Props) => {
  return (
    <div className="py-0">
      {/* 
      // The user asked for "Tech Stack I use" section so we might want to control the heading 
      // from the parent component or just remove the container entirely if the parent handles layout.
      // However, per instructions, I'm pasting the component as requested but maybe slightly adapting structure if needed.
      // The instruction said "Copy-paste this component". I will keep it as close as possible but the usage of container and margins 
      // might need to be adjusted for the portfolio's Section/Container layout.
      // I'll keep the internal structure but remove the outer section padding to let the parent control spacing if needed, 
      // OR keeps it self contained.
      // Let's stick to the requested code structure but I will wrap it to ensure it fits.
      */}
      <div className="container flex flex-col items-center text-center">
        {heading && (
          <h1 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
            {heading}
          </h1>
        )}
      </div>
      <div className="pt-2 md:pt-4 lg:pt-8">
        <div className="relative mx-auto flex w-full max-w-full items-center justify-center lg:max-w-5xl">
          <Carousel
            className="w-full"
            opts={{ loop: true }}
            plugins={[
              AutoScroll({
                playOnInit: true,
                speed: 1,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
              })
            ]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export { Logos3 };