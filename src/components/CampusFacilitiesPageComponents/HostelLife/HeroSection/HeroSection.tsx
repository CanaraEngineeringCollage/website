import Image from "next/image";
import React from "react";
import bgImage from "../../../../../public/campusFacilitiesPageImages/hostelLifePageImages/hostel.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] md:h-[120vh]  flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={bgImage} alt="Background 1" className="object-cover w-full h-[80vh] md:h-full" priority />

        {/* Mobile Gradient */}

        {/* Desktop Gradient */}

               <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[180px] bg-gradient-to-t from-white via-transparent to-transparent z-[10] hidden md:block" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-white via-white/85 to-transparent z-[10] md:hidden" />
      <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-white via-white/85 to-transparent z-[10] md:hidden" />
      <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-white via-white/85 to-transparent z-[10] md:hidden" />
    </section>
  );
};

export default HeroSection;
