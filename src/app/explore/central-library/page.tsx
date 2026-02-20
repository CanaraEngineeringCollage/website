import Link from "next/link";
import React from "react";
import Image from "next/image";

import LibraryFaculty from "@/components/CentralLibraryComponents/LibraryFaculty";

export const metadata = {
  title: "Central Library | Canara Engineering College",
  description:
    "Explore the state-of-the-art Central Library at Canara Engineering College, featuring digital resources, academic journals, research databases, and a student-friendly learning environment.",
  openGraph: {
    title: "Central Library | Canara Engineering College",
    description:
      "Discover the digital and physical learning resources available at the Central Library of Canara Engineering College, supporting research, academics, and innovation.",
    url: "https://apiserver.cec.edu.in/explore/central-library", // 🔗 update if final URL differs
    siteName: "Canara Engineering College",
    images: [
      {
        url: "https://apiserver.cec.edu.in/assets/images/og-central-library.jpg", // ⭐ Replace if you have actual OG image
        width: 1200,
        height: 630,
        alt: "Central Library - Canara Engineering College",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Central Library | Canara Engineering College",
    description: "Learn about the advanced academic resources and digital facilities at the Central Library of Canara Engineering College.",
    images: ["https://apiserver.cec.edu.in/assets/images/og-central-library.jpg"],
  },
};


const AboutTheDepartment = () => {
  // --- Static Dummy Data ---
  const departmentName = "Computer Science";
  const imageUrl = "/campusFacilitiesPageImages/4.webp";
  const aboutTheDepartment = [
    "Library is a store house of Knowledge.The central Library of CEC is located in the heart of the institution and it is easily accessible to its clientele. The library has got independent building with carpet area of 1305.68 spread in 2 Floors it can accommodated 300 users at a time. The collection of library is more than 47000 including general Book bank books and SC/ST Book Bank which includes Text and Reference books, Competitive Examination books and general knowledge books are available for all round development of personality. The Library subscribes 42 Indian Journals, and 16 magazines in print version for various departments of UG and PG students and Faculty and Staff. We have access more than 11000+online journals, 21000+ E books, Articles from various publishers like IEEE ASPP & POP ALL, EBSCO Engineering Suit, IEEE Blended e-Learning Platform, Eduport Global-CBS, BSP E-Book, Cengage Learning, Cambridge University Press, Mint Books, Quiklrn e-Books, Drillbit Plagiarism Originality online Check Tool, Quiklrn English Communication Language Lab etc. Subscribed packages under the VTU Consortium. Library has separate Reading Room and Reference section reading hall. Library has separate stack hall for books, Reference section and Book Bank. The in-house activities of the Library have been computerized and all books are bar coded.",
  ];

  return (
    <>
      <section className="pt-5 px-4 lg:px-0 xl:px-0 md:pt-10 text-[#1D1D1F] xl:pt-20 pb-10 lg:pb-16 max-w-7xl xl:max-w-[75%] mx-auto   ">
        <div>
          <div className="flex justify-between  mb-5 lg:mb-10">
            <div className="lg:w-[75%] ">
              <h1
                className={` md:w-[90%] 
  font-bold leading-[1.2] text-[#1D1D1F] 
  md:text-[40px] text-3xl lg2:text-5xl xl:text-6xl `}
              >
                Central Library
              </h1>
            </div>
            <div className="hidden lg:block ">
              <Link href="/explore/central-library/about-library">
                <button className="bg-[#007AFF26] hover:bg-blue-200 rounded-4xl lg:px-4 mt-3.5 lg:py-2.5">More About the Library</button>
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
            className=" w-full h-[300px]  overflow-hidden sm:h-[400px] md:h-[590px] xl:object-[center_30%] object-cover "
          />
        </div>

        {aboutTheDepartment?.map((paragraph, index) => (
          <p key={index} className="text-textGray text-justify text-[20px] mt-10 mb-4">
            {paragraph}
          </p>
        ))}
        <div className="flex justify-center mt-10 lg:hidden">
          <Link href="/explore/central-library/about-library">
            <button className="bg-[#007AFF26] hover:bg-blue-200 rounded-4xl px-6 py-2.5">More About the Library</button>
          </Link>
        </div>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full mx-auto px-4 lg:px-0 max-w-7xl  xl:max-w-[75%] ">
        {/* Left Column */}
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center">
          <img src="/aboutPageImages/MissionVision/visionImage4.webp" alt="vision" className="w-40 sm:w-60 md:w-72 lg:w-[344px] h-auto mb-6" />
          <h2 className="text-3xl lg2:text-5xl lg:text-4xl text-center lg:text-start font-bold text-[#1D1D1F] mb-4">Our Vision</h2>
          <p className="text-textGray text-[20px] leading-relaxed">
            To make world class centre for quality resources in print and digital form to facilitate learning and research.
          </p>
        </div>
        <div className="flex flex-col gap-8 lg:gap-12">
          {/* Objectives */}
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 md:p-10 lg:px-12">
            <h2 className="text-3xl lg2:text-5xl lg:text-4xl  text-center lg:text-start font-bold text-[#1D1D1F] mb-10">Our Objectives</h2>
            <ul className="space-y-6 px-2 md:px-0 text-textGray text-[20px] list-disc sm:space-y-2">
              <li className=" items-center sm:items-start  sm:text-left gap-4 sm:gap-10 lg:gap-12">To be user friendly.</li>

              <li className=" items-center sm:items-start  sm:text-left gap-4 sm:gap-10 lg:gap-12">
                Build collections and create tools to support teaching, learning and research.
              </li>

              <li className=" items-center sm:items-start  sm:text-left gap-4 sm:gap-10 lg:gap-12">
                Provide access to current and updated information resources.
              </li>
              <li className=" items-center sm:items-start  sm:text-left gap-4 sm:gap-10 lg:gap-12">
                To help users to find right information at the right time.
              </li>

              <li className=" items-center sm:items-start  sm:text-left gap-4 sm:gap-10 lg:gap-12">
                To help users in their curriculum activities with knowledge support.
              </li>

              <li className=" items-center sm:items-start  sm:text-left gap-4 sm:gap-10 lg:gap-12">
                Providing comfortable and learning environment to users.
              </li>
            </ul>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 md:p-10">
            <h2 className="text-3xl lg2:text-5xl lg:text-4xl text-center lg:text-start font-bold text-[#1D1D1F] mb-8">Our Mission</h2>
            <p className="text-textGray text-[20px] leading-relaxed">
              To enable our readers to make use of Library resource and services most effectively with help from modern technological tools and
              applications.
            </p>
          </div>
        </div>

        {/* Right Column */}
      </div>

      <LibraryFaculty />
    </>
  );
};

export default AboutTheDepartment;
