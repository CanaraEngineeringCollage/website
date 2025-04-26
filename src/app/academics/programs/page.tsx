import FunctionDepartment from "@/components/AboutPageComponents/StudentWelfarePage/FunctionDepartment/FunctionDepartment";
import AboutTheProgram from "@/components/AcademicsPageComponents/AcademicProgramsPage/AboutTheProgram/AboutTheProgram";
import EducationalObjectives from "@/components/AcademicsPageComponents/AcademicProgramsPage/EducationalObjectives/EducationalObjectives";
import HeroSection from "@/components/AcademicsPageComponents/AcademicProgramsPage/HeroSection/HeroSection";
import YoutubeSection from "@/components/AcademicsPageComponents/AcademicProgramsPage/YoutubeSection/YoutubeSection";
import FooterCard from "@/components/Common/FooterCard/FooterCard";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";
import data from "../../../utils/functionDepartmentData/functionDepartmentData.json"
import React from "react";

const page = () => {
  return (
    <>
    <section>
      <HeroSection/>
    </section>
    <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <AboutTheProgram />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <YoutubeSection />
      </section>
      <section className="px-6 md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <EducationalObjectives/>
      </section>
      <section className="px-6 md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <FunctionDepartment title="Program Outcomes" functionDeprtmentData={data}/>
      </section>
      <section className="px-6 bg-[#E5E5EA] md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <HotOfThePress />
      </section>
      <section className="bg-[#e5e5ea]">
        <FooterCard />
      </section>
    </>
  )

};

export default page;
