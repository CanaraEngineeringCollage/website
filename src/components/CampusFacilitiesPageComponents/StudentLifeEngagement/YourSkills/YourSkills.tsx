import AmenitiesCard from '@/components/Common/AmenitiesCard/AmenitiesCard'
import data from '../../../../utils/YourSkillsData/YourSkillsData.json'
import React from 'react'

const YourSkills = () => {
  return (
    <AmenitiesCard
    title={data.title}
    amenities={data.amenities}
    mainImage={data.mainImage}
  />
  )
}

export default YourSkills