import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row mb-6 pt-20 mx-auto justify-center items-center gap-5 px-8'>
        <div className="flex md:w-1/2">
          <Image src='/Wireframe.png' alt='' width={800} height={500} className='aboutimage'/>
        </div>
        <div className="w-full md:w-1/2">
            <h1 className="font-[700] pb-5 text-4xl">We are The Gʊd Aɪ’diə Company</h1>
            <p className="text-xl text-justify">The Gʊd Aɪˈdiə Company is an innovation and growth strategy enabler based in New Jersey. We help leading establishments navigate all stages of innovation and growth. Founded with a strategic mission, we are a team of innovation specialists, strategists, analysts, technology experts, behavioral scientists and coordinators who have earned a reputation for cutting through complexity over many years while offering clear, independent and candid strategic solutions.
                <br /><br />Our expertise spans various sectors that include <b>Consumer</b>, <b>Entertainment & Recreation</b>, <b>Technology</b> and <b>Energy</b>.
            </p>
        </div>
    </div>
  )
}

export default Hero