"use client";

import React, { useState } from "react";
import ModelTable from "../../PhysicalEducationPageComponents/PhyTable/PhyTable";

// ✅ Import all year data correctly
import data2022 from "@/utils/recruitersData/recruiters2022.json";
import data2023 from "@/utils/recruitersData/recruiters2023.json";
import data2024 from "@/utils/recruitersData/recruiters2024.json";
import data2025 from "@/utils/recruitersData/recruiters2025.json";

const RecruitersList: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState("2025");

  // ✅ Map years to JSON data
  const recruitersData: Record<string, any> = {
    "2025": data2025,
    "2024": data2024,
    "2023": data2023,
    "2022": data2022,
  };

  // ✅ Get current batch data based on selected year
  const currentBatch = recruitersData[selectedYear];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 text-center">
      <h1 className="text-3xl md:text-[40px] lg2:text-5xl  font-bold text-black text-center mb-22">
        Batch Recruiters
      </h1>

      {/* ✅ Year Switch Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.keys(recruitersData)
          .sort((a, b) => Number(b) - Number(a)) // show 2025 → 2022
          .map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-md text-sm font-medium border transition ${
                selectedYear === year
                  ? "bg-[#1A73E8] text-white border-[#1A73E8]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-[#F8FBFD]"
              }`}
            >
              {year} Batch
            </button>
          ))}
      </div>

      {/* ✅ Recruiter Table */}
      {currentBatch ? (
        <ModelTable
          title={`${selectedYear} Batch Recruiters`}
          headers={currentBatch.headers}
          rows={currentBatch.rows}
        />
      ) : (
        <p className="text-gray-500">No data available for {selectedYear}.</p>
      )}
    </div>
  );
};

export default RecruitersList;
