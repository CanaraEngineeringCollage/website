import AmenitiesSection from "@/components/CampusFacilitiesPageComponents/HostelLife/AmenitiesSection/AmenitiesSection";
import HeroSection from "@/components/CampusFacilitiesPageComponents/HostelLife/HeroSection/HeroSection";
import LifeAtHostels from "@/components/CampusFacilitiesPageComponents/HostelLife/LifeAtHostels/LifeAtHostels";
import YoutubeSection from "@/components/CampusFacilitiesPageComponents/HostelLife/YoutubeSection/YoutubeSection";
import ExploreFacilities from "@/components/CampusFacilitiesPageComponents/Infrastructure/ExploreFacilities/ExploreFacilities";
import FooterCard from "@/components/Common/FooterCard/FooterCard";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";
import React from "react";

const page = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <LifeAtHostels />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <AmenitiesSection />
      </section>
      <section className="px-6    md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <ExploreFacilities />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
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
