"use client";
import {
  Button,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { useRouter } from "next/navigation";
export default function Academics() {
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
        <Typography as="div" variant="small" className="text-sm xl:text-base">
          <ListItem
            className={`flex items-center gap-2 ${
              isMenuOpen ? "opacity-100" : "opacity-80"
            } py-2 pr-4 text-webGreen1 transition-colors ease-in-out duration-300 hover:text-we bg-transparent font-semibold hover:bg-transparent`}
            selected={isMenuOpen || isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
          >
            Academics
            <FaChevronUp
              strokeWidth={2.5}
              className={`hidden h-3 w-3 transition-transform lg:block ${
                isMenuOpen ? "" : "rotate-180"
              }`}
            />
          </ListItem>
        </Typography>
      </MenuHandler>

      <MenuList className="w-full bg-transparent p-0 border-none shadow-none flex justify-center pb-4">
        <div className="hidden w-fit outline-none hover:outline-none max-w-screen-lg bg-white shadow-md xl:max-w-screen-xl 3xl:max-w-none rounded-xl lg:flex gap-8 p-8">
          <div className="3xl:min-w-[20rem] outline-none hover:outline-none">
            <div className=" group/item  cursor-pointer pb-4 border-b border-b-webGreen1/25">
              <div className="flex justify-between items-center">
                <Typography className="lg:text-2xl xl:text-3xl font-medium max-w-xs">
                  Under Graduate Program
                </Typography>
                <FaChevronUp className="w-6 h-6 rotate-180 group-hover/item:rotate-0 transition-all ease-in-out duration-300 text-webGreen1" />
              </div>
              <div className="hidden group-hover/item:block">
                <div
                  onClick={() => {
                    router.push("/departments/computer-science");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Computer Science & Eng</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/departments/ai-ml");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>AI & ML</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>

                <div
                  onClick={() => {
                    router.push("/departments/information-science");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Information Science & Eng</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/departments/electronics-communication");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Electronics & Com. Eng</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/departments/mechanical-robotics-engineering");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Mechanical Eng</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/departments/mechanical-robotics-engineering");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Robotics & Automation</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
              </div>
            </div>

            {/* <div className=" group/item1 mt-4 cursor-pointer pb-4 border-b border-b-webGreen1/25">
              <div className="flex justify-between gap-4 items-center">
                <Typography className="lg:text-2xl xl:text-3xl font-medium">
                  Other
                </Typography>
                <FaChevronUp className="w-6 h-6 rotate-180 group-hover/item1:rotate-0 transition-all ease-in-out duration-300 text-webGreen1" />
              </div>
              <div className="hidden group-hover/item1:block">
                <div
                  onClick={() => {
                    router.push("/departments/basic-science");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Basic Science</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/departments/art-culture");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Art & Culture</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/departments/physical-education");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Physical Education</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
              </div>
            </div> */}

            <div className=" mt-4 cursor-pointer pb-4 border-b border-b-webGreen1/25">
              <div
                onClick={() => {
                  router.push("/research-programs");
                }}
                className="flex justify-between gap-8 items-center"
              >
                <Typography className="text-xl 2xl:text-3xl font-medium">
                  Research Programs
                </Typography>
                <FaChevronUp className="w-6 h-6 rotate-90 text-webGreen1" />
              </div>
            </div>
            <div className=" mt-4 cursor-pointer pb-4 border-b border-b-webGreen1/25">
              <div
                onClick={() => {
                  router.push("/departments");
                }}
                className="flex justify-between gap-8 items-center"
              >
                <Typography className="text-xl 2xl:text-3xl font-medium">
                  Departments
                </Typography>
                <FaChevronUp className="w-6 h-6 rotate-90 text-webGreen1" />
              </div>
            </div>
            <div className=" group/item mt-4 cursor-pointer pb-4 border-b border-b-webGreen1/25">
              <div className="flex justify-between items-center">
                <Typography className="lg:text-2xl xl:text-3xl font-medium max-w-xs">
                  Basic Science
                </Typography>
                <FaChevronUp className="w-6 h-6 rotate-180 group-hover/item:rotate-0 transition-all ease-in-out duration-300 text-webGreen1" />
              </div>
              <div className="hidden group-hover/item:block">
                <div
                  onClick={() => {
                    router.push("/departments/details/chemistry");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Chemistry</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/departments/details/physics");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Physics</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>

                <div
                  onClick={() => {
                    router.push("/departments/details/mathematics");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Mathematics</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/departments/details/humanities");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Humanities</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-16 outline-none hover:outline-none">
            <div className="flex flex-col justify-between">
              <div>
                <Typography className="lg:text-2xl xl:text-3xl font-medium max-w-xs">
                  Post Graduate Program
                </Typography>
                <Image
                  src={"/images/students/pg_courses_1.jpg"}
                  width={750}
                  height={449}
                  alt="chairman"
                  className="xl:max-w-xs max-w-[13rem] max-h-28 xl:max-h-48 object-cover object-center mt-4 rounded-xl"
                />
                <Typography variant="h5" className="mt-4 text-lg xl:text-xl">
                  Masters in Business Administration
                </Typography>

                <Typography className="max-w-[15rem] xl:max-w-xs text-xs mt-2 xl:text-sm">
                  The basic philosophy of Sahyadri MBA is to provide high
                  quality managerial talent with a mind-set for success in a
                  turbulent economic environment and to empower future managers.
                </Typography>
              </div>

              <Button
                onClick={() => {
                  window.open("https://mba.sahyadri.edu.in", "_blank");
                }}
                variant="filled"
                className="font-poppins w-fit capitalize text-xs xl:text-base mt-8 font-medium text-white py-2 hidden lg:flex rounded-full px-4 bg-webGreen1 border-2 items-center gap-1"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div>
            <div className=" group/item1 mt-4 cursor-pointer pb-4 border-b border-b-webGreen1/25">
              <div className="flex justify-between gap-4 items-center">
                <Typography className="lg:text-2xl xl:text-3xl font-medium">
                  Others
                </Typography>
                <FaChevronUp className="w-6 h-6 rotate-180 group-hover/item1:rotate-0 transition-all ease-in-out duration-300 text-webGreen1" />
              </div>
              <div className="hidden group-hover/item1:block">
                {/* <div
                  onClick={() => {
                    router.push("/academics");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Academics</Typography>
                  <FaChevronUp className="rotate-90" />
                </div> */}
                <div
                  onClick={() => {
                    router.push("/courses-offered");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Course Offered</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/teaching-faculty");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Teaching Faculty</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                {/* <div
                  onClick={() => {
                    router.push("/non-teaching-faculty");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Non Teaching Faculty</Typography>
                  <FaChevronUp className="rotate-90" />
                </div> */}
                <div
                  onClick={() => {
                    router.push("/academics#calendar");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Calendar of Events</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/academics#value-added-courses");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Value Added Courses</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                {/* <div
                  onClick={() => {
                    router.push("/research");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Research Centre</Typography>
                  <FaChevronUp className="rotate-90" />
                </div> */}
                <div
                  onClick={() => {
                    router.push("/academics");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Code of Conduct</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/mou-with-sahyadri");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>MOU</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/academics#syllabus");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Syllabus</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/useful-links");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Useful Links</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>

                <div
                  onClick={() => {
                    router.push("/results");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Results</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/announcements");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Announcements</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
              </div>
            </div>
            <div className=" group/item1 mt-4 cursor-pointer pb-4 border-b border-b-webGreen1/25">
              <div className="flex justify-between gap-4 items-center">
                <Typography className="lg:text-2xl xl:text-3xl font-medium">
                  Examination
                </Typography>
                <FaChevronUp className="w-6 h-6 rotate-180 group-hover/item1:rotate-0 transition-all ease-in-out duration-300 text-webGreen1" />
              </div>
              <div className="hidden group-hover/item1:block">
                <div
                  onClick={() => {
                    router.push("/examination-circulations");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Examination Circulations</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/examination-docs-issued");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Examination Documents Issued</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/examination-guidelines");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Examination Guidelines</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
              </div>
            </div>
            <div className=" mt-4 cursor-pointer pb-4 border-b border-b-webGreen1/25">
              <div
                onClick={() => {
                  router.push("/research");
                }}
                className="flex justify-between gap-8 items-center"
              >
                <Typography className="text-xl 2xl:text-3xl font-medium">
                  Research & <br/>Development
                </Typography>
                <FaChevronUp className="w-6 h-6 rotate-90 text-webGreen1" />
              </div>
            </div>
          </div>
        </div>
      </MenuList>
    </Menu>
  );
}
