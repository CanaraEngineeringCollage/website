"use client"; // Required for state management
import ContactFormModal from "@/components/Modal/Modal";
import Link from "next/link";
import React, { useState } from "react";
import { HiDownload } from "react-icons/hi";
import TrainingPlacementModal from "../ModalTraininigPlacement/ModalTraininigPlacement";
import Button from "@/components/Common/Button/Button";


const AboutDepartment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to programmatically download the file
  const triggerFileDownload = () => {
    const link = document.createElement("a");
    link.href = "/brochures/Placement Brochure - Canara_Engineering_College - Deepthi Prabhu.pdf";
    link.setAttribute("download", "Placement Brochure Design.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="pb-5 md:pb-2 max-w-7xl xl:max-w-[75%] mx-auto lg:px-32">
      {/* Include Modal Component */}
      <TrainingPlacementModal 
        isOpen={isModalOpen} 
        onClose={setIsModalOpen} 
        onSuccess={triggerFileDownload} // Pass the download logic here
      />

      <div className="">
        <div className="flex justify-between items-center pb-5 lg:pb-10">
          <h1 className="text-3xl md:text-[40px] lg2:text-[46.5px] xl:text-6xl leading-[1.2] xl:max-w-4xl font-bold text-[#1D1D1F] ">
            Training &amp; Placement at <br className="hidden lg:block"/> Canara Engineering College
          </h1>
 <div className="flex-col hidden md:flex gap-3 items-end">
  {/* Download Brochure */}
 <Button variant="primary1"
    onClick={() => setIsModalOpen(true)}
    aria-label="Download Brochure"
    className="text-white hidden font-bold text-[17px] bg-primary
               px-6 py-2 cursor-pointer rounded-3xl lg:inline-flex gap-3 
               items-center min-w-[250px] justify-center "
  >
    Download Brochure <HiDownload className="text-[24px] font-extrabold" />
    </Button>

    
   

</div>



        </div>
        <p className="text-textGray text-lg lg:text-[20px] pb-5">
          Canara Engineering College has built a strong reputation in the competitive academic and corporate landscape. Our consistent placement
          record, even during challenging economic cycles, reflects the quality of education and training our students receive. The achievements of
          our alumni, who continue to make their mark in leading organizations worldwide, are a testament to the standards we uphold.
        </p>
        <p className="text-textGray text-lg lg:text-[20px] pb-5">
          At the Training &amp; Placement (T&amp;P) Department, our mission goes beyond ensuring knowledge in the classroom. We focus on preparing
          students to step confidently into their careers and contribute meaningfully to society as responsible professionals.
        </p>
        <p className="text-textGray text-lg lg:text-[20px] pb-5">
          Our structured training program spans all four years of the degree and includes over 400 hours of learning and practice. It is carefully
          designed to provide holistic development through:
        </p>
        <ul className="list-disc space-y-2 text-textGray text-lg lg:text-[20px] ps-5 pb-5">
          <li>
            <b>Aptitude Training</b> – sharpening logical reasoning, problem-solving, and quantitative abilities.
          </li>
          <li>
            <b>Soft Skills</b> &amp; Personality Development – building communication, leadership, teamwork, corporate etiquette, and self-confidence.
          </li>
          <li>
            <b>Career Preparation</b> – resume workshops, career counseling, mock interviews, and public speaking.
          </li>
          <li>
            <b>Technical Training</b> – aligning with the latest industry requirements and technologies.
          </li>
        </ul>
        <p className="text-textGray text-lg lg:text-[20px] pb-5">
          These sessions are delivered by expert trainers, corporate professionals, and industry leaders, bridging the gap between academia and the
          workplace. With a practical, hands-on approach and continuous assessments, students not only gain skills but also the confidence to apply
          them effectively.
        </p>
        <p className="text-textGray text-lg lg:text-[20px] pb-5">
          Through strong industry collaborations, a future-focused curriculum, and committed mentorship, the T&amp;P Department ensures that our
          students graduate as industry-ready professionals. Year after year, this effort translates into exceptional placement outcomes and the
          continuation of a proud legacy of success.
        </p>
      </div>

  
      
      <div className="flex flex-col items-center gap-3 justify-center lg:hidden">
        {/* Mobile Button - Changed from <a> to <button> to open Modal */}
        <button
          onClick={() => setIsModalOpen(true)}
          aria-label="Download Brochure"
          className="text-[#2884CA] lg:hidden mt-2 font-bold text-[17px] bg-[#d9ebff] min-w-[250px] px-6 py-2 cursor-pointer rounded-3xl flex gap-3 items-center"
        >
          Download Brochure <HiDownload className="text-[24px] font-extrabold" />
        </button>
 
      </div>
    </section>
  );
};

 export default AboutDepartment;






