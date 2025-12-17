"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import FacultyModal from "@/components/DepartmentComponents/FacultyModal/FacultyModal";

/* ================= TYPES (UNCHANGED UI EXPECTATION) ================= */

interface CouncilMember {
  id: number;
  name: string;
  images?: string;
  designation:string
  emergencycontact?: string;
  timings:string;
  email?: string;
  department:string;
  achievements?: {
    id: string;
    heading: string;
    descriptions: string[];
  }[];
}

/* ================= STATIC COUNSELLING DATA ================= */

const counsellingData: CouncilMember[] = [
  {
    id: 1,
    name: "Ms Nanditha Chinivarada",
    images:"/studentWelfarePage/counsiler.jpg",
    designation:"Asst. Professor and Counsellor",
    department:"Student Welfare",
    emergencycontact: "8310738241",
    email: "nandithach@canaraengineering.in",
    timings:"9:00 A.M to 4:30 P.M (Available on all working days)"
  },
];

/* ================= HELPERS ================= */

const bufferToBase64 = (buffer?: { type: string; data: number[] }) => {
  if (!buffer?.data) return "/images/default-images.png"; // fallback
  const binary = buffer.data.reduce(
    (acc, byte) => acc + String.fromCharCode(byte),
    ""
  );
  return `data:image/jpeg;base64,${btoa(binary)}`;
};

/* ================= COMPONENT ================= */

export default function CounsellingServices() {
  const [data, setData] = useState<CouncilMember[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] =
    useState<CouncilMember | null>(null);

  /* ✅ USE STATIC DATA ONLY */
  useEffect(() => {
    setData(counsellingData);
  }, []);

  /* ================= RESPONSIVE LOGIC (UNCHANGED) ================= */

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleMembers = isMobile
    ? data.slice(startIndex, startIndex + 1)
    : data.slice(startIndex, startIndex + 2);

  const handleNext = () => {
    const step = isMobile ? 1 : 2;
    if (startIndex + step < data.length) setStartIndex(startIndex + step);
  };

  const handlePrev = () => {
    const step = isMobile ? 1 : 2;
    if (startIndex - step >= 0) setStartIndex(startIndex - step);
  };

  /* ================= JSX (DESIGN UNTOUCHED) ================= */

  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto mt-20 lg:mt-12 mb-16 lg:mb-8 xl:max-w-[75%] bg-[#F5F5F7] rounded-3xl">
      <div className="mx-auto lg1:flex  flex-col-reverse md:flex-row  justify-between gap-10">
        <div className="max-w-md space-y-44">
          <div>
            <h2 className="text-3xl text-center w-full lg:text-start lg:text-4xl md:text-4xl font-bold text-[#1D1D1F] leading-[1.1]">
              Counselling Services
            </h2>
            <p className="text-gray-700 hidden md:block text-lg text-center lg:text-start mt-6">
              The institution provides professional counselling services to
              support the mental, emotional, academic, and personal well-being
              of all stake holders.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 w-full mt-8 lg:mt-0  justify-items-center gap-6">
          {visibleMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => {
                setSelectedMember(member);
                setIsModalOpen(true);
              }}
              className="relative cursor-pointer w-full h-[400px] max-w-[309px] lg2:h-[450px] lg:h-[350px] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center shadow-md"
            >
              <Image
                src={member.images}
                alt={member.name}
                fill
                className="object-cover"
              />

              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB] via-[#6DC0EB]/70 to-transparent z-10" />

              <div className="absolute z-20 bottom-3 px-3 left-0 w-full">
                <h2 className="text-[18px] font-bold leading-tight">
                  {member.name}
                </h2>
                <p className="text-sm leading-snug">
                 
               {member.designation}
                </p>
                <p className="text-[16px] font-bold flex items-center mt-1">
                  View Profile <MdKeyboardArrowRight className="ml-1" />
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-700 md:hidden text-lg text-center lg:text-start mt-8">
              The institution provides professional counselling services to
              support the mental, emotional, academic, and personal well-being
              of all stake holders.
            </p>
      </div>




      <FacultyModal
        isOpen={isModalOpen}
        onClose={setIsModalOpen}
        facultyData={selectedMember}
      />
    </section>
  );
}
