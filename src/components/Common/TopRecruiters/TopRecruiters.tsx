import React from 'react';
import logos from '../../../utils/companyLogo/logos.json';
import Image from 'next/image';

const TopRecruiters: React.FC = () => {
  return (
    <section className="max-w-7xl xl:max-w-[75%] mx-auto md:py-10 md:pb-0 pb-12">
      <div className="translate-y-0 transition-all duration-1000 ease-out">
        <h2 className="text-3xl md:text-[40px] lg2:text-5xl font-bold text-black text-center mb-22">
          Top Recruiters
        </h2>

        <div className="flex flex-col gap-4 md:gap-10">
          {/* First Row - scroll left */}
          <div className="marquee-container overflow-hidden whitespace-nowrap">
            <div className="animate-marquee-left flex gap-8">
              {[...logos, ...logos].map((logo, index) => (
                <Image
                  key={`left-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={40}
                  className="w-36 h-20"
                />
              ))}
            </div>
          </div>

          {/* Second Row - scroll right */}
          <div className="marquee-container overflow-hidden whitespace-nowrap">
            <div className="animate-marquee-right flex gap-8">
              {[...logos, ...logos].map((logo, index) => (
                <Image
                  key={`right-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={40}
                  className="w-32 h-20"
                />
              ))}
            </div>
          </div>

          {/* Third Row - scroll left */}
          <div className="marquee-container overflow-hidden whitespace-nowrap">
            <div className="animate-marquee-left flex gap-8">
              {[...logos, ...logos].map((logo, index) => (
                <Image
                  key={`left-2-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={40}
                  className="w-32 h-20"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRecruiters;
