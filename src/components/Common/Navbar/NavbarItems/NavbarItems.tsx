"use client";
import Link from "next/link";
import About from "../NavLinks/About";
import Academics from "../NavLinks/Academics";
import Life from "../NavLinks/Life";

function NavbarItems() {
  return (
    <div className="hidden nav-items lg:flex text-primary lg2   flex-row space-x-3 xl:space-x-6 ">
      <div className="cursor-pointer hover:text-secondary text-prima pt-[8px] text-sm xl:text-base font-semibold transition  duration-300 ease-in-out h-20 flex items-center justify-center">
        <About />
      </div>
      <div className="cursor-pointer pt-[8px] text-sm xl:text-base font-semibold transition  duration-300 ease-in-out h-20 flex items-center justify-center">
        <Academics />
      </div>
      <div
        id="admission"
        className="cursor-pointer pt-[8px] opacity-80 hover:opacity-100 text-sm xl:text-base font-semibold transition  duration-300 ease-in-out h-20 flex items-center justify-center"
      >
        {/* <Admissions /> */}
        <Link href={"/admission"} className="font-poppins">
          Admissions
        </Link>
      </div>
      <div
        id="life"
        className="cursor-pointer pt-[8px] group text-sm xl:text-base font-semibold transition  duration-300 ease-in-out h-20 flex items-center justify-center"
      >
        <Life />
      </div>

      <Link
        id="placement"
        className="pt-[8px] font-poppins text-sm xl:text-base opacity-80 hover:opacity-100 font-semibold transition  duration-300 ease-in-out h-20 flex items-center justify-center"
        href={"/placements"}
      >
        Training & Placements
      </Link>
      <Link
        id="placement"
        className="pt-[8px] font-poppins text-sm xl:text-base opacity-80 hover:opacity-100 font-semibold transition  duration-300 ease-in-out h-20 flex items-center justify-center"
        href={"/placements"}
      >
        Training & Placements
      </Link>
    </div>
  );
}

export default NavbarItems;
