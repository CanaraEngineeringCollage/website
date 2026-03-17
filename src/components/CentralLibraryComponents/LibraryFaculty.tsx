"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import FacultyModal from "@/components/DepartmentComponents/FacultyModal/FacultyModal";

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

interface CouncilMember {
  id: number;
  name: string;
  designation: string;
  category: string;
  department: string;
  joiningDate?: string;
  experience?: string;
  employmentType?: string;
  qualifications: Qualification[];
}

export default function LibraryFaculty() {
  const [data, setData] = useState<CouncilMember[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [facultyData, setFacultyData] = useState<CouncilMember[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchFaculty() {
      setLoading(true);
      try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/faculty?department=${encodeURIComponent("Library")}&all=true`;

        const res = await fetch(url);
        const data: CouncilMember[] = await res.json();

        // ✅ sortedData removed
        setFacultyData(data);
      } catch (err) {
        console.error("Error fetching faculty:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchFaculty();
  }, []);

  useEffect(() => {
    setData(facultyData);
  }, [facultyData]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleMembers = isMobile ? data?.slice(startIndex, startIndex + 1) : data?.slice(startIndex, startIndex + 2);

  const handleNext = () => {
    const step = isMobile ? 1 : 2;
    if (startIndex + step < data.length) {
      setStartIndex(startIndex + step);
    }
  };

  const handlePrev = () => {
    const step = isMobile ? 1 : 2;
    if (startIndex - step >= 0) {
      setStartIndex(startIndex - step);
    }
  };

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
    <section className="py-12 md:py-16 px-6    ">
      <div className="max-w-7xl xl:max-w-[75%]  mx-auto my-3 md:my-5   ">
        <div className="mx-auto py-10 lg1:flex px-6 md:px-12 hidden flex-col-reverse bg-[#F5F5F7] md:rounded-3xl md:flex-row items-center justify-between gap-10">
          <div className="max-w-md space-y-44">
            <div>
              <h2 className="text-3xl lg:text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
                Get to Know Our <br />
                <span>Library Staff</span>
              </h2>
              <p className="text-gray-700 mt-6 text-lg">
                Our Library Staff team is the backbone of our institution, ensuring seamless operations through their expertise, dedication, and
                commitment to excellence.
              </p>
            </div>

            <div className="flex items-center justify-between gap-4">
              <Link href="/educators-administrators?category=library">
                <button className="bg-blue-100 text-[#1D1D1F] rounded-full px-6 py-2 text-sm font-medium hover:bg-blue-200 transition">
                  Our Library Staff Team
                </button>
              </Link>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  disabled={startIndex === 0}
                  className="w-8 h-8 flex items-center justify-center bg-[#dedee3] rounded-full   text-[#616164] hover:bg-gray-200 transition disabled:opacity-30"
                >
                  <MdKeyboardArrowLeft size={32} />
                </button>

                <button
                  onClick={handleNext}
                  disabled={startIndex + 2 >= data.length}
                  className="w-8 h-8 flex items-center justify-center bg-[#dedee3] rounded-full  text-[#616164]  transition disabled:opacity-30"
                >
                  <MdKeyboardArrowRight size={32} />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-6">
            {visibleMembers?.map((member, index) => (
              <div
                key={index}
                onClick={() => openModal(member)}
                className="relative w-full max-w-[309px] aspect-[2/3] rounded-xl overflow-hidden bg-[#6DC0EB] text-white shadow-md"
              >
                {/* ✅ Fixed Image */}
                <Image
                  unoptimized
                  src={`${process.env.NEXT_PUBLIC_API_URL}/faculty/${member.id}/avatar`}
                  alt={member.name}
                  fill
                  className="object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB] via-[#6DC0EB]/70 to-transparent z-10"></div>

                <div className="absolute z-20 bottom-3 px-3 left-0 w-full">
                  <h2 className="text-lg font-bold">{member.name}</h2>
                  <p className="text-sm break-words">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 lg1:hidden">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Get to Know Our <br /> Library Staff
            </h2>
            <p className="text-gray-700 text-lg mt-3">
              Our Library Staff team is the backbone of our institution, ensuring seamless operations through their expertise.
            </p>
          </div>

          <div className="flex w-full gap-6">
            {visibleMembers?.map((member, index) => (
              <div key={index} className="relative w-full h-[360px] rounded-xl overflow-hidden bg-[#6DC0EB] text-white shadow-md">
                {/* ✅ Fixed Image */}
                <Image
                  unoptimized
                  src={`${process.env.NEXT_PUBLIC_API_URL}/faculty/${member.id}/avatar`}
                  alt={member.name}
                  fill
                  className="object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB] via-[#6DC0EB]/70 to-transparent z-10"></div>

                <div className="absolute z-20 bottom-3 px-3 left-0 w-full">
                  <h2 className="text-lg font-bold">{member.name}</h2>
                  <p className="text-sm">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="w-8 h-8 flex items-center justify-center bg-[#dedee3] rounded-full   text-[#616164] hover:bg-gray-200 transition disabled:opacity-30"
            >
              <MdKeyboardArrowLeft size={24} />
            </button>

            <button
              onClick={handleNext}
              disabled={startIndex + 1 >= data.length}
              className="w-8 h-8 flex items-center justify-center bg-[#dedee3] rounded-full  text-[#616164]  transition disabled:opacity-30"
            >
              <MdKeyboardArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
      {/* <FacultyModal isOpen={isModalOpen} onClose={closeModal} facultyData={selectedMember} /> */}
    </section>
  );
}
