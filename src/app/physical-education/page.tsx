import FunctionDepartment from "@/components/AboutPageComponents/StudentWelfarePage/FunctionDepartment/FunctionDepartment";
import BuildingStrength from "@/components/PhysicalEducationPageComponents/BuildingStrength/BuildingStrength";
import HeroSection from "@/components/PhysicalEducationPageComponents/HeroSection/HeroSection";
import data from "../../utils/functionDepartmentData/functionDepartmentData.json";
import YoutubeSection from "@/components/AcademicsPageComponents/AcademicProgramsPage/YoutubeSection/YoutubeSection";
import React from "react";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";
import FooterCard from "@/components/Common/FooterCard/FooterCard";

export const metadata = {
  title: "Physical Education Department | Canara College",
  description: "Learn more about the Physical Education Department at Canara College, including its mission, facilities, and modern amenities.",
  openGraph: {
    title: "Physical Education Department | Canara College",
    description: "Explore the Physical Education Department at Canara College, featuring state-of-the-art facilities and a strong focus on building strength and health.",
    url: "https://your-website.com/physical-education",
    siteName: "Canara College",
  },
};


const page = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section className="px-6 md:px-12 lg:px-20 xl:px-0">
        <BuildingStrength />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <YoutubeSection title="Modern Amenities for Everyday Comfort"/>
      </section>
      <section className="px-6 md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <FunctionDepartment title="Department Duties" functionDeprtmentData={data} />
      </section>
      <section className="px-6 md:px-12 mb-16 lg:px-16 xl:px-0">
        <YoutubeSection />
      </section>
      <section className="px-6 bg-[#E5E5EA] md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <HotOfThePress />
      </section>
      <section className="bg-[#e5e5ea]">
        <FooterCard />
      </section>
    </>
  );
};

export default page;
