"use client";
import AmenitiesCard from "@/components/Common/AmenitiesCard/AmenitiesCard";
import React from "react";
import data from "../../../../utils/amenitiesSectionData/amenitiesData.json";

const AmenitiesSection = () => {
  return (
    <AmenitiesCard
      title={data.title}
      amenities={data.amenities}
      mainImage={data.mainImage}
    />
  );
};

export default AmenitiesSection;