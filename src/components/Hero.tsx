/* eslint-disable @next/next/no-img-element */
"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero: React.FC = () => {
  return (
    <section className="mx-auto max-w-6xl w-full">
      <div className="flex items-center justify-between py-4 px-8">
        <div className="flex items-center gap-16">
          <div className="flex flex-col items-center justify-center h-full">
            <Image
              src="/menu.svg"
              alt="logo"
              width={32}
              height={32}
              className="my-6"
            />
            <p className="">Sell phone</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image src="/sellphone.svg" alt="logo" width={80} height={80} />
            Sell phone
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image src="/buyphone.svg" alt="logo" width={80} height={80} />
            Buy phone
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image src="/sellgadget.svg" alt="logo" width={80} height={80} />
            Sell Gadget
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image src="/b2b.svg" alt="logo" width={80} height={80} />
            B2B
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Image src="/selectcity.svg" alt="logo" width={76} height={76} />
          Select City
        </div>
      </div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="w-full h-[300px] rounded-md mt-4">
          <CarouselItem className="pl-8">
            <img
              src="/banner.svg"
              className="object-cover rounded-md"
              alt="banner"
            />
          </CarouselItem>
          <CarouselItem className="pl-8">
            <img
              src="/banner2.svg"
              className="object-cover rounded-md"
              alt="banner"
            />
          </CarouselItem>
          <CarouselItem className="pl-8">
            <img
              src="/banner3.svg"
              className="object-cover rounded-md"
              alt="banner"
            />
          </CarouselItem>
          <CarouselItem className="pl-8">
            <img
              src="/banner4.svg"
              className="object-cover rounded-md"
              alt="banner"
            />
          </CarouselItem>
          <CarouselItem className="pl-8">
            <img
              src="/banner5.svg"
              className="object-cover rounded-md"
              alt="banner"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="h-12 w-12 -left-4" />
        <CarouselNext className="h-12 w-12 -right-4" />
      </Carousel>
    </section>
  );
};

export default Hero;
