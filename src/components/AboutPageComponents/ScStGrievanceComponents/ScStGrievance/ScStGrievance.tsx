"use client"
import React, { useState } from "react";
import GrievanceForm from "../GrievanceForm/GrievanceForm";

const ScStGrievance = () => {

    const [selected,setSelected] = useState("New Grievance");
  return (
    <div className="text-black ">
      
      <div className="max-w-2xl mx-auto p-6   flex justify-between">
       <button onClick={()=>setSelected("New Grievance")} className="rounded-full border-1 py-3 px-20">New Grievance</button>
        <button onClick={()=>setSelected("Know Your Status")} className="rounded-full border-1 py-3 px-20">Know Your Status</button>
      </div>

       {selected==="New Grievance"&&<GrievanceForm />}
    </div>
  );
};

export default ScStGrievance;
