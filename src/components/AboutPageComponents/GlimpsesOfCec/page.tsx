import React from "react";

interface GlimpsesProps {
  flipbookLink: string;
}

const Glimpses = ({ flipbookLink }: GlimpsesProps) => {
  return (
    <div className="text-[#1D1D1F] pb-20">
      <h1 className="text-center  text-[40px] text-[#1D1D1F] pt-14 pb-10 lg:pt-20 lg:pb-16 md:text-[40px] lg2:text-5xl xl:text-6xl font-bold">
        Glimpses of CEC
      </h1>

      {/* Show only when link is loaded */}
      {flipbookLink ? (
        <iframe title="Glimpses of Canara Engineering College Flipbook"  src={flipbookLink} className="w-full h-[60vh] md:h-[100vh]" allowFullScreen></iframe>
      ) : (
        <p className="text-center">Loading flipbook or content unavailable locally...</p>
      )}
    </div>
  );
};

export default Glimpses;
