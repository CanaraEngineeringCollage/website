"use client";
import { ListItem, Menu, MenuHandler, MenuList, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { College, Employees, Certicficate, HandShake } from "../../../../components/Icons/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
const LeadearShiplinks = [
  { href: "/about/our-founder", label: "Our Founder" },
  { href: "/about/our-management", label: "Our Management" },
  { href: "/about/governing-council", label: "Governing Council" },
  { href: "/about/key-functionaries-and-hods", label: "Key Functionaries & HODs" },
  { href: "/about/educators-administrators", label: "Educators & Administrators" },
  { href: "/about/distinctive-practices", label: "Distinctive & Practices" },
];

export default function AboutAlumni() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Menu open={true} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
      <MenuHandler>
        <Typography as="div" className="text-sm xl:text-base">
          <ListItem
            placeholder={"Life At Canara"} // ✅ Added placeholder for better UX
            role="button" // ✅ Added role for accessibility: required for aria-* to be valid
            aria-expanded={isMenuOpen} // ✅ Added to indicate the toggle state
            aria-controls="about-menu" // ✅ Optional: add an ID to the target menu section if applicable
            aria-haspopup="true" // ✅ Indicates that it opens a submenu
            tabIndex={0} // ✅ Ensures the element is keyboard focusable
            className={`flex items-center gap-2 ${
              isMenuOpen ? "opacity-100" : "opacity-80"
            } py-2 pr-4 transition-colors ease-in-out duration-300 hover:text-we bg-transparent font-semibold hover:bg-transparent ${
              pathname.includes("about") ? `border-[#005580] border-b-2 text-[#005580]` : " text-[#2884CA]"
            } shadow-none rounded-none outline-none focus:ring-0`}
            selected={isMenuOpen || isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
          >
            About
            <FaChevronUp strokeWidth={2.5} className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "" : "rotate-180"}`} />
          </ListItem>
        </Typography>
      </MenuHandler>

      <MenuList className="w-full bg-transparent text-black p-0  z-100 border-none !border-0 shadow-none flex justify-center pb-4 outline-none focus:ring-0">
        <div className="w-full  max-w-screen-2xl bg-white z-100 shadow-md rounded-xl flex justify-center gap-8 p-8 border-none outline-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mx-16 w-full">
            {/* Column 1 */}
              <div className="flex gap-4 pr-4 border-r border-gray-300">
              <div className="flex flex-col gap-2">
                <ul className="list-none text-gray-500 leading-10">
                  <Link href="/about/about-cec">
                    <li className={`${pathname.includes("/about/about-cec") ? `text-primary font-bold` : " text-gray-500"} hover:text-primary`}>
                      About Alumni
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex gap-4 pr-4 border-r border-gray-300">
              <div className="flex flex-col gap-2">
                <ul className="list-none text-gray-500 leading-10">
                  <Link href="/about/about-cec">
                    <li className={`${pathname.includes("/about/about-cec") ? `text-primary font-bold` : " text-gray-500"} hover:text-primary`}>
                      President's Message
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex gap-4 pr-4 border-r border-gray-300">
              <div className="flex flex-col gap-2">
                <ul className="list-none text-gray-500 leading-10">
                  <Link href="/about/about-cec">
                    <li className={`${pathname.includes("/about/about-cec") ? `text-primary font-bold` : " text-gray-500"} hover:text-primary`}>
                      Secretary's Message
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            {/* Column 4 */}
               <div className="flex gap-4 pr-4 border-r border-gray-300">
              <div className="flex flex-col gap-2">
                <ul className="list-none text-gray-500 leading-10">
                  <Link href="/about/about-cec">
                    <li className={`${pathname.includes("/about/about-cec") ? `text-primary font-bold` : " text-gray-500"} hover:text-primary`}>
                      Advisory Committee
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
              <div className="flex gap-4 pr-4 border-r border-gray-300">
              <div className="flex flex-col gap-2">
                <ul className="list-none text-gray-500 leading-10">
                  <Link href="/about/about-cec">
                    <li className={`${pathname.includes("/about/about-cec") ? `text-primary font-bold` : " text-gray-500"} hover:text-primary`}>
                     Office Bearers
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="flex gap-4 ">
              <div className="flex flex-col gap-2">
                <ul className="list-none text-gray-500 leading-10">
                  <Link href="/about/about-cec">
                    <li className={`${pathname.includes("/about/about-cec") ? `text-primary font-bold` : " text-gray-500"} hover:text-primary`}>
                     Acheivements
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </MenuList>
    </Menu>
  );
}
