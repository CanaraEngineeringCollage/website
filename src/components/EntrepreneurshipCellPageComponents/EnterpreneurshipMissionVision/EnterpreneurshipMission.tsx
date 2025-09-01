

import visionImage1 from "../../../../public/aboutPageImages/MissionVision/visionImage1.webp";
import visionImage2 from "../../../../public/aboutPageImages/MissionVision/visionImage2.webp";
import visionImage3 from "../../../../public/aboutPageImages/MissionVision/visionImage3.webp";
import visionImage4 from "../../../../public/aboutPageImages/MissionVision/visionImage4.webp";

export default function EnterpreneurshipMission() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-28 py-12 md:py-20 lg:py-28">
  {/* Left Column */}
  <div className="flex flex-col gap-8 lg:gap-12">
    {/* Objectives */}
    <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 md:p-10 lg:px-12">
  <h2 className="text-3xl lg:text-5xl text-center lg:text-start font-bold text-[#1D1D1F] mb-16">
    Our Objectives
  </h2>
  <ul className="space-y-6 sm:space-y-8">
    <li className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-10 lg:gap-12">
      <img
        src="/aboutPageImages/MissionVision/visionImage1.webp"
        alt="icon"
        className="w-12 sm:w-[50px] md:w-[59px] h-auto"
      />
      <p className="text-[#afafb3] text-sm sm:text-base leading-relaxed">
        To play a proactive and supporting role for the college, its students and the institution at large.
      </p>
    </li>

    <li className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-10 lg:gap-16">
      <img
        src="/aboutPageImages/MissionVision/visionImage2.webp"
        alt="icon"
        className="w-12 sm:w-[50px] md:w-[59px] h-auto"
      />
      <p className="text-[#afafb3] text-sm sm:text-base leading-relaxed">
        To serve as a link between the Institution’s faculty, students, Management and the industries.
      </p>
    </li>

    <li className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-10 lg:gap-16">
      <img
        src="/aboutPageImages/MissionVision/visionImage3.webp"
        alt="icon"
        className="w-12 sm:w-[50px] md:w-[59px] h-auto"
      />
      <p className="text-[#afafb3] text-sm sm:text-base leading-relaxed">
        To bring about an effective, cohesive and Z between the members of the alumni.
      </p>
    </li>
  </ul>
</div>


    {/* Mission */}
    <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 md:p-10">
      <h2 className="text-3xl lg:text-5xl text-center lg:text-start font-bold text-[#1D1D1F] mb-16">
        Our Mission
      </h2>
      <p className="text-[#afafb3] text-sm sm:text-base leading-relaxed">
        As a dynamic organization, keen and excellence of CEC and its alumni, 
        the alumni association strives to nurture a lifelong intellectual and emotional 
        relationship with a college and amongst alumni; and to provide sustainable 
        platform for effective networking, goodwill and support.
      </p>
    </div>
  </div>

  {/* Right Column */}
  <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center">
    <img
      src="/aboutPageImages/MissionVision/visionImage4.webp"
      alt="vision"
      className="w-40 sm:w-60 md:w-72 lg:w-[344px] h-auto mb-6"
    />
    <h2 className="text-3xl lg:text-5xl text-center lg:text-start font-bold text-[#1D1D1F] mb-4">
      Our Vision
    </h2>
    <p className="text-[#949499] text-sm sm:text-base leading-relaxed">
      Alumni Association of Canara Engineer’s vision is to develop a dedicated and dynamic 
      global alumni community whose members are committed to each other and to develop 
      connections among alumni and students to strengthen their commitment to college.
    </p>
  </div>
</div>

  );
}
