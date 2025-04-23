import React from 'react';
import logos from '../../../utils/companyLogo/logos.json';

const TopRecruiters: React.FC = () => {
  return (
    <section className="max-w-7xl xl:max-w-[75%] mx-auto  md:py-16  pb-12">
      <div className="translate-y-0 transition-all duration-1000 ease-out">
        <h2 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl font-bold text-black text-center mb-22 ">Top Recruiters</h2>

        {/* Marquee wrapper */}
        <div className="marquee-container">
          <div className="animate-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className={`${logo.height} w-auto`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRecruiters;
