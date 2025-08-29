"use client";

import Image from "next/image";
import bg1 from "../../../../../public/aboutPageImages/campusLegacy/aboutcec.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Image with Smoother Gradients */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg1}
          alt="Background Image"
          className="object-cover w-full h-full"
          priority
        />

        {/* Top gradient for overlay effect */}

        {/* Bottom gradient for mobile */}
        <div className="absolute bottom-0 left-0 right-0 h-[200px] md:h-0 bg-gradient-to-t from-white via-white/70 to-transparent z-10 md:hidden" />

        {/* Bottom gradient for desktop */}
        <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[270px] bg-gradient-to-t from-white via-white/10 to-transparent  hidden md:block" />

        {/* Additional subtle bottom fade */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-1/2 lg:h-1/4 bg-gradient-to-b from-transparent via-white/30 to-white z-10" /> */}
      </div>
    </section>
  );
};

export default HeroSection;
