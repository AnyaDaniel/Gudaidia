import React from 'react'

const partners = [
  { name: 'Net-Trix Solutions Limited', logo: '/partners/net-trix.png' },
  { name: 'ICT Resources', logo: '/partners/ict-resources.png' },
  { name: 'Affinity IT', logo: '/partners/affinity-it.png' },
  { name: 'Tall Chic Naturals', logo: '/partners/tallchic-naturals.png' },
  { name: 'West Africa Partner', logo: '/partners/west-africa-partner.png' },
  // { name: 'Quick Touch Futbol', logo: '/partners/quick-touch-futbol.jpg' },
  // { name: 'ProElite Training NJ', logo: '/partners/proelite-training.png' },
]

const Partners = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">Our Clients & Partners</h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">Trusted by organizations across Technology & Digital Services, Cybersecurity, Consumer Products & Goods (including Beauty, Personal Care, Food & Beverage), Innovation-Driven Industries, and Sports, Media & Entertainment.</p>
      </div>
      <div className="max-w-5xl mx-auto flex flex-wrap gap-8 items-center justify-center">
        {partners.map((partner) => (
          <div key={partner.name} className="flex items-center justify-center">
            <div className="flex h-20 w-40 items-center justify-center rounded border border-gray-200 bg-white p-3 shadow-sm">
              <img
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={64}
                loading="lazy"
                className="h-full w-full object-contain grayscale transition-all duration-300 hover:grayscale-0"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Partners
