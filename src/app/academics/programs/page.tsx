import FunctionDepartment from "@/components/AboutPageComponents/StudentWelfarePage/FunctionDepartment/FunctionDepartment";
import AboutTheProgram from "@/components/AcademicsPageComponents/AcademicProgramsPage/AboutTheProgram/AboutTheProgram";
import EducationalObjectives from "@/components/AcademicsPageComponents/AcademicProgramsPage/EducationalObjectives/EducationalObjectives";
import HeroSection from "@/components/AcademicsPageComponents/AcademicProgramsPage/HeroSection/HeroSection";
import FooterCard from "@/components/Common/FooterCard/FooterCard";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";
import data from "../../../utils/functionDepartmentData/functionDepartmentData.json";
import React from "react";
import VideoPlayer from "@/components/Common/VideoPlayer/VideoPlayer";
import { Testimonials } from "@/components/Common/Testimonials/Testimonials";

export const metadata = {
  title: "Academic Programs | Canara College",
  description: "Explore the academic programs offered by Canara College, including educational objectives, program outcomes, and more.",
  openGraph: {
    title: "Academic Programs | Canara College",
    description: "Learn about the academic programs at Canara College, including objectives, outcomes, and insights into the learning experience.",
    url: "https://your-website-url.com/programs", // update this
    siteName: "Canara College",
    images: [
      {
        url: "https://your-website-url.com/og-academic-programs.jpg", // update this
        width: 1200,
        height: 630,
        alt: "Academic Programs at Canara College",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Programs | Canara College",
    description: "Explore various academic programs at Canara College, with insights into program objectives and outcomes.",
    images: ["https://your-website-url.com/og-academic-programs.jpg"], // update this
  },
};

const page = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <AboutTheProgram />
      </section>
      <section className="py-20">
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvandhsai/video/upload/v1745987839/hcemhmez5c9xxttp4e1v.mp4"
          youtubeUrl="https://youtu.be/rv0KerNW4QE?si=ObYcwEiaqF0UD90P"
          thumbnail="https://res.cloudinary.com/dvandhsai/image/upload/v1745994337/bzjmgq1zvi0ksxyptkz6.png"
        />
      </section>
      <section className="px-6 md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <EducationalObjectives />
      </section>
      <section className="px-6 md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <FunctionDepartment title="Program Outcomes" functionDeprtmentData={data} />
      </section>
      <section className="px-0 bg-white">
        <Testimonials />
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
