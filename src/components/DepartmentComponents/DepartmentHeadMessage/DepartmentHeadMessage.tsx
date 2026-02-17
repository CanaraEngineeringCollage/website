"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import FacultyModal, { CouncilMember } from "../FacultyModal/FacultyModal";

interface DepartmentHeadProps {
  messageFromtheDepartmentHead: string;
}

interface DepartmentHeadMessageProps {
  departmentName: string;
  depatmentHead: DepartmentHeadProps;
}

const bufferToBase64 = (buffer: { type: string; data: number[] } | string | undefined) => {
  if (!buffer) return "";
  if (typeof buffer === "string") return buffer;
  const binary = buffer.data.reduce((acc, byte) => acc + String.fromCharCode(byte), "");
  const base64 = btoa(binary);
  return `data:image/jpeg;base64,${base64}`;
};

const DepartmentHeadMessage: React.FC<DepartmentHeadMessageProps> = ({ departmentName, depatmentHead }) => {
  const [departmentHeadData, setDepartmentHeadData] = useState<CouncilMember | null>(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchDepartmentHead = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/faculty?hod=true&department=${encodeURIComponent(departmentName)}`);
        if (response.ok) {
          const result = await response.json();
          if (result.data && result.data.length > 0) {
            setDepartmentHeadData(result.data[0]);
          }
        }
      } catch (error) {
        console.error("Failed to fetch department head:", error);
      } finally {
        setLoading(false);
      }
    };

    if (departmentName) {
      fetchDepartmentHead();
    }
  }, [departmentName]);

  if (loading) {
    return <div className="w-full h-96 bg-[#051B2C] animate-pulse"></div>;
  }

  if (!departmentHeadData) {
    return null;
  }

  const imageSrc = departmentHeadData.avatar
    ? bufferToBase64(departmentHeadData.avatar)
    : typeof departmentHeadData.image === "string"
      ? departmentHeadData.image
      : bufferToBase64(departmentHeadData.image as any);

  return (
    <section className="w-full bg-[#051B2C]">
      <div className=" py-16  md:py-20 lg:py-20">
        <h1 className="text-3xl lg:hidden text-center lg:text-start mb-10 md:text-[40px] leading-[1.2] lg2:text-5xl  font-bold">
          Message from the Head of the Department
        </h1>
        <div className="grid grid-cols-1 lg:w-[70%] overflow-hidden mx-auto lg:grid-cols-12  items-center">
          <div className=" lg:hidden block">
            {/* Image Section */}
            <div className="flex flex-col items-center lg:ms-46 ms-1">
              <div
                onClick={() => setIsModalOpen(true)}
                className="w-72 md:w-80 h-96 relative overflow-hidden shadow-md rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
              >
                <Image fill src={imageSrc} alt={departmentHeadData.name} className="object-cover bg-[#6dc0eb]" />
              </div>
              <p className="mt-4 text-center text-[27px] font-bold text-white">{departmentHeadData.name}</p>
              <p className="text-[17px] text-white">{departmentHeadData.designation}</p>
            </div>
          </div>
          <div className="col-span-7 lg2:px-0 lg:px-0 md:px-6 px-0">
            <h1 className="text-3xl hidden lg:block text-center lg:text-start mb-10 md:text-[40px] leading-[1.2] lg2:text-5xl font-bold">
              Message from the <br className="hidden lg:block" /> Head of the Department
            </h1>
            <div
              className="text-[17px] mt-6 lg:mt-0 text-white text-justify lg:leading-[1.7]"
              dangerouslySetInnerHTML={{ __html: depatmentHead.messageFromtheDepartmentHead }}
            />
          </div>
          <div className=" col-span-1"></div>
          <div className=" hidden col-span-4   lg:block ms-1">
            <div className="flex flex-col items-center   w-full ">
              <div
                onClick={() => setIsModalOpen(true)}
                className="w-72 md:w-80 h-96 relative overflow-hidden shadow-md rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
              >
                <Image src={imageSrc} fill alt={departmentHeadData.name} className="object-cover bg-[#6dc0eb]" />
              </div>
              <p className="mt-4 text-center text-[27px] font-bold text-white">{noOrphan(departmentHeadData.name)}</p>

              <p className="text-[17px] text-white text-justify">{departmentHeadData.designation}</p>
            </div>
          </div>
        </div>
      </div>
      <FacultyModal isOpen={isModalOpen} onClose={setIsModalOpen} facultyData={departmentHeadData} />
    </section>
  );
};

export default DepartmentHeadMessage;

const noOrphan = (text: string) => text.replace(/ ([A-Z])$/, "\u00A0$1");
