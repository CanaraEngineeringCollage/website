import { notFound } from "next/navigation";
import { allDepartmentsData } from "@/lib/allDepartments";
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

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const department = allDepartmentsData.find((dept) => dept.slug === params.slug);

  if (!department) return notFound();

  const title = `${department.name} Department | Canara Engineering College`;

  // Use department description if available, otherwise a default
  const description = department.departmentAboutDescription?.trim()
    ? department.departmentAboutDescription
    : `Explore the ${department.name} Department at Canara Engineering College, offering quality education, experienced faculty, and a commitment to excellence.`;

  const imageUrl = department.bannerUrl || "https://cec.edu.in/default-og-image.jpg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://cec.edu.in/department/${params.slug}`,
      siteName: "Canara College",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${department.name} Department Banner`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams() {
  return allDepartmentsData.map((dept) => ({ slug: dept.slug }));
}

export default function DepartmentPage({ params }: { params: { slug: string } }) {
  const department = allDepartmentsData.find((dept) => dept.slug === params.slug);

  if (!department) return notFound();

  // Filter council data as needed
  // const facultyData = councilData.faculty.filter((faculty) => faculty.department === department.name) as CouncilMember[];

  return (
    <>
      <section className="px-6 mt-5 md:mt-0 lg:px-0 xl:px-0">
        <AboutTheDepartment
          departmentName={department.name}
          aboutTheDepartment={department.departmentAboutDescriptionArray}
          wdith={department.width}
          css={department.css}
          imageUrl={department.bannerUrl}
        />
      </section>
      {/* <HeroSection departmentName={department.name} /> */}

      {department?.ytUrl && (
        <section className="pb-10 md:px-6 lg:px-0 md:pb-10   lg:pb-14">
          <VideoPlayer
            videoUrl="https://res.cloudinary.com/dvandhsai/video/upload/v1745987839/hcemhmez5c9xxttp4e1v.mp4"
            youtubeUrl={department?.ytUrl}
            thumbnail={department?.thumbnail}
          />
        </section>
      )}
      {department.ethicalLearning && (
        <section className=" lg:mb-14 ">
          <DepartmentMissionVision ethicalLearning={department.ethicalLearning} ourVision={department.ourVision} />
        </section>
      )}
      <section className="bg-[#071D2C] px-6 lg:px-0 lg:px-0 xl:px-0 md:mt-0 mt-8">
        <DepartmentHeadMessage departmentName={department.name} depatmentHead={department.depatmentHead} />
      </section>
      <section className="px-6 md:px-12 pb-10 lg:pb-0 lg:px-16 xl:px-0 lg:mt-0 ">
        <DepartmentFacultySection departmentName={department.name} />
      </section>
      {department.ideas && (
        <section className=" mb-20 xl:mb-40  px-6 md:px-12 lg:px-16 xl:px-0 lg:mt-0 -mt-12">
          <IdeasToImpact
            ideasData={department.ideas}
            tableHeaders={department.awardsTable?.headers}
            tableRows={department.awardsTable?.rows}
            allAwards={department.allAwards}
          />
        </section>
      )}
      {department.toppers && (
        <section>
          <SpotlightSection toppers={department.toppers} />
        </section>
      )}
      {/* <section className="px-6 bg-[#E5E5EA] md:px-12 lg:pl-16 lg:px-0 xl:px-0 pb-8">
        <HotOfThePress />
      </section> */}
    </>
  );
}
