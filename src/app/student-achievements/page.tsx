import MediaSection from "@/components/MediaPageComponents/MediaSection/MediaSection";
import StudentAchievements from "@/components/StudentAchievements/StudentAchievements";
import ExploreCampus from "@/components/StudentAchievements/StudentAchievements";
import React from "react";

export const metadata = {
  title: "Student Achievements | Canara Engineering College",
  description:
    "Celebrate the outstanding achievements of students at Canara Engineering College, including awards, competitions, academic excellence, and co-curricular milestones.",
  openGraph: {
    title: "Student Achievements | Canara Engineering College",
    description:
      "Discover success stories showcasing student accomplishments across academics, sports, projects, competitions, innovation, and more at Canara Engineering College.",
    url: "https://apiserver.cec.edu.in/student-achievements", // 🔗 update if actual URL differs
    siteName: "Canara Engineering College",
    images: [
      {
        url: "https://apiserver.cec.edu.in/assets/images/og-student-achievements.jpg", // ⭐ Replace when actual OG image is ready
        width: 1200,
        height: 630,
        alt: "Student Achievements - Canara Engineering College",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Student Achievements | Canara Engineering College",
    description:
      "Explore the proud moments and achievements of Canara Engineering College students across various fields and competitions.",
    images: ["https://apiserver.cec.edu.in/assets/images/og-student-achievements.jpg"],
  },
};



const page = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16 xl:px-0">
      <StudentAchievements />
    </section>
  );
};

export default page;
