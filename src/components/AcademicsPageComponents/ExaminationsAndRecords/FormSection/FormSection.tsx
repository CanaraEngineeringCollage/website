"use client";
import React, { useEffect, useState } from "react";
import { HiLink } from "react-icons/hi";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const FormSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Marks");
  const [activeHeader, setActiveHeader] = useState<string>("");
  const router = useRouter();
  const data: { key: string; label: string }[] = [
    { key: "marks", label: "Marks & Attendance" },
    { key: "circulars", label: "Circulars" },
    { key: "tt", label: "Examination Timetables" },
  ];
  const searchParams = useSearchParams();
  const parmasActive = searchParams.get("tab");

  useEffect(() => {
    if (parmasActive === "tt") setActiveHeader("Examination Timetables");
    else if (parmasActive === "circulars") setActiveHeader("Circulars");
    else if (parmasActive === "marks") setActiveHeader("Marks & Attendance");
    else router.replace("/not-found");
  }, [parmasActive]);
  return (
    <section className="px-4 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-16 xl:py-36 md:py-20 text-[#1D1D1F]">
      <div>
        <h1 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl font-bold text-[#1D1D1F] text-center md:text-left">Examinations & Records</h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mt-14">
          <div className="md:col-span-4 ">
            <div>
              {data.map((item, index) => (
                <Link href={`/academics/examination-records?tab=${item.key}`} key={item.key}>
                  <div key={index} className={`flex justify-between pb-3 mb-3 ${index < data.length - 1 ? "border-b-2 border-border" : ""}`}>
                    <h1
                      className={`text-[20px] ${activeHeader === item.label ? "text-[#2884CA] font-bold" : "text-textGray"} cursor-pointer`}
                      onClick={() => setActiveHeader(item.label)}
                    >
                      {item.label}
                    </h1>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {activeHeader === "Marks & Attendance" && (
            <div className="md:col-span-8">
              <div className="flex flex-row justify-center sm:gap-10 gap-4 items-center mb-10">
                <button
                  aria-label="Marks Tab"
                  onClick={() => setActiveTab("Marks")}
                  className={`border-b-2 ${activeTab == "Marks" ? "font-bold" : ""} cursor-pointer text-[17px] border-border pb-2 px-6 sm:px-10`}
                >
                  Marks
                </button>
                <button
                  aria-label="Attendance Tab"
                  onClick={() => setActiveTab("Attendance")}
                  className={`border-b-2 ${activeTab == "Attendance" ? "font-bold" : ""} cursor-pointer text-[17px] border-border pb-2 px-6 sm:px-10`}
                >
                  Attendance
                </button>
              </div>
              {activeTab === "Marks" && (
                <input type="text" placeholder="Enter Your Student USN" className="border-b-2 outline-none w-full border-border pb-2 text-textGray" />
              )}
              {activeTab === "Attendance" && (
                <input
                  type="text"
                  placeholder="Enter Your Student USN"
                  className="border-b-2 outline-none w-full border-border pb-2 text-textGray"
                />
              )}

              <div className="flex justify-center items-center mt-10">
                <button aria-label="Apply Now" className="text-center text-white cursor-pointer px-6 sm:px-8 py-2 rounded-3xl bg-[#2884CA]">
                  Apply Now
                </button>
              </div>
            </div>
          )}
          {activeHeader === "Circulars" && (
            <div className="md:col-span-8 text-[#959cb4]">
              <h1 className="text-[20px] font-bold text-textGray mb-2">VTU Circular</h1>
              <div className="flex items-center">
                <div className="flex items-center gap-2 mt-2 hover:text-blue-600">
                  <HiLink className="text-textGray hover:text-blue-600 " />
                  <a href="https://vtu.ac.in/en/#1554889506437-64c3b5d5-d21e" target="_blank">
                    Open VTU Circulars
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FormSection;
