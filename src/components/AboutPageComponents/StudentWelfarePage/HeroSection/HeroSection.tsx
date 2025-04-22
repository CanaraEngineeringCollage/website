import Image from "next/image";
import React from "react";
import bgImage from "../../../../../public/studentWelfarePage/hero.png";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] md:h-[150vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={bgImage} alt="Background 1" className="object-cover w-full h-full" priority />

        {/* Mobile Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-white via-white/85 to-transparent z-[10] md:hidden" /> 

        {/* Desktop Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[220px] bg-gradient-to-t from-white via-white/85 via-38% to-transparent z-[10] hidden md:block" />
      </div>

      <div className="absolute top-28 md:top-28 max-w-4xl mx-auto text-white px-4 z-10">
        <h2 className="text-[40px] md:text-[77px] leading-[50px] lg:leading-[1] font-extrabold text-white">
          Student Welfare <br />Office
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
