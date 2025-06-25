import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black'>
        <div className="pt-20 pb-5 md:px-40 text-white">
            <div className="md:flex justify-between items-start border-b-[#FFFFFF52] border-b-2 pb-10 px-20">
                <div className="pb-10 md:pb-0">
                <Image src={'/logo2.jpg'} alt='logo' width={200} height={200}/>

                </div>
                <div className="">
                    <ul className="text-xl md:text-[20px]">
                        <li className="mb-5"><Link href={'/about'} className=' hover:text-[#faf1cf]'>About</Link></li>
                        <li className="mb-5"><Link href={'/about#mvp'} className=' hover:text-[#faf1cf]'>Our MVP</Link></li>
                        <li className="mb-5"><Link href={'/work'} className=' hover:text-[#faf1cf]'>Workshop</Link></li>
                        <Link href={''}> <li className=''>Gʊd Aɪ’diə Campaign</li> </Link>
                    </ul>
                </div>
                
            </div>
            <div className="pt-8 px-20">
                <p className="text-center">&copy; 2024 Net-Trix Solutions</p>
            </div>
        </div>
    </div>
  )
}

export default Footer