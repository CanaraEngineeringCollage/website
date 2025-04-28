import AmenitiesCard from '@/components/Common/AmenitiesCard/AmenitiesCard'
import data from '../../../utils/events/event.json'
import React from 'react'

const NetworkEvent = () => {
  return (
    <AmenitiesCard
    title={data.title}
    mainImage={data.mainImage}
  />
  )
}

export default NetworkEvent