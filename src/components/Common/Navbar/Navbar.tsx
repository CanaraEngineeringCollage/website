"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DropDown from "./DropDown/DropDown";
import NavbarItems from "./NavbarItems/NavbarItems";
import { useEffect, useState } from "react";
function Navbar({ openSidebar, sidebar }: { openSidebar: () => void; sidebar: boolean }) {
  const router = useRouter();
  // const [isScrolled, setIsScrolled] = useState(false);

  // function handleScroll() {
  //   if (window.scrollY > 100) {
  //     setIsScrolled(true);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const [isScrolled, setIsScrolled] = useState(false);

  function handleScroll() {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* First Header */}
      <section
        className={`relative hidden lg:block transition-all ease-in-out duration-500 ${
          isScrolled ? "-translate-y-10" : "translate-y-0"
        }`}
      >
        <div className="flex items-center w-full h-12 bg-primary">
          <div className="hidden md:flex items-center justify-between w-full container-padding max-w-[90%] mx-auto">
            <div className="flex items-center justify-center space-x-6">
              <Link
                href={"mailto:sahyadri@sahyadri.edu.in"}
                className="text-[0.7rem] xl:text-[0.875rem]  text-white/50 font-poppins hover:text-white transition-colors ease-in-out duration-300"
              >
                Email: canarait@gmail.com
              </Link>
              <Link
                href={"tel:+918792727001"}
                className="text-[0.7rem] xl:text-[0.875rem] text-white/50 font-poppins hover:text-white transition-colors ease-in-out duration-300"
              >
                Phone:+ 91 8792727001/8904737001
              </Link>
              <Link
                href={"#"}
                className="text-[0.7rem] xl:text-[0.875rem] text-white/50 font-poppins hover:text-white transition-colors ease-in-out duration-300"
              >
                CET Code: E123
              </Link>
              <Link
                href={"/home/nirf"}
                className="text-[0.7rem] xl:text-[0.875rem] text-white/50 font-poppins hover:text-white transition-colors ease-in-out duration-300"
              >
                NIRF
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-6">
              <Link
                href={"/#enquiry"}
                className="text-[0.7rem] xl:text-[0.875rem] text-white/50 font-poppins hover:text-white transition-colors ease-in-out duration-300"
              >
                Admission Enquiry
              </Link>
              <Link
                href={"/admission"}
                className="text-[0.7rem] xl:text-[0.875rem] text-white/50 font-poppins hover:text-white transition-colors ease-in-out duration-300"
              >
                Admission Procedure
              </Link>
              <Link
                href={"/admission"}
                className="text-[0.7rem] xl:text-[0.875rem] text-white/50 font-poppins hover:text-white transition-colors ease-in-out duration-300"
              >
                Admission Open 2025
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={`bg-white relative transition-all duration-500 ease-in-out `}>
        <nav className="  py-0 max-w-[90%] mx-auto">
          {/* For large and Medium-sized Screen */}
          <div className="flex items-center justify-between relative py-7 lg:py-2 xl:py-3 container-padding">
            <div className="flex flex-row items-center w-36 md:w-40 2xl:w-60 h-10 relative">
              <Link href={"/"}>
                <Image
                  src={"/svgs/logos/logo.svg"}
                  fill
                  alt="logo"
                  onClick={() => {
                    router.push("/");
                  }}
                  className="object-contain cursor-pointer"
                />
              </Link>
            </div>
            {/* Navbar Items */}
            <NavbarItems />
            {/* Navbar Items */}
          </div>
          <div className="block lg:hidden absolute top-1/2 -translate-y-1/2 right-4 z-[1000]">
            {/* Dropdown */}
            <DropDown openSidebar={openSidebar} sidebar={sidebar} />
            {/* Dropdown */}
          </div>
        </nav>
      </section>
      {/* First Header */}
    </>
  );
}

export default Navbar;
