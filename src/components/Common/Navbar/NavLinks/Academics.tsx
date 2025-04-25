"use client";
import { ListItem, Menu, MenuHandler, MenuList, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { Book, Examination, Learning, Notpad } from "@/components/Icons/Icons";
import Link from "next/link";
import { departments } from "@/utils/pagesData/navigation";

export default function Academics() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
      <MenuHandler>
        <Typography as="div" variant="small" className="text-sm xl:text-base">
          <ListItem
            className={`flex items-center ${
              isMenuOpen ? "opacity-100" : "opacity-80"
            } gap-2 py-2 pr-4 text-webGreen1 transition-colors ease-in-out duration-300 hover:text-webGreen1
            bg-transparent  text-[#2884CA] font-semibold hover:bg-transparent border-none outline-none focus:ring-0 focus:outline-none`}
            selected={isMenuOpen || isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
          >
            Academics
            <FaChevronUp strokeWidth={2.5} className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "" : "rotate-180"}`} />
          </ListItem>
        </Typography>
      </MenuHandler>

      <MenuList
        className="w-full bg-transparent p-0 border-none shadow-none cursor-pointer flex justify-center pb-4 
        outline-none focus:ring-0 focus:outline-none hover:border-none text-black z-100"
      >
        <div
          className="w-full max-w-screen-2xl bg-white shadow-md rounded-xl flex justify-center gap-8 p-8 
        border-none outline-none hover:border-none"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-16 w-full">
            {/* Column 1 */}
            <div className="flex gap-4 pr-4 border-r border-gray-300 ">
              <div className="flex items-start">
                <Notpad />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Curriculum & Programs</span>
                <ul className="list-none text-gray-500 leading-10 cursor-pointer">
                  <Link href="/academics/academic-overview">
                    <li>Academic Overview</li>
                  </Link>
                  <Link href="/academics/programs">
                    <li>Programs</li>
                  </Link>
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex gap-4 pr-4 border-r border-gray-300 ">
              <div className="flex items-start">
                <Book />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Departments</span>
                <ul className="list-none text-gray-500 leading-10 cursor-pointer">
                  {departments.map((dept, index) => (
                    <li key={index}>
                      <Link href={dept.link} className="hover:text-gray-900 transition-colors duration-200">
                        {dept.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex gap-4 pr-4 border-r border-gray-300 ">
              <div className="flex items-start">
                <Examination />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Examinations & Records</span>
                <ul className="list-none text-gray-500 leading-10 cursor-pointer">
                  <li>Timetables</li>
                  <li>Circulars</li>
                  <li>Marks & Attendance</li>
                </ul>
              </div>
            </div>

            {/* Column 4 */}
            <div className="flex gap-4 hover:border-none">
              <div className="flex items-start">
                <Learning />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Learning Hub</span>
                <ul className="list-none text-gray-500 leading-10 cursor-pointer">
                  <Link href="/academics/learning-hub">
                    <li>Resources</li>
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
