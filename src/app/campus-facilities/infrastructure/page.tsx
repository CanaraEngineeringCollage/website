import CardSection from "@/components/CampusFacilitiesPageComponents/Infrastructure/CardSection/CardSection";
import ExploreFacilities from "@/components/CampusFacilitiesPageComponents/Infrastructure/ExploreFacilities/ExploreFacilities";
import HeroSection from "@/components/CampusFacilitiesPageComponents/Infrastructure/HeroSection.tsx/HeroSection";
import React from "react";

const page = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section>
        <CardSection />
      </section>
      <section className="px-6  lg:pt-0  md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <ExploreFacilities />
      </section>
    </>
  );
};

export default page;
