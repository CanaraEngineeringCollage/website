import React from "react";

interface keyPoints {
  title: string;
  points: string[];
}

const DepartmentProfile = ({ data, keyPoints, annualIntake}: { data?: string; keyPoints?: keyPoints[]; annualIntake?: string;}) => {
  return (
    <div className="  text-textGray">
      <h1 className="text-textGray text-lg md:text-xl font-bold mb-2">About The Department</h1>
    {data?.map((paragraph, index) => (
        <p
          key={index}
          className="md:text-lg text-[14px] leading-7 text-justify text-textGray mb-3"
        >
          {paragraph}
        </p>
      ))}
      {keyPoints &&
        keyPoints.map((item) => {
          return <div key={item.title}><h1 className="text-base md:text-lg mt-2 font-bold">{item.title}</h1>
          <ul className="list-disc ml-5 md:text-lg  text-[14px] leading-7 pt-2 text-textGray">
            {item.points.map((point) =>
              <li key={point} className="">
                {point}
              </li>
            )}
          </ul>
          
          </div>;
        })}
       {annualIntake&&<p className="font-semibold text-[20px]">Annual Intake: {annualIntake}</p>}

    </div>
  );
};

export default DepartmentProfile;
