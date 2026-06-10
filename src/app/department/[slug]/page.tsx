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
import ProgrammeHighlights from "@/components/DepartmentComponents/DetailesPageComponents/ProgrammeHighlights/ProgrammeHighlights";
import WhyChooseProgramme from "@/components/DepartmentComponents/DetailesPageComponents/WhyChooseProgramme/WhyChooseProgramme";
import KeyLearningAreas from "@/components/DepartmentComponents/DetailesPageComponents/KeyLearningAreas/KeyLearningAreas";

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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const department = allDepartmentsData.find((dept) => dept.slug === slug);

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
    alternates: {
      canonical: `/department/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://cec.edu.in/department/${slug}`,
      siteName: "Canara College",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${department.name} Department Banner`,
        },
      ],
      locale: "en_IN",
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

export default async function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const department = allDepartmentsData.find((dept) => dept.slug === slug);

  if (!department) return notFound();

  // Filter council data as needed
  // const facultyData = councilData.faculty.filter((faculty) => faculty.department === department.name) as CouncilMember[];

  return (
    <>
      <section className="px-6 mt-5 md:mt-0 ">
        <AboutTheDepartment
          departmentName={department.name}
          aboutTheDepartment={department.departmentAboutDescriptionArray}
          wdith={department.width}
          css={department.css}
          imageUrl={department.bannerUrl}
        />
      </section>

      {slug === "mca" && (
        <>
        <section className="lg:mb-14  md:mt-10">
          <ProgrammeHighlights
            title="Programme Highlights"
            description="The programme integrates academic learning with industry-oriented technical training to strengthen employability and professional competence across technology domains."
            highlights={[
                { title: "Industry-Integrated Curriculum", icon: "/departmentImages/mcaMbaSvgs/industry.svg" },
                       { title: "Hands-On Project Learning", icon: "/departmentImages/mcaMbaSvgs/hands.svg" },
              { title: "Expert Mentorship & Guidance", icon: "/departmentImages/mcaMbaSvgs/expert.svg" },
       
                { title: "Communication Skills", icon: "/departmentImages/mcaMbaSvgs/communication.svg" },
              { title: "Customer Orientation Skills", icon: "/departmentImages/mcaMbaSvgs/customer.svg" },
              { title: "Grooming & Presentation Skills", icon: "/departmentImages/mcaMbaSvgs/grooming.svg" },
          
            ]}
          />
        </section>
        
        <WhyChooseProgramme
          title={
            <>
              Why Choose MCA in <br className="hidden lg:block" /> Full Stack Development <br className="hidden lg:block" /> with AI and ML?
            </>
          }
          points={[
            "Industry-Aligned Curriculum Across All Semesters",
            "Full Stack Development Specialisation",
            "Artificial Intelligence and Machine Learning Integration",
            "Hands-On Project Development",
            "Live Industry Case Studies",
            "Expert Technical Mentorship from Senior Architects",
            "Paid Internship in Final Year"
          ]}
          image="/departmentImages/mbaMca/highlight.jpg"
        />

        <section className="lg:mb-14  md:mt-14">
          <KeyLearningAreas
            title="Key Learning Areas"
            description="The curriculum covers essential computing disciplines while introducing students to emerging technology applications and professional competencies. Learning activities are designed to strengthen analytical thinking, technical execution, and workplace readiness."
            areas={[
              { title: <>Full Stack Web <br className="hidden md:block" /> Development</>,icon:"/departmentImages/mcaMbaSvgs/fullstack.svg" },
              { title: <>Artificial Intelligence & <br className="hidden md:block" /> Machine Learning</>,icon:"/departmentImages/mcaMbaSvgs/ai.svg", },
              { title: <>Frontend & Backend <br className="hidden md:block" /> Technologies</>,icon:"/departmentImages/mcaMbaSvgs/frontendBackend.svg", },
              { title: <>Cloud & Database <br className="hidden md:block" /> Technologies</>,icon:"/departmentImages/mcaMbaSvgs/cloud.svg", },
              { title: <>Java <br className="hidden md:block" /> Programming</>,icon:"/departmentImages/mcaMbaSvgs/java.svg", },
              { title: <>Real-Time Application <br className="hidden md:block" /> Development</>,icon:"/departmentImages/mcaMbaSvgs/realtime.svg", }
            ]}
          />
        </section>
      </>
      )}

      {slug === "mba" && (
        <>
        <section className="lg:mb-14  md:mt-10">
          <ProgrammeHighlights
            title="Programme Highlights"
            description="The MBA programme at Canara Engineering College combines core management education with specialised exposure to financial technology and business analytics domains."
           highlights={[
              { title: "Expert Mentorship & Guidance", icon: "/departmentImages/mcaMbaSvgs/expert.svg" },
              { title: "Hands-On Project Learning", icon: "/departmentImages/mcaMbaSvgs/hands.svg" },
              { title: "Industry-Integrated Curriculum", icon: "/departmentImages/mcaMbaSvgs/industry.svg" },
              { title: "Customer Orientation Skills", icon: "/departmentImages/mcaMbaSvgs/customer.svg" },
              { title: "Grooming & Presentation Skills", icon: "/departmentImages/mcaMbaSvgs/grooming.svg" },
              { title: "Communication Skills", icon: "/departmentImages/mcaMbaSvgs/communication.svg" }
            ]}
          />
        </section>

        <WhyChooseProgramme
          title={
            <>
              Why Choose MBA in <br className="hidden lg:block" /> FinTech and Data Analytics?
            </>
          }
          points={[
            "FinTech and Data Analytics Specialisation",
            "Industry-Aligned Learning Structure",
            "Business-Oriented Analytical Training",
            "Live Industry Case Studies",
            "Project-Based Skill Development",
            "Mentorship from Industry Professionals",
            "Internship Opportunities"
          ]}
          image="/departmentImages/mbaMca/highlight.jpg"
        />

        <section className="lg:mb-14  md:mt-14">
          <KeyLearningAreas
            title="Key Learning Areas"
            description="Students are introduced to essential financial functions, analytical tools, and business technologies that support operational efficiency and informed decision-making. The curriculum also incorporates professional competencies that contribute to workplace effectiveness."
            areas={[
              { title: <>Banking & Finance</>,icon:"/departmentImages/mcaMbaSvgs/bank.svg", },
              { title: <>Insurance & Investment</>,icon:"/departmentImages/mcaMbaSvgs/insurance.svg", },
              { title: <>Data Analytics</>,icon:"/departmentImages/mcaMbaSvgs/da.svg", },
              { title: <>Data Visualisation</>,icon:"/departmentImages/mcaMbaSvgs/datavisual.svg", },
              { title: <>Business Analytics</>,icon:"/departmentImages/mcaMbaSvgs/ba.svg", }
            ]}
          />
        </section>
      </>
      )}

      {/* <HeroSection departmentName={department.name} /> */}      {department?.ytUrl && (
        <section className="pb-10 md:px-6  md:pb-10   lg:pb-14">
          <VideoPlayer
            videoUrl="https://res.cloudinary.com/dvandhsai/video/upload/v1745987839/hcemhmez5c9xxttp4e1v.mp4"
            youtubeUrl={department?.ytUrl}
            thumbnail={department?.thumbnail}
          />
        </section>
      )}
      {department.ethicalLearning &&
         (
          <section className=" lg:mb-14 ">
            <DepartmentMissionVision ethicalLearning={department.ethicalLearning} ourVision={department.ourVision} />
          </section>
        )}
      {!["mca", "mba"].includes(slug) && (
        <>
          {department.depatmentHead && (
            <section className="bg-[#071D2C] px-6   md:mt-0 mt-8">
              <DepartmentHeadMessage departmentName={department.name} depatmentHead={department.depatmentHead} />
            </section>
          )}
          <section className="px-6 md:px-12 pb-10 lg:pb-0 lg:px-6 xl:px-0 lg:mt-0 ">
            <DepartmentFacultySection departmentName={department.name} />
          </section>
        </>
      )}
      {department.ideas && (
        <section className=" mb-20 xl:mb-40  px-6 md:px-12 lg:px-6 xl:px-0 lg:mt-0 -mt-12">
          <IdeasToImpact
            ideasData={department.ideas}
            tableHeaders={department.awardsTable?.headers}
            tableRows={department.awardsTable?.rows}
            allAwards={department.allAwards}
          />
        </section>
      )}

      <section>
        <SpotlightSection toppers={department?.toppers?.length ? department.toppers : []} />
      </section>

      {/* <section className="px-6 bg-[#E5E5EA] md:px-12 lg:pl-16  pb-8">
        <HotOfThePress />
      </section> */}
    </>
  );
}
