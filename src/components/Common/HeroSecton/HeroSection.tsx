"use client";

import { useState } from "react";
import Image from "next/image";

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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export interface HomePageImage {
  id: string | number;
  desktopUrl?: string | null;
  mobileUrl?: string | null;
}

interface HeroSectionProps {
  images?: HomePageImage[];
}

const HeroSection = ({ images = [] }: HeroSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);

  const logos = [
    { label: "NAAC Accredited", src: nba },
    { label: "ISO 21001:2018", src: iso },
    { label: "ISO 9001:2015", src: iso2015 },
    { label: "NBA Accredited", src: nba2 },
    { label: "Affiliated to VTU", src: affiliated },
    { label: "NAAC Accredited", src: nba },
    { label: "ISO 21001:2018", src: iso },
    { label: "ISO 9001:2015", src: iso2015 },
    { label: "NBA Accredited", src: nba2 },
    { label: "Affiliated to VTU", src: affiliated },
  ];

  const logosMobile = [
    { label: "NAAC Accredited", src: nba },
    { label: "ISO 21001:2018", src: iso },
    { label: "ISO 9001:2015", src: iso2015 },
    { label: "NBA Accredited", src: nba2 },
    { label: "Affiliated to VTU", src: affiliated },
  ];

  // Map API images to include both desktop and mobile sources.
  // Fall back to desktop if a specific mobile image isn't provided.
  const backgroundSlides =
    images.length > 0
      ? images.map((img) => ({
          type: "api",
          desktopSrc: img.desktopUrl,
          mobileSrc: img.mobileUrl || img.desktopUrl,
        }))
      : [
          { type: "static", desktopSrc: bg3, mobileSrc: bg3 },
          { type: "static", desktopSrc: bg2, mobileSrc: bg2 },
        ];

  const handleDotClick = (index: number) => {
    if (swiperRef && (swiperRef as any).slideToLoop) {
      (swiperRef as any).slideToLoop(index);
      setActiveIndex(index);
    }
  };

  return (
    <section className="relative w-full h-[100vh] md:h-[80vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-[#144A72]">
      {/* Background Swiper */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          effect="fade"
          className="w-full h-full"
        >
          {backgroundSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              {/* Desktop Image (Hidden on mobile) */}
              {slide.desktopSrc && (
                <Image
                  src={slide.desktopSrc}
                  alt={`Desktop Background ${index + 1}`}
                  fill
                  className="object-cover hidden lg:block -translate-y-[90px] lg:translate-y-0"
                  priority={index === 0}
                />
              )}

              {/* Mobile Image (Hidden on md and up) */}
              {slide.mobileSrc && (
                <Image
                  src={slide.mobileSrc}
                  alt={`Mobile Background ${index + 1}`}
                  fill
                  className="object-cover block lg:hidden -translate-y-[90px] lg:translate-y-0"
                  priority={index === 0}
                />
              )}

              <div className="absolute bottom-0 left-0 right-0 h-[400px] md:h-[500px] bg-gradient-to-t from-[#f5f5f7] via-white/85 to-transparent z-[10] block md:hidden pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-[300px] md:h-[200px] bg-gradient-to-t from-[#fcfdff] via-white/85 to-transparent z-[10] hidden md:block pointer-events-none" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-0 left-0 right-0 h-2/4 lg:h-2/4 bg-gradient-to-b from-transparent to-white opacity-2000 pointer-events-none"></div>
      </div>

      {/* Main Content */}

      {/* Logos Carousel Container */}
      <div className="absolute bottom-4 left-0 right-0 mx-auto md:bottom-3 shadow-sm bg-[#f5f5f7] py-5 lg:bg-[#f5f5f7] rounded-xl md:p-4 xl:max-w-[90%] md:max-w-[90%] lg:max-5-7xl z-20 w-full">
        <Swiper
          modules={[Autoplay]}
          onSwiper={setSwiperRef as any}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 5, spaceBetween: 16 },
            768: { slidesPerView: 5, spaceBetween: 24 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
          }}
        >
          {logos.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-sm rounded-2xl w-full flex flex-col items-center py-5 px-2 min-h-[150px] h-full">
                {/* Fixed height wrapper for the image */}
                <div className="h-[70px] w-full flex items-center justify-center">
                  <Image src={item.src} alt={item.label} width={60} height={60} className="max-h-[60px] w-auto object-contain" priority />
                </div>
                {/* mt-auto pushes the text to the absolute bottom evenly */}
                <p className="text-sm font-medium text-center text-[#1a1a1a] mt-auto pt-2">{item.label}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-2 mt-4 relative z-50">
          {logosMobile.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`
                cursor-pointer rounded-full transition-all duration-300 opacity-100 h-[4px]
                ${activeIndex % 5 === index ? "bg-[#192f59] w-[36px]" : "bg-[#d1d5db] w-[30px]"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;