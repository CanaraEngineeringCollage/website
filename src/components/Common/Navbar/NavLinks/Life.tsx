"use client";
import {  ListItem, Menu, MenuHandler, MenuList, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { Campus, College, Innovation } from "@/components/Icons/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Life() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
      <MenuHandler>
        <Typography color="inherit" as="div" variant="small" className="text-sm xl:text-base">
          <ListItem
          placeholder={"Life At Canara"} // ✅ Added placeholder for better UX
          role="button" // ✅ Added role for accessibility: required for aria-* to be valid
      aria-expanded={isMenuOpen} // ✅ Added to indicate the toggle state
      aria-controls="about-menu" // ✅ Optional: add an ID to the target menu section if applicable
      aria-haspopup="true" // ✅ Indicates that it opens a submenu
      tabIndex={0} // ✅ Ensures the element is keyboard focusable
            className={`flex items-center gap-2 py-2 pr-4 ${
              isMenuOpen ? "opacity-100" : "opacity-80"
            } text-webGreen1 bg-transparent font-semibold hover:bg-transparent 
            rounded-none shadow-none ${pathname.includes("/campus-facilities")||pathname.includes("/entrepreneurship-cell")||pathname.includes("/physical-education")?`border-[#005580] border-b-2 text-[#005580]`:" text-[#2884CA]"} text-[#2884CA] outline-none focus:ring-0 focus:outline-none`}
            selected={isMenuOpen || isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
          >
            Life At Canara
            <FaChevronUp strokeWidth={2.5} className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "" : "rotate-180"}`} />
          </ListItem>
        </Typography>
      </MenuHandler>

      <MenuList
        className="w-full bg-transparent p-0 border-none text-black cursor-pointer z-100 !border-0 shadow-none flex justify-center pb-4 
        outline-none focus:ring-0 focus:outline-none"
      >
        <div className="w-full max-w-screen-2xl bg-white shadow-md rounded-xl flex justify-center gap-8 p-8 border-none outline-none">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 mx-16 w-full">
            {/* Column 1 */}
            <div className="flex gap-4 pr-4 border-r border-gray-300">
              <div className="flex items-start">
                <College />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Campus Facilities</span>
                <ul className="list-none text-gray-500 leading-10">
                  <Link href="/campus-facilities/infrastructure"><li className={`${pathname.includes("/campus-facilities/infrastructure") ? `text-primary font-bold` : "text-gray-500"} hover:text-primary `}>Infrastructure</li></Link>
                  <Link href="/campus-facilities/hostel-life"><li className={`${pathname.includes("/campus-facilities/hostel-life") ? `text-primary font-bold` : "text-gray-500"} hover:text-primary `}>Hostel Life</li></Link>
                  <Link href="/campus-facilities/studentlife-engagement"><li className={`${pathname.includes("/campus-facilities/studentlife-engagement") ? `text-primary font-bold` : "text-gray-500"} hover:text-primary `}>Student Life & Engagement</li></Link>
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            {/* <div className="flex gap-4 pr-4 border-r border-gray-300">
              <div className="flex items-start">
                <StudentsLife />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Student Life & Engagement</span>
                <ul className="list-none text-gray-500 leading-10">
                  <li>Cultural Activities</li>
                  <li>Technical Activities</li>
                  <li>NSS</li>
                </ul>
              </div>
            </div> */}

            {/* Column 3 */}
            <div className="flex gap-4 pr-4 border-r border-gray-300">
              <div className="flex items-start">
                <Innovation />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Innovation & Health</span>
                <ul className="list-none text-gray-500 leading-10">
                  <Link href="/entrepreneurship-cell"><li className={`${pathname.includes("/entrepreneurship-cell") ? `text-primary font-bold` : "text-gray-500"} hover:text-primary `}>Entrepreneurship Cell</li></Link>
                  <Link href="/physical-education"><li className={`${pathname.includes("/physical-education") ? `text-primary font-bold` : "text-gray-500"} hover:text-primary `}>Physical Education</li></Link>
                </ul>
              </div>
            </div>

            {/* Column 4 */}
            <div className="flex gap-4">
              <div className="flex items-start">
                <Campus />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Campus Beats</span>
                <ul className="list-none text-gray-500 leading-10">
                <Link href="/events">
                  <li className={`${pathname.includes("/events") ? `text-primary font-bold` : "text-gray-500"} hover:text-primary `}>Calendar of Events</li>
                </Link>
                <Link href="/alumini">
                
                  <li className={`${pathname.includes("/alumini") ? `text-primary font-bold` : "text-gray-500"} hover:text-primary `}>Alumni</li>
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
