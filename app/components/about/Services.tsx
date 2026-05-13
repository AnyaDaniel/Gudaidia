'use client'

import Image from 'next/image';
import type { IconType } from 'react-icons';
import { LuLayers, LuLightbulb, LuMonitorSmartphone, LuRefreshCcw, LuTarget, LuZap } from 'react-icons/lu';

const Services = () => {
  const services: { title: string; description: string; image: string; icon: IconType }[] = [
    {
      title: 'Brand Renaissance',
      description: 'Revitalizing and evolving brand identities so your story lands with clarity, confidence, and competitive relevance.',
      image: '/Gud1.jpg',
      icon: LuRefreshCcw,
    },
    {
      title: 'Business Strategy Alignment',
      description: 'Aligning market opportunity, organizational capability, and leadership priorities to create a cohesive growth agenda.',
      image: '/Gud2.jpg',
      icon: LuTarget,
    },
    {
      title: 'Digital Positioning & Transformation',
      description: 'Crafting digital experiences and operating models that sharpen positioning and power meaningful change across channels.',
      image: '/Gud3.jpg',
      icon: LuMonitorSmartphone,
    },
    {
      title: 'Excellence Optimization',
      description: 'Improving processes, governance, and operations so teams perform with consistency, speed, and measurable efficiency.',
      image: '/Gud4.jpg',
      icon: LuZap,
    },
    {
      title: 'Innovative Solutions Management',
      description: 'Managing ideas, pilots, and launch plans so innovation moves forward with structure and commercial clarity.',
      image: '/Gud5.jpg',
      icon: LuLightbulb,
    },
    {
      title: 'Holistic Growth Design',
      description: 'Designing growth strategies that connect customer insights, capability, and long-term business ambition.',
      image: '/Gud6.jpg',
      icon: LuLayers,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">Our Services</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">We partner with leaders to unlock growth through strategic innovation and execution excellence.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="group overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10"></div>
              </div>

              <div className="space-y-5 p-7">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gray-300 bg-gray-50 text-black">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <div className="space-y-3 text-center">
                  <h3 className="text-xl font-semibold text-black">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
                <button className="inline-flex items-center justify-center rounded-full border border-black bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-gray-900">
                  Learn More
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-14 border-t border-gray-200 pt-10 text-center">
        <h2 className="text-2xl font-bold text-black mb-4">Ready to Transform Your Business?</h2>
        <p className="text-gray-600 mb-6">Let&apos;s discuss how our services can drive your growth.</p>
        <a href="/contact" className="inline-block rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-900">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Services;
