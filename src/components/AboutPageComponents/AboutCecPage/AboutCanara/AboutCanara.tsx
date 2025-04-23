import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const AboutCanara = () => {
  return (
    <div className="max-w-7xl mx-auto xl:max-w-[75%] text-center pt-20 text-black">
      <h4 className="text-3xl text-textGray py-12">About Canara Engineering College</h4>
      <h1 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl font-bold">A Campus Like No other</h1>
      <p className="lg:text-xl md:text-lg text-[14px] leading-7 pt-16 text-textGray">
        Established in 2001 by the Canara High School Association, Canara Engineering College (CEC) has grown into a distinguished engineering
        institution in Karnataka’s coastal region. Spanning 26 acres in Benjanapadavu, Mangalore, CEC blends academic excellence with cutting-edge
        infrastructure to provide quality education at an affordable cost.
      </p>
      <p className="lg:text-xl md:text-lg text-[14px] leading-7 pt-12 text-textGray">
        With seven engineering programs—including Computer Science, AI & Machine Learning, and Computer Science & Business Systems—CEC ensures
        students are equipped with industry-relevant skills. Accredited by NBA & NAAC (A Grade, CGPA 3.24), the institute maintains a 1:15
        faculty-student ratio, fostering personalized learning and outstanding academic results.
      </p>
      <p className="lg:text-xl md:text-lg text-[14px] leading-7 pt-12 text-textGray">
        CEC’s vibrant campus, home to 1,900+ students, features advanced labs, an extensive library, & hostels. Student-driven clubs, IEEE chapters, &
        state-level tech fests nurture holistic development. The Training & Placement Cell secures nearly 90% placements in CSE & allied branches,
        with top packages reaching ₹24 LPA & a median salary of ₹7 LPA.
      </p>
      <p className="lg:text-xl md:text-lg text-[14px] leading-7 pt-12 text-textGray">
        With active industry tie-ups, government-funded R&D projects, & growing research contributions, CEC continues to evolve, ensuring students
        stay ahead in the ever-changing tech landscape.
      </p>
      <button className="pt-8 inline-flex items-center cursor-pointer text-[#0066CC]">
        Read More <MdKeyboardArrowRight className="text-xl text-[#0066CC]" />
      </button>
    </div>
  );
};

export default AboutCanara;
