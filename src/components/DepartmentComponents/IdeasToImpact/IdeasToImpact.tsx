"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { CarouselDots } from "../CarouselDots/CarouselDots";
type IdeasData = {
  placements: {
    percentage: string;
    title: string;
    description: string;
    chartData: {
      year: string;
      total: number;
      placed: number;
      offers: number;
    }[];
  }[];

  passOutRates: {
    year: string;
    value: number;
  }[];

  awards: {
    image: string;
    title: string;
    subtitle: string;
  }[];

  passoutTotlas:{
    value:string;
  }
};




export default function IdeasToImpact({ideasData}: IdeasData) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activePlacement, setActivePlacement] = useState(0);

  const placements = ideasData.placements;
  const awards = ideasData.awards;
  const passOutRates = ideasData.passOutRates;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % awards.length);
      setActivePlacement((prev) => (prev + 1) % placements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [awards.length, placements.length]);

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto xl:max-w-[75%] text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#1D1D1F] mb-16">
          From Ideas to Impact
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#1D1D1F] mt-10">
          {/* Placements */}
          <div className="bg-white rounded-2xl flex flex-col">
            <motion.div
              key={activePlacement}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <div className="bg-white p-6 rounded-2xl">
                <h3 className="text-4xl font-[900] mb-2 text-left lg:text-[60px]">
                  {placements[activePlacement].percentage}
                </h3>
                <p className="text-left text-2xl">{placements[activePlacement].title}</p>
                <p className="text-[16px] max-w-md text-left">
                  {placements[activePlacement].description}
                </p>

                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    data={placements[activePlacement].chartData}
                    margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
                    barSize={90}
                    barCategoryGap="20%"
                  >
                    <defs>
                      <linearGradient id="placedGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#268CD8" />
                        <stop offset="100%" stopColor="#144A72" />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="year" />
                    <YAxis hide />
                    <Tooltip />
                    <Bar dataKey="placed" stackId="a" fill="url(#placedGradient)" />
                    <Bar dataKey="offers" stackId="a" fill="#6DC0EB" />
                    <Bar dataKey="total" stackId="a" radius={[10, 10, 0, 0]} fill="#fff" stroke="#D9D9D9" />
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
            </motion.div>

            
          </div>

          {/* Examination Pass Rate & Awards */}
          <div>
            {/* Examination Pass Out Rate */}
            <div className="bg-white rounded-2xl mb-6 p-6">
              <div className="grid md:grid-cols-2 items-center gap-6">
                <div className="relative w-full h-52 md:h-full">
                  <h3 className="text-4xl font-[900] mb-2 text-left lg:text-[60px]">{ideasData.passoutTotlas}+</h3>
                  <p className="text-left text-2xl">Examination Pass Out Rate</p>
                  <p className="text-[16px] max-w-md text-left">
                    Over the Past Three Academic Years
                  </p>
                </div>

                <div className="flex items-end justify-between w-full md:gap-4 gap-2 px-12 md:px-0">
                  {passOutRates.map((item, index) => (
                    <div key={index} className="flex flex-col items-center justify-end h-full">
                      <span className="mb-2 text-sm font-semibold text-primary">
                        {item.value}%
                      </span>
                      <div className="relative xl:w-20 lg:w-16 md:w-14 w-10 h-80 bg-gray-200 rounded-t overflow-hidden flex items-end">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.2 }}
                          className="w-full absolute bottom-0 flex items-end justify-center"
                          style={{
                            background: "linear-gradient(to top, #2884CA, #6DC0EB)"
                          }}
                        >
                          <span className="text-xs font-medium text-white pb-1">
                            {item.year}
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Fest Awards */}
            <div className="bg-white rounded-2xl flex flex-col">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <div className="bg-white p-6 rounded-2xl mb-6">
                  <div className="grid grid-cols-2 items-center gap-6">
                    <div className="relative w-full h-48">
                      <Image
                        src={awards[activeIndex].image}
                        alt={awards[activeIndex].title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold mb-4 text-left">
                        {awards[activeIndex].title}
                      </h4>
                      <p className="text-gray-600 text-left max-w-[70%]">
                        {awards[activeIndex].subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <CarouselDots
                total={awards.length}
                active={activeIndex}
                onDotClick={setActiveIndex}
                className="mt-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
