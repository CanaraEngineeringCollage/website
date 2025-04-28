import FunctionDepartment from "@/components/AboutPageComponents/StudentWelfarePage/FunctionDepartment/FunctionDepartment";
import YoutubeSection from "@/components/AdmissionPageComponents/YoutubeSection/YoutubeSection";
import HeroSection from "@/components/EntrepreneurshipCellPageComponents/HeroSection/HeroSection";
import IdeasText from "@/components/EntrepreneurshipCellPageComponents/IdeasText/IdeasText";
import data from "../../utils/functionDepartmentData/functionDepartmentData.json";
import React from "react";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";
import FooterCard from "@/components/Common/FooterCard/FooterCard";

export const metadata = {
  title: "Entrepreneurship Cell | Canara College",
  description: "Learn more about the Entrepreneurship Cell, its objectives, and activities at Canara College.",
  openGraph: {
    title: "Entrepreneurship Cell | Canara College",
    description: "Learn more about the Entrepreneurship Cell, its objectives, and activities at Canara College.",
    url: "https://your-website.com/entrepreneurship-cell", // replace with actual URL
    siteName: "Canara College",
  },
};

const page = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <IdeasText />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <YoutubeSection />
      </section>
      <section className="px-6 md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <FunctionDepartment title="Cell Objectives" functionDeprtmentData={data} />
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
