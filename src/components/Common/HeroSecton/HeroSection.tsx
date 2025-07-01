'use client';

import Image from 'next/image';
import bg1 from "../../../../public/herosectionImages/herosection1.webp";
import nirf from "../../../../public/svgs/heropageLogos/1.svg";
import iso from "../../../../public/svgs/heropageLogos/6.webp";
import nba from "../../../../public/svgs/heropageLogos/3.svg";
import nba2 from "../../../../public/svgs/heropageLogos/4.svg";
import affiliated from "../../../../public/svgs/heropageLogos/5.svg";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSection = () => {
  const logos = [
    { label: 'NIRF Recognised', src: nirf },
    { label: 'NBA Accredited', src: nba },
    { label: 'ISO 21001:2018', src: iso },
    { label: 'NBA Accredited', src: nba2 },
    { label: 'Affiliated to VTU', src: affiliated },
    { label: 'NIRF Recognised', src: nirf },
    { label: 'ISO 21001:2018', src: iso },
    { label: 'NBA Accredited', src: nba },
  ];

  const backgroundImages = [bg1, bg1, bg1];

  return (
    <section className="relative w-full h-[90vh] md:h-[120vh]  flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      
      {/* Background Swiper with Overlay */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          effect="fade"
          className="w-full h-full"
        >
          {backgroundImages.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
                alt={`Background ${index + 1}`}
               
                className='object-cover w-full h-full'
                priority
              />
            
               <div className="absolute bottom-0 left-0 right-0 h-[200px] md:h-[1000px] bg-gradient-to-t from-white via-white/85 via-50% to-transparent z-[10] md:hidden" />
               <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[1000px] bg-gradient-to-t from-white via-transparent to-transparent z-[10] hidden md:block" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-0 left-0 right-0 h-2/4 lg:h-2/4 bg-gradient-to-b from-transparent to-white opacity-2000"></div>
      </div>

      {/* Main Content */}
      <div className="absolute top-10 md:top-20 max-w-4xl mx-auto text-white px-4 z-10">
        <h2 className="text-xl md:text-[32px] font-light text-[#F5F5F7]">
          Canara Engineering College
        </h2>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mt-2 !font-stretch-semi-condensed">
          Pioneering Innovation in <br /> Tech Learning
        </h1>
      </div>

      {/* Logos Carousel */}
      <div className="absolute bottom-4 md:bottom-10 bg-[#f5f5f7] py-5 lg:bg-[#f5f5f7] rounded-xl shadow-lg md:p-4 w-[70%] md:w-full max-w-5xl z-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {logos.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-sm rounded-2xl mx-auto w-[80%] lg:w-[100%] flex flex-col items-center justify-center min-h-[150px]">
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
        {/* Custom pagination container with mt-32 */}
        <div className="custom-swiper-pagination mt-32 flex justify-center" />
      </div>
    </section>
  );
};

export default HeroSection;
