import React from "react";

const IdeasTakeFlight = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto xl:max-w-[75%] text-center  text-[#1D1D1F] bg-white">
      <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 text-center">
        Where Ideas Take Flight
      </h2>
<div className="max-w-[90%] mx-auto">
      <p className="text-textGray text-center  mb-12 text-base md:text-lg leading-relaxed">
        The Canara Entrepreneurship Cell is dedicated to nurturing innovation, fostering leadership, & empowering students to transform ideas into
        successful ventures. Through mentorship, startup incubation, industry collaborations, & hands-on workshops, we provide the perfect launchpad
        for aspiring entrepreneurs to thrive in the ever-evolving business landscape.
      </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full ">
        
        {/* Left Column Container */}
        <div className="flex flex-col md:col-span-5 gap-4">
          {/* Block 1 (Larger) */}
          <div className="bg-[#B91C1C] rounded-2xl h-[350px] md:h-[400px] w-full"></div>
          {/* Block 3 (Smaller) */}
          <div className="bg-[#B91C1C] rounded-2xl h-[200px] md:h-[250px] w-full"></div>
        </div>

        {/* Right Column Container */}
        <div className="flex flex-col md:col-span-7 gap-4">
          {/* Block 2 (Smaller) */}
          <div className="bg-[#B91C1C] rounded-2xl h-[200px] md:h-[250px] w-full"></div>
          {/* Block 4 (Larger) */}
          <div className="bg-[#B91C1C] rounded-2xl h-[350px] md:h-[400px] w-full"></div>
        </div>

      </div>
    </section>
  );
};

export default IdeasTakeFlight;