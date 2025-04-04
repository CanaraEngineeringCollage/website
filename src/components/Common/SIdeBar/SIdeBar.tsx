"use client";

import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";
import {
  academics,
  activities,
  administration,
  basicScience,
  disclosure,
  examination,
  explore,
  institution,
  newsAndEvents,
  other,
  research,
  studentSupport,
  ugProgram,
} from "@/utils/pagesData/navigation";

export default function Sidebar({ sidebar, openSidebar }: any) {
  const [open, setOpen] = useState({
    ourCollege: false,
    program: false,
    lifeAtSahyadri: false,
  });
  const [visible, setVisible] = useState("main-menu");
  return (
    <div>
      <div
        className={`sidebar bg-white z-[1000] fixed md:top-[8rem] top-20 left-0 scrollbar pb-36 ${
          !sidebar ? "translate-x-[-100%]" : "translate-x-0"
        } ease-in-out duration-500 pt-6 ${sidebar ? "shadow-2xl" : ""}`}
      >
        <div className="px-8 max-w-xs">
          {
            {
              "main-menu": <MainMenu open={open} setOpen={setOpen} setVisible={setVisible} sidebar={sidebar} openSidebar={openSidebar} />,
              ugProgram: (
                <SubMenu
                  data={{
                    title: "U G Program",
                    links: ugProgram,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),
              other: (
                <SubMenu
                  data={{
                    title: "Other",
                    links: other,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),

              explore: (
                <SubMenu
                  data={{
                    title: "Explore",
                    links: explore,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),
              "student-support": (
                <SubMenu
                  data={{
                    title: "Student Support",
                    links: studentSupport,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),
              activities: (
                <SubMenu
                  data={{
                    title: "Activities",
                    links: activities,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),
              research: (
                <SubMenu
                  data={{
                    title: "Research",
                    links: research,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),
              "news-events": (
                <SubMenu
                  data={{
                    title: "News & Events",
                    links: newsAndEvents,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),
              disclosures: (
                <SubMenu
                  data={{
                    title: "Disclosure",
                    links: disclosure,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),
              academics: (
                <SubMenu
                  data={{
                    title: "Academics",
                    links: academics,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),
              examination: (
                <SubMenu
                  data={{
                    title: "Examination",
                    links: examination,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),
              institution: (
                <SubMenu
                  data={{
                    title: "Institution",
                    links: institution,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),
              administration: (
                <SubMenu
                  data={{
                    title: "Administration",
                    links: administration,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),
              basicScience: (
                <SubMenu
                  data={{
                    title: "Basic Science",
                    links: basicScience,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),
            }[visible]
          }
        </div>
      </div>
    </div>
  );
}

function SubMenu({
  setVisible,
  data,
  openSidebar,
}: {
  setVisible: any;
  data: {
    title: string;
    links: Array<{
      title: string;
      link: string;
    }>;
  };
  openSidebar: any;
}) {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => {
          setVisible("main-menu");
        }}
        className="flex gap-2 items-center"
      >
        <IoIosArrowDown className={`w-4 h-4 text-webBlue rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
        <Typography className="font-medium text-webBlue text-xl">{data.title}</Typography>
      </div>
      <div className={`space-y-2 transition-all ease-in-out duration-300 mt-2`}>
        {data.links.map((link, index) => (
          <div
            onClick={() => {
              router.push(link.link);
              openSidebar(false);
              setVisible("main-menu");
            }}
            className="flex gap-2 items-center"
          >
            <Typography className=" text-webBlue ">{link.title}</Typography>
            <IoIosArrowDown className={`w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
          </div>
        ))}
      </div>
    </>
  );
}

function MainMenu({
  sidebar,
  setVisible,
  open,
  setOpen,
  openSidebar,
}: {
  sidebar: boolean;
  setVisible: any;
  open: any;
  setOpen: any;
  openSidebar: any;
}) {
  const router = useRouter();
  return (
    <>
      <div className="border-b-webBlue/10 border-b-2 pb-4">
        <div
          onClick={() => {
            setOpen((prev: { ourCollege: boolean; program: boolean; lifeAtSahyadri: boolean }) => ({
              program: false,
              lifeAtSahyadri: false,
              ourCollege: !prev.ourCollege,
            }));
          }}
          className="flex gap-4 text-xl "
        >
          <Typography className="font-semibold text-webBlue  text">About</Typography>
          <IoIosArrowDown className={`w-6 h-6 text-webBlue transition-all ease-in-out duration-300 lg:hidden ${open.ourCollege && "rotate-180"}`} />
        </div>
        <div className={`space-y-2 transition-all ease-in-out duration-300 ${open.ourCollege ? "h-full opacity-100 mt-2" : "h-0 opacity-0"}`}>
          {open.ourCollege && (
            <>
              <div
                onClick={() => {
                  setVisible("institution");
                }}
                className="flex gap-2 items-center"
              >
                <Typography className=" text-webBlue ">Institution</Typography>
                <IoIosArrowDown className={`w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
              </div>
              <div
                onClick={() => {
                  setVisible("administration");
                }}
                className="flex gap-2 items-center"
              >
                <Typography className=" text-webBlue ">Administration</Typography>
                <IoIosArrowDown className={`w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
              </div>
              <div
                onClick={() => {
                  openSidebar(false);
                  router.push("/contact");
                }}
                className="flex gap-2 items-center"
              >
                <Typography className=" text-webBlue ">Contact Us</Typography>
                <IoIosArrowDown className={`w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="border-b-webBlue/10 border-b-2 py-4">
        <div
          onClick={() => {
            setOpen((prev: { ourCollege: boolean; program: boolean; lifeAtSahyadri: boolean }) => ({
              ourCollege: false,
              lifeAtSahyadri: false,
              program: !prev.program,
            }));
          }}
          className="flex gap-4 "
        >
          <Typography className="font-semibold text-webBlue ">Academics</Typography>
          <IoIosArrowDown className={`w-6 h-6 text-webBlue transition-all ease-in-out duration-300 lg:hidden ${open.program && "rotate-180"}`} />
        </div>
        <div className={`space-y-2 transition-all ease-in-out duration-300 ${open.program ? "h-full opacity-100 mt-2" : "h-0 opacity-0"}`}>
          {open.program && (
            <>
              <div
                onClick={() => {
                  setVisible("ugProgram");
                }}
                className="flex gap-2 items-center"
              >
                <Typography className=" text-webBlue ">Under Graduate Program</Typography>
                <IoIosArrowDown className={`w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
              </div>
              {/* <div
                onClick={() => {
                  setVisible("other");
                }}
                className="flex gap-2 items-center"
              >
                <Typography className=" text-webBlue ">Other</Typography>
                <IoIosArrowDown
                  className={`w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`}
                />
              </div> */}
              <div
                onClick={() => {
                  openSidebar(false);
                  router.push("/departments");
                }}
                className="flex gap-2 items-center"
              >
                <Typography className=" text-webBlue ">Departments</Typography>
                <IoIosArrowDown className={`w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
              </div>
              <div
                onClick={() => {
                  openSidebar(false);
                  router.push("/research-programs");
                }}
                className="flex gap-2 items-center"
              >
                <Typography className=" text-webBlue ">Research Programs</Typography>
                <IoIosArrowDown className={`w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
              </div>
              <div
                onClick={() => {
                  setVisible("basicScience");
                }}
                className="flex gap-2 items-center"
              >
                <Typography className=" text-webBlue ">Basic Science</Typography>
                <IoIosArrowDown className={`w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
              </div>
              <div
                onClick={() => {
                  setVisible("academics");
                }}
                className="flex gap-2 items-center"
              >
                <Typography className=" text-webBlue ">Others</Typography>
                <IoIosArrowDown className={`w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
              </div>
              <div
                onClick={() => {
                  setVisible("examination");
                }}
                className="flex gap-2 items-center"
              >
                <Typography className=" text-webBlue ">Examination</Typography>
                <IoIosArrowDown className={`w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
              </div>
              <div
                onClick={() => {
                  openSidebar(false);
                  router.push("/research");
                }}
                className="flex gap-2 items-center"
              >
                <Typography className=" text-webBlue ">Research & Development</Typography>
                <IoIosArrowDown className={`w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="border-b-webBlue/10 border-b-2 py-4">
        <div
          onClick={() => {
            router.push("/admission");
            openSidebar(false);
          }}
          className="flex gap-4 "
        >
          <Typography className="font-semibold text-webBlue ">Admissions</Typography>
          <IoIosArrowDown className={`w-6 h-6 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
        </div>
      </div>
      <div className="border-b-webBlue/10 border-b-2 py-4">
        <div
          onClick={() => {
            setOpen((prev: { ourCollege: boolean; program: boolean; lifeAtSahyadri: boolean }) => ({
              ourCollege: false,
              lifeAtSahyadri: !prev.lifeAtSahyadri,
              program: false,
            }));
          }}
          className="flex gap-4 "
        >
          <Typography className="font-semibold text-webBlue ">Life At Sahyadri</Typography>
          <IoIosArrowDown
            className={`w-6 h-6 text-webBlue transition-all ease-in-out duration-300 lg:hidden ${open.lifeAtSahyadri && "rotate-180"}`}
          />
        </div>
        <div className={`space-y-2 transition-all ease-in-out duration-300 ${open.lifeAtSahyadri ? "h-full opacity-100 mt-2" : "h-0 opacity-0"}`}>
          {open.lifeAtSahyadri && (
            <>
              <div
                onClick={() => {
                  setVisible("explore");
                }}
                className="flex gap-2 items-center"
              >
                <Typography className=" text-webBlue ">Explore</Typography>
                <IoIosArrowDown className={`w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
              </div>
              <div
                onClick={() => {
                  setVisible("student-support");
                }}
                className="flex gap-2 items-center"
              >
                <Typography className=" text-webBlue ">Student Support</Typography>
                <IoIosArrowDown className={`w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
              </div>
              <div
                onClick={() => {
                  setVisible("activities");
                }}
                className="flex gap-2 items-center"
              >
                <Typography className=" text-webBlue ">Activities</Typography>
                <IoIosArrowDown className={`w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
              </div>
              <div
                onClick={() => {
                  router.push("/innovation-entrepreneurship");
                  openSidebar(false);
                }}
                className="flex gap-2 items-center"
              >
                <Typography className=" text-webBlue ">Innovation</Typography>
                <IoIosArrowDown className={`w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
              </div>
              {/* <div
                onClick={() => {
                  setVisible("news-events");
                }}
                className="flex gap-2 items-center"
              >
                <Typography className=" text-webBlue ">
                  News & Events
                </Typography>
                <IoIosArrowDown
                  className={`w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`}
                />
              </div> */}
              <div
                onClick={() => {
                  setVisible("disclosures");
                }}
                className="flex gap-2 items-center"
              >
                <Typography className=" text-webBlue ">Disclosure</Typography>
                <IoIosArrowDown className={`w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
              </div>
              <div
                onClick={() => {
                  router.push("/gallery");
                  openSidebar(false);
                }}
                className="flex gap-2 items-center"
              >
                <Typography className=" text-webBlue ">Gallery</Typography>
                <IoIosArrowDown className={`w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="border-b-webBlue/10 border-b-2 py-4">
        <div
          onClick={() => {
            router.push("/placements");
            openSidebar(false);
          }}
          className="flex gap-4 "
        >
          <Typography className="font-semibold text-webBlue ">Placements</Typography>
          <IoIosArrowDown className={`w-6 h-6 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
        </div>
      </div>

      <div className="border-b-webBlue/10 border-b-2 py-4">
        <div
          onClick={() => {
            router.push("/recruitment");
            openSidebar(false);
          }}
          className="flex gap-4 "
        >
          <Typography className="font-semibold text-webBlue ">Recruitment</Typography>
          <IoIosArrowDown className={`w-6 h-6 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
        </div>
      </div>
    </>
  );
}
