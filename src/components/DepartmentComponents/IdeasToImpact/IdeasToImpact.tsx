"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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

 

  csdData: {
    slNo: number;
    enrollment: string;
    name: string;
    event: string;
    institution: string;
    date: string;
    prize: string;
  }[];
};

type TableHeader = {
  key: string;
  label: string;
};

type TableRow = {
  [key: string]: string | number | string[];
};

interface IdeasToImpactProps {
  ideasData: IdeasData;
  tableHeaders: TableHeader[];
  tableRows: TableRow[];
}

export default function IdeasToImpact({ ideasData, tableHeaders, tableRows }: IdeasToImpactProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activePlacement, setActivePlacement] = useState(0);
  const [showTable, setShowTable] = useState(false);

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
          {/* Awards Card */}
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-2xl flex flex-col flex-1">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full flex-1"
              >
                <div className="bg-white p-6 rounded-2xl mb-6 h-full">
                  <div className="grid grid-cols-2 items-center gap-6 h-full">
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

              <div className="flex justify-between items-center px-6">
                <CarouselDots
                  total={awards.length}
                  active={activeIndex}
                  onDotClick={setActiveIndex}
                  className="mt-6"
                />
              { tableHeaders&& tableRows &&<button
                  onClick={() => setShowTable(!showTable)}
                  className="text-primary font-semibold mt-6"
                >
                  {showTable ? "Hide Details" : "See More"}
                </button>}
              </div>
            </div>
          </div>

              {showTable && (
          <div className="rounded overflow-x-auto hide-scrollbar lg:hidden mt-4 text-[#1D1D1F]  border border-gray-200 w-full">
            <table className="w-full text-left text-[13px] md:text-[15px]">
              <thead className="bg-[#F3F8FC] text-[#2884CA]">
                <tr>
                  {tableHeaders.map((header) => (
                    <th key={header.key} className="py-3 md:px-4 px-1 border-b">
                      {header.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, idx) => (
                  <tr key={idx} className="">
                    {tableHeaders.map((header) => {
                      const cell = row[header.key];
                      return (
                        <td key={header.key} className="py-3 md:px-4 px-1 border-b ">
                          {Array.isArray(cell)
                            ? cell.map((item, i) => <div key={i}>{item}</div>)
                            : cell}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

          {/* Examination Pass Rate Card */}
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-2xl p-6 flex-1">
              <div className="grid md:grid-cols-2 items-center gap-6 h-full">
                <div className="relative w-full h-52 md:h-full">
                  <h3 className="text-4xl font-[900] mb-2 text-left lg:text-[60px]">
                    {ideasData.passoutTotlas}
                  </h3>
                  <p className="text-left text-2xl">Examination Pass Out Rate</p>
                  <p className="text-[16px] max-w-md text-left">
                    Over the Past Three Academic Years
                  </p>
                </div>

                <div className="flex items-end justify-between w-full md:gap-4 gap-2 px-12 md:px-0">
                  {passOutRates.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-end h-full"
                    >
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
                            background: "linear-gradient(to top, #2884CA, #6DC0EB)",
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
          </div>
        </div>

        {/* Dynamic Table */}
        {showTable && (
           <div className="rounded overflow-hidden hidden text-[#1D1D1F] mt-10 lg:block border border-gray-200 w-full">
            <table className="w-full text-left text-[13px] md:text-[15px]">
              <thead className="bg-[#F3F8FC] text-[#2884CA]">
                <tr>
                  {tableHeaders.map((header) => (
                    <th key={header.key} className="py-3  md:px-4 px-1 border-b">
                      {header.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, idx) => (
                  <tr key={idx} className="">
                    {tableHeaders.map((header) => {
                      const cell = row[header.key];
                      return (
                        <td key={header.key} className="py-3 md:px-4 px-1 border-b ">
                          {Array.isArray(cell)
                            ? cell.map((item, i) => <div key={i}>{item}</div>)
                            : cell}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
