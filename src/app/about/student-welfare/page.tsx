import AboutTheDepartment from '@/components/AboutPageComponents/StudentWelfarePage/AboutTheDepartment/AboutTheDepartment'
import FunctionDepartment from '@/components/AboutPageComponents/StudentWelfarePage/FunctionDepartment/FunctionDepartment'
import HeroSection from '@/components/AboutPageComponents/StudentWelfarePage/HeroSection/HeroSection'
import YoutubeSection from '@/components/AboutPageComponents/StudentWelfarePage/YoutubeSection/YoutubeSection'
import React from 'react'

const page = () => {
  return (
    <>

    <HeroSection/>
    <section className='px-6 md:px-12 lg:px-16 xl:px-0'>
    <AboutTheDepartment/>

    </section>
    <section className='px-6 md:px-12 lg:px-16 xl:px-0'>
    <YoutubeSection/>

    </section>
    <section className='px-6 md:px-12 lg:px-16 xl:px-0'>
    <FunctionDepartment/>

    </section>
    </>
  )
}

export default page