import React from "react";

interface CareerProspectsData {
  title: string;
  marketOverview: string;
  careerOpportunities: string;
  roles: string[];
  roleDescription: string;
}

const CareerProspects = ({ data }: { data: CareerProspectsData }) => {
  return (
    <div className="text-textGray">
      <h1 className="text-textGray text-lg md:text-xl font-bold mb-4">
        {data.title}
      </h1>

      {/* Market Overview */}
      <p className="md:text-lg text-[14px] leading-7 text-justify text-textGray mb-4">
        {data.marketOverview}
      </p>

      {/* Career Opportunities */}
      <p className="md:text-lg text-[14px] leading-7 text-justify text-textGray mb-4">
        {data.careerOpportunities}
      </p>

      {/* Roles */}
      <h2 className="text-base md:text-lg mt-4 font-bold">Potential Roles</h2>
      <ul className="list-disc ml-5 md:text-lg text-[14px] leading-7 pt-2 text-textGray mb-4">
        {data.roles.map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ul>

      {/* Role Description */}
      <p className="md:text-lg text-[14px] leading-7 text-justify text-textGray">
        {data.roleDescription}
      </p>
    </div>
  );
};

export default CareerProspects;
