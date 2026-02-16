"use client";
import { ListItem, Menu, MenuHandler, MenuList, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { College, Employees, Certicficate, HandShake } from "../../../../components/Icons/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GlimpsesModal from "../../GlimpsesModal/GlimpsesModal"; // Import the modal
const LeadearShiplinks = [
  { href: "/about/our-founder", label: "Our Founder" },
  { href: "/about/our-management", label: "Our Management" },
  { href: "/about/governing-council", label: "Governing Council" },
  { href: "/about/key-functionaries-and-hods", label: "Key Functionaries & HODs" },
  { href: "/about/educators-administrators", label: "Educators & Administrators" },
  { href: "/about/distinctive-practices", label: "Distinctive & Practices" },
];

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGlimpsesModalOpen, setIsGlimpsesModalOpen] = useState(false); // State for Glimpses Modal
  const pathname = usePathname();

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
      <MenuHandler>
        <Typography as="div" className="text-base xl:text-base">
          <ListItem
            placeholder={"Life At Canara"} // ✅ Added placeholder for better UX
            role="button" // ✅ Added role for accessibility: required for aria-* to be valid
            aria-expanded={isMenuOpen} // ✅ Added to indicate the toggle state
            aria-controls="about-menu" // ✅ Optional: add an ID to the target menu section if applicable
            aria-haspopup="true" // ✅ Indicates that it opens a submenu
            tabIndex={0} // ✅ Ensures the element is keyboard focusable
            className={`flex items-center text-base xl:text-base whitespace-nowrap gap-2 py-1.5 ${
              isMenuOpen ? "opacity-100" : "opacity-80"
            }  transition-colors ease-in-out duration-300 hover:text-we bg-transparent font-semibold hover:bg-transparent ${
              pathname.includes("about") && pathname !== "/explore/central-library/about-library"
                ? `border-[#005580] border-b-2 text-[#005580]`
                : " text-[#2884CA] hover:text-[#005580]"
            } shadow-none rounded-none outline-none focus:ring-0`}
            selected={isMenuOpen || isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
          >
            About
            <FaChevronUp strokeWidth={2.5} className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "" : "rotate-180"}`} />
          </ListItem>
        </Typography>
      </MenuHandler>

      <MenuList className="w-full bg-transparent text-[#1D1D1F] p-0  z-100 border-none !border-0 shadow-none flex justify-center pb-4 outline-none focus:ring-0">
        <div className="w-full  max-w-screen-2xl bg-white z-100 shadow-md rounded-xl flex justify-center gap-8 p-8 border-none outline-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-16 w-full">
            {/* Column 1 */}
            {/* Column 1 — Campus Legacy */}
            <div className="flex gap-4 pr-4 border-r border-gray-300">
              <div className="flex items-start">
                <College />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Campus Legacy</span>
                <ul className="list-none text-gray-500 leading-normal my-2 space-y-4 cursor-pointer">
                  <li>
                    <Link
                      href="/about/about-cec"
                      className={`${pathname.includes("/about/about-cec") ? "text-primary font-bold" : "text-gray-500"} hover:text-primary`}
                    >
                      About the CEC Campus
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/history-of-cec"
                      className={`${pathname.includes("/about/history-of-cec") ? "text-primary font-bold" : "text-gray-500"} hover:text-primary`}
                    >
                      History of CEC
                    </Link>
                  </li>
                  <li>
                    <div
                      role="button"
                      onClick={() => {
                        setIsGlimpsesModalOpen(true);
                        setIsMenuOpen(false); // Close menu when modal opens
                      }}
                      className={`${isGlimpsesModalOpen ? "text-primary font-bold" : "text-gray-500"} hover:text-primary cursor-pointer`}
                    >
                      Glimpses of CEC
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2 — Leadership & Administration */}
            <div className="flex gap-4 pr-4 border-r border-gray-300">
              <div className="flex items-start">
                <Employees />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Leadership & Administration</span>
                <ul className="list-none text-gray-500 leading-normal my-2 space-y-4 cursor-pointer">
                  {LeadearShiplinks.map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} className={`${pathname.includes(href) ? "text-primary font-bold" : "text-gray-500"} hover:text-primary`}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 3 — Accreditations & Compliance */}
            <div className="flex gap-4 pr-4 border-r border-gray-300">
              <div className="flex items-start">
                <Certicficate />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Accreditations & Compliance</span>
                <ul className="list-none text-gray-500 leading-normal my-2 space-y-4 cursor-pointer">
                  <li>
                    <Link
                      href="/about/mandatory-disclosure"
                      className={`${
                        pathname.includes("/about/mandatory-disclosure") ? "text-primary font-bold" : "text-gray-500"
                      } hover:text-primary`}
                    >
                      Mandatory Disclosure
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 4 — Student Support & Welfare */}
            <div className="flex gap-4">
              <div className="flex items-start">
                <HandShake />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Student Support & Welfare</span>
                <ul className="list-none text-gray-500 leading-normal my-2 space-y-4 cursor-pointer">
                  <li>
                    <Link
                      href="/about/grievance-redressal-cell"
                      className={`${
                        pathname.includes("/about/grievance-redressal-cell") ? "text-primary font-bold" : "text-gray-500"
                      } hover:text-primary`}
                    >
                      Grievance Redressal Cell
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/student-welfare-department"
                      className={`${
                        pathname.includes("/about/student-welfare-department") ? "text-primary font-bold" : "text-gray-500"
                      } hover:text-primary`}
                    >
                      Student Welfare Department
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </MenuList>
      {/* Glimpses Modal */}
      <GlimpsesModal isOpen={isGlimpsesModalOpen} onClose={setIsGlimpsesModalOpen} />
    </Menu>
  );
}
