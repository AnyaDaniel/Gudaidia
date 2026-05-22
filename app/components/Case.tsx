import React from 'react'
import GridImage from './GridImage'
import Color from './Color'

const Case = () => {
  return (
    <div>
        <div className="py-5 text-center my-8">
          <h1 className='text-purple-black text-4xl font-extrabold'>Services: Innovation &amp; Growth Consulting</h1>
        </div>
        <div className="grid md:grid-cols-4 ">
           <GridImage heading='Brand Consulting' link='' pic="/Gud1.jpg" text='Reworking how your business is understood, positioned, and experienced.'/>
           <Color color='bg-yellow-300' />
           <GridImage heading='Business Strategy' link='' pic="/Gud2.jpg" text='Aligning direction, operations, and goals into a clear strategic path.'/>
           <Color color='bg-teal-300' />
           <Color color='bg-pink-300' />
           <GridImage heading='Digital Transformation' link='' pic="/digital-positioning.jpg" text='Ensuring your digital presence reflects the value and capability of your business.'/>
           <Color color='bg-blue-300' />
           <GridImage heading='Strategy Operations (Strat Ops)' link='' pic="/business-process-opt.jpg" text='Strengthening performance, systems, and service delivery.'/>
           <GridImage heading='Innovation' link='' pic="/Gud5.jpg" text='Designing and implementing solutions that address real business challenges.'/>
           <Color color='bg-purple-300' />
           <GridImage heading='Business Transformation (Growth)' link='' pic="/Gud6.jpg" text='Connecting the moving parts of your business to support scalable, sustainable growth.'/>
           <Color color='bg-orange-300' />
        </div>
    </div>
  )
}

export default Case
