// Import Swiper React components
import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function CarouselImg() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="absolute">
          <Link href={"/product/alesis-nitro-electronic-drum-kit"} className="w-full">
            {/* <Image
              src="/DESKTOP_BANNER_01548df2-b261-475b-9e43-b4b15e4bbe99.webp"
              priority
              alt="home"
              fill
            /> */}
            <img src="/DESKTOP_BANNER_01548df2-b261-475b-9e43-b4b15e4bbe99.webp" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            href={
              "/product/fender-squier-sonic-mustang-hh-electric-guitar-pink"
            }
            className="w-full"
          >
            <img
              src="/desktop_banner_d8a29115-1ac8-4540-b2ff-31645ec2240f-01.jpeg"
              alt="home"
            />
          </Link>
        </SwiperSlide>
        {/* <SwiperSlide>
          <Image src="/home.jpg" priority alt="home" width={500} height={200} />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
