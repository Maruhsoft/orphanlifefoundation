import React from 'react';

const Mission = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Dedicated to looking after the welfare of orphan children, we strive to provide
              them with the care, education, and opportunities they deserve. Our commitment
              goes beyond basic needs – we're building futures, one child at a time.
            </p>
            <div className="mt-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 bg-orange-500 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Immediate Impact
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    By supporting an orphan, you are supporting an entire community.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="rounded-lg shadow-lg object-cover"
                src="https://unsplash.com/photos/boy-and-girl-eating-on-table-YiA4wqVpLQQ"
                alt="Children Eating"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
