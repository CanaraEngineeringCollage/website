import AboutCanara from "@/components/AboutPageComponents/AboutCecPage/AboutCanara/AboutCanara";
import AboutCanaraVideo from "@/components/AboutPageComponents/AboutCecPage/AboutCanaraVideo/AboutCanaraVideo";
import HeroSection from "@/components/AboutPageComponents/AboutCecPage/HeroSection/HeroSection";
import MissionVision from "@/components/AboutPageComponents/AboutCecPage/MissionVision/MissionVision";


export default function AboutCec() {
  return (
    <>
      <HeroSection />
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <AboutCanara />
      </section>
      <section>
        <AboutCanaraVideo />
      </section>
      <section>
        <MissionVision/>
      </section>
    </>
  );
}
