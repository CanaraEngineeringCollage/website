import Image from "next/image";
import React from "react";

const About = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <>
            <h2 className="text-[20px] font-extrabold text-textGray mb-2">{item.title}</h2>
            {item.image && <Image className="pb-4" alt="" width={300} height={300} src={item.image} />}
            {item.descrtiption&&<p className=" md:text-lg  text-[14px] leading-7 mb-6  text-textGray">{item.descrtiption}</p>}
             {item.points && (
              <ul className="list-disc ml-6 mb-6 space-y-1 md:text-lg  text-[14px] leading-7  text-textGray">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
              </ul>
            )}
          </>
        );
      })}
    </div>
  );
};

export default About;
