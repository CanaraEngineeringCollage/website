import AboutTheDepartment from "@/components/AboutPageComponents/StudentWelfarePage/AboutTheDepartment/AboutTheDepartment";
import FunctionDepartment from "@/components/AboutPageComponents/StudentWelfarePage/FunctionDepartment/FunctionDepartment";
import HeroSection from "@/components/AboutPageComponents/StudentWelfarePage/HeroSection/HeroSection";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";
import MessageSection from "@/components/AboutPageComponents/StudentWelfarePage/MessageSection/MessageSection";
import React from "react";
import FooterCard from "@/components/Common/FooterCard/FooterCard";
import data from "../../../utils/functionDepartmentData/functionDepartmentData.json";
import VideoPlayer from "@/components/Common/VideoPlayer/VideoPlayer";
import MissionAndVision from "@/components/AboutPageComponents/StudentWelfarePage/MissionAndVision/MissionAndVision";
import Facilities from "@/components/AboutPageComponents/StudentWelfarePage/Facilities/Facilities";
import EventsSection from "@/components/AboutPageComponents/StudentWelfarePage/EventsSection/EventsSection";

export const metadata = {
  title: "Student Welfare Department | Canara College",
  description: "Explore the Student Welfare Department of Canara College, providing support, services, and a nurturing environment for students.",
  openGraph: {
    title: "Student Welfare Department | Canara College",
    description: "Learn about the student welfare services offered at Canara College, including departmental functions, messages, and resources.",
    url: "https://your-website-url.com/student-welfare-department", // update this
    siteName: "Canara College",
    images: [
      {
        url: "https://your-website-url.com/og-student-welfare.jpg", // update this
        width: 1200,
        height: 630,
        alt: "Student Welfare Department at Canara College",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Welfare Department | Canara College",
    description: "Discover the student welfare services and resources at Canara College.",
    images: ["https://your-website-url.com/og-student-welfare.jpg"], // update
  },
};

const page = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section className="px-4 md:px-0 xl:px-0">
        <AboutTheDepartment />
      </section>
      <section>
      <MissionAndVision/>
      </section>
      <section className="px-4">
        <Facilities/>
      </section>
      <section className=" lg:mt-0 md:px-6 lg:px-0 -mt-2">
        <VideoPlayer youtubeUrl="NhwFJ89AJ2k" thumbnail="/youtubeThumbnails/Akrathi Aftermovie-Thumbail copy 3@300x.webp" />
      </section>
      <section className="px-4 md:px-12 -mt-5 md:-mt-0 lg:pl-16 lg:px-0 xl:px-0">
        <FunctionDepartment title="Functions of the Department" functionDeprtmentData={data} />
      </section>
   <section className="bg-[#071D2C] px-6 md:px-0 lg:px-0 xl:px-0 md:mt-0 mt-8">
        <MessageSection
  officer={{
    name: "Dr. Priya V. Frank",
    position: "Dean - Student Welfare",
    imageUrl: "/Dr._Priya_Vineetha_Frank__Professor_&_Dean_(SWO).webp",
    message:
      "The Student Welfare Department (SWD) is dedicated to ensuring your well-being and fostering an environment that supports your academic and personal growth. We oversee various welfare activities on campus that play a significant role in shaping your future. More than just a support system, SWD serves as a platform for you to voice your opinions and contribute to the institution’s growth. As the Dean of Student Welfare, I consider it a privilege to support you during these crucial years of development. Our approach is entirely student-centric, focusing on your needs and providing opportunities for holistic growth. We aim to nurture leadership qualities, confidence, and a well-rounded personality through various initiatives.",
  }}
/>

      </section>
<section className="px-4 bg-[#E5E5EA] md:px-12 lg:pl-16 lg:px-0 xl:px-0">
      <EventsSection/>
      </section>
      {/* <section className="px-6 bg-[#E5E5EA] md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <HotOfThePress />
      </section> */}
      <section className="bg-[#e5e5ea]">
        <FooterCard />
      </section>
    </>
  );
};

export default page;
