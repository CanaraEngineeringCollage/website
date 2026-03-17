"use client";
import { ListItem, Menu, MenuHandler, MenuList, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { Campus, College, Innovation, Employees, Certicficate, HandShake, Alumni } from "@/components/Icons/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
const LeadearShiplinks = [
  { href: "/our-founder", label: "Our Founder" },
  { href: "/our-management", label: "Our Management" },
  { href: "/governing-council", label: "Governing Council" },
  { href: "/key-functionaries-and-hods", label: "Key Functionaries & HODs" },
  { href: "/educators-administrators", label: "Educators & Administrators" },
  { href: "/distinctive-practices", label: "Distinctive & Practices" },
];
export default function Life() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const renderBorder =
    pathname.includes("/campus-facilities") ||
    pathname.includes("/entrepreneurship-cell") ||
    pathname.includes("/physical-education") ||
    pathname.includes("/hostel-life") ||
    pathname.includes("/central-library") ||
    pathname.includes("/cif") ||
    (pathname.includes("/alumni") && pathname !== "/alumni/about-alumni") ||
    pathname.includes("/student-achievements") ||
    pathname.includes("/studentlife-engagement") ||
    pathname.includes("/campus-buzz") ||
    pathname.includes("/infrastructure");

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
      <MenuHandler>
        <Typography color="inherit" as="div" variant="small" className="text-base xl:text-base">
          <ListItem
            placeholder={"Life At Canara"} // ✅ Added placeholder for better UX
            role="button" // ✅ Added role for accessibility: required for aria-* to be valid
            aria-expanded={isMenuOpen} // ✅ Added to indicate the toggle state
            aria-controls="about-menu" // ✅ Optional: add an ID to the target menu section if applicable
            aria-haspopup="true" // ✅ Indicates that it opens a submenu
            tabIndex={0} // ✅ Ensures the element is keyboard focusable
            className={`flex items-center text-base cursor-pointer xl:text-base whitespace-nowrap gap-2 py-1.5  ${
              isMenuOpen ? "opacity-100" : "opacity-80"
            } text-webGreen1 bg-transparent font-semibold hover:bg-transparent  
            rounded-none shadow-none ${
              renderBorder ? `border-[#005580] border-b-2 text-[#005580]` : " text-[#2884CA] hover:text-[#005580]"
            } text-[#2884CA] outline-none focus:ring-0 focus:outline-none`}
            selected={isMenuOpen || isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
          >
            Life At Canara
            <FaChevronUp strokeWidth={2.5} className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "" : "rotate-180"}`} />
          </ListItem>
        </Typography>
      </MenuHandler>

      <MenuList className="w-full bg-transparent text-[#1D1D1F] p-0  z-100 border-none !border-0 shadow-none flex justify-center pb-4 outline-none focus:ring-0">
        <div className="w-full   bg-white z-100 shadow-md rounded-xl flex justify-center gap-8 p-8 border-none outline-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-24 w-full">
            {/* Column 1 */}
            {/* Column 1 — Campus Legacy */}
            <div className="flex gap-4 pr-4 border-r border-gray-300">
              <div className="flex items-start">
                <College />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Explore</span>
                <ul className="list-none text-gray-500 leading-normal my-2 space-y-4 cursor-pointer">
                  <li>
                    <Link
                      href="/infrastructure"
                      className={`${pathname.includes("/infrastructure") ? `text-primary font-bold` : "text-gray-500"} hover:text-primary `}
                    >
                      Infrastructure
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hostel-life"
                      className={`${pathname.includes("/hostel-life") ? `text-primary font-bold` : "text-gray-500"} hover:text-primary `}
                    >
                      Hostel Life
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/central-library"
                      className={`${pathname.includes("/central-library") ? `text-primary font-bold` : "text-gray-500"} hover:text-primary `}
                    >
                      Central Library
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      href="/physical-education"
                      className={`${pathname.includes("/physical-education") ? `text-primary font-bold` : "text-gray-500"} hover:text-primary `}
                    >
                      Physical Education
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2 — Leadership & Administration */}
            <div className="flex gap-4 pr-4 border-r border-gray-300">
              <div className="flex items-start">
                <Innovation />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Innovation</span>
                <ul className="list-none text-gray-500 leading-normal my-2 space-y-4 cursor-pointer">
                  <li>
                    <Link
                      href="/entrepreneurship-cell"
                      className={`${pathname.includes("/entrepreneurship-cell") ? `text-primary font-bold` : "text-gray-500"} hover:text-primary `}
                    >
                      Entrepreneurship Cell
                    </Link>
                  </li>
                  <li>
                    <Link href="/cif" className={`${pathname.includes("/cif") ? `text-primary font-bold` : "text-gray-500"} hover:text-primary `}>
                      Canara Innovation Foundation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4 pr-4 border-r border-gray-300">
              <div className="flex items-start">
                <Alumni />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Alumni</span>
                <ul className="list-none text-gray-500 leading-normal my-2 space-y-4 cursor-pointer">
                  <li>
                    {" "}
                    <Link
                      href="/alumni"
                      className={`${pathname.includes("/alumni") ? `text-primary font-bold` : "text-gray-500"} hover:text-primary `}
                    >
                      Alumni
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Column 3 — Accreditations & Compliance */}
            <div className="flex gap-4 pr-4  border-gray-300">
              <div className="flex items-start">
                <Campus />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Campus Beats</span>
                <ul className="list-none text-gray-500 leading-normal my-2 space-y-4 cursor-pointer">
                  <li>
                    {" "}
                    <Link
                      href="/student-achievements"
                      className={`${pathname.includes("/student-achievements") ? `text-primary font-bold` : "text-gray-500"} hover:text-primary `}
                    >
                      Student Achievements
                    </Link>
                  </li>

                  <li>
                    {" "}
                    <Link
                      href="/studentlife-engagement"
                      className={`${pathname.includes("/studentlife-engagement") ? `text-primary font-bold` : "text-gray-500"} hover:text-primary `}
                    >
                      Student Life & Engagement
                    </Link>
                  </li>

                  <li>
                    {" "}
                    <Link
                      href="/campus-buzz"
                      className={`${pathname.includes("/campus-buzz") ? `text-primary font-bold` : "text-gray-500"} hover:text-primary `}
                    >
                      Campus Buzz
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 4 — Student Support & Welfare */}
          </div>
        </div>
      </MenuList>
    </Menu>
  );
}
