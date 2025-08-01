import Image from "next/image";
import React from "react";
import bgImage from "../../../../public/physicalEducationPageImages/bgImage.webp";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[85vh] lg:h-[155vh]  flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={bgImage} alt="Background 1" className="object-cover w-full h-[80vh] md:h-full" priority />

        {/* Mobile Gradient */}

        {/* Desktop Gradient */}
        <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-black/60 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] md:h-[1000px] bg-gradient-to-t from-white via-white/85 via-50% to-transparent z-[10] md:hidden" />
        <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[500px] bg-gradient-to-t from-white via-transparent to-transparent z-[10] hidden md:block" />
      </div>

      <div className="absolute top-20 md:top-28 lg:space-y-6  mx-auto text-white px-4 z-10">
        <h3 className="text-[#F5F5F7] text-[19px] md:text-[25px] leading-10 lg:leading-0 lg:text-[31px]">Department of Physical Education</h3>
        <h2 className="text-[32px] md:text-[40px]  lg:text-[77px] leading-[40px] md:leading-10 lg:leading-[1.1] font-extrabold text-white">
        Unleashing Potential <br />
        Through Fitness
        </h2>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-white via-white/85 to-transparent z-[10] md:hidden" />
    </section>
  );
};

export default HeroSection;
