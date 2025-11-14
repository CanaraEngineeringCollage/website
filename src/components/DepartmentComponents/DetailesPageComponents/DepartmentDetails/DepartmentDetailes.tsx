"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
import CareerProspects from "../CareerProspects/CareerProspects";

interface Qualification {
  degree: string;
  passingYear: number;
  collegeOrUniversity: string;
  areaOfSpecialization: string;
}
interface Faculty {
  name: string;
  image: string;
  category: string;
  desiganation: string;
  department: string;
  joiningDate: string;
  experience: string;
  employmentType: string;
  qualifications: Qualification[];
}
// Interface for council member
interface CouncilMember {
  id: number;
  name: string;
  image: string;
  designation: string;
  category: string;
  department: string;
  joiningDate?: string; // Make this optional
  experience?: string; // Make this optional
  employmentType?: string; // Make this optional
  qualifications: Qualification[];
  faculties?: Faculty[];
}

// Props interface for the component
interface DepartmentSectionProps {
  departmentName: string;
}

const DepartmentDetailes = ({ departmentName }: DepartmentSectionProps) => {
  const { slug } = useParams();

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedSection, setSelectedSection] = useState<string>("Department Profile");

  const [facultyData, setFacultyData] = useState<Faculty[]>([]);

  const [events, setEvents] = useState<Event[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10); // start with 10
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchEvents = useCallback(async () => {
    if (loading || !hasMore) return;
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/events?category=${encodeURIComponent(departmentName)}&page=${page}&limit=${limit}&sortBy=date`
      );
      if (!response.ok) throw new Error("Failed to fetch events");
      const data = await response.json();

      if (data.data.length === 0) {
        setHasMore(false);
        return;
      }

      // Append new data (avoid duplicates)
      setEvents((prev) => [...prev, ...data.data.filter((newEvent: Event) => !prev.some((e) => e.id === newEvent.id))]);

      if (data.data.length < limit) {
        setHasMore(false);
      } else {
        // update next batch size logic
        if (page === 1) {
          setLimit(10); // 2nd fetch = +10
        } else {
          setLimit(20); // then always +20
        }
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [departmentName, page, limit, hasMore, loading]);

  useEffect(() => {
    setEvents([]);
    setPage(1);
    setLimit(10);
    setHasMore(true);
  }, [departmentName]);

  useEffect(() => {
    if (hasMore && !loading) {
      fetchEvents();
    }
  }, [fetchEvents, hasMore]);

  useEffect(() => {
    if (!loading && hasMore && events.length > 0) {
      const timer = setTimeout(() => {
        fetchEvents();
      }, 1000); // auto trigger next batch after 1s
      return () => clearTimeout(timer);
    }
  }, [loading, hasMore, events.length, fetchEvents]);

  


  const department = departments.find((dept) => dept.slug === slug);
  const departmentMenuItems = [
    "Department Profile",
    ...(department?.name === "Artificial Intelligence & Machine Learning" ? ["Career Prospects"] : []),
    ...(department?.name !== "Mechanical Engineering" ? ["Organisation Structure"] : []),
    "Head of the Department",
    "Faculty & Staff",
    "Academic Programmes",
    ...(department?.name === "Science & Humanities" ? ["PO"] : ["PEO & PO-PSO"]),
    "Course Outcomes (CO)",
    "Facilities",
    "Student Achievements",
    ...(department?.name !== "Information Science & Engineering" ? ["Research & Product Development"] : []),
    ...(department?.name === "Information Science & Engineering" || department?.name === "Mechanical Engineering" ? ["Publications"] : []),
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
            <div className="sticky top-20 h-fit">
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
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-8 max-h-[70vh] md:max-h-[130vh] scrollable overflow-y-auto  pr-2">
            {selectedSection === "Department Profile" && (
              <DepartmentProfile annualIntake={department?.annualTake} keyPoints={department?.keyPractices} data={department?.description} />
            )}
            {selectedSection === "Organisation Structure" && department?.organisation && <Organaisation data={department?.organisation} />}
            {selectedSection === "Head of the Department" && <Hod data={department?.depatmentHead} />}
            {selectedSection === "Faculty & Staff" && <Faculty deptName={department?.name}  />}
            {selectedSection === "Academic Programmes" && department?.academicsProgram && <Academic data={department.academicsProgram} />}
            {selectedSection === "PO" && department?.peo && <Peo data={department.peo} deptName={department?.name} />}
            {selectedSection === "PEO & PO-PSO" && department?.peo && <Peo data={department.peo} deptName={department?.name} />}
            {selectedSection === "Course Outcomes (CO)" && <CourseOutCome deptName={department?.name} staticData={department?.courseOutcome} />}
            {selectedSection === "Facilities" && department?.facilities && <Facilities deptName={department?.name} data={department?.facilities} />}
            {selectedSection === "Student Achievements" && department?.studentAcheivemtents && (
              <StudentAchievement data={department?.studentAcheivemtents} />
            )}
            {selectedSection === "Research & Product Development" && department?.research && (
              <Research deptName={department?.name} data={department?.research} />
            )}
            {selectedSection === "Publications" && department?.publications && <Publications data={department?.publications} />}
            {selectedSection === "Magazines & Newsletters" && department?.magazines && <Magazines data={department?.magazines} />}
            {selectedSection === "Events" && <Events events={events} departmentName={departmentName} />}
            {selectedSection === "Gallery" && <Gallery data={department?.gallery} />}
            {selectedSection === "Career Prospects" && <CareerProspects data={department?.careerProspects[0]} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentDetailes;
