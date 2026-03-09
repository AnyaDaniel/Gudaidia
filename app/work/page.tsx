import React from 'react';

const OurWork = () => {
  return (
    <div className="w-full bg-gray-100">
      {/* Header Section */}
      <div className="py-16 text-center bg-black text-white">
        <h1 className="text-5xl font-extrabold mt-10">How We Help</h1>
        <p className="mt-4 text-xl">We don’t do guesswork. We craft strategies that drive real </p>
      </div>
            {/* Section - How We Help */}
            <div className="bg-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-black">Why Work With Us?</h2>
          <p className="mt-4 text-xl text-gray-600">We provide tailored strategies that align with your business goals to drive innovation, efficiency, and growth.</p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-black">Sparked by Ingenuity</h3>
              <p className="mt-2 text-gray-600">We generate bold, original ideas that are not only creative but strategically aligned with your business goals.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-black">Wisdom That Works</h3>
              <p className="mt-2 text-gray-600">Our team of seasoned professionals brings deep industry knowledge and practical experience</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-black">Client-Centric Solutions</h3>
              <p className="mt-2 text-gray-600">We prioritize your goals and work collaboratively to bring your vision to life.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-black">Your Vision, Our Mission</h3>
              <p className="mt-2 text-gray-600">We place your goals at the heart of everything we do</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-black">Results You Can Measure</h3>
              <p className="mt-2 text-gray-600">Our strategies are backed by data and built for impact.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-black">Built Just for You</h3>
              <p className="mt-2 text-gray-600">We shape every strategy around your purpose, challenges, and potential ,forging solutions that align with your identity, not industry norms. </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Header */}
      <div className='w-full bg-gray-100'>
        <div className="py-16 text-center text-black">
          <h1 className="text-3xl font-extrabold mt-10">From Idea to Impact</h1>
          <p className="mt-4 text-xl">We turn strategy into action. Our CSM/EDF Framework guides you through every phase. It’s a structured, flexible approach designed to transform ideas into measurable growth.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 mb-12">
        <div className="rounded-lg overflow-hidden shadow-md max-w-4xl mx-auto">
          <video 
            className="w-full"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
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
