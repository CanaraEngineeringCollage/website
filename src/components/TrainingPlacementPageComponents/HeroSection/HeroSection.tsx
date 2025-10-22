import Image from "next/image";
import React from "react";
import bgImage from "../../../../public/trainingPlacementPageImages/placementHero.webp";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden flex flex-col justify-center items-center text-center">
      {/* Background image */}
      <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[80vh]">
        <Image
          src={bgImage}
          alt="Placement Hero Background"
          fill
          priority
          className="object-cover object-[center_25%]"
        />
      </div>

      {/* Smooth gradient overlay */}
      <div className="absolute inset-0 z-0">
        {/* Mobile gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#fbfcfe] via-[#fbfcfe]/70 to-transparent z-[10] md:hidden" />

        {/* Desktop gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[400px] md:h-[230px] bg-gradient-to-t from-[#fbfcfe] via-[#fbfcfe]/60 to-transparent z-[10] hidden md:block" />
      </div>
    </section>
  );
};

export default HeroSection;
