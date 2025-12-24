"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import Link from "next/link";
import FacultyModal from "@/components/DepartmentComponents/FacultyModal/FacultyModal";
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

const bufferToBase64 = (buffer: { type: string; data: number[] }) => {
  const binary = buffer.data.reduce((acc, byte) => acc + String.fromCharCode(byte), "");
  const base64 = btoa(binary);
  return `data:image/jpeg;base64,${base64}`;
};
export default function LibraryFaculty() {
  const [data, setData] = useState<CouncilMember[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const router = useRouter();
  

  const [facultyData, setFacultyData] = useState<CouncilMember[]>([]);
  const [loading, setLoading] = useState(false);

 useEffect(() => {
  async function fetchFaculty() {
    setLoading(true);
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/faculty?department=${encodeURIComponent(
        "Library"
      )}&all=true`; // ✅ Add all=true to fetch all faculties
      const res = await fetch(url);
      const data: CouncilMember[] = await res.json();

      const sortedData = data.sort((a, b) => {
        if (a.priority && b.priority) return a.priority - b.priority;
        if (a.priority && !b.priority) return -1;
        if (!a.priority && b.priority) return 1;
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      });

      setFacultyData(sortedData); // top 10
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
    setIsMobile(window.innerWidth < 768); // md breakpoint
  };
  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

// Show different number of cards based on screen size
const visibleMembers = isMobile
  ? data?.slice(startIndex, startIndex + 1)
  : data?.slice(startIndex, startIndex + 2);

// Handle next / previous navigation
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


  // inside Fac
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
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto my-20 xl:max-w-[75%] bg-[#F5F5F7] rounded-3xl">
      <div className="mx-auto py-10 lg1:flex hidden flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="max-w-md space-y-44">
          <div>
        <h2 className="text-3xl lg:text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
              Get to Know Our <br />
              <span className="">
           Library Staff
              </span>
            </h2>
            <p className="text-gray-700 mt-6 text-lg">
                Our Library Staff team is the backbone of our institution, ensuring seamless operations through their expertise, dedication, and commitment to excellence
            </p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <Link
            href="/about/educators-administrators?category=library"
            >
              <button
                aria-label="Our Library Staff team"
                className="bg-blue-100 text-black rounded-full text-block px-6 py-2  text-sm font-medium hover:bg-blue-200 transition"
              >
                Our Library Staff Team
              </button>
            </Link>
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

        <div className="grid grid-cols-1 w-full md:grid-cols-2 sm:grid-cols-2 justify-items-end gap-6">
          {loading
    ? // 🌟 Skeleton Loading (when fetching faculty data)
      Array.from({ length: 2 }).map((_, index) => (
        <div
          key={index}
          className="relative w-full max-w-[309px] aspect-[2/3] rounded-xl overflow-hidden bg-gray-200 animate-pulse flex flex-col items-center shadow-md"
        >
          {/* Image skeleton */}
        <div className="absolute inset-0 bg-[#6DC0EB]/40" />
    <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB]/70 via-[#6DC0EB]/40 to-transparent" />
    <div className="absolute bottom-4 left-0 w-full px-3 space-y-2">
      <div className="h-5 bg-white/50 rounded w-3/4"></div>
      <div className="h-4 bg-white/40 rounded w-1/2"></div>
      <div className="h-4 bg-white/30 rounded w-1/3"></div>
    </div>
        </div>
      ))
    : // 🌟 Actual Cards (once loaded)
          visibleMembers?.map((member, index) => (
            <div
              key={index}
              onClick={() => openModal(member)}
              className="relative  w-full max-w-[309px] aspect-[2/3] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center shadow-md"
            >
              {/* Image fills card completely */}
              <Image src={bufferToBase64(member?.avatar)} alt={member.name} fill className="object-cover" />

              {/* Responsive gradient */}
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB] via-[#6DC0EB]/70 to-transparent z-10"></div>

              {/* Content */}
              <div className="absolute z-20 bottom-3 sm:bottom-4 px-2 sm:px-3 md:px-4 left-0 w-full">
                <h2 className="text-base sm:text-lg md:text-xl font-bold leading-tight">{member.name}</h2>
                <p className="text-xs sm:text-sm md:text-base leading-snug break-words">
                  <span>{member.designation}</span>
                </p>

                {/* <p className="text-xs sm:text-sm md:text-base font-bold flex items-center mt-1">
                  View Profile
                  <MdKeyboardArrowRight className="ml-1 text-lg md:text-xl" />
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-10 lg1:hidden">
        <div className="max-w-xl space-y-44">
          <div className="text-center">
        <h2 className="text-3xl lg:text-4xl mb-3 md:text-4xl font-bold text-gray-900 leading-tight">
              Get to Know Our <br />
              <span className="">
           Library Staff
              </span>
            </h2>
            <p className="text-gray-700 text-lg">
              Our Library Staff team is the backbone of our institution, ensuring seamless operations through their expertise, dedication, and commitment to excellence
            </p>
          </div>
        </div>

        <div className=" flex  w-full gap-6">

            {loading
    ? // 🌟 Skeleton Loading (when fetching faculty data)
      Array.from({ length: 1 }).map((_, index) => (
          <div
          key={index}
          className="relative  w-full h-[360px] md:h-[480px] md:w-2/3 rounded-xl overflow-hidden bg-[#6DC0EB]/40 animate-pulse flex flex-col items-center shadow-md"
        >
          {/* Image skeleton */}
          <div className="absolute inset-0 bg-[#6DC0EB]/50" />

          {/* Gradient area to mimic card footer */}
          <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB]/80 via-[#6DC0EB]/50 to-transparent" />

          {/* Text placeholders */}
          <div className="absolute bottom-3 sm:bottom-4 px-2 sm:px-3 md:px-4 left-0 w-full space-y-2 z-10">
            <div className="h-5 bg-white/60 rounded w-3/4"></div>
            <div className="h-4 bg-white/50 rounded w-1/2"></div>
            <div className="h-4 bg-white/40 rounded w-1/3"></div>
          </div>
        </div>
      ))
    : 
          visibleMembers.map((member, index) => (
            <div
              key={index}
              onClick={() => openModal(member)}
              className="relative  w-full h-[360px] md:w-2/3 md:h-[480px] rounded-xl  overflow-hidden bg-[#6DC0EB] text-white flex flex-col justify-center items-center shadow-md "
            >
              {/* Image fills card completely */}
              <Image
                onClick={() => router.push(`/user-details/${member.id}`)}
                src={bufferToBase64(member?.avatar)}
                alt={member.name}
                fill
                className="object-cover"
              />

              {/* Responsive gradient */}
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB] via-[#6DC0EB]/70 to-transparent z-10"></div>

              {/* Content - anchored to bottom */}
              <div className="absolute z-20 bottom-3 sm:bottom-4 px-2 sm:px-3 md:px-4 left-0 w-full">
                <h2 className="text-base sm:text-lg md:text-xl font-bold leading-tight">{member.name}</h2>
                <p className="text-xs sm:text-sm md:text-base leading-snug break-words">
                  <span>{member.designation}</span>
                </p>
                {/* <p className="text-xs sm:text-sm md:text-base font-bold flex items-center mt-1">
                  View Profile
                  <MdKeyboardArrowRight className="ml-1 text-lg md:text-xl" />
                </p> */}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-7">
          <Link
           href="/about/educators-administrators?category=library"
          >
            {" "}
            <button className="bg-blue-100 rounded-full text-black text-block px-6 py-2  text-sm font-medium hover:bg-blue-200 transition">
              Our Library Staff Team
            </button>
          </Link>
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



// Skeleton placeholder for loading state
const SkeletonCard: React.FC = () => (
  <div className="relative w-full max-w-[309px] aspect-[2/3] rounded-xl overflow-hidden bg-[#6DC0EB]/40 animate-pulse shadow-md">
    <div className="absolute inset-0 bg-[#6DC0EB]/50" />
    <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB]/60 via-[#6DC0EB]/40 to-transparent" />
    <div className="absolute bottom-4 left-0 w-full px-4 space-y-2">
      <div className="h-5 bg-white/50 rounded w-3/4"></div>
      <div className="h-4 bg-white/40 rounded w-1/2"></div>
      <div className="h-4 bg-white/30 rounded w-1/3"></div>
    </div>
  </div>
);
