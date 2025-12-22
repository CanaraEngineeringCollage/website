"use client";
import React, { useState } from "react";
// Make sure to create the file structure: utils/libraryData/libraryData.json
import libraryData from "../../../utils/libraryData/libraryData.json";
import CustomSelect from "@/components/Common/CustomSelect/CustomSelect";

// Helper function to render table cells with links
const renderTableCell = (text: string) => {
  if (text.startsWith("http")) {
    return (
      <a 
        href={text} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-[#2884CA] underline hover:text-blue-700 break-all"
      >
        Click Here
      </a>
    );
  }
  return text;
};

const LibraryPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  
  const sectionTitles = libraryData?.map((section) => section.title) || [];

  return (
    <section className="py-10 text-[#1D1D1F] lg2:px-24 mx-5 overflow-hidden">
      <div>
        <h1 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl font-bold pb-1 lg:pb-10 text-[#1D1D1F]">
          Central Library
        </h1>
        
        <div className={`md:grid grid-cols-1 gap-3 md:grid-cols-12 mt-10`}>
          {/* Sidebar Area */}
          <div className="col-span-3">
            
            {/* Mobile Dropdown */}
            <div className="block md:hidden mb-6">
              <CustomSelect
                value={libraryData[selectedIndex]?.title || ""}
                onChange={(e) => {
                  const newIndex = libraryData.findIndex((item) => item.title === e.target.value);
                  if (newIndex !== -1) setSelectedIndex(newIndex);
                }}
                options={sectionTitles}
              />
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden md:block sticky top-20">
              {libraryData?.map((section, index) => (
                <h1
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`border-b-2 text-[18px] lg:text-[20px] pb-3 mb-3 border-border cursor-pointer transition-colors ${
                    selectedIndex === index ? "text-[#2884CA] font-bold" : "text-textGray font-[500] hover:text-[#2884CA]"
                  }`}
                >
                  {section.title}
                </h1>
              ))}
            </div>
          </div>

          <div className="col-span-1"></div>

          {/* Content Area */}
          <div className="col-span-8 max-h-[70vh] md:max-h-[100vh] scrollable overflow-y-auto pr-2">
            {libraryData[selectedIndex]?.data?.map((item: any, i: number) => (
              <div key={i} className="mb-8">
                
                {/* Title */}
                {item.title && (
                  <h2 className="text-[20px] font-bold text-textGray mb-2">
                    {item.title}
                  </h2>
                )}

                {/* Description */}
                {item.description && (
                  <p className="md:text-lg text-[15px] leading-7 text-textGray whitespace-pre-line text-justify">
                    {item.description}
                  </p>
                )}

                {/* Bullet Points */}
                {item.points && (
                  <ul className="list-disc mt-3 pl-5 md:text-lg text-[15px] leading-7 text-textGray">
                    {item.points.map((point: string, j: number) => (
                      <li key={j} className="pb-2">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Image Section   */}
                {item.type === "image" && item.src && (
                  <div className="my-6 flex justify-center">
                    <img 
                      src={item.src} 
                      alt={item.alt || "Library Image"} 
                      className="rounded-lg  w-full  object-cover"
                    />
                  </div>
                )}

                {/* Iframe (for Docs) */}
                {item.href && (
                  <iframe
                    src={`${item.href}#toolbar=0&navpanes=0&view=FitH`}
                    className="w-full h-[60vh] md:h-[100vh] mt-7 border border-gray-200 rounded-lg"
                    title={item.title || `Document-${i}`}
                  ></iframe>
                )}

                {/* Table */}
                {item.type === "table" && (
                  <div className="overflow-x-auto mt-5">
                    <div className="rounded-lg border border-gray-200 w-full">
                      <table className="w-full text-left text-[14px] md:text-[16px]">
                        <thead className="bg-[#F3F8FC] text-[#2884CA]">
                          <tr>
                            {item.headers?.map((header: string, hIndex: number) => (
                              <th key={hIndex} className="py-3 px-4 border-b font-bold whitespace-nowrap">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {item.rows?.map((row: string[], rIndex: number) => {
                            // Check if this row is a Section Header (has text in 1st col, empty in others)
                            // This logic specifically targets the "Timing" table structure
                            const isSectionHeader = row.length > 1 && row.slice(1).every(cell => cell.trim() === "");

                            if (isSectionHeader) {
                              return (
                                <tr key={rIndex} className="bg-gray-100">
                                  <td 
                                    colSpan={item.headers.length} 
                                    className="py-3 px-4 border-b font-bold text-[#2884CA]"
                                  >
                                    {row[0]}
                                  </td>
                                </tr>
                              );
                            }

                            return (
                              <tr key={rIndex} className="text-textGray hover:bg-gray-50 transition-colors">
                                {row.map((cell: string, cIndex: number) => (
                                  <td key={cIndex} className="py-3 px-4 border-b align-top">
                                    {renderTableCell(cell)}
                                  </td>
                                ))}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryPage;