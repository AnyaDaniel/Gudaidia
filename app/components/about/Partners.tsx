import Image from 'next/image'
import React from 'react'

const partners = [
  { name: 'ICT Resources', logo: '/partners/ict-resources.png' },
  { name: 'Affinity IT', logo: '/partners/affinity-it.png' },
  { name: 'Tall Chic Naturals', logo: '/partners/tallchic-naturals.png' },
  { name: 'West Africa Partner', logo: '/partners/west-africa-partner.png' },
  { name: 'Quick Touch Futbol', logo: '/partners/quick-touch-futbol.jpg' },
  { name: 'ProElite Training NJ', logo: '/partners/proelite-training.png' },
  { name: 'Net-Trix Solutions Limited', logo: '/partners/net-trix.png' },
]

const Partners = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">Our Clients &amp; Partners</h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">Trusted by organizations across Technology & Digital Services, Cybersecurity, Consumer Products & Goods including beauty, personal care, food & beverage etc, innovation-driven industries, and Sports, Media & Entertainment.</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
        {partners.map((partner) => (
          <div key={partner.name} className="flex items-center justify-center w-full">
            <div className="relative h-16 w-full max-w-[140px]">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Partners
