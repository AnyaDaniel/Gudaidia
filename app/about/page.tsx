import React from 'react'
import Hero from '../components/about/Hero'
import Mvp from '../components/about/Mvp'
import Algorithm from '../components/about/Algorithm'
import Services from '../components/about/Services'
import Partners from '../components/about/Partners'
const page = () => {
  return (
    <div>
        <Hero/>
        <Algorithm/>
        <Mvp/>
        <Services/>
        <Partners/>
    </div>
  )
}

export default page
