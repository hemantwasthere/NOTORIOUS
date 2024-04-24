/* eslint-disable @next/next/no-img-element */
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "./ui/button";

interface HeroProps {
  isBannerVisible?: boolean;
}

const Hero: React.FC<HeroProps> = ({ isBannerVisible = true }) => {
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="mx-auto max-w-7xl w-full relative">
      <div className="flex flex-wrap sm:flex-nowrap items-center sm:justify-between py-4 px-8 gap-6 sm:gap-0">
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-normal gap-6 sm:gap-16">
          <div className="flex flex-col items-center justify-center h-full">
            <Image
              src="/menu.svg"
              alt="logo"
              width={32}
              height={32}
              className="my-6"
            />
            <p className="">Menu</p>
          </div>

          <Link
            href="/sell-phone"
            className="h-fit w-fit flex flex-col items-center justify-center hover:scale-125 transition-all"
          >
            <Image src="/sellphone.svg" alt="logo" width={80} height={80} />
            Sell phone
          </Link>

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

          <div className="flex md:hidden flex-col items-center justify-center">
            <Image src="/selectcity.svg" alt="logo" width={76} height={76} />
            Select City
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center ">
          <Image src="/selectcity.svg" alt="logo" width={76} height={76} />
          Select City
        </div>
      </div>

      {isBannerVisible && (
        <>
          <Swiper
            navigation={false}
            modules={[Navigation]}
            className="select-none"
            ref={sliderRef}
          >
            <SwiperSlide>
              <img
                src="/banner.svg"
                className="w-full object-cover rounded-lg"
                alt="banner"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/banner2.svg"
                className="w-full object-cover rounded-lg"
                alt="banner"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/banner3.svg"
                className="w-full object-cover rounded-lg"
                alt="banner"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/banner4.svg"
                className="w-full object-cover rounded-lg"
                alt="banner"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/banner5.svg"
                className="w-full object-cover rounded-lg"
                alt="banner"
              />
            </SwiperSlide>
          </Swiper>

          <Button
            onClick={handlePrev}
            className="absolute top-[60%] p-0 z-10 -left-4 h-12 w-12 rounded-full bg-white text-black/60 shadow-md hover:bg-gray-200 border"
          >
            <ChevronLeft size={30} />
          </Button>
          <Button
            onClick={handleNext}
            className="absolute top-[60%] p-0 z-10 -right-4 h-12 w-12 rounded-full bg-white text-black/60 shadow-md hover:bg-gray-200 border"
          >
            <ChevronRight size={30} />
          </Button>
        </>
      )}
    </section>
  );
};

export default Hero;
