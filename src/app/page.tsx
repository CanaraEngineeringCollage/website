import FooterCard from "@/components/Common/FooterCard/FooterCard";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";
import EmpoweringFutures from "@/components/Common/EmpoweringFutures/EmpoweringFutures";
import ExplorePrograms from "@/components/Common/ExplorePrograms/ExplorePrograms";
import FutureCampusText from "@/components/Common/FutureCampusText/FutureCampusText";
import HeroSection from "@/components/Common/HeroSecton/HeroSection";
import { Testimonials } from "@/components/Common/Testimonials/Testimonials";
import TopRecruiters from "@/components/Common/TopRecruiters/TopRecruiters";
import VideoPlayer from "@/components/Common/VideoPlayer/VideoPlayer";
import LocationSection from "@/components/HomepageComponents/LocationSection";
import IdeasTakeFlight from "@/components/HomepageComponents/IdeasTakeFlight";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Canara Engineering College, Mangalore | NAAC A Grade Institution",
    description: "Providing excellent undergraduate education since 1973. Accredited with A Grade by NAAC and affiliated to Mangalore University.",
    url: "/",
    siteName: "Canara College",
    images: [
      {
        url: "https://cec.edu.in/graphImage.png", // Thanks to metadataBase in layout, this becomes https://cec.edu.in/graphImage.png
        width: 1200,
        height: 630,
        alt: "Canara College Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canara College, Mangalore | NAAC A Grade Institution",
    description: "Providing excellent undergraduate education since 1973.",
    images: ["https://cec.edu.in/og-image.jpg"],
  },
};

export default async function Home() {
  // Add this inside your Home component or update the existing one
  const getHomePageImages = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${apiUrl}/home-page-images`, { next: { revalidate: 300 } });

      if (res.ok) {
        const rawData = await res.json();

        // Map the raw data to the exact props HeroSection needs
        const formattedData = rawData.map((img: any) => ({
          id: img.id,
          desktopUrl: img.imageUrl ? `${apiUrl}/home-page-images/file/${img.imageUrl}` : null,
          mobileUrl: img.mobileImageUrl ? `${apiUrl}/home-page-images/file/${img.mobileImageUrl}` : null,
        }));

        return formattedData;
      }
    } catch (error) {
      console.error("Failed to fetch home page images", error);
    }
    return [];
  };

  // Then in your component:
  const data = await getHomePageImages();

  return (
    <>
      <HeroSection images={data} />
      <section className="px-6 md:px-12 lg:px-36 xl:px-20 py-12">
        <FutureCampusText />
      </section>
      <section className="  lg:px-0 xl:px-0  py-2 ">
        <ExplorePrograms />
      </section>
      <section className="bg-[#144A72] md:px-6 mt-6 lg:mt-20 md:mb-16 py-20">
        <VideoPlayer
          subTitle="Explore the campus with a virtual tour & discover one among the best colleges in the region."
          title="Experience the Campus"
          videoUrl="z-Axfq0HfZOLspAj"
          youtubeUrl="DotJvDklT5Y"
          thumbnail="/youtubeThumbnails/CampusTour-Thumbnail@300x.webp"
        />
      </section>
      <section className="px-6  md:px-12 lg:px-26 xl:px-0 py-1 mb-10 lg:mb-8 ">
        <EmpoweringFutures />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0 ">
        <TopRecruiters />
      </section>
      <section className=" py-14 md:px-6 lg:px-0 lg:pb-[4rem]">
        <VideoPlayer
          videoUrl="https://res.cloudinary.com/dvandhsai/video/upload/v1745987839/hcemhmez5c9xxttp4e1v.mp4"
          // videoUrl="z-Axfq0HfZOLspAj"
          youtubeUrl="Xhq4QpXZco8"
          thumbnail="/youtubeThumbnails/Homepage-Thumbnail@300x.webp"
        />
      </section>
      <section className="bg-white px-6 ">
        <IdeasTakeFlight />
      </section>
      <section className="px-0 bg-white pt-5 pb-12 lg:pb-10 lg:mt-0 -mt-3">
        <Testimonials />
      </section>
      <section className="px-6 bg-[#E5E5EA] md:px-12 lg:pl-16 lg:px-0 xl:px-0 py-0 md:mt-0 -mt-6">
        <HotOfThePress />
      </section>

      <section className="bg-[#E5E5EA] px-6 lg:mt-0 ">
        <LocationSection />
      </section>
      <section className="bg-[#E5E5EA]">
        <FooterCard />
      </section>
    </>
  );
}