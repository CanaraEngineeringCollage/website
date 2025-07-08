import ProfileCard from '@/components/AboutPageComponents/GoverningCounsilPage/CardComponent/CardComponent'
import FooterCard from '@/components/Common/FooterCard/FooterCard'
import React from 'react'
import datam from "../../../utils/hodData/hodData.json"

const page = () => {
  return (
    <div>
       <ProfileCard datam={datam} title="Head of the Departments"/>
      <section className="bg-[#E5E5EA]">
        <FooterCard />
      </section>
    </div>
  )
}

export default page
