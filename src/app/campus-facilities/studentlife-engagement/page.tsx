import ExploreCampusSection from "@/components/CampusFacilitiesPageComponents/StudentLifeEngagement/ExploreCampusSection/ExploreCampusSection";
import HeroSection from "@/components/CampusFacilitiesPageComponents/StudentLifeEngagement/HeroSection/HeroSection";
import HolisticStudent from "@/components/CampusFacilitiesPageComponents/StudentLifeEngagement/HolisticStudent/HolisticStudent";
import YourSkills from "@/components/CampusFacilitiesPageComponents/StudentLifeEngagement/YourSkills/YourSkills";
import YoutubeSection from "@/components/CampusFacilitiesPageComponents/StudentLifeEngagement/YoutubeSection/YoutubeSection";
import FooterCard from "@/components/Common/FooterCard/FooterCard";
import React from "react";

const page = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <HolisticStudent />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <YourSkills />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <YoutubeSection />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <ExploreCampusSection/>
      </section>
      <section className="bg-[#e5e5ea] ">
        <FooterCard/>
      </section>
    </>
  );
};

export default page;
