"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Strap: React.FC = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={7}
      spaceBetween={20}
      className="mt-32 select-none"
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        stopOnLastSlide: false,
        waitForTransition: true,
      }}
      effect="slide"
    >
      <SwiperSlide>
        <Image src="realme.svg" width={120} height={120} alt="realme" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="google.svg" width={120} height={120} alt="google" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="poco.svg" width={120} height={120} alt="poco" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="lenovo.svg" width={120} height={120} alt="lenovo" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="infinix.svg" width={120} height={120} alt="infinix" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="iqoo.svg" width={120} height={120} alt="iqoo" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="honor.svg" width={120} height={120} alt="honor" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="techno.svg" width={120} height={120} alt="techno" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="nokia.svg" width={120} height={120} alt="nokia" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="motorola.svg" width={120} height={120} alt="motorola" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="samsung.svg" width={120} height={120} alt="samsung" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="oneplus.svg" width={120} height={120} alt="oneplus" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="mi.svg" width={120} height={120} alt="mi" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="oppo.svg" width={120} height={120} alt="oppo" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Strap;
