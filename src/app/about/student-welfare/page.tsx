import AboutTheDepartment from '@/components/AboutPageComponents/StudentWelfarePage/AboutTheDepartment/AboutTheDepartment'
import FunctionDepartment from '@/components/AboutPageComponents/StudentWelfarePage/FunctionDepartment/FunctionDepartment'
import HeroSection from '@/components/AboutPageComponents/StudentWelfarePage/HeroSection/HeroSection'
import YoutubeSection from '@/components/AboutPageComponents/StudentWelfarePage/YoutubeSection/YoutubeSection'
import React from 'react'

const page = () => {
  return (
    <>
    <HeroSection/>
    <AboutTheDepartment/>
    <YoutubeSection/>
    <FunctionDepartment/>
    </>
  )
}

export default page