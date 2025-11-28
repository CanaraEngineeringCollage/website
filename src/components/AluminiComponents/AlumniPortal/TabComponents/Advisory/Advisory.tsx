"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import FacultyModal from "@/components/DepartmentComponents/FacultyModal/FacultyModal";
import { MdKeyboardArrowRight } from "react-icons/md";

const Advisory = ({ datam }) => {
  const [members, setMembers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  useEffect(() => {
    // Handle safe access to nested data
    setMembers(datam);
  }, [datam]);

  return (
    <section className="lg:pb-20">
      <div className="grid grid-cols-1 pb-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-4 justify-items-center">
        {datam.map((item, index) => {
          // const isLastCard = index === members.length - 1;
          // const remainder = members.length % 3;
          // const shouldCenterLast = remainder === 1 && isLastCard;

          return (
            <div
              key={item.id}
              className="relative  w-full max-w-[309px] aspect-[3/4] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center shadow-md"
            >
              {/* Image fills card completely */}
              <Image src={item.image} alt={item.image} fill className="object-cover" />

              {/* Responsive gradient */}
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB] via-[#6DC0EB]/70 to-transparent z-10"></div>

              {/* Content */}
              <div className="absolute z-20 bottom-3 sm:bottom-4 px-2 sm:px-3 md:px-4 xl:px-2 left-0 w-full">
                <h2 className="text-base sm:text-lg md:text-sm lg:text-sm lg2:text-lg xl:text-xl font-bold leading-tight">{item.name}</h2>
                {item.title && <p className="text-xs sm:text-lg md:text-sm lg:text-sm lg2:text-lg  leading-snug break-words">{item.title}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Advisory;
