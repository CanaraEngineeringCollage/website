import Image from "next/image";
import React from "react";
import bgImage from "../../../../public/physicalEducationPageImages/bgImage-2.png";

const HeroSection = () => {
  return (
 <section className="relative w-full h-[50vh] lg:h-[100vh] flex flex-col justify-start items-start text-center  overflow-hidden">
  {/* Background Image + Gradients */}

  <div className="absolute inset-0 z-0">
    <Image 
      src={bgImage} 
      alt="Background 1" 
      className="object-cover object-[center_30%] w-full h-full" 
      priority 
    />
  </div>
  <div className="absolute inset-0 z-10">
    

    {/* Top Gradient */}
    {/* <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-black/60 to-transparent z-10" /> */}

    {/* Mobile Bottom Gradient */}
    <div className="absolute bottom-0 left-0 right-0 h-[400px] md:h-[1000px] bg-gradient-to-t from-[#fcfdff] via-transparent to-transparent z-[10] md:hidden" />

    {/* Desktop Bottom Gradient */}
    <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[250px] bg-gradient-to-t from-[#fcfdff] via-transparent to-transparent z-[10] hidden md:block" />
  </div>

  {/* Text Block */}
  <div className="w-full h-full">
  <div
    className="
      absolute 
      z-10 
      lg:pe-10 xl:pe-20
      flex flex-col justify-center items-end inset-0 
    "
  >
    <h3 className="text-[#F5F5F7]/60 text-[19px] md:text-[25px] lg:text-[31px] leading-5">
      Department of Physical Education
    </h3>
    <h2 className="text-[28px] sm:text-[32px] max-w-4xl text-end md:text-[40px] lg:text-[77px] xl:text-[77px] leading-tight tracking-tighter font-bold text-white  mx-auto lg2:mx-0">
      Unleashing Potential Through Fitness
    </h2>
  </div>
  </div>

  {/* Extra gradient for mobile */}
  <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-white via-white/85 to-transparent z-[10] md:hidden" />
</section>


  );
};

export default HeroSection;
