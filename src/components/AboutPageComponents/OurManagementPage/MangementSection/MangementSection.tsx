import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="mx-20 py-20">
        <h1 className="text-[54px] mb-12 font-bold">Our Management</h1>
        <div className="grid grid-cols-12">
          <div className="col-span-4 text-[20px]">
            <h1 className="border-b-2 pb-3 mb-3 w-96 border-[#e3e6ed] text-[#2884CA]">Office Bearers</h1>
            <h1 className="border-b-2 pb-3 mb-3 w-96 border-[#e3e6ed]">Governing Body Members</h1>
            <h1 className="border-b-2 pb-3 mb-3 w-96 border-[#e3e6ed]">Special Invitee(s)</h1>
            <h1 className="border-b-2 pb-3 mb-3 w-96 border-[#e3e6ed]">Organisational Structure</h1>
            <h1 className="border-b-2 pb-3 mb-3 w-96 border-[#e3e6ed]">Canara Institutes</h1>
          </div>
          <div className="col-span-8">
            <h1 className="text-[#86868B] text-[20px] pb-10">Canara High School Association Office Bearers </h1>
            <div className="grid grid-cols-2 ">
              <div className="text-[17px] text-[#86868B]">
                <h1 className="border-b-2 pb-3 mb-3  border-[#e3e6ed]">President</h1>
                <h1 className="border-b-2 pb-3 mb-3  border-[#e3e6ed]">Vice-President</h1>
                <h1 className="border-b-2 pb-3 mb-3  border-[#e3e6ed]">Honorary Secretary</h1>
                <h1 className="border-b-2 pb-3 mb-3  border-[#e3e6ed]">Treasurer</h1>
                <h1 className="border-b-2 pb-3 mb-3  border-[#e3e6ed]">Alternate Treasurer</h1>
                <h1 className=" pb-3 mb-3  ">Joint Secretary</h1>
              </div>
              <div className="text-[17px] text-[#86868B]">
                <h1 className="border-b-2 pb-3 mb-3  border-[#e3e6ed]">Sri. D. Vasudeva Kamath</h1>
                <h1 className="border-b-2 pb-3 mb-3  border-[#e3e6ed]">Sri. K. Suresh Kamath</h1>
                <h1 className="border-b-2 pb-3 mb-3  border-[#e3e6ed]">Sri. M. Ranganath Bhat</h1>
                <h1 className="border-b-2 pb-3 mb-3  border-[#e3e6ed]">Sri. M. Vaman Kamath</h1>
                <h1 className="border-b-2 pb-3 mb-3  border-[#e3e6ed]">Sri. M. Jagannath Kamath</h1>
                <h1 className=" pb-3 mb-3  ">Sri. T. Gopalkrishna Shenoy</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
