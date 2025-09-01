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


 <div className="absolute lg:top-1/2 top-2/3 -translate-y-1/2 flex flex-col space-y-4 sm:space-y-6 px-1 sm:px-6 md:px-10 lg:px-[4rem] z-10 text-center lg:text-start text-white 
  left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0">
  
  <h3 className="text-[#F5F5F7]/70 font-thin text-[19px] min-w-xs sm:text-[22px] md:text-[25px] lg:text-[31px] leading-6 sm:leading-8 md:leading-10 lg:leading-none">
    Entrepreneurship Development Cell
  </h3>

  <h2 className="text-[23px] sm:text-[28px] md:text-[40px] lg:text-[77px] min-w-xs md:min-w-4xl sm:max-w-2xl md:max-w-4xl font-bold tracking-tight leading-tight sm:leading-snug md:leading-10 lg:leading-[1.1] text-white">
    Empowering Future Entrepreneurs
  </h2>
</div>

      <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-white via-white/85 to-transparent z-[10] md:hidden" />
    </section>
  );
};

export default HeroSection;
