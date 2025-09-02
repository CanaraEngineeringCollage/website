import FacultyMembersSection from "@/components/AboutPageComponents/EducatorsAdminisratorsPage/FacultyMembersSection/FacultyMembersSection";
import FooterCard from "@/components/Common/FooterCard/FooterCard";
import React from "react";

export const metadata = {
  title: "Educators & Administrators | Canara College Faculty and Leadership",
  description:
    "Meet the esteemed faculty members and experienced administrators of Canara College, dedicated to academic excellence and student success.",
  openGraph: {
    title: "Educators & Administrators | Canara College Faculty and Leadership",
    description: "Learn about the distinguished educators and visionary leaders who drive the academic excellence at Canara College, Mangalore.",
    url: "https://your-website-url.com/educators-administrators",
    siteName: "Canara College",
    images: [
      {
        url: "https://your-website-url.com/og-educators-image.jpg",
        width: 1200,
        height: 630,
        alt: "Faculty and Administrators at Canara College",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Educators & Administrators | Canara College Faculty and Leadership",
    description: "Explore the profiles of Canara College’s dedicated faculty and administrative leaders fostering student achievement.",
    images: ["https://your-website-url.com/og-educators-image.jpg"],
  },
};

const Page = async () => {
  // ✅ Server-side fetch
  let facultyData = [];
  try {
    const res = await fetch("https://canaraapi.megamind.studio/faculty", { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch faculty data");
    facultyData = await res.json();
  } catch (error) {
    console.error("Error fetching faculty data:", error);
  }

  return (
    <>
      {/* Pass fetched data as prop */}
      <FacultyMembersSection facultyData={facultyData} />
      <section className="bg-[#E5E5EA]">
        <FooterCard />
      </section>
    </>
  );
};

export default Page;
