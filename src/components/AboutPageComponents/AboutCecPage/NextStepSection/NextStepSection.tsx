"use client";
import ContactFormModal from "@/components/Modal/Modal";
import { useState } from "react";


export default function NextStepSection() {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <section className="relative py-10 lg:py-40 overflow-hidden bg-[#0A0A0A]">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
            backgroundImage:"url(/gradientBackgrounds/image.webp)",
          }}
      />

      <div className="relative z-10 lg:max-w-4xl py-5 lg:py-0 mx-auto px-2 lg:px-6 text-center">
        <div className=" flex flex-col items-center">
          <h2 className="lg:max-w-lg w-full  text-[32px] md:text-6xl font-bold leading-[1.2] text-white">
            Ready to take <br className="lg:hidden" /> the next step?
          </h2>

          <p className="text-white/70 mt-3  lg:mt-7 text-lg lg:text-xl max-w-2xl mx-auto">
            Book a one-on-one <span className="text-white">counseling session</span> & get all your questions answered about admissions programs & your future opportunities.
          </p>

          <button aria-label="Book Your Counseling Session Today" onClick={()=>{setIsOpen(true)}} className="mt-5 bg-white text-[#2884CA] font-bold px-4 lg:px-8 py-3 rounded-full  hover:bg-white/90 transition-colors">
            Book Your Counseling Session Today
          </button>
        </div>
      </div>
      <ContactFormModal isOpen={isOpen} onClose={setIsOpen} />
    </section>
  );
}
