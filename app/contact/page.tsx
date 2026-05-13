import Image from 'next/image'
import React from 'react'
import Form from '../components/contact/Form'
import Link from 'next/link'

const page = () => {
  return (
    <main className='pt-16'>
      <div className='grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-6 lg:px-8'>
        <div className='group relative flex flex-col justify-center overflow-hidden text-center h-[520px] rounded-[28px] bg-gray-900'>
          <Image
            src='/contact.jpg'
            alt='Contact phone'
            fill
            priority
            className='object-cover'
          />
          <div className='absolute inset-0 bg-black/70'></div>
          <div className='relative z-10 px-6'>
            <h1 className='font-[700] text-2xl md:text-3xl text-white mb-4'>Contact Us</h1>
            <p className='text-base md:text-lg text-white'>Let&apos;s work together on your next Gʊd Aɪ’diə.</p>
          </div>
        </div>

        <div className='rounded-[28px] bg-white shadow-sm border border-gray-200'>
          <Form />
        </div>

        <div className='contactimage bg-brand-dark-green flex flex-col justify-center overflow-hidden text-center h-[520px] rounded-[28px]'>
          <div className='px-5'>
            <h1 className='font-[700] text-2xl md:text-3xl text-white pb-5'>The Gʊd Aɪ’diə Company</h1>
            <p className='text-base md:text-lg text-white'>
              USA <br />
              +1 862-224-6855 <br />
              <Link href={'mailto:info@gudaidia.com'} className='underline'>info@gudaidia.com</Link>
            </p>
          </div>
        </div>

        <div className='group relative flex flex-col justify-center overflow-hidden text-center h-[520px] rounded-[28px] bg-gray-900'>
          <Image
            src='/contact2.jpg'
            alt='Contact support team'
            fill
            className='object-cover'
          />
        </div>
      </div>
    </main>
  )
}

export default page