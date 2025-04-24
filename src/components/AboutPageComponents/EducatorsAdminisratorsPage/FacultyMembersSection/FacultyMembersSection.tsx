"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import councilData from "../../../../utils/councilMembers/councilMembers.json"; // Import JSON data
import Link from "next/link";

interface CouncilMember {
  id: number;
  name: string;
  image: string;
  title: string;
  category: string;
  department?: string;
}

interface CouncilData {
  faculty: CouncilMember[];
  admin: CouncilMember[];
  general: CouncilMember[];
}

const FacultyMembersSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("faculty");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("Computer Science & Engineering");

  // Use imported JSON data
  const data: CouncilData = councilData;

  // Combine all data for filtering
  const allData = [...data.faculty, ...data.admin, ...data.general];

  // Filter data based on category and department
  let filteredData: CouncilMember[] = [];
  if (selectedCategory === "faculty") {
    filteredData = allData.filter((item) => item.category === "faculty" && item.department === selectedDepartment);
  } else {
    filteredData = allData.filter((item) => item.category === selectedCategory);
  }

  // List of departments
  const departments = [
    "Computer Science & Engineering",
    "Information Science & Engineering",
    "Electronics & Communication Engineering",
    "Computer Science & Design",
    "Computer Science & Business System",
    "Artificial Intelligence & Machine Learning",
    "Science & Humanities",
  ];

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-10 md:py-16 lg:py-20">
      <h1 className="text-[54px] font-bold text-black leading-tight mb-10 sm:mb-12 md:mb-16 lg:mb-20">
        Educators &<br />
        Administrators
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <div className="md:col-span-5">
          <div className="w-full sm:w-[80%] mx-auto md:mx-0">
            <div className="border-b-2 border-border pb-4 sm:pb-5">
              <h1
                className={`text-[20px]  cursor-pointer ${selectedCategory === "faculty" ? "font-extrabold text-[#2884CA]" : "text-textGray"}`}
                onClick={() => {
                  setSelectedCategory("faculty");
                  setSelectedDepartment("Computer Science & Engineering");
                }}
              >
                Faculty Members
              </h1>
              {selectedCategory === "faculty" && (
                <ul className="ml-4 sm:ml-6 md:ml-10 text-[17px] leading-relaxed mt-2 sm:mt-3">
                  {departments.map((dept) => (
                    <li
                      key={dept}
                      className={`cursor-pointer py-1 ${selectedDepartment === dept ? "font-bold text-[#2884CA]" : "text-textGray"}`}
                      onClick={() => setSelectedDepartment(dept)}
                    >
                      {dept}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="border-b-2 border-border py-4 sm:py-5">
              <h1
                className={`text-[20px] cursor-pointer ${selectedCategory === "admin" ? "font-extrabold text-[#2884CA]" : "text-textGray"}`}
                onClick={() => {
                  setSelectedCategory("admin");
                  setSelectedDepartment("");
                }}
              >
                Administrative Staff
              </h1>
            </div>
            <div className="py-4 sm:py-5 border-border border-b-2">
              <h1
                className={`text-[20px] cursor-pointer ${selectedCategory === "general" ? "font-extrabold text-[#2884CA]" : "text-textGray"}`}
                onClick={() => {
                  setSelectedCategory("general");
                  setSelectedDepartment("");
                }}
              >
                General Staff
              </h1>
            </div>
          </div>
        </div>
        <div className="md:col-span-7 text-sm sm:text-base md:text-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 xl:grid-c gap-4 sm:gap-6 md:gap-8 justify-items-center">
            {filteredData.map((item, index) => {
              const isLastCard = index === filteredData.length - 1;
              const remainder = filteredData.length % 2;
              const shouldCenterLast = remainder === 1 && isLastCard;

              return (
                <div
                  key={item.id}
                  className={`relative w-full max-w-[280px] sm:max-w-[300px] md:max-w-[309px] h-[400px] sm:h-[430px] md:h-[450px] xl:h-[500px] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center py-4 sm:py-6 shadow-md ${
                    shouldCenterLast ? "sm:col-span-2 sm: justify-self-center" : ""
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={260}
                    height={260}
                    className="rounded-full w-[80%] sm:w-[85%] md:w-full object-contain"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-48 sm:h-52 md:h-56 bg-[linear-gradient(to_top,#6DC0EB_40%,transparent)] z-10"></div>
                  <div className="absolute z-50 top-[75%] sm:top-[78%] md:top-[80%] left-4 sm:left-5 md:left-6">
                    <h2 className="text-base sm:text-lg md:text-lg font-bold">{item.name}</h2>
                    <p className="text-xs font-bold sm:text-sm md:text-sm">{item.title && `${item.title}`}</p>
                    <p className="text-xs sm:text-sm md:text-sm">
                      {item.department && `${item.department},`} <span className="font-semibold">{item.category}</span>
                    </p>
                    <Link href={`/user-details/${item.id}`}>
                      <p className="text-xs font-bold sm:text-sm md:text-sm flex items-center">
                        View Profile
                        <MdKeyboardArrowRight className="ml-1 text-xl" />
                      </p>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyMembersSection;
