import Image from 'next/image';
import React from 'react'

interface PeoProps {
  
    programEducation?: string[];
    programOutComes?: string[];
    programSpecific?: string[];

}


const Peo = ({ data,deptName }:{data:PeoProps;deptName:string}) => {
  console.log("PEO Data:", data);
  
  return (
    <div className='lg2:px-24 mx-5'>
      {data?.programEducation&&<h1 className="text-[20px] font-extrabold text-[#86868B] mb-3">Program Educational Objectives (PEO)</h1>}
      {data?.programEducation&&<ul className="list-disc pl-5 md:text-lg  text-[14px] leading-7 pt-2 text-textGray">
        {data?.programEducation?.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>}

      <h1 className="text-[20px] font-extrabold mt-5 mb-2 text-[#86868B]">Program Outcomes (PO)</h1>
      <h3 className='mb-3 md:text-lg  text-[14px] leading-7  text-textGray'>Engineering graduates in <span className='font-bold'>{`${deptName}`}</span> will be able to:</h3>
      <ul className="list-disc pl-5 md:text-lg  text-[14px] leading-7  text-textGray">
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

    {data?.programSpecific&& <h1 className="text-[20px] font-extrabold mt-5 mb-2 text-[#86868B]">Program Specific Outcomes (PSO)</h1>}
      {data?.programSpecific&&<ul className="list-disc pl-5 md:text-lg  text-[14px] leading-7  text-textGray">
        {data?.programSpecific?.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>}
      
    </div>
  )
}

export default Peo
