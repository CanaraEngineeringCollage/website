import HeroSection from "@/components/AcademicsPageComponents/AcacemicOverviewPage/HeroSection";
import FooterCard from "@/components/Common/FooterCard/FooterCard";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";
import EmpoweringFutures from "@/components/HomePageComponents/EmpoweringFutures/EmpoweringFutures";
import ExplorePrograms from "@/components/HomePageComponents/ExplorePrograms/ExplorePrograms";
import StudentTour from "@/components/HomePageComponents/StudentTour/StudentTour";
import { Testimonials } from "@/components/HomePageComponents/Testimonials/Testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section className="pl-6 md:pl-12 lg:pl-16 xl:px-0">
        <ExplorePrograms />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <EmpoweringFutures />
      </section>
      <section>
        <StudentTour />
      </section>
      <section className="px-0 bg-white">
        <Testimonials />
      </section>
      <section className="px-6 bg-[#E5E5EA] md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <HotOfThePress />
      </section>
      <section className="bg-[#E5E5EA]">
        <FooterCard />
      </section>
    </>
  );
};

export default page;
