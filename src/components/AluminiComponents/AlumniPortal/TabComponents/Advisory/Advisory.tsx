"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import FacultyModal from "@/components/DepartmentComponents/FacultyModal/FacultyModal";
import { MdKeyboardArrowRight } from "react-icons/md";

const Advisory = ({ datam }) => {
  console.log(datam, "advisory data");
  
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

  console.log(datam,"mm");
  

  return (
    <section className="pb-20">
      
<div className="grid grid-cols-1 pb-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-4 xl:justify-items-center">


        {datam.map((item, index) => {
          // const isLastCard = index === members.length - 1;
          // const remainder = members.length % 3;
          // const shouldCenterLast = remainder === 1 && isLastCard;

          return (
            <div
              key={index}
              className={`relative cursor-pointer w-full max-w-[280px] h-[430px] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center shadow-md `}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={500}
                className="w-full  object-cover h-[350px] rounded-t-xl"
              />
              <div className="absolute bottom-0 left-0 w-full h-56 bg-[linear-gradient(to_top,#6DC0EB_40%,transparent)] z-10"></div>
              <div className="absolute z-10 top-[75%] left-4">
                <div className="pe-2">
                <h2 className="text-[20px] font-bold ">{item.name}</h2>
                <p className="text-[17px]">{item.title}</p>
                <p
                  onClick={() => openModal(item)}
                  className="text-xs font-bold sm:text-sm md:text-sm flex items-center"
                >
                  View Profile
                  <MdKeyboardArrowRight className="ml-1 text-xl" />
                </p>
              </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Faculty Modal */}
      <FacultyModal
        isOpen={isModalOpen}
        onClose={closeModal}
        facultyData={selectedMember}
      />
    </section>
  );
};

export default Advisory;
