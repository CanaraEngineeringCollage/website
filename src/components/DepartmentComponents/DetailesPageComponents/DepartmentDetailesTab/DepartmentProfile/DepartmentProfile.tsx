import React from "react";

interface keyPoints {
  title: string;
  points: string[];
}

interface SectionWithPoints {
  title: string;
  points?: string[];
  description?: string;
  studentBenefits?: string[];
  practices?: string[];
}

interface KeyPracticesECE {
  accreditationAndRecognition: SectionWithPoints;
  academicExcellence: SectionWithPoints;
  infrastructureAndIndustryConnect: SectionWithPoints;
  commitmentToStudents: SectionWithPoints;
  qualityEducationStatement: {
    description: string;
  };
}

const DepartmentProfile = ({
  data,
  keyPoints,
  annualIntake,
  keyPracticesECE,
}: {
  data?: string[];
  keyPoints?: keyPoints[];
  annualIntake?: string;
  keyPracticesECE?: KeyPracticesECE[];
}) => {
  return (
    <div className="text-textGray">
      <h1 className="text-lg md:text-xl font-bold mb-2">
        About The Department
      </h1>

      {/* About paragraphs */}
      {data?.map((paragraph, index) => (
        <p
          key={index}
          className="md:text-lg text-[14px] leading-7 text-justify mb-3"
        >
          {paragraph}
        </p>
      ))}

      {/* Key Points */}
      {keyPoints?.map((item) => (
        <div key={item.title}>
          <h2 className="text-base md:text-lg mt-2 font-bold">
            {item.title}
          </h2>
          <ul className="list-disc ml-5 md:text-lg text-[14px] leading-7 pt-2">
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* ECE Key Practices */}
      {keyPracticesECE?.map((section, index) => (
        <div key={index} className="mt-4">
          {Object.values(section).map((item: any, idx) => (
            <div key={idx} className="mt-3">
              {item.title && (
                <h2 className="text-base md:text-lg font-bold">
                  {item.title}
                </h2>
              )}

              {item.description && (
                <p className="md:text-lg text-[14px] leading-7 mt-2">
                  {item.description}
                </p>
              )}

              {(item.points || item.studentBenefits || item.practices) && (
                <ul className="list-disc ml-5 md:text-lg text-[14px] leading-7 mt-2">
                  {(item.points ||
                    item.studentBenefits ||
                    item.practices)?.map((point: string) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}

      {/* Annual Intake */}
      {annualIntake && (
        <p className="font-semibold text-[20px] mt-4">
          Annual Intake: {annualIntake}
        </p>
      )}
    </div>
  );
};

export default DepartmentProfile;
