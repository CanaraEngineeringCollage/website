"use client";
import React, { useEffect, useRef } from 'react';
import logos from '../../../utils/companyLogo/logos.json';
import Image from 'next/image';

const TopRecruiters: React.FC = () => {
  const row1 = logos.slice(1, 12);
  const row2 = logos.slice(12, 25);
  const row3 = logos.slice(25, 36);

  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateRow = (
      ref: React.RefObject<HTMLDivElement>,
      speed: number,
      reverse: boolean,
    ) => {
      if (!ref.current) return;

      const container = ref.current;
      const contentWidth = container.scrollWidth / 2; // Half because content is duplicated
      let position = 0; // Always start at 0 for simplicity
      let lastTime: number | null = null;

      const animate = (currentTime: number) => {
        if (lastTime === null) lastTime = currentTime;
        const deltaTime = (currentTime - lastTime) / 1000; // Time in seconds
        lastTime = currentTime;

        // Update position based on speed (pixels per second)
        position += (reverse ? speed : -speed) * deltaTime;

        // Normalize position to stay within [-contentWidth, 0]
        if (!reverse) {
          if (position < -contentWidth) position += contentWidth;
        } else {
          if (position > 0) position -= contentWidth;
        }

        // Apply transform with high precision
        container.style.transform = `translateX(${position.toFixed(3)}px)`;

        requestAnimationFrame(animate);
      };

      // Start animation
      requestAnimationFrame(animate);
    };

    // Calculate speed to match 30s duration for one full cycle
    const getSpeed = (ref: React.RefObject<HTMLDivElement>) => {
      return (ref.current?.scrollWidth || 1000) / 2 / 30; // pixels per second
    };

    // Start animations for each row
    animateRow(row1Ref, getSpeed(row1Ref), false); // Left
    animateRow(row2Ref, getSpeed(row2Ref), true); // Right
    animateRow(row3Ref, getSpeed(row3Ref), false); // Left

    return () => {
      // Cleanup not strictly necessary, but included for completeness
    };
  }, []);

  return (
    <section className="max-w-7xl xl:max-w-[75%] mx-auto md:py-10 md:pb-0 pb-12">
      <div className="translate-y-0 transition-all duration-1000 ease-out">
        <h2 className="text-3xl md:text-[40px] lg2:text-5xl font-bold text-[#1D1D1F] text-center mb-22">
          Top Recruiters
        </h2>

        <div className="flex flex-col gap-4 md:gap-14">
          {/* First Row - scroll left */}
          <div className="TopRecruiters whitespace-nowrap">
            <div ref={row1Ref} className="inline-flex w-[200%] gap-8" style={{ willChange: 'transform' }}>
              {[...row1, ...row1].map((logo, index) => (
                <Image
                  key={`row1-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={40}
                  className="w-102 h-15"
                />
              ))}
            </div>
          </div>

          {/* Second Row - scroll right */}
          <div className="TopRecruiters whitespace-nowrap">
            <div ref={row2Ref} className="inline-flex w-[200%] gap-8" style={{ willChange: 'transform' }}>
              {[...row2, ...row2].map((logo, index) => (
                <Image
                  key={`row2-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={40}
                  className="w-102 h-15"
                />
              ))}
            </div>
          </div>

          {/* Third Row - scroll left */}
          <div className="TopRecruiters whitespace-nowrap">
            <div ref={row3Ref} className="inline-flex w-[200%] gap-8" style={{ willChange: 'transform' }}>
              {[...row3, ...row3].map((logo, index) => (
                <Image
                  key={`row3-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={40}
                  className="object-contain w-102 h-15"
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