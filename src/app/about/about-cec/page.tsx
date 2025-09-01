import AboutCanara from "@/components/AboutPageComponents/AboutCecPage/AboutCanara/AboutCanara";
import AdminTeamSection from "@/components/Common/AdminTeamSection/AdminTeamSection";
import HeroSection from "@/components/AboutPageComponents/AboutCecPage/HeroSection/HeroSection";
import MissionVision from "@/components/AboutPageComponents/AboutCecPage/MissionVision/MissionVision";
import SecretaryMessage from "@/components/AboutPageComponents/AboutCecPage/SecretaryMessage/SecretaryMessage";
import NextStepSection from "@/components/AboutPageComponents/AboutCecPage/NextStepSection/NextStepSection";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";
import VideoPlayer from "@/components/Common/VideoPlayer/VideoPlayer";

export const metadata = {
  title: "About Canara College | Legacy of Excellence Since 1973",
  description:
    "Learn about Canara College, Mangalore — an institution accredited with A Grade by NAAC, fostering academic excellence and holistic development since 1973.",
  openGraph: {
    title: "About Canara College | Legacy of Excellence Since 1973",
    description: "Explore the rich history, vision, mission, and values of Canara College, a premier institution affiliated to Mangalore University.",
    url: "https://your-website-url.com/about", // update with real URL
    siteName: "Canara College",
    images: [
      {
        url: "https://your-website-url.com/og-about-image.jpg", // update with your real OG image
        width: 1200,
        height: 630,
        alt: "About Canara College Campus",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Canara College | Legacy of Excellence Since 1973",
    description: "Discover the legacy and mission of Canara College, empowering students for a brighter future.",
    images: ["https://your-website-url.com/og-about-image.jpg"], // update this
  },
};

export default function AboutCec() {
  return (
    <>
      <HeroSection />
      <section className="px-6 md:px-0 xl:px-0 ">
        <AboutCanara />
      </section>
      <section className="py-10 lg:mt-0 -mt-3">
        <VideoPlayer
          videoUrl="BEVUuWkR7LU"
          youtubeUrl="BEVUuWkR7LU"
          thumbnail="/youtubeThumbnails/Principal-Thumbnail.png"
        />
      </section>
      <section className="lg:mt-0 -mt-5">
        <MissionVision />
      </section>
      <section className="bg-[#071D2C] px-6 md:px-0 xl:px-0">
        <SecretaryMessage />
      </section>
      {/* <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <AdminTeamSection />
      </section> */}
      <section className="">
        <NextStepSection />
      </section>
      {/* <section className="px-6 bg-[#E5E5EA] md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <HotOfThePress />
      </section> */}
    </>
  );
}
