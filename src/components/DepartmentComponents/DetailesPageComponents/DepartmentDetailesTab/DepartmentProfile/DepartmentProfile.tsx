import React from "react";

interface keyPoints {
  title: string;
  points: string[];
}

const DepartmentProfile = ({ data, keyPoints }: { data?: string; keyPoints?: keyPoints[] }) => {
  console.log(keyPoints);

  return (
    <div className="lg2:px-24 mx-5 text-[#86868B] text-[17px]">
      <h1 className="text-[#86868B] text-xl font-extrabold mb-2">About The Department</h1>
      {data}
      {keyPoints &&
        keyPoints.map((item) => {
          return <div><h1 className="text-lg mt-2">{item.title}</h1>
          <ul>
            {item.points.map((point) =>
              <li key={point} className="list-disc ml-5">
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
