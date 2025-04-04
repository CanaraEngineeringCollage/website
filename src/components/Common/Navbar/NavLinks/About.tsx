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
        >
          <ListItem
            className={`flex items-center gap-2 ${
              isMenuOpen ? "opacity-100" : "opacity-80"
            } py-2 pr-4 text-primary transition-colors ease-in-out duration-300 hover:text-we bg-transparent font-semibold hover:bg-transparent`}
            selected={isMenuOpen || isMobileMenuOpen}
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

      <MenuList className="w-full bg-transparent p-0 border-none shadow-none flex justify-center pb-4">
        <div className="hidden w-fit outline-none hover:outline-none max-w-screen-lg bg-white shadow-md xl:max-w-screen-xl 3xl:max-w-none rounded-xl lg:flex gap-8 p-8">
          <div className="3xl:min-w-[20rem] outline-none hover:outline-none">
            <div className=" group/item  cursor-pointer pb-4 border-b border-b-webGreen1/25">
              <div className="flex justify-between items-center">
                <Typography className="lg:text-2xl xl:text-3xl font-medium">
                  Institution
                </Typography>
                <FaChevronUp className="w-6 h-6 rotate-180 group-hover/item:rotate-0 transition-all ease-in-out duration-300 text-primary" />
              </div>
              <div className="hidden group-hover/item:block">
                <div
                  onClick={() => {
                    router.push("/foundation");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Bhandary Foundation</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/about");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>About College</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/vision-and-mission");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Vision & Mission</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/governing-council");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Governing Council</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/accreditation");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Accreditations & Autonomous</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/milestones");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Milestones</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/testimonials");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Testimonials </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/location");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Location</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/mandatory-disclosures");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Mandatory Disclosure</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
              </div>
            </div>

            <div className=" group/item1 mt-4 cursor-pointer pb-4 border-b border-b-webGreen1/25">
              <div className="flex justify-between gap-4 items-center">
                <Typography className="lg:text-2xl xl:text-3xl font-medium">
                  Administration
                </Typography>
                <FaChevronUp className="w-6 h-6 rotate-180 group-hover/item1:rotate-0 transition-all ease-in-out duration-300 text-primary" />
              </div>
              <div className="hidden group-hover/item1:block">
                <div
                  onClick={() => {
                    router.push("/key-functionaries");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Key Functionaries</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/director");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Director</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/administration");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography>Administration Staff</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
              </div>
            </div>
            <div className=" mt-4 cursor-pointer pb-4 border-b border-b-webGreen1/25">
              <div
                onClick={() => {
                  router.push("/contact");
                }}
                className="flex justify-between items-center"
              >
                <Typography className="text-xl 2xl:text-3xl font-medium">
                  Contact Us
                </Typography>
                <FaChevronUp className="w-6 h-6 rotate-90 text-primary" />
              </div>
            </div>
          </div>
          <div className="flex gap-16 outline-none hover:outline-none">
            <div className="flex flex-col justify-between">
              <div>
                <Typography className="lg:text-2xl xl:text-3xl font-medium">
                  Chairman
                </Typography>
                <Image
                  src={"/images/chairman/chairman.jpg"}
                  width={750}
                  height={449}
                  alt="chairman"
                  className="xl:max-w-xs max-w-[13rem] max-h-28 xl:max-h-48 object-cover object-center mt-4 rounded-xl"
                />
                <Typography variant="h5" className="mt-4 text-lg xl:text-xl">
                  Manjunath Bhandary
                </Typography>
                <Typography className="text-primary2 font-semibold text-sm xl:text-base">
                  M.Phil, Ph.D.
                </Typography>
                <Typography className="max-w-[15rem] xl:max-w-xs text-xs mt-2 xl:text-sm">
                  A born leader, visionary, entrepreneur, educationist and
                  politician. His dynamic leadership brings about much needed
                  social reforms through .
                </Typography>
              </div>

              <Button
                onClick={() => {
                  router.push("/chairman");
                }}
                variant="outlined"
                color="blue"
                className="font-poppins w-fit capitalize text-xs xl:text-base font-medium text-primary py-2 hidden lg:flex rounded-full px-4 border-webGreen1  border-2 items-center gap-1"
              >
                View More
              </Button>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                {" "}
                <Typography className="lg:text-2xl xl:text-3xl font-medium">
                  Principal
                </Typography>
                <Image
                  src={"/images/principal/principal.jpg"}
                  width={750}
                  height={449}
                  alt="chairman"
                  className="xl:max-w-xs max-w-[13rem] max-h-28 xl:max-h-48 object-cover object-center mt-4 rounded-xl"
                />
                <Typography variant="h5" className="mt-4 text-lg xl:text-xl">
                  Dr. S. S. Injaganeri
                </Typography>
                <Typography className="text-primary2 font-semibold text-sm xl:text-base">
                  B.E., M.Tech., Ph.D.(IIT. Madras)
                </Typography>
                <Typography className="max-w-[15rem] xl:max-w-xs text-xs mt-2 xl:text-sm">
                  Sahyadri College of Engineering & Management: Nurturing
                  holistic education, skill development, and successful
                  placement in industries and higher education.
                </Typography>
              </div>

              <Button
                onClick={() => {
                  router.push("/principal");
                }}
                variant="outlined"
                color="blue"
                className="font-poppins capitalize w-fit text-xs xl:text-base font-medium text-primary py-2 hidden lg:flex rounded-full px-4 border-webGreen1 mt-4 border-2 items-center gap-1"
              >
                View More
              </Button>
            </div>
          </div>
          <div className="bg-webGreen2 hidden 3xl:block rounded-xl min-w-[22rem] p-6 outline-none hover:outline-none">
            <Typography className="lg:text-2xl xl:text-3xl font-medium">
              Quick Links
            </Typography>
            <Typography className="mt-4">
              Instant Access to Campus Resources
            </Typography>
            <div className="mt-8">
              <div
                onClick={() => {
                  router.push("/press-clippings");
                }}
                className="flex items-center gap-4 cursor-pointer pb-3 border-b border-b-webGreen1/25"
              >
                <Typography>Press Clippings</Typography>
                <FaChevronUp className="rotate-90" />
              </div>
              <div
                onClick={() => {
                  router.push("/news/list");
                }}
                className="flex items-center gap-4 cursor-pointer pb-3 border-b border-b-webGreen1/25 mt-3"
              >
                <Typography>Sahyadri News</Typography>
                <FaChevronUp className="rotate-90" />
              </div>
              <div
                onClick={() => {
                  router.push("/news/events");
                }}
                className="flex items-center gap-4 cursor-pointer pb-3 border-b border-b-webGreen1/25 mt-3"
              >
                <Typography>Sahyadri Events</Typography>
                <FaChevronUp className="rotate-90" />
              </div>
              <div
                onClick={() => {
                  router.push("/ejournal");
                }}
                className="flex items-center gap-4 cursor-pointer pb-3 border-b border-b-webGreen1/25 mt-3"
              >
                <Typography>Sahyadri E-Journal</Typography>
                <FaChevronUp className="rotate-90" />
              </div>
              <div
                onClick={() => {
                  router.push("/emagazine");
                }}
                className="flex items-center gap-4 cursor-pointer pb-3 border-b border-b-webGreen1/25 mt-3"
              >
                <Typography>Sahyadri E-Magazine</Typography>
                <FaChevronUp className="rotate-90" />
              </div>
            </div>
          </div>
        </div>
      </MenuList>
    </Menu>
  );
}
