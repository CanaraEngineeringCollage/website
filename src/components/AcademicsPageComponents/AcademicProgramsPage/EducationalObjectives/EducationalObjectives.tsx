import Image from "next/image";
import React from "react";

const EducationalObjectives = () => {
  return (
    <section className="max-w-7xl xl:max-w-[75%] mx-auto text-black mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Left Card */}
        <div className="md:col-span-7 ">
          <div className="bg-white px-8 rounded-3xl shadow-md py-10 space-y-6 h-full">
            <h2 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl font-bold text-gray-900">Educational Objectives</h2>
            <div className="space-y-10">
              <div className="flex gap-10 items-center">
                <div className="flex-shrink-0">
                  <Image src="/academicPageImages/svg/1.svg" alt="Leadership Icon" width={50} height={50} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-textGray">Leadership & Professionalism</h3>
                  <p className="text-textGray text-[17px] lg:pe-10">Demonstrate leadership qualities & uphold high professional standards.</p>
                </div>
              </div>

              <div className="flex items-center gap-10">
                <div className="flex-shrink-0">
                  <Image src="/academicPageImages/svg/2.svg" alt="Career Icon" width={50} height={50} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-textGray">Career Success</h3>
                  <p className="text-textGray text-[17px] lg:pe-10">Excel in their professional journey with expertise & adaptability.</p>
                </div>
              </div>

              <div className="flex items-center gap-10">
                <div className="flex-shrink-0">
                  <Image src="/academicPageImages/svg/3.svg" alt="Problem Solving Icon" width={50} height={50} />
                </div>
                <div>
                  <h3 className="text-[20px] font-extrabold text-textGray">Technological Problem-Solving</h3>
                  <p className="text-textGray text-[17px] lg:pe-10">
                    Apply Electronics & Communication knowledge to solve industry & societal challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="md:col-span-5">
          <div className="bg-white px-8 rounded-3xl shadow-md py-10 h-full space-y-6">
            <h2 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl font-bold leading-[1.1] text-gray-900">Program Specific Outcomes</h2>

            <div className="flex gap-10 items-start">
              <div className="flex-shrink-0">
                <Image src="/academicPageImages/svg/4.svg" alt="Leadership Icon" width={50} height={50} />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-textGray">System Development & Programming</h3>
                <p className="text-textGray text-[17px] lg:pe-10">
                  Specify, design, build & test analog, digital & embedded systems while applying programming skills in relevant fields.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-10">
              <div className="flex-shrink-0">
                <Image src="/academicPageImages/svg/5.svg" alt="Career Icon" width={50} height={50} />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-textGray">Communication Systems Expertise</h3>
                <p className="text-textGray text-[17px] lg:pe-10">
                  Understand & apply modern wired & wireless analog & digital communication systems to solve existing challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalObjectives;
