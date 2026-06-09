"use client";
import { ListItem, Menu, MenuHandler, MenuList, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { Book, Examination, Learning, Notpad } from "@/components/Icons/Icons";
import Link from "next/link";
import { departments } from "@/utils/pagesData/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import formatDepartmentName from "@/utils/formatDepartmentName";

export default function Academics() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  // Separate PG (MCA/MBA) and UG Departments to avoid duplicates
  const pgDepartments = departments.filter((dept) =>
    dept.title.toLowerCase().includes("mca") || dept.title.toLowerCase().includes("mba")
  );
  const ugDepartments = departments.filter((dept) =>
    !dept.title.toLowerCase().includes("mca") && !dept.title.toLowerCase().includes("mba")
  );

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
      <MenuHandler>
        <Typography as="div" role="button" variant="small" className="text-base xl:text-base">
          <ListItem
            placeholder={"Life At Canara"}
            role="button"
            aria-expanded={isMenuOpen}
            aria-controls="about-menu"
            aria-label="Academics"
            aria-haspopup="true"
            tabIndex={0}
            className={`flex items-center text-base cursor-pointer xl:text-base whitespace-nowrap py-1.5 ${
              isMenuOpen ? "opacity-100" : "opacity-80"
            } gap-2  text-webGreen1 transition-colors ease-in-out duration-300 hover:text-webGreen1
            bg-transparent   font-semibold hover:bg-transparent ${
              pathname.includes("/department") || pathname.includes("/examination-records") || pathname === "/research"
                ? `border-[#005580] border-b-2 text-[#005580]`
                : " text-[#2884CA] hover:text-[#005580]"
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
          className="w-full  bg-white shadow-md  rounded-xl flex justify-center gap-8 lg:py-8 xl:p-8 
        border-none outline-none hover:border-none"
        >
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-12  lg:gap-0 xl:gap-8 mx-16 w-full">
            
            {/* Column 1 — Main Departments (UG) */}
            <div className="flex lg:col-span-3 gap-4 pr-4 border-r border-gray-300">
              <div className="flex lg:ml-3 xl:ml-0 items-start">
                <Book />
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Departments</span>
                <ul className="list-none text-gray-500 leading-normal my-2 space-y-4 cursor-pointer">
                  {ugDepartments.map((dept, index) => (
                    <li key={index}>
                      <Link
                        href={dept.link}
                        className={`${pathname.includes(dept.link) ? "text-primary font-bold" : "text-gray-500"} hover:text-primary`}
                      >
                        {formatDepartmentName(dept.title)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2 — PG Departments (MCA & MBA) */}
            <div className="flex lg:col-span-3 gap-4 pr-4 border-r border-gray-300">
              <div className="flex lg:ml-3 xl:ml-0 items-start">
                <Book /> {/* You can swap this with another icon if you prefer */}
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">PG Departments</span>
                <ul className="list-none text-gray-500 leading-normal my-2 space-y-4 cursor-pointer">
                  {/* If MCA/MBA exist in your navigation.js array, map them. Otherwise, fall back to hardcoded links */}
                  {pgDepartments.length > 0 ? (
                    pgDepartments.map((dept, index) => (
                      <li key={index}>
                        <Link
                          href={dept.link}
                          className={`${pathname.includes(dept.link) ? "text-primary font-bold" : "text-gray-500"} hover:text-primary`}
                        >
                          {formatDepartmentName(dept.title)}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <>
                     
                      <li>
                        <Link
                          href="/department/mba"
                          className={`${pathname.includes("/department/mba") ? "text-primary font-bold" : "text-gray-500"} hover:text-primary`}
                        >
                          MBA
                        </Link>
                      </li>
                       <li>
                        <Link
                          href="/department/mca"
                          className={`${pathname.includes("/department/mca") ? "text-primary font-bold" : "text-gray-500"} hover:text-primary`}
                        >
                          MCA
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            {/* Column 3 — Learning Hub */}
            <div className="flex lg:col-span-3 border-r border-gray-300  gap-4 ">
              <div className="flex lg:ml-3 xl:ml-0 items-start">
                <Learning />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Learning Hub</span>
                <ul className="list-none text-gray-500 leading-normal space-y-4 my-2 cursor-pointer">
                  <li>
                    <Link
                      href="https://digital.canaraengineering.in/"
                      target="_blank" rel="noopener noreferrer"
                      className={`${pathname.includes("/learning-hub") ? "text-primary font-bold" : "text-gray-500"} hover:text-primary`}
                    >
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link href="/research" className={`${pathname === "/research" ? "text-primary font-bold" : "text-gray-500"} hover:text-primary`}>
                      Research at CEC
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 4 — Examinations & Records */}
            <div className="flex lg:col-span-3 gap-4 pr-4 ">
              <div className="flex lg:ml-3 xl:ml-0 items-start">
                <Examination />
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Examinations & Records</span>
                <ul className="list-none text-gray-500 leading-normal my-2 space-y-4 cursor-pointer">
                  <li>
                    <Link
                      href="https://www.canaraengineering.in/s_attd"
                      target="_blank" rel="noopener noreferrer"
                      className={`${tab === "marks" ? "text-primary font-bold" : "text-gray-500"} hover:text-primary`}
                    >
                      Marks & Attendance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/examination-records?tab=circulars"
                      className={`${tab === "circulars" ? "text-primary font-bold" : "text-gray-500"} hover:text-primary`}
                    >
                      Circulars
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.canaraengineering.in/s-info"
                      target="_blank" rel="noopener noreferrer"
                      className={`${pathname.includes("/student-information") ? `` : "text-gray-500"} hover:text-primary `}
                    >
                      Student Information
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://cecstudent.canaraengineering.in"
                      target="_blank" rel="noopener noreferrer"
                      className={`${pathname.includes("/student-information") ? `` : "text-gray-500"} hover:text-primary `}
                    >
                      Student Dashboard
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </MenuList>
    </Menu>
  );
}