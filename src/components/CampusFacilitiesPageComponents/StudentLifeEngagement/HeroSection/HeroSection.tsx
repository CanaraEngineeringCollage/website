import Image from "next/image";
import React from "react";
import bgImage from "../../../../../public/campusFacilitiesPageImages/studentLifePageImages/bgImage.png";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[100vh]   flex flex-col justify-center items-center text-center  overflow-hidden">
      <div className="lg:pt-24">
       <Image src={bgImage} alt="Background 1" className="object-cover w-full h-[80vh] md:h-[120vh]" priority />
       </div>
      <div className="absolute inset-0 z-0">
       

      {/* <div className="absolute top-[80] left-0 z-50 gap-5 flex flex-col  items-center w-full h-full text-center text-[#fbfcfe]">
<h1 className="text-[#fbfcfe] font-bold text-[40px] lg:text-[77px] leading-[1.2]">A Thriving Student <br /> Experience</h1>
<p className="text-[16px] lg:text-[21px] mx-3 text-[#fbfcfe] lg:max-w-[48%]">A brief overview highlighting the dynamic student life, fostering academic growth, innovation, & community engagement.</p>
      </div> */}
 <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[150px] bg-gradient-to-t from-[#fbfcfe] via-[#fbfcfe]/85 to-transparent z-[10] hidden md:block" />
    
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-[#fbfcfe] via-[#fbfcfe]/85 to-transparent z-[10] md:hidden" />
      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-[#fbfcfe] via-[#fbfcfe]/85 to-transparent z-[10] md:hidden" />
      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-[#fbfcfe] via-[#fbfcfe]/85 to-transparent z-[10] md:hidden" />
    </section>
  );
};

export default HeroSection;
