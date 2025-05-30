"use client";

import Image from "next/image";
import { BiSolidRightArrow } from "react-icons/bi";

const UserPersons = () => {
  return (
    <section className="py-10 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 lg:gap-16">
        <div className="md:col-span-3">
          <Image
            src="/userPersonsImage/1.jpg"
            width={100}
            height={100}
            alt="userperson"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="md:col-span-9">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm w-full">
            <p className="text-sm text-gray-500">PROFILE TYPE</p>
            <h1 className="text-xl sm:text-2xl font-bold">Prospective Student</h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Age: 17-23 | Location: India, along the Southern Kanara Belt | Educational Level: Completed PU
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <button 
                aria-label="Pressure-Driven"
              className="px-3 py-1 bg-gray-200 text-gray-700 text-sm">Pressure-Driven</button>
              <button 
              aria-label="Pressure-Driven"
              className="px-3 py-1 bg-gray-200 text-gray-700 text-sm">Competitive</button>
              <button 
              aria-label="Curious"
              className="px-3 py-1 bg-gray-200 text-gray-700 text-sm">Curious</button>
              <button 
              aria-label="Tech-Savvy"
              className="px-3 py-1 bg-gray-200 text-gray-700 text-sm">Tech-Savvy</button>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold mt-6">Profile Bio</h2>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">
              Prospective engineering students in India are often driven by a combination of factors including the technology-oriented culture and the
              associated prestige. These individuals possess strong analytical and logical skills honed through rigorous academic preparation. The
              competitive nature of entrance exams fosters a drive to succeed, though this may also experience pressure from family or societal
              expectations to pursue this path.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-10 pt-10">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">Motivations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center p-4 bg-white shadow rounded-lg">
              <Image src="/svgs/common/3.svg" alt="Briefcase" width={50} height={50} className="mx-auto mb-2" />
              <p className="text-black text-sm sm:text-base font-medium">Pursue a field with strong career prospects</p>
            </div>
            <div className="text-center p-4 bg-white shadow rounded-lg">
              <Image src="/svgs/common/2.svg" alt="Cogwheel" width={50} height={50} className="mx-auto mb-2" />
              <p className="text-black text-sm sm:text-base font-medium">Achieve success in technology & innovation</p>
            </div>
            <div className="text-center p-4 bg-white shadow rounded-lg">
              <Image src="/svgs/common/1.svg" alt="Money Bag" width={50} height={50} className="mx-auto mb-2" />
              <p className="text-black text-sm sm:text-base font-medium">Secure a high-paying & stable profession</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">Problem Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center p-4 bg-white shadow rounded-lg">
              <Image src="/svgs/common/3.svg" alt="Briefcase" width={50} height={50} className="mx-auto mb-2" />
              <p className="text-black text-sm sm:text-base font-medium">Pursue a field with strong career prospects</p>
            </div>
            <div className="text-center p-4 bg-white shadow rounded-lg">
              <Image src="/svgs/common/1.svg" alt="Cogwheel" width={50} height={50} className="mx-auto mb-2" />
              <p className="text-black text-sm sm:text-base font-medium">Achieve success in technology & innovation</p>
            </div>
            <div className="text-center p-4 bg-white shadow rounded-lg">
              <Image src="/svgs/common/2.svg" alt="Money Bag" width={50} height={50} className="mx-auto mb-2" />
              <p className="text-black text-sm sm:text-base font-medium">Secure a high-paying & stable profession</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-10 pt-10">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Core Needs</h2>
          <ul className="list-disc pl-6 sm:pl-10 text-gray-700 space-y-2 text-sm sm:text-base">
            <li>Understand the admission process step by step.</li>
            <li>Get clear eligibility criteria without confusion.</li>
            <li>Explore available courses & specializations.</li>
            <li>Learn about campus life, facilities & culture.</li>
            <li>Discover placement records & career opportunities.</li>
            <li>Find information on scholarships & financial aid.</li>
            <li>Read alumni success stories & career paths.</li>
            <li>Access application support & deadline reminders.</li>
          </ul>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2">
              <h2 className="text-xl sm:text-2xl font-bold text-center md:text-left mb-4">Frustrations & Fears</h2>
              <ul className="list-none pl-0 text-gray-700 space-y-2 text-sm sm:text-base">
                <li>Unclear admission process & eligibility criteria.</li>
                <li>Fear of not securing admission due to competition.</li>
                <li>Misinformation about job placements & campus facilities.</li>
                <li>Pressure from family expectations.</li>
              </ul>
            </div>
            <div className="md:w-1/2 md:ml-6 mt-6 md:mt-0">
              <h2 className="text-xl sm:text-2xl font-bold flex items-center justify-start  mb-4">
                <BiSolidRightArrow className="text-[#2884CA] mr-2 text-xl" />
                Addressal
              </h2>
              <ul className="space-y-3 text-black text-sm sm:text-base">
                {[
                  "Display the admission process in a simple, step-by-step format.",
                  "Clearly outline eligibility criteria for easy understanding.",
                  "Present key statistics with an option to download detailed reports.",
                  "Highlight future career prospects.",
                ].map((item, index) => (
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

export default UserPersons;