"use client";
import ContactFormModal from "@/components/Modal/Modal";
import React, { useState } from "react";

const FooterCard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <section className="md:pb-5 md:pt-20  pb-20">
      <div
        className="max-w-6xl mx-auto  md:rounded-2xl"
        style={{
          backgroundImage:"url(/gradientBackgrounds/image.webp)",
        }}
      >
        <div className="text-center py-13  px-5 lg:px-36">
          <h1 className="lg:text-[47px] text-[32px]  font-bold text-white leading-[1.2] pb-2">Ready to take <br className="lg:hidden"/> the next step?</h1>
          <p className="lg:text-[20px] text-[16px] text-[#99c2e0] pb-4 px-2">
            Book a one-on-one <span className="text-white font-bold">counselling session</span> & get all your questions answered about admissions, programs &
            your future opportunities.
          </p>
          <button aria-label="Book Your Counselling Session Today"
           onClick={()=>setIsOpen(true)} className="bg-white text-primary font-semibold py-3 px-5 rounded-full shadow-md hover:bg-gray-100 transition">Book Your Counselling Session Today</button>
        </div>
      </div>
      <ContactFormModal isOpen={isOpen} onClose={setIsOpen} />
    </section>
  );
};

export default FooterCard;
