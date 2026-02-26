'use client'

import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Services = () => {
  return (
        <div>
            <div className="py-5 text-center">
            <h1 className='text-purple-600 text-3xl md:text-4xl lg:text-5xl font-extrabold'>Services</h1>
        </div>
        <Carousel showArrows={true} showThumbs={false} showIndicators={true} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true} stopOnHover={true} swipeable={true} transitionTime={2000} interval={5000} animationHandler={'fade'} showStatus={false}>
        <div className="bg-[#4d724d] text-[#faf1cf] px-4 md:px-20 lg:px-40 items-center flex min-h-[60vh] md:h-[70vh] text-left py-8 md:py-0">
        <div className="hidden md:block w-1/2 mr-8"><Image src={'/gud1.jpg'} alt='' width={200} height={300} /></div>
            <div className='w-full md:w-[50%]'>
                <h1 className="font-bold pb-4 md:pb-5 text-2xl md:text-3xl lg:text-4xl">Brand Renaissance</h1>
                <p className="pb-5 md:pb-20 text-base md:text-lg leading-relaxed">Revitalizing and evolving brand identities to ensure relevance and impactful engagement with target audiences. SB</p>
            </div>
        </div>
        <div className="bg-[#4d724d] text-[#faf1cf] px-4 md:px-20 lg:px-40 items-center flex min-h-[60vh] md:h-[70vh] text-left py-8 md:py-0">
        <div className="hidden md:block w-1/2 mr-8"><Image src={'/gud2.jpg'} alt='' width={200} height={300} /></div>
            <div className='w-full md:w-[50%]'>
                <h1 className="font-bold pb-4 md:pb-5 text-2xl md:text-3xl lg:text-4xl">Business Strategy Alignment</h1>
                <p className="pb-5 md:pb-20 text-base md:text-lg leading-relaxed">Providing expert advice and insights to align business operations with market trends and future goals, driving strategic growth. SU & NV</p>
            </div>
        </div>
        <div className="bg-[#4d724d] text-[#faf1cf] px-4 md:px-20 lg:px-40 items-center flex min-h-[60vh] md:h-[70vh] text-left py-8 md:py-0">
        <div className="hidden md:block w-1/2 mr-8"><Image src={'/gud3.jpg'} alt='' width={200} height={300} /></div>
            <div className='w-full md:w-[50%]'>
                <h1 className="font-bold pb-4 md:pb-5 text-2xl md:text-3xl lg:text-4xl">Digital Positioning and Transformation</h1>
                <p className="pb-5 md:pb-20 text-base md:text-lg leading-relaxed">Optimizing and leveraging digital strategies to achieve a specific market position or advantage (market differentiation).  SME/EB <br /><br />Adoption and integration of cutting-edge digital technologies and strategies to improve operations and customer interactions.</p>
            </div>
        </div>
        <div className="bg-[#4d724d] text-[#faf1cf] px-4 md:px-20 lg:px-40 items-center flex min-h-[60vh] md:h-[70vh] text-left py-8 md:py-0">
        <div className="hidden md:block w-1/2 mr-8"><Image src={'/gud4.jpg'} alt='' width={200} height={300} /></div>
            <div className='w-full md:w-[50%]'>
                <h1 className="font-bold pb-4 md:pb-5 text-2xl md:text-3xl lg:text-4xl">Excellence Optimization</h1>
                <p className="pb-5 md:pb-20 text-base md:text-lg leading-relaxed">Streamlining and enhancing business processes to achieve peak efficiency, cost reduction, and superior performance. SME/EB</p>
            </div>
        </div>
        <div className="bg-[#4d724d] text-[#faf1cf] px-4 md:px-20 lg:px-40 items-center flex min-h-[60vh] md:h-[70vh] text-left py-8 md:py-0">
        <div className="hidden md:block w-1/2 mr-8"><Image src={'/gud5.jpg'} alt='' width={200} height={300} /></div>
            <div className='w-full md:w-[50%]'>
                <h1 className="font-bold pb-4 md:pb-5 text-2xl md:text-3xl lg:text-4xl">Innovative Solutions Management</h1>
                <p className="pb-5 md:pb-20 text-base md:text-lg leading-relaxed">Guiding businesses through the complete innovation lifecycle, from conceptualization to implementation, to maintain a competitive edge. MB</p>
            </div>
        </div>
        <div className="bg-[#4d724d] text-[#faf1cf] px-4 md:px-20 lg:px-40 items-center flex min-h-[60vh] md:h-[70vh] text-left py-8 md:py-0">
        <div className="hidden md:block w-1/2 mr-8"><Image src={'/gud6.jpg'} alt='' width={200} height={300} /></div>
            <div className='w-full md:w-[50%]'>
                <h1 className="font-bold pb-4 md:pb-5 text-2xl md:text-3xl lg:text-4xl">Holistic Growth Design</h1>
                <p className="pb-5 md:pb-20 text-base md:text-lg leading-relaxed">Delivering comprehensive strategies for sustainable business growth that aligns with long-term objectives and vision. SB</p>
            </div>
        </div>
        </Carousel>
        </div>
      
  )
}

export default Services