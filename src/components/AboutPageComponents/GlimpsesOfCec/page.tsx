"use client"
import React, { useEffect, useState } from "react";

const Glimpses = () => {
  const [flipbookLink, setFlipbookLink] = useState("");

  useEffect(() => {
    fetch("https://apiserver.cec.edu.in/ppt")
      .then((res) => res.json())
      .then((data) => {
        setFlipbookLink(data.link); // extract heyzine link
      })
      .catch((err) => console.error("Error loading PPT link:", err));
  }, []);

  return (
    <div className="text-[#1D1D1F] pb-20">
      <h1 className="text-center text-3xl text-[#1D1D1F] pt-20 pb-16 md:text-[40px] lg2:text-5xl xl:text-6xl font-bold">
        Glimpses of CEC
      </h1>

      {/* Show only when link is loaded */}
      {flipbookLink ? (
        <iframe
          src={flipbookLink}
          className="w-full h-[60vh] md:h-[100vh]"
          allowFullScreen
        ></iframe>
      ) : (
        <p className="text-center">Loading flipbook…</p>
      )}
    </div>
  );
};

export default Glimpses;
