import Image from 'next/image'
import React from 'react'

const Algorithm = () => {
  return (
    <div className='bg-black text-white flex flex-col md:flex-row py-8 md:py-12 px-4 md:px-8 lg:px-12 justify-center items-center gap-5 max-w-7xl mx-auto'>
      <div className='w-full md:w-1/2 hidden md:block md:mr-8'>
        <div className='aspect-video overflow-hidden rounded-3xl'>
          <Image src={'/csm.jpg'} alt='CSM/EDF framework concept' width={4768} height={3663} className='w-full h-full object-cover' />
        </div>
      </div>
      <div className='w-full md:w-1/2'>
        <h1 className='font-bold pb-4 md:pb-5 text-2xl md:text-3xl lg:text-4xl text-center md:text-left'>
          <span className='text-gray-300'>CSM/EDF Algorithm</span>
        </h1>
        <p className='text-base md:text-lg leading-relaxed text-center md:text-left'>
          <span className='font-bold'>The CSM/EDF Algorithm Framework</span> {`–`} Developed by The Gʊd Aɪ’diə Company, the CSM/EDF Framework guides work from concept through execution. It&apos;s structured yet flexible, designed to ensure ideas don&apos;t get stuck at strategy, but continue evolving into measurable, meaningful growth.
        </p>
      </div>
    </div>
  )
}

export default Algorithm