"use client";
import React, { useState } from "react";
import grievanceRedressalCell from "../../../../utils/grievanceData/grievanceData.json";
import { useParams } from "next/navigation";
import departments from "@/lib/departments.json";
import DepartmentProfile from "../DepartmentDetailesTab/DepartmentProfile/DepartmentProfile";
import Organaisation from "../DepartmentDetailesTab/Organaisation/Organaisation";
import Hod from "../DepartmentDetailesTab/Hod/Hod";
import Faculty from "../DepartmentDetailesTab/Faculty/Faculty";
import Academic from "../DepartmentDetailesTab/Academic/Academic";
import Peo from "../DepartmentDetailesTab/Peo/Peo";
import CourseOutCome from "../DepartmentDetailesTab/CourseOutCome/CourseOutCome";
import Facilities from "../DepartmentDetailesTab/Facilities/Facilities";
import StudentAchievement from "../DepartmentDetailesTab/StudentAchievement/StudentAchievement";
import Research from "../DepartmentDetailesTab/Research/Research";
import Publications from "../DepartmentDetailesTab/Publications/Publications";
import Events from "../DepartmentDetailesTab/Events/Events";
import Gallery from "../DepartmentDetailesTab/Gallery/Gallery";
import Magazines from "../DepartmentDetailesTab/Magazines/Magazines";

const DepartmentDetailes = () => {
  const { slug } = useParams();

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedSection, setSelectedSection] = useState<string>("Department Profile");
 
  
  const department = departments.find((dept) => dept.slug === slug);
  const departmentMenuItems = [
  "Department Profile",
  "Organisation Structure",
  "Head of Department",
  "Faculty & Staff",
  "Academic Programs",
  "PEO & PO-PSO",
  "Course Outcomes (CO)",
  "Facilities",
  "Student Achievement",
  ...(department?.name !== "Information Science & Engineering" ? ["Research & Product Development"] : []),
  ...(department?.name === "Information Science & Engineering" ? ["Publications"] : []),
  "Magazines & Newsletters",
  "Events",
  "Gallery",
];


  return (
    <section className="py-10 xl:py-36 text-black lg2:px-24 mx-5 overflow-hidden">
      <div className="">
        <h1 className="text-[#1D1D1F] text-xl lg:text-[31px] mb-2">Department of </h1>
        <h2 className="text-[30px] lg:w-[50%]  lg:text-[54px] font-bold leading-[1.1] pb-1 lg:pb-10 text-black">{department?.name}</h2>
        <div className={`grid grid-cols-1 gap-3  md:grid-cols-12 mt-10`}>
          <div className="col-span-3">
            {departmentMenuItems?.map((section, index) => (
              <h1
                key={index}
                onClick={() => {
                  setSelectedIndex(index);
                  setSelectedSection(section);
                }}
                className={`border-b-2 text-[20px] pb-3 mb-3 border-border cursor-pointer ${
                  selectedIndex === index ? "text-[#2884CA] font-bold" : "text-textGray font-[500]"
                }`}
              >
                {section}
              </h1>
            ))}
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-8">
            {selectedSection === "Department Profile" && <DepartmentProfile keyPoints={department?.keyPractices} data={department?.description} />}
            {selectedSection === "Organisation Structure" && department?.organisation && <Organaisation data={department?.organisation}/>}
            {selectedSection === "Head of Department" && <Hod data={department?.depatmentHead} />}
            {selectedSection === "Faculty & Staff" && <Faculty datam={department?.faculties}/>}
            {selectedSection === "Academic Programs" && department?.academicsProgram && <Academic data={department.academicsProgram} />}
            {selectedSection === "PEO & PO-PSO" && department?.peo && <Peo data={department.peo} deptName={department?.name} />}
            {selectedSection === "Course Outcomes (CO)" && <CourseOutCome />}
            {selectedSection === "Facilities" && department?.facilities && <Facilities data={department?.facilities} />}
            {selectedSection === "Student Achievement" && department?.studentAcheivemtents && (
              <StudentAchievement data={department?.studentAcheivemtents} />
            )}
            {selectedSection === "Research & Product Development" && department?.research && <Research data={department?.research}/>}
            {selectedSection === "Publications" && department?.publications &&<Publications data={department?.publications}/>}
            {selectedSection === "Magazines & Newsletters" && department?.magazines && <Magazines data={department?.magazines}/>}
            {selectedSection === "Events" && <Events />}
            {selectedSection === "Gallery" && <Gallery />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentDetailes;
