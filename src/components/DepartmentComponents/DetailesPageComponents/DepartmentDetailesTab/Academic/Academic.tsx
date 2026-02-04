import Image from "next/image";
interface AcademicProps {
  des: string | string[];
  points?: string[];
  annualIntake?: number | string;
  title?: string;
  academicAdditionalSkills?: {
    title: string;
    imageUrl: string;
    desc?: string;
    points: string[];
  }[];
}

const Academic = ({
  data,
  academicsProgramEce,
}: {
  data?: AcademicProps;
  academicsProgramEce?: any;
}) => {



  

  // 👉 If data exists → render normal Academic
  if (data) {
    return (
      <div className="text-textGray text-[17px]">

        {data.title && (
          <h1 className="text-[20px] font-bold mb-4">{data.title}</h1>
        )}

        {Array.isArray(data.des) ? (
          data.des.map((paragraph, index) => (
            <p
              key={index}
              className="mb-4 text-justify text-[14px] md:text-lg leading-7"
            >
              {paragraph}
            </p>
          ))
        ) : (
          <p className="mb-4 text-justify text-[14px] md:text-lg leading-7">
            {data.des}
          </p>
        )}

        {data.points && (
          <ul className="list-disc md:text-lg text-[14px] pl-5 mb-4">
            {data.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}

        {data.academicAdditionalSkills?.map((item, index) => (
          <div key={index}>
            <h2 className="text-[20px] font-bold mt-4 mb-2">
              {item.title}
            </h2>

            {item.desc && <p className="text-justify md:text-lg text-[14px] mb-2">{item.desc}</p>}

            <ul className="list-disc md:text-lg text-[14px] pl-5 mb-4">
              {item.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            {item.imageUrl && (
              <Image
                src={item.imageUrl}
                width={1000}
                height={1000}
                alt={item.title}
                className="mb-4"
              />
            )}
          </div>
        ))}

        {data.annualIntake && (
          <p className="font-semibold text-[14px] lg:text-[20px]">
            Annual Intake: {data.annualIntake}
          </p>
        )}
      </div>
    );
  }

  // 👉 Else → render Academics Program (ECE)
  return academicsProgramEce ? (
    <AcademicsProgramECE program={academicsProgramEce} />
  ) : null;
};

export default Academic;
const AcademicsProgramECE = ({ program }: { program: any }) => {
  return (
    <div className="text-textGray text-[17px] space-y-6">

      {/* Programme Duration */}
      <section>
        <h2 className="text-[20px] font-bold mb-2">
          {program.programmeDuration.title}
        </h2>
        <ul className="list-disc pl-5 mb-3">
          {program.programmeDuration.details.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p className="text-justify">{program.programmeDuration.description}</p>
      </section>

      {/* Program Overview */}
      <section>
        <h2 className="text-[20px] font-bold mb-2">
          {program.programOverview.title}
        </h2>
        <p className="text-justify">{program.programOverview.description}</p>
      </section>

      {/* Foundations */}
      <section>
        <h2 className="text-[20px] font-bold mb-2">
          {program.foundationsOfECE.title}
        </h2>
        <p className="mb-3 text-justify">
          {program.foundationsOfECE.description}
        </p>
        <ul className="list-disc pl-5 mb-3">
          {program.foundationsOfECE.foundations.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p className="text-justify">
          {program.foundationsOfECE.summary}
        </p>
      </section>

      {/* Why Study ECE */}
      <section>
        <h2 className="text-[20px] font-bold mb-2">
          {program.whyStudyECE.title}
        </h2>
        <ul className="list-disc pl-5 mb-3">
          {program.whyStudyECE.idealFor.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p className="text-justify">
          {program.whyStudyECE.learningOutcomes}
        </p>
      </section>

      {/* Eligibility */}
      <section>
        <h2 className="text-[20px] font-bold mb-2">
          {program.eligibilityCriteria.title}
        </h2>
        <ul className="list-disc pl-5">
          {program.eligibilityCriteria.criteria.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

    </div>
  );
};
