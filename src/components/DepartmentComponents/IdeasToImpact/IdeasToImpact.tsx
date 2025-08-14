"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CarouselDots } from "../CarouselDots/CarouselDots";
import { ChevronRight } from "lucide-react";

const placementData = [
  { year: "2024-25", total: 100, placed: 40, offers: 20 },
  { year: "2023-24", total: 90, placed: 38, offers: 18 },
  { year: "2022-23", total: 120, placed: 70, offers: 30 },
];

type Stat = {
  component: React.ReactNode;
};

const stats: Stat[] = [
  {
    component: (
      <div className="bg-white p-6 rounded-2xl mb-6">
        <div className="grid grid-cols-2 items-center gap-6 h-full w-full">
          {/* Left Side - Image */}
          <div className="relative w-full h-48">
            {" "}
            {/* Give height and make relative */}
            <Image src="/departmentImages/IdeaImpact/awards.png" alt="image" fill className="object-contain" />
          </div>

          {/* Right Side - Text */}
          <div>
            <h4 className="text-2xl text-[#1D1D1F] font-semibold mb-4 text-left">Awards won in Technical Fest</h4>
            <p className="text-gray-600 text-left max-w-[70%]">During the Academic Year 2023-24</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    component: (
      <div className="bg-white p-6 rounded-2xl mb-6">
        <div className="grid grid-cols-2 items-center gap-6 h-full w-full">
          {/* Left Side - Image */}
          <div className="relative w-full h-48">
            {" "}
            {/* Give height and make relative */}
            <Image src="/departmentImages/IdeaImpact/awards.png" alt="image" fill className="object-contain" />
          </div>

          {/* Right Side - Text */}
          <div>
            <h4 className="text-2xl text-[#1D1D1F] font-semibold mb-4 text-left">Awards won in Technical Fest</h4>
            <p className="text-gray-600 text-left max-w-[70%]">During the Academic Year 2023-24</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    component: (
      <div className="bg-white p-6 rounded-2xl mb-6">
        <div className="grid grid-cols-2 items-center gap-6 h-full w-full">
          {/* Left Side - Image */}
          <div className="relative w-full h-48">
            {" "}
            {/* Give height and make relative */}
            <Image src="/departmentImages/IdeaImpact/awards.png" alt="image" fill className="object-contain" />
          </div>

          {/* Right Side - Text */}
          <div>
            <h4 className="text-2xl text-[#1D1D1F] font-semibold mb-4 text-left">Awards won in Technical Fest</h4>
            <p className="text-gray-600 text-left max-w-[70%]">During the Academic Year 2023-24</p>
          </div>
        </div>
      </div>
    ),
  },
];

const placement: Stat[] = [
  {
    component: (
      <div className="bg-white p-6 rounded-2xl">
        <h3 className="text-4xl font-[900]  mb-2 text-left lg:text-[60px]">30%</h3>
        <p className=" text-left text-2xl">Placements & Job Offers</p>
        <p className="text-[16px] max-w-md   text-left ">Higher Number of Students securing Employment/Entrepreneurship</p>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={placementData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }} barSize={90} barCategoryGap="20%">
            <defs>
              <linearGradient id="placedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#268CD8" />
                <stop offset="100%" stopColor="#144A72" />
              </linearGradient>
            </defs>
            <XAxis dataKey="year" />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="placed" stackId="a" fill="url(#placedGradient)" strokeWidth={1} />
            <Bar dataKey="offers" stackId="a" fill="#6DC0EB" strokeWidth={1} />
            <Bar dataKey="total" stackId="a" radius={[10, 10, 0, 0]} fill="#ffffff" stroke="#D9D9D9" strokeWidth={1} />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-6 mt-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border border-gray-300 bg-white"></div>
            Total Students
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-b from-[#268CD8] to-[#144A72]"></div>
            Students Placed
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#6DC0EB]"></div>
            Offers Received
          </div>
        </div>
      </div>
    ),
  },
  {
    component: (
      <div className="bg-white p-6 rounded-2xl">
        <h3 className="text-4xl font-[900]  mb-2 text-left lg:text-[60px]">30%</h3>
        <p className=" text-left text-2xl">Placements & Job Offers</p>
        <p className="text-[16px] max-w-md   text-left ">Higher Number of Students securing Employment/Entrepreneurship</p>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={placementData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }} barSize={90} barCategoryGap="20%">
            <defs>
              <linearGradient id="placedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#268CD8" />
                <stop offset="100%" stopColor="#144A72" />
              </linearGradient>
            </defs>
            <XAxis dataKey="year" />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="placed" stackId="a" fill="url(#placedGradient)" strokeWidth={1} />
            <Bar dataKey="offers" stackId="a" fill="#6DC0EB" strokeWidth={1} />
            <Bar dataKey="total" stackId="a" radius={[10, 10, 0, 0]} fill="#ffffff" stroke="#D9D9D9" strokeWidth={1} />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-6 mt-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border border-gray-300 bg-white"></div>
            Total Students
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-b from-[#268CD8] to-[#144A72]"></div>
            Students Placed
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#6DC0EB]"></div>
            Offers Received
          </div>
        </div>
      </div>
    ),
  },
];

export default function IdeasToImpact() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activePlacement, setActivePlacement] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % stats.length);
      setActivePlacement((prevIndex) => (prevIndex + 1) % placement.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto xl:max-w-[75%]  text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#1D1D1F] mb-16">From Ideas to Impact</h2>

        {/* <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-full p-1">
            <button 
            aria-label="Student Achievements"
             className="px-4 py-2 text-sm font-medium text-[#1D1D1F]  rounded-full">Student Achievements</button>
            <button 
            aria-label="Student Placements"
             className="px-4 py-2 text-sm font-medium text-[#1D1D1F] rounded-full">Research & Product Development</button>
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#1D1D1F] mt-10">
          {/* Placement and Job Offers */}
          <div className="bg-white rounded-2xl flex flex-col ">
            <div className="flex justify-center items-center">
              <motion.div
                key={activePlacement}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full "
              >
                {placement[activePlacement].component}
              </motion.div>
            </div>
            <div>
              {/* Carousel Dots */}
              <CarouselDots total={placement.length} active={activePlacement} onDotClick={setActiveIndex} className="mt-6" />
            </div>
          </div>
          <div className="">
            {/* Examination Pass Out Rate */}
            <div className="bg-white  rounded-2xl mb-6">
              <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6 h-full w-full">
             
                <div className="relative w-full h-52 md:h-full p-6">
                  <h3 className="text-4xl font-[900] mb-2 text-left lg:text-[60px]">97+</h3>
                  <p className="text-left text-2xl">Examination Pass Out Rate</p>
                  <p className="text-[16px] max-w-md text-left">Over the Past Six Academic Years</p>

                  {/* Bottom-anchored "View Report" */}
                  <div className="absolute bottom-0 left-0 p-6 flex items-center gap-1">
                    <p className="text-[16px] text-left">View Report</p>
                    <ChevronRight />
                  </div>
                </div>

                {/* Right Side - Text */}
                <div>
                  <div className="flex items-end justify-between w-full md:gap-4 gap-2 px-12 md:px-0">
                    {[
                      { year: "2021-22", value: 97.52 },
                      { year: "2019-20", value: 98.4 },
                      { year: "2018-19", value: 99.21 },
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center justify-end h-full">
                        <span className="mb-2 text-sm font-semibold text-primary">{item.value}%</span>

                        {/* Bar Container */}
                        <div className="relative xl:w-20 lg:w-16 md:w-14 w-10 h-80 bg-gray-200 rounded-t overflow-hidden flex items-end">
                          {/* Filled portion */}
                          <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: `${item.value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                            className="w-full absolute bottom-0 flex items-end justify-center"
                            style={{
                              background: "linear-gradient(to top, #2884CA, #6DC0EB)",
                            }}
                          >
                            <span className="text-xs font-medium text-white pb-1">{item.year}</span>
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Fest Awards */}
            <div className="bg-white rounded-2xl flex flex-col ">
              <div className="flex justify-center items-center">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full "
                >
                  {stats[activeIndex].component}
                </motion.div>
              </div>
              <div>
                {/* Carousel Dots */}
                <CarouselDots total={stats.length} active={activeIndex} onDotClick={setActiveIndex} className="mt-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
