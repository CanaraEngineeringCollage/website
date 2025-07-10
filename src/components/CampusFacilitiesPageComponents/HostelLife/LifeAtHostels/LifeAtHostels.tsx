import React from "react";
import { HiDownload } from "react-icons/hi";

const LifeAtHostels = () => {
  return (
    <section className="md:py-20 xl:py-44 pb-20  max-w-7xl xl:max-w-[75%] mx-auto lg:px-32">
      <div className="">
        <div className="flex justify-between items-center pb-5 lg:pb-10">
          <h1 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl  font-bold text-[#1D1D1F] ">Life at CEC Hostels</h1>
          <a
            href="https://drive.google.com/file/d/1dSk9BXF68175ikakeHivmiNrI1DO2QsU/view"
            download
            target="_blank"
            aria-label="Download Hostel Rulebook"
            className="text-[#2884CA] hidden font-bold text-[17px] bg-[#d9ebff] px-6 py-2 cursor-pointer rounded-3xl lg:inline-flex gap-3"
          >
            Download Hostel Rulebook <HiDownload className="text-[24px] font-extrabold" />
          </a>
        </div>
        <p className="text-textGray  text-[20px] pb-10">
          Nestled within a sprawling 25-acre lush green campus, our college hostel offers a serene and refreshing environment, making it the perfect
          home away from home for students. Located in close proximity to the Polali Rajarajeshwari Temple and just 5 kilometers from the National
          Highway, the hostel ensures ease of access while maintaining a peaceful atmosphere for focused academic pursuits.
        </p>
        <p className="text-textGray  text-[20px]">
        The hostel fosters an environment where students can excel academically while also engaging in diverse extracurricular activities. A well-equipped study hall provides a quiet space for learning, and peer discussions help in the exchange of ideas and knowledge. The faculty support system ensures that hostel students receive mentorship and guidance beyond classroom hours.
        </p>
      </div>
      <button aria-label="Download Hostel Rulebook" className="text-[#2884CA] lg:hidden mt-10 font-bold text-[17px] bg-[#d9ebff] px-6 py-2 cursor-pointer rounded-3xl inline-flex gap-3">
            Download Hostel Rulebook <HiDownload className="text-[24px] font-extrabold" />
          </button>
    </section>
  );
};

export default LifeAtHostels;
