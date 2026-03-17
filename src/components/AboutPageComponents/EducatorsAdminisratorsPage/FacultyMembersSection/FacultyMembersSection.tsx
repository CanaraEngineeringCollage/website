"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import FacultyModal from "@/components/DepartmentComponents/FacultyModal/FacultyModal";
import { useSearchParams } from "next/navigation";

interface CouncilMember {
  id: number;
  name: string;
  image?: string;
  hasAvatar?: boolean; // ✅ FIX 1: Added hasAvatar flag
  avatar?: { type: string; data: number[] };
  designation: string;
  department?: string;
  type?: string;
  subDepartment?: string;
  priority?: number;
  createdAt?: string;
}

const bufferToBase64 = (buffer: { type: string; data: number[] }) => {
  const binary = buffer.data.reduce((acc, byte) => acc + String.fromCharCode(byte), "");
  const base64 = btoa(binary);
  return `data:image/jpeg;base64,${base64}`;
};

const FacultyCard: React.FC<{ member: CouncilMember; onClick?: () => void }> = ({ member, onClick }) => (
  <div
    onClick={onClick}
    className={`relative ${
      onClick ? "cursor-pointer" : "cursor-default"
    } w-full max-w-[309px] aspect-[3/4] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center shadow-md`}
  >
    <img 
      // ✅ FIX 2: Used hasAvatar and the backend URL
      src={member.hasAvatar ? `${process.env.NEXT_PUBLIC_API_URL}/faculty/${member.id}/avatar` : (member.image || "/fallback-avatar.png")} 
      alt={member.name} 
     
    className="absolute top-0 left-0 w-full h-full object-cover"
    />
    <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB] via-[#6DC0EB]/70 to-transparent z-10"></div>
    <div className="absolute z-20 bottom-3 sm:bottom-4 px-2 sm:px-3 md:px-4 left-0 w-full">
      <h2 className="text-base sm:text-lg md:text-sm lg:text-sm lg2:text-base xl:text-xl font-bold leading-tight">{member.name}</h2>
      <p className="text-xs sm:text-lg md:text-xs lg:text-xs lg2:text-sm xl:text-lg leading-snug break-words">{member.designation}</p>

      {/* ✅ View profile only if onClick exists */}
      {onClick && (
        <p className="text-xs sm:text-lg md:text-sm lg:text-sm lg2:text-sm xl:text-lg font-bold flex items-center mt-1">
          View Profile
          <MdKeyboardArrowRight className="ml-1 text-lg" />
        </p>
      )}
    </div>
  </div>
);

import CustomSelect from "@/components/Common/CustomSelect/CustomSelect";
import formatDepartmentName from "@/utils/formatDepartmentName";

// ... existing imports

const FacultyMembersSection: React.FC = () => {
  const searchParams = useSearchParams();
  const departmentFromQuery = searchParams.get("department");
  const categoryFromQuery = searchParams.get("category");

  const [selectedDepartment, setSelectedDepartment] = useState(departmentFromQuery || "Artificial Intelligence & Machine Learning");
  const [selectedCategory, setSelectedCategory] = useState(categoryFromQuery || "faculty");

  const [facultyData, setFacultyData] = useState<CouncilMember[]>([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<CouncilMember | null>(null);

  const departments = [
    "Artificial Intelligence & Machine Learning",
  "Computer Science & Business System",
  "Computer Science & Design",
  "Computer Science & Engineering",
  "Electronics & Communication Engineering",
  "Information Science & Engineering",
  "Mechanical Engineering",
  "Science & Humanities",
  ];

  const categoryMapping: { [key: string]: string } = {
    faculty: "Faculty Members",
    placement: "Placement Staff",
    admin: "Administrative Staff",
    "physical education": "Physical Education Staff",
    general: "General Staff",
    "Student Welfare Department": "Student Welfare Department",
    "Dean Office": "Dean Office",
    library: "Library Staff",
    Hostel: "Hostel Staff",
  };

  const reverseCategoryMapping = Object.fromEntries(Object.entries(categoryMapping).map(([key, value]) => [value, key]));

  const categoryOptions = Object.values(categoryMapping);

  useEffect(() => {
    async function fetchFaculty() {
      try {
        setLoading(true);
        let url = "";

        if (selectedCategory === "placement") {
          url = `${process.env.NEXT_PUBLIC_API_URL}/faculty?department=Placement%20Team&all=true`;
        } else if (selectedCategory === "faculty") {
          url = `${process.env.NEXT_PUBLIC_API_URL}/faculty?department=${encodeURIComponent(selectedDepartment)}&all=true`;
        } else if (selectedCategory === "admin") {
          url = `${process.env.NEXT_PUBLIC_API_URL}/faculty?department=Admin&all=true`;
        } else if (selectedCategory === "general") {
          url = `${process.env.NEXT_PUBLIC_API_URL}/faculty?department=General&all=true`;
        } else if (selectedCategory === "library") {
          url = `${process.env.NEXT_PUBLIC_API_URL}/faculty?department=Library&all=true`;
        } else if (selectedCategory === "Hostel") {
          url = `${process.env.NEXT_PUBLIC_API_URL}/faculty?department=Hostel&all=true`;
        } else if (selectedCategory === "Student Welfare Department") {
          url = `${process.env.NEXT_PUBLIC_API_URL}/faculty?department=Student%20Welfare%20Department&all=true`;
        } else if (selectedCategory === "Dean Office") {
          url = `${process.env.NEXT_PUBLIC_API_URL}/faculty?department=Dean%20Office&all=true`;
        } else if (selectedCategory === "physical education") {
          url = `${process.env.NEXT_PUBLIC_API_URL}/faculty?department=Physical%20Education&all=true`;
        }

        if (!url) return;

        const res = await fetch(url);
        const data = await res.json();
        setFacultyData(data || []);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchFaculty();
  }, [selectedCategory, selectedDepartment]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedCategory, selectedDepartment]);

  // ✅ REMOVED manual sorting here since backend handles it perfectly now!
  const generalTeaching = facultyData.filter((item) => item.type !== "Technical Staff" && !item.subDepartment);
  const technicalStaff = facultyData.filter((item) => item.type === "Technical Staff");

  const groupedBySubDept = facultyData.reduce((acc: Record<string, CouncilMember[]>, faculty) => {
    if (faculty.subDepartment) {
      if (!acc[faculty.subDepartment]) acc[faculty.subDepartment] = [];
      acc[faculty.subDepartment].push(faculty);
    }
    return acc;
  }, {});

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-10 md:py-16 lg:py-20">
      <h1 className="lg:text-[54px] text-3xl md:text-[46px] font-bold text-[#1D1D1F] leading-tight mb-10">
        Educators & <br /> Administrators
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-5">
          <div className="sticky top-20 h-fit">
            {/* Mobile Dropdowns */}
            <div className="block md:hidden mb-6 space-y-4">
              <CustomSelect
                value={categoryMapping[selectedCategory]}
                onChange={(e) => {
                  const newCategory = reverseCategoryMapping[e.target.value];
                  setSelectedCategory(newCategory);
                  if (newCategory === "faculty") setSelectedDepartment("Computer Science & Engineering");
                }}
                options={categoryOptions}
              />

              {selectedCategory === "faculty" && (
                <CustomSelect value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)} options={departments} />
              )}
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden md:block w-full sm:w-[80%] mx-auto md:mx-0">
              {[
                "faculty",
                "placement",
                "Student Welfare Department",
                "Dean Office",
                "physical education",
                "admin",
                "general",
                "library",
                "Hostel",
              ].map((cat) => (
                <div key={cat} className="border-b-2 border-border py-4">
                  <h1
                    className={`text-[20px] cursor-pointer ${selectedCategory === cat ? "font-bold text-[#2884CA]" : "text-textGray"}`}
                    onClick={() => {
                      setSelectedCategory(cat);
                      if (cat === "faculty") setSelectedDepartment("Computer Science & Engineering");
                    }}
                  >
                    {categoryMapping[cat]}
                  </h1>

                  {cat === "faculty" && selectedCategory === "faculty" && (
                    <ul className="ml-6 mt-2 text-[17px] leading-relaxed">
                      {departments.map((dept) => (
                        <li
                          key={dept}
                          className={`cursor-pointer py-1 ${selectedDepartment === dept ? "font-bold text-[#2884CA]" : "text-textGray"}`}
                          onClick={() => setSelectedDepartment(dept)}
                        >
                          {formatDepartmentName(dept)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-7 max-h-[70vh] lg:max-h-[130vh] scrollable overflow-y-auto pr-2">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg2:grid-cols-3 gap-4 justify-items-center">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : selectedCategory === "faculty" ? (
            <>
              {generalTeaching.length > 0 && (
                <>
                  <h2 className="text-3xl font-semibold text-center md:text-start text-[#1D1D1F] mb-6">Teaching Faculty</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg2:grid-cols-3 gap-4 justify-items-center mb-8">
                    {generalTeaching.map((member) => (
                      <FacultyCard
                        key={member.id}
                        member={member}
                        onClick={() => {
                          setSelectedMember(member);
                          setIsModalOpen(true);
                        }}
                      />
                    ))}
                  </div>
                </>
              )}

              {Object.keys(groupedBySubDept).map((sub) => (
                <div key={sub} className="mb-12">
                  <h2 className="text-3xl font-semibold text-[#1D1D1F] mb-6">{sub}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg2:grid-cols-3 gap-4 justify-items-center">
                    {groupedBySubDept[sub].map((member) => (
                      <FacultyCard
                        key={member.id}
                        member={member}
                        onClick={() => {
                          setSelectedMember(member);
                          setIsModalOpen(true);
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}

              {technicalStaff.length > 0 && (
                <>
                  <h2 className="text-3xl font-semibold text-center md:text-start text-[#1D1D1F] mb-6 mt-10">Technical Staff</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg2:grid-cols-3 gap-4 justify-items-center">
                    {technicalStaff.map((member) => (
                      <FacultyCard
                        key={member.id}
                        member={member}
                        onClick={() => {
                          setSelectedMember(member);
                          setIsModalOpen(true);
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg2:grid-cols-3 gap-4 justify-items-center">
              {/* ✅ NO onClick here → NO MODAL → NO View Profile */}
              {facultyData.map((item) => ( // ✅ Changed from sortedFaculty to facultyData
                <FacultyCard
                  key={item.id}
                  member={item}
                  onClick={
                    selectedCategory === "placement"
                      ? () => {
                          setSelectedMember(item);
                          setIsModalOpen(true);
                        }
                      : undefined
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <FacultyModal isOpen={isModalOpen} onClose={setIsModalOpen} facultyData={selectedMember as any} />
    </section>
  );
};

export default FacultyMembersSection;

const SkeletonCard: React.FC = () => (
  <div className="relative w-full max-w-[309px] aspect-[3/4] rounded-xl overflow-hidden bg-gray-200 animate-pulse">
    <div className="absolute inset-0 bg-[#6DC0EB]/40" />
    <div className="absolute bottom-4 left-0 w-full px-3 space-y-2">
      <div className="h-5 bg-white/50 rounded w-3/4"></div>
      <div className="h-4 bg-white/40 rounded w-1/2"></div>
      <div className="h-4 bg-white/30 rounded w-1/3"></div>
    </div>
  </div>
);