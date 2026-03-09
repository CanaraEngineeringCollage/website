"use client";
import React from "react";
import logos from "../../../utils/companyLogo/logos.json";
import Image from "next/image";
import { cn } from "@/lib/utils"; // If you don't have cn, remove it

const renderLogos = (logosArray: { src: string; alt: string; height?: string }[], reverse = false, speed = 50) => (
  <div className="logo-scroll-container">
    <div
      style={{
        animation: `${reverse ? "marquee-right" : "marquee-left"} ${speed}s linear infinite`,
        display: "flex",
        width: "max-content",
      }}
    >
      {[...logosArray, ...logosArray].map((logo, index) => (
        <div key={index} className="flex items-center justify-center mx-4">
          <Image
          unoptimized
            src={logo.src}
            alt={logo.alt}
            width={180}
            height={80}
            // You can optionally use logo.height here if you want dynamic heights
            className="object-contain w-28 h-16"
          />
        </div>
      ))}
    </div>
  </div>
);

const TopRecruiters: React.FC = () => {
  // 56 total logos distributed across 3 rows (~18-19 items per row)
  const row1 = logos.slice(0, 19);
  const row2 = logos.slice(19, 38);
  const row3 = logos.slice(38, 56);

  return (
    <section className="max-w-7xl xl:max-w-[75%] mx-auto md:py-10 md:pb-0 overflow-hidden">
      <div className="translate-y-0 transition-all duration-1000 ease-out">
        <h2 className="text-3xl md:text-[40px] lg2:text-5xl font-bold text-[#1D1D1F] text-center mb-12">Top Recruiters</h2>

        <div className="flex flex-col gap-8 md:gap-14">
          {/* Row 1 - scroll left */}
          {renderLogos(row1)}

          {/* Row 2 - scroll right */}
          {renderLogos(row2, true)}

          {/* Row 3 - scroll left */}
          {renderLogos(row3)}
        </div>
      </div>
    </section>
  );
};

export default TopRecruiters;
