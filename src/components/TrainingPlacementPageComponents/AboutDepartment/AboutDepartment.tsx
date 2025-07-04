import React from "react";
import { HiDownload } from "react-icons/hi";

const objectives = [
  "To upgrade and stay at par with the current trend and pre-requisites of accomplished employability and incorporate these essentials in training modules.",
  "To exploit all the placement opportunities available and hence ensure placement of Maximum number of students of the Institution.",
  "To improve Credibility and Branding of the Institution, by understanding and catering to the imperatives of the companies and assisting students in developing a career.",
  "To arrange Guest Lectures and Career Guidance sessions by Industry-Experts to promote Placement prospects.",
  "Endeavor to develop a self-sustaining unit of the Institution.",
];

const AboutDepartment = () => {
  return (
    <section className="md:py-10 pb-20  max-w-7xl xl:max-w-[75%] mx-auto lg:px-32 text-black">
      <div className="">
        <div className="flex justify-between items-center pb-5 lg:pb-10">
          <h1 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl  font-bold text-black ">About the Department</h1>
          <button
            aria-label="Download Brochure"
            className="text-[#2884CA] hidden  font-bold text-[17px] bg-[#d9ebff] px-6 py-2 cursor-pointer rounded-3xl lg:inline-flex gap-3"
          >
            Download Brochure <HiDownload className="text-[24px] font-extrabold" />
          </button>
        </div>
        <p className="text-textGray  text-[20px] pb-10">
          Canara Engineering College has carved a niche for itself in the competitive domain. We have been successful in maintaining our high
          placement statistics over the years and the fact that our students bear the recession blues with record breaking placements itself is a
          testimony to our quality. Our ingenious alumni have set new standards in the corporate world through their estimable Contributions and it is
          our firm Conviction that we will continue that legacy in the years to come. It is not enough to tend a garden; the plants must be encouraged
          to bloom and emit fragrance. In the very same way, it is not enough to educate students to make them knowledgeable, it is necessary to
          ensure that they are put on the right path for becoming valuable citizens of the world. This is exactly what the T&P Department of Canara
          Engineering College has the privilege of doing for the students
        </p>
      </div>

      <button
        aria-label="Download Brochure"
        className="text-[#2884CA] lg:hidden mt-10 font-bold text-[17px] bg-[#d9ebff] px-6 py-2 cursor-pointer rounded-3xl inline-flex gap-3"
      >
        Download Brochure <HiDownload className="text-[24px] font-extrabold" />
      </button>
      <div className="">
        <div className="flex justify-between items-center pb-5 lg:pb-10">
          <h1 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl  font-bold text-black ">Vision</h1>
        </div>
        <p className="text-textGray  text-[20px] pb-10">
          To empower every graduating student to secure their desired job for serving the needs of the organization.
        </p>
      </div>
      <div className="">
        <div className="flex justify-between items-center pb-5 lg:pb-10">
          <h1 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl  font-bold text-black ">Mission</h1>
        </div>
        <ul className="list-decimal text-textGray text-[20px] ml-6">
          <li>o provide students with structured training program that develop technical, communication, and problem solving skills.</li>
          <li>To establish and strengthen collaboration with industries for creating internship and placement opportunities.</li>
        </ul>
      </div>
      <div className="lg:mt-10 mt-5">
        <div className="flex justify-between items-center pb-5 lg:pb-10">
          <h1 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl  font-bold text-black ">Objectives</h1>
        </div>
        <ul className="list-disc text-textGray text-[20px] ml-6">
          {objectives.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default AboutDepartment;
