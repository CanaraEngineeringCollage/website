import Image from "next/image";
import React from "react";

interface HeroSectionProps {
  imageUrl: string;
  departmentName: string;
  wdith?:string
}

const HeroSection: React.FC<HeroSectionProps> = ({ imageUrl, departmentName,wdith="" }) => {
  return (
   <section className="max-w-7xl xl:max-w-[75%] rounded-4xl overflow-hidden text-black mx-auto hidden md:block">
        {/* Top Content */}
   

        {/* Banner Section */}
  
    </section>
  );
};

export default HeroSection;
