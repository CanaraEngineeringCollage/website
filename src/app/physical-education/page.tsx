import FunctionDepartment from "@/components/AboutPageComponents/StudentWelfarePage/FunctionDepartment/FunctionDepartment";
import BuildingStrength from "@/components/PhysicalEducationPageComponents/BuildingStrength/BuildingStrength";
import HeroSection from "@/components/PhysicalEducationPageComponents/HeroSection/HeroSection";
import data from "../../utils/functionDepartmentData/functionDepartmentData.json";
import React from "react";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";
import FooterCard from "@/components/Common/FooterCard/FooterCard";
import VideoPlayer from "@/components/Common/VideoPlayer/VideoPlayer";

export const metadata = {
  title: "Physical Education Department | Canara College",
  description: "Learn more about the Physical Education Department at Canara College, including its mission, facilities, and modern amenities.",
  openGraph: {
    title: "Physical Education Department | Canara College",
    description:
      "Explore the Physical Education Department at Canara College, featuring state-of-the-art facilities and a strong focus on building strength and health.",
    url: "https://your-website.com/physical-education",
    siteName: "Canara College",
  },
};

const page = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section className="px-6 md:px-12 lg:px-20 xl:px-0">
        <BuildingStrength />
      </section>
      <section>
        <VideoPlayer
          title="Modern Amenities for Everyday Comfort"
          titleClassname="text-black !max-w-full"
          videoUrl="https://res.cloudinary.com/dvandhsai/video/upload/v1745987839/hcemhmez5c9xxttp4e1v.mp4"
          youtubeUrl="https://youtu.be/rv0KerNW4QE?si=ObYcwEiaqF0UD90P"
          thumbnail="https://res.cloudinary.com/dvandhsai/image/upload/v1746006620/Container_3_vv5tog.png"
        />
      </section>
      <section className="px-6 md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <FunctionDepartment title="Department Duties" functionDeprtmentData={data} />
      </section>
      <section className="pb-20">
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvandhsai/video/upload/v1745987839/hcemhmez5c9xxttp4e1v.mp4"
          youtubeUrl="https://youtu.be/rv0KerNW4QE?si=ObYcwEiaqF0UD90P"
          thumbnail="https://res.cloudinary.com/dvandhsai/image/upload/v1746006786/Container_4_gjurzv.png"
        />
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
