import DepartmentDetailes from "@/components/DepartmentComponents/DetailesPageComponents/DepartmentDetails/DepartmentDetailes";
import React from "react";
import departments from "@/lib/departments.json";
import { notFound } from "next/navigation";



export async function generateMetadata({ params }: { params: { slug: string } }) {
  const department = departments.find((dept) => dept.slug === params.slug);

  if (!department) return notFound();

  const title = `${department.name} Department - Details | Canara Engineering College`;
  const description = `Explore detailed information about the ${department.name} Department at Canara Engineering College, including faculty, academic programs, research, facilities, and achievements.`;

  const imageUrl =
    department.bannerUrl || "https://your-website-url.com/default-og-image.jpg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://your-website-url.com/department/${params.slug}/detailes`,
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
const Page = async ({ params }: { params: { slug: string } }) => {
  const department = departments.find((dept) => dept.slug === params.slug);
  if (!department) return notFound();

  let facultyDataFetched: Faculty[] = [];
  try {
    const res = await fetch("https://canaraapi.megamind.studio/faculty");
    if (!res.ok) throw new Error("Failed to fetch faculty data");
    const data: Faculty[] = await res.json();

    facultyDataFetched = data.filter(f => f.department === department.name).slice(0,10);
  } catch (error) {
    console.error("Error fetching faculty data:", error);
  }

  return (
    <section>
      <DepartmentDetailes faculties={facultyDataFetched} />
    </section>
  );
};

export default Page;
