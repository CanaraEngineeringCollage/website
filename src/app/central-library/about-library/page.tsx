import AboutCentralLibrary from "@/components/CentralLibraryComponents/AboutCentralLibrary/AboutCentralLibrary";

export const metadata = {
  alternates: {
    canonical: "/central-library/about-library",
  },
  title: "About Central Library | Canara Engineering College",
  description:
    "Learn about the mission, vision, infrastructure, digital resources, and learning environment provided by the Central Library at Canara Engineering College.",
  openGraph: {
    title: "About Central Library | Canara Engineering College",
    description:
      "Get to know the academic support, digital tools, resource facilities, and services offered by the Central Library that empower student learning and research.",
    url: "https://apiserver.cec.edu.in/central-library/about-library", // 🔗 final page URL
    siteName: "Canara Engineering College",
    images: [
      {
        url: "https://apiserver.cec.edu.in/assets/images/og-about-library.jpg", // ⭐ Replace with actual OG image later
        width: 1200,
        height: 630,
        alt: "About Central Library - Canara Engineering College",
      },
    ],
    locale: "en_IN",
    type: "article", // more suitable for content/info page
  },

  twitter: {
    card: "summary_large_image",
    title: "About Central Library | Canara Engineering College",
    description: "Explore the mission, resources, digital systems, and student learning support provided by the Central Library.",
    images: ["https://apiserver.cec.edu.in/assets/images/og-about-library.jpg"],
  },
};

// Helper to map API data to FacultyMember interface
const page = () => {
  return (
    <>
      <AboutCentralLibrary />
    </>
  );
};
export default page;
