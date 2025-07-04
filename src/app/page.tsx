import FooterCard from "@/components/Common/FooterCard/FooterCard";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";
import EmpoweringFutures from "@/components/Common/EmpoweringFutures/EmpoweringFutures";
import ExplorePrograms from "@/components/Common/ExplorePrograms/ExplorePrograms";
import FutureCampusText from "@/components/Common/FutureCampusText/FutureCampusText";
import HeroSection from "@/components/Common/HeroSecton/HeroSection";
import { Testimonials } from "@/components/Common/Testimonials/Testimonials";
import TopRecruiters from "@/components/Common/TopRecruiters/TopRecruiters";
import VideoPlayer from "@/components/Common/VideoPlayer/VideoPlayer";

export const metadata = {
  title: "Canara Engineering College, Mangalore | NAAC A Grade Institution",
  description:
    "Canara College, accredited with A Grade by NAAC and affiliated to Mangalore University, offers premier undergraduate programs. Join a legacy of excellence in education since 1973!",
  openGraph: {
    title: "Canara Engineering College, Mangalore | NAAC A Grade Institution",
    description: "Providing excellent undergraduate education since 1973. Accredited with A Grade by NAAC and affiliated to Mangalore University.",
    url: "https://your-website-url.com",
    siteName: "Canara College",
    images: [
      {
        url: "https://your-website-url.com/og-image.jpg", // update with your real OG image
        width: 1200,
        height: 630,
        alt: "Canara College Campus",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canara College, Mangalore | NAAC A Grade Institution",
    description: "Providing excellent undergraduate education since 1973.",
    images: ["https://your-website-url.com/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="px-6 md:px-12 lg:px-36 xl:px-20 py-12">
        <FutureCampusText />
      </section>
      <section className="md:pl-12 lg:pl-16 xl:px-0 py-12">
        <ExplorePrograms />
      </section>
      <section className="bg-[#144A72] my-12">
        <VideoPlayer
          subTitle="Explore the campus with a virtual tour & discover one among the best colleges in the region."
          title="Experience the Campus"
          videoUrl="z-Axfq0HfZOLspAj"
          youtubeUrl="DotJvDklT5Y"
          thumbnail="https://res.cloudinary.com/dvandhsai/image/upload/v1746612052/duzvb3twtlcu0xve8off.png"
        />
      </section>
      <section className="px-6  md:px-12 lg:px-16 xl:px-0 py-12">
        <EmpoweringFutures />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0 ">
        <TopRecruiters />
      </section>
      <section className="py-12">
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvandhsai/video/upload/v1745987839/hcemhmez5c9xxttp4e1v.mp4"
          // videoUrl="z-Axfq0HfZOLspAj"
          youtubeUrl="Xhq4QpXZco8"
          thumbnail="https://res.cloudinary.com/dvandhsai/image/upload/v1745989151/gerbybf4ejfgs7aeajyq.jpg"
        />
      </section>
      <section className="px-0 bg-white py-20">
        <Testimonials />
      </section>
      <section className="px-6 bg-[#E5E5EA] md:px-12 lg:pl-16 lg:px-0 xl:px-0 py-12">
        <HotOfThePress />
      </section>
      <section className="bg-[#E5E5EA]">
        <FooterCard />
      </section>
    </>
  );
}
