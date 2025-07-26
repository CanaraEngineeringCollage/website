import React from "react";
import { useMediaQuery } from "react-responsive";

const Messages = ({ data }) => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1600px)" });

  const sentences = data[0]?.descrtiption?.split(/(?<=\.)\s*|\.(?=[A-Z])/).filter(Boolean) || [];
  const sentenceCount = data[0].title == "President Message" ? (isLargeScreen ? 2 : 2) : isLargeScreen ? 6 : 5;
  const firstPart = sentences.slice(0, sentenceCount).join(" ");
  const remainingPart = sentences.slice(sentenceCount).join(" ");

  return (
    <div className="lg2:px-24 mx-5 text-[#86868B] text-[17px]">
      <div className="flex gap-2">
        <img src={data[0]?.image} alt={data?.name} className="w-48  object-cover rounded-lg shadow" />
        <div>
          <p className=" md:text-lg  text-[14px] leading-7 text-justify text-textGray">{firstPart}</p>
          {/* <div className="mt-2 font-semibold text-[#1D1D1F]">{data[0]?.name}</div>
           */}
        </div>
      </div>
      <div className="md:text-lg  text-[14px] leading-7 text-justify text-textGray">
        {remainingPart}
        {data[0].points && (
          <ul className="my-6 space-y-1 md:text-lg text-[14px] leading-7 text-textGray">
            {data[0].points.map((point, i) => (
              <li key={i}>
                {point.includes("@") ? (
                  <a href={`mailto:${point}`} className="underline cursor-pointer text-blue-600">
                    {point}
                  </a>
                ) : (
                  point
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Messages;
