"use client";

import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";
import {
  accreditations,
  administration,
  learningHub,
  examination,
  campusFacilities,
  campusLegacy,
  studentSupport,
  curriculum,
  departments,
  studentLife,
  innovation,
  campusBeats,
} from "@/utils/pagesData/navigation";
import {
  College,
  Employees,
  Certicficate,
  HandShake,
  Book,
  Examination,
  Learning,
  Notpad,
  Campus,
  StudentsLife,
  Innovation,
} from "../../../components/Icons/Icons";

export default function Sidebar({ sidebar, openSidebar }: { sidebar: boolean; openSidebar: ()=>void }) {
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
              curriculum: (
                <SubMenu
                  data={{
                    title: "Curriculum & Programs",
                    links: curriculum,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),

              campusFacilities: (
                <SubMenu
                  data={{
                    title: "Campus Facilities",
                    links: campusFacilities,
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

              studentLife: (
                <SubMenu
                  data={{
                    title: "Student Life & Engagement",
                    links: studentLife,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),

              departments: (
                <SubMenu
                  data={{
                    title: "Departments",
                    links: departments,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),

              examination: (
                <SubMenu
                  data={{
                    title: "Examination & Records",
                    links: examination,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),
              campusLegacy: (
                <SubMenu
                  data={{
                    title: "Campus Legacy",
                    links: campusLegacy,
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
              accreditations: (
                <SubMenu
                  data={{
                    title: "Accreditations & Compliance",
                    links: accreditations,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),
              studentSupport: (
                <SubMenu
                  data={{
                    title: "Student Support & Welfare",
                    links: studentSupport,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),

              learningHub: (
                <SubMenu
                  data={{
                    title: "Learning Hub",
                    links: learningHub,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),
              innovation: (
                <SubMenu
                  data={{
                    title: "Innovation & Health",
                    links: innovation,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),
              campusBeats: (
                <SubMenu
                  data={{
                    title: "Campus Beats",
                    links: campusBeats,
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
}: {
  setVisible: (visible: string) => void;
  data: {
    title: string;
    links: Array<{
      title: string;
      link: string;
    }>;
  };
  openSidebar: () => void;
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
        <Typography className="font-medium text-webBlue text-lg">{data.title}</Typography>
      </div>
      <div className={`space-y-2 transition-all ease-in-out duration-300 mt-2`}>
        {data.links.map((link, index) => (
          <div
            key={index}
            onClick={() => {
              router.push(link.link);
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
  setVisible,
  open,
  setOpen,
}: {
  sidebar: boolean;
  setVisible: (visible: string) => void;
  open: { ourCollege: boolean; program: boolean; lifeAtSahyadri: boolean };
  setOpen: React.Dispatch<React.SetStateAction<{ ourCollege: boolean; program: boolean; lifeAtSahyadri: boolean }>>;
  openSidebar: () => void;
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
          <Typography className="font-semibold text-webBlue">About</Typography>
          <IoIosArrowDown className={`w-6 h-6 text-webBlue transition-all ease-in-out duration-300 lg:hidden ${open.ourCollege && "rotate-180"}`} />
        </div>
        <div className={`space-y-2 transition-all ease-in-out duration-300 ${open.ourCollege ? "h-full opacity-100 mt-2" : "h-0 opacity-0"}`}>
          {open.ourCollege && (
            <>
              <div
                onClick={() => {
                  setVisible("campusLegacy");
                }}
                className="flex gap-2 items-center"
              >
                <div className="flex items-center gap-2">
                  <College />
                  <Typography className="text-sm">Campus Legacy</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                </div>
              </div>
              <div
                onClick={() => {
                  setVisible("administration");
                }}
                className="flex gap-2 items-center"
              >
                <div className="flex items-center gap-2">
                  <Employees />
                  <Typography className="text-sm">Leadership & Administration</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                </div>
              </div>
              <div
                onClick={() => {
                  setVisible("accreditations");
                }}
                className="flex gap-2 items-center"
              >
                <div className="flex items-center gap-2">
                  <Certicficate />
                  <Typography className="text-sm">Accreditations & Compliance</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                </div>
              </div>
              <div
                onClick={() => {
                  setVisible("studentSupport");
                }}
                className="flex gap-2 items-center"
              >
                <div className="flex items-center gap-2">
                  <HandShake />
                  <Typography className="text-sm">Student Support & Welfare</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                </div>
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
                  setVisible("curriculum");
                }}
                className="flex gap-2 items-center"
              >
                <div className="flex items-center gap-2">
                  <Notpad />
                  <Typography className="text-sm">Curriculum & Programs</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                </div>
              </div>

              <div
                onClick={() => {
                  setVisible("departments");
                }}
                className="flex gap-2 items-center"
              >
                <div className="flex items-center gap-2">
                  <Book />
                  <Typography className="text-sm">Departments</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                </div>{" "}
              </div>
              <div
                onClick={() => {
                  setVisible("examination");
                }}
                className="flex gap-2 items-center"
              >
                <div className="flex items-center gap-2">
                  <Examination />
                  <Typography className="text-sm">Examinations & Records</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                </div>
              </div>
              <div
                onClick={() => {
                  setVisible("learningHub");
                }}
                className="flex gap-2 items-center"
              >
                <div className="flex items-center gap-2">
                  <Learning />
                  <Typography className="text-sm">Learning Hub</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="border-b-webBlue/10 border-b-2 py-4">
        <div
          onClick={() => {
            router.push("/admission");
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
          <Typography className="font-semibold text-webBlue ">Life At Canara</Typography>
          <IoIosArrowDown
            className={`w-6 h-6 text-webBlue transition-all ease-in-out duration-300 lg:hidden ${open.lifeAtSahyadri && "rotate-180"}`}
          />
        </div>
        <div className={`space-y-2 transition-all ease-in-out duration-300 ${open.lifeAtSahyadri ? "h-full opacity-100 mt-2" : "h-0 opacity-0"}`}>
          {open.lifeAtSahyadri && (
            <>
              <div
                onClick={() => {
                  setVisible("campusFacilities");
                }}
                className="flex gap-2 items-center"
              >
                <div className="flex items-center gap-2">
                  <College />
                  <Typography className="text-sm">Campus Facilities</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                </div>
              </div>
              <div
                onClick={() => {
                  setVisible("studentLife");
                }}
                className="flex gap-2 items-center"
              >
                <div className="flex items-center gap-2">
                  <StudentsLife />
                  <Typography className="text-sm"> Student Life & Engagement</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                </div>
              </div>
              <div
                onClick={() => {
                  setVisible("innovation");
                }}
                className="flex gap-2 items-center"
              >
                <div className="flex items-center gap-2">
                  <Innovation />
                  <Typography className="text-sm"> Innovation & Health</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                </div>
              </div>
              <div
                onClick={() => {
                  setVisible("campusBeats");
                }}
                className="flex gap-2 items-center"
              >
                <div className="flex items-center gap-2">
                  <Campus />
                  <Typography className="text-sm"> Campus Beats</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="border-b-webBlue/10 border-b-2 py-4">
        <div
          onClick={() => {
            router.push("/placements");
          }}
          className="flex gap-4 "
        >
          <Typography className="font-semibold text-webBlue ">Training & Placements</Typography>
          <IoIosArrowDown className={`w-6 h-6 text-webBlue -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
        </div>
      </div>
    </>
  );
}
