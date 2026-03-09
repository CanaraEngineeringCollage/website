"use client";
import Link from "next/link";
import React, { useState } from "react";
import BusRouteModal from "../BusRouteModal/BusRouteModal";

const LocationSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="  max-w-7xl pb-12 pt-5 md:pb-0 md:pt-20 mx-auto xl:max-w-[75%]">
        <div className="bg-white rounded-3xl  pb-4   md:p-12 flex flex-col lg:flex-row items-center gap-4 mx-auto md:gap-10  w-full">
          {/* Left: Map Image Placeholder */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gray-200 rounded-t-2xl md:rounded-t-none md:rounded-2xl overflow-hidden shadow-sm">
              {/* Replace this with actual Map component or Image */}
              <iframe
                src="https://maps.google.com/maps?ll=12.898335,74.986103&z=17&t=m&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full object-cover"
              ></iframe>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full p-3 md:p-0 lg:w-1/2 space-y-3 md:space-y-6 text-center lg:text-left">
            <h2 className="text-3xl text-[#1D1D1F] md:text-[40px] lg2:text-5xl leading-[1.3]  font-bold">
              Need Help Locating <br className="hidden lg:block" />
              the CEC Campus?
            </h2>

            <div className="space-y-">
              <h3 className=" text-textGray uppercase md:text-lg tracking-wide">CANARA ENGINEERING COLLEGE</h3>
              <p className="text-textGray md:text-lg ">
                Sudheendra Nagar, Benjanapadavu, Bantwal Taluk <br className="hidden md:block" />
                Mangalore, D.K. District, Karnataka, India - 574219
              </p>
            </div>

            <div className="pt-4 hidden md:block">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block bg-blue-100 hover:bg-blue-200 text-primary font-semibold px-2 md:px-8 py-3 rounded-full transition-colors duration-300 cursor-pointer"
              >
                Click to view bus route information
              </button>
            </div>
            <div className="pt-4 md:hidden">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block bg-blue-100 hover:bg-blue-200 text-primary font-semibold px-6 md:px-8 py-3 rounded-full transition-colors duration-300 cursor-pointer"
              >
                Bus Route information
              </button>
            </div>
          </div>
        </div>
      </section>

      <BusRouteModal isOpen={isModalOpen} onClose={setIsModalOpen} />
    </>
  );
};

export default LocationSection;
