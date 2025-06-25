import React from 'react'
import Hero from '../components/about/Hero'
import Mvp from '../components/about/Mvp'
import Algorithm from '../components/about/Algorithm'
import Services from '../components/about/Services'
import Work from '../components/about/Our-work'
const page = () => {
  return (
    <div>
        <Hero/>
        <Mvp/>
        <Algorithm/>
        <Services/>
        <Work/>
    </div>
  )
}

export default page