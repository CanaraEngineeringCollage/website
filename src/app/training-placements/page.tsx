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


interface Qualification {
  degree: string;
  passingYear: number;
  collegeOrUniversity: string; // This property
  areaOfSpecialization: string; // This property
}
interface Faculty {
  name: string;
  image: string;
  category: string;
  desiganation: string;
  department: string;
  joiningDate: string;
  experience: string;
  employmentType: string;
  qualifications: Qualification[];
}

// Interface for council member
interface CouncilMember {
  id: number;
  name: string;
  image: string;
  designation: string;
  category: string;
  department: string;
  joiningDate?: string; // Make this optional
  experience?: string; // Make this optional
  employmentType?: string; // Make this optional
  qualifications: Qualification[]; // Ensure qualifications include the right data
  faculties?: Faculty[]; // Optional property for faculties

}

const page =async () => {

  let facultyDataFetched: Faculty[] = [];
  try {
    const res = await fetch("https://canaraapi.megamind.studio/faculty");
    if (!res.ok) throw new Error("Failed to fetch faculty data");
    const data: Faculty[] = await res.json();
console.log(data,"dd");

    // Filter faculty for the current department
    facultyDataFetched = data?.filter((faculty) => faculty.department === "Placement Team").slice(0,10);
  } catch (error) {
    console.error("Error fetching faculty data:", error);
  }



console.log(facultyDataFetched,"fff");
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
  facultyData={facultyDataFetched.map(faculty => ({
    ...faculty,
    roles: [{ title: faculty.desiganation, organization: "" }] // map designation to roles
  }))}
  heading="Meet Our Placement Team"
  description="Our dedicated placement team works tirelessly..."
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
