"use client";

import Image from "next/image";
import bg1 from "../../../../../public/aboutPageImages/campusLegacy/campus-colored.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] md:h-[120vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Image with Smoother Gradients */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg1}
          alt="Background Image"
          className="object-cover w-full h-full"
          priority
        />

        {/* Top gradient for overlay effect */}
        <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-black/70 via-black/40 to-transparent z-10" />

        {/* Bottom gradient for mobile */}
        <div className="absolute bottom-0 left-0 right-0 h-[200px] md:h-0 bg-gradient-to-t from-white via-white/70 to-transparent z-10 md:hidden" />

        {/* Bottom gradient for desktop */}
        <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[270px] bg-gradient-to-t from-white via-white/80 to-transparent z-10 hidden md:block" />

        {/* Additional subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 lg:h-1/4 bg-gradient-to-b from-transparent via-white/30 to-white z-10" />
      </div>
    </section>
  );
};

export default HeroSection;
