import {  HowToApply1, HowToApply2, HowToApply3, HowToApply4 } from "@/components/Icons/Icons";
import React from "react";
import { GoDash } from "react-icons/go";
import { RxDash } from "react-icons/rx";


const HowToApply = () => {
  return (
    <section className="max-w-7xl xl:max-w-[75%] mx-auto py-20 md:pt-36 overflow-hidden">
      <div className="lg:max-w-[60%] mb-20">
        <h1 className="text-3xl mb-7 md:text-[40px] lg:text-5xl xl:text-6xl text-black font-extrabold">How to Apply</h1>
        <p className="text-black text-lg md:text-2xl">
          Explore Canara Engineering College’s thriving campus with top-tier placements, cutting-edge facilities & a vibrant student community.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-10 lg:gap-2 w-full">
        <div className="flex items-center flex-col justify-between">
          <div className="flex items-center">
            <HowToApply1 />
          </div>
          <p className="text-lg md:text-2xl pt-4 text-center text-primary">Get in touch with college</p>
        </div>

        <div className="mt-12">
          <div>
            <div className="flex items-center">
              <RxDash className="text-[#747474] text-3xl md:text-4xl lg:rotate-0 rotate-90" />
              <GoDash className="text-[#747474] text-3xl md:text-4xl lg:rotate-0 rotate-90" />
              <RxDash className="text-[#747474] text-3xl md:text-4xl lg:rotate-0 rotate-90" />
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col justify-between">
          <div className="flex items-center">
            <HowToApply2 />
          </div>
          <p className="text-lg md:text-2xl pt-4 text-center text-textGray">Councelling by Admission team</p>
        </div>

        <div className="mt-12">
          <div>
            <div className="flex items-center">
              <RxDash className="text-[#747474] text-3xl md:text-4xl lg:rotate-0 rotate-90" />
              <GoDash className="text-[#747474] text-3xl md:text-4xl lg:rotate-0 rotate-90" />
              <RxDash className="text-[#747474] text-3xl md:text-4xl lg:rotate-0 rotate-90" />
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col justify-between">
          <div className="flex items-center">
            <HowToApply3 />
          </div>
          <p className="text-lg md:text-2xl pt-4 text-center text-textGray">Pay Admission fee </p>
        </div>

        <div className="mt-12">
          <div>
            <div className="flex items-center">
              <RxDash className="text-[#747474] text-3xl md:text-4xl lg:rotate-0 rotate-90" />
              <GoDash className="text-[#747474] text-3xl md:text-4xl lg:rotate-0 rotate-90" />
              <RxDash className="text-[#747474] text-3xl md:text-4xl lg:rotate-0 rotate-90" />
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col justify-between">
          <div className="flex items-center">
            <HowToApply4 />
          </div>
          <p className="text-lg md:text-2xl text-center text-textGray">Enroll for the course</p>
        </div>
      </div>
    </section>
  );
};

export default HowToApply;
