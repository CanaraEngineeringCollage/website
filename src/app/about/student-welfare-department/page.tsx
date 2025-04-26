import AboutTheDepartment from "@/components/AboutPageComponents/StudentWelfarePage/AboutTheDepartment/AboutTheDepartment";
import FunctionDepartment from "@/components/AboutPageComponents/StudentWelfarePage/FunctionDepartment/FunctionDepartment";
import HeroSection from "@/components/AboutPageComponents/StudentWelfarePage/HeroSection/HeroSection";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";
import MessageSection from "@/components/AboutPageComponents/StudentWelfarePage/MessageSection/MessageSection";
import YoutubeSection from "@/components/AboutPageComponents/StudentWelfarePage/YoutubeSection/YoutubeSection";
import React from "react";
import FooterCard from "@/components/Common/FooterCard/FooterCard";
import data from "../../../utils/functionDepartmentData/functionDepartmentData.json"

const page = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <AboutTheDepartment />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <YoutubeSection />
      </section>
      <section className="px-6 md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <FunctionDepartment title="Functions of the Department" functionDeprtmentData={data}/>
      </section>
      <section className="bg-[#071D2C] px-6 md:px-12 lg:px-16 xl:px-0">
        <MessageSection />
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
