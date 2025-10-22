"use client";
import React, { useState } from "react";
import GrievanceForm from "../GrievanceForm/GrievanceForm";
import KnowYourStatus from "../KnowYourStatus/KnowYourStatus";
import Link from "next/link";

const ScStGrievance = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="text-[#1D1D1F] ">
      <div className="max-w-2xl mx-auto p-6   flex justify-between">
        <Link href={"https://www.canaraengineering.in/SCSTGrievance"} target="_blank"><button
          // onClick={() => setSelected("New Grievance")}
          className={` ${selected === "New Grievance" ? "bg-[#539dd5] text-white" : "text-[#539dd5]"} rounded-full border-1  py-3 px-5 lg:px-20`}
        >
          New Grievance
        </button>
        </Link>
       <Link href={"https://www.canaraengineering.in/status_griv"} target="_blank"> <button
          // onClick={() => setSelected("Know Your Status")}
          className={` ${selected === "Know Your Status" ? "bg-[#539dd5] text-white" : "text-[#539dd5]"}  rounded-full border-1 py-3 px-5 lg:px-20`}
        >
          Know Your Status
        </button></Link>
      </div>

      {/* {selected === "New Grievance" && <GrievanceForm />}
      {selected === "Know Your Status" && <KnowYourStatus />} */}
    </div>
  );
};

export default ScStGrievance;
