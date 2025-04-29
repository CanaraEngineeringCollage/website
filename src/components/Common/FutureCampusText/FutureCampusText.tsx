import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const FutureCampusText = () => {
  return (
    <div className="max-w-7xl mx-auto xl:max-w-[75%] text-center pt-20 text-black">
      <h1 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl font-bold">Your Future Campus</h1>
      <p className="lg:text-xl md:text-lg text-[14px] leading-7 pt-5 text-textGray">
        Canara Engineering College (CEC), a premier institute in Mangalore, is part of the Canara Group of Institutions, founded in 1891 by Ammembal
        Subba Rao Pai—a visionary social reformer & philanthropist. Affiliated with Visvesvaraya Technological University & approved by AICTE, CEC
        upholds a legacy of excellence, blending modern education with cultural values. Established in 2001 with 180 seats across three engineering
        branches, it has since expanded to seven branches with a total intake of 664 students, shaping future-ready engineers through quality
        education & strong industry connections.
      </p>
      <button className="pt-8 inline-flex items-center cursor-pointer text-[#0066CC]">
        Read More <MdKeyboardArrowRight className="text-xl text-[#0066CC]" />
      </button>
    </div>
  );
};

export default FutureCampusText;
