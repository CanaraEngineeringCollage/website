import React from "react";

const FooterCard = () => {
  return (
    <section className="py-36  md:px-0">
      <div
        className="max-w-6xl mx-auto  md:rounded-2xl"
        style={{
          backgroundImage:"url(/gradientBackgrounds/image.png)",
        }}
      >
        <div className="text-center py-13  lg:px-36">
          <h1 className="text-[47px] font-bold text-white leading-[1.2] pb-2">Ready to take the next step?</h1>
          <p className="text-[20px] text-[#99c2e0] pb-4 px-2">
            Book a one-on-one <span className="text-white font-bold">counselling session</span> & get all your questions answered about admissions, programs &
            your future opportunities.
          </p>
          <button className="text-[#2884CA] cursor-pointer px-5 py-3 bg-white rounded-4xl">Book Your Counselling Session Today</button>
        </div>
      </div>
    </section>
  );
};

export default FooterCard;
