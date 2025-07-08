import React from 'react';
import logos from '../../../utils/companyLogo/logos.json';
import Image from 'next/image';

const TopRecruiters: React.FC = () => {
  const row1 = logos.slice(1, 12);
  const row2 = logos.slice(12, 25);
  const row3 = logos.slice(25,36);

  return (
    <section className="max-w-7xl xl:max-w-[75%] mx-auto md:py-10 md:pb-0 pb-12">
      <div className="translate-y-0 transition-all duration-1000 ease-out">
        <h2 className="text-3xl md:text-[40px] lg2:text-5xl font-bold text-black text-center mb-22">
          Top Recruiters
        </h2>

        <div className="flex flex-col gap-4 md:gap-14">
          {/* First Row - scroll left */}
          <div className="marquee-container overflow-hidden whitespace-nowrap">
            <div className="animate-marquee-left w-[200%]   flex gap-8"> 
              {/* {[...logos, ...logos].map((logo, index) => (
                <Image
                  key={`left-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={40}
                  className="w-102 h-17"
                />
              ))} */}
               {[...row1, ...row1].map((logo, index) => (
                <Image
                  key={`row1-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={40}
                  className="w-102 h-15 "
                />
              ))}
            </div>
          </div> 

          {/* Second Row - scroll right */}
           <div className="marquee-container overflow-hidden whitespace-nowrap">
            <div className="animate-marquee-right w-[200%]   flex gap-8"> 
              {/* {[...logos, ...logos].map((logo, index) => (
                <Image
                  key={`right-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={40}
                  className="w-102 h-17"
                />
              ))} */}
                 {[...row2, ...row2].map((logo, index) => (
                <Image
                  key={`row2-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={40}
                  className="w-102 h-15 "
                />
              ))}
            </div>
          </div> 

          {/* Third Row - scroll left */}
           <div className="marquee-container overflow-hidden whitespace-nowrap">
            <div className="animate-marquee-left w-[200%]  flex gap-8"> 
              {/* {[...logos, ...logos].map((logo, index) => (
                <Image
                  key={`left-2-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={40}
                  className="w-102 h-17"
                /> 
              ))} */}
                  {[...row3, ...row3].map((logo, index) => (
                <Image
                  key={`row3-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={40}
                  className="object-contain w-102 h-15 "
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
