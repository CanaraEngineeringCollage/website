import Image from "next/image";
import React from "react";

interface HeroSectionProps {
  imageUrl: string;
  departmentName: string;
  wdith?:string
}

const HeroSection: React.FC<HeroSectionProps> = ({ imageUrl, departmentName,wdith="" }) => {
  return (
    <section className="relative w-full h-[90vh] md:h-[150vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt="Background 1"
          className="object-cover w-full h-[80vh] md:h-full"
          priority
        fill
        />

        {/* Top Gradient */}
        <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-black/40 to-transparent z-10" />

        {/* Bottom Gradient - Mobile */}
        <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-white via-white/85 to-transparent z-[10] md:hidden" />

        {/* Bottom Gradient - Desktop */}
        <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[1000px] bg-gradient-to-t from-white via-transparent to-transparent z-[10] hidden md:block" />
      </div>

      <div className={`absolute top-28 md:top-28 ${wdith?wdith:"max-w-4xl"} mx-auto text-white px-4 z-10`}>
        <p className="text-3xl text-[#F5F5F7] mb-3 font-normal">Department of </p>
        <h2 className="text-[40px] md:text-[77px] leading-[50px] md:leading-[1] font-bold">
          {departmentName}
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
