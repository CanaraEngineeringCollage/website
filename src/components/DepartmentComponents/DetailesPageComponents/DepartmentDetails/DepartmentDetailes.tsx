"use client";
import React, { useState } from "react";
import grievanceRedressalCell from "../../../../utils/grievanceData/grievanceData.json";
import { useParams } from "next/navigation";
const DepartmentDetailes = () => {
  const { slug } = useParams();
  console.log(slug);

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const departmentMenuItems = [
    "Department Profile",
    "Organisation Structure",
    "Head of Department",
    "Faculty & Staff",
    "Academic Programs",
    "PEO & PO-PSO",
    "Course Outcomes (CO)",
    "Facilities",
    "Student Achievement",
    "Research & Product Development",
    "Publications",
    "Events",
    "Gallery",
  ];

  return (
    <section className="py-10 xl:py-36 text-black lg2:px-24 mx-5 overflow-hidden">
      <div className="">
        <h1 className="text-[#1D1D1F] text-xl lg:text-[31px] mb-2">Department of </h1>
        <h2 className="text-[30px] lg:w-[50%]  lg:text-[54px] font-bold leading-[1.1] pb-1 lg:pb-10 text-black">
          {typeof slug === "string"
            ? slug
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(" ")
            : slug}
        </h2>
        <div className="grid grid-cols-1 gap-3 md:gap-32 md:grid-cols-12 mt-10">
          <div className="col-span-4">
            {departmentMenuItems?.map((section, index) => (
              <h1
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`border-b-2 text-[20px] pb-3 mb-3 border-border cursor-pointer ${
                  selectedIndex === index ? "text-[#2884CA] font-bold" : "text-textGray font-[500]"
                }`}
              >
                {section}
              </h1>
            ))}
          </div>
          <div className="col-span-8">
            {grievanceRedressalCell[selectedIndex]?.data && (
              <>
                <div>
                  <h2 className="text-[20px] font-extrabold text-textGray">{grievanceRedressalCell[selectedIndex].data[0]?.title}</h2>
                  <p className="text-[17px] text-textGray lg:pe-16  mt-2">{grievanceRedressalCell[selectedIndex].data[1]?.description}</p>
                </div>

                <ul className="list-disc pl-5 space-y-1 mt-7">
                  {grievanceRedressalCell[selectedIndex].data[2]?.points?.map((point, i) => (
                    <li key={i} className="text-[17px] text-textGray hover:text-blue-600 cursor-pointer">
                      {point}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentDetailes;
