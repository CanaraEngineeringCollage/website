import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
  <section className="text-black relative w-full overflow-hidden pb-28">
  <div className="relative h-[90vh] lg:h-[120vh] w-[100vw] flex justify-center items-center">
    <Image
      src="/backgroundImages/1.webp"
      alt=""
      width={1000}
      height={1000}
      className="object-cover object-top md:object-center w-full h-full"
    />

    {/* Top Gradient */}
    <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-black/60 to-transparent z-10" />

    {/* Bottom Gradient */}
    <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[600px] bg-gradient-to-t from-white via-transparent to-transparent z-[10]" />

    {/* Heading */}
    <div className="absolute flex justify-center lg:justify-end items-center top-1/2 -translate-y-1/2 w-full px-6 sm:px-10 lg:px-14 z-10">
      <h1 className="leading-[1.2] text-[24px] sm:text-[32px] md:text-[40px] lg:text-[77px] font-bold text-white text-center lg:text-end max-w-xl sm:max-w-2xl lg:max-w-3xl">
        Welcomes to the Digital Learning Resources
      </h1>
    </div>

    {/* Input + Button Section */}
    <div className="absolute bottom-0 z-[999] w-full left-0 text-center flex justify-center">
      <div className="lg:mx-20 mx-4 rounded-2xl w-full bg-[#F5F5F7] px-4 sm:px-6 lg:px-28 pt-16 sm:pt-20 pb-10">
        <div className="mb-8 sm:mb-10">
          <input
            type="text"
            placeholder="Enter Your Student USN"
            className="w-full outline-none border-b-2 pb-2 border-border text-sm sm:text-base"
          />
        </div>
        <button
          aria-label="Apply Now"
          className="text-center text-white cursor-pointer px-6 sm:px-8 py-2 rounded-3xl bg-[#2884CA] text-sm sm:text-base"
        >
          Apply Now
        </button>
      </div>
    </div>
  </div>
</section>

  );
};

export default HeroSection;
