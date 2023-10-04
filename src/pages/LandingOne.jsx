import React from 'react'
import Banner from '../components/banner/Banner'
import FirstSection from '../components/firstSection/FirstSection'
import Slider from '../components/Slider'

export const LandingOne = () => {

  let slides = {

  }

  return (
    <div className='overflow-hidden relative'>
    <Banner/>
    <FirstSection/>
    <div className='w-[60%] m-auto pt-11'>
      <Slider slides={slides}/>
    </div>
    </div>
  )
}
