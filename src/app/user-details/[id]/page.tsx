"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { BiSolidRightArrow } from "react-icons/bi";
import governingCounsilData from "../../../utils/governingCounsilData/governingCounsilData.json";
import { useEffect, useState } from "react";

interface CouncilMember {
  id: number;
  name: string;
  image: string;
  roles: { title: string; organization: string }[];
  profileType: string;
  bio: {
    age: string;
    location: string;
    educationalLevel: string;
    description: string;
  };
  tags: string[];
  motivations: { icon: string; description: string }[];
  problemAreas: { icon: string; description: string }[];
  coreNeeds: string[];
  frustrationsAndFears: string[];
  addressal: string[];
}
const page = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id, "id");

  const [data, setData] = useState<CouncilMember | undefined>(undefined);
  console.log(data);

  const fetchUserData = () => {
    const data = governingCounsilData.find((item) => item.id === parseInt(id));
    setData(data);
  };

  console.log(governingCounsilData);

  useEffect(() => {
    fetchUserData();
  }, [id]);

  return (
    <section className="py-10 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-16">
        <div className="md:col-span-3 shadow-xl">
          {data?.image && (
            <Image
              src={data.image}
              width={100}
              height={100}
              alt="userperson"
              className="w-full h-full object-cover rounded-lg"
            />
          )}
        </div>
        <div className="md:col-span-9">
          <div className="bg-white h-[100%] p-4 sm:p-6 rounded-lg shadow-sm w-full">
            <p className="text-sm text-gray-500">PROFILE TYPE</p>
            <h1 className="text-[47px] leading-[1] py-3 text-black  font-bold">{data?.profileType || "Prospective Student"}</h1>
            <p className="text-gray-600  text-base md:text-xl">
              Age: {data?.bio.age || "17-23"} | Location: {data?.bio.location || "India, along the Southern Kanara Belt"} | Educational Level: {data?.bio.educationalLevel || "Completed PU"}
            </p>
            <div className="flex flex-wrap gap-2 py-4">
              {data?.tags.map((tag, index) => (
                <button key={index} className="px-3 py-1 bg-gray-200 text-gray-700 text-sm">
                  {tag}
                </button>
              ))}
            </div>
            <h2 className="text-lg sm:text-xl text-black font-semibold mt-5">Profile Bio</h2>
            <p className="text-gray-700 mt-2 text-base md:text-xl">{data?.bio.description}</p>
          </div>
          </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-10 pt-10">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-xl sm:text-2xl text-black font-bold text-center mb-6">Motivations</h2>
          <div className="grid grid-cols-1 py-3 sm:grid-cols-3 gap-10 sm:gap-6">
            {data?.motivations.map((motivation, index) => (
              <div key={index} className="text-center py-10 p-4 bg-white shadow rounded-lg">
                <Image
                  src={motivation.icon}
                  alt="Motivation Icon"
                  width={50}
                  height={50}
                  className="mx-auto mb-2"
                />
                <p className="text-black text-base ">{motivation.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 mt-10 lg:mt-0 sm:p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-xl sm:text-2xl text-black font-bold text-center mb-6">Problem Areas</h2>
          <div className="grid grid-cols-1 py-3 sm:grid-cols-3 gap-10 sm:gap-6">
            {data?.problemAreas.map((problem, index) => (
              <div key={index} className="text-center py-10 p-4 bg-white shadow rounded-lg">
                <Image
                  src={problem.icon}
                  alt="Problem Icon"
                  width={50}
                  height={50}
                  className="mx-auto mb-2"
                />
                <p className="text-black text-base ">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-10 mt-10 lg:pt-10">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-xl sm:text-2xl text-black font-bold mb-6">Core Needs</h2>
          <ul className="list-disc pl-6 sm:pl-10 text-gray-700 space-y-2  text-base md:text-xl">
            {data?.coreNeeds.map((need, index) => (
              <li key={index}>{need}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-4 my-10 lg:my-0 sm:p-6 rounded-lg shadow-lg w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2">
              <h2 className="text-xl sm:text-2xl text-black font-bold text-center md:text-left mb-4">Frustrations & Fears</h2>
              <ul className="list-none pl-0 text-gray-700 space-y-2 text-base md:text-xl">
                {data?.frustrationsAndFears.map((fear, index) => (
                  <li key={index}>{fear}</li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 md:ml-6 mt-6 md:mt-0">
              <h2 className="text-xl sm:text-2xl text-black font-bold flex items-center justify-start mb-4">
                <BiSolidRightArrow className="text-[#2884CA] mr-2 text-xl" />
                Addressal
              </h2>
              <ul className="space-y-3 text-black text-base md:text-xl">
                {data?.addressal.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <BiSolidRightArrow className="text-[#2884CA] text-lg mt-1 mr-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
