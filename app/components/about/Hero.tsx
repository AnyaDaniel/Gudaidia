import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row mb-6 pt-20 justify-center items-center gap-5 px-4 md:px-8 w-full'>
        <div className="flex w-full md:w-1/2">
          <Image src='/contact2.jpg' alt='' width={800} height={500} className='aboutimage w-full h-auto'/>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="font-bold pb-4 md:pb-5 text-2xl md:text-3xl lg:text-4xl">We are The Gʊd Aɪ’diə Company</h1>
            {/* <p className="text-xl text-justify">The Gʊd Aɪˈdiə Company is an innovation and growth strategy enabler based in New Jersey. We help leading establishments navigate all stages of innovation and growth. Founded with a strategic mission, we are a team of innovation specialists, strategists, analysts, technology experts, behavioral scientists and coordinators who have earned a reputation for cutting through complexity over many years while offering clear, independent and candid strategic solutions.
                <br /><br />Our expertise spans various sectors that include <b>Consumer</b>, <b>Entertainment & Recreation</b>, <b>Technology</b> and <b>Energy</b>.
            </p> */}
            <p className="text-base md:text-lg leading-relaxed">The Gʊd Aɪ'diə Company partners with leaders who are building something meaningful, evolving what exists, or reimagining what's possible next. The work is collaborative by nature, grounded in real-world execution, and guided by a deep respect for each partner's vision.
            There are no off-the-shelf answers here. Every engagement is shaped around purpose, context, and ambition, with strategies designed to move from idea to action without losing heart or momentum along the way.

            </p>
        </div>
    </div>
  )
}

export default Hero