"use client";

import React, { useState, useRef } from "react";

interface ModelTableProps {
  headers: string[];
  rows: string[][];
  title: string;
}

const ModelTable: React.FC<ModelTableProps> = ({ title, headers, rows }) => {
  const [showMore, setShowMore] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);

  // Limit to first 6 rows unless expanded
  const visibleRows = showMore ? rows : rows.slice(0, 6);

  const handleToggle = () => {
    if (showMore && tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setShowMore(!showMore);
  };

  return (
    <div className="pb-10" ref={tableRef}>
      <h1 className="text-3xl md:text-[40px] text-center lg2:text-5xl xl:text-6xl mb-5 font-bold text-[#1D1D1F]">
        {title}
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
          <thead className="bg-[#F3F8FC] text-[#2884CA]">
            <tr>
              
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
            {visibleRows.map((row, rowIndex) => (
              <tr key={rowIndex} className="text-textGray">
                <td className="py-3 md:px-4 px-1 border-b">{rowIndex + 1}.</td>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="py-3 md:px-4 px-1 border-b">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Show button only if rows > 6 */}
      {rows.length > 6 && (
        <div className="flex justify-center">
          <button
            onClick={handleToggle}
            className="mt-6 px-5 py-2 rounded-lg text-[#0066CC] font-medium hover:underline"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ModelTable;
