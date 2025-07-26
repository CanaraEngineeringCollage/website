"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";
import FacultyModal from "../FacultyModal/FacultyModal";
import Link from "next/link";
// Interface for qualifications
interface Qualification {
  degree: string;
  passingYear: number;
  collegeOrUniversity: string;
  areaOfSpecialization: string;
}
interface Faculty {
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
// Interface for council member
interface CouncilMember {
  id: number;
  name: string;
  image: string;
  designation: string;
  category: string;
  department: string;
  joiningDate?: string; // Make this optional
  experience?: string; // Make this optional
  employmentType?: string; // Make this optional
  qualifications: Qualification[];
  faculties?: Faculty[];
  
}


// Props interface for the component
interface DepartmentSectionProps {
  faculties: CouncilMember[];
}

export default function DepartmentFacultySection({ faculties }: DepartmentSectionProps) {
  const [data, setData] = useState<CouncilMember[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setData(faculties);
  }, [faculties]);

  const visibleMembers = data.slice(startIndex, startIndex + 2);
  const visibleMembersMobile = data.slice(startIndex, startIndex + 1);

  const handleNext = () => {
    if (startIndex + 2 < data.length) {
      setStartIndex(startIndex + 2);
    }
  };

  const handlePrev = () => {
    if (startIndex - 2 >= 0) {
      setStartIndex(startIndex - 2);
    }
  };
  // inside DepartmentFacultySection
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<CouncilMember | null>(null);

  const openModal = (member: CouncilMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };
  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto my-32 xl:max-w-[75%] bg-[#F5F5F7] rounded-3xl">
      <div className="mx-auto py-10 lg:flex hidden flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="max-w-md space-y-44">
          <div>
            <h2 className="text-3xl lg:text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
              Get to Know Our <br />
              <span className="">Department’s Faculty</span>
            </h2>
            <p className="text-gray-700 text-lg">
              Our admin team is the backbone of our institution, ensuring seamless operations with their expertise, dedication & commitment to
              excellence.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/about/educators-administrators"><button 
            aria-label="Meet more of our Faculty"
            className="bg-blue-100 text-black rounded-full text-block px-6 py-2  text-sm font-medium hover:bg-blue-200 transition">
              Meet more of our Faculty
            </button></Link>
            <div className="flex items-center gap-2">
              <button aria-label="Previous Slide"
                onClick={handlePrev}
                disabled={startIndex === 0}
                className="w-8 h-8 flex rounded-full items-center justify-center  border border-[#0071E3] text-gray-600 hover:bg-gray-200 transition disabled:opacity-30"
              >
                <ChevronLeft size={16} />
              </button>
              <button aria-label="Next Slide"
                onClick={handleNext}
                disabled={startIndex + 2 >= data.length}
                className="w-8 h-8 flex items-center justify-center rounded-full  bg-[#0071E3] text-white hover:bg-blue-700 transition disabled:opacity-30"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 w-full sm:grid-cols-2 gap-6">
          {visibleMembers?.map((member, index) => (
            <div
              key={index}
              onClick={() => openModal(member)}
              className={`relative cursor-pointer w-full max-w-[309px] h-[480px] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center  shadow-md`}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className=" w-full object-contain"
              />

              <div className="absolute bottom-0 left-0 w-full h-56 bg-[linear-gradient(to_top,#6DC0EB_40%,transparent)] z-10"></div>
              <div className="absolute z-50 top-[79%] left-6">
                <h2 className="text-[20px] font-bold">{member.name}</h2>
                <p className="text-[17px]">
                  <span>{member.designation}</span>
                </p>

                <p className="text-xs font-bold sm:text-sm md:text-sm flex items-center">
                  View Profile
                  <MdKeyboardArrowRight className="ml-1 text-xl" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-10 lg:hidden">
        <div className="max-w-md space-y-44">
          <div>
            <h2 className="text-3xl lg:text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
              Get to Know Our <br />
              <span className="">Department’s Faculty</span>
            </h2>
            <p className="text-gray-700 text-lg">
              Our admin team is the backbone of our institution, ensuring seamless operations with their expertise, dedication & commitment to
              excellence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 w-full gap-6">
          {visibleMembersMobile.map((member, index) => (
            <div
              key={index}
              onClick={() => openModal(member)}
              className={`relative cursor-pointer w-full max-w-[309px] h-[480px] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center  shadow-md`}
            >
              <Image
                onClick={() => router.push(`/user-details/${member.id}`)}
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className=" w-full object-contain"
              />

              <div className="absolute bottom-0 left-0 w-full h-56 bg-[linear-gradient(to_top,#6DC0EB_40%,transparent)] z-10"></div>
              <div className="absolute z-50 top-[75%] left-6">
                <h2 className="text-[20px] font-bold">{member.name}</h2>
                <p className="text-[17px]">
                  <span>{member.designation}</span>
                </p>
                <p className="text-xs font-bold sm:text-sm md:text-sm flex items-center">
                  View Profile
                  <MdKeyboardArrowRight className="ml-1 text-xl" />
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-blue-100 text-black text-block px-6 py-2  text-sm font-medium hover:bg-blue-700 transition">
            Meet more of Our Faculty
          </button>
          <div className="flex items-center gap-2">
            <button aria-label="Previous Slide"
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="w-8 h-8 flex rounded-full items-center justify-center  border border-[#0071E3] text-gray-600 hover:bg-gray-200 transition disabled:opacity-30"
            >
              <ChevronLeft size={16} />
            </button>
            <button aria-label="Next Slide"
              onClick={handleNext}
              disabled={startIndex + 2 >= data.length}
              className="w-8 h-8 flex items-center rounded-full justify-center  bg-[#0071E3] text-white hover:bg-blue-700 transition disabled:opacity-30"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
      <FacultyModal isOpen={isModalOpen} onClose={closeModal} facultyData={selectedMember} />
    </section>
  );
}
