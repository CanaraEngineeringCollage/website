"use client";
import { Button, ListItem, Menu, MenuHandler, MenuList, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { useRouter } from "next/navigation";
export default function Life() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
      <MenuHandler>
        <Typography color="inherit" as="div" variant="small" className="text-sm xl:text-base">
          <ListItem
            className={`flex items-center gap-2 py-2 pr-4 ${
              isMenuOpen ? "opacity-100" : "opacity-80"
            } text-webGreen1 bg-transparent font-semibold hover:bg-transparent`}
            selected={isMenuOpen || isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
          >
            Life At Canara
            <FaChevronUp strokeWidth={2.5} className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "" : "rotate-180"}`} />
          </ListItem>
        </Typography>
      </MenuHandler>
      <MenuList className="bg-transparent w-full border-none p-0 pb-4 shadow-none">
        <div className="hidden bg-white w-fit mx-auto 3xl:max-w-none outline-none shadow-md rounded-xl lg:flex justify-between gap-8 p-8 min-w-[50rem]">
          <div className="3xl:min-w-[20rem] outline-none hover:outline-none">
            <div className=" group/item  cursor-pointer pb-4 border-b border-b-webGreen1/25">
              <div className="flex justify-between gap-4 items-center">
                <Typography
                 
                  className="text-xl 2xl:text-3xl font-medium"
                >
                  Explore
                </Typography>
                <FaChevronUp className="w-6 h-6 rotate-180 group-hover/item:rotate-0 transition-all ease-in-out duration-300 text-webGreen1" />
              </div>
              <div className="hidden group-hover/item:block">
                <div
                  onClick={() => {
                    router.push("/library");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    Library
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/hostel");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    Hostel
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/core-facilities");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    Core Facilities
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/transportation");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    Transportation
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/campus");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    Campus
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
              </div>
            </div>

            <div className=" group/item mt-4 cursor-pointer pb-4 border-b border-b-webGreen1/25">
              <div className="flex justify-between gap-4 items-center">
                <Typography
                 
                  className="text-xl 2xl:text-3xl font-medium"
                >
                  Student Support
                </Typography>
                <FaChevronUp className="w-6 h-6 rotate-180 group-hover/item:rotate-0 transition-all ease-in-out duration-300 text-webGreen1" />
              </div>
              <div className="hidden group-hover/item:block">
                <div
                  onClick={() => {
                    router.push("/anti-sexual-harassment");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    Anti Sexual Harassment Committee
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/student-grievance-cell");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    Grievance Redressal Committee
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/anti-ragging-committee");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    Anti Ragging Committee
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                {/* <div className="flex items-center gap-4 cursor-pointer mt-3">
                  <Typography >Resources for SC/ ST/ OBC Students</Typography>
                  <FaChevronUp className="rotate-90" />
                </div> */}

                <div
                  onClick={() => {
                    router.push("/student-counselling");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    Student Monitoring & Counselling
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/faq");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    FAQ's
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
              </div>
            </div>
            <div className=" mt-4 cursor-pointer pb-4 border-b border-b-webGreen1/25">
              <div
                onClick={() => {
                  router.push("/gallery");
                }}
                className="flex justify-between items-center"
              >
                <Typography
                 
                  className="text-xl 2xl:text-3xl font-medium"
                >
                  Gallery
                </Typography>
                <FaChevronUp className="w-6 h-6 rotate-90 text-webGreen1" />
              </div>
            </div>
          </div>
          <div className="3xl:min-w-[20rem] outline-none hover:outline-none">
            <div className=" group/item  cursor-pointer pb-4 border-b border-b-webGreen1/25">
              <div className="flex justify-between gap-4 min-w-[17rem] items-center">
                <Typography
                 
                  className="text-xl 2xl:text-3xl font-medium"
                >
                  Activities
                </Typography>
                <FaChevronUp className="w-6 h-6 rotate-180 group-hover/item:rotate-0 transition-all ease-in-out duration-300 text-webGreen1" />
              </div>
              <div className="hidden group-hover/item:block">
                <div
                  onClick={() => {
                    router.push("/journals");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    Journals
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/conclave");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    Conclave Updates
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>

                {/* <div
                  onClick={() => {
                    router.push("/industrial-visit");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >Industrial Visits</Typography>
                  <FaChevronUp className="rotate-90" />
                </div> */}
                <div
                  onClick={() => {
                    router.push("/corporate-social-responsibility");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    Corporate Social Responsibility
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/initiatives");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    Sahyadri Initiatives
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                {/* <div
                  onClick={() => {
                    router.push("/innovation-entrepreneurship");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >Innovation & Entrepreneurship</Typography>
                  <FaChevronUp className="rotate-90" />
                </div> */}

                <div
                  onClick={() => {
                    router.push("/ssth");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    SSTH
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>

                <div
                  onClick={() => {
                    router.push("/nat-int-event");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    National & International Events
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>

                <div
                  onClick={() => {
                    router.push("/nss");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    NSS
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/downloads");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    Downloads
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/major-activities-flowchart");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    Major Activities Flowchart{" "}
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
              </div>
            </div>
            <div className="cursor-pointer pb-4 border-b border-b-webGreen1/25 mt-4">
              <div
                onClick={() => {
                  router.push("/innovation-entrepreneurship");
                }}
                className="flex justify-between items-center"
              >
                <Typography
                 
                  className="text-xl 2xl:text-3xl font-medium"
                >
                  Innovation
                </Typography>
                <FaChevronUp className="w-6 h-6 rotate-90 text-webGreen1" />
              </div>
            </div>
            {/* <div className=" group/item mt-4 cursor-pointer pb-4 border-b border-b-webGreen1/25">
              <div className="flex justify-between items-center">
                <Typography  className="text-xl 2xl:text-3xl font-medium">
                  Research
                </Typography>
                <FaChevronUp className="w-6 h-6 rotate-180 group-hover/item:rotate-0 transition-all ease-in-out duration-300 text-webGreen1" />
              </div>
              <div className="hidden group-hover/item:block">
                <div
                  onClick={() => {
                    router.push("/research");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >Research & Development</Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
              </div>
            </div> */}
            <div className=" group/item mt-4 cursor-pointer pb-4 border-b border-b-webGreen1/25">
              <div className="flex justify-between gap-4 items-center">
                <Typography
                 
                  className="text-xl 2xl:text-3xl font-medium"
                >
                  Achievements
                </Typography>
                <FaChevronUp className="w-6 h-6 rotate-180 group-hover/item:rotate-0 transition-all ease-in-out duration-300 text-webGreen1" />
              </div>
              <div className="hidden group-hover/item:block">
                <div
                  onClick={() => {
                    router.push("/student-achievements");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    Student Achievements
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/academic-excellence");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3 hover:scale-105 transition-all ease-in-out duration-300"
                >
                  <Typography >
                    Academic Excellence
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/ecell");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    E - Cell
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/corporate-recruitement");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    Shine Foundation
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
                <div
                  onClick={() => {
                    router.push("/spss");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    SPSS
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
              </div>
            </div>
          </div>
          <div className="3xl:min-w-[20rem] outline-none hover:outline-none">
            <div className="cursor-pointer pb-4 border-b border-b-webGreen1/25">
              <div
                onClick={() => {
                  router.push("/launchpads");
                }}
                className="flex justify-between items-center"
              >
                <Typography
                 
                  className="text-xl 2xl:text-3xl font-medium"
                >
                  Launchpads
                </Typography>
                <FaChevronUp className="w-6 h-6 rotate-90 text-webGreen1" />
              </div>
            </div>
            <div className=" mt-4 cursor-pointer pb-4 border-b border-b-webGreen1/25">
              <div
                onClick={() => {
                  router.push("/associations");
                }}
                className="flex justify-between items-center"
              >
                <Typography
                 
                  className="text-xl 2xl:text-3xl font-medium"
                >
                  Associations
                </Typography>
                <FaChevronUp className="w-6 h-6 rotate-90 text-webGreen1" />
              </div>
            </div>

            <div className=" group/item mt-4 cursor-pointer pb-4 border-b border-b-webGreen1/25">
              <div className="flex justify-between items-center">
                <Typography
                 
                  className="text-xl 2xl:text-3xl font-medium"
                >
                  Disclosure
                </Typography>
                <FaChevronUp className="w-6 h-6 rotate-180 group-hover/item:rotate-0 transition-all ease-in-out duration-300 text-webGreen1" />
              </div>
              <div className="hidden group-hover/item:block">
                <div
                  onClick={() => {
                    router.push("/audited-finance-report");
                  }}
                  className="flex items-center gap-4 cursor-pointer mt-3"
                >
                  <Typography >
                    Audited Financial Reports
                  </Typography>
                  <FaChevronUp className="rotate-90" />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="bg-webGray3 rounded-xl max-w-sm hidden 2xl:block min-w-[22rem] p-6 outline-none hover:outline-none">
            <Typography  className="text-xl 2xl:text-3xl font-medium">
              Spotlight
            </Typography>
            <Typography  className="mt-4">
              Spotlighting the Latest Happenings and Highlights
            </Typography>
            <div className="mt-8">
              {buzzData?.map((item, index) => (
                <div
                  onClick={() => {
                    router.push(`/news/details/${item.id}`);
                  }}
                  className="mt-8 lg:mt-0 mx-auto rounded-2xl lg:rounded-none bg-transparent max-w-md flex flex-col justify-between cursor-pointer "
                >
                  <div>
                    <Typography  variant="h3" className="text-xl">
                      {item.title.length >= 50
                        ? item.title.slice(0, 50) + "..."
                        : item.title}
                    </Typography>
                    <Typography  className="text-sm mt-4">
                      {item.description.length > 70
                        ? item.description.slice(0, 70) + "..."
                        : item.description}
                      {item.description.length > 70 ? (
                        <span className="text-webGreen1 cursor-pointer font-medium">
                          {" "}
                          View
                        </span>
                      ) : null}
                    </Typography>
                  </div>
                  <Typography  className="text-xs text-webGreen1/20 text-right hidden lg:block">
                    {new Date(item.createdAt).toDateString()}
                  </Typography>
                </div>
              ))}

              <Button
                onClick={() => {
                  router.push("/news/list");
                }}
                variant="outlined"
                color="blue"
                className="font-poppins capitalize w-fit text-base font-medium text-webGreen1 py-2 hidden lg:flex rounded-full px-4 border-webGreen1 mt-16 border-2 items-center gap-1"
              >
                Explore More
              </Button>
            </div>
          </div> */}
        </div>
      </MenuList>
    </Menu>
  );
}
