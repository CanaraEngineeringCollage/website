"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import FacultyModal from "@/components/DepartmentComponents/FacultyModal/FacultyModal";

interface CouncilMember {
  id: number;
  name: string;
  image: string;
  hasAvatar?: boolean; // ✅ Added hasAvatar flag
  roles: { title: string; organization: string }[];
}

// ✅ REMOVED bufferToBase64 function

export default function DepartmentFaculty({ heading, description }: { heading: string; description: string }) {
  const [data, setData] = useState<CouncilMember[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedMember, setSelectedMember] = useState<CouncilMember | null>(null);
  const router = useRouter();

  const [facultyData, setFacultyData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = process.env.NEXT_PUBLIC_API_URL; // ✅ Added baseUrl

  useEffect(() => {
    const fetchFacultyData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${baseUrl}/faculty?department=${encodeURIComponent("Placement Team")}&all=true`); // ✅ Filter by department in URL
        if (!res.ok) throw new Error("Failed to fetch faculty data");

        const data: any[] = await res.json(); // ✅ Array of Placement Team faculties

        // ✅ REMOVED manual frontend sorting, just slicing the first 10
        const placementTeam = data.slice(0, 10); // take first 10 after backend sorting

        setFacultyData(placementTeam);
      } catch (error) {
        console.error("Error fetching faculty data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFacultyData();
  }, [baseUrl]);

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
  const visibleMembers = isMobile ? data?.slice(startIndex, startIndex + 1) : data?.slice(startIndex, startIndex + 2);

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

  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto mt-20 lg:mt-12 mb-16 lg:mb-8  xl:max-w-[75%] bg-[#F5F5F7] rounded-3xl">
      <div className=" mx-auto lg1:flex hidden  flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="max-w-md space-y-44">
          <div>
            <h2 className="text-3xl lg:text-4xl md:text-4xl text-start font-bold text-[#1D1D1F] leading-[1.1]">{heading}</h2>
            <p className="text-gray-700 text-lg mt-6">{description}</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            {heading != "Meet Our Admissions Team" && (
              <Link href="/educators-administrators?category=placement">
                <button
                  aria-label="Meet the Team"
                  className="bg-[#d0e2f8] text-[#1D1D1F] text-block  px-6 py-3 rounded-full text-[14px] font-medium "
                >
                  Meet the Team
                </button>
              </Link>
            )}
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
                    <div className="h-4 bg-white/30 rounded w-1/3"></div>
                  </div>
                </div>
              ))
            : (visibleMembers || [])?.map((member, index) => (
                <div
                  onClick={() => {
                    setSelectedMember(member);
                    setIsModalOpen(true);
                  }}
                  key={index}
                  className="relative cursor-pointer w-full max-w-[309px] lg2:h-[450px] lg:h-[350px] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center shadow-md"
                >
                  {/* ✅ Fixed Image fills card completely */}
                  <Image
                    src={member.hasAvatar ? `${baseUrl}/faculty/${member.id}/avatar` : member.image || "/fallback-avatar.png"}
                    alt={member.name}
                    fill
                    className="object-cover" // ensures no gaps, same as first design
                  />

                  {/* Responsive gradient */}
                  <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB] via-[#6DC0EB]/70 to-transparent z-10"></div>

                  {/* Content */}
                  <div className="absolute z-20 bottom-3 sm:bottom-4 px-2 sm:px-3 md:px-4 left-0 w-full">
                    <h2 className="lg2:text-[18px] lg:text-[16px] md:text-[11px] text-[18px] font-bold leading-tight">{member.name}</h2>
                    <p className="text-xs sm:text-sm md:text-base leading-snug break-words">
                      {member.roles &&
                        member.roles.map((role, idx) => (
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
                    <p className=" lg2:text-[16px]  md:text-[11px] text-[16px] font-bold flex items-center mt-1">
                      View Profile
                      <MdKeyboardArrowRight className="ml-1 text-lg md:text-xl" />
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-10 lg1:hidden  ">
        <div className="max-w-md space-y-44">
          <div>
            <h2 className="text-3xl lg:text-4xl md:text-4xl font-bold text-center mb-5 text-gray-900 leading-tight">{heading}</h2>
            <p className="text-gray-700 text-lg text-center">{description}</p>
          </div>
        </div>

        <div className="flex justify-center  w-full gap-6">
          {loading
            ? // 🌟 Skeleton Loading (when fetching faculty data)
              Array.from({ length: 1 }).map((_, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer w-full max-w-[309px] h-[400px] md:h-[420px] rounded-xl overflow-hidden bg-[#6DC0EB]/40 animate-pulse flex flex-col items-center shadow-md"
                >
                  {/* Image skeleton */}
                  <div className="absolute inset-0 bg-[#6DC0EB]/50" />

                  {/* Gradient area to mimic card footer */}
                  <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB]/80 via-[#6DC0EB]/50 to-transparent" />

                  {/* Text placeholders */}
                  <div className="absolute bottom-3 sm:bottom-4 px-2 sm:px-3 md:px-4 left-0 w-full space-y-2 z-10">
                    <div className="h-5 bg-white/60 rounded w-3/4"></div>
                    <div className="h-4 bg-white/40 rounded w-1/3"></div>
                  </div>
                </div>
              ))
            : visibleMembers?.map((member, index) => (
                <div
                  onClick={() => {
                    setSelectedMember(member);
                    setIsModalOpen(true);
                  }}
                  key={index}
                  className="relative cursor-pointer w-full max-w-[309px] h-[400px] md:h-[420px] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center shadow-md"
                >
                  {/* ✅ Fixed Image fills card completely (Mobile view) */}
                  <Image
                    src={member.hasAvatar ? `${baseUrl}/faculty/${member.id}/avatar` : member.image || "/fallback-avatar.png"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB] via-[#6DC0EB]/70 to-transparent z-10"></div>

                  {/* Content */}
                  <div className="absolute z-20 bottom-3 sm:bottom-4 px-2 sm:px-3 md:px-4 left-0 w-full text-start">
                    <h2 className="lg2:text-[18px] lg:text-[16px] md:text-[11px] text-[18px] font-bold leading-tight">{member.name}</h2>
                    <p className="text-xs sm:text-sm md:text-base leading-snug break-words ">
                      {member?.roles?.map((role, idx) => (
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
                    <p className="font-bold lg2:text-[16px]  md:text-[11px] text-[16px] font-bold flex items-center justify-start mt-1 ">
                      View Profile
                      <MdKeyboardArrowRight className="ml-1 text-sm md:text-xl" />
                    </p>
                  </div>
                </div>
              ))}
        </div>
        <div className="flex flex-col items-center gap-10">
          <Link href="/educators-administrators?category=placement">
            {" "}
            <button
              aria-label="Meet more of our Admin Team"
              className="bg-blue-100 text-[#1D1D1F] text-block px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition"
            >
              Meet the Team
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
      <FacultyModal isOpen={isModalOpen} onClose={setIsModalOpen} facultyData={selectedMember as any} />
    </section>
  );
}
