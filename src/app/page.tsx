import CampusTour from "@/components/HomePageComponents/CampusTour/CampusTour";
import EmpoweringFutures from "@/components/HomePageComponents/EmpoweringFutures/EmpoweringFutures";
import ExplorePrograms from "@/components/HomePageComponents/ExplorePrograms/ExplorePrograms";
import FutureCampusText from "@/components/HomePageComponents/FutureCampusText/FutureCampusText";
import HeroSection from "@/components/HomePageComponents/HeroSecton/HeroSection";
import StudentTour from "@/components/HomePageComponents/StudentTour/StudentTour";
import { Testimonials } from "@/components/HomePageComponents/Testimonials/Testimonials";
import TopRecruiters from "@/components/HomePageComponents/TopRecruiters/TopRecruiters";

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
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
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
    </>
  );
}
