"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import empoweringFuture from "../../../../public/backgroundImages/empoverImages-2.png";
import { motion } from "framer-motion";
import { CarouselDots } from "@/components/Common/CarouselDots/CarouselDots";
import Link from "next/link";

type Stat = {
  component: React.ReactNode;
};

const stats: Stat[] = [
  {
    component: (
      <div className="bg-[#F5F5F7] rounded-xl px-6 shadow h-80">
        <h4 className="text-2xl text-black font-semibold mb-4 text-left pt-4">Among the Highest in the Region in terms of Placements</h4>
        <div className="flex items-end justify-between h-40 w-full">
          {[
            { year: "2021-22", value: 270, paddingTop: "65px" },
            { year: "2020-21", value: 284, paddingTop: "70px" },
            { year: "2019-20", value: 330, paddingTop: "85px" },
            { year: "2018-19", value: 400, paddingTop: "110px" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-end">
              <span className="mb-2 text-sm font-semibold text-primary">{item.value}</span>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${item.value / 3}px` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                className="w-12  rounded-t"
                style={{
                  background: "linear-gradient(to top, #2884CA, #6DC0EB)",
                  paddingTop: item.paddingTop,
                }}
              >
                <span className="mt-20 text-[10px] pl-1 font-medium text-white">{item.year}</span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    component: (
      <div
        style={{
          background: `linear-gradient(to top, #00173B, #2884CA, #6DC0EB), url(/svgs/common/buisnessBag.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="text-white rounded-xl p-6 h-80 shadow flex flex-col justify-center items-center relative"
      >
        <Image src="/svgs/common/buisnessBag.svg" alt="business bag" width={350} height={100} className="absolute " />
        <h3 className="text-[100px] font-[900] leading-none z-10">1.2K+</h3>
        <p className="mt-2 text-3xl font-bold z-10">Students Placed</p>
        <p className="text-sm opacity-80 z-10">Over the past 4 Years</p>
      </div>
    ),
  },
  {
    component: (
      <div
        style={{
          backgroundImage: "url('/svgs/common/placementRate.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="text-white rounded-xl h-80 shadow flex flex-col justify-center items-center p-6"
      >
        <h3 className="text-[60px] pt-[60px] font-extrabold bg-gradient-to-r from-[#2884CA] to-[#6DC0EB] text-transparent bg-clip-text">78.82%</h3>
        <p className="text-[24px] font-semibold text-gray-800 text-center">
          Cumulative Batch <br /> Placement Rate
        </p>
        <p className="text-[16px] text-gray-500">Over the past 4 Years</p>
      </div>
    ),
  },
];

export default function EmpoweringFutures() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <section className="max-w-6xl xl:max-w-[75%]  overflow-hidden text-black mx-auto hidden md:block">
        {/* Top Content */}
        <div className="flex justify-between items-start  mx-auto pb-16">
          <div>
            <h2 className="text-3xl text-[#1D1D1F] md:text-[40px] lg2:text-5xl xl:text-6xl font-bold leading-tight">
              Empowering Futures
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Discover exceptional placement opportunities and industry connections that pave the way for success at Canara Engineering College.
            </p>
          </div>
          <Link href="/training-placements">
            {" "}
            <button aria-label="Learn More" className="bg-primary text-white font-medium px-6 py-2 rounded-full mt-4 md:mt-0">
              Learn More
            </button>
          </Link>{" "}
        </div>

        {/* Banner Section */}
        <div className="w-full hidden md:flex relative rounded-xl items-center  shadow-lg">
          {/* Text Overlay (Top Left) */}
          <div className="absolute text-white w-1/2  rounded-md z-10 pl-20">
            <h3 className="text-4xl md:text-2xl lg:text-3xl lg2:text-4xl xl:text-5xl font-semibold pb-6 xl:leading-13">
              A fulfilling career begins with our dedicated Placement Department.{" "}
            </h3>
            <p className="text-[19px] text-white/80">
              Step into a world of exciting career possibilities, where we focus not just on placements, but on honing your skills through tailored
              training and internship opportunities.{" "}
            </p>
          </div>

          {/* Image */}
          <Image src={empoweringFuture} alt="empoweringFuture" className="rounded-xl w-full h-[500px] object-cover object-center" />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center w-full mt-12">
          {/* Bar Chart Card */}
          <div className="bg-[#F5F5F7]  rounded-xl px-6 shadow">
            <h4 className="text-2xl font-semibold mb-4 text-left pt-4">Among the Highest in the Region in terms of Placements</h4>
            <div className="flex items-end justify-between h-40 w-full">
              {[
                { year: "2021-22", value: 270, paddingTop: "65px" },
                { year: "2020-21", value: 284, paddingTop: "70px" },
                { year: "2019-20", value: 330, paddingTop: "85px" },
                { year: "2018-19", value: 400, paddingTop: "110px" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-end">
                  <span className="mb-2 text-sm font-semibold text-primary">{item.value}</span>
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${item.value / 3}px` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                    className={`xl:w-20 lg:w-16 md:w-14 rounded-t`}
                    style={{
                      background: "linear-gradient(to top, #2884CA, #6DC0EB)",
                      paddingTop: item.paddingTop,
                    }}
                  >
                    <span className="mt-20 text-sm font-medium text-white">{item.year}</span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Card */}
          <div
            style={{
              background: `linear-gradient(to top, #2884CA, #6DC0EB), url(/svgs/common/buisnessBag.svg)`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="text-white rounded-xl p-6 shadow flex flex-col justify-center items-center"
          >
            <Image src="/svgs/common/buisnessBag.svg" alt="image" width={250} height={100} className="absolute" />
            <h3 className="text-[100px] font-bold leading-none">1.6K+</h3>
            <p className="mt-2 text-3xl font-bold">Student placed</p>
            <p className="text-sm opacity-80">Over the past 4 Years</p>
          </div>

          {/* Right Card */}
          <div
            style={{
              backgroundImage: "url('/svgs/common/placementRate.svg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="text-white rounded-xl  shadow flex flex-col justify-center items-center"
          >
            <h3 className="text-[60px] pt-[60px] font-extrabold bg-gradient-to-r from-[#2884CA] to-[#6DC0EB] text-transparent bg-clip-text">
              78.82%
            </h3>

            <p className=" text-[24px] font-semibold text-gray-800">
              Cumulative Batch <br />
              Placement Rate
            </p>
            <p className="text-[16px] text-gray-500">Over the past 4 Years</p>
          </div>
        </div>
      </section>
      <section className="w-full md:hidden block px-1 py-24">
        {/* Mobile View */}
        <h1 className="text-3xl text-center text-black font-bold pb-4">Empowering Futures</h1>
        <p className="text-center text-textGray font-medium pb-16 text-[14px]">
          Discover exceptional placement opportunities and industry connections that pave the way for success at Canara Engineering College.{" "}
        </p>
        <div className="md:hidden flex flex-col items-center">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-md"
          >
            {stats[activeIndex].component}
          </motion.div>

          {/* Carousel Dots */}
          <CarouselDots total={stats.length} active={activeIndex} onDotClick={setActiveIndex} className="mt-6" />
        </div>
        <button
          aria-label="Learn More"
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
          className="bg-primary text-white font-medium px-6 py-2 rounded-full mt-10 md:mt-0 w-full"
        >
          Learn More
        </button>
      </section>
    </>
  );
}