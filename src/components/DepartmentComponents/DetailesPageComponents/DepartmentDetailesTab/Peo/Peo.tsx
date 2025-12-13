
import React from 'react'

interface PeoProps {
  programEducation?: string[];
  programOutComes?: string[];
  programSpecific?: string[];
}

const knowledgeAndAttitudeProfile = [
  "WK1: A systematic, theory-based understanding of the natural sciences applicable to the discipline and awareness of relevant social sciences.",
  "WK2: Conceptually-based mathematics, numerical analysis, data analysis, statistics and formal aspects of computer and information science to support detailed analysis and modelling applicable to the discipline.",
  "WK3: A systematic, theory-based formulation of engineering fundamentals required in the engineering discipline.",
  "WK4: Engineering specialist knowledge that provides theoretical frameworks and bodies of knowledge for the accepted practice areas in the engineering discipline; much is at the fore front of the discipline.",
  "WK5: Knowledge, including efficient resource use, environmental impacts, whole-life cost, re-use of resources, net zero carbon, and similar concepts, that supports engineering design and operations in a practice area.",
  "WK6: Knowledge of engineering practice (technology) in the practice areas in the engineering discipline.",
  "WK7: Knowledge of the role of engineering in society and identified issues in engineering practice in the discipline, such as the professional responsibility of an engineer to public safety and sustainable development.",
  "WK8: Engagement with selected knowledge in the current research literature of the discipline, awareness of the power of critical thinking and creative approaches to evaluate emerging issues.",
  "WK9: Ethics, inclusive behaviour and conduct. Knowledge of professional ethics, responsibilities, and norms of engineering practice. Awareness of the need for diversity by reason of ethnicity, gender, age, physical ability etc. with mutual understanding and respect, and of inclusive attitudes."
]

const Peo = ({ data, deptName }: { data: PeoProps; deptName: string }) => {

  return (
    <div className=''>
      {/* --- PEO Section --- */}
      {data?.programEducation && <h1 className="text-[20px]  font-bold text-textGray mb-3">Program Educational Objectives (PEO)</h1>}
      
      {data?.programEducation && deptName === "Mechanical Engineering" && <h3 className='mb-3 md:text-lg  text-[14px] leading-7  text-textGray'>Graduates of Mechanical Engineering program will:</h3>}
      
      {data?.programEducation && <ul className="list-decimal pl-5 md:text-lg text-justify  text-[14px] leading-7 pt-2 text-textGray">
        {data?.programEducation?.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>}

      {/* --- PO Section --- */}
      <h1 className="text-[20px] font-bold mt-5 mb-2 text-textGray">Program Outcomes (PO)</h1>
      
      {deptName !== "Mechanical Engineering" ? <h3 className='mb-3 md:text-lg  text-[14px] leading-7  text-textGray'>Engineering graduates in <span className='font-bold'>{`${deptName}`}</span> will be able to:</h3> : <h3 className='mb-3 md:text-lg  text-[14px] leading-7  text-textGray'>Engineering graduates will be able to:</h3>}
      
      <ul className="list-disc pl-5 md:text-lg text-justify  text-[14px] leading-7  text-textGray">
        {data?.programOutComes?.map((item, index) => {
          const colonIndex = item.indexOf(':');
          if (colonIndex !== -1) {
            const beforeColon = item.slice(0, colonIndex);
            const afterColon = item.slice(colonIndex + 1);
            return (
              <li key={index} className="mb-2">
                <span className="font-bold">{beforeColon}:</span>
                {afterColon}
              </li>
            );
          }
          return <li key={index} className="mb-2">{item}</li>
        })}
      </ul>

      {/* --- PSO Section --- */}
      {data?.programSpecific && <h1 className="text-[20px] font-bold mt-5 mb-2 text-textGray">Program Specific Outcomes (PSO)</h1>}
      
      {data?.programSpecific && <ul className="list-decimal text-justify pl-5 md:text-lg  text-[14px] leading-7  text-textGray">
        {data?.programSpecific?.map((item, index) => {
          const colonIndex = item.indexOf(':');
          if (colonIndex !== -1) {
            const beforeColon = item.slice(0, colonIndex);
            const afterColon = item.slice(colonIndex + 1);
            return (
              <li key={index} className="mb-2">
                <span className="font-bold">{beforeColon}:</span>
                {afterColon}
              </li>
            );
          }
          return <li key={index} className="mb-2">{item}</li>
        })}
      </ul>}

      {/* --- New WK (Knowledge Profile) Section --- */}
      <h1 className="text-[20px] font-bold mt-5 mb-2 text-textGray">Knowledge and Attitude Profile (WK)</h1>
      <ul className="list-none  md:text-lg text-justify text-[14px] leading-7 text-textGray">
        {knowledgeAndAttitudeProfile.map((item, index) => {
          const colonIndex = item.indexOf(':');
          if (colonIndex !== -1) {
            const beforeColon = item.slice(0, colonIndex);
            const afterColon = item.slice(colonIndex + 1);
            return (
              <li key={index} className="mb-2">
                {/* Formatting WK1, WK2 etc. as bold */}
                <span className="font-bold">{beforeColon}:</span>
                {afterColon}
              </li>
            );
          }
          return <li key={index} className="mb-2">{item}</li>
        })}
      </ul>

    </div>
  )
}

export default Peo