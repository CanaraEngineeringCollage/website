"use client";
import React, { useState } from "react";

interface ManagementItem {
  title: string;
  name: string;
}

interface ManagementData {
  [key: string]: ManagementItem[];
}

const HeroSection = () => {
  const data: ManagementData = {
    "Office Bearers": [
      { title: "President", name: "Sri. D. Vasudeva Kamath" },
      { title: "Vice-President", name: "Sri. K. Suresh Kamath" },
      { title: "Honorary Secretary", name: "Sri. M. Ranganath Bhat" },
      { title: "Treasurer", name: "Sri. M. Vaman Kamath" },
      { title: "Alternate Treasurer", name: "Sri. M. Jagannath Kamath" },
      { title: "Joint Secretary", name: "Sri. T. Gopalkrishna Shenoy" },
    ],
    "Governing Body Members": [
      { title: "Member", name: "Sri. A. Krishna Rao" },
      { title: "Member", name: "Sri. B. Nagesh Shenoy" },
      { title: "Member", name: "Sri. C. Vinod Kamath" },
    ],
    "Special Invitee(s)": [
      { title: "Invitee", name: "Sri. R. Shyam Sundar" },
      { title: "Invitee", name: "Sri. P. Venkatesh Pai" },
    ],
    "Organisational Structure": [
      { title: "Director", name: "Sri. L. Gopalakrishna" },
      { title: "Coordinator", name: "Sri. M. Anand Shenoy" },
    ],
    "Canara Institutes": [
      { title: "Principal", name: "Sri. K. Ramesh Kamath" },
      { title: "Dean", name: "Sri. S. Vikas Shenoy" },
    ],
  };

  const [selectedHeading, setSelectedHeading] = useState<string>("Office Bearers");

  const headings: string[] = [
    "Office Bearers",
    "Governing Body Members",
    "Special Invitee(s)",
    "Organisational Structure",
    "Canara Institutes",
  ];

  return (
    <section>
      <div className="px-4 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-16 md:py-20">
        <h1 className="text-3xl text-black sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12">
          Our Management
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          <div className="md:col-span-4 text-[20px]">
            {headings.map((heading, index) => (
              <h1
                key={index}
                className={`border-b-2 pb-3 mb-3 border-border cursor-pointer ${
                  selectedHeading === heading ? "text-[#2884CA]" : "text-textGray"
                }`}
                onClick={() => setSelectedHeading(heading)}
              >
                {heading}
              </h1>
            ))}
          </div>
          <div className="md:col-span-8">
            <h1 className="text-textGray text-[20px] pb-6 sm:pb-8 md:pb-10">
              Canara High School Association {selectedHeading}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-[17px] text-textGray">
                {data[selectedHeading].map((item, index) => (
                  <h1
                    key={index}
                    className={`pb-3 mb-3 ${
                      index < data[selectedHeading].length - 1
                        ? "border-b-2 border-border"
                        : ""
                    }`}
                  >
                    {item.title}
                  </h1>
                ))}
              </div>
              <div className="text-sm sm:text-base text-textGray">
                {data[selectedHeading].map((item, index) => (
                  <h1
                    key={index}
                    className={`pb-3 mb-3 ${
                      index < data[selectedHeading].length - 1
                        ? "border-b-2 border-border"
                        : ""
                    }`}
                  >
                    {item.name}
                  </h1>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
