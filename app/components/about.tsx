// import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div className="w-full bg-gray-50 px-8 py-12">
        <div className="my-4 text-center">
            <h1 className='text-black text-5xl font-extrabold mb-4'>OUR STORY</h1>
        </div>
        <div className=" text-base px-4 md:flex justify-center items-start w-full">
            
            <div className=" text-lg ">
                <p className="text-justify mb-4 leading-relaxed">
                The Gʊd AI'diə Company is an innovation and growth strategy enabler based in New Jersey. We assist leading establishments through all stages of innovation and growth. Founded with a strategic mission, Our team comprises innovation specialists, strategists, analysts, technology experts, behavioral scientists, and coordinators who have earned a reputation for simplifying complexity over many years while offering clear, independent, and candid strategic solutions. Our expertise spans various sectors, including Consumer, Entertainment & Recreation, Technology, and Energy.
                </p>

                <p className='text-xl font-bold'>We operate under the Principles of RISE:</p>
                
                <p><span className='font-bold'>Resilience:</span> We stay committed through challenges and pivot with agility.</p>
                <p><span className='font-bold'>Innovation:</span> We push boundaries, delivering fresh and forward-thinking ideas</p>
                <p><span className='font-bold'>Service Excellence:</span> We deliver results and experiences that truly matter.
                </p>
                <p><span className='font-bold'>Empowerment:</span> EWe equip you with the tools and know-how to own your transformation journey.
                </p>
            </div>
            {/* <div className="md:w-1/2 md:pl-20 pt-20 md:pt-0">
                <Image src={'/logo.png'} alt='logo' width={387} height={357}/>
                <p className="pt-10 pb-5"><Link href={''} className='hover:text-[#faf1cf] underline text-[22px]'>Donate a book</Link></p>
                <Link href={''} className='hover:text-[#faf1cf] underline text-[22px]'>Donate an amount</Link>
            </div> */}
        </div>
    </div>
  )
}

export default About;
