"use client";
import {
  Button,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import {
  College,
  Employees,
  Certicficate,
  HandShake,
} from "../../../../components/Icons/Icons";

export default function About() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Menu
      open={isMenuOpen}
      handler={setIsMenuOpen}
      offset={{ mainAxis: 20 }}
      placement="bottom"
      allowHover={true}
    >
      <MenuHandler>
        <Typography
          as="div"
          className="text-sm xl:text-base"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <ListItem
            className={`flex items-center gap-2 ${
              isMenuOpen ? "opacity-100" : "opacity-80"
            } py-2 pr-4 text-[#2884CA] transition-colors ease-in-out duration-300 hover:text-we bg-transparent font-semibold hover:bg-transparent border-none outline-none focus:ring-0`}
            selected={isMenuOpen || isMobileMenuOpen}
            placeholder=""
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
          >
            About
            <FaChevronUp
              strokeWidth={2.5}
              className={`hidden h-3 w-3 transition-transform lg:block ${
                isMenuOpen ? "" : "rotate-180"
              }`}
            />
          </ListItem>
        </Typography>
      </MenuHandler>

      <MenuList
        className="w-full bg-transparent p-0 border-none !border-0 shadow-none flex justify-center pb-4 outline-none focus:ring-0"
      >
        <div className="w-full max-w-screen-2xl bg-white shadow-md rounded-xl flex justify-center gap-8 p-8 border-none outline-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-16 w-full">
            {/* Column 1 */}
            <div className="flex gap-4 pr-4 border-r border-gray-300">
              <div className="flex items-start">
                <College />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Campus Legacy</span>
                <ul className="list-none text-gray-500 leading-10">
                  <li>About the CEC Campus</li>
                  <li>History of CEC</li>
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex gap-4 pr-4 border-r border-gray-300">
              <div className="flex items-start">
                <Employees />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">
                  Leadership & Administration
                </span>
                <ul className="list-none text-gray-500 leading-10">
                  <li>Our Founder</li>
                  <li>Our Management</li>
                  <li>Governing Council</li>
                  <li>Educators & Administrators</li>
                </ul>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex gap-4 pr-4 border-r border-gray-300">
              <div className="flex items-start">
                <Certicficate />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">
                  Accreditations & Compliance
                </span>
                <ul className="list-none text-gray-500 leading-10">
                  <li>Mandatory Disclosure</li>
                </ul>
              </div>
            </div>

            {/* Column 4 */}
            <div className="flex gap-4 ">
              <div className="flex items-start">
                <HandShake />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">
                  Student Support & Welfare
                </span>
                <ul className="list-none text-gray-500 leading-10">
                  <li>Grievance Redressal Cell</li>
                  <li>SWO Department</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </MenuList>
    </Menu>
  );
}
