import Image from "next/image";
import React from "react";
import image1 from "../../../../public/DistinctivePractiesImages/plastic.jpg";
import image2 from "../../../../public/DistinctivePractiesImages/CHC.jpg";
import image3 from "../../../../public/DistinctivePractiesImages/solar.jpg";
const DistinctivePracties = () => {
  return (
    <div className="max-w-7xl mx-auto xl:max-w-[75%] pt-20 text-[#1D1D1F]">
      <h1 className="text-3xl md:text-[40px] lg2:text-4xl xl:text-5xl font-bold">Distinctive Practices</h1>
      <p className="lg:text-xl md:text-lg text-[14px] leading-5 pt-8 text-textGray">
        Canara Engineering College follows the following practices which are aimed at improving the overall services towards faculty and students.
      </p>

      <div className="flex flex-col gap-2">
        <p className="lg:text-xl md:text-lg text-[14px] leading-5 pt-2 text-textGray">
          Free Community health center for students, staff and local community in association with Father Mullers Hospital, Thumbe, Mangaluru.
        </p>
        <p className="lg:text-xl md:text-lg text-[14px] leading-5 text-textGray">
          Plastic Recycling research center for converting waste plastic into useful products.
        </p>
        <p className="lg:text-xl md:text-lg text-[14px] leading-5 text-textGray">Commitment to Environment Sustainability via</p>

        <div className="pl-1 pt-2">
          <ul className="list-disc list-inside space-y-4 text-textGray text-[14px] md:text-lg lg:text-xl leading-5">
            <li>Harnessing Solar energy – 140kW Roof top Solar system.</li>
            <li>Installation of sewage treatment plant and using recycled water for gardening purposes.</li>
            <li>Rainwater harvesting and construction of water ponds to improve underground water table.</li>
          </ul>
        </div>
      </div>
      <h1 className="text-3xl md:text-[40px] lg2:text-4xl xl:text-5xl font-bold pb-8 pt-12">Faculty Centric Practices</h1>
      <div className="flex flex-col gap-3">
        <div className="md:pl-1">
          <ul className="list-disc list-inside space-y-4 text-textGray text-[14px] md:text-lg lg:text-xl leading-5">
            <li>Financial support for faculty for publishing papers in national and international journals and conferences.</li>
            <li>Sponsorship for faculty and staff to attend Conferences, Seminars, Workshops, FDPs, Industrial Trainings, and NPTEL courses.</li>
            <li>Research allowance for those who have completed/pursuing Ph.D.</li>
            <li>Encashment of EL for non-teaching staff is permitted in multiples of 30 days.</li>
            <li>Recognition and awarding faculty and staff for their commendable performance.</li>
            <li>ESI facility for non-teaching staff.</li>
            <li>Accidental insurance for both faculty and staff.</li>
            <li>Tuition fee concession in any Canara sister institutions for those who are working at CEC.</li>
          </ul>
        </div>
      </div>
      <h1 className="text-3xl md:text-[40px] lg2:text-4xl font-bold pb-8 pt-12">Student Centric Practices</h1>
      <div className="flex flex-col gap-3">
        <div className="md:pl-1">
          <ul className="list-disc list-inside space-y-4 text-textGray text-[14px] md:text-lg lg:text-xl leading-5">
            <li>
              Recognition and awarding students for their extraordinary performance in academics, co-curricular and extra-curricular activities.
            </li>
            <li>Management scholarship to the needy and eligible students.</li>
            <li>Sponsoring students to attend intercollegiate co-curricular and extra-curricular activities.</li>
            <li>Advanced lab facilities, to work even beyond college working hours.</li>
            <li>Accidental and medical expenses insurance coverage for students.</li>
            <li>Counselling facility with trained counsellor at the institution.</li>
            <li>Recognition for appreciable performance for alumni in their career.</li>
            <li>A fire safety system is installed in the college to meet any fire-related exigencies.</li>
            <li>State-of-the-art Gymnasium for students and staff to help them keep themselves healthy.</li>
          </ul>
        </div>
      </div>

      <h1 className="text-3xl  md:text-[40px]  lg2:text-4xl font-bold pt-12 pb-8">Plastic Recycling</h1>
      <Image src={image1} alt="image1" className="w-[70%]" />
      <h1 className="text-3xl md:text-[40px] lg2:text-4xl font-bold pt-12 pb-8">Community Health Center</h1>
      <Image src={image2} alt="image3" className="w-[70%]" />
      <h1 className="text-3xl md:text-[40px] lg2:text-4xl font-bold pt-12 pb-8">Roof Top Solar</h1>
      <Image className="pb-20 w-[70%]" src={image3} alt="image3" />
    </div>
  );
};

export default DistinctivePracties;
