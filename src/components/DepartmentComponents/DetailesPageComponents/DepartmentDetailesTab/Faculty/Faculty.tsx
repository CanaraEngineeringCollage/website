"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import FacultyModal from "@/components/DepartmentComponents/FacultyModal/FacultyModal";
import { MdKeyboardArrowRight } from "react-icons/md";

// Updated interface
interface Qualification {
  degree: string;
  degreeName: string;
  passingYear: string;
  college: string;
  specializedArea: string;
}

interface FacultyMember {
  id: number;
  name: string;
  image: string;
  category: string;
  desiganation: string;
  department: string;
  joiningDate: string;
  experience: string;
  employmentType: string;
  qualifications: Qualification[];
}
const bufferToBase64 = (buffer: { type: string; data: number[] }) => {
  const binary = buffer.data.reduce((acc, byte) => acc + String.fromCharCode(byte), "");
  const base64 = btoa(binary);
  return `data:image/jpeg;base64,${base64}`;
};
const Faculty = ({ datam }: { datam: FacultyMember[] }) => {
  const [data, setData] = useState<FacultyMember[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<FacultyMember | null>(null);

  const openModal = (member: FacultyMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  useEffect(() => {
    setData(datam || []);
  }, [datam]);

  return (
    <section className="pb-20 ">
      {/* <h1 className="text-[#86868B] text-xl font-extrabold mb-2">Faculties</h1> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-4 xl:justify-items-center">
        {data.map((item, index) => {
          const isLastCard = index === data.length - 1;
          const remainder = data.length % 3;
          const shouldCenterLast = remainder === 1 && isLastCard;

          return (
            <div
              key={index}
              className={`relative cursor-pointer w-full max-w-[280px] h-[430px] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center shadow-md ${
                shouldCenterLast ? "md:col-start-2 xl:col-start-auto" : ""
              }`}
            >
              <Image src={bufferToBase64(item.avatar)} alt={item.name} width={200} height={200} className="w-full object-contain" />
              <div className="absolute bottom-0 left-0 w-full h-56 bg-[linear-gradient(to_top,#6DC0EB_40%,transparent)] z-10"></div>
              <div className="absolute z-50 left-0 px-3 bottom-4">
                <h2 className="text-[20px] font-bold">{item.name}</h2>
                <p className="text-[17px]">{item.designation}, <span className="font-semibold">{item.department}</span></p>
                
                <p onClick={() => openModal(item)} className="text-xs font-bold sm:text-sm md:text-sm flex items-center">
                  View Profile
                  <MdKeyboardArrowRight className="ml-1 text-xl" />
                </p> 
               
              </div>
            </div>
          );
        })}
      </div>

      {/* Faculty Modal */}
      <FacultyModal isOpen={isModalOpen} onClose={closeModal} facultyData={selectedMember} />
    </section>
  );
};

export default Faculty;
