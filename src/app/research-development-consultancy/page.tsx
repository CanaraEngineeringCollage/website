import ResearchPageSection from "@/components/ResearchDevelopmentConsultancyComponenets/ResearchPageSection/ResearchPageSection";
import React from "react";

export const metadata = {
  alternates: {
    canonical: "/research-development-consultancy",
  },
  title: "Research & Development and Consultancy Cell | Canara College",
  description:
    "Explore the Research & Development and Consultancy Cell at Canara College, highlighting faculty-led projects, student research, publications, and consultancy initiatives.",
  openGraph: {
    title: "Research & Development and Consultancy Cell | Canara College",
    description: "Discover research projects, publications, and consultancy initiatives led by faculty and students at Canara College.",
    url: "https://cec.edu.in/academics/research-development-consultancy", // update this
    siteName: "Canara College",
    images: [
      {
        url: "https://cec.edu.in/og-research-consultancy.jpg", // update this
        width: 1200,
        height: 630,
        alt: "Research & Development and Consultancy Cell at Canara College",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research & Development and Consultancy Cell | Canara College",
    description: "Learn about faculty and student-led research, projects, and consultancy work at Canara College.",
    images: ["https://cec.edu.in/og-research-consultancy.jpg"], // update this
  },
};

const page = () => {
  return (
    <div>
      <ResearchPageSection />
    </div>
  );
};

export default page;
