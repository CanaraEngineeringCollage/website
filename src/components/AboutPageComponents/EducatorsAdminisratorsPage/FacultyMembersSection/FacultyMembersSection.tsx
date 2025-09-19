"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import FacultyModal from "@/components/DepartmentComponents/FacultyModal/FacultyModal";

interface CouncilMember {
  id: number;
  name: string;
  image: string;
  designation: string;
  category: string;
  department?: string;
  position?: string;
}

const bufferToBase64 = (buffer: { type: string; data: number[] }) => {
  const binary = buffer.data.reduce((acc, byte) => acc + String.fromCharCode(byte), "");
  const base64 = btoa(binary);
  return `data:image/jpeg;base64,${base64}`;
};
const FacultyMembersSection: React.FC = ({ facultyData }) => {
  console.log(facultyData);

  const [selectedCategory, setSelectedCategory] = useState<string>("faculty");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("Computer Science & Engineering");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<CouncilMember | null>(null);

  const departments = [
    "Computer Science & Engineering",
    "Information Science & Engineering",
    "Electronics & Communication Engineering",
    "Computer Science & Design",
    "Computer Science & Business System",
    "Artificial Intelligence & Machine Learning",
  ];

  // Filter data based on category and department
  const filteredData =
    selectedCategory === "faculty"
      ? facultyData.filter((item) => item.department === selectedDepartment)
      : facultyData.filter((item) => item.department === selectedDepartment);

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-10 md:py-16 lg:py-20">
      <h1 className="lg:text-[54px] text-[46px] font-bold text-[#1D1D1F] leading-tight mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-10">
        Educators &<br />
        Administrators
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {/* Sidebar */}
        <div className="md:col-span-5">
          <div className="w-full sm:w-[80%] mx-auto md:mx-0">
            <div className="border-b-2 border-border pb-4 sm:pb-5">
              <h1
                className={`text-[20px] cursor-pointer ${selectedCategory === "faculty" ? "font-bold text-[#2884CA]" : "text-textGray"}`}
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
                className={`text-[20px] cursor-pointer ${selectedCategory === "admin" ? "font-bold text-[#2884CA]" : "text-textGray"}`}
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
                className={`text-[20px] cursor-pointer ${selectedCategory === "general" ? "font-bold text-[#2884CA]" : "text-textGray"}`}
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

        {/* Cards */}
        <div className="md:col-span-7 text-sm sm:text-base md:text-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg2:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center">
            {filteredData.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedMember(item);
                  setIsModalOpen(true);
                }}
                className="relative cursor-pointer w-full max-w-[309px] aspect-[3/4] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center shadow-md"
              >
                {/* Image fills card completely */}
                <Image
                  src={bufferToBase64(item.avatar)}
                  alt={item.name}
                  fill
                  className="object-cover"
                />

                {/* Responsive gradient */}
                <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB] via-[#6DC0EB]/70 to-transparent z-10"></div>

                {/* Content */}
                <div className="absolute z-20 bottom-3 sm:bottom-4 px-2 sm:px-3 md:px-4 left-0 w-full">
                  <h2 className="text-base sm:text-lg md:text-sm lg:text-sm lg2:text-lg xl:text-2xl font-bold leading-tight">
                    {item.name}
                  </h2>
                  <p className="text-xs ssm:text-lg md:text-sm lg:text-sm lg2:text-lg xl:text-2xl leading-snug break-words">
                    {item.designation}
                  </p>
                  <p className="text-xs sm:text-lg md:text-sm lg:text-sm lg2:text-lg xl:text-2xl font-bold flex items-center mt-1">
                    View Profile
                    <MdKeyboardArrowRight className="ml-1 text-lg" />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <FacultyModal isOpen={isModalOpen} onClose={setIsModalOpen} facultyData={selectedMember} />
    </section>
  );
};

export default FacultyMembersSection;
