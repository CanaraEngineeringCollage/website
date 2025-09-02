import Image from "next/image";
import React from "react";
import bgImage from "../../../../public/trainingPlacementPageImages/placementHero.webp";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] md:h-[120vh]  flex flex-col justify-center items-center text-center  overflow-hidden">
      
      <div className="pt-32">
         <Image src={bgImage} alt="Background 1" className="object-cover w-full h-[80vh] md:h-full" priority />
      </div>
      <div className="absolute inset-0 z-0">
       

        {/* Mobile Gradient */}

        {/* Desktop Gradient */}
      
        <div className="absolute bottom-0 left-0 right-0 h-[200px] md:h-[30%] bg-gradient-to-t from-[#fbfcfe] via-[#fbfcfe]/85 via-50% to-transparent z-[10] " />
        <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[25%] bg-gradient-to-t from-[#fbfcfe] via-transparent to-transparent z-[10] hidden md:block" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-[#fbfcfe] via-[#fbfcfe]/85 to-transparent z-[10] md:hidden" />
      <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-[#fbfcfe] via-[#fbfcfe]/85 to-transparent z-[10] md:hidden" />
      <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-[#fbfcfe] via-[#fbfcfe]/85 to-transparent z-[10] md:hidden" />
    </section>
  );
};

export default HeroSection;
