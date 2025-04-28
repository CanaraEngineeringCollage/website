import FooterCard from "@/components/Common/FooterCard/FooterCard";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";
import CampusTour from "@/components/HomePageComponents/CampusTour/CampusTour";
import EmpoweringFutures from "@/components/HomePageComponents/EmpoweringFutures/EmpoweringFutures";
import ExplorePrograms from "@/components/HomePageComponents/ExplorePrograms/ExplorePrograms";
import FutureCampusText from "@/components/HomePageComponents/FutureCampusText/FutureCampusText";
import HeroSection from "@/components/HomePageComponents/HeroSecton/HeroSection";
import StudentTour from "@/components/HomePageComponents/StudentTour/StudentTour";
import { Testimonials } from "@/components/HomePageComponents/Testimonials/Testimonials";
import TopRecruiters from "@/components/HomePageComponents/TopRecruiters/TopRecruiters";


export const metadata = {
  title: 'Canara College, Mangalore | NAAC A Grade Institution',
  description: 'Canara College, accredited with A Grade by NAAC and affiliated to Mangalore University, offers premier undergraduate programs. Join a legacy of excellence in education since 1973!',
  openGraph: {
    title: 'Canara College, Mangalore | NAAC A Grade Institution',
    description: 'Providing excellent undergraduate education since 1973. Accredited with A Grade by NAAC and affiliated to Mangalore University.',
    url: 'https://your-website-url.com',
    siteName: 'Canara College',
    images: [
      {
        url: 'https://your-website-url.com/og-image.jpg', // update with your real OG image
        width: 1200,
        height: 630,
        alt: 'Canara College Campus',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canara College, Mangalore | NAAC A Grade Institution',
    description: 'Providing excellent undergraduate education since 1973.',
    images: ['https://your-website-url.com/og-image.jpg'], // update with your real OG image
  },
};


export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <FutureCampusText />
      </section>
      <section className="pl-6 md:pl-12 lg:pl-16 xl:px-0">
        <ExplorePrograms />
      </section>
      <section>
        <CampusTour />
      </section>
      <section className="px-6 md:py-56 py-20 md:px-12 lg:px-16 xl:px-0">
        <EmpoweringFutures />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <TopRecruiters />
      </section>
      <section>
        <StudentTour />
      </section>
      <section className="px-0 bg-white">
        <Testimonials />
      </section>
      <section className="px-6 bg-[#E5E5EA] md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <HotOfThePress />
      </section>
      <section className="bg-[#E5E5EA]">
        <FooterCard />
      </section>
    </>
  );
}
