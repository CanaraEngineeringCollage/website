import React from "react";

// 1. Updated Interface to support the new dynamic sections
interface RoleSection {
  heading: string;
  roles: string[];
}

interface CareerProspectsData {
  title: string;
  marketOverview: string;
  careerOpportunities: string;
  roleSections: RoleSection[];
  roleDescription?: string;
}

const CareerProspects = ({ data }: { data: CareerProspectsData[] }) => {
  // Safety check to prevent the mapping error if data is undefined
  if (!data || !Array.isArray(data)) return null;

  return (
    <div className="text-textGray">
      {data.map((item, index) => (
        <div key={index} className="mb-8 last:mb-0">
          
          <h1 className="text-textGray text-2xl font-semibold mb-2">
            {item.title}
          </h1>

          {/* Market Overview */}
          <p className="md:text-lg text-[14px] leading-7 text-justify text-textGray mb-2">
            {item.marketOverview}
          </p>

          {/* Career Opportunities */}
          <p className="md:text-lg text-[14px] leading-7 text-justify text-textGray mb-2">
            {item.careerOpportunities}
          </p>

          {/* Dynamic Role Sections */}
          <div className="roles-container">
            {item.roleSections?.map((section, secIdx) => (
              <div key={secIdx}>
                {/* Dynamically rendering the heading keeping your exact styles */}
                <h2 className="text-base md:text-lg mt-4 font-bold">
                  {section.heading}
                </h2>
                
                {/* Keeping your exact list styles */}
                <ul className="list-disc ml-5 md:text-lg text-[14px] leading-7 pt-2 text-textGray mb-2">
                  {section.roles?.map((role, roleIdx) => (
                    <li key={roleIdx}>{role}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Role Description */}
          {item.roleDescription && (
            <p className="md:text-lg text-[14px] leading-7 text-justify text-textGray">
              {item.roleDescription}
            </p>
          )}
          
        </div>
      ))}
    </div>
  );
};

export default CareerProspects;