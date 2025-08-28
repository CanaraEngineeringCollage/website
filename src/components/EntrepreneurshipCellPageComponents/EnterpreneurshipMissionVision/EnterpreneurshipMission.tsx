

import visionImage1 from "../../../../public/aboutPageImages/MissionVision/visionImage1.webp";
import visionImage2 from "../../../../public/aboutPageImages/MissionVision/visionImage2.webp";
import visionImage3 from "../../../../public/aboutPageImages/MissionVision/visionImage3.webp";
import visionImage4 from "../../../../public/aboutPageImages/MissionVision/visionImage4.webp";

export default function EnterpreneurshipMission() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full mx-auto lg:px-28 py-42 bg-none">
      {/* Left Column */}
      <div className="flex flex-col gap-12">
        {/* Objectives */}
        <div className="bg-white rounded-2xl  shadow-sm p-8 px-12">
          <h2 className="text-[46px] text-[black] font-semibold mb-6">Our Objectives</h2>
          <ul className="space-y-8">
            <li className="flex items-start gap-12">
              <img src='/aboutPageImages/MissionVision/visionImage1.webp'
               alt="icon" className="w-[59px] h-[45px]" />
              <p className="text-[#afafb3]">
                To play a proactive and supporting role for the college, its students and the institution at large.
              </p>
            </li>
            <li className="flex items-start gap-16">
              <img src='/aboutPageImages/MissionVision/visionImage2.webp'
               className="w-[59px] h-[45px]" />
              <p className="text-[#afafb3]">
                To serve as a link between the Institution’s faculty, students, Management and the industries.
              </p>
            </li>
            <li className="flex items-start gap-16">
              <img src='/aboutPageImages/MissionVision/visionImage3.webp'
               className="w-[59px] h-[45px]" />
              <p className="text-[#afafb3]">
                To bring about an effective, cohesive and Z between the members of the alumni.
              </p>
            </li>
          </ul>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-[46px] text-[black] font-semibold mb-6">Our Mission</h2>
          <p className="text-[#afafb3] leading-relaxed">
            As a dynamic organization, keen and excellence of CEC and its alumni, 
            the alumni association strives to nurture a lifelong intellectual and emotional 
            relationship with a college and amongst alumni; and to provide sustainable 
            platform for effective networking, goodwill and support.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="bg-white rounded-2xl shadow-sm p-10 flex flex-col items-center justify-center text-center">
              <img src='/aboutPageImages/MissionVision/visionImage4.webp'
        className="w-[344px] h-[204px] mb-6" />
        <h2 className="text-[46px] text-[black] font-semibold mb-4">Our Vision</h2>
        <p className="text-[#949499] leading-relaxed">
          Alumni Association of Canara Engineer’s vision is to develop a dedicated and dynamic 
          global alumni community whose members are committed to each other and to develop 
          connections among alumni and students to strengthen their commitment to college.
        </p>
      </div>
    </div>
  );
}
