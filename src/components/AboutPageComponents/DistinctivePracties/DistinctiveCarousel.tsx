"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/DistinctivePractiesImages/CHC.jpg",
  "/DistinctivePractiesImages/plastic.jpg",
  "/DistinctivePractiesImages/solar.jpg",
];

export default function DistinctiveCarousel() {
  return (
    <div className="relative w-full h-[100vh] flex flex-col justify-center items-center bg-white">
      {/* Swiper wrapper */}
      <div className="relative flex justify-center items-center">
        <Swiper
          modules={[Navigation]}
          slidesPerView={"auto"} // fixed width slides
          centeredSlides={true}
          loop={true}
          spaceBetween={30}
          speed={800}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="w-full flex justify-center"
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className="!w-[990px] flex justify-center"
            >
              <div className="w-[990px] h-[564px] overflow-hidden rounded-xl shadow-md bg-gray-200">
                <Image
                  src={src}
                  alt={`slide-${index}`}
                  width={990}
                  height={564}
                  className="w-[990px] h-[564px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Buttons - placed outside, bottom-right */}
      <div className="absolute bottom-6 right-6 flex gap-3 z-10">
        <button className="custom-prev w-10 h-10 flex items-center justify-center rounded-full bg-[#D2D2D7A3] text-[#0000009e] shadow-md  hover:bg-gray-100 transition">
          <ChevronLeft className="h-7 w-7 font-extrabold"/>
        </button>
        <button className="custom-next w-10 h-10 flex items-center justify-center rounded-full bg-[#D2D2D7A3] text-[#0000009e] shadow-md  hover:bg-gray-100 transition">
          <ChevronRight className="h-7 w-7 font-extrabold"/>
        </button>
      </div>
    </div>
  );
}
