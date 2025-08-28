import Image from "next/image";
import React from "react";
import bgImage from "../../../../public/entrepreneurshipPageImages/2.webp";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[85vh]  lg:h-[100vh]  flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={bgImage} alt="Background 1" className="object-cover w-full h-[80vh] md:h-full" priority />

        {/* Mobile Gradient */}

        {/* Desktop Gradient */}
        <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-black/60 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] md:h-[200px] bg-gradient-to-t from-[#fcfdff] via-white/85 via-50% to-transparent z-[10] md:hidden" />
        <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[250px] bg-gradient-to-t from-[#fcfdff] via-transparent to-transparent z-[10] hidden md:block" />
      </div>   
           {/* <div className="absolute bottom-0 left-0 right-0 h-[200px] md:h-[450px] bg-gradient-to-t from-[#fcfdff] via-transparent to-transparent z-[10] hidden md:block" /> */}


   <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col space-y-6 px-[4rem] z-10 text-start text-white">
  <h3 className="text-[#F5F5F7]/70 font-thin text-[19px] md:text-[25px] leading-10 lg:leading-0 lg:text-[31px]">
    Entrepreneurship Development Cell
  </h3>
  <h2 className="text-[23px] md:text-[40px] max-w-4xl lg:text-[77px] leading-[30px] tracking-tight md:leading-10 lg:leading-[1.1] font-extrabold text-white">
    Empowering Future 
    Entrepreneurs
  </h2>
</div>
      <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-white via-white/85 to-transparent z-[10] md:hidden" />
    </section>
  );
};

export default HeroSection;
