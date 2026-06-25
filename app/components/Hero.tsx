'use client'

import Link from 'next/link'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Hero = () => {
  return (
      <Carousel showThumbs={false} showIndicators={true} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true} stopOnHover={true} swipeable={true} transitionTime={2000} interval={5000} animationHandler={'fade'} showStatus={false}>
        <div className="bg-[url('/fp5.jpg')] w-full bg-cover text-left">
            <div className="bg-[#00000050] w-full flex items-center justify-start px-4 md:pt-0 mx-auto h-screen">
            <div className='text-[#faf1cf] h-full w-full max-w-5xl md:ml-28 md:pr-20'>
                <h1 className="font-bold text-xl sm:text-2xl md:text-4xl leading-relaxe+d mt-20 md:mt-32 mb-6">We Help Businesses Defy Limits, <br></br>Navigate Transformation, <br></br> And Achieve Lasting Success,<br></br> No Matter How Complex.
                </h1>
                <p className="pb-5 text-base md:text-lg leading-relaxed"><span className="font-semibold">We understand this: ideas come easily. Execution does not.</span> Most businesses don&apos;t stall because they lack direction. They stall because what they&apos;ve started is never fully built, properly aligned, or carried forward for expansion (growth). <span className="font-semibold">We work in that gap.</span></p>

                <Link href={'./about'} className='mb-10 text-white bg-black px-6 py-4 hidden md:inline-block '> Find out more</Link>
            </div>
            </div>
        </div>
        <div className="bg-[url('/hero3.jpg')] bg-cover flex justify-center items-center h-screen text-left ">
            <div className="bg-[#00000050] w-full h-full flex items-center justify-start">
              <div className='mt-36 md:mt-52 md:ml-28 w-full max-w-5xl h-full px-4 md:px-8 md:pr-20'>
                  <h1 className="font-bold leading-tight text-2xl sm:text-3xl md:text-4xl mt-10 md:mt-20 text-white mb-6">Build. Align. Expand</h1>
                  <p className="text-base md:text-lg text-white leading-relaxed">We help you build clear strategies and systems, align teams and operations around what matters, and expand what&apos;s already driving performance and growth.</p>
                  <Link href={'./contact'} className='mb-10 text-white py-4 inline-block'>Start today</Link>
                  
              </div>
            </div>
        </div>
      </Carousel>
      
  )
}

export default Hero
