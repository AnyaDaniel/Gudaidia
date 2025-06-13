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
            <div className='text-[#faf1cf] h-full w-full ml-28'>
                <h1 className="font-bold leading-10 mt-32 text-4xl mb-6">We help businesses defy limits, <br/>navigate transformation, <br/>and achieve lasting success,<br/> no matter how complex.
                </h1>
                <p className="pb-5 text-justify leading-relaxed">At The Gʊd AI'diə Company, we help businesses break through challenges<br/> and achieve sustainable success. Whether you’re scaling up, <br/>refining your strategy, or navigating change, our team delivers bold strategies,<br/> fresh insights, and innovative solutions that drive real impact.</p>
                <Link href={''} className='mb-10 text-white bg-black px-6 py-4 inline-block'> Find out more</Link>
            </div>
            </div>
        </div>
        <div className="bg-[url('/fp.jpg')] bg-cover flex justify-center items-center h-screen text-left ">
            <div className='mt-52 ml-28 w-full h-full'>
                <h1 className="font-bold leading-10 text-4xl mt-20 text-white mb-6">Let&apos;s make your business<br/> thrive today.<br/> Talk to Us Today</h1>
                <p className="text-base text-white">We work across Consumer, <br/> Entertainment & Recreation, Technology, and Energy sector, <br/>using our CSM/EDF framework to create agile, <br/>results-driven strategies tailored to your business needs. </p>
                <Link href={''} className='mb-10 text-white py-4 inline-block'> Find out more</Link>s
                
            </div>
        </div>
      </Carousel>
      
  )
}

export default Hero