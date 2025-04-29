"use client";
import About from "@/components/Common/Navbar/NavLinks/About";
import Life from "@/components/Common/Navbar/NavLinks/Life";
import Link from "next/link";
import FormModal from "../FromModal/FromModal";
import { useState } from "react";

function NavbarItems() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
    <div className="hidden nav-items lg:flex text-secondary lg2 flex-row space-x-3 xl:space-x-6">
      <div className="cursor-pointer  pt-[8px] text-sm xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center">
        <About />
      </div>
      <div
        id="life"
        className="cursor-pointer pt-[8px] group text-sm xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center"
      >
        <Life />
      </div>
      <Link
        id="apply"
        className="pt-[8px] font-poppins text-sm xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center"
        href={"/apply"}
      >
        <button className="bg-none text-primary border-primary border-[1px] px-7 py-2.5 cursor-pointer rounded-[30px]">Alumni Portal</button>
      </Link>
      <div onClick={()=>setOpen(true)} className="pt-[8px] font-poppins text-sm xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center">
        <button className="bg-primary text-white px-7 py-2.5 cursor-pointer rounded-[30px]">Give to Canara</button>
      </div>
    </div>
    <FormModal isOpen={open} onClose={setOpen} /></>
  );
}

export default NavbarItems;
