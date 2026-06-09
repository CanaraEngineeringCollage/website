"use client";
import Link from "next/link";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

interface AboutTheDepartmentProps {
  aboutTheDepartment: string[];
  departmentName: string;
  imageUrl: string;
  width?: string;
  css?: string;
}

const formatDepartmentName = (name: string) => {
  if (!name) return "";
  const parts = name.split("&");
  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {part.trim()}
      {index < parts.length - 1 ? (
        <>
          <br className={`hidden ${name !== "AI & DS (Proposed – for the upcoming academic year 2026–2027)" && "lg:block"}`} />
          {" and "}

        </>
      ) : null}
    </React.Fragment>
  ));
};

const AboutTheDepartment: React.FC<AboutTheDepartmentProps> = ({ aboutTheDepartment, departmentName, imageUrl, width = "", css = "" }) => {
  const { slug } = useParams();

  return (
    <section className="pt-5 md:pt-10 text-[#1D1D1F] xl:pt-20 pb-10 max-w-7xl xl:max-w-[75%] mx-auto   ">
      <div>
        <div className="flex justify-between  mb-5 lg:mb-10">
          <div className="lg:w-[75%] ">
            <h1
              className={`  
  font-bold leading-[1.2] text-[#1D1D1F] 
  md:text-[40px] text-3xl lg2:text-5xl xl:text-6xl `}
            >
              {slug === "mba" || slug === "mca" ? (
                formatDepartmentName(departmentName)
              ) : (
                <>Department of {formatDepartmentName(departmentName)}</>
              )}
            </h1>
          </div>
          <div className="hidden lg:block ">
            <Link href={`/department/${slug}/details`}>
              <button className="bg-[#007AFF26] hover:bg-blue-200 rounded-4xl lg:px-4 mt-3.5 lg:py-2.5">More About the Department</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden rounded-4xl flex relative  items-center shadow-lg">
        {/* Text Overlay (Top Left) */}

        {/* Image */}
        <Image
          width={1000}
          height={1000}
          src={imageUrl}
          alt="department"
          className={`w-full h-[300px] sm:h-[400px] md:h-[590px] object-cover  ${css}`} // Adjust 30% based on image
        />
      </div>

      <div className="mt-10">
        {aboutTheDepartment?.map((paragraph, index) => (
          <p key={index} className="text-textGray text-justify text-[20px] mb-4">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="flex justify-center mt-10 lg:hidden">
        <Link href={`/department/${slug}/details`}>
          <button className="bg-[#007AFF26] hover:bg-blue-200 rounded-4xl px-6 py-2.5">More About the Department</button>
        </Link>
      </div>
    </section>
  );
};

export default AboutTheDepartment;
