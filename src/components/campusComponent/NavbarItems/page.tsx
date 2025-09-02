"use client";
import About from "@/components/Common/Navbar/NavLinks/About";
import Life from "@/components/Common/Navbar/NavLinks/Life";
import Link from "next/link";
import FormModal from "../FromModal/FromModal";
import { useState } from "react";
import AboutAlumni from "../CampusNavbar/About/About";
import { usePathname } from "next/navigation";

function NavbarItems() {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname()
  return (
    <>
    <div className="hidden nav-items lg:flex text-secondary lg2 flex-row space-x-3 xl:space-x-6">
      <div
        id="admission"
        className="cursor-pointer opacity-80  gap-2 text-[#2884CA] pt-[8px]  text-sm xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center"
      >
        <Link href={"/alumni/about-alumni"} className={`font-poppins ${(pathname==="/alumni/about-alumni")?'border-b-2 border-[#005580] text-[#005580]':" text-[#2884CA]"} py-1.5 `}>
          About
        </Link>  
      </div>
      <div
        id="life"
        className="cursor-pointer pt-[8px] group text-sm xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center"
      >
        <Life />
      </div>
      <div
        id="apply"
        className="pt-[8px] font-poppins text-sm xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center"
        onClick={()=>setOpen(true)}
      >
        <button aria-label="Alumni Portal" className="bg-none text-primary border-primary border-[1px] px-7 py-2.5 cursor-pointer rounded-[30px]">Register as Alumni</button>
      </div>
      <div  className="pt-[8px] font-poppins text-sm xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center">
        <button aria-label="Give to Canara" className="bg-primary text-white px-7 py-2.5 cursor-pointer rounded-[30px]">Give to Canara</button>
      </div>
    </div>
    <FormModal isOpen={open} onClose={setOpen} /></>
  );
}

export default NavbarItems;
