import React from "react";

const objectives = [
  "To encourage engineering students to consider self-employment as a career.",
  "To act as an institutional mechanism for providing various services including information on all aspects of enterprise building.",
  "To develop better linkages between industry, institution and other related organizations engaged in promoting entrepreneurship activities.",
  "Conduct training programs in the field of entrepreneurial skill development.",
];

const IdeasText = () => {
  return (
    <div className="max-w-7xl mx-auto lg:px-36 xl:max-w-[75%] text-center pt-20 text-black">
      <h1 className="text-3xl md:text-[40px] lg2:text-5xl xl:text-6xl font-bold">Where Ideas Take Flight</h1>
      <p className="lg:text-xl md:text-lg text-[14px] leading-7 py-10 text-textGray">
        The Canara Entrepreneurship Cell is dedicated to nurturing innovation, fostering leadership, & empowering students to transform ideas into
        successful ventures. Through mentorship, startup incubation, industry collaborations, & hands-on workshops, we provide the perfect launchpad
        for aspiring entrepreneurs to thrive in the ever-evolving business landscape.
      </p>
      <h1 className="text-3xl text-start md:text-[40px] lg2:text-5xl xl:text-6xl font-bold">Vision</h1>
      <p className="lg:text-xl text-start md:text-lg text-[14px] leading-7 py-10 text-textGray">
        To be a center of excellence for entrepreneurship development and to mentor and enhance the entrepreneurial prospective of engineering
        students to create successful entrepreneurs.
      </p>
      <h1 className="text-3xl text-start md:text-[40px] lg2:text-5xl xl:text-6xl font-bold">Mission</h1>
      <p className="lg:text-xl text-start md:text-lg text-[14px] leading-7 py-10 text-textGray">
        To develop entrepreneurial thinking, facilitate the business knowledge and imbibe leadership qualities in engineering students to pursue
        entrepreneurship through various programs.
      </p>
      <h1 className="text-3xl text-start md:text-[40px] lg2:text-5xl xl:text-6xl font-bold">Objectives</h1>
      <ul className="lg:text-xl text-start list-decimal ml-5 md:text-lg text-[14px] leading-7 py-10 text-textGray">
        {objectives.map((objective, index) => (
          <li>{objective}</li>
        ))}
      </ul>
         <h1 className='text-3xl  md:text-[40px] lg2:text-5xl text-start xl:text-6xl font-bold'>Flow Chart</h1>
      <img src="https://www.canaraengineering.in/assets/images/e1.jpg" alt="" className="py-10" />
    </div>
  );
};

export default IdeasText;
