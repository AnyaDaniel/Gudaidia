import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row mb-6 pt-20 justify-center items-center gap-5 px-4 md:px-8 w-full">
      <div className="flex w-full md:w-1/2">
        <div className="relative w-full aspect-video overflow-hidden rounded-lg">
          <Image
            src="/contact2.jpg"
            alt="Strategic consultancy collaboration"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="font-bold pb-4 md:pb-5 text-2xl md:text-3xl lg:text-4xl">{`We are The Gʊd Aɪ'diə Company`}</h1>
        <p className="text-base md:text-lg leading-relaxed">{`We are The Gʊd Aɪ'diə Company, a partner to leaders building new paths forward, launching new ideas, fixing what is not working, and expanding what already exists. We step in where clarity is missing, structure is weak, and execution needs to be strengthened, turning intent into work that is aligned, functional, and ready to grow.`}</p>
      </div>
    </div>
  )
}

export default Hero
