import { notFound } from "next/navigation";
import departments from "@/lib/departments.json";
import councilData from "../../../utils/councilMembers/councilMembers.json"; // Import the council data
import HeroSection from "@/components/DepartmentComponents/HeroBanner/HeroBanner";
import AboutTheDepartment from "@/components/DepartmentComponents/AboutTheDepartment/AboutTheDepartment";
import DepartmentMissionVision from "@/components/DepartmentComponents/DepartmentMissionVision/page";
import DepartmentHeadMessage from "@/components/DepartmentComponents/DepartmentHeadMessage/DepartmentHeadMessage";
import DepartmentFacultySection from "@/components/DepartmentComponents/DepartmentFaculty/DepartmentFaculty";
import IdeasToImpact from "@/components/DepartmentComponents/IdeasToImpact/IdeasToImpact";
import SpotlightSection from "@/components/DepartmentComponents/SpotlightSection/SpotlightSection";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";
import VideoPlayer from "@/components/Common/VideoPlayer/VideoPlayer";


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

export async function generateStaticParams() {
  return departments.map((dept) => ({ slug: dept.slug }));
}

export default async function DepartmentPage({ params }: { params: { slug: string } }) {
  const department = departments?.find((dept) => dept?.slug === params?.slug);


  if (!department) return notFound();
  console.log(department.faculties);

  // Filter council data as needed
  const facultyData = councilData.faculty.filter((faculty) => faculty.department === department.name) as CouncilMember[];
  

  return (
    <>
      <HeroSection departmentName={department.name} imageUrl={department.bannerUrl} />
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <AboutTheDepartment aboutTheDepartment={department.departmentAboutDescription} />
      </section>
      <section className="">
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvandhsai/video/upload/v1745987839/hcemhmez5c9xxttp4e1v.mp4"
          youtubeUrl="https://youtu.be/rv0KerNW4QE?si=ObYcwEiaqF0UD90P"
          thumbnail="https://res.cloudinary.com/dvandhsai/image/upload/v1745994337/bzjmgq1zvi0ksxyptkz6.png"
        />
      </section>
      <section className="pt-26">
        <DepartmentMissionVision
          ethicalLearning={department.ethicalLearning}
          holisticGrowthResearch={department.holisticGrowthResearch}
          innovationExcellence={department.innovationExcellence}
          ourVision={department.ourVision}
        />
      </section>
      <section className="bg-[#071D2C] px-6 md:px-12 lg:px-16 xl:px-0">
        <DepartmentHeadMessage depatmentHead={department.depatmentHead} />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <DepartmentFacultySection faculties={department.faculties} />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <IdeasToImpact />
      </section>
      <section>
        <SpotlightSection />
      </section>
      <section className="px-6 bg-[#E5E5EA] md:px-12 lg:pl-16 lg:px-0 xl:px-0 pb-8">
        <HotOfThePress />
      </section>
    </>
  );
}
