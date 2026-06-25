import Image from 'next/image'
import React from 'react'

const Mvp = () => {
  return (
    <div className='bg-gray-100 flex flex-col md:flex-row p-8 justify-center items-center gap-5 text-left' id='mvp'>
        <div className="text-left md:w-1/2">
            <h1 className="font-[700] pb-5 text-3xl">Our MVP</h1>
            <p className="text-base md:text-lg pb-3">
                <span className="font-[700]">Mission: </span>To drive growth through clear strategy and purposeful creativity.
            </p>
            <p className="text-base md:text-lg pb-3 mb-6 leading-relaxed">
                <span className="font-bold">Vision: </span>To be a trusted partner for organizations shaping what&apos;s next known for work that creates lasting, visible impact.
            </p>
            <p className="text-base md:text-lg pb-3 leading-relaxed">
                <span className="font-bold text-lg md:text-xl mb-4 block">Principles: <i>RISE</i> </span>
                <span className="font-bold text-base md:text-lg">R</span>esilience: Staying steady when things get complex and adapting without losing direction.<br />
                <span className="font-bold text-base md:text-lg">I</span>nnovation: Finding new ways forward, guided by intent rather than trend.<br />
                <span className="font-bold text-base md:text-lg">S</span>ervice Excellence: Doing work that holds up in practice and leaves value behind after delivery.<br />
                <span className="font-bold text-base md:text-lg">E</span>mpowerment: Giving partners the clarity and confidence to move decisions forward on their own terms.<br />
            </p>
        </div>
        <div className='w-full md:w-1/2 md:ml-8 lg:ml-20'>
          <div className='aspect-square overflow-hidden rounded-lg'>
            <Image
              src={'/mvp2.jpg'}
              alt='MVP strategy visualization'
              width={4160}
              height={5200}
              className='w-full h-full object-cover'
            />
          </div>
        </div>
    </div>
  )
}

export default Mvp