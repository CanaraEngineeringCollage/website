import React from 'react'
import ExploreCampus from "@/components/Common/ExploreCampus/ExploreCampus";
import data from "../../../utils/exploreCampusData/exploreCampusData.json"

const MediaSection = () => {
    return <ExploreCampus campusEvents={data} title="Explore More Campus Buzz" description='Stay updated with the latest news, events & achievements from across our campus' />;
}

export default MediaSection
