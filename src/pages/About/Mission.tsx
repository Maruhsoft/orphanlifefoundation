import React from 'react';

const Mission = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Mission and Story</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            The Orphan Life Foundation is dedicated to improving the lives of orphaned children worldwide through sustainable development, education, and community support. We believe every child deserves a chance at a bright future, regardless of their circumstances.
          </p>
          <p className="text-gray-600 mb-6">
            Our mission is to provide comprehensive care and support to orphaned children, ensuring they have access to education, healthcare, and opportunities for personal growth.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Children playing"
            className="w-full h-96 object-cover  shadow-lg"
          />
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
        <div className="prose max-w-none text-gray-600">
          <p className="mb-4">
            Founded in 2010, the Orphan Life Foundation began with a simple vision: to create a world where no child feels alone. What started as a small local initiative has grown into a global movement, touching the lives of thousands of children across multiple continents.
          </p>
          <p className="mb-4">
            Over the years, we've developed comprehensive programs that address not just immediate needs, but also focus on long-term development and sustainability. Our approach combines direct support with community development, ensuring that our impact extends beyond individual children to strengthen entire communities.
          </p>
          <p>
            Today, we continue to expand our reach and deepen our impact, working closely with local communities and partners to create lasting change in the lives of orphaned children worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
