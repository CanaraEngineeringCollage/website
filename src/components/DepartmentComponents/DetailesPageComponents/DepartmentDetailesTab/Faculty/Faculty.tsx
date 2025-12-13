"use client";
import React, { useState } from "react";
import Image from "next/image";
import FacultyModal from "@/components/DepartmentComponents/FacultyModal/FacultyModal";
import { MdKeyboardArrowRight } from "react-icons/md";

export interface Qualification {
  degree: string;
  degreeName: string;
  passingYear: string;
  college: string;
  specializedArea: string;
  specialization: string; // Required by FacultyModal
}

export interface FacultyMember {
  id: number;
  name: string;
  image?: string;
  avatar?: { type: string; data: number[] };
  category: string;
  designation: string;
  department: string;
  joiningDate: string;
  experience: string;
  employmentType: string;
  type?: string; // "Technical Staff" or others
  qualifications: Qualification[];
  priority?: number;
  createdAt: string;
}

interface FacultyProps {
  teachingStaff: FacultyMember[];
  technicalStaff: FacultyMember[];
  loading?: boolean; // Make optional if handled by parent rendering conditionally
}

// Skeleton card shown while loading
const SkeletonCard: React.FC = () => (
  <div className="relative w-full max-w-[280px] lg:h-[430px] md:h-[260px] h-[400px] rounded-xl overflow-hidden bg-[#6DC0EB]/50 animate-pulse shadow-md">
    <div className="absolute inset-0 bg-[#6DC0EB]/40" />
    <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB]/70 via-[#6DC0EB]/40 to-transparent" />
    <div className="absolute bottom-4 left-0 w-full px-3 space-y-2">
      <div className="h-5 bg-white/50 rounded w-3/4"></div>
      <div className="h-4 bg-white/40 rounded w-1/2"></div>
      <div className="h-4 bg-white/30 rounded w-1/3"></div>
    </div>
  </div>
);

const bufferToBase64 = (buffer: { type: string; data: number[] }) => {
  const binary = buffer.data.reduce((acc, byte) => acc + String.fromCharCode(byte), "");
  const base64 = btoa(binary);
  return `data:image/jpeg;base64,${base64}`;
};

const Faculty = ({ teachingStaff, technicalStaff, loading = false }: FacultyProps) => {
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

  const renderCards = (staffArray: FacultyMember[]) =>
    staffArray.map((item, index) => {
      const isLastCard = index === staffArray.length - 1;
      const remainder = staffArray.length % 3;
      const shouldCenterLast = remainder === 1 && isLastCard;

      return (
        <div
          onClick={() => openModal(item)}
          key={index}
          className={`relative cursor-pointer w-full max-w-[280px] lg:h-[430px] md:h-[260px] h-[400px] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center shadow-md ${
            shouldCenterLast ? "md:col-start-2 xl:col-start-auto" : ""
          }`}
        >
          <Image src={item.avatar ? bufferToBase64(item.avatar) : item.image || ""} alt={item.name} fill className="object-cover" />
          <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB] via-[#6DC0EB]/70 to-transparent z-10"></div>
          <div className="absolute z-20 left-0 px-3 bottom-4 w-full">
            <h2 className="lg2:text-[18px] lg:text-[16px] md:text-[11px] text-[18px] font-bold">{item.name}</h2>
            <p className="lg:text-[16px]  md:text-[11px] text-[16px]">{item.designation}</p>
            <p onClick={() => openModal(item)} className=" font-bold lg2:text-[16px]  md:text-[11px] text-[16px] flex items-center">
              View Profile
              <MdKeyboardArrowRight className="ml-1 text-xl" />
            </p>
          </div>
        </div>
      );
    });

  return (
    <section className="pb-20">
      {loading ? (
        // Skeleton loading grid
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-4 justify-items-center">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <>
          {/* Teaching Staff */}
          {teachingStaff.length > 0 && (
            <>
              <h2 className="text-2xl sm:text-3xl text-center md:text-start md:text-4xl font-semibold text-[#1D1D1F] mb-6">Teaching Faculty</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-4 justify-items-center">
                {renderCards(teachingStaff)}
              </div>
            </>
          )}

          {/* Technical Staff */}
          {technicalStaff.length > 0 && (
            <>
              <h2 className="text-2xl sm:text-3xl text-center md:text-start md:text-4xl font-semibold text-[#1D1D1F] mb-6 mt-8">Technical Staff</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-4 justify-items-center">
                {renderCards(technicalStaff)}
              </div>
            </>
          )}

          <FacultyModal isOpen={isModalOpen} onClose={closeModal} facultyData={selectedMember} />
        </>
      )}
    </section>
  );
};

export default Faculty;
