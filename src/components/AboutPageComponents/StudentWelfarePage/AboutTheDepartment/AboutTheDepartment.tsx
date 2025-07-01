import React from "react";

const AboutTheDepartment = () => {
  return (
    <section className="md:pt-20 xl:pt-44  max-w-7xl xl:max-w-[90%] mx-auto lg:px-32">
      <div className="">
        <h1 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl  font-bold text-black pb-5 lg:pb-10">About the Department</h1>
        <p className="text-textGray text-justify text-[20px]">
          The Department of Student Welfare was setup in Canara Engineering College during the academic year 2010-2011. Ably lead by{" "}
          <strong> Dr. Priya V. Frank,</strong>the department is committed to student wellbeing and betterment. It strives for the all round
          development of the students in all spheres of life through counseling & various other student-oriented programs. The Department aims to
          facilitate a congenial atmosphere for students overall advancemen
        </p>
        <h1 className="text-3xl mt-20 md:text-[40px] lg2:text-5xl xl:text-6xl  font-bold text-black pb-5 lg:pb-10">Department vision</h1>
        <p className="text-textGray text-justify text-[20px]">
          To encourage students' individual, academic and integrated development by providing leadership and counseling services and thus prepare them
          for a diverse, enterprising and global society.
        </p>
        <h1 className="text-3xl mt-20 md:text-[40px] lg2:text-5xl xl:text-6xl  font-bold text-black pb-5 lg:pb-10">Department Mission </h1>
        <ul className="dist text-textGray  list-disc pl-5 space-y-2">
          <li>
            To arrange various leadership, social, extracurricular, and counseling programs to inculcate responsibility among students so as to enable
            them to become productive citizens of the society.
          </li>
          <li>To provide a comprehensive, competent, and responsive system to facilitate a good learning environment for the students.</li>
          <li>To uphold integrity, the highest level of transparency, and accountability.</li>
          <li>To maintain peace, harmony, co-existence, and public goodwill.</li>
          <li>To provide a platform for students to redress their grievances.</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutTheDepartment;
