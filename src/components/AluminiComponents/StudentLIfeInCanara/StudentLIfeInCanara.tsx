import Link from "next/link";
import React from "react";

const StudentLIfeInCanara = () => {
  return (
    <section className="md:py-16 xl:py-24  py-5   max-w-7xl xl:max-w-[75%] mx-auto  lg:px-0">
      <div className="">
        <div className="flex justify-between mb-5 lg:mb-10 items-center">
        <h1 className="text-3xl md:text-[40px] text-center lg:text-start lg2:text-5xl xl:text-6xl  font-bold text-[#1D1D1F] ">A Holistic Student Life at Canara</h1>
         <Link href={`/alumni/about-alumni`}>
                     <button className="bg-[#007AFF26] text-[#1D1D1F] hidden lg:block hover:bg-blue-200 rounded-4xl px-6 py-2.5">More About the Alumni</button>
                   </Link>
       </div>
        <p className="text-textGray text-justify lg:text-start   text-[20px]">
          Alumni can give back to their college by sharing the invaluable lessons they've learned along their journey. Whether through mentoring,
          guest lectures, or offering internships, they have the unique opportunity to inspire students just as they once were. Returning to the
          campus where their dreams took shape is a way to pay forward the support, guidance, and memories that helped them succeed. By contributing
          their time, knowledge, or resources, alumni help create a legacy of growth, ensuring the college continues to nurture future leaders with
          the same warmth and opportunity they once experienced.
        </p>
      </div>
      <div className="lg:hidden flex justify-center mt-5">
       <Link href={`/alumni/about-alumni`}>
                     <button className="bg-[#007AFF26] text-[#1D1D1F]  lg:hidden hover:bg-blue-200 rounded-4xl px-6 py-2.5">More About the Alumni</button>
                   </Link>

      </div>
    </section>
  );
};

export default StudentLIfeInCanara;
