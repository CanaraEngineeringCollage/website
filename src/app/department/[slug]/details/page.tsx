import DepartmentDetailes from "@/components/DepartmentComponents/DetailesPageComponents/DepartmentDetails/DepartmentDetailes";
import React from "react";
import { allDepartmentsData } from "@/lib/allDepartments";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const department = allDepartmentsData.find((dept) => dept.slug === params.slug);

  if (!department) return notFound();

  const title = `${department.name} Department - Details | Canara Engineering College`;
  const description = `Explore detailed information about the ${department.name} Department at Canara Engineering College, including faculty, academic programs, research, facilities, and achievements.`;

  const imageUrl = department.bannerUrl || "https://cec.edu.in/default-og-image.jpg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://cec.edu.in/department/${params.slug}/details`,
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
const Page = ({ params }: { params: { slug: string } }) => {
  const department = allDepartmentsData.find((dept) => dept.slug === params.slug);
  if (!department) return notFound();

  return (
    <section>
      <DepartmentDetailes departmentName={department.name} />
    </section>
  );
};

export default Page;
