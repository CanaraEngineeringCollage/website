"use client";
import Link from "next/link";
import React from "react";
import { useParams } from "next/navigation";

interface AboutTheDepartmentProps {
  aboutTheDepartment: string;
}

const AboutTheDepartment: React.FC<AboutTheDepartmentProps> = ({ aboutTheDepartment }) => {
  const { slug } = useParams();
  console.log(slug);

  return (
    <section className="md:py-14 text-[#1D1D1F] xl:py-28 pb-10 max-w-7xl xl:max-w-[75%] mx-auto ">
      <div>
        <div className="flex justify-between items-center mb-5 lg:mb-10">
          <div>
            <h1 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl font-bold text-[#1D1D1F]  ">About the Department</h1>
          </div>
          <div className="hidden lg:block">
            <Link href={`/department/${slug}/detailes`}>
              <button className="bg-[#007AFF26] rounded-4xl lg:px-6 lg:py-2.5">Learn More</button>
            </Link>
          </div>
        </div>
        <p className="text-textGray text-justify text-[20px]">{aboutTheDepartment}</p>
      </div>
      <div className="flex justify-center mt-10 lg:hidden">
       <Link href={`/department/${slug}/detailes`}>
              <button className="bg-[#007AFF26] rounded-4xl px-6 py-2.5">Learn More</button>
            </Link>
            </div>
    </section>
  );
};

export default AboutTheDepartment;
