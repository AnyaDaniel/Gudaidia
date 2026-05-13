import Image from 'next/image'
import React from 'react'

const Mvp = () => {
  return (
    <div className='bg-gray-100 flex flex-col md:flex-row p-8 justify-center items-center gap-5 text-center md:text-left' id='mvp'>
        <div className="text-center md:text-left md:w-1/2">
            <h1 className="font-[700] pb-5 text-3xl">Our MVP</h1>
            <p className="text-base md:text-lg pb-3">
                <span className="font-[700]">Mission: </span>To spark growth through smart strategy and bold creativity. 
            </p>
            <p className="text-base md:text-lg pb-3 mb-6 leading-relaxed">
                <span className="font-bold">Vision: </span>To become a trusted growth enablement partner, known for driving meaningful, lasting impact.
            </p>
            <p className="text-base md:text-lg pb-3 leading-relaxed">
                <span className="font-bold text-lg md:text-xl mb-4 block">Principles: <i>RISE</i> </span>
                <span className="font-bold text-base md:text-lg">R</span>esilience: Staying steady through complexity and adapting with intention.<br />
                <span className="font-bold text-base md:text-lg">I</span>nnovation: Exploring new paths and pushing boundaries with purpose.<br />
                <span className="font-bold text-base md:text-lg">S</span>ervice Excellence: Delivering outcomes that matter and experiences that linger.<br />
                <span className="font-bold text-base md:text-lg">E</span>mpowerment: Equipping partners with the clarity and confidence to own their transformation journey.<br />
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