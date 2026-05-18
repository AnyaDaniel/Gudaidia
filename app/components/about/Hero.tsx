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
        <p className='text-base md:text-lg leading-relaxed'>The Gʊd Aɪ&apos;diə Company partners with leaders who are building new paths forward, whether that means shaping something new, restructuring what already exists, or pushing an idea further than it has gone before.</p>
        <p className='text-base md:text-lg leading-relaxed mt-4'>Our work is collaborative and grounded in execution. We don&apos;t operate from templates or recycled models. Each engagement is shaped by context, defined by purpose, and guided by what the work actually demands — not what&apos;s convenient.</p>
        <p className='text-base md:text-lg leading-relaxed mt-4'>We move ideas into action without stripping them of intent or direction. The goal is simple: <span className='font-semibold'>keep momentum real, decisions clear, and outcomes measurable.</span></p>
      </div>
    </div>
  )
}

export default Hero