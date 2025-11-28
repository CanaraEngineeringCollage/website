"use client";
import React, { useState } from "react";
import managementData from "../../../../utils/managementData/managementData.json"; // Adjust the path based on your project structure
import Image from "next/image";

interface ManagementItem {
  title: string;
  name: string;
  year?: string;
  programs?: string;
  address?: string;
}

interface CanaraInstituteItem {
  "Sl.No": string;
  "Name": string;
  "Year of Est.": string;
  "Programs of Study": string;
  "Address": string;
}

interface ManagementData {
  [key: string]: ManagementItem[] | CanaraInstituteItem[];
}

const HeroSection = () => {
  const data: ManagementData = managementData; // Use imported JSON data
  const [selectedHeading, setSelectedHeading] = useState<string>("Office Bearers");

  const headings: string[] = ["Office Bearers", "Governing Body Members", "Special Invitee(s)", "Organisational Structure", "Canara Institutes"];

  return (
    <section>
      <div className="px-4 sm:px-10 md:px-16 lg:px-24  py-12 sm:py-16 md:py-20">
        <h1 className=" text-[#1D1D1F] text-[39px] lg:text-[54px] font-bold mb-8 sm:mb-10 md:mb-16">Our Management</h1>
        <div className="grid grid-cols-1 md:grid-cols-12 ">
       {/* Mobile: Select dropdown */}
<div className="block sm:hidden mb-6">
  <div className="relative">
    <select
      value={selectedHeading}
      onChange={(e) => setSelectedHeading(e.target.value)}
className="w-full border border-gray-300 rounded-md p-3 pr-10 text-[16px] text-textGray 
           focus:outline-none focus:ring-0 focus:border-[#2884CA] appearance-none"

    >
      {headings.map((heading, index) => (
        <option key={index} value={heading}>
          {heading} 
        </option>
      ))}
    </select>

    {/* Custom Arrow */}
    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
    <svg width="10" height="10" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9419 14.783L25.452 3.27266C25.7185 3.00644 25.8652 2.65106 25.8652 2.27213C25.8652 1.89319 25.7185 1.53781 25.452 1.27159L24.6046 0.423934C24.0524 -0.127643 23.1549 -0.127643 22.6035 0.423934L12.938 10.0895L3.26173 0.413209C2.9953 0.146988 2.64012 -1.0152e-06 2.2614 -1.03176e-06C1.88226 -1.04833e-06 1.52709 0.146988 1.26045 0.413208L0.413208 1.26087C0.146777 1.5273 -6.96497e-07 1.88247 -7.13061e-07 2.2614C-7.29625e-07 2.64033 0.146777 2.99572 0.413208 3.26194L11.9339 14.783C12.2011 15.0499 12.558 15.1964 12.9373 15.1956C13.3182 15.1964 13.6748 15.0499 13.9419 14.783Z" fill="#2A2A2A"/>
</svg>


    </span>
  </div>
</div>


{/* Desktop: Heading list */}
<div className="hidden sm:block md:col-span-3 text-[20px]">
  {headings.map((heading, index) => (
    <h1
      key={index}
      className={`border-b-2 pb-3 mb-3 border-border cursor-pointer ${
        selectedHeading === heading ? "text-[#2884CA] font-bold" : "text-textGray"
      }`}
      onClick={() => setSelectedHeading(heading)}
    >
      {heading}
    </h1>
  ))}
</div>

          <div className="md:col-span-1"></div>
          <div className="md:col-span-8 mt-5 md:mt-0">
            <h1 className="text-textGray font-bold text-[20px] pb-6 sm:pb-8 md:pb-8">Canara High School Association {selectedHeading}</h1>
            {/* Mobile layout: title and name in the same line */}
            {selectedHeading === "Organisational Structure" ? (
              <div>
                <Image
                  alt="orginazation"
                  src="https://www.canaraengineering.in/orgchart.png"
                  width={1000}
                  height={100}
                  className="object-cover w-[80%] h-[80%]"
                />
              </div>
            ) : selectedHeading === "Canara Institutes" ? (
              <div className="overflow-x-auto">
                <div className="rounded overflow-x-auto border border-gray-200 w-full">
                <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px] ">
                  <thead>
                    <tr className="bg-[#F3F8FC] text-[#2884CA]">
                      <th className="py-3 md:px-4 px-1 border-b">Sl.No</th>
                      <th className="py-3 md:px-4 px-1 border-b">Institution Name</th>
                      <th className="py-3 md:px-4 px-1 border-b min-w-[120px]">Year of Est.</th>
                      <th className="py-3 md:px-4 px-1 border-b">Programs of Study</th>
                      <th className="py-3 md:px-4 px-1 border-b">Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(data["Canara Institutes"] as CanaraInstituteItem[])?.map((item, index) => (
                      <tr key={index} className="text-textGray h-16">
                        <td className="py-3 md:px-4 px-1 border-b">{index + 1}</td>
                        <td className="py-3 md:px-4 px-1 border-b">{item["Name"]}</td>
                        <td className="py-3 md:px-4 px-1 border-b min-w-[120px]">{item["Year of Est."]}</td>
                        <td className="py-3 md:px-4 px-1 border-b">{item["Programs of Study"]}</td>
                        <td className="py-3 md:px-4 px-1 border-b">{item["Address"]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
                </div>
            ) : selectedHeading === "Governing Body Members" ? (
              <>
                <div className="block sm:hidden   ">
                  {(data[selectedHeading] as ManagementItem[]).map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-between gap-2 pb-3 mb-3  ${index < (data[selectedHeading] as ManagementItem[]).length - 1 ? "border-b-2 border-border " : ""}`}
                    >
       
                      <h1 className="text-[16px] text-textGray ">{item.name}</h1>
                    </div>
                  ))}
                </div>
                {/* Desktop layout: original two-column layout */}
                <div className="hidden sm:grid sm:grid-cols-12">
                
                  <div className="text-[17px] col-span-12  text-textGray ">
                    {(data[selectedHeading] as ManagementItem[]).map((item, index) => (
                      <h1 key={index} className={`pb-3 mb-3 ${index < (data[selectedHeading] as ManagementItem[]).length - 1 ? "border-b-2 border-border" : ""}`}>
                        {item.name}
                      </h1>
                    ))}
                  </div>
                </div>
              </>
            ): (
              <>
                <div className="block sm:hidden   ">
                  {(data[selectedHeading] as ManagementItem[]).map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-end gap-2 pb-3 mb-3  ${index < (data[selectedHeading] as ManagementItem[]).length - 1 ? "border-b-2 border-border " : ""}`}
                    >
                      <h1 className="text-[16px] w-[50%]  text-textGray font-bold">{item.title}</h1>
                      <h1 className="text-[16px] w-[50%] text-textGray ">{item.name}</h1>
                    </div>
                  ))}
                </div>
                {/* Desktop layout: original two-column layout */}
                <div className="hidden sm:grid sm:grid-cols-12">
                  <div className="text-[17px] col-span-4 text-textGray">
                    {(data[selectedHeading] as ManagementItem[]).map((item, index) => (
                      <h1 key={index} className={`pb-3 mb-3 font-bold text-[17px] ${index < (data[selectedHeading] as ManagementItem[]).length - 1 ? "border-b-2  border-border" : ""}`}>
                        {item.title}
                      </h1>
                    ))}
                  </div>
                  <div className="text-[17px] col-span-8  text-textGray ">
                    {(data[selectedHeading] as ManagementItem[]).map((item, index) => (
                      <h1 key={index} className={`pb-3 mb-3 ${index < (data[selectedHeading] as ManagementItem[]).length - 1 ? "border-b-2 border-border" : ""}`}>
                        {item.name}
                      </h1>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
