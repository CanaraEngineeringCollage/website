import React from "react";
import ModelTable from "../PhyTable/PhyTable";
const objectives = [
  "To help students to achieve a health-enhancing life of physical activity.",
  "To help students to understand and respect individual differences among people in physical settings.",
  "To provide for a safe physical environment.",
  "To provide students with a variety of activities that will enhance life - long learning and participation.",
  "To develop superior individual / team skills and prowess.",
  "To promote physical excellence.",
];
const duty = [
  "To assist and encourage the students to participate actively in organizing and conducting various sports and games both indoor and outdoor in the college for all students of engineering streams.",
  "To organize intra-class & inter-class sports and games competitions at the college level. To identify talents in various sports and games, both indoor and outdoor. To build strong college level teams to participate at State and National Level competitions.",
  "To encourage the students to actively participate in various sports and games, competitions conducted by other colleges.",
  "To organize college level sports and games competitions both for students and staff as a part of college annual day celebrations.",
  "To organize annual region/state/national level inter collegiate sports and game competitions in the college to promote “Unity in Diversity”.",
  "To maintain records of sports and games events attended by students within the college, within the university and outside at the region/state/national level and their achievements/awards.",
];
const members = [
  ["Mr. Hareesh A", "Physical Director", "Sport"],
  ["Dr. Narayan Naik", "Coordinator", "ISE"],
  ["Mrs. Saritha M", "Member", "CSE"],
  ["Mr. Ajey Shetty", "Member", "CSE"],
  ["Mr. Manjunatha I R", "Member", "ECE"],
  ["Mr. Sandesh Kamath", "Member", "ME"],
  ["Mr. Raghavendra Shetty", "Member", "ECE"],
  ["Mr. Nithin Kurupa U G", "Member", "AIML"],
  ["Mr. Sooriprasad M H", "Member", "CSD"],
  ["Mrs. Aishwarya K", "Member", "CSBS"],
  ["Mr. Shripathi Sanil", "Member", "Admin"],
  ["Mr. Santhosh", "Member", "Lib"],
  ["Mr. Nagesh", "Member", "ME"],
  ["Mr. Ajith Shetty", "Member", "ECE"],
  ["Mr. Bhaskara S", "Member", "CSE"],
  ["Mr. B Rajesh Rao", "Member", "ISE"],
  ["Mr. Jayaprakash", "Member", "AIML"],
  ["Mr. Prajwal", "Member", "CSD"],
  ["Mrs. Shubhashree V", "Member", "CSBS"],
  ["T Vijay Raj Pai - 4CB20IS090", "Student Member", "ISE"],
  ["Mr. Pancham Bhat - 4CB21IS034", "Student Member", "ISE"],
  ["Ms. Vaibhavi Kamath - 4CB21IS063", "Student Member", "ISE"],
  ["Mr. Samarth S Shetty - 4CB21EC045", "Student Member", "ECE"],
  ["Ms. Nidhi G - 4CB21EC025", "Student Member", "ECE"],
  ["Mr. Roopesh V Harkiant - 4CB21EC042", "Student Member", "ECE"],
  ["Mr. Manohar - 4CB20CS055", "Student Member", "CSE"],
  ["Mr. Chethan Kumar K V - 4CB20CS025", "Student Member", "CSE"],
  ["Mr. Vachan K - 4CB21CS121", "Student Member", "ISE"],
  ["Ms. Priya Nayak S - 4CB21CS078", "Student Member", "CSE"],
  ["Mr. Sathvik - 4CB21CB045", "Student Member", "CSBS"],
  ["Ms. Suraksha P Shetty - 4CB21CB054", "Student Member", "CSBS"],
  ["Ms. Shreya J H - 4CB21CG050", "Student Member", "CD"],
  ["Mr. Atharv Krishnas G - 4CB21CG012", "Student Member", "CD"],
  ["Ms. Rashmitha G - 4ZR21AI033", "Student Member", "AIML"],
  ["Mr. Lithin Ullial - 4CB21AI033", "Student Member", "AIML"],
  ["Mr. Nithesh N Nayak - 4CB21ME403", "Student Member", "ME"],
];

const sportsFacilities = [
  ["Indoor Badminton Court", "02"],
  ["Cricket Ground", "01"],
  ["Football Ground", "01"],
  ["Basketball Court", "01"],
  ["Volleyball Court", "01"],
  ["Throwball Court", "01"],
  ["Ball-Badminton Court", "01"],
  ["TT Board", "03"],
  ["Carrom Board", "04"],
  ["Chess Board", "06"],
];

const participation = [
["2023-24", "18", "156"],
["2022-23", "12", "107"],
["2021-22", "06", "68"],
["2019-20", "11", "83"],
["2018-19", "13", "119"],
["2017-18", "12", "101"],
];

const DepartmentSection = () => {
  return (
    <div className="w-full mx-auto  xl:max-w-[75%]   text-[#1D1D1F]">
      {/* <h1 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl  font-bold text-[#1D1D1F]"> Department of Physical Education</h1>
      <p className="lg:text-xl md:text-lg text-[14px] leading-7 pt-5 pb-8 text-textGray">
        Physical education-is an integral part of educational program designed to promote the optimum development of an individual. It makes one
        emotionally, mentally and physically strong. The primary aims of physical education are varied, based on the needs of time and place. Sports
        is commonly defined as an organized, competitive and skillful physical activity requiring commitment and fair play.
      </p> */}
     <section className="w-full bg-none py-16 px-6 md:px-12">
  <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
    {/* Goals Section */}
    <div className="bg-white py-10 px-9 w-[613px] h-[678px] rounded-lg shadow-sm">
      <h1 className="text-3xl md:text-[40px] lg2:text-[36px]  xl:text-6xl font-bold text-[#1D1D1F]">
        Goals
      </h1>
      <p className="lg:text-[17px] md:text-md text-[14px] leading-7 pt-5 pb-8 text-[#86868B]">
      The Aim of organized physical educ  ation, sports and games activities is to create an environment that stimulates selected movement experiences resulting in desirable responses that contribute to the optimal development of the individu al's potentialities in all the phases of life. In this direction, in order to organize and conduct various activities, the Sports and Games Committee is formed with the following objectives:
      </p>
      <ul className="lg:text-lg list-square ml-5 md:text-md text-[14px] leading-7 text-[#86868B] space-y-2">
        {objectives.map((objective, index) => (
          <li key={index}>{objective}</li>
        ))}
      </ul>
    </div>

    {/* Responsibilities Section */}
    <div className="bg-white py-10 px-9  rounded-lg border w-[613px] h-[678px] border-gray-200 shadow-sm">
      <h1 className="text-3xl md:text-[40px] lg2:text-[36px] xl:text-6xl font-bold text-[#1D1D1F]">
        Responsibilities
      </h1>
      <ul className="lg:text-[17px] list-square ml-5 md:text-md text-[14px] leading-7 text-[#86868B] space-y-2 pt-5">
        {duty.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  </div>
</section>
<div className="lg:px-32 mt-12">
       <ModelTable title="Sports Committee Panel" headers={["Sl No", "Name", "Designation", "Department"]} rows={members} />
      <ModelTable title="College Sports Facilities" headers={["Sl No", "Sports", "No"]} rows={sportsFacilities} />
       <ModelTable title="Our Journey in State-Level Sports" headers={["Sl No", "Year", "Number of Events (State Level)","Number of Participants"]} rows={participation} />
</div>
 
    </div>
  );
};

export default DepartmentSection;
