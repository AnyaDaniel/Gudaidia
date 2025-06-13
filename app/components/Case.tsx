import React from 'react'
import GridImage from './GridImage'
import Color from './Color'

const Case = () => {
  return (
    <div>
        <div className="py-5 text-center my-8">
          <h1 className='text-purple-black text-4xl font-extrabold'>SERVICES: Business Transformation</h1>
        </div>
        <div className="grid md:grid-cols-4 ">
           <GridImage heading='Brand Renaissance' link='' pic="/gud1.jpg" text='Revitalizing and evolving brand identities to ensure relevance and impactful engagement with target audiences.'/>
           <Color color='bg-yellow-300' />
           <GridImage heading='Business Strategy Alignment' link='' pic="/gud2.jpg" text='We help organizations align their teams, goals, and processes with their core strategy, so every move drives focused, cohesive growth.'/>
           <Color color='bg-teal-300' />
           <Color color='bg-pink-300' />
           <GridImage heading='Digital Positioning' link='' pic="/digital-positioning.jpg" text='We help brands shape how they’re seen online, enhancing visibility, reputation, and discoverability across web, social, and search platforms.'/>
           <Color color='bg-blue-300' />
           <GridImage heading='Business Process Optimization' link='' pic="/business-process-opt.jpg" text='Streamlining and enhancing business processes to achieve peak efficiency, cost reduction, and superior performance.'/>
           <GridImage heading='Idea-to-Impact Lab' link='' pic="/gud5.jpg" text='We help organizations  create, manage and implement new ideas or turn ideas into impact that drives value and competitive advantage.'/>
           <Color color='bg-purple-300' />
           <GridImage heading='Holistic Growth Design' link='' pic="/gud6.jpg" text='We create integrated growth roadmaps that align your strategy, innovation, people, and processes, driving sustainable expansion across markets and touchpoints.'/>
           <Color color='bg-orange-300' />
           
        </div>
    </div>
  )
}

export default Case