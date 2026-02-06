"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import FacultyModal, { bufferToBase64, CouncilMember } from "../../../DepartmentComponents/FacultyModal/FacultyModal";

interface CardMember extends CouncilMember {
  roles?: { title: string; organization: string }[];
}

const ProfileCard = ({ title }: { title: string }) => {
  const [data, setData] = useState<CardMember[]>([]);
  const [keyFunctionaries, setKeyFunctionaries] = useState<CardMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<CardMember | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;

        // Fetch both endpoints concurrently
        const [keyRes, hodRes] = await Promise.all([fetch(`${baseUrl}/faculty?keyFunctionary=true`), fetch(`${baseUrl}/faculty?hod=true`)]);

        const keyJson = await keyRes.json();
        const hodJson = await hodRes.json();

        const finalKeyData = keyJson.data || [];
        const finalHodData = hodJson.data || [];

        console.log("Final Key Data:", finalKeyData);
        console.log("Final HOD Data:", finalHodData);

        setKeyFunctionaries(finalKeyData);
        setData(finalHodData);
      } catch (error) {
        console.error("Error fetching faculty data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (member: CardMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  // Skeleton Card Component
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

  return (
    <section className="pb-20 max-w-5xl xl:max-w-[65%] mx-auto px-5">
      <FacultyModal isOpen={isModalOpen} onClose={setIsModalOpen} facultyData={selectedMember} />

      {/* --- Key Functionaries Section --- */}
      <h1 className="text-[#1D1D1F] leading-[1.3] text-3xl md:text-[40px] lg:text-[54px] pb-10 pt-10 md:pb-16 xl:pb-20 font-bold text-center">
        Key Functionaries
      </h1>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 justify-items-center mb-10">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <SkeletonCard key={i} />
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 justify-items-center mb-10">
          {keyFunctionaries.map((item, index) => {
            const isLastCard = index === keyFunctionaries.length - 1;
            const remainder = keyFunctionaries.length % 3;
            const shouldCenterLast = remainder === 1 && isLastCard;

            return (
              <div
                key={index}
                onClick={() => handleCardClick(item)}
                className={`relative w-full max-w-[309px] aspect-[3/4] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center shadow-md cursor-pointer transition-transform hover:scale-[1.02] ${
                  shouldCenterLast ? "md:col-start-2 xl:col-start-auto" : ""
                }`}
              >
                <Image src={bufferToBase64(item.avatar) || ""} alt={item.name} fill className="object-cover" />
                <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB] via-[#6DC0EB]/70 to-transparent z-10"></div>
                <div className="absolute z-20 bottom-3 sm:bottom-4 px-2 sm:px-3 md:px-4 left-0 w-full">
                  <h2 className="text-base sm:text-lg md:text-xl font-bold leading-tight ">{item.name}</h2>
                  <p className="text-xs sm:text-sm md:text-base leading-snug break-words">
                  
                       {item.department}
                 
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* --- Main Section (HOD/Faculty) --- */}
      <h1 className="text-[#1D1D1F] leading-[1.3] text-3xl md:text-[40px] lg:text-[54px] pb-10 pt-10 md:pb-16 xl:pb-20 font-bold text-center">
        {title}
      </h1>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 justify-items-center">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <SkeletonCard key={i} />
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 justify-items-center">
          {data.map((item, index) => {
            const isLastCard = index === data.length - 1;
            const remainder = data.length % 3;
            const shouldCenterLast = remainder === 1 && isLastCard;

            return (
              <div
                key={index}
                onClick={() => handleCardClick(item)}
                className={`relative w-full max-w-[309px] aspect-[3/4] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center shadow-md cursor-pointer transition-transform hover:scale-[1.02] ${
                  shouldCenterLast ? "md:col-start-2 xl:col-start-auto" : ""
                }`}
              >
                <Image src={bufferToBase64(item.avatar)  || ""} alt={item.name} fill className="object-cover" />
                <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB] via-[#6DC0EB]/70 to-transparent z-10"></div>
                <div className="absolute z-20 bottom-3 sm:bottom-4 px-2 sm:px-3 md:px-4 left-0 w-full">
                  <h2 className="text-base sm:text-lg md:text-xl font-bold leading-tight ">{item.name}</h2>
                   <p className="text-xs sm:text-sm md:text-base leading-snug break-words">
                  
                       {item.department}
                 
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ProfileCard;
