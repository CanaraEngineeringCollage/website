"use client";
import React, { useState, useEffect } from "react";
import libraryData from "../../../utils/libraryData/libraryData.json";
import CustomSelect from "@/components/Common/CustomSelect/CustomSelect";
import Link from "next/link";

// Helper to map API data to FacultyMember interface
const mapApiDataToFaculty = (data: any[]): FacultyMember[] => {
  return data.map((item, index) => ({
    id: item.id || item._id || index,
    name: item.name,
    designation: item.designation,
    department: "Library",
    image: item.image,
    avatar: item.avatar,
    category: item.category || "Staff",
    joiningDate: item.joiningDate || "",
    experience: item.experience || "",
    employmentType: item.employmentType || "Permanent",
    qualifications: item.qualifications || [],
    createdAt: item.createdAt || new Date().toISOString(),
    email: item.email,
    phone: item.phone,
  }));
};

const renderTableCell = (text: string) => {
  if (text && text.startsWith("http")) {
    return (
      <a
        href={text}
        target="_blank"
        rel="noopener noreferrer"
        // FIXED: Changed 'break-all' to 'whitespace-nowrap'
        className="text-[#2884CA] underline hover:text-blue-700 whitespace-nowrap font-medium"
      >
        Click Here
      </a>
    );
  }
  return text;
};

const AboutCentralLibrary = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [staffData, setStaffData] = useState<FacultyMember[]>([]);
  const [loadingStaff, setLoadingStaff] = useState<boolean>(false);

  const sectionTitles = libraryData?.map((section) => section.title) || [];

  // --- Unified Handler for Tab Clicks (Mobile & Desktop) ---
  const handleTabClick = (index: number) => {
    const section = libraryData[index];

    // Check specifically for Digital Repository to handle redirect
    if (section.title === "Digital Repository") {
      // 1. Find the link dynamically from the data
      const linkItem = section.data?.find((item: any) => item.link);

      if (linkItem?.link) {
        // Open link in new tab
        window.open(linkItem.link, "_blank");
      }

      // 2. Reset active index to 0 (About Library) so the UI doesn't stay on the empty/link tab
      setSelectedIndex(0);
    } else {
      // Normal navigation for other tabs
      setSelectedIndex(index);
    }
  };

  // Fetch Staff Data
  useEffect(() => {
    const currentSection = libraryData[selectedIndex];

    // Check if the current section has a 'staff_grid' type
    const hasStaffGrid = currentSection?.data?.some((item: any) => item.type === "staff_grid");

    if (hasStaffGrid && staffData.length === 0) {
      const fetchStaff = async () => {
        setLoadingStaff(true);
        try {
          // Fetching from your API
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/faculty?department=Library&all=true`);
          const result = await response.json();

          // Handle both { data: [...] } and [...] responses
          const rawData = Array.isArray(result) ? result : result.data || [];
          const mappedData = mapApiDataToFaculty(rawData);

          setStaffData(mappedData);
        } catch (error) {
          console.error("Error fetching library staff:", error);
        } finally {
          setLoadingStaff(false);
        }
      };
      fetchStaff();
    }
  }, [selectedIndex, staffData.length]);

  return (
    <section className="py-10 text-[#1D1D1F] lg2:px-24 mx-5 overflow-hidden">
      <div>
        <div>
          <div className="md:mb-16 mb-8 md:mt-5">
            <Link href={`/explore/central-library`}>
              <button className="flex items-center gap-2 text-[#555]  transition-colors">
                <ArrowLeftIcon width={20} height={20} />
                <span className="text-lg text-[#6B6B6B]">Go Back</span>
              </button>
            </Link>
          </div>
        </div>
        <h1 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl font-bold  lg:pb-10 text-[#1D1D1F]">Central Library</h1>

        <div className={`md:grid grid-cols-1 gap-3 md:grid-cols-12 mt-8 md:mt-10`}>
          {/* Sidebar Area */}
          <div className="col-span-3">
            {/* Mobile Dropdown */}
            <div className="block md:hidden mb-6">
              <CustomSelect
                value={libraryData[selectedIndex]?.title || ""}
                onChange={(e) => {
                  const newIndex = libraryData.findIndex((item) => item.title === e.target.value);
                  if (newIndex !== -1) {
                    // FIXED: Call the handler to ensure redirects work on mobile
                    handleTabClick(newIndex);
                  }
                }}
                options={sectionTitles}
              />
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden md:block sticky top-20">
              {libraryData?.map((section, index) => (
                <h1
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className={`border-b-2 text-[18px] lg:text-[20px] pb-3 mb-3 border-border cursor-pointer transition-colors ${
                    selectedIndex === index ? "text-[#2884CA] font-bold" : "text-textGray font-[500] hover:text-[#2884CA]"
                  }`}
                >
                  {section.title}
                </h1>
              ))}
            </div>
          </div>

          <div className="col-span-1"></div>

          {/* Content Area */}
          <div className="col-span-8 max-h-[70vh] md:max-h-[100vh] scrollable overflow-y-auto pr-2">
            {libraryData[selectedIndex]?.data?.map((item: any, i: number) => (
              <div key={i} className="mb-8">
                {/* Standard Title */}
                {item.title && <h2 className="text-[20px] font-bold text-textGray mb-2">{item.title}</h2>}

                {/* Standard Description */}
                {item.description && (
                  <p className="md:text-lg text-[15px] leading-7 text-textGray whitespace-pre-line text-justify">{item.description}</p>
                )}

                {/* --- Library Staff Grid Component --- */}
                {item.type === "staff_grid" && (
                  <div className="">
                    <h2 className="text-[20px] font-bold text-textGray text-center lg:text-left mb-5 lg:mb-2">Library Staff</h2>
                    <LibraryStaff staffList={staffData} loading={loadingStaff} />
                  </div>
                )}

                {/* --- External Link Button (Fallback) --- */}
                {item.link && (
                  <div className="mt-6">
                    <Link href={item.link} target="_blank">
                      <button className="bg-[#2884CA] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md">
                        {item.linkText || "Visit Link"}
                      </button>
                    </Link>
                  </div>
                )}

                {/* Standard Bullet Points */}
                {item.points && (
                  <ul className="list-disc mt-3 pl-5 md:text-lg text-[15px] leading-7 text-textGray">
                    {item.points.map((point: string, j: number) => (
                      <li key={j} className="pb-2">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Standard Image Section */}
                {item.type === "image" && item.src && (
                  <div className="my-6 flex justify-center">
                    <img src={item.src} alt={item.alt || "Library Image"} className="rounded-lg w-full object-cover" />
                  </div>
                )}

                {/* Standard Iframe (Handbook / Docs) */}
                {item.href && (
                  <iframe
                    src={`${item.href}#toolbar=0&navpanes=0&view=FitH`}
                    className="w-full h-[60vh] md:h-[100vh] mt-3 border border-gray-200 rounded-lg bg-gray-50"
                    title={item.title || `Document-${i}`}
                  >
                    <p>
                      Your browser does not support PDFs. <a href={item.href}>Download the PDF</a>.
                    </p>
                  </iframe>
                )}

                {/* Standard Table */}
                {item.type === "table" && (
                  <div className="overflow-x-auto mt-5">
                    <div className="rounded-lg border border-gray-200 w-full">
                      <table className="w-full text-left text-[14px] md:text-[16px]">
                        <thead className="bg-[#F3F8FC] text-[#2884CA]">
                          <tr>
                            {item.headers?.map((header: string, hIndex: number) => (
                              <th key={hIndex} className="py-3 px-4 border-b font-bold whitespace-nowrap">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {item.rows?.map((row: string[], rIndex: number) => {
                            const isSectionHeader = row.length > 1 && row.slice(1).every((cell) => cell.trim() === "");
                            if (isSectionHeader) {
                              return (
                                <tr key={rIndex} className="bg-gray-100">
                                  <td colSpan={item.headers.length} className="py-3 px-4 border-b font-bold text-[#2884CA]">
                                    {row[0]}
                                  </td>
                                </tr>
                              );
                            }
                            return (
                              <tr key={rIndex} className="text-textGray  transition-colors">
                                {row.map((cell: string, cIndex: number) => (
                                  <td key={cIndex} className="py-3 px-4 border-b align-top">
                                    {renderTableCell(cell)}
                                  </td>
                                ))}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCentralLibrary;

import Image from "next/image";
import { ArrowLeftIcon } from "lucide-react";

// --- Interfaces ---
export interface Qualification {
  degree: string;
  degreeName: string;
  passingYear: string;
  college: string;
  specializedArea: string;
  specialization: string;
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
  type?: string;
  qualifications: Qualification[];
  priority?: number;
  createdAt: string;
  email?: string;
  phone?: string;
}

interface LibraryStaffProps {
  staffList: FacultyMember[];
  loading?: boolean;
}

// --- Sub-Components ---
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

// --- Main Component ---
const LibraryStaff = ({ staffList, loading = false }: LibraryStaffProps) => {
  const renderCards = (staffArray: FacultyMember[]) =>
    staffArray.map((item, index) => {
      return (
        <div
          key={item.id || index}
          className="relative w-full max-w-[309px] aspect-[3/4] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center shadow-md  transition-transform duration-300"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/faculty/${item.id}/avatar`}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB] via-[#6DC0EB]/70 to-transparent z-10"></div>

          {/* Content */}
          <div className="absolute z-20 bottom-3 sm:bottom-4 px-2 sm:px-3 md:px-4 left-0 w-full">
            <h2 className="text-base sm:text-lg md:text-sm lg:text-sm lg2:text-base xl:text-xl font-bold leading-tight mb-1">{item.name}</h2>
            <p className="text-xs sm:text-lg md:text-xs lg:text-xs lg2:text-sm xl:text-lg leading-snug break-words opacity-90">{item.designation}</p>
          </div>
        </div>
      );
    });

  return (
    <section className="pb-20">
      {loading ? (
        // Skeleton Loading Grid
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <>
          {staffList.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">{renderCards(staffList)}</div>
            </>
          ) : (
            <div className="text-center text-gray-500 py-10">
              <p>No staff details available at the moment.</p>
            </div>
          )}
        </>
      )}
    </section>
  );
};
