import React from 'react'
import GridImage from './GridImage'

const Services = () => {
  return (
    <div>
        <div className="py-12 text-center">
            <h1 className='text-black text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4'>The Gʊd Catalyst</h1>
            <h4 className='cat5'>Igniting innovation. Accelerating growth.</h4>
            <div className='cat6 mt-8 space-y-6'>
              <p>The Gʊd Catalyst is a structured strategic intervention designed to unlock stalled growth, strengthen competitive positioning, and sharpen organizational direction.</p>
              <p>It works by clarifying strategic priorities, challenging limiting assumptions, aligning leadership teams and key stakeholders around a shared vision, and transforming promising ideas into defined initiatives with measurable outcomes. Through disciplined analysis, innovation audits, and actionable growth roadmaps, it converts complexity into clarity and intention into execution.</p>
              <p>The result is renewed momentum, stronger operational alignment, and a clear pathway to sustainable growth.</p>
            </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
            <GridImage heading='About Us' pic="/light-bulb-img.jpg" text='' link='/about'/>
           <GridImage heading='Our MVP' pic="/aboutt.jpg" text='' link='/about#mvp'/>
           
           <GridImage heading='CSM/EDF Framework' pic="/algorithm.jpg" text='' link='/work'/>
           <GridImage heading='Our Work' pic="/work1.jpg" text='' link='/work'/>
           {/* <GridImage heading='Register' pic="/register.jpg" text='' link='/'/>
           <GridImage heading='Donate' pic="/donate.jpg" text='' link='/'/>
           <GridImage heading='Contact Us' pic="/contact.jpg" text='' link='/contact'/>
           <GridImage heading='The Gʊd Aɪˈdiə Campaign' pic="/campain.jpg" text='' link='/'/> */}
           
        </div>
    </div>
  )
}

export default Services
