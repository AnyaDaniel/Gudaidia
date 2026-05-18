import React from 'react'
import Hero from '../components/about/Hero'
import Mvp from '../components/about/Mvp'
import Algorithm from '../components/about/Algorithm'
import Services from '../components/about/Services'
const page = () => {
  return (
    <div>
        <Hero/>
        <Algorithm/>
        <Mvp/>
        <Services/>
    </div>
  )
}

export default page
