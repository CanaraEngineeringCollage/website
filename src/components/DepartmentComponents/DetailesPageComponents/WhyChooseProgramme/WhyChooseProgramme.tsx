import React from "react";

export interface WhyChooseProgrammeProps {
  title: React.ReactNode | string;
  points: string[];
  image: string;
}

const WhyChooseProgramme = ({
  title,
  points,
  image,
}: WhyChooseProgrammeProps) => {
  return (
    <section className="bg-[#071D2C] py-16 lg:py-24 px-6 md:px-12 lg:px-24 w-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 text-white">
          <h2 className="text-3xl md:text-4xl lg:text-[45px] font-bold mb-10 leading-[1.2]">
            {title}
          </h2>
          <ul className="space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-4 text-white text-xl leading-snug">•</span>
                <span className="text-lg md:text-[20px] font-medium text-gray-200 leading-snug">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={image}
            alt="Programme Preview"
            className="w-full h-auto rounded-3xl object-cover shadow-2xl"
            style={{ maxHeight: "500px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseProgramme;
