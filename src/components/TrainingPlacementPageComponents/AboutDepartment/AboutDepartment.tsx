import React from "react";
import { HiDownload } from "react-icons/hi";

const AboutDepartment = () => {
  return (
    <section className=" md:pb-2 pb-20  max-w-7xl xl:max-w-[75%] mx-auto lg:px-32">
      <div className="">
        <div className="flex justify-between  pb-5 lg:pb-10">
          <h1 className="text-3xl md:text-[40px] lg2:text-[46.5px] xl:text-6xl leading-[1.2] max-w-2xl xl:max-w-3xl  font-bold text-[#1D1D1F] ">About the Training &
            Placements Department</h1>
            <div>
          <a
            href="/brochures/Placement Brochure Design.pdf"
            download
            aria-label="Download Brochure"
            className="text-[#2884CA] hidden  font-bold text-[17px] bg-[#d9ebff] px-6 py-2 cursor-pointer rounded-3xl lg:inline-flex gap-3"
          >
            Download Brochure <HiDownload className="text-[24px] font-extrabold" />
          </a>
          </div>
        </div>
        <p className="text-textGray  text-[20px] pb-5">
          Canara Engineering College has carved a niche for itself in the competitive domain. We have been successful in maintaining our high
          placement statistics over the years and the fact that our students bear the recession blues with record breaking placements itself is a
          testimony to our quality. Our ingenious alumni have set new standards in the corporate world through their estimable Contributions and it is
          our firm Conviction that we will continue that legacy in the years to come. It is not enough to tend a garden; the plants must be encouraged
          to bloom and emit fragrance. In the very same way, it is not enough to educate students to make them knowledgeable, it is necessary to
          ensure that they are put on the right path for becoming valuable citizens of the world. This is exactly what the T&P Department of Canara
          Engineering College has the privilege of doing for the students
        </p>
        <p className="text-textGray  text-[20px] pb-10">
          The training programs equip students with essential skills for success through a structured curriculum of over 400 hours. Spanning all four
          years of the degree, the program integrates aptitude training, soft skills, personality development, and technical education to ensure
          well-rounded growth. The soft skills modules emphasize communication, leadership, teamwork, and corporate etiquette, while personality
          development includes career counseling, resume building, mock interviews, and public speaking. Technical training is designed to align with
          current industry demands. Sessions are conducted by expert trainers and industry professionals, effectively bridging the gap between
          academia and the corporate world. The program’s practical approach, combined with continuous assessment, enables students to refine their
          skills and build confidence. Collaborations with leading industry experts and corporate trainers ensure that students receive up-to-date,
          high-quality training. As a result, the program has consistently transformed students into industry-ready professionals, with many securing
          placements in top companies.
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
