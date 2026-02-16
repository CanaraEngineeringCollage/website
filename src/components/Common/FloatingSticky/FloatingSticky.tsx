"use client";

import { useScrollThreshold } from "@/app/hooks/useScrollThreshold";
import { Typography } from "@material-tailwind/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Phone, GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingSticky() {
  const isScrolled = useScrollThreshold(100);
  const pathname = usePathname();
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    const footer = document.getElementById("main-footer");
    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  if (pathname === "/training-placements" || pathname === "/explore/hostel-life") {
    return null;
  }

  return (
    <>
      {/* Floating Bar */}
      <div
        className={`fixed left-0 right-0 flex justify-center z-50 bottom-2 lg:bottom-5 h-[auto] bg-none lg:bg-transparent max-w-[350px] md:max-w-[400px] mx-auto py-1 transition-all duration-300 ${
          isScrolled && !isFooterVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full bg-white shadow-lg border border-[#F3F3F3] rounded-full mx-auto p-1.5 px-3">
          <div className="flex items-center justify-between gap-2">
            {/* Call Button */}
            <a
              href="tel:+918792727001"
              target="_blank"
              className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-50 transition-colors flex-1 justify-center"
            >
              <Phone className="w-5 h-5 text-[#2884ca]" />
              <Typography className="font-bold text-[#2884ca] text-sm hidden sm:block">Call</Typography>
            </a>

            <div className="h-6 w-[1px] bg-gray-200"></div>

            {/* Admission Button */}
            <Link
              href="/admission"
              className="flex items-center gap-2 px-4 py-2 bg-[#2884ca] rounded-full hover:bg-[#1f6fa0] transition-colors flex-1 justify-center"
            >
              <GraduationCap className="w-5 h-5 text-white" />
              <Typography className="font-bold text-white text-sm">Admission</Typography>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
