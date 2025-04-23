"use client";

import React from "react";
import Image from "next/image";
import empoweringFuture from "../../../../public/backgroundImages/empoweringFutures.png";
import { motion } from "framer-motion";

const EmpoweringFutures: React.FC = () => {
  return (
    <section className="relative max-w-7xl xl:max-w-[75%]  overflow-hidden bg-white text-black mx-auto">
      {/* Top Content */}
      <div className="flex justify-between items-start ] mx-auto py-10">
        <div>
          <h2 className="text-4xl md:text-2xl lg:text-3xl lg2:text-4xl xl:text-5xl font-semibold leading-tight">Empowering <br/>Futures</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            Discover exceptional placement opportunities and industry connections that pave the way for success at Canara Engineering College.
          </p>
        </div>
        <button className="bg-primary text-white font-medium px-6 py-2 rounded-full mt-4 md:mt-0">Learn More</button>
      </div>

      {/* Banner Section */}
      <div className="w-full hidden md:flex relative rounded-xl items-center  shadow-lg">
        {/* Text Overlay (Top Left) */}
        <div className="absolute text-white w-1/2  rounded-md z-10 pl-20">
          <h3 className="text-4xl md:text-2xl lg:text-3xl lg2:text-4xl xl:text-5xl font-semibold pb-6 xl:leading-13">A fulfilling career begins with our dedicated Placement Department. </h3>
          <p className="text-xl text-white/80">
            Step into a world of exciting career possibilities, where we focus not just on placements, but on honing your skills through tailored
            training and internship opportunities.{" "}
          </p>
        </div>

        {/* Image */}
        <Image src={empoweringFuture} alt="empoweringFuture" className="rounded-xl w-full h-auto object-cover" />
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
          <h3 className="text-[100px] font-bold leading-none">1.2K+</h3>
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

          <p className=" text-[24px] font-semibold text-gray-800">Cumulative Batch <br/>Placement Rate</p>
          <p className="text-[16px] text-gray-500">Over the past 4 Years</p>
        </div>
      </div>
    </section>
  );
};

export default EmpoweringFutures;
