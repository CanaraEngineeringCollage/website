import ExploreFacilities from "@/components/CampusFacilitiesPageComponents/Infrastructure/ExploreFacilities/ExploreFacilities";
import TopRecruiters from "@/components/Common/TopRecruiters/TopRecruiters";
import VideoPlayer from "@/components/Common/VideoPlayer/VideoPlayer";
import AboutDepartment from "@/components/TrainingPlacementPageComponents/AboutDepartment/AboutDepartment";
import DepartmentFaculty from "@/components/TrainingPlacementPageComponents/DepartmentFaculty/DepartmentFaculty";
import HeroSection from "@/components/TrainingPlacementPageComponents/HeroSection/HeroSection";
import HighlightsSection from "@/components/TrainingPlacementPageComponents/HighlightsSection/HighlightsSection";
import React from "react";

export const metadata = {
  title: "Training and Placement | Your College Name",
  description: "Explore the training and placement opportunities available at our institute. Learn about top recruiters, faculty, and facilities.",
  openGraph: {
    title: "Training and Placement | Your College Name",
    description: "Explore the training and placement opportunities, department highlights, and the companies that recruit from our college.",
    url: "https://your-website.com/training-placements",
    siteName: "Your College Name",
  },
};

const page = () => {
  return (
    <>
      <HeroSection />
      <section className="px-6 md:px-12 lg:px-16 xl:px-0 |">
        <AboutDepartment />
      </section>
      <section className="pb-10 lg:mt-0 -mt-12">
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvandhsai/video/upload/v1745987839/hcemhmez5c9xxttp4e1v.mp4"
          youtubeUrl="r6MXt_aTeS0"
          thumbnail="/youtubeThumbnails/placementsThumb.webp"
        />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0 lg:mt-0 -mt-12">
       <DepartmentFaculty
  heading="Meet Our Placement Team"
  description="Our dedicated placement team works tirelessly to connect students with top companies, guiding them towards successful careers and brighter futures."
/>
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <TopRecruiters />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0  lg:mt-0 -mt-12 ">
        <HighlightsSection />
      </section>
      <section className="px-6  pt-20  md:px-12 lg:pl-16 lg:px-0 bg-[#e5e5ea]  xl:px-0">
        <ExploreFacilities />
      </section>
    </>
  );
};

export default page;
