"use client";

import React, { useRef } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import { cn } from "../../lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

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
  // Use useRef to maintain a single instance of the AutoScroll plugin
  // avoiding any re-initialization during component lifecycle.
  const plugin = useRef(
    AutoScroll({
      playOnInit: true,
      speed: 0.8,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    })
  );

  return (
    <div className="py-2">
      <div className="pt-0">
        {/* Added transform-gpu and translateZ(0) to promote to layer and avoid tearing with parent content */}
        <div className="relative mx-auto flex items-center justify-center w-full [transform:translateZ(0)]">
          <Carousel
            opts={{ loop: true, dragFree: true }}
            plugins={[plugin.current]}
            className="w-full"
          >
            {/* Added will-change-transform to hint browser about movement */}
            <CarouselContent className="-ml-4 items-center will-change-transform">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="pl-8 basis-auto"
                >
                  <div className="flex items-center gap-3 select-none">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={cn("object-contain flex-shrink-0", logo.className)}
                      loading="lazy"
                    />
                    <span className="text-sm font-medium text-text-secondary whitespace-nowrap">
                      {logo.description}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </div>
  );
};

export { Logos3 };