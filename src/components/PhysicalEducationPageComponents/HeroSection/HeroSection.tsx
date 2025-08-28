import Image from "next/image";
import React from "react";
import bgImage from "../../../../public/physicalEducationPageImages/bgImage-2.png";

const HeroSection = () => {
  return (
 <section className="relative w-full h-[85vh] lg:h-[155vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
  <div className="absolute inset-0 z-0">
    <Image 
      src={bgImage} 
      alt="Background 1" 
      className="object-cover object-right w-full h-[80vh] md:h-full" // shift left by 30%
      priority 
    />

    {/* Top Gradient */}
    <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-black/60 to-transparent z-10" />

    {/* Mobile Bottom Gradient */}
    <div className="absolute bottom-0 left-0 right-0 h-[200px] md:h-[1000px] bg-gradient-to-t from-white via-white/85 via-50% to-transparent z-[10] md:hidden" />

    {/* Desktop Bottom Gradient */}
    <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[800px] bg-gradient-to-t from-[#fcfdff] via-transparent to-transparent z-[10] hidden md:block" />
  </div>

  {/* Text Block - right center */}
 <div className="absolute right-12 top-1/2 -translate-y-1/2 lg:space-y-6  px-[6rem] z-10 text-right">
  <h3 className="text-[#F5F5F7]/60  text-[19px] md:text-[25px] leading-5 lg:text-[31px]">
    Department of Physical Education
  </h3>
  <h2 className="text-[32px] max-w-4xl md:text-[40px] lg:text-[77px] leading-tight tracking-tighter font-bold text-white">
    Unleashing Potential Through Fitness
  </h2>
</div>

  {/* Extra gradient for mobile */}
  <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-white via-white/85 to-transparent z-[10] md:hidden" />
</section>

  );
};

export default HeroSection;
