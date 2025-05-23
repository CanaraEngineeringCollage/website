"use client";
import Link from "next/link";
import About from "../NavLinks/About";
import Academics from "../NavLinks/Academics";
import Life from "../NavLinks/Life";
import { useState } from "react";
import { usePathname } from "next/navigation";
import FormModal from "@/components/campusComponent/FromModal/FromModal";

function NavbarItems() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
const pathname = usePathname()
  return (
    <>
    <div className="hidden nav-items lg:flex text-secondary lg2 flex-row space-x-3  xl:space-x-6">
      <div className="cursor-pointer  pt-[8px] text-sm xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center">
        <About />
      </div>
      <div className="cursor-pointer pt-[8px] text-sm xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center">
        <Academics />
      </div>
      <div
        id="admission"
        className="cursor-pointer opacity-80  text-[#2884CA] pt-[8px]  text-sm xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center"
      >
        <Link href={"/admission"} className={`font-poppins ${(pathname==="/admission")?'border-b-2 border-[#005580] text-[#005580]':" text-[#2884CA]"} py-1.5 `}>
          Admissions
        </Link>
      </div>
      <div
        id="life"
        className="cursor-pointer pt-[8px] group text-sm xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center"
      >
        <Life />
      </div>
      <Link
        id="placement"
        className="pt-[8px] opacity-80 text-[#2884CA]   font-poppins text-sm xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center"
        href={"/training-placements"}
      >
       <p className={`font-poppins ${pathname==="/training-placements"?'border-b-2 border-[#005580] text-[#005580]':" text-[#2884CA]"} py-1.5 `}> Training & Placements</p>
       
      </Link>
      <div
        id="apply"
        className="pt-[8px] font-poppins text-sm xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center"
      >
        <button onClick={() => setModalOpen(true)} className="bg-primary text-white px-7 py-2.5 cursor-pointer rounded-[30px]">
          Apply Now
        </button>
      </div>

    </div>
      <FormModal isOpen={modalOpen} onClose={setModalOpen}/>
      
    </>
  );
}

export default NavbarItems;
