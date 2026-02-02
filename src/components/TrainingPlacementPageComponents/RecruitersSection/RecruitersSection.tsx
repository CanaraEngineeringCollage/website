"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Define interface matching your NestJS Entity
interface TopRecruiter {
  id: number;
  companyName: string;
  mode: string;    // On Campus/Pool/Off Campus
  type: string;    // IT/Core
  package: string;
  count: number;
  year: string;
}

const RecruitersList: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [availableYears, setAvailableYears] = useState<string[]>([]);
  const [recruiters, setRecruiters] = useState<TopRecruiter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showMore, setShowMore] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);

  // ✅ API Base URL (Update this if your backend runs on a different port/URL)
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  // ✅ 1. Fetch Distinct Years on Mount
  useEffect(() => {
    const fetchYears = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/placement/top-recruiters/years`);
        if (res.ok) {
          const data = await res.json();
          // Sort years descending (Newest first)
          const sortedYears = data
            .map(String)
            .sort((a: string, b: string) => Number(b) - Number(a));
            
          setAvailableYears(sortedYears);
          
          // Default to the latest year
          if (sortedYears.length > 0) {
            setSelectedYear(sortedYears[0]);
          }
        }
      } catch (error) {
        console.error("Failed to fetch years:", error);
      }
    };

    fetchYears();
  }, [API_BASE_URL]);

  // ✅ 2. Fetch Data when Year Changes
  useEffect(() => {
    if (!selectedYear) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetching with a high limit to handle client-side "Show More"
        const res = await fetch(
          `${API_BASE_URL}/placement/top-recruiters?year=${selectedYear}&limit=100`
        );
        
        if (res.ok) {
          const result = await res.json();
          setRecruiters(result.data || []);
        } else {
          setRecruiters([]);
        }
      } catch (error) {
        console.error("Failed to fetch recruiters:", error);
        setRecruiters([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedYear, API_BASE_URL]);

  // ✅ Table Logic
  const visibleRows = showMore
    ? recruiters
    : recruiters.slice(0, 6);

  const handleToggle = () => {
    if (showMore && tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setShowMore(!showMore);
  };

  // ✅ Define Headers based on your Entity
  const headers = ["Company Name", "Mode", "Type of Company", "Package (LPA)", "Grand Total"];

  return (
    <div className="max-w-7xl xl:max-w-[75%] mx-auto text-center">
      <h1 className="text-3xl md:text-[40px] lg2:text-5xl font-bold text-[#1D1D1F] text-center mb-10">
        Batch Recruiters
      </h1>

      {/* ✅ Year Switch Buttons (Dynamic) */}
      <div className="hidden md:flex flex-wrap gap-2 mb-8 justify-start">
        {availableYears.map((year) => (
          <button
            key={year}
            onClick={() => {
              setSelectedYear(year);
              setShowMore(false);
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

      {/* ✅ Mobile Dropdown & Table Section */}
      <AnimatePresence mode="wait">
        {!loading && recruiters.length >= 0 ? (
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

            {/* Mobile Dropdown */}
            <div className="flex md:hidden mb-5 gap-2 justify-between items-center">
              <h1 className="text-xl lg:text-4xl md:text-xl text-start font-bold leading-[1.1] text-[#1D1D1F]">
                {selectedYear} Batch
              </h1>
              <div className="block md:hidden">
                <select
                  value={selectedYear}
                  onChange={(e) => {
                    setSelectedYear(e.target.value);
                    setShowMore(false);
                  }}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {availableYears.map((year) => (
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

                  {/* ✅ Dynamic Headers based on Entity */}
                  <thead className="bg-[#F3F8FC] text-[#2884CA]">
                    <tr>
                      <th className="py-3 md:px-4 px-1 border-b">Sl no</th>
                      {headers.map((header, index) => (
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
                    {/* ✅ Map Entity Data to Table Rows */}
                    {visibleRows.map((item, rowIndex) => (
                      <tr key={item.id || rowIndex} className="text-textGray">
                        <td className="py-3 md:px-4 px-1 border-b">
                          {rowIndex + 1}.
                        </td>
                        <td className="py-3 md:px-4 px-1 border-b">
                          {item.companyName}
                        </td>
                        <td className="py-3 md:px-4 px-1 border-b">
                          {item.mode}
                        </td>
                        <td className="py-3 md:px-4 px-1 border-b">
                          {item.type}
                        </td>
                        <td className="py-3 md:px-4 px-1 border-b">
                          {item.package}
                        </td>
                        <td className="py-3 md:px-4 px-1 border-b">
                          {item.count}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Show button only if rows > 6 */}
            {recruiters.length > 6 && (
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
            className="text-gray-500 py-10"
          >
            {loading ? "Loading..." : `No data available for ${selectedYear}.`}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RecruitersList;