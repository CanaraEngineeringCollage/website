"use client";
import {  ListItem, Menu, MenuHandler, MenuList, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { Campus, College, StudentsLife, Innovation } from "@/components/Icons/Icons";
import Link from "next/link";

export default function Life() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
      <MenuHandler>
        <Typography color="inherit" as="div" variant="small" className="text-sm xl:text-base">
          <ListItem
            className={`flex items-center gap-2 py-2 pr-4 ${
              isMenuOpen ? "opacity-100" : "opacity-80"
            } text-webGreen1 bg-transparent font-semibold hover:bg-transparent 
            border-none text-[#2884CA] outline-none focus:ring-0 focus:outline-none`}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-16 w-full">
            {/* Column 1 */}
            <div className="flex gap-4 pr-4 border-r border-gray-300">
              <div className="flex items-start">
                <College />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Campus Facilities</span>
                <ul className="list-none text-gray-500 leading-10">
                  <Link href="/campus-facilities/infrastructure"><li>Infrastructure</li></Link>
                  <Link href="/campus-facilities/hostel-life"><li>Hostel Life</li></Link>
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex gap-4 pr-4 border-r border-gray-300">
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
            </div>

            {/* Column 3 */}
            <div className="flex gap-4 pr-4 border-r border-gray-300">
              <div className="flex items-start">
                <Innovation />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Innovation & Health</span>
                <ul className="list-none text-gray-500 leading-10">
                  <li>Entrepreneurship Cell</li>
                  <li>Physical Education</li>
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
                  <li>Calendar of Events</li>
                  <li>Alumni</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </MenuList>
    </Menu>
  );
}
