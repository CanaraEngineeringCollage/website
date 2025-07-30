import React from "react";
import { HiDownload } from "react-icons/hi";

const AboutDepartment = () => {
  return (
    <section className="md:py-10 pb-20  max-w-7xl xl:max-w-[75%] mx-auto lg:px-32">
      <div className="">
        <div className="flex justify-between items-center pb-5 lg:pb-10">
          <h1 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl  font-bold text-black ">About the Department</h1>
          <a
            href="/brochures/Placement Brochure Design.pdf"
            download
            aria-label="Download Brochure"
            className="text-[#2884CA] hidden  font-bold text-[17px] bg-[#d9ebff] px-6 py-2 cursor-pointer rounded-3xl lg:inline-flex gap-3"
          >
            Download Brochure <HiDownload className="text-[24px] font-extrabold" />
          </a>
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
      <a
        href="/brochures/Placement Brochure Design.pdf"
        download
        aria-label="Download Brochure"
        className="text-[#2884CA] lg:hidden mt-10 font-bold text-[17px] bg-[#d9ebff] px-6 py-2 cursor-pointer rounded-3xl inline-flex gap-3"
      >
        Download Brochure <HiDownload className="text-[24px] font-extrabold" />
      </a>
    </section>
  );
};

export default AboutDepartment;
