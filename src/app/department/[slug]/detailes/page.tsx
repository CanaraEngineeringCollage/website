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
const page = () => {
  return (
    <section>
      <DepartmentDetailes />
    </section>
  );
};

export default page;
