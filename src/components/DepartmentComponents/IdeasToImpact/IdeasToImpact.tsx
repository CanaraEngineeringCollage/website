"use client";

import { useEffect, useState, useRef } from "react"; // --- NEW: Added useRef
import { motion } from "framer-motion";
import Image from "next/image";
import { CarouselDots } from "../CarouselDots/CarouselDots";

// --- Types ---
type TableHeader = {
  key: string;
  label: string;
};

type TableRow = {
  [key: string]: string | number | string[];
};

type AwardTableData = {
  id: string;
  title?: string;
  headers: TableHeader[];
  rows: TableRow[];
};

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
  passoutTotlas: string;
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

interface IdeasToImpactProps {
  ideasData: IdeasData;
  allAwards: AwardTableData[];
}

// --- Sub-Component ---
function AwardsTable({
  headers,
  rows,
}: {
  headers: TableHeader[];
  rows: TableRow[];
}) {
  return (
    <div className="rounded overflow-x-auto lg:overflow-hidden border border-gray-200 w-full mt-5 lg:mt-4 text-[#1D1D1F]">
      <table className="w-full text-left text-[13px] md:text-[15px]">
        <thead className="bg-[#F3F8FC] text-[#2884CA]">
          <tr>
            {headers.map((header) => (
              <th key={header.key} className="py-3 md:px-4 px-1 border-b">
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              {headers.map((header) => {
                const cell = row[header.key];
                return (
                  <td key={header.key} className="py-3 md:px-4 px-1 border-b">
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
  );
}

// --- Main Component ---
export default function IdeasToImpact({
  ideasData,
  allAwards,
}: IdeasToImpactProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  
  // --- NEW: Create a reference to the section you want to scroll back to
  const scrollTargetRef = useRef<HTMLDivElement>(null);

  const placements = ideasData.placements;
  const awards = ideasData.awards;
  const passOutRates = ideasData.passOutRates;

  useEffect(() => {
    if (!awards?.length || !placements?.length) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % awards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [awards?.length, placements?.length]);

  // --- NEW: Helper function to handle closing and scrolling
  const handleHideDetails = () => {
    setVisibleCount(0); // Close tables
    // Scroll back to the awards card smoothly
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // --- Helper to Render Tables Dynamically ---
  const renderDynamicTables = () => {
    if (!allAwards || allAwards.length === 0) return null;

    return (
      <>
        {allAwards.map((table, index) => {
          if (index >= visibleCount) return null;

          const isLastVisibleItem = index === visibleCount - 1;
          const isFullyExpanded = visibleCount === allAwards.length;

          return (
            <div key={table.id} className="animate-fadeIn text-center">
              
                <h4 className="text-3xl lg:text-3xl font-bold leading-tig mt-8 lg:mt-10 text-center text-[#1D1D1F]">
                  {table.title}
                </h4>
           

              <AwardsTable headers={table.headers} rows={table.rows} />

              {isLastVisibleItem && (
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      if (isFullyExpanded) {
                        handleHideDetails(); // --- NEW: Use helper here
                      } else {
                        setVisibleCount((prev) => prev + 1);
                      }
                    }}
                    className="text-primary text-center font-semibold mt-6 block"
                  >
                    {isFullyExpanded ? "Hide Details" : "See More"}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto xl:max-w-[75%] text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#1D1D1F] lg:mb-16">
          From Ideas to Impact
        </h2>

        <div
          // --- NEW: Attach the ref here so we scroll back to THIS point
          ref={scrollTargetRef} 
          className={`grid grid-cols-1 ${
            awards ? "lg:grid-cols-2 md:mt-14 mt-10" : "lg:w-[70%] mx-auto mt-5"
          } lg:gap-8 text-[#1D1D1F] lg:mt-10`}
        >
          {/* Awards Card */}
          {awards && (
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

                  {allAwards.length > 0 && (
                    <button
                      onClick={() =>
                        visibleCount === 0 
                          ? setVisibleCount(1) 
                          : handleHideDetails() // --- NEW: Use helper here
                      }
                      className="text-primary font-semibold mt-6"
                    >
                      {visibleCount === 0 ? "See More" : "Hide Details"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* MOBILE: Render Tables Here */}
          <div className="lg:hidden">{renderDynamicTables()}</div>

          {/* Pass Out Rate Card */}
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-2xl p-6 flex-1">
              <div className="grid md:grid-cols-2 items-center gap-6 h-full">
                <div className="relative w-full h-40 md:h-full">
                  <h3 className="text-4xl font-[900] mb-2 text-left lg:text-[60px]">
                    {ideasData.passoutTotlas}
                  </h3>
                  <p className="text-left text-2xl">
                    Examination Pass Out Rate
                  </p>
                  <p className="text-[16px] max-w-md text-left">
                    {passOutRates.length === 1
                      ? "Based on the first graduating batch"
                      : "Over the past academic years"}
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
                      <div className="relative xl:w-20 lg:w-16 md:w-14 w-16 h-80 bg-gray-200 rounded-t overflow-hidden flex items-end">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.2 }}
                          className="w-full absolute bottom-0 flex items-end justify-center"
                          style={{
                            background:
                              "linear-gradient(to top, #2884CA, #6DC0EB)",
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

        {/* DESKTOP: Render Tables Here */}
        <div className="hidden lg:block">{renderDynamicTables()}</div>
      </div>
    </section>
  );
}