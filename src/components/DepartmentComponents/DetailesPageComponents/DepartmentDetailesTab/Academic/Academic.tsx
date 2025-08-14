import Image from "next/image";
import React from "react";

interface AcademicProps {
  des: string;
  points: string[];
  annualIntake: number | string;
  title?: string;
  academicAdditionalSkills?: {
    title: string;
    imageUrl: string;
    desc?: string;
    points: string[];
  }[];
}

const Academic = ({ data }: { data?: AcademicProps }) => {
  return (
    <div className="lg2:px-24 mx-5 text-[#86868B] text-[17px]">
      {data?.title && <h1 className="text-[20px] font-bold text-[#86868B] mb-4">{data.title}</h1>}
      <p className="mb-4 md:text-lg  text-[14px] leading-7  text-textGray">{data?.des}</p>
      {data?.points && (
        <ul className="list-disc pl-5 mb-4  md:text-lg  text-[14px] leading-7  text-textGray">
          {data?.points?.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
      {data?.academicAdditionalSkills && (
        <div>
          {data?.academicAdditionalSkills.map((item, index) => (
            <div key={index}>
              <h1 className="text-[20px] font-bold text-[#86868B] mt-4 mb-2 ">{item.title}</h1>
              {item.desc && <p className="">{item.desc}</p>}
              {item.points && (
                <ul className="list-disc pl-5 mb-4 md:text-lg  text-[14px] leading-7  text-textGray">
                  {item.points.map((item) => (
                    <li className=" mb-2" key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {item.imageUrl && <Image src={item.imageUrl} width={1000} height={1000} alt={item.title} className="mb-4" />}
            </div>
          ))}
        </div>
      )}
      {data?.annualIntake && <p className="font-semibold">Annual Intake: {data?.annualIntake}</p>}
    </div>
  );
};

export default Academic;
