import FacultyMembersSection from "@/components/AboutPageComponents/EducatorsAdminisratorsPage/FacultyMembersSection/FacultyMembersSection";
import FooterCard from "@/components/Common/FooterCard/FooterCard";
import UserPersons from "@/components/Common/UserPersons/UserPersons";
import React from "react";

const page = () => {
  return (
    <>
    <FacultyMembersSection/>
    <UserPersons/>
    <section className='bg-gray-100'>
   <FooterCard/>
   </section>
    </>
  )
};

export default page;
