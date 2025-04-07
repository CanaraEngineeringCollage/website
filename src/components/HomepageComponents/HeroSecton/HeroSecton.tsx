import Image from 'next/image';
import bgImage from "../../../../public/backgroundImages/homeHeroBg.jpg"
import nirf from "../../../../public/svgs/heropageLogos/1.svg"
import iso from "../../../../public/svgs/heropageLogos/2.svg"
import nba from "../../../../public/svgs/heropageLogos/3.svg"
import nba2 from "../../../../public/svgs/heropageLogos/4.svg"
import affiliated from "../../../../public/svgs/heropageLogos/5.svg"


const HeroSection = () => {
  return (
    <section className="relative w-full  h-screen flex flex-col justify-center items-center text-center px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage} // <-- Replace with your image
          alt="Students learning with laptops"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-white">
        <h2 className="text-lg font-light">Canara Engineering College</h2>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">
          Pioneering Innovation in <br /> Tech Learning
        </h1>
      </div>

      {/* Logos Section */}
      <div className="relative z-10 mt-[460px] bg-white rounded-xl shadow-lg p-4 w-full max-w-5xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center justify-items-center">
          {/* Logo Items */}
          {[
            { label: 'NIRF Recognised', src: nirf },
            { label: 'ISO 21001:2018', src: iso },
            { label: 'NBA Accredited', src: nba },
            { label: 'NBA Accredited', src: nba2 },
            { label: 'Affiliated to VTU', src: affiliated },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image src={item.src} alt={item.label} width={60} height={60} />
              <p className="text-xs mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
