"use client";
import Link from "next/link";
import React, { useState } from "react";
import BusRouteModal from "../BusRouteModal/BusRouteModal";

const LocationSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="  max-w-7xl pt-20 mx-auto xl:max-w-[75%]">
        <div className="bg-white rounded-3xl  p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 max-w-7xl w-full">
          {/* Left: Map Image Placeholder */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
              {/* Replace this with actual Map component or Image */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.030617300438!2d74.98298707484024!3d12.905766287403613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba359df3752e50f%3A0xc3f514757c2c9d2f!2sCanara%20Engineering%20College!5e0!3m2!1sen!2sin!4v1709661234567!5m2!1sen!2sin"
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
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl text-[#1D1D1F] md:text-[40px] lg2:text-5xl leading-[1.3] xl:text-6xl font-bold">
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

            <div className="pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block bg-blue-100 hover:bg-blue-200 text-primary font-semibold px-8 py-3 rounded-full transition-colors duration-300 cursor-pointer"
              >
                Click to view bus route Information
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
