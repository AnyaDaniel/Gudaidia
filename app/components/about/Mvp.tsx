import Image from 'next/image'
import React from 'react'

const Mvp = () => {
  return (
    <div className='bg-gray-100 flex flex-col md:flex-row p-8 justify-center items-center gap-5' id='mvp'>
        <div className="text-justify md:w-1/2">
            <h1 className="font-[700] pb-5 text-3xl">Our MVP</h1>
            <p className="text-[20px] pb-3">
                <span className="font-[700]">Mission: </span>To spark growth through smart strategy and bold creativity. 
            </p>
            <p className="text-base md:text-lg pb-3 mb-6 leading-relaxed">
                <span className="font-bold">Vision: </span>To become a trusted growth enablement partner, known for driving meaningful, lasting impact.
            </p>
            <p className="text-base md:text-lg pb-3 leading-relaxed">
                <span className="font-bold text-xl md:text-2xl mb-4 block">Principles: <i>RISE</i> </span>
                <span className="font-bold text-xl md:text-2xl">R</span>esilience: Staying steady through complexity and adapting with intention.<br />
                <span className="font-bold text-xl md:text-2xl">I</span>nnovation: Exploring new paths and pushing boundaries with purpose.<br />
                <span className="font-bold text-xl md:text-2xl">S</span>ervice Excellence: Delivering outcomes that matter and experiences that linger.<br />
                <span className="font-bold text-xl md:text-2xl">E</span>mpowerment: Equipping partners with the clarity and confidence to own their transformation journey.<br />
            </p>
        </div>
        <div className="w-full md:w-1/2 md:ml-8 lg:ml-20"><Image src={'/mvp2.jpg'} alt='our mvp' width={500} height={500} className='aboutimage w-full h-auto'/></div>
    </div>
  )
}

export default Mvp