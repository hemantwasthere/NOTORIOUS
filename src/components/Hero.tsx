/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface HeroProps {
  isBannerVisible?: boolean;
}

const Hero: React.FC<HeroProps> = ({ isBannerVisible = true }) => {
  return (
    <section className="mx-auto max-w-7xl w-full">
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
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="select-none"
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
          {/* <Button
            onClick={() => swiper.slidePrev()}
            className="h-12 w-12 -left-4 hidden md:flex"
          >
            <ChevronLeft />
          </Button>
          <Button
            onClick={() => swiper.slideNext()}
            className="h-12 w-12 -right-4 hidden md:flex"
          >
            <ChevronRight />
          </Button> */}
        </Swiper>
      )}
    </section>
  );
};

export default Hero;
