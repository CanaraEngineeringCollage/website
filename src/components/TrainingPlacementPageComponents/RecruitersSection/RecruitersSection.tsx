"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Import all year data correctly
import data2022 from "@/utils/recruitersData/recruiters2022.json";
import data2023 from "@/utils/recruitersData/recruiters2023.json";
import data2024 from "@/utils/recruitersData/recruiters2024.json";
import data2025 from "@/utils/recruitersData/recruiters2025.json";

const RecruitersList: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [showMore, setShowMore] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);

  // ✅ Map years to JSON data
  const recruitersData: Record<string, any> = {
    "2025": data2025,
    "2024": data2024,
    "2023": data2023,
    "2022": data2022,
  };

  // ✅ Get current batch data based on selected year
  const currentBatch = recruitersData[selectedYear];

  // ✅ Table logic (same as before)
  const visibleRows = showMore
    ? currentBatch?.rows
    : currentBatch?.rows?.slice(0, 6) || [];

  const handleToggle = () => {
    if (showMore && tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setShowMore(!showMore);
  };

  return (
    <div className="max-w-7xl xl:max-w-[75%] mx-auto   text-center">
      <h1 className="text-3xl md:text-[40px] lg2:text-5xl font-bold text-[#1D1D1F] text-center mb-10">
        Batch Recruiters
      </h1>

      {/* ✅ Year Switch Buttons */}
     <div className="hidden md:flex flex-wrap gap-2 mb-8 justify-start">
        {Object.keys(recruitersData)
          .sort((a, b) => Number(b) - Number(a))
          .map((year) => (
            <button
              key={year}
              onClick={() => {
                setSelectedYear(year);
                
              }}
              className={`px-8 py-2 rounded-md text-sm font-medium border transition ${
                selectedYear === year
                  ? "text-white bg-primary"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-[#F8FBFD]"
              }`}
            >
              {year} Batch
            </button>
          ))}
      </div>

      {/* ✅ Mobile Dropdown */}
     

      {/* ✅ Table Section (merged ModelTable) */}
      <AnimatePresence mode="wait">
        {currentBatch ? (
          <motion.div
            key={selectedYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:pb-10"
            ref={tableRef}
          >
            <h1 className="text-xl hidden md:block lg:text-4xl md:text-xl text-start mb-5 font-bold leading-[1.1] text-[#1D1D1F]">
              {selectedYear} Batch Recruiters
            </h1>

            <div className=" flex md:hidden mb-5 gap-2 justify-between items-center">
              <h1 className="text-xl lg:text-4xl md:text-xl text-start  font-bold leading-[1.1] text-[#1D1D1F]">
                {selectedYear} Batch
              </h1>
              <div className="block md:hidden ">
                <select
                  value={selectedYear}
                  onChange={(e) => {
                    setSelectedYear(e.target.value);
                    setShowMore(false);
                  }}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {Object.keys(recruitersData)
                    .sort((a, b) => Number(b) - Number(a))
                    .map((year) => (
                      <option key={year} value={year}>
                        {year} Batch
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-max rounded overflow-hidden border border-gray-200">
                <table className="min-w-max lg:min-w-full text-left border border-gray-200 text-[13px] md:text-[15px]">

                  <thead className="bg-[#F3F8FC] text-[#2884CA]">
                    <tr>
                      {currentBatch.headers.map((header: string, index: number) => (
                        <th key={index} className="py-3 md:px-4 px-1 border-b">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody
                    className={`transition-all duration-700 ease-in-out overflow-hidden ${
                      showMore ? "max-h-[5000px]" : "max-h-[600px]"
                    }`}
                  >
                    {visibleRows.map((row: string[], rowIndex: number) => (
                      <tr key={rowIndex} className="text-textGray">
                        <td className="py-3 md:px-4 px-1 border-b">{rowIndex + 1}.</td>
                        {row.map((cell: string, cellIndex: number) => (
                          <td key={cellIndex} className="py-3 md:px-4 px-1 border-b">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Show button only if rows > 6 */}
            {currentBatch.rows.length > 6 && (
              <div className="flex justify-center">
                <button
                  onClick={handleToggle}
                  className="mt-6 px-5 py-2 rounded-lg text-[#0066CC] font-medium hover:underline"
                >
                  {showMore ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.p
            key="no-data"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-gray-500"
          >
            No data available for {selectedYear}.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RecruitersList;
