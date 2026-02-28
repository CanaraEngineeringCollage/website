"use client";
import Link from "next/link";
import About from "../NavLinks/About";
import Academics from "../NavLinks/Academics";
import Life from "../NavLinks/Life";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import ContactFormModal from "@/components/Modal/Modal";
import Button from "../../Button/Button";

function NavbarItems() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <>
      <div className="hidden nav-items lg:flex text-secondary  flex-row justify-between flex-1">
        <div className="   text-sm xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center">
          <About />
        </div>
        <div className="  text-sm xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center">
          <Suspense fallback={null}>
            <Academics />
          </Suspense>
        </div>
        <div
          id="admission"
          className=" opacity-80 whitespace-nowrap text-[#2884CA] text-base hover:text-[#005580] xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center"
        >
          <Link
            href={"/admission"}
            className={`font-poppins ${
              pathname === "/admission"
                ? "border-b-2 px-3  py-1.5 border-[#005580] text-[#005580]"
                : " text-[#2884CA] px-3  py-1.5 hover:text-[#005580]"
            }  `}
          >
            Admissions
          </Link>
        </div>
        <div
          id="life"
          className="  group text-sm xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center"
        >
          <Life />
        </div>
        <div
          id="research"
          className=" opacity-80 text-[#2884CA] whitespace-nowrap font-poppins text-base xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center"
        >
          <Link
            href={"/research-development-consultancy"}
            className={`font-poppins ${
              pathname === "/research-development-consultancy"
                ? "border-b-2 px-3  py-1.5 border-[#005580] text-[#005580]"
                : " text-[#2884CA] py-1.5 px-3 hover:text-[#005580]"
            }  `}
          >
            {" "}
            Research
          </Link>
        </div>
        <div
          id="placement"
          className=" opacity-80 text-[#2884CA] whitespace-nowrap font-poppins text-base xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center"
        >
          <Link
            href={"/training-placements"}
            className={`font-poppins ${
              pathname === "/training-placements"
                ? "border-b-2 px-3  py-1.5 border-[#005580] text-[#005580]"
                : " text-[#2884CA] py-1.5 px-3 hover:text-[#005580]"
            }  `}
          >
            {" "}
            Training & Placements
          </Link>
        </div>
        <div
          id="apply"
          className=" font-poppins text-base xl:text-base whitespace-nowrap pl-3 font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center"
        >
          {/* <button
            aria-label="Apply Now Button"
            onClick={() => setModalOpen(true)}
            className="bg-primary text-white px-7 py-2.5 cursor-pointer rounded-[30px]"
          >
            Apply Now
          </button> */}

          <Button
            noPadding={true}
            variant="primary1"
            aria-label="Apply Now Button"
            onClick={() => setModalOpen(true)}
            className="bg-primary text-white  px-7 py-2.5 cursor-pointer rounded-[30px] "
          >
            Apply Now
          </Button>
        </div>
      </div>
      <ContactFormModal isOpen={modalOpen} onClose={setModalOpen} />
    </>
  );
}

export default NavbarItems;
