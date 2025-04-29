"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import data from "../../../utils/events/carouselEvents.json";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const events = [
  { date: "15 Mar", title: "From Campus to CEO", tag: "ALUMNI SPOTLIGHT" },
  { date: "04 Apr", title: "CEC Alumni Making an Impact Worldwide", tag: "GLOBAL FOOTPRINTS" },
  { date: "22 May", title: "Reliving the Best Days", tag: "CSR/REUNION 2025" },
];
export default function AlumniMentorshipAndEvents() {
  return (
    <section className="max-w-7xl mx-auto xl:max-w-[75%] py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg2:gap-16 items-start">
        {/* Left Side - Swiper */}
        <div className="relative w-full">
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="rounded-3xl overflow-hidden"
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="relative">
                    <Image src={item.imageSrc} alt={item.title} width={700} height={700} className="w-full object-cover rounded-3xl" />

                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-3xl">
                      <p className="text-xs text-gray-300">{item.date}</p>
                      <h2 className="text-white text-lg font-bold mt-1">{item.title}</h2>
                      <p className="text-gray-400 text-sm mt-2">{item.description}</p>
                      <button className="mt-4 px-5 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200">Read More</button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons (bottom-right inside swiper) */}

            {/* View More button below Swiper */}
            <div className="mt-22">
              <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                <button className=" swiper-button-prev-custom relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50">
                  <MdKeyboardArrowLeft />
                </button>
                <button className="swiper-button-next-custom relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50">
                  <MdKeyboardArrowRight />
                </button>
              </div>
              <button className="px-6 py-2 text-black rounded-full  border hover:bg-gray-800">View More</button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white">

        <div className="flex flex-col gap-6 text-black bg-white rounded-3xl h-full md:p-4 lg2:p-6 xl:p-16">
          <h3 className="text-2xl font-bold ">Upcoming Events</h3>{" "}
          <div className="flex flex-col gap-6">
            {" "}
            {events.map((event, index) => {
              const [day, month] = event.date.split(" ");
              const isLast = index === events.length - 1; // Check if it's the last item
              
              return (
                <motion.div
                key={index}
                className={`flex items-center gap-4 xl:gap-12 py-6 ${!isLast ? "border-b border-[#D0D0D0]" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex flex-col items-center lg2:text-2xl justify-center lg2:w-20 lg2:h-20 lg:w-16 lg:h-16 w-12 h-12 xl:w-24 xl:h-24 bg-[#6DC0EB] text-white rounded-3xl text-sm font-bold">
                    <span className="">{day}</span>
                    <span className="">{month}</span>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">{event.tag}</p>
                    <h4 className="text-md font-semibold">{event.title}</h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-6 mx-auto">
            
            <button className="px-6  py-2  bg-[#F5F5F7] font-normal rounded-full  hover:bg-gray-800">View More</button>{" "}
          </div>
        </div>
            </div>
      </div>
    </section>
  );
}
