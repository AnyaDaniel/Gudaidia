import Image from 'next/image'
import React from 'react'

const Mvp = () => {
  return (
    <div className='bg-gray-100 flex flex-col md:flex-row p-8 justify-center items-center gap-5 text-left' id='mvp'>
        <div className="text-left md:w-1/2">
            <h1 className="font-[700] pb-5 text-3xl">Our MVP</h1>
            <p className="text-base md:text-lg pb-3">
                <span className="font-[700]">Mission: </span>To build the missing translation layer that turns ideas into working business systems across strategy, design, and execution.
            </p>
            <p className="text-base md:text-lg pb-3 leading-relaxed">
                <span className="font-bold">Vision: </span>To eliminate the breakdown between strategy and execution in modern organizations.
            </p>
            <p className="text-base md:text-lg pb-3 leading-relaxed">
                <span className="font-bold text-lg md:text-xl mb-2 block">Principles: RISE </span>
                <span className="font-bold text-base md:text-lg">R</span>eframing Clarity: turning unclear intent into structured, actionable direction that can be executed within real operational constraints.<br />
                <span className="font-bold text-base md:text-lg">I</span>nnovation: building forward movement rooted in purpose, not trend, ensuring innovation strengthens execution instead of distracting from it.<br />
                <span className="font-bold text-base md:text-lg">S</span>ystem Integrity: keeping strategy, design, and execution tightly connected so nothing gets lost between thinking and doing.<br />
                <span className="font-bold text-base md:text-lg">E</span>xecution Empowerment: providing the clarity, structure, and confidence that enables independent execution without ongoing reliance.<br />
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