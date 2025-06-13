// import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div className="w-full">
        <div className="py-5 text-center">
            <h1 className='text-purple-600 text-5xl font-extrabold'>OUR STORY</h1>
        </div>
        <div className="bg-blue-950 text-base py-20 px-4 md:flex justify-center items-start text-white w-full">
            <div className="">
                <p className="text-justify">The Gʊd Aɪ’diə Company is an innovation and growth strategy enabler based in New Jersey. We assist leading establishments through all stages of innovation and growth. Founded with a strategic mission, Our team comprises innovation specialists, strategists, analysts, technology experts, behavioral scientists, and coordinators who have earned a reputation for simplifying complexity over many years while offering clear, independent, and candid strategic solutions. Our expertise spans various sectors, including Consumer, Entertainment & Recreation, Technology, and Energy. Their mission is to drive business success through innovative strategies and creative solutions. Their vision is to be the top growth enablement firm offering innovative and growth strategies needed by businesses to achieve sustainable success. </p>

                <p>We operate under the Principles of RISE:</p>
                
                <p><span className='font-bolc text-xl'>R</span>Resilience:  Staying committed to clients success, overcoming challenges, and adapting to change with unwavering dedication.</p>
                <p><span className='font-bold text-xl'>I</span>Innovation: Constantly seeking out and applying the most creative, forward-thinking solutions to drive business growth and transformation</p>
                <p><span className='font-bold text-xl'>S</span>ervice Excellence: Delivering outstanding results through exceptional service, ensuring that every client experience is positive and impactful.
                </p>
                <p><span className='font-bold text-xl'>E</span>mpowerment: Equipping clients with the knowledge, tools, and confidence they need to succeed, making them active participants in their own transformation.
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
