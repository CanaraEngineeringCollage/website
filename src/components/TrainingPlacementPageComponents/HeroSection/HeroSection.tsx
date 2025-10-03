import Image from "next/image";
import React from "react";
import bgImage from "../../../../public/trainingPlacementPageImages/placementHero.webp";

const HeroSection = () => {
  return (
    <section className="relative w-full  lg:h-[120vh]  flex flex-col justify-center items-center text-center  overflow-hidden">
      
      <div className="lg:pt-32 md:pt-1">
         <Image src={bgImage} alt="Background 1" className="object-cover w-full h-full md:h-full" priority />
      </div>
      <div className="absolute inset-0 z-0">
       

        {/* Mobile Gradient */}

        {/* Desktop Gradient */}
      
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-gradient-to-t from-[#fbfcfe] via-[#fbfcfe]/85 to-transparent z-[10] md:hidden" />
    
        <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[25%] bg-gradient-to-t from-[#fbfcfe] via-transparent to-transparent z-[10] hidden md:block" />
      </div>

     
    </section>
  );
};

export default HeroSection;
