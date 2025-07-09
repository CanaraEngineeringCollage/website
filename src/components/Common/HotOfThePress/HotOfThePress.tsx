"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import pressData from "../../../utils/hotOFThePressData/hotOfThePressData.json";
import Image from "next/image";
import Link from "next/link";

const HotOfThePress = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const autoplayDelay = 3000; // Swiper autoplay delay in ms
  return (
    <section className="lg:ml-20 xl:ml-60 md:py-24 py-10">
      <div className="lg:flex lg:justify-between md:pb-14 pb-10">
        <div className="flex text-black flex-col">
          <h1 className="text-3xl text-[#1D1D1F] md:text-left text-center md:text-[40px] lg2:text-5xl xl:text-6xl font-semibold font-sans  md:pb-6 tracking-[0.13px]">
            Hot off the Press
          </h1>
        </div>
        <div className="hidden md:block">
          <Link href="/media">
          <button
            aria-label="Explore More Campus Stories"
            className="text-black cursor-pointer font-semibold font-sans bg-[#c3d5ed] px-5 py-2 rounded-3xl mr-12"
          >
            Explore More Campus Stories
          </button>
          </Link>
        </div>
      </div>
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3.5, spaceBetween: 20 },
          1580: { slidesPerView: 3.8, spaceBetween: 1 },
        }}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {pressData?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-sm min-h-[55vh] md:min-h-[45vh] bg-white lg:min-h-[65vh] xl:min-h-auto   rounded-3xl overflow-hidden ">
              <div className="h-60 overflow-hidden">
                <Image
                  width={200}
                  height={200}
                  src={item.image} // Replace with your actual image path
                  alt="Techfest 2025"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 text-center">
                <p className="text-textGray text-[17px] mb-1">{item.date}</p>
                <h3 className="text-[27px] font-semibold font-sans text-black mb-2 line-clamp-2">{item.title}</h3>
                <button
                  
                  aria-label="Read More about Hot of the Press"
                  className="text-[#2997FF] inline-flex text-[17px] items-center hover:underline font-medium text-sm"
                >
                  Read More <MdKeyboardArrowRight className="ml-1 " />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="lg:flex lg:justify-between md:pb-14 pb-10">
        <div className="flex"></div>
        <div className="hidden md:block">
          <div className="flex mr-22 gap-6 mt-20">
            <button
              aria-label="Previous Slide"
              className="swiper-button-prev-custom relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-[#D2D2D7A3] flex items-center justify-center disabled:opacity-50"
            >
              <MdKeyboardArrowLeft />
            </button>
            <button
              aria-label="Next Slide"
              className="swiper-button-next-custom relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-[#D2D2D7A3] flex items-center justify-center disabled:opacity-50"
            >
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden  mt-12 flex ">
        <button aria-label="Explore More Campus Stories" className="text-black mx-auto cursor-pointer font-bold bg-[#c3d5ed] px-5 py-2 rounded-3xl">
          Explore More Campus Stories
        </button>
      </div>
    </section>
  );
};

export default HotOfThePress;
