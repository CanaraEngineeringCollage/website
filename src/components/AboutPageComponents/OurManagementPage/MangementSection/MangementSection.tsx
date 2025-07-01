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
      <div className="px-4 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-16 md:py-20">
        <h1 className=" text-black text-[39px] lg:text-[54px] font-bold mb-8 sm:mb-10 md:mb-12">Our Management</h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          <div className="md:col-span-4 text-[20px]">
            {headings.map((heading, index) => (
              <h1
                key={index}
                className={`border-b-2 pb-3 mb-3 border-border cursor-pointer ${selectedHeading === heading ? "text-[#2884CA] font-bold" : "text-textGray"}`}
                onClick={() => setSelectedHeading(heading)}
              >
                {heading}
              </h1>
            ))}
          </div>
          <div className="md:col-span-8">
            <h1 className="text-textGray font-extrabold text-[20px] pb-6 sm:pb-8 md:pb-10">Canara High School Association {selectedHeading}</h1>
            {/* Mobile layout: title and name in the same line */}
            {selectedHeading === "Organisational Structure" ? (
              <div>
                <Image
                  alt="orginazation"
                  src="https://www.canaraengineering.in/orgchart.png"
                  width={1000}
                  height={100}
                  className="object-cover w-[100%] h-[100%]"
                />
              </div>
            ) : selectedHeading === "Canara Institutes" ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
                  <thead>
                    <tr className="bg-[#F3F8FC] text-[#2884CA]">
                      <th className="py-3 md:px-4 px-1 border-b">Sl.No</th>
                      <th className="py-3 md:px-4 px-1 border-b">Institution Name</th>
                      <th className="py-3 md:px-4 px-1 border-b">Year of Est.</th>
                      <th className="py-3 md:px-4 px-1 border-b">Programs of Study</th>
                      <th className="py-3 md:px-4 px-1 border-b">Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(data["Canara Institutes"] as CanaraInstituteItem[])?.map((item, index) => (
                      <tr key={index} className="text-textGray">
                        <td className="py-3 md:px-4 px-1 border-b">{index + 1}</td>
                        <td className="py-3 md:px-4 px-1 border-b">{item["Name"]}</td>
                        <td className="py-3 md:px-4 px-1 border-b">{item["Year of Est."]}</td>
                        <td className="py-3 md:px-4 px-1 border-b">{item["Programs of Study"]}</td>
                        <td className="py-3 md:px-4 px-1 border-b">{item["Address"]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <>
                <div className="block sm:hidden">
                  {(data[selectedHeading] as ManagementItem[]).map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-between gap-2 pb-3 mb-3 ${index < (data[selectedHeading] as ManagementItem[]).length - 1 ? "border-b-2 border-border" : ""}`}
                    >
                      <h1 className="text-[16px] text-textGray font-bold">{item.title}</h1>
                      <h1 className="text-[16px] text-textGray">{item.name}</h1>
                    </div>
                  ))}
                </div>
                {/* Desktop layout: original two-column layout */}
                <div className="hidden sm:grid sm:grid-cols-2">
                  <div className="text-[17px] text-textGray">
                    {(data[selectedHeading] as ManagementItem[]).map((item, index) => (
                      <h1 key={index} className={`pb-3 mb-3 ${index < (data[selectedHeading] as ManagementItem[]).length - 1 ? "border-b-2 border-border" : ""}`}>
                        {item.title}
                      </h1>
                    ))}
                  </div>
                  <div className="text-[17px]  text-textGray">
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
