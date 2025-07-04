import React from 'react';

const table = [
  {
    date: "25-03-2016 and 26-03-2016",
    program: "Entrepreneurship Development Workshop",
    participants: "33",
    orgBody: "IIPC",
  },
  {
    date: "09-11-2016",
    program: "Interaction with an Entrepreneur- Mr. M P Pai",
    participants: "180",
    orgBody: "IEEE/IIPC",
  },
  {
    date: "08-02-2017",
    program:
      "Guest Lecture by Dr. Ashok Prabhu on Awareness of opportunities for entrepreneurship and startups",
    participants: "85",
    orgBody: "IEEE/IIPC",
  },
  {
    date: "10-03-2018",
    program: "The business model workshop",
    participants: "59",
    orgBody: "IEEE/IIPC",
  },
  {
    date: "March 2018",
    program:
      "Talk by Dr U C Niranjan on Entrepreneurship and career in Start Ups based on IoT and Embedded system",
    participants: "125",
    orgBody: "IEEE/IIPC",
  },
  {
    date: "17-11-2018",
    program:
      "One Day summit on technology trends and advancements in Healthcare",
    participants: "159",
    orgBody: "IEEE/IIPC",
  },
  {
    date: "08-03-2019",
    program: "Technical talk on innovation and entrepreneurship",
    participants: "300",
    orgBody: "IEEE/IIPC",
  },
];


const sampleList = [
  "Mr. Srinivas Padiyar, B.E., Mechanical Engineering (2012 pass out) Vinayaka Engineering Works, Baikampady, Mangalore",
  "Mr. Madhav Shenoy, B.E., Mechanical Engineering (2012 pass out) Shenoy Engineering Pvt. Ltd. Bangalore",
  "Mr. Shishir Ram Borkar, B.E., Information Science Engineering (2016 pass out) M.S. Kukkadi Industries, Puttur",
  "Mr. Mayur Bhat, B.E., Electronics and Communication Engineering (2014 pass out), Co-Founder at FableSquare",
  "Ms. Shreelakshmi Gautham, B.E., Electronics and Communication Engineering (2012 pass out), Head - Training & Operations at Jnaapti"
];


const Activities = () => {
  return (
    <div className="max-w-7xl mx-auto lg:px-36 xl:max-w-[75%] py-20 text-black">
      <h1 className='text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl font-bold'>Activities under EDC :</h1>
      <div className="overflow-x-auto py-10">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="border px-4 py-2">Sl No</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Program</th>
              <th className="border px-4 py-2">No of Participants</th>
              <th className="border px-4 py-2">Organizing Body</th>
            </tr>
          </thead>
          <tbody>
            {table.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2">{item.date}</td>
                <td className="border px-4 py-2">{item.program}</td>
                <td className="border px-4 py-2 text-center">{item.participants}</td>
                <td className="border px-4 py-2 text-center">{item.orgBody}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center py-10">
      <img src='https://www.canaraengineering.in/assets/images/e2.jpg' />
      </div>
      <h1 className='text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl font-bold leading-[1.3]'>Sample list of graduates from CEC who have turned Entrepreneurs:</h1>
      <ul className='lg:text-xl text-start list-decimal ml-5 md:text-lg text-[14px] leading-7 py-10 text-textGray'>
        {sampleList.map((item,index)=>
        <li className='pb-3'>{item}</li>
        )}
      </ul>
      <h1 className='text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl font-bold '>Other Achievements:</h1>
      <p className='lg:text-xl text-start list-decimal  md:text-lg text-[14px] leading-7 py-10 text-textGray'>
       On 29th January, two students, Sumanth Shenoy and Aditya Pai, both members of IEEECan won the first place in Social Innovation stream in DEFI 2017 - a Startup Event at TAPMI, Manipal, under the aegis of Manipal University Technology and Business Incubator (MUTBI), aimed at giving students an opportunity to pitch their venture idea and empower them through workshops and mentor-ship via association with NASSCOM and MUTBI. The winners are shortlisted for a chance to get an incubation opportunity by MUTBI, one of most prestigious incubators in the country.
      </p>
    </div>
  );
};

export default Activities;
