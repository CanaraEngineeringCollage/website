import ExploreFacilities from "@/components/CampusFacilitiesPageComponents/Infrastructure/ExploreFacilities/ExploreFacilities";
import TopRecruiters from "@/components/Common/TopRecruiters/TopRecruiters";
import VideoPlayer from "@/components/Common/VideoPlayer/VideoPlayer";
import AboutDepartment from "@/components/TrainingPlacementPageComponents/AboutDepartment/AboutDepartment";
import DepartmentFaculty from "@/components/TrainingPlacementPageComponents/DepartmentFaculty/DepartmentFaculty";
import HeroSection from "@/components/TrainingPlacementPageComponents/HeroSection/HeroSection";
import HighlightsSection from "@/components/TrainingPlacementPageComponents/HighlightsSection/HighlightsSection";
import RecruitersSection from "@/components/TrainingPlacementPageComponents/RecruitersSection/RecruitersSection";
import React from "react";

export const metadata = {
  title: "Training and Placement | Your College Name",
  description:
    "Explore the training and placement opportunities available at our institute. Learn about top recruiters, faculty, and facilities.",
  openGraph: {
    title: "Training and Placement | Your College Name",
    description:
      "Explore the training and placement opportunities, department highlights, and the companies that recruit from our college.",
    url: "https://your-website.com/training-placements",
    siteName: "Your College Name",
  },
};

const page = () => {
  return (
    <>
      {/* 🏫 Hero Section */}
      <HeroSection />

      {/* 📘 About the Department */}
      <section className="px-6 md:px-12 lg:px-16 xl:px-0 mt-10 mb-16">
        <AboutDepartment />
      </section>

      {/* 🎥 Placement Video */}
      <section className="px-6 md:px-12 lg:px-16 xl:px-0 mb-16">
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvandhsai/video/upload/v1745987839/hcemhmez5c9xxttp4e1v.mp4"
          youtubeUrl="r6MXt_aTeS0"
          thumbnail="/youtubeThumbnails/placementsThumb.webp"
        />
      </section>

      {/* 👨‍🏫 Placement Faculty */}
      <section className="px-6 md:px-12 lg:px-16 xl:px-0 mb-16">
        <DepartmentFaculty
          heading="Meet Our Placement Team"
          description="Our dedicated placement team works tirelessly to connect students with top companies, guiding them towards successful careers and brighter futures."
        />
      </section>

      {/* 🏢 Top Recruiters */}
      <section className="px-6 md:px-12 lg:px-16 xl:px-0 mb-16">
        <TopRecruiters />
      </section>

      {/* 🌟 Key Highlights */}
      <section className="px-6 md:px-12 lg:px-16 xl:px-0 mb-16">
        <HighlightsSection />
      </section>

      {/* 📊 Batch Recruiters List */}
      <section className="px-6 md:px-12 lg:px-16 xl:px-0 mb-20">
        <RecruitersSection />
      </section>

      {/* 🏫 Explore Facilities */}
      <section className="px-6 md:px-12 lg:px-16 xl:px-0 py-20 bg-[#e5e5ea]">
        <ExploreFacilities />
      </section>
    </>
  );
};

export default page;
