"use client";

import Image from "next/image";
import bg1 from "../../../../../public/aboutPageImages/campusLegacy/campus-black-and-white.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] md:h-[120vh]  flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Swiper with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image src={bg1} alt={`Background Image`} className="object-cover w-full h-full" priority />
        <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-black/60 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] md:h-[0px] bg-gradient-to-t from-white via-white/85 via-50% to-transparent z-[10] md:hidden" />
        <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[10px] bg-gradient-to-t from-white via-transparent to-transparent z-[10] hidden md:block" />

        <div className="absolute bottom-0 left-0 right-0 h-2/4 lg:h-1/4 bg-gradient-to-b from-transparent to-white opacity-2000"></div>
      </div>
    </section>
  );
};

export default HeroSection;
