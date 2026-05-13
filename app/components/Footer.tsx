import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white'>
      <div className='mx-auto max-w-screen-xl px-6 pt-20 pb-10 md:px-20'>
        <div className='flex flex-col gap-10 border-b border-white/20 pb-10 md:flex-row md:justify-between'>
          <div>
            <Image src={'/logo2.jpg'} alt='The Gudaidia Company logo' width={356} height={179} className='h-16 w-auto' />
          </div>
          <nav>
            <ul className='space-y-5 text-base md:text-lg'>
              <li><Link href='/about' className='hover:text-[#faf1cf]'>About</Link></li>
              <li><Link href='/about#mvp' className='hover:text-[#faf1cf]'>Our MVP</Link></li>
              <li><Link href='/work' className='hover:text-[#faf1cf]'>Work</Link></li>
            </ul>
          </nav>
        </div>

        <div className='pt-8 text-center text-sm text-white/70'>
          <p>Copyright 2026 The Gudaidia Company</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
