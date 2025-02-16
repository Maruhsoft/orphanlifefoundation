import React from 'react';

const WhatWeDo = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">What We Do</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Education Support</h3>
          <p className="text-gray-600">
            We provide educational opportunities and resources to help orphaned children build a better future through learning.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Healthcare Access</h3>
          <p className="text-gray-600">
            We ensure children have access to essential medical care, regular check-ups, and health education.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Development</h3>
          <p className="text-gray-600">
            We work with local communities to create sustainable support systems for orphaned children.
          </p>
        </div>
      </div>

      <div className="prose max-w-none text-gray-600">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Approach</h2>
        <p className="mb-4">
          At the Orphan Life Foundation, we believe in a holistic approach to supporting orphaned children. Our work spans multiple areas of intervention, ensuring that children receive comprehensive support that addresses all aspects of their development.
        </p>
        <p className="mb-4">
          We focus on creating sustainable solutions that empower communities to support their orphaned children effectively. This includes working with local partners, building capacity within communities, and developing programs that can be maintained long-term.
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;