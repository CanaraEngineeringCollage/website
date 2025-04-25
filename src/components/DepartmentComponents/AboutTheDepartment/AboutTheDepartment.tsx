import React from "react";

interface AboutTheDepartmentProps {
  aboutTheDepartment: string;
}

const AboutTheDepartment: React.FC<AboutTheDepartmentProps> = ({ aboutTheDepartment }) => {
  return (
    <section className="md:py-20 xl:py-44 pb-20 max-w-7xl xl:max-w-[75%] mx-auto lg:px-32">
      <div>
        <h1 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl font-bold text-black pb-5 lg:pb-10">
          About the Department
        </h1>
        <p className="text-textGray text-[20px]">
          {aboutTheDepartment}
        </p>
      </div>
    </section>
  );
};

export default AboutTheDepartment;
