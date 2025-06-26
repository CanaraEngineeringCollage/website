"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import governingCounsilData from "../../../utils/placementFaculties/placementFaculties.json";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import FacultyModal from "@/components/DepartmentComponents/FacultyModal/FacultyModal";

interface CouncilMember {
  id: number;
  name: string;
  image: string;
  roles: { title: string; organization: string }[];
}

export default function DepartmentFaculty() {
  const [data, setData] = useState<CouncilMember[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedMember, setSelectedMember] = useState<CouncilMember | null>(null);
  const router = useRouter();
  useEffect(() => {
    setData(governingCounsilData);
  }, []);

  const visibleMembers = data.slice(startIndex, startIndex + 2);
  const visibleMembersMobile = data.slice(startIndex, startIndex + 1);
  const handleNext = () => {
    if (startIndex + 1 < data.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex - 1 >= 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto mt-20 lg:mt-20 mb-16  xl:max-w-[75%] bg-[#F5F5F7] rounded-3xl">
      <div className=" mx-auto lg:flex hidden  flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="max-w-md space-y-44">
          <div>
            <h2 className="text-3xl lg:text-4xl md:text-4xl font-bold text-gray-900 leading-tight">Get to Know Our Department’s Faculty</h2>
            <p className="text-gray-700 text-lg">
              Our faculty members are the heart of our department, guiding & inspiring students with their expertise, dedication & passion for
              education.
            </p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <button
              aria-label="Meet more of our Faculty"
              className="bg-[#d0e2f8] text-black text-block  px-6 py-2 rounded-full text-[17px] font-medium "
            >
              Meet more of our Faculty
            </button>
            <div className="flex items-center gap-3">
              <button
                aria-label="Previous Faculty Member"
                onClick={handlePrev}
                disabled={startIndex === 0}
                className="w-8 h-8 flex items-center justify-center bg-[#dedee3] rounded-full   text-[#616164] hover:bg-gray-200 transition disabled:opacity-30"
              >
                <MdKeyboardArrowLeft size={32} />
              </button>
              <button
                aria-label="Next Faculty Member"
                onClick={handleNext}
                disabled={startIndex + 2 >= data.length}
                className="w-8 h-8 flex items-center justify-center bg-[#dedee3] rounded-full  text-[#616164]  transition disabled:opacity-30"
              >
                <MdKeyboardArrowRight size={32} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 w-full sm:grid-cols-2 gap-6">
          {visibleMembers.map((member, index) => (
            <div
              key={index}
              className={`relative cursor-pointer w-full max-w-[309px] h-[480px] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center  shadow-md`}
            >
              <Image
                onClick={() => router.push(`/user-details/${member.id}`)}
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="  w-full object-contain"
              />
              <div className="absolute bottom-0 left-0 w-full h-56 bg-[linear-gradient(to_top,#6DC0EB_40%,transparent)] z-10"></div>
              <div className="absolute z-50 top-[75%] left-6">
                <h2 className="text-[20px] font-bold">{member.name}</h2>
                <p className="text-[17px]">
                  {member.roles.map((role, idx) => (
                    <span key={idx}>
                      {role.title}
                      {role.organization && (
                        <>
                          , <span className="font-semibold">{role.organization}</span>
                        </>
                      )}
                      {idx < member.roles.length - 1 && <br />}
                    </span>
                  ))}
                </p>
                <p
                  onClick={() => {
                    setSelectedMember(member), setIsModalOpen(true);
                  }}
                  className="text-xs font-bold sm:text-sm md:text-sm flex items-center"
                >
                  View Profile
                  <MdKeyboardArrowRight className="ml-1 text-xl" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-10 lg:hidden ">
        <div className="max-w-md space-y-44">
          <div>
            <h2 className="text-3xl lg:text-4xl md:text-4xl font-bold text-gray-900 leading-tight">Get to Know Our Department’s Faculty</h2>
            <p className="text-gray-700 text-lg">
              Our faculty members are the heart of our department, guiding & inspiring students with their expertise, dedication & passion for
              education.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 w-full gap-6">
          {visibleMembersMobile.map((member, index) => (
            <div
              key={index}
              className={`relative cursor-pointer w-full max-w-[309px] h-[480px] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center  shadow-md`}
            >
              <Image
                onClick={() => router.push(`/user-details/${member.id}`)}
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="  w-full object-contain"
              />

              <div className="absolute bottom-0 left-0 w-full h-56 bg-[linear-gradient(to_top,#6DC0EB_40%,transparent)] z-10"></div>
              <div className="absolute z-50 top-[75%] left-6">
                <h2 className="text-[20px] font-bold">{member.name}</h2>
                <p className="text-[17px]">
                  {member.roles.map((role, idx) => (
                    <span key={idx}>
                      {role.title}
                      {role.organization && (
                        <>
                          , <span className="font-semibold">{role.organization}</span>
                        </>
                      )}
                      {idx < member.roles.length - 1 && <br />}
                    </span>
                  ))}
                </p>
                <p
                  onClick={() => {
                    setSelectedMember(member), setIsModalOpen(true);
                  }}
                  className="text-xs font-bold sm:text-sm md:text-sm flex items-center"
                >
                  View Profile
                  <MdKeyboardArrowRight className="ml-1 text-xl" />
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-10">
          <button
            aria-label="Meet more of our Admin Team"
            className="bg-blue-100 text-black text-block px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition"
          >
            Meet more of our Admin Team
          </button>
          <div className="flex items-center gap-2">
            <button
              aria-label="Previous Faculty Member"
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="w-8 h-8 flex items-center justify-center bg-[#dedee3] rounded-full   text-[#616164] hover:bg-gray-200 transition disabled:opacity-30"
            >
              <MdKeyboardArrowLeft size={24} />
            </button>
            <button
              aria-label="Next Faculty Member"
              onClick={handleNext}
              disabled={startIndex + 2 >= data.length}
              className="w-8 h-8 flex items-center justify-center bg-[#dedee3] rounded-full  text-[#616164]  transition disabled:opacity-30"
            >
              <MdKeyboardArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
      <FacultyModal isOpen={isModalOpen} onClose={setIsModalOpen} facultyData={selectedMember} />
    </section>
  );
}
