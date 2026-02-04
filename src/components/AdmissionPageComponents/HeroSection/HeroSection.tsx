"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import bgImage from "../../../../public/admissionPageImages/hero.png"
import bgImageMobile from "../../../../public/admissionPageImages/heroMobile.png"
import ContactFormModal from '@/components/Modal/Modal';

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <section className="relative w-full h-[55vh] md:h-[90vh] lg:h-[700px] xl:h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full hidden md:block object-cover lg:object-center md:object-[80%_center] object-[80%_center] "
        priority
      />
         <Image
        src={bgImageMobile}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full md:hidden object-cover object-cover ] "
        priority
      />

      {/* Text Content */}
      <div className="relative z-10 max-w-[850px] px-6 md:px-20 top-[5%] lg:top-[25%]">
        <h2 className="text-white text-[28px] md:text-[45px] lg:text-[76px] font-bold leading-[1.1]">
          Where Learning <br /> Meets Innovation
        </h2>
        <p className="text-[#CDE5FF] text-[16px] pe-10 leading-[1.3] md:text-[31px] mt-2">
          Begin your engineering   journey with a  <br className='md:hidden'/> foundation-built curriculum.
        </p>
        <button aria-label='Apply Now' onClick={()=>setIsOpen(true)} className="mt-6 text-lg bg-white text-[#2884CA] font-bold px-10 py-2 lg:py-4 cursor-pointer rounded-full  ">
          Apply Now
        </button>
      </div>
      <ContactFormModal isOpen={isOpen} onClose={setIsOpen} />
    </section>
  )
}

export default HeroSection
