import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row mb-6 pt-20 justify-center items-center gap-5 px-4 md:px-8 w-full'>
      <div className='flex w-full md:w-1/2'>
        <div className='relative w-full aspect-video overflow-hidden rounded-lg'>
          <Image
            src='/contact2.jpg'
            alt='Strategic consultancy collaboration'
            fill
            className='object-cover'
          />
        </div>
      </div>
      <div className='w-full md:w-1/2'>
        <h1 className='font-bold pb-4 md:pb-5 text-2xl md:text-3xl lg:text-4xl'>We are The Gʊd Aɪ’diə Company</h1>
        <p className='text-base md:text-lg leading-relaxed'>The Gʊd Aɪ&apos;diə Company partners with leaders who are building something meaningful, evolving what exists, or reimagining what&apos;s possible next. The work is collaborative by nature, grounded in real-world execution, and guided by a deep respect for each partner&apos;s vision.
          There are no off-the-shelf answers here. Every engagement is shaped around purpose, context, and ambition, with strategies designed to move from idea to action without losing heart or momentum along the way.
        </p>
      </div>
    </div>
  )
}

export default Hero