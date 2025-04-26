import Image from "next/image";
import React from "react";
import bgImage from "../../../../../public/campusFacilitiesPageImages/studentLifePageImages/bgImage.png";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] md:h-[120vh]   flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={bgImage} alt="Background 1" className="object-cover w-full h-[80vh] md:h-[120vh]" priority />

      <div className="absolute top-[80] left-0 z-50 gap-5 flex flex-col  items-center w-full h-full text-center text-white">
<h1 className="text-white font-bold text-[40px] lg:text-[77px] leading-[1.2]">A Thriving Student <br /> Experience</h1>
<p className="text-[16px] lg:text-[21px] mx-3 text-white lg:max-w-[48%]">A brief overview highlighting the dynamic student life, fostering academic growth, innovation, & community engagement.</p>
      </div>
        <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-black/60 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] md:h-[40px] bg-gradient-to-t from-white via-white/85 via-50% to-transparent z-[10] " />
        <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[40px] bg-gradient-to-t from-white via-transparent to-transparent z-[10] hidden md:block" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-white via-white/85 to-transparent z-[10] md:hidden" />
      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-white via-white/85 to-transparent z-[10] md:hidden" />
      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-white via-white/85 to-transparent z-[10] md:hidden" />
    </section>
  );
};

export default HeroSection;
