import Image from 'next/image'
import React from 'react'

const Algorithm = () => {
  return (
    <div className='bg-black text-white flex flex-col md:flex-row py-8 md:py-12 px-4 md:px-8 lg:px-12 justify-center items-center gap-5 max-w-7xl mx-auto'>
        <div className="w-full md:w-1/2 hidden md:block md:mr-8"><Image src={'/csm.jpg'} alt='' width={500} height={500} className='aboutimage w-full h-auto'/></div>
        <div className="w-full md:w-1/2">
            <h1 className="font-bold pb-4 md:pb-5 text-2xl md:text-3xl lg:text-4xl"><span className="text-[#faf1cf]">CSM/EDF Algorithm</span></h1>
            <p className="text-base md:text-lg text-justify leading-relaxed"><span className="font-bold">The CSM/EDF Algorithm Framework</span> – Developed by The Gud Aidia Company LLC, the CSM/EDF Framework guides work from concept through execution. It's structured yet flexible, designed to ensure ideas don't get stuck at strategy, but continue evolving into measurable, meaningful growth
            </p>
        </div>
    </div>
  )
}

export default Algorithm