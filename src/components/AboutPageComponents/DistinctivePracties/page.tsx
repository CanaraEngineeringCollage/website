'use client';

import Image from "next/image";
import React from "react";
import image1 from "../../../../public/DistinctivePractiesImages/plastic.jpg"
import image2 from "../../../../public/DistinctivePractiesImages/CHC.jpg"
import image3 from "../../../../public/DistinctivePractiesImages/solar.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import DistinctiveHeroBaner from "./DistinctiveHeroBaner";
import DistinctiveCarousel from "./DistinctiveCarousel";

const DistinctivePracties = () => {
  const images = [
    "/DistinctivePractiesImages/plastic.jpg",
    "/DistinctivePractiesImages/CHC.jpg",
    "/DistinctivePractiesImages/solar.jpg",
  ];

  const practices = [
    {
      id: 1,
      text: "Free Community health center for students, staff and local community*",
    },
    {
      id: 2,
      text: "Plastic Recycling research center for converting waste plastic into useful products.",
    },
    {
      id: 3,
      text: "Commitment to Environment Sustainability via Harnessing Solar energy – 140kW Roof top Solar system.",
    },
    {
      id: 4,
      text: "Installation of sewage treatment plant and using recycled water for gardening purposes.",
    },
    {
      id: 5,
      text: "Rainwater harvesting and construction of water ponds to improve underground water table.",
    },
  ];

  return (
    <>

      <DistinctiveHeroBaner />
      <div className="w-full flex flex-col items-center px-4 sm:px-6 md:px-12 py-12 bg-white overflow-hidden">
        {/* Title */}
        <h2 className="text-[#1D1D1F] text-2xl sm:text-3xl md:text-[54.14px] font-bold text-center mb-3">
          Distinctive Practices
        </h2>

        {/* Subtitle */}
        <p className="text-[#86868B] text-center max-w-4xl mb-10 text-sm sm:text-base md:text-[20.34px]">
          Canara Engineering College follows the following practices which are aimed at
          improving the overall services towards faculty and students.
        </p>

        {/* First Row (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl w-full justify-center">
          {practices.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg w-full lg:w-[397px] 
             h-auto lg:h-[216px] flex items-center justify-center text-center 
             border border-[#2884CA] transition-colors duration-300 mx-auto"
            >
              <p className="text-[#86868B] text-sm sm:text-base md:text-lg px-2">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Second Row (2 Cards Centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl w-full justify-center mt-10">
          {practices.slice(3).map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg w-full lg:w-[397px] 
             h-auto lg:h-[216px] flex items-center justify-center text-center 
             border border-[#2884CA] transition-colors duration-300 mx-auto"
            >
              <p className="text-[#86868B] text-sm sm:text-base md:text-lg px-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>




      <div className="w-full bg-[#F1F3FB] flex justify-center px-4 sm:px-8 md:px-12 lg:px-[6rem] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1300px]">
          {/* Faculty Centric Practices */}
          <div className="bg-white border rounded-xl shadow-sm p-6 sm:p-8">
            <h3 className="text-lg sm:text-2xl md:text-[36px] font-bold mb-6 text-[#1D1D1F]">
              Faculty Centric Practices
            </h3>
            <ul className="list-square list-inside space-y-3 text-[#86868B] text-sm sm:text-base md:text-[17px] leading-relaxed">
              <li>Financial support for faculty for publishing papers in national and international journals and conferences.</li>
              <li>Sponsorship for faculty and staff to attend Conferences, Seminars, Workshops, FDPs, Industrial Trainings, and NPTEL courses.</li>
              <li>Research allowance for those who have completed/pursuing Ph.D.</li>
              <li>Encashment of EL for non-teaching staff is permitted in multiples of 30 days.</li>
              <li>Recognition and awarding faculty and staff for their commendable performance.</li>
              <li>ESI facility for non-teaching staff.</li>
              <li>Accidental insurance for both faculty and staff.</li>
              <li>Tuition fee concession in any Canara sister institutions for those who are working at CEC.</li>
            </ul>
          </div>

          {/* Student Centric Practices */}
          <div className="bg-white border rounded-xl shadow-sm p-6 sm:p-8">
            <h3 className="text-lg sm:text-2xl md:text-[36px] font-bold mb-6 text-[#1D1D1F]">
              Student Centric Practices
            </h3>
            <ul className="list-square list-inside space-y-3 text-[#86868B] text-sm sm:text-base md:text-[17px] leading-relaxed">
              <li>Recognition and awarding students for their extraordinary performance in academics, co-curricular and extra-curricular activities.</li>
              <li>Management scholarship to the needy and eligible students.</li>
              <li>Sponsoring students to attend intercollegiate co-curricular and extra-curricular activities.</li>
              <li>Advanced lab facilities, to work even beyond college working hours.</li>
              <li>Accidental and medical expenses insurance coverage for students.</li>
              <li>Counselling facility with trained counsellor at the institution.</li>
              <li>Recognition for appreciable performance for alumni in their career.</li>
              <li>A fire safety system is installed in the college to meet any fire-related exigencies.</li>
              <li>State-of-the-art Gymnasium for students and staff to help them keep themselves healthy.</li>
            </ul>
          </div>
        </div>
      </div>


      <DistinctiveCarousel />
    </>
  );
};

export default DistinctivePracties;
