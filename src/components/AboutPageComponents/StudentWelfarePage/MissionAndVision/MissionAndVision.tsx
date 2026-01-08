import React from 'react'
const departmentMission = [
  "To arrange various leadership, social, extracurricular and counseling programs to inculcate responsibility among students so as to enable them to become productive citizens of the society.",
  "To provide a comprehensive, competent and responsive system to facilitate a good learning environment to the students.",
  "To uphold integrity, highest level of transparency and accountability.",
  "To maintain peace, harmony, co-existence and public goodwill.",
  "To provide a platform for students to redress their grievances."
  
];

const MissionAndVision = () => {
  return (
    <div className=' max-w-7xl  xl:max-w-[75%] mx-auto  sm:px-6 md:px-0  py-12 md:py-20 lg:py-20 '>
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ">
  {/* Left Column */}
  <div className="flex flex-col gap-8 h-full lg:gap-12">
  

    {/* Mission */}
    <div className="bg-white lg:rounded-2xl shadow-sm  p-6 sm:p-8 md:p-10">
      <h2 className="text-3xl lg2:text-5xl lg:text-4xl text-center lg:text-start font-bold text-[#1D1D1F] mb-8">
        Our Mission
      </h2>
      <ul className="text-textGray text- pl-4  list-decimal text-lg  leading-relaxed">
        {departmentMission.map((mission, index) => (
          <li key={index} className="mb-2">
            {mission}
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Right Column */}
  <div className="bg-white lg:rounded-2xl shadow-sm p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center">
    <img
      src="/aboutPageImages/MissionVision/visionImage4.webp"
      alt="vision"
      className="w-40 sm:w-60 md:w-72 lg:w-[230px] h-auto mb-6"
    />
    <h2 className="text-3xl lg2:text-5xl lg:text-4xl text-center lg:text-start font-bold text-[#1D1D1F] mb-4">
      Our Vision
    </h2>
    <p className="text-textGray text-lg leading-relaxed">
      To encourage students' individual, academic and integrated development by providing leadership and counseling services and thus prepare them for a diverse, enterprising and global society.
    </p>
  </div>
</div>
</div>
  )
}

export default MissionAndVision
