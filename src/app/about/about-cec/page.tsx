import AboutCanara from "@/components/AboutPageComponents/AboutCecPage/AboutCanara/AboutCanara";
import AboutCanaraVideo from "@/components/AboutPageComponents/AboutCecPage/AboutCanaraVideo/AboutCanaraVideo";
import AdminTeamSection from "@/components/Common/AdminTeamSection/AdminTeamSection";
import HeroSection from "@/components/AboutPageComponents/AboutCecPage/HeroSection/HeroSection";
import MissionVision from "@/components/AboutPageComponents/AboutCecPage/MissionVision/MissionVision";
import SecretaryMessage from "@/components/AboutPageComponents/AboutCecPage/SecretaryMessage/SecretaryMessage";
import NextStepSection from "@/components/AboutPageComponents/AboutCecPage/NextStepSection/NextStepSection";
import HotOfThePress from "@/components/Common/HotOfThePress/HotOfThePress";


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
      <section className="bg-[#071D2C] px-6 md:px-12 lg:px-16 xl:px-0">
        <SecretaryMessage />
      </section>
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <AdminTeamSection />
      </section>
      <section>
        <NextStepSection/>
      </section>
      <section className="px-6 bg-[#E5E5EA] md:px-12 lg:pl-16 lg:px-0 xl:px-0">
        <HotOfThePress />
      </section>
    </>
  );
}
