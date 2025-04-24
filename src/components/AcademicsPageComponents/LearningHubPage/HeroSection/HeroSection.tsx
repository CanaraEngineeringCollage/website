import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="text-black    relative  w-full overflow-hidden pb-28">
      <div className="relative h-[90vh] lg:h-[150vh] w-[100vw] flex justify-center items-center">
        <Image src="/backgroundImages/homeHeroBg.jpg" alt="" width={1000} height={1000} className="object-cover w-full h-full" />
        <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-black/60 to-transparent z-10" />
        {/* <div className="absolute bottom-0 left-0 right-0 h-[200px] md:h-[1000px] bg-gradient-to-t from-white via-white/85 via-50% to-transparent z-[10] md:hidden" /> */}
        <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[600px] bg-gradient-to-t from-white via-transparent to-transparent z-[10] " />
        <div className="absolute lg:top-10 top-20 text-center leading-[1.2] text-[28px] md:text-[40px]  lg:text-[77px] text-white font-extrabold left-0 w-full z-10 ">
          <h1>
            Welcomes to the Digital <br /> Learning Resources
          </h1>
        </div>
        <div className="absolute bottom-0 z-[999] w-full left-0   text-center flex justify-center">
          <div className="lg:mx-20 mx-4 rounded-2xl w-full bg-[#F5F5F7] px-3.5 lg:px-28 pt-20 pb-10">
            <div className="mb-10">
              <input type="text" placeholder="Enter Your Student USN" className="w-full outline-none border-b-2 pb-2 border-border" />
            </div>
            <button className="text-center  text-white cursor-pointer px-6 sm:px-8 py-2 rounded-3xl bg-[#2884CA]">Apply Now</button>
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-white via-white/85 to-transparent z-[10] md:hidden" /> 
        <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-white via-white/85 to-transparent z-[10] md:hidden" /> 
        <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-white via-white/85 to-transparent z-[10] md:hidden" />  */}
      </div>
    </section>
  );
};

export default HeroSection;
