"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

import { Autoplay } from "swiper/modules";
import "swiper/css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import pressData from "../../../utils/hotOFThePressData/hotOfThePressData.json";
import Image from "next/image";
interface DataItem {
  title: string;
  image: string;
  date: string;
  id: number;
}
const HotOfThePress = () => {
  const [data, setData] = useState<DataItem[]>(pressData);
  const swiperRef = useRef<SwiperType | null>(null);

  const autoplayDelay = 3000; // Swiper autoplay delay in ms
  return (
    <section className="lg:ml-20 xl:ml-60 py-24">
      <div className="lg:flex lg:justify-between md:pb-14 pb-10">
        <div className="flex">
          <h1 className="text-3xl md:text-left text-center md:text-[40px] lg2:text-5xl xl:text-6xl  font-bold text-black md:pb-6">
            Hot off the Press
          </h1>
        </div>
        <div className="hidden md:block">
          <button className="text-black cursor-pointer font-bold bg-[#c3d5ed] px-5 py-2 rounded-3xl">Explore More Campus Stories</button>
        </div>
      </div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
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
        {data?.map((item, index) => (
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
                <h3 className="text-[27px] font-bold text-black mb-2 line-clamp-2">{item.title}</h3>
                <a href="#" className="text-[#2997FF] inline-flex text-[17px] items-center hover:underline font-medium text-sm">
                  Read More <MdKeyboardArrowRight className="ml-1 " />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="md:hidden  mt-12 flex ">
        <button className="text-black mx-auto cursor-pointer font-bold bg-[#c3d5ed] px-5 py-2 rounded-3xl">Explore More Campus Stories</button>
      </div>
    </section>
  );
};

export default HotOfThePress;
