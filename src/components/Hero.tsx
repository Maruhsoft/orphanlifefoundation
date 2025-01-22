import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Children playing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Join Us. Change Their World.
          <span className="block text-orange-500">This Will Change Everything.</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Every child deserves a chance at a better future. Together, we can make a difference
          in the lives of orphaned children around the world.
        </p>
        <div className="mt-10 flex space-x-4">
          <button
            onClick={() => (window.location.href = 'https://example.com')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium text-white bg-orange-500 hover:bg-orange-600"
            >
            Donate Now
          </button>
          <button
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium text-orange-500 bg-white hover:bg-gray-50"
            >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
