"use client";
import ContactFormModal from "@/components/Modal/Modal";
import Image from "next/image";

import { useState } from "react";


export default function SpotlightSection({toppers}) {
  const [isOpen, setIsOpen] = useState(false);

  // Dynamic data array
  

  return (
    <div
      className=" lg:py-16 text-white bg-center"
      style={{
        backgroundImage: "url(/backgroundImages/department.webp)",
      }}
    >
      {/* Top Section */}
      <div className="max-w-7xl xl:max-w-[75%] mx-auto px-6 lg:px-18 text-center py-16 md:py-10 ">
        <h2 className="text-3xl md:text-[40px] leading-[1.1] lg2:text-5xl font-bold mb-4 lg:mb-8 xl:mb-8">
          In the Spotlight
        </h2>
        <p className="text-lg lg:text-[20.34px] mb-12 text-[#FFFFFFB2]">
          Honoring Our Toppers for Their Dedication & Excellence!
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] xl:gap-16 mb-20">
          {toppers.map((topper, index) => (
            <div
              key={index}
              className="text-white rounded-2xl px-5 py-4 flex flex-row items-center border-white border-[1px]"
            >
           {topper.image && (
        <div className="w-24 h-24   flex-shrink-0">
          <Image
            src={topper.image}
            alt={topper.name}
            width={96}
            height={96}
            className="w-full h-full object-top object-cover "
          />
        </div>
      )}
             
              <div className="text-left pl-6">
           <h3 className="lg:text-xl font-semibold mb-1">
  {topper.name
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase())}
</h3>

                <p className="text-sm opacity-[0.8]">{topper.batch}</p>
                <p className="text-sm opacity-[0.8]">{topper.percentage} CGPA {topper.vtuText && ","} {topper.vtuText &&<span className="font-bold whitespace-nowrap"> {topper.vtuText}</span>}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-28 mb-5 space-y-8">
          <h2 className="md:text-[40px] text-[32px] leading-[1.1] lg2:text-5xl font-bold mb-4 max-w-2xl text-center mx-auto">
           Admissions Open for {new Date().getFullYear()}
          </h2>
          <p className="text-lg mb-6 max-w-2xl text-white/70 mx-auto">
            Book a one-on-one counseling session & get all your questions
            answered about admissions, programs & your future opportunities.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Apply Now"
            className="bg-white text-primary font-semibold py-2 px-5 md:text-lg rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Apply Now
          </button>
          <ContactFormModal isOpen={isOpen} onClose={setIsOpen} />
        </div>
      </div>
    </div>
  );
}
