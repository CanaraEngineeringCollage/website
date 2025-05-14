"use client";
import ContactFormModal from "@/components/Modal/Modal";
import React, { useState } from "react";

const FooterCard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <section className="md:pb-36 py-10  md:px-0">
      <div
        className="max-w-6xl mx-auto  md:rounded-2xl"
        style={{
          backgroundImage:"url(/gradientBackgrounds/image.png)",
        }}
      >
        <div className="text-center py-13  lg:px-36">
          <h1 className="text-[47px] font-bold text-white leading-[1.2] pb-2">Ready to take the next step?</h1>
          <p className="text-[20px] text-[#99c2e0] pb-4 px-2">
            Book a one-on-one <span className="text-white font-bold">counselling session</span> & get all your questions answered about admissions, programs &
            your future opportunities.
          </p>
          <button onClick={()=>setIsOpen(true)} className="text-[#2884CA] cursor-pointer px-5 py-3 bg-white rounded-4xl">Book Your Counselling Session Today</button>
        </div>
      </div>
      <ContactFormModal isOpen={isOpen} onClose={setIsOpen} />
    </section>
  );
};

export default FooterCard;
