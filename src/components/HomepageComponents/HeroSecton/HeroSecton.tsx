'use client';

import Image from 'next/image';
import bgImage from "../../../../public/backgroundImages/homeHeroBg.jpg";
import nirf from "../../../../public/svgs/heropageLogos/1.svg";
import iso from "../../../../public/svgs/heropageLogos/2.svg";
import nba from "../../../../public/svgs/heropageLogos/3.svg";
import nba2 from "../../../../public/svgs/heropageLogos/4.svg";
import affiliated from "../../../../public/svgs/heropageLogos/5.svg";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const HeroSection = () => {
  const logos = [
    { label: 'NIRF Recognised', src: nirf },
    { label: 'ISO 21001:2018', src: iso },
    { label: 'NBA Accredited', src: nba },
    { label: 'NBA Accredited', src: nba2 },
    { label: 'Affiliated to VTU', src: affiliated },
  ];

  return (
    <section className="relative w-full h-[90vh] md:h-[140vh] mt-28 flex flex-col justify-center items-center text-center px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Students learning with laptops"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-b from-transparent to-white opacity-90"></div>
      </div>

      {/* Main Content */}
      <div className="absolute top-10 md:top-20 max-w-4xl mx-auto text-white px-4">
        <h2 className="text-lg md:text-2xl font-light text-[#F5F5F7]">
          Canara Engineering College
        </h2>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mt-2">
          Pioneering Innovation in <br /> Tech Learning
        </h1>
      </div>

      {/* Logos Section */}
      <div className="absolute bottom-4 md:bottom-0 md:bg-white rounded-xl shadow-lg  md:p-4 w-[70%] md:w-full max-w-5xl">
        {/* Mobile - Swiper Carousel */}
        <div className="block md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {logos.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-xl rounded-2xl p-6 mx-auto !w-full flex flex-col items-center justify-center min-h-[200px]">
                  <div className="mb-4">
                    <Image src={item.src} alt={item.label} width={80} height={80} />
                  </div>
                  <p className="text-sm font-medium text-center text-[#1a1a1a]">
                    {item.label}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop - Grid Layout */}
        <div className="hidden md:grid md:grid-cols-5 gap-4 items-center">
          {logos.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image src={item.src} alt={item.label} width={50} height={50} />
              <p className="text-xs md:text-sm mt-2 text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
