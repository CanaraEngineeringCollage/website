'use client';

import { useState } from 'react';
import Image from 'next/image';

// Images
import nirf from "../../../../public/svgs/heropageLogos/1.svg"; 
import iso from "../../../../public/svgs/heropageLogos/6.webp";
import nba from "../../../../public/svgs/heropageLogos/3.svg";
import nba2 from "../../../../public/svgs/heropageLogos/4.svg";
import iso2015 from "../../../../public/svgs/heropageLogos/7.svg";
import affiliated from "../../../../public/svgs/heropageLogos/5.svg";
import bg3 from "../../../../public/herosectionImages/hero3.webp";
import bg2 from "../../../../public/herosectionImages/heroBg.webp";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);

  // 10 Items - Used for the Carousel content (Desktop needs more items for smooth loop)
  const logos = [
    // { label: 'NIRF Recognised', src: nirf },
    { label: 'NAAC Accredited', src: nba },
    { label: 'ISO 21001:2018', src: iso },
    { label: 'ISO 9001:2015', src: iso2015 },
    { label: 'NBA Accredited', src: nba2 },
    { label: 'Affiliated to VTU', src: affiliated },
    // { label: 'NIRF Recognised', src: nirf },
    { label: 'NAAC Accredited', src: nba },
    { label: 'ISO 21001:2018', src: iso },
    { label: 'ISO 9001:2015', src: iso2015 },
    { label: 'NBA Accredited', src: nba2 },
    { label: 'Affiliated to VTU', src: affiliated },
  ];

  // 5 Items - Used ONLY to generate the 5 Bullets
  const logosMobile = [
    { label: 'NAAC Accredited', src: nba },
    { label: 'ISO 21001:2018', src: iso },
    { label: 'ISO 9001:2015', src: iso2015 },
    { label: 'NBA Accredited', src: nba2 },
    { label: 'Affiliated to VTU', src: affiliated }
  ];

  const backgroundImages = [bg3, bg2];

  const handleDotClick = (index) => {
    if (swiperRef) {
      swiperRef.slideToLoop(index);
      setActiveIndex(index);
    }
  };

  return (
    <section className="relative w-full h-[90vh] md:h-[120vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      
      {/* Background Swiper */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          effect="fade"
          className="w-full h-full"
        >
          {backgroundImages.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
                alt={`Background ${index + 1}`}
                className='object-cover -translate-y-[90px] lg:translate-y-0 w-full h-full'
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-[400px] md:h-[500px] bg-gradient-to-t from-[#f5f5f7] via-white/85 to-transparent z-[10] block md:hidden pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-[300px] md:h-[200px] bg-gradient-to-t from-[#fcfdff] via-white/85 to-transparent z-[10] hidden md:block pointer-events-none" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-0 left-0 right-0 h-2/4 lg:h-2/4 bg-gradient-to-b from-transparent to-white opacity-2000 pointer-events-none"></div>
      </div>

      {/* Main Content */}
      <div className="absolute top-10 md:top-20 max-w-4xl mx-auto text-white px-2 z-10">
        <h2 className="text-[28px] md:text-4xl lg:text-6xl font-bold">
          Canara Engineering College
        </h2>
        <h1 className="text-xl md:text-[32px] font-light text-[#F5F5F7] mt-2">
          Pioneering Innovation in Tech Learning
        </h1>
      </div>

      {/* Logos Carousel Container */}
      <div className="absolute bottom-4 left-0 right-0 mx-auto md:bottom-3 shadow-sm bg-[#f5f5f7] py-5 lg:bg-[#f5f5f7] rounded-xl md:p-4 xl:max-w-[90%] md:max-w-[90%] lg:max-5-7xl z-20 w-full">
        <Swiper
          modules={[Autoplay]}
          onSwiper={setSwiperRef}
          // Use realIndex % 5 so that slide 6 acts like slide 1
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          // Changed source to 'logos' (10 items) for content
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 5, spaceBetween: 16 },
            768: { slidesPerView: 5, spaceBetween: 24 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
          }}
        >
          {logos.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-sm rounded-2xl w-full flex flex-col items-center justify-center min-h-[150px]">
                <div className="mb-4">
                  <Image src={item.src} alt={item.label} width={60} height={60} />
                </div>
                <p className="text-sm font-medium text-center text-[#1a1a1a]">
                  {item.label}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CUSTOM MANUAL PAGINATION - ONLY 5 BULLETS */}
        <div className="flex justify-center gap-2 mt-4 relative z-50">
          {/* Map over logosMobile (5 items) to create exactly 5 buttons */}
          {logosMobile.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              // Check modulo 5 so index 0 and 5 both highlight the first dot
              className={`
                cursor-pointer rounded-full transition-all duration-300 opacity-100 h-[4px]
                ${(activeIndex % 5) === index 
                  ? 'bg-[#192f59] w-[36px]' 
                  : 'bg-[#d1d5db] w-[30px]'
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;