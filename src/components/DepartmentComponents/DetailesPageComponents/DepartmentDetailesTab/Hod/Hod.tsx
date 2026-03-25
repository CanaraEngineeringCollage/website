import FacultyModal from "@/components/DepartmentComponents/FacultyModal/FacultyModal";
import { FacultyMember } from "../Faculty/Faculty";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

interface HodProps {
  data?: {
    messageFromtheDepartmentHead?: string;
    name?: string;
    position?: string;
    imageUrl?: string;
  };
  facultyProfile?: FacultyMember;
}

// ✅ REMOVED bufferToBase64 function

const Hod: React.FC<HodProps> = ({ data, facultyProfile }) => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1600px)" });

  const sentences = data?.messageFromtheDepartmentHead?.split(/(?<=\.)\s+/).filter(Boolean) || [];
  const sentenceCount = isLargeScreen ? 3 : data?.name === "Dr.Praahas Amin" ? 2 : 3;

  const firstPart = sentences.slice(0, sentenceCount).join(" ");
  const remainingPart = sentences.slice(sentenceCount).join(" ");

  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const [imageHeight, setImageHeight] = useState<number | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);

  // ✅ FIX: Directly map to the securely constructed imageUrl from the parent
  const imageSrc = React.useMemo(() => {
    return data?.imageUrl || "/fallback-avatar.png";
  }, [data?.imageUrl]);

  useEffect(() => {
    if (paragraphRef.current) {
      setImageHeight(paragraphRef.current.offsetHeight);
    }
  }, [firstPart, isLargeScreen]);

  return (
    <div className=" text-textGray text-[17px]">
      <div className="flex  gap-6">
        <div className="inline-flex flex-col items-center">
          <Image
            src={imageSrc}
            alt={data?.name || "HOD"}
            width={1000}
            height={1000}
            priority
            className={`h-[300px] object-cover w-auto rounded-lg shadow ${facultyProfile ? "cursor-pointer" : ""}`}
            onClick={() => facultyProfile && setIsOpen(true)}
          />

          <div className="mt-2 font-semibold text-[#1D1D1F] text-center">{data?.name}</div>
          <div className="text-sm text-gray-500 text-center">{data?.position}</div>
        </div>
      </div>

      <div className="flex-1 flex mt-4 flex-col ">
        <p ref={paragraphRef} className="text-[14px] md:text-lg leading-7 text-justify text-textGray whitespace-pre-line">
          {data?.messageFromtheDepartmentHead}
        </p>
      </div>

      {facultyProfile && <FacultyModal facultyData={facultyProfile as any} isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default Hod;
