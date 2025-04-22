import React from "react";

const FooterCard = () => {
  return (
    <section className="py-36 px-5 md:px-0">
      <div className="max-w-6xl mx-auto bg-[#2474b3]  rounded-2xl">
        <div className="text-center py-13 px-3  lg:px-36">
          <h1 className="text-[47px] text-white leading-[1.2] pb-2">Ready to take the next step?</h1>
          <p className="text-[20px] text-[#99c2e0] pb-4">
            Book a one-on-one <span className="text-white">counselling session</span> & get all your questions answered about admissions, programs
            & your future opportunities.
          </p>
          <button className="text-[#2884CA] cursor-pointer px-5 py-3 bg-white rounded-4xl">Book Your Counselling Session Today</button>
        </div>
      </div>
    </section>
  );
};

export default FooterCard;
