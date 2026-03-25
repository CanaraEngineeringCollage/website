import Image from "next/image";
import React from "react";

const Publications = () => {
  return (
    <div className=" text-textGray  text-[17px]">
      <h1 className="text-[24px] text-[#1d1d1f] font-bold mb-2">Publications</h1>
      <h1 className="text-[20px] text-[#1d1d1f] font-bold mb-2">Unique Research Publications (2021–2025)</h1>
      <div className="space-y-10">
        <Image width={1000} height={1000} src="https://apiserver.cec.edu.in/files/researchPublications2021-2025" className="w-[80%]" alt="" />
        <Image width={1000} height={1000} src="https://apiserver.cec.edu.in/files/researchPublicationsSecond2021-2025" className="w-[80%]" alt="" />
      </div>
    </div>
  );
};

export default Publications;
