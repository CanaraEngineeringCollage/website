"use client";
import ContactFormModal from "@/components/Modal/Modal";
import { useState } from "react";


export default function NextStepSection() {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <section className="relative py-24 lg:py-40 overflow-hidden bg-[#0A0A0A]">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
            backgroundImage:"url(/gradientBackgrounds/image.webp)",
          }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-6 flex flex-col items-center">
          <h2 className="max-w-md  text-[31px] md:text-5xl font-extrabold text-white">
            Ready to take the next step?
          </h2>

          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Book a one-on-one counseling session & get all your questions answered about admissions programs & your future opportunities.
          </p>

          <button aria-label="Book Your Counseling Session Today" onClick={()=>{setIsOpen(true)}} className="mt-8 bg-white text-[#2884CA] font-bold px-8 py-3 rounded-full  hover:bg-white/90 transition-colors">
            Book Your Counseling Session Today
          </button>
        </div>
      </div>
      <ContactFormModal isOpen={isOpen} onClose={setIsOpen} />
    </section>
  );
}
