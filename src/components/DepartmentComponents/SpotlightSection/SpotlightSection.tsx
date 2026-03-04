"use client";
import ContactFormModal from "@/components/Modal/Modal";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const TopperCard = ({ topper }: { topper: any }) => (
  // ADDED: `pb-8` to give the absolutely positioned button room at the bottom
  <div className="relative flex flex-col items-center bg-transparent mt-16 group h-full pb-5">
    {/* Card Border Container */}
    <div className="w-full border border-white/40 rounded-[30px] px-6 pb-8 pt-48 flex flex-col items-center min-h-[300px] relative">
      {/* Floating Image */}
   {topper.image && (
      <div className="absolute -top-12 w-52 h-52 rounded-2xl overflow-hidden shadow-lg bg-[#5AB9EA]">
        <img src={topper.image} alt={topper.name} className="w-full h-full object-cover object-top" />
      </div>
    )}

      {/* Content */}
      <div className="text-center space-y-2">
        <h3 className="text-base md:text-lg font-bold leading-tight">
          {topper.name.toLowerCase().replace(/\b\w/g, (char: string) => char.toUpperCase())}
        </h3>
        {topper.percentage && <p className="text-sm md:text-base  text-gray-300 font-semibold tracking-wide">{topper.percentage} CGPA</p>}
        <p className="text-sm text-gray-300 font-light">{topper.batch || "2024-25"}</p>
      </div>

      {/* Bottom Pill (VTU Honours) */}
      {topper.vtuText && (
        // ADDED: `z-10` to ensure it stacks properly above other elements
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 z-10">
          <div className="backdrop-blur-xl bg-[#031a40]/5 border border-white/50 text-white px-6 py-2 rounded-full whitespace-nowrap text-sm font-semibold shadow-xl">
            {topper.vtuText}
          </div>
        </div>
      )}
    </div>
  </div>
);

export default function SpotlightSection({ toppers }: { toppers: any[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="lg:py-16 text-white bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(/backgroundImages/department.webp)",
        backgroundColor: "#061329",
      }}
    >
      {/* Top Section */}
      <div className="max-w-7xl xl:max-w-[75%] mx-auto px-6 lg:px-32 text-center py-16 md:py-10">
        <h2 className="text-3xl md:text-[40px] leading-[1.1] lg2:text-5xl font-bold mb-4 lg:mb-4 xl:mb-4">In the Spotlight</h2>
        <p className="text-lg lg:text-[20.34px] mb-14 text-[#FFFFFFB2]">Honoring Our Toppers for Their Dedication & Excellence!</p>

        {/* Cards Grid or Carousel */}
        {toppers.length > 3 ? (
          <div className="mb-20">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 50 },
                1024: { slidesPerView: 3, spaceBetween: 50 },
                1280: { slidesPerView: 3, spaceBetween: 40 },
              }}
              loop={true}
              modules={[Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className="w-full pb-10" // Added pb-10 here to not cut off the pill
            >
              {toppers.map((topper, index) => (
                <SwiperSlide key={index} className="!h-auto">
                  <TopperCard topper={topper} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div
            className={`grid grid-cols-1 gap-[50px] xl:gap-10 mb-20 pb-10 ${
              toppers.length === 1
                ? "max-w-[350px] xl:max-w-[400px] mx-auto"
                : toppers.length === 2
                  ? "md:grid-cols-2 max-w-[700px] xl:max-w-[800px] mx-auto"
                  : "md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {toppers.map((topper, index) => (
              <TopperCard key={index} topper={topper} />
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-28 mb-5 space-y-8">
          <h2 className="md:text-[40px] text-[32px] leading-[1.1] lg2:text-5xl font-bold mb-4 max-w-2xl text-center mx-auto">
            Admissions Open for {new Date().getFullYear()}
          </h2>
          <p className="text-lg mb-6 max-w-2xl text-white/70 mx-auto">
            Book a one-on-one counseling session & get all your questions answered about admissions, programs & your future opportunities.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Apply Now"
            className="bg-white text-primary font-semibold py-2 px-5 md:text-lg rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Apply Now
          </button>
          <ContactFormModal isOpen={isOpen} onClose={setIsOpen} />
        </div>
      </div>
    </div>
  );
}
