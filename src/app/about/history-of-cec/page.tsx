import AboutHistoryCanara from "@/components/AboutPageComponents/HistoryOfCec/AboutHistoryOfCanara/AboutHistoryOfCanara";
import HeroSection from "@/components/AboutPageComponents/HistoryOfCec/HeroBanner/HistoryOfCec";
import FooterCard from "@/components/Common/FooterCard/FooterCard";





export default function AboutCec() {
  return (
    <>
      <HeroSection />
      <section className="px-6 md:px-12 lg:px-16 xl:px-0">
        <AboutHistoryCanara />
      </section>
      <section className="bg-[#E5E5EA]">
        <FooterCard />
      </section>
  
    </>
  );
}
