import React from "react";
import { useMediaQuery } from "react-responsive";

const Messages = ({ data }) => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1600px)" });

  // Split the message into sentences
  // const sentences = data[0]?.descrtiption?.split(/(?<=\.)\s+/).filter(Boolean) || [];
  // const sentenceCount = isLargeScreen ? 5 : 3;
  // const firstPart = sentences.slice(0, sentenceCount).join(' ');
  // const remainingPart = sentences.slice(sentenceCount).join(' ');

  return (
    <div className="lg2:px-24 mx-5 text-[#86868B] text-[17px]">
      <div>
        <img src={data[0]?.image} alt={data?.name} className="w-48 h-48 object-cover rounded-lg shadow" />
        <div>
          <p className="mb-4 mt-4 md:text-lg  text-[14px] leading-7 text-justify text-textGray">{data[0]?.descrtiption}</p>
          {/* <div className="mt-2 font-semibold text-[#1D1D1F]">{data[0]?.name}</div>
          <div className="text-sm text-gray-500">{data[0]?.position}</div> */}
          {data[0].points && (
            <ul className="mb-6 space-y-1 md:text-base text-[14px] leading-7 text-textGray">
              {data[0].points.map((point, i) => (
                <li key={i}>{point.includes("@") ? <a className="underline cursor-pointer text-blue-600">{point}</a> : point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
