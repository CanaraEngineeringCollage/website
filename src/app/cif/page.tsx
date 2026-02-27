import React from "react";
import { Metadata } from "next";
import CifPortal from "@/components/CifComponents/CifPortal/CifPortal";

export const metadata: Metadata = {
  title: "Canara Innovation Foundation | Canara Engineering College",
  description:
    "Learn about Canara Innovation Foundation (CIF), the Incubation center of Canara Engineering College, and the Entrepreneurship Development Cell (EDC).",
};

const CifPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <CifPortal />
    </div>
  );
};

export default CifPage;
