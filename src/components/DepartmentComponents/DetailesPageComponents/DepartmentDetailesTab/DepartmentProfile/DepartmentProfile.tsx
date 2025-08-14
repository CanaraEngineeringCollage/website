import React from "react";

interface keyPoints {
  title: string;
  points: string[];
}

const DepartmentProfile = ({ data, keyPoints }: { data?: string; keyPoints?: keyPoints[] }) => {
  return (
    <div className="lg2:px-24 px-5 text-[#86868B]">
      <h1 className="text-[#86868B] text-lg md:text-xl font-bold mb-2">About The Department</h1>
      <p className="md:text-lg  text-[14px] leading-7 text-justify text-textGray">{data}</p>
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
    </div>
  );
};

export default DepartmentProfile;
