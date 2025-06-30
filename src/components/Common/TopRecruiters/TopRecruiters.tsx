import React from 'react';
import logos from '../../../utils/companyLogo/logos.json';
import Image from 'next/image';

const TopRecruiters: React.FC = () => {
  return (
    <section className="max-w-7xl xl:max-w-[75%] mx-auto  md:py-10 md:pb-0  pb-12">
      <div className="translate-y-0 transition-all duration-1000 ease-out">
        <h2 className="text-3xl md:text-[40px] lg2:text-5xl  font-bold text-black text-center mb-22 ">Top Recruiters</h2>

        {/* Marquee wrapper */}
        <div className="marquee-container">
          <div className="animate-marquee gap-8">
            {[...logos, ...logos].map((logo, index) => (
              <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={100} // or adjust as per your design
              height={40} // provide fallback or map height dynamically
              className="w-32 h-20"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRecruiters;
