import Image from 'next/image'
import React from 'react'

const Algorithm = () => {
  return (
    <div className='bg-black text-white flex py-12 px-8 justify-center items-center gap-5'>
        <div className="md:w-1/2 hidden md:block"><Image src={'/characters.png'} alt='' width={500} height={500} className='aboutimage'/></div>
        <div className="md:w-1/2">
            <h1 className="font-[700] pb-5 text-3xl"><span className="text-[#faf1cf]">CSM/EDF Algorithm</span></h1>
            <p className="text-xl text-justify"><span className="font-[700]">The CSM/EDF Algorithm</span> – a comprehensive framework tailored for businesses aiming to drive innovation and sustain long-term growth in today&apos;s competitive market environment. This “<b>Gud</b>” Aid is agile. It helps establishments to effectively maneuver the intricacies of evolution and creativity with accuracy and flexibility.
            </p>
        </div>
    </div>
  )
}

export default Algorithm