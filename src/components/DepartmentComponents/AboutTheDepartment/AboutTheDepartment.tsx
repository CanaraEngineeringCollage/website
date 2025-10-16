"use client";
import Link from "next/link";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

interface AboutTheDepartmentProps {
  aboutTheDepartment: string[];
  departmentName:string;
  imageUrl: string;
  wdith?:string
  

}

const   AboutTheDepartment: React.FC<AboutTheDepartmentProps> = ({ aboutTheDepartment,departmentName,imageUrl,wdith="" }) => {
  const { slug } = useParams();
  console.log(slug);

  return (
    <section className="pt-5 md:pt-10 text-[#1D1D1F] xl:pt-20 pb-10 max-w-7xl xl:max-w-[75%] mx-auto   ">
      <div>
        <div className="flex justify-between  mb-5 lg:mb-10">
          <div className="lg:w-[75%] ">
            <h1 className="text-3xl md:w-[90%] md:text-[40px] lg2:text-5xl xl:text-6xl font-bold leading-[1.2] text-[#1D1D1F]  ">Department of {departmentName}</h1>
          </div>
          <div className="hidden lg:block ">
            <Link href={`/department/${slug}/detailes`}>
              <button className="bg-[#007AFF26] rounded-4xl lg:px-4 lg:py-2.5">More About the Department</button>
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
    alt="empoweringFuture"
    className=" w-full h-[300px]  overflow-hidden sm:h-[400px] md:h-[590px] object-cover "
  />
</div>

   {aboutTheDepartment?.map((paragraph, index) => (
          <p key={index} className="text-textGray text-justify text-[20px] mt-10 mb-4">
            {paragraph}
          </p>
        ))}
      <div className="flex justify-center mt-10 lg:hidden">
       <Link href={`/department/${slug}/detailes`}>
              <button className="bg-[#007AFF26] rounded-4xl px-6 py-2.5">More About the Department</button>
            </Link>
            </div>

    </section>
  );
};

export default AboutTheDepartment;
