import HeroSection from "@/components/AboutPageComponents/OurManagementPage/MangementSection/MangementSection";
import FooterCard from "@/components/Common/FooterCard/FooterCard";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <section className="bg-gray-100">
        <FooterCard />
      </section>
    </>
  );
};

export default page;
