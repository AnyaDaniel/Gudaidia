'use client';
import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const caseStudies = [
  {
    title: 'Tall Chic Naturals UK',
    subtitle: 'Digital Strategy & Brand Innovation for Market Expansion | Personal Care | Jan 2025 - Present',
    details: {
      situation: 'TallChic Naturals is a clean beauty brand committed to natural skincare and customer wellness. The brand struggled to connect emotionally and strategically with its audience.',
      task: 'Guide digital repositioning—enhance customer experience, refine brand narrative, and prepare for multi-channel growth.',
      action: [
        'Proposed migration to Shopify for improved e-commerce and multi-platform engagement.',
        'Provided comprehensive website restructure advisory.',
        'Curated novel digital engagement strategies.',
        'Refined brand narrative and content.',
      ],
      results: [
        'Website audit and Shopify migration completed.',
        'Educational content and digital product sections launched.',
        'Social campaigns delivered strong reach and engagement.',
        'Marketplace integrations and Trustpilot setup boosted brand credibility.',
      ],
      outcome: [
        'Clean, customer-focused e-commerce experience.',
        'Stronger brand storytelling and thought leadership.',
        'Increased credibility through marketplace presence.',
        'Content strategy that educates, engages, and converts.',
      ],
      feedback: '"I’m so excited about where the brand is heading!" – Founder',
      explore: 'https://www.tallchicnaturals.com'
    }
  },
  {
    title: 'Affinity IT Security Services',
    subtitle: 'Project Management and Marketing Services | Cybersecurity | Dec 2023 – May 2025',
    details: {
      situation: 'Affinity IT had a strong track record but needed a modern digital experience.',
      task: 'Redesign website, streamline sales workflows, and improve brand credibility.',
      action: [
        'Built reusable proposal templates.',
        'Performed UX audit and site redesign.',
        'Launched LinkedIn ads with trust-building assets.',
      ],
      results: [
        'Faster proposal turnaround.',
        'Improved website credibility and experience.',
        'Launched scalable campaigns with KPIs.',
      ],
      outcome: [
        'Modern digital presence.',
        'Enhanced inbound lead consistency.',
        'Better alignment of technical and business teams.',
      ],
      feedback: '"They delivered structure, clarity, and growth strategies we could execute quickly."',
      explore: ''
    }
  },
  {
    title: 'ICT Resources NJ, USA',
    subtitle: 'Marketing and Sales Enablement Services | ICT | Sept 2024 – Present',
    details: {
      situation: 'ICT Resources lacked a digital communication strategy despite strong government partnerships.',
      task: 'Establish ICT as a thought leader and build strategic outreach assets.',
      action: [
        'Created a strategic messaging framework.',
        'Developed introductory decks, partner briefs, and one-pagers.',
        'Built email and LinkedIn outreach content.',
      ],
      results: [
        'Positioned ICT as a procurement intelligence provider.',
        'Defined content pillars and storytelling opportunities.',
        'Set the stage for digital presence rollout.',
      ],
      outcome: [
        'Clear brand messaging for public sector clients.',
        'Ongoing advisory for future public presence.',
        'Established internal sales and outreach tools.',
      ],
      feedback: '"Their input brought the clarity we needed to compete at the next level."',
      explore: ''
    }
  },
  {
    title: 'Soccer Coaching Academy (Confidential)',
    subtitle: 'Academy Concept Development | Sports Education | Ongoing (Initiated 2024)',
    details: {
      situation: 'The academy project lacked structure, curriculum, and performance benchmarks.',
      task: 'Design coach training curriculum, provide strategic launch support, and plan certification systems.',
      action: [
        'Mapped requirements and aligned with international coaching models.',
        'Developed a strategic framework and curriculum roadmap.',
        'Drafted tiered training modules and proposed governance model.',
      ],
      results: [
        'Created onboarding materials and performance rubrics.',
        'Aligned program with UEFA and U.S. Soccer standards.',
        'Positioned academy for public-private partnerships.',
      ],
      outcome: [
        'Future-ready training model grounded in real coaching demands.',
        'Foundation for sustainable growth and formal launch.',
        'Credible structure for youth and elite coach development.',
      ],
      feedback: '"The structure you’ve helped us define will shape an entire generation of coaches."',
      explore: ''
    }
  },
];

const Work = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-10">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10">Impact Highlights</h2>
      <p className="text-center text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
        Impact shows up as movement. Clearer narratives. Stronger positioning. Systems that actually support progress.
        Below is the delivery overview of recent collaborations and the momentum we have helped unlock.
      </p>

      <div className="mb-12 rounded-lg overflow-hidden shadow-md">
        <video 
          className="w-full h-auto"
          controls
          poster=""
        >
          <source src="/impact.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {caseStudies.map((study, index) => (
        <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center px-4 md:px-5 py-3 md:py-4 bg-gray-100 hover:bg-gray-200 transition"
          >
            <div className="text-left">
              <h3 className="text-lg md:text-xl font-semibold">{study.title}</h3>
              <p className="text-xs md:text-sm text-gray-500">{study.subtitle}</p>
            </div>
            <span className="ml-2">{activeIndex === index ? <FaArrowUp /> : <FaArrowDown />}</span>
          </button>

          {activeIndex === index && (
            <div className="px-4 md:px-6 py-4 md:py-5 bg-white space-y-3 md:space-y-4 text-gray-700 text-sm md:text-base">
              <p className="leading-relaxed"><strong>Situation:</strong> {study.details.situation}</p>
              <p className="leading-relaxed"><strong>Task:</strong> {study.details.task}</p>

              <div>
                <strong>Action:</strong>
                <ul className="list-disc pl-5 space-y-1 leading-relaxed">
                  {study.details.action.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>

              <div>
                <strong>Results:</strong>
                <ul className="list-disc pl-5 space-y-1 leading-relaxed">
                  {study.details.results.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>

              <div>
                <strong>Outcome & Impact:</strong>
                <ul className="list-disc pl-5 space-y-1 leading-relaxed">
                  {study.details.outcome.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>

              <p className="italic text-gray-700 leading-relaxed">Client Feedback: {study.details.feedback}</p>

              {study.details.explore && (
                <a
                  href={study.details.explore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 underline"
                >
                  Visit Website
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Work;