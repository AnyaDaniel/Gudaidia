import React from 'react';

const OurWork = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="py-16 text-center bg-black text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mt-10">How We Help</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">We don’t do guesswork. We craft strategies that drive real momentum, measurable outcomes, and consistent growth.</p>
        </div>
      </div>
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-black">Why Work With Us?</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">We provide tailored strategies that align with your business goals to drive innovation, efficiency, and growth.</p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-black">Sparked by Ingenuity</h3>
              <p className="mt-2 text-gray-600">We generate bold, original ideas that are strategically aligned with your business goals.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-black">Wisdom That Works</h3>
              <p className="mt-2 text-gray-600">Our team brings deep industry knowledge and practical experience to every engagement.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-black">Client-Centric Solutions</h3>
              <p className="mt-2 text-gray-600">We keep your goals at the center and move collaboratively toward results.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-black">Your Vision, Our Mission</h3>
              <p className="mt-2 text-gray-600">We shape strategy around your purpose, not around industry clichés.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-black">Results You Can Measure</h3>
              <p className="mt-2 text-gray-600">Our strategies are backed by data and built for tangible impact.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-black">Built Just for You</h3>
              <p className="mt-2 text-gray-600">We design solutions that align with your identity, not just industry norms.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-gray-100'>
        <div className="max-w-6xl mx-auto px-4 py-16 text-center text-black">
          <h1 className="text-3xl font-extrabold mt-10">From Idea to Impact</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">We turn strategy into action. Our CSM/EDF Framework guides you through every phase. It’s a structured, flexible approach designed to transform ideas into measurable growth.</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="rounded-lg overflow-hidden shadow-md">
          <video 
            className="w-full"
            style={{ maxHeight: '600px', objectFit: 'cover' }}
            controls
            poster=""
          >
            <source src="/impact.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Our Work Showcase */}



      {/* Call to Action */}
      <div className="bg-black py-16 text-center text-white">
        <h2 className="text-4xl font-extrabold">Ready to Take Your Business to the Next Level?</h2>
        <p className="mt-4 text-xl">Lets work together to create innovative strategies that will drive your business success.</p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-white text-black py-2 px-6 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default OurWork;
