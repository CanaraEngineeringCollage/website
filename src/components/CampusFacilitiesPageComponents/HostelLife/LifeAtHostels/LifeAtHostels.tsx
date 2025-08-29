import React from "react";
import { HiDownload } from "react-icons/hi";

const LifeAtHostels = () => {
  return (
    <section className="md:pt-20 xl:py-44 pb-2  max-w-7xl xl:max-w-[75%] mx-auto lg:px-32">
      <div className="">
        <div className="flex justify-between items-center pb-5 lg:pb-10">
          <h1 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl  font-bold text-[#1D1D1F] ">Life at CEC Hostels</h1>
          <a
            href="https://drive.google.com/uc?export=download&id=1dSk9BXF68175ikakeHivmiNrI1DO2QsU"
           
            aria-label="Download Hostel Rulebook"
            className="text-[#2884CA] hidden font-bold text-[17px] bg-[#d9ebff] px-6 py-2 cursor-pointer rounded-3xl lg:inline-flex gap-3"
          >
            Download Hostel Rulebook <HiDownload className="text-[24px] font-extrabold" />
          </a>
        </div>
        <p className="text-textGray text-justify  text-[20px] pb-10">
        Our hostels are located inside the campus, surrounded by greenery and a peaceful, quiet atmosphere that makes it easy to focus on studies while still enjoying college life. They accommodate over 850+ students, creating a safe, friendly environment where you can make lifelong friends. You’ll have access to indoor sports facilities, a well-equipped gym, on-site laundry services, and regular medical visits in collaboration with Father Muller’s Medical Hospital. We also ensure 24/7 security so parents can feel reassured, and our dedicated wardens and assistant wardens are always on-site to support and guide students whenever needed.
        </p>
        <p className="text-textGray  text-[20px]">
         Life in the hostel at CEC is a balance of academics, fitness, and fun all in a setting that’s amidst nature, calm, and away from the city’s rush. We’re confident you’ll enjoy your time here and create wonderful memories over the next four years.
        </p>
      </div>
      <button
        aria-label="Download Hostel Rulebook"
        className="text-[#2884CA] lg:hidden mt-10 font-bold text-[17px] bg-[#d9ebff] px-6 py-2 cursor-pointer rounded-3xl inline-flex gap-3 justify-center w-full"
      >
        Download Hostel Rulebook <HiDownload className="text-[24px] font-extrabold" />
      </button>
    </section>
  );
};

export default LifeAtHostels;
