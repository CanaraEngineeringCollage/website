"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import DropDown from "./DropDown/DropDown";
import NavbarItems from "./NavbarItems/NavbarItems";
import { useEffect, useState } from "react";
function Navbar({ openSidebar, sidebar }: { openSidebar: () => void; sidebar: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const isMcaOrMba = pathname?.includes("/department/mca") || pathname?.includes("/department/mba");
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

  // function handleScroll() {
  //   if (window.scrollY > 100) {
  //     setIsScrolled(true);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // }
  // useEffect(() => {
  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      {/* First Header */}
      <section
        className={`relative hidden group lg:block transition-all ease-in-out duration-500 overflow-hidden ${
          isScrolled ? "-mt-12 opacity-0" : "mt-0 opacity-100"
        }`}
      >
        <div className="flex items-center w-full h-12 border-b border-b-[#BFDCF7]">
          <div className="hidden md:flex items-center justify-between w-full container-padding max-w-[95%] mx-auto">
            <div className="flex items-center justify-center space-x-6">
              <Link
                href={"mailto:canarait@gmail.com"}
                className="text-[14px] xl:text-[16px]  text-[#2884CA] font-bold font-poppins hover:text-[#005580] transition-colors ease-in-out duration-300"
              >
                Email: canarait@gmail.com
              </Link>
              <div className="flex gap-1">
                <p className="text-[14px] xl:text-[16px] text-[#2884CA] font-bold font-poppins  transition-colors ease-in-out duration-300">Phone:</p>
                <Link
                  href={"tel:+918792727001"}
                  className="text-[14px] xl:text-[16px]  text-[#2884CA]  font-bold font-poppins hover:text-[#005580] transition-colors ease-in-out duration-300"
                >
                  + 91 8792727001
                </Link>
                <span className="text-[14px] xl:text-[16px] text-[#2884CA] font-bold font-poppins hover:text-[#005580] transition-colors ease-in-out duration-300">
                  /
                </span>
                <Link
                  href={"tel:+918904737001"}
                  className="text-[14px] xl:text-[16px] text-[#2884CA] font-bold font-poppins hover:text-[#005580] transition-colors ease-in-out duration-300"
                >
                  8904737001
                </Link>
              </div>
              <p className="text-[14px] xl:text-[16px] text-[#2884CA] font-bold font-poppins hover:text-[#005580] transition-colors ease-in-out duration-300">
                CET Code: E123
              </p>
            </div>
            <div className="flex items-center justify-center space-x-6">
              <Link
                href={"/admission"}
                className="text-[14px] xl:text-[16px] text-[#2884CA] font-bold font-poppins hover:text-[#005580] transition-colors ease-in-out duration-300"
              >
                Admission Procedure
              </Link>
              <Link
                href={"https://apply.canaraengineering.in/"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] xl:text-[16px] text-[#2884CA] font-bold font-poppins hover:text-[#005580] transition-colors ease-in-out duration-300"
              >
                Admission Open {new Date().getFullYear()}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={`bg-white  relative transition-all duration-500 ease-in-out `}>
        <nav className="  py-0 max-w-[95%] mx-auto">
          {/* For large and Medium-sized Screen */}
          <div className={`flex items-center justify-between relative ${isMcaOrMba ? "py-4" :"py-7"}  lg:py-2 xl:py-3 container-padding container-padding`}>
            <div className="lg:flex hidden  flex-row items-center  relative">
              <Link href={"/"}>
                <Image
                  src={"/svgs/logos/logo.svg"}
                  width={300}
                  height={80}
                  priority
                  alt="logo"
                  onClick={() => {
                    router.push("/");
                  }}
                  className="object-contain cursor-pointer h-16 w-auto"
                />
              </Link>
              {isMcaOrMba && (
                <>
                  <div className="h-16 w-px bg-gray-300 mx-2"></div>
                  <Image
                    src={"/svgs/logos/QE SVG.svg"}
                     width={300}
                  height={80}
                    priority
                    alt="QSpiders logo"
                    className="object-cover h-16 w-[530px] xl:w-[350px]"
                  />
                </>
              )}
            </div>
            {isMcaOrMba &&
               <div className="flex lg:hidden flex-row items-center  relative">
              <Link href={"/"}>
                <Image
                  src={"/svgs/logos/logo.svg"}
                  width={200}
                  height={60}
                  priority
                  alt="logo"
                  onClick={() => {
                    router.push("/");
                  }}
                  className="object-contain cursor-pointer h-8 w-32"
                />
              </Link>
              {isMcaOrMba && (
                <>
                  <div className="h-12 w-px bg-gray-300 mx-1"></div>
                  <Image
                    src={"/svgs/logos/QE SVG.svg"}
                    width={200}
                  height={60}
                    priority
                    alt="QSpiders logo"
                    className="object-cover h-8 w-42"
                  />
                </>
              )}
            </div>
            }
           { !isMcaOrMba && <div className="flex lg:hidden flex-row items-center gap-2 sm:gap-3 relative">
              <Link href={"/"}>
                <Image
                  src={"/svgs/logos/logo.svg"}
                  width={200}
                  height={60}
                  priority
                  alt="logo"
                  onClick={() => {
                    router.push("/");
                  }}
                  className="object-contain cursor-pointer h-12 w-auto"
                />
              </Link>
            </div>}
            {/* Navbar Items */}
            <div>
              <NavbarItems />
              {/* Navbar Items */}
            </div>
          </div>
          <div className="block lg:hidden absolute top-1/2 -translate-y-1/2 right-4 z-20">
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
