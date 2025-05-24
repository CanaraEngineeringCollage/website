"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import governingCounsilData from "../../../../utils/governingCounsilData/governingCounsilData.json";
import FacultyModal from "@/components/DepartmentComponents/FacultyModal/FacultyModal";

interface GoverningCouncilMember {
  id: number;
  name: string;
  image: string;
  roles: { title: string; organization: string }[];
}

const ProfileCard = () => {
  const [data, setData] = useState<GoverningCouncilMember[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<GoverningCouncilMember | null>(null);

  const openModal = (member: GoverningCouncilMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  useEffect(() => {
    setData(governingCounsilData);
  }, []);

  return (
    <section className="pb-20 px-4 sm:px-8 md:px-16 lg:px-64 xl:px-64">
      <h1 className="text-black text-[40px] lg:text-[54px] mb-10 mt-10 md:mb-20 font-bold text-center">
        Governing Council
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 justify-items-center">
        {data.map((item, index) => {
          const isLastCard = index === data.length - 1;
          const remainder = data.length % 3;
          const shouldCenterLast = remainder === 1 && isLastCard;

          return (
            <div
              key={index}
              onClick={() => openModal(item)}
              className={`relative cursor-pointer w-full max-w-[309px] h-[450px] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center py-6 shadow-md ${
              shouldCenterLast ? "md:col-start-2 xl:col-start-auto" : ""
              }`}
            >
              <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={300}
              className="rounded-full w-full object-contain"
              />
              <div className="absolute bottom-0 left-0 w-full h-56 bg-[linear-gradient(to_top,#6DC0EB_40%,transparent)] z-10"></div>
              <div className="absolute z-10 top-[75%] left-6">
              <h2 className="text-[20px] font-bold">{item.name}</h2>
              <p className="text-[17px]">
                {item.roles.map((role, idx) => (
                <span key={idx}>
                  {role.title}, <span className="font-semibold">{role.organization}</span>
                  {idx < item.roles.length - 1 && <br />}
                </span>
                ))}
              </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Faculty Modal */}
      {/* @ts-expect-error: GoverningCouncilMember is structurally different from FacultyModal's CouncilMember */}
      <FacultyModal isOpen={isModalOpen} onClose={closeModal} facultyData={selectedMember} />
    </section>
  );
};

export default ProfileCard;
