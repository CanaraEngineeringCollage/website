"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import FacultyModal from "@/components/DepartmentComponents/FacultyModal/FacultyModal";
import { adminStaff, generalStaff } from "@/utils/staffs/staff";
import { useSearchParams } from "next/navigation";

interface CouncilMember {
  id: number;
  name: string;
  image?: string;
  avatar?: { type: string; data: number[] };
  designation: string;
  department?: string;
  type?: string; // "Technical Staff" or others
  priority?: number;
}

const bufferToBase64 = (buffer: { type: string; data: number[] }) => {
  const binary = buffer.data.reduce((acc, byte) => acc + String.fromCharCode(byte), "");
  const base64 = btoa(binary);
  return `data:image/jpeg;base64,${base64}`;
};

// Reusable card component
const FacultyCard: React.FC<{ member: CouncilMember; onClick?: () => void }> = ({ member, onClick }) => (
  <div
    onClick={onClick}
    className="relative cursor-pointer w-full max-w-[309px] aspect-[3/4] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center shadow-md"
  >
    <Image
      src={member.avatar ? bufferToBase64(member.avatar) : member.image || ""}
      alt={member.name}
      fill
      className="object-cover"
    />
    <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB] via-[#6DC0EB]/70 to-transparent z-10"></div>
    <div className="absolute z-20 bottom-3 sm:bottom-4 px-2 sm:px-3 md:px-4 left-0 w-full">
      <h2 className="text-base sm:text-lg md:text-sm lg:text-sm lg2:text-lg xl:text-2xl font-bold leading-tight">
        {member.name}
      </h2>
      <p className="text-xs sm:text-lg md:text-sm lg:text-sm lg2:text-lg xl:text-2xl leading-snug break-words">
        {member.designation}
      </p>
      {onClick && (
        <p className="text-xs sm:text-lg md:text-sm lg:text-sm lg2:text-lg xl:text-2xl font-bold flex items-center mt-1">
          View Profile
          <MdKeyboardArrowRight className="ml-1 text-lg" />
        </p>
      )}
    </div>
  </div>
);

const FacultyMembersSection: React.FC = () => {
 const searchParams = useSearchParams();
  const departmentFromQuery = searchParams.get("department");
  const categoryFromQuery = searchParams.get("category");

  const [selectedDepartment, setSelectedDepartment] = useState<string>(
    departmentFromQuery || "Computer Science & Engineering"
  );
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryFromQuery || "faculty"
  );
  const [facultyData, setFacultyData] = useState<CouncilMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<CouncilMember | null>(null);

  const departments = [
    "Computer Science & Engineering",
    "Information Science & Engineering",
    "Electronics & Communication Engineering",
    "Computer Science & Design",
    "Computer Science & Business System",
    "Artificial Intelligence & Machine Learning",
    "Mechanical Engineering",
    "Science & Humanities",
  ];


useEffect(() => {
  // Scroll to top when component mounts or when category/department changes
  const scrollContainer = document.querySelector(".scrollable");
  if (scrollContainer) scrollContainer.scrollTo({ top: 0, behavior: "instant" });

  // Also scroll the window to top (for safety)
  window.scrollTo({ top: 0, behavior: "instant" });
}, [selectedDepartment, selectedCategory]);


  // ✅ Fetch only the selected department
useEffect(() => {
  async function fetchFaculty() {
    try {
      setLoading(true);
      let url = "";

      if (selectedCategory === "placement") {
        // ✅ Fetch placement team data separately
        url = `${process.env.NEXT_PUBLIC_API_URL}/faculty?department=Placement%20Team&all=true`;
      } else if (selectedCategory === "faculty") {
        url = `${process.env.NEXT_PUBLIC_API_URL}/faculty?department=${encodeURIComponent(
          selectedDepartment
        )}&all=true`;
      } else {
        setFacultyData([]); // for admin/general categories (local data)
        return;
      }

      const res = await fetch(url);
      const data = await res.json();
      setFacultyData(data);
    } catch (err) {
      console.error("Error fetching faculty:", err);
    } finally {
      setLoading(false);
    }
  }

  fetchFaculty();
}, [selectedDepartment, selectedCategory, categoryFromQuery]);



  // ✅ Update department when query changes (if user navigates)
  useEffect(() => {
    if (departmentFromQuery) setSelectedDepartment(departmentFromQuery);
  }, [departmentFromQuery]);

  // ✅ Sorting and category filtering logic
  const filteredData =
    selectedCategory === "faculty"
      ? facultyData
          .sort((a, b) => {
            if (a.priority && b.priority) return a.priority - b.priority;
            if (a.priority && !b.priority) return -1;
            if (!a.priority && b.priority) return 1;
            return (
              new Date(a.createdAt).getTime() -
              new Date(b.createdAt).getTime()
            );
          })
      : selectedCategory === "placement"
      ? facultyData
          .filter((item) => item.department === "Placement Team")
          .sort((a, b) => {
            if (a.priority && b.priority) return a.priority - b.priority;
            if (a.priority && !b.priority) return -1;
            if (!a.priority && b.priority) return 1;
            return (
              new Date(a.createdAt).getTime() -
              new Date(b.createdAt).getTime()
            );
          })
      : selectedCategory === "admin"
      ? adminStaff
      : generalStaff;


      

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-10 md:py-16 lg:py-20">
      <h1 className="lg:text-[54px] text-[46px] font-bold text-[#1D1D1F] leading-tight mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-10">
        Educators &<br /> Administrators
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {/* Sidebar */}
        <div className="md:col-span-5">
          <div className="sticky top-20 h-fit">
            <div className="w-full sm:w-[80%] mx-auto md:mx-0">
              {["faculty", "placement", "admin", "general"].map((cat) => (
                <div key={cat} className={`border-b-2 border-border ${cat !== "faculty" ? "py-4 sm:py-5" : "py-4 sm:py-5"}`}>
                  <h1
                    className={`text-[20px] cursor-pointer ${
                      selectedCategory === cat ? "font-bold text-[#2884CA]" : "text-textGray"
                    }`}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSelectedDepartment(cat === "faculty" ? "Computer Science & Engineering" : "");
                    }}
                  >
                    {cat === "faculty"
                      ? "Faculty Members"
                      : cat === "placement"
                      ? "Placement Staff"
                      : cat === "admin"
                      ? "Administrative Staff"
                      : "General Staff"}
                  </h1>

                  {/* Departments only for Faculty */}
                  {cat === "faculty" && selectedCategory === "faculty" && (
                    <ul className="ml-4 sm:ml-6 md:ml-10 text-[17px] leading-relaxed mt-2 sm:mt-3">
                      {departments.map((dept) => (
                        <li
                          key={dept}
                          className={`cursor-pointer py-1 ${
                            selectedDepartment === dept ? "font-bold text-[#2884CA]" : "text-textGray"
                          }`}
                          onClick={() => setSelectedDepartment(dept)}
                        >
                          {dept}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="md:col-span-7 text-sm sm:text-base h-[90vh] scrollable  overflow-y-auto pr-2 md:text-lg">


          {loading ? (
    // Skeleton loading grid
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg2:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-3 justify-items-center">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  ) : (
    <>
          {selectedCategory === "faculty" && (
            <>
              {/* Teaching Staff */}
              {filteredData.some((item) => item.type !== "Technical Staff") && (
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1D1D1F] mb-6 mt-2">
                  Teaching Staff
                </h2>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg2:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-3 justify-items-center mb-8">
                {filteredData
                  .filter((item) => item.type !== "Technical Staff")
                  .map((item) => (
                    <FacultyCard
                      key={item.id}
                      member={item}
                      onClick={() => {
                        setSelectedMember(item);
                        setIsModalOpen(true);
                      }}
                    />
                  ))}
              </div>

              {/* Technical Staff */}
              {filteredData.some((item) => item.type === "Technical Staff") && (
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1D1D1F] mb-6 mt-8">
                  Technical Staff
                </h2>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg2:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-3 justify-items-center">
                {filteredData
                  .filter((item) => item.type === "Technical Staff")
                  .map((item) => (
                    <FacultyCard
                      key={item.id}
                      member={item}
                      onClick={() => {
                        setSelectedMember(item);
                        setIsModalOpen(true);
                      }}
                    />
                  ))}
              </div>
            </>
          )}
  {selectedCategory === "placement" && (
            <>
              {/* Teaching Staff */}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg2:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-3 justify-items-center mb-8">
                {filteredData
                  .filter((item) => item.type !== "Technical Staff")
                  .map((item) => (
                    <FacultyCard
                      key={item.id}
                      member={item}
                      onClick={() => {
                        setSelectedMember(item);
                        setIsModalOpen(true);
                      }}
                    />
                  ))}
              </div>

            </>
          )}
          {/* Other categories */}
          {selectedCategory !== "faculty" && selectedCategory !== "placement" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg2:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-3 justify-items-center">
              {filteredData.map((item) => (
                <FacultyCard key={item.id} member={item} />
              ))}
            </div>
          )}
          </>
          )}
        </div>
      </div>

      <FacultyModal isOpen={isModalOpen} onClose={setIsModalOpen} facultyData={selectedMember} />
    </section>
  );
};

export default FacultyMembersSection;


// Skeleton placeholder card (for loading state)
const SkeletonCard: React.FC = () => (
  <div className="relative w-full max-w-[309px] aspect-[3/4] rounded-xl overflow-hidden bg-gray-200 animate-pulse">
 <div className="absolute inset-0 bg-[#6DC0EB]/40" />
    <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB]/70 via-[#6DC0EB]/40 to-transparent" />
    <div className="absolute bottom-4 left-0 w-full px-3 space-y-2">
      <div className="h-5 bg-white/50 rounded w-3/4"></div>
      <div className="h-4 bg-white/40 rounded w-1/2"></div>
      <div className="h-4 bg-white/30 rounded w-1/3"></div>
    </div>
  </div>
);
