"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Types
interface Amenity {
  imageSrc: string;
  title: string;
  description: string;
  date?: string;
  alt?: string;
}

interface ModalContentType extends Amenity {
  id: string;
}

export default function DistinctiveCarousel() {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  // --- FIX: Force Autoplay Start on Mount ---
  useEffect(() => {
    if (swiperInstance && swiperInstance.autoplay) {
      // We use a small timeout to ensure this runs AFTER the initial React hydration cycle
      const timer = setTimeout(() => {
        // Force start
        swiperInstance.autoplay.start();
        
        // Safety check: if it's still not running (rare), force it again
        if (!swiperInstance.autoplay.running) {
          swiperInstance.autoplay.start();
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [swiperInstance]);
  // ------------------------------------------

  const images = [
    "/DistinctivePractiesImages/CHC.jpg",
    "/DistinctivePractiesImages/plastic.png",
    "/DistinctivePractiesImages/solar.jpg",
  ];

  return (
    <section className="mx-auto py-12 overflow-hidden flex justify-center items-center">
      <div className="grid grid-cols-1 gap-8 lg2:gap-16">
        {/* Left Side - Swiper */}
        <div className="relative w-full">
          <div className="relative">
            <Swiper
              onSwiper={setSwiperInstance}
              modules={[Navigation, Autoplay]}
              // Added onAfterInit to trigger start immediately upon Swiper readiness
              onAfterInit={(swiper) => {
                swiper.autoplay.start();
              }}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              autoplay={{ 
                delay: 2000, 
                disableOnInteraction: false,
                // waiting for transition to finish helps prevent the "long pause"
                waitForTransition: true 
              }}
              loop={true}
              centeredSlides={true}
              slidesPerView={1}
              spaceBetween={2}
              className="w-full"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  centeredSlides: true,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                  centeredSlides: true,
                },
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                  centeredSlides: true,
                },
              }}
            >
              {images.map((src, index) => (
                <SwiperSlide key={index} className="lg:!w-auto">
                  <div className="relative h-[200px] md:h-[350px] lg:h-[500px] w-full rounded-3xl overflow-hidden">
                    <img
                      src={src}
                      alt="carousel image"
                      width={700}
                      height={700}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex justify-end me-6 lg:justify-end items-center mt-12">
              <div className="flex gap-2 z-10">
                <button
                  aria-label="Previous Slide"
                  className="swiper-button-prev-custom relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                >
                  <MdKeyboardArrowLeft />
                </button>
                <button
                  aria-label="Next Slide"
                  className="swiper-button-next-custom relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                >
                  <MdKeyboardArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}