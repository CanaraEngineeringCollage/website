"use client";

import Image from "next/image";
import bg1 from "../../../../../public/aboutPageImages/campusLegacy/campus.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] md:h-[120vh]  flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={bg1} alt="Background 1" className="object-cover w-full h-[80vh] md:h-full" priority />

        {/* Mobile Gradient */}

        {/* Desktop Gradient */}
        <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-black/60 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-[300px] md:h-[1000px] bg-gradient-to-t from-[#fcfdff] via-white/85 via-50% to-transparent z-[10] md:hidden" />
        <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[500px] bg-gradient-to-t from-[#fcfdff] via-transparent to-transparent z-[10] hidden md:block" />
      
      </div>

      <div className="absolute top-28 md:top-28 max-w-4xl mx-auto text-white px-4 z-10">
        <h2 className="text-[32px] md:text-[77px] leading-[50px] md:leading-[1] font-bold text-white">
        A Campus Designed<br />
        for your Success
        </h2>
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-white via-white/85 to-transparent z-[10] md:hidden" />
      <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-white via-white/85 to-transparent z-[10] md:hidden" />
      <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-white via-white/85 to-transparent z-[10] md:hidden" />
     */}
    </section>
  );
};

export default HeroSection;
