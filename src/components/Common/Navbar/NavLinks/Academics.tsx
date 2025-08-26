"use client";
import { ListItem, Menu, MenuHandler, MenuList, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { Book, Examination, Learning, Notpad } from "@/components/Icons/Icons";
import Link from "next/link";
import { departments } from "@/utils/pagesData/navigation";
import { usePathname, useSearchParams } from "next/navigation";

export default function Academics() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
      <MenuHandler>
        <Typography as="div" variant="small" className="text-sm xl:text-base">
          <ListItem
            placeholder={"Life At Canara"} // ✅ Added placeholder for better UX
            role="button" // ✅ Added role for accessibility: required for aria-* to be valid
            aria-expanded={isMenuOpen} // ✅ Added to indicate the toggle state
            aria-controls="about-menu" // ✅ Optional: add an ID to the target menu section if applicable
            aria-haspopup="true" // ✅ Indicates that it opens a submenu
            tabIndex={0} // ✅ Ensures the element is keyboard focusable
            className={`flex items-center ${
              isMenuOpen ? "opacity-100" : "opacity-80"
            } gap-2 py-2 pr-4 text-webGreen1 transition-colors ease-in-out duration-300 hover:text-webGreen1
            bg-transparent   font-semibold hover:bg-transparent ${
              pathname.includes("academics") || pathname.includes("/department") ? `border-[#005580] border-b-2 text-[#005580]` : " text-[#2884CA]"
            } shadow-none rounded-none outline-none focus:ring-0 focus:outline-none`}
            selected={isMenuOpen || isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
          >
            Academics
            <FaChevronUp strokeWidth={2.5} className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "" : "rotate-180"}`} />
          </ListItem>
        </Typography>
      </MenuHandler>

      <MenuList
        className="w-full bg-transparent p-0 border-none shadow-none  flex justify-center pb-4 
        outline-none focus:ring-0 focus:outline-none hover:border-none  text-[#1D1D1F] z-100"
      >
        <div
          className="w-full max-w-screen-2xl bg-white shadow-md rounded-xl flex justify-center gap-8 lg:py-8 xl:p-8 
        border-none outline-none hover:border-none"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 xl:grid-cols-4 lg:gap-0 xl:gap-8 mx-16 w-full">
            {/* Column 1 */}
            {/* <div className="flex lg:col-span-2 xl:col-auto gap-4 pr-4 border-r border-gray-300 ">
              <div className="flex items-start">
                <Notpad />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Curriculums</span>
                <ul className="list-none text-gray-500 leading-10 cursor-pointer">
                  <Link href="/academics/academic-overview">
                    <li
                      className={`${
                        pathname.includes("/academics/academic-overview") ? `text-primary font-bold` : "text-gray-500"
                      } hover:text-primary `}
                    >
                      Academic Overview
                    </li>
                  </Link> */}
                  {/* <Link href="/academics/programs">
                    <li className={`${pathname.includes("/academics/programs") ? `text-primary font-bold` : "text-gray-500"} hover:text-primary `}>Programs</li>
                  </Link> */}
                {/* </ul>
              </div>
            </div> */}

            {/* Column 2 */}
            <div className="flex lg:col-span-4 xl:col-auto lg:gap-2 xl:gap-4 pr-4 border-r border-gray-300 ">
              <div className="flex lg:ml-3 xl:ml-0 items-start">
                <Book />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Departments</span>
                <ul className="list-none text-gray-500 ">
                  {departments.map((dept, index) => (
                    <li key={index} className="leading-10 ">
                      <Link
                        href={dept.link}
                        className={`${pathname.includes(dept.link) ? "text-primary cursor-pointer font-bold" : "text-gray-500"} hover:text-primary`}
                      >
                        {dept.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex lg:col-span-4 xl:col-auto gap-4 pr-4 border-r border-gray-300 ">
              <div className="flex lg:ml-3 xl:ml-0 items-start">
                <Examination />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Examinations & Records</span>
                <ul className="list-none text-gray-500 leading-10  ">
                  <Link href="/academics/examination-records?tab=marks">
                    <li className={`${tab === "marks" ? `text-primary font-bold` : "text-gray-500"} hover:text-primary cursor-pointer`}>Marks & Attendance</li>
                  </Link>
                  <Link href="/academics/examination-records?tab=circulars">
                    <li className={`${tab === "circulars" ? `text-primary font-bold` : "text-gray-500"} hover:text-primary cursor-pointer`}>Circulars</li>
                  </Link>
                  <Link href="/academics/examination-records?tab=tt">
                    <li className={`${tab === "tt" ? `text-primary font-bold` : "text-gray-500"} hover:text-primary cursor-pointer`}>Timetables</li>
                  </Link>
                </ul>
              </div>
            </div>

            {/* Column 4 */}
            <div className="flex lg:col-span-2 xl:col-auto gap-4 hover:border-none">
              <div className="flex lg:ml-3 xl:ml-0 items-start">
                <Learning />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Learning Hub</span>
                <ul className="list-none text-gray-500 leading-10 cursor-pointer">
                  <Link href="/academics/learning-hub">
                    <li
                      className={`${pathname.includes("/academics/learning-hub") ? `text-primary font-bold` : "text-gray-500"} hover:text-primary `}
                    >
                      Resources
                    </li>
                  </Link>
                  <Link href="/academics/research">
                    <li className={`${pathname.includes("/academics/research") ? `text-primary font-bold` : "text-gray-500"} hover:text-primary `}>
                      Research
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
