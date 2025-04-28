import AboutTheDepartment from "@/components/AboutPageComponents/StudentWelfarePage/AboutTheDepartment/AboutTheDepartment";
import FunctionDepartment from "@/components/AboutPageComponents/StudentWelfarePage/FunctionDepartment/FunctionDepartment";
import HeroSection from "@/components/AboutPageComponents/StudentWelfarePage/HeroSection/HeroSection";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";
import MessageSection from "@/components/AboutPageComponents/StudentWelfarePage/MessageSection/MessageSection";
import YoutubeSection from "@/components/AboutPageComponents/StudentWelfarePage/YoutubeSection/YoutubeSection";
import React from "react";
import FooterCard from "@/components/Common/FooterCard/FooterCard";
import data from "../../../utils/functionDepartmentData/functionDepartmentData.json"

export const metadata = {
  title: 'Student Welfare Department | Canara College',
  description: 'Explore the Student Welfare Department of Canara College, providing support, services, and a nurturing environment for students.',
  openGraph: {
    title: 'Student Welfare Department | Canara College',
    description: 'Learn about the student welfare services offered at Canara College, including departmental functions, messages, and resources.',
    url: 'https://your-website-url.com/student-welfare-department', // update this
    siteName: 'Canara College',
    images: [
      {
        url: 'https://your-website-url.com/og-student-welfare.jpg', // update this
        width: 1200,
        height: 630,
        alt: 'Student Welfare Department at Canara College',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Welfare Department | Canara College',
    description: 'Discover the student welfare services and resources at Canara College.',
    images: ['https://your-website-url.com/og-student-welfare.jpg'], // update
  },
};


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
