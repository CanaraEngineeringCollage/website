import AluminiHeroBanner from "@/components/AluminiComponents/AluminiHerobanner/AluminiHerobanner";
import EmpowerNextGeneration from "@/components/AluminiComponents/EmpowerNextGeneration/EmpowerNextGeneration";
import LegacyExcellance from "@/components/AluminiComponents/LegacyExcellence/LegacyExcellence";
import StudentLIfeInCanara from "@/components/AluminiComponents/StudentLIfeInCanara/StudentLIfeInCanara";
import FooterCard from "@/components/Common/FooterCard/FooterCard";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";
import React from "react";

const page = () => {
  return (
    <>
      <AluminiHeroBanner />
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <StudentLIfeInCanara />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <EmpowerNextGeneration />
      </section>
      <section>
        <LegacyExcellance />
      </section>
      <section className="px-6 bg-[#E5E5EA] md:px-12 mt-12 lg:pl-16 lg:px-0 xl:px-0">
        <HotOfThePress />
      </section>
      <section className="bg-[#E5E5EA]">
        <FooterCard />
      </section>
    </>
  );
};

export default page;
