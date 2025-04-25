import Image from "next/image";
import React from "react";
import { GoDash } from "react-icons/go";
import { BsDash } from "react-icons/bs";
import { RxDash } from "react-icons/rx";

const HowToApply = () => {
  return (
    <section className="max-w-7xl xl:max-w-[75%] mx-auto py-36 overflow-hidden">
    <div className="lg:max-w-[60%] mb-20">
      <h1 className="text-3xl mb-7 md:text-[40px] lg2:text-5xl xl:text-6xl text-black font-extrabold">
        How to Apply
      </h1>
      <p className="text-black text-[23px]">
        Explore Canara Engineering College’s thriving campus with top-tier placements, cutting-edge facilities & a vibrant student community.
      </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-32 w-full justify-between">
      <div className="col-span-3 flex flex-col lg:flex-row gap-10 items-center">
        <Image src="/admissionPageImages/1.svg" alt="" width={100} height={100} />
        <div className="flex lg:flex-row flex-col justify-between gap-2">
          <RxDash className="text-[#747474] text-4xl lg:rotate-0 rotate-90" />
          <GoDash className="text-[#747474] text-4xl lg:rotate-0 rotate-90" />
          <RxDash className="text-[#747474] text-4xl lg:rotate-0 rotate-90" />
        </div>
      </div>
      <div className="col-span-3 flex flex-col lg:flex-row gap-10 items-center">
        <Image src="/admissionPageImages/2.svg" alt="" width={100} height={100} />
        <div className="flex lg:flex-row flex-col justify-between gap-2">
          <RxDash className="text-[#747474] text-4xl lg:rotate-0 rotate-90" />
          <GoDash className="text-[#747474] text-4xl lg:rotate-0 rotate-90" />
          <RxDash className="text-[#747474] text-4xl lg:rotate-0 rotate-90" />
        </div>
      </div>
      <div className="col-span-3 flex flex-col lg:flex-row gap-10 items-center">
        <Image src="/admissionPageImages/3.svg" alt="" width={100} height={100} />
        <div className="flex lg:flex-row flex-col justify-between gap-2">
          <RxDash className="text-[#747474] text-4xl lg:rotate-0 rotate-90" />
          <GoDash className="text-[#747474] text-4xl lg:rotate-0 rotate-90" />
          <RxDash className="text-[#747474] text-4xl lg:rotate-0 rotate-90" />
        </div>
      </div>
      <div className="col-span-3  flex-col lg:flex-row flex gap-10 items-center">
        <Image src="/admissionPageImages/4.svg" alt="" width={100} height={100} />
        <div className="flex lg:flex-row flex-col justify-between gap-2"></div>
      </div>
    </div>
  </section>
  );
};

export default HowToApply;
