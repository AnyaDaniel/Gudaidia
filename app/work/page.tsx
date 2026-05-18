import React from 'react';

const OurWork = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="py-16 text-center bg-black text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mt-10">How We Help</h1>
          <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto">We don&apos;t guess. We build with intent — turning direction into clear, workable strategies that move your business forward.</p>
        </div>
      </div>
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-black">Why Work With Us?</h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">We don&apos;t provide advisory from a distance. We step into your business as an extension of your team.</p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-black">Sparked by Ingenuity</h3>
              <p className="mt-2 text-gray-600">We develop ideas that are original, practical, and aligned with your direction — creative thinking grounded in what your business is actually trying to achieve.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-black">Wisdom That Works</h3>
              <p className="mt-2 text-gray-600">Our team brings real industry experience and applied insight, focused on solutions that hold up beyond planning and into execution.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-black">Client-Centric Solutions</h3>
              <p className="mt-2 text-gray-600">Your priorities shape the work. We collaborate closely with you to ensure every solution reflects your goals, context, and reality.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-black">Your Vision, Our Mission</h3>
              <p className="mt-2 text-gray-600">We treat your goals as the starting point, not an afterthought — building around what you&apos;re trying to achieve and where you want to go next.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-black">Results You Can Measure</h3>
              <p className="mt-2 text-gray-600">Our approach is structured around outcomes that can be seen, tracked, and improved — not assumptions or abstract promises.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-black">Built Just for You</h3>
              <p className="mt-2 text-gray-600">Every strategy is shaped around your purpose, challenges, and potential — designed to reflect your identity, not industry templates.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-gray-100'>
        <div className="max-w-6xl mx-auto px-4 py-16 text-center text-black">
          <h1 className="text-3xl font-extrabold mt-10">From Idea to Impact</h1>
          <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto">We turn strategy into action. Our CSM/EDF Framework guides you through every phase. It&apos;s a structured, flexible approach designed to transform ideas into measurable growth.</p>
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
        <h2 className="text-4xl font-extrabold">Work with us to build smart, innovative strategies that deliver real results.</h2>
        <p className="mt-4 text-base md:text-lg">Ideas are only useful when they move. Let&apos;s put yours in motion.</p>
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
