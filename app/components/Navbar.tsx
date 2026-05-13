'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CgClose, CgMenu } from 'react-icons/cg'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <header className='fixed inset-x-0 top-0 z-40 bg-black'>
      <div className='mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 text-white'>
        <Link href={'/'} aria-label='Home'>
          <Image src={'/logo2.jpg'} alt='The Gudaidia Company logo' width={356} height={179} className='h-12 w-auto' />
        </Link>

        <nav>
          <ul className='hidden items-center gap-8 text-sm md:flex'>
            <li><Link href='/' className='hover:text-[#a5a5a5]'>Home</Link></li>
            <li><Link href='/about' className='hover:text-[#a5a5a5]'>About Us</Link></li>
            <li><Link href='/work' className='hover:text-[#a5a5a5]'>Work</Link></li>
            <li><Link href='/contact' className='hover:text-[#a5a5a5]'>Contact Us</Link></li>
          </ul>
          <button
            type='button'
            onClick={handleClick}
            className='md:hidden'
            aria-label='Open navigation menu'
          >
            <CgMenu className='text-3xl' />
          </button>
        </nav>
      </div>

      {isActive && (
        <div className='fixed inset-0 z-50 bg-black/95 text-white'>
          <div className='mx-auto flex h-full max-w-screen-sm flex-col px-6 py-6'>
            <div className='flex items-center justify-between'>
              <Link href='/' aria-label='Home'>
                <Image src={'/logo.png'} alt='The Gudaidia Company logo' width={87} height={57} />
              </Link>
              <button type='button' onClick={handleClick} aria-label='Close navigation menu'>
                <CgClose className='text-3xl' />
              </button>
            </div>

            <ul className='mt-16 space-y-6 text-xl'>
              <li><Link href='/' onClick={handleClick} className='block hover:text-gray-300'>Home</Link></li>
              <li><Link href='/work' onClick={handleClick} className='block hover:text-gray-300'>Work</Link></li>
              <li><Link href='/about' onClick={handleClick} className='block hover:text-gray-300'>About Us</Link></li>
              <li><Link href='/contact' onClick={handleClick} className='block hover:text-gray-300'>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
