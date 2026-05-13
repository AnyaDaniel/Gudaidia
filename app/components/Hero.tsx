'use client'

import Link from 'next/link'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Hero = () => {
  return (
      <Carousel showThumbs={false} showIndicators={true} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true} stopOnHover={true} swipeable={true} transitionTime={2000} interval={5000} animationHandler={'fade'} showStatus={false}>
        <div className="bg-[url('/fp5.jpg')] w-full bg-cover text-left">
            <div className="bg-[#00000050] w-full flex items-center justify-center px-4 md:pt-0 mx-auto h-screen">
            <div className='text-[#faf1cf] h-full w-full md:ml-28'>
                <h1 className="font-bold text-xl sm:text-2xl md:text-4xl leading-relaxed mt-20 md:mt-32 mb-6">We help businesses defy limits, navigate transformation, <br/>and achieve lasting success, no matter how complex.
                </h1>
                {/* <p className="pb-5 text-justify leading-relaxed">At The Gʊd AI'diə Company, we help businesses break through challenges<br/> and achieve sustainable success. Whether you’re scaling up, <br/>refining your strategy, or navigating change, our team delivers bold strategies,<br/> fresh insights, and innovative solutions that drive real impact.</p> */}
                <p className="pb-5 text-sm sm:text-base leading-relaxed">Good ideas surround us every day. They show up in conversations, late-night notes, half-finished sketches, and moments of quiet clarity. But ideas alone don&apos;t move the needle. Momentum comes from intention, courage, and the willingness to take the next step. That&apos;s where we come in.</p>

                <Link href={'./about'} className='mb-10 text-white bg-black px-6 py-4 hidden md:inline-block '> Find out more</Link>
            </div>
            </div>
        </div>
        <div className="bg-[url('/hero3.jpg')] bg-cover flex justify-center items-center h-screen text-left ">
            <div className="bg-[#00000050] w-full h-full flex items-center">
              <div className='mt-36 md:mt-52 md:ml-28 w-full h-full px-4 md:px-8'>
                  <h1 className="font-bold leading-relaxed text-2xl sm:text-3xl md:text-4xl mt-10 md:mt-20 text-white mb-6">Build Boldly. Move with Purpose. Grow with Intention.</h1>
                  {/* <p className="text-base text-white">Across the consumer , Entertainment & Recreation, Technology, and Energy sector, our CSM/EDF framework drives agile, impactful strategies. </p> */}
                  <p className="text-sm sm:text-base text-white leading-relaxed">Across Consumer, Entertainment & Recreation, Technology, and Energy, the work centers on helping organizations build with confidence, move with clarity, and grow in ways that feel true to who they are. The CSM/EDF Framework offers structure without constraint, creating space for ideas to breathe, evolve, and turn into progress you can actually see. </p>
                  <Link href={'./contact'} className='mb-10 text-white py-4 inline-block'>Start today</Link>
                  
              </div>
            </div>
        </div>
      </Carousel>
      
  )
}

export default Hero