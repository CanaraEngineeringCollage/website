"use client";
import React, { useState } from "react";
import Image from "next/image";
import FacultyModal, { bufferToBase64, CouncilMember } from "../../../DepartmentComponents/FacultyModal/FacultyModal";

interface CardMember extends CouncilMember {
  roles?: { title: string; organization: string }[];
}

interface ProfileCardClientProps {
  title: string;
  keyFunctionaries: CardMember[];
  datam: CardMember[];
}

const ProfileCardClient = ({ title, keyFunctionaries, datam }: ProfileCardClientProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<CardMember | null>(null);

  const handleCardClick = (member: CardMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  return (
    <section className="pb-20 max-w-5xl xl:max-w-[65%] mx-auto px-5">
      <FacultyModal isOpen={isModalOpen} onClose={setIsModalOpen} facultyData={selectedMember} />

      {/* --- Key Functionaries Section --- */}
      <h1 className="text-[#1D1D1F] leading-[1.3] text-3xl md:text-[40px] lg:text-[54px] pb-10 pt-10 md:pb-16 xl:pb-20 font-bold text-center">
        Key Functionaries
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 justify-items-center mb-10">
        {keyFunctionaries.map((item, index) => {
          const isLastCard = index === keyFunctionaries.length - 1;
          const remainder = keyFunctionaries.length % 3;
          const shouldCenterLast = remainder === 1 && isLastCard;

          return (
            <div
              key={index}
              onClick={() => handleCardClick(item)}
              className={`relative w-full max-w-[309px] aspect-[3/4] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center shadow-md cursor-pointer transition-transform  ${
                shouldCenterLast ? "md:col-start-2 xl:col-start-auto" : ""
              }`}
            >
              <Image src={bufferToBase64(item.avatar!) || ""} alt={item.name} fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB] via-[#6DC0EB]/70 to-transparent z-10"></div>
              <div className="absolute z-20 bottom-3 sm:bottom-4 px-2 sm:px-3 md:px-4 left-0 w-full">
                <h2 className="text-base sm:text-lg md:text-xl font-bold leading-tight ">{item.name}</h2>
                <p className="text-xs sm:text-sm md:text-base leading-snug break-words">{item.department}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- Main Section (HOD/Faculty) --- */}
      <h1 className="text-[#1D1D1F] leading-[1.3] text-3xl md:text-[40px] lg:text-[54px] pb-10 pt-10 md:pb-16 xl:pb-20 font-bold text-center">
        {title}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 justify-items-center">
        {datam.map((item, index) => {
          const isLastCard = index === datam.length - 1;
          const remainder = datam.length % 3;
          const shouldCenterLast = remainder === 1 && isLastCard;

          return (
            <div
              key={index}
              onClick={() => handleCardClick(item)}
              className={`relative w-full max-w-[309px] aspect-[3/4] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center shadow-md cursor-pointer transition-transform  ${
                shouldCenterLast ? "md:col-start-2 xl:col-start-auto" : ""
              }`}
            >
              <Image src={bufferToBase64(item.avatar!) || ""} alt={item.name} fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB] via-[#6DC0EB]/70 to-transparent z-10"></div>
              <div className="absolute z-20 bottom-3 sm:bottom-4 px-2 sm:px-3 md:px-4 left-0 w-full">
                <h2 className="text-base sm:text-lg md:text-xl font-bold leading-tight ">{item.name}</h2>
                <p className="text-xs sm:text-sm md:text-base leading-snug break-words">{item.department}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProfileCardClient;
