"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import FacultyModal, { bufferToBase64 } from "@/components/DepartmentComponents/FacultyModal/FacultyModal";

interface Role {
  title: string;
  organization: string;
}

interface CouncilMember {
  _id?: string;
  id?: number | string;
  name: string;
  image?: string;
  avatar?: { type: string; data: number[] };
  images?: string;
  designation?: string;
  department?: string;
  roles?: Role[];
  // Include other fields needed for FacultyModal
  emergencycontact?: string;
  timings?: string;
  category?: string;
  joiningDate?: string;
  experience?: string;
  employmentType?: string;
  qualifications?: any[];
  achievements?: any[];
  bookChapters?: any[];
  certifications?: any[];
  address?: string;
  contact?: string;
  email?: string;
}

const SkeletonCard = () => (
  <div className="relative w-full max-w-[309px] aspect-[3/4] rounded-xl overflow-hidden bg-[#6DC0EB] shadow-md animate-pulse">
    <div className="absolute inset-0 bg-[#6DC0EB]/40" />
    <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB]/70 via-[#6DC0EB]/40 to-transparent" />
    <div className="absolute bottom-4 left-0 w-full px-3 space-y-2">
      <div className="h-5 bg-white/50 rounded w-3/4"></div>
      <div className="h-4 bg-white/30 rounded w-1/3"></div>
    </div>
  </div>
);

const KeyFunctionariesAndHods = () => {
  const [keyFunctionaries, setKeyFunctionaries] = useState<CouncilMember[]>([]);
  const [hods, setHods] = useState<CouncilMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState<CouncilMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!apiUrl) {
          console.error("NEXT_PUBLIC_API_URL is not defined");
          setLoading(false);
          return;
        }

        const [kfRes, hodRes] = await Promise.all([
          fetch(`${apiUrl}/faculty?keyFunctionary=true`),
          fetch(`${apiUrl}/faculty?hod=true`),
        ]);

        if (kfRes.ok) {
          const kfData = await kfRes.json();
          setKeyFunctionaries(kfData);
        }
        if (hodRes.ok) {
          const hodData = await hodRes.json();
          setHods(hodData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (member: CouncilMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = (isOpen: boolean) => {
    setIsModalOpen(isOpen);
    if (!isOpen) setSelectedMember(null);
  };

  const renderSection = (title: string, data: CouncilMember[]) => {
    if (!data || data.length === 0) return null;

    return (
      <>
        <h1 className="text-[#1D1D1F] leading-[1.3] text-3xl md:text-[40px] lg:text-[54px] pb-10 pt-10 md:pb-16 xl:pb-20 font-bold text-center">
          {title}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 justify-items-center mb-10">
          {data.map((item, index) => {
            const isLastCard = index === data.length - 1;
            const remainder = data.length % 3;
            const shouldCenterLast = remainder === 1 && isLastCard;

            const imgSrc = item.avatar
              ? bufferToBase64(item.avatar)
              : item.images || item.image || "/placeholder.png";

            return (
              <div
                key={item._id || item.id || index}
                className={`relative w-full max-w-[309px] aspect-[3/4] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center shadow-md cursor-pointer transition-transform hover:scale-[1.02] ${
                  shouldCenterLast ? "md:col-start-2 xl:col-start-auto" : ""
                }`}
                onClick={() => handleCardClick(item)}
              >
                {/* Image fills card completely */}
                <Image
                  src={imgSrc}
                  alt={item.name}
                  fill
                  unoptimized
                  className="object-cover"
                />

                {/* Responsive gradient */}
                <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB] via-[#6DC0EB]/70 to-transparent z-10 w-full"></div>

                {/* Content */}
                <div className="absolute z-20 bottom-3 sm:bottom-4 px-2 sm:px-3 md:px-4 left-0 w-full">
                  <h2 className="text-base sm:text-lg md:text-xl font-bold leading-tight ">
                    {item.name}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base leading-snug break-words">
                    {item.roles && item.roles.length > 0 ? (
                      item.roles.map((role, idx) => (
                        <span key={idx}>
                          {role.title}
                          {item.roles!.length > 1 && role.organization && ","}{" "}
                          <span className="font-semibold">{role.organization}</span>
                          {idx < item.roles!.length - 1 && <br />}
                        </span>
                      ))
                    ) : (
                      <>
                        {item.designation} <br />
                        <span className="font-semibold">{item.department}</span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const renderSkeletons = () => (
    <div className="max-w-5xl xl:max-w-[65%] mx-auto px-5 pb-20">
      <div className="h-16 w-3/4 bg-gray-200 animate-pulse mx-auto mb-16 rounded"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 justify-items-center">
         {Array.from({ length: 4 }).map((_, i) => (
           <SkeletonCard key={i} />
         ))}
      </div>
    </div>
  );

  if (loading) return renderSkeletons();

  return (
    <section className="pb-20 max-w-5xl xl:max-w-[65%] mx-auto px-5">
      {renderSection("Key Functionaries", keyFunctionaries)}
      {renderSection("Head of the Departments", hods)}

      <FacultyModal
        isOpen={isModalOpen}
        onClose={closeModal}
        facultyData={selectedMember}
      />
    </section>
  );
};

export default KeyFunctionariesAndHods;
