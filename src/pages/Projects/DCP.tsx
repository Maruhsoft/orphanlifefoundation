import React from 'react';

const DCP = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Desk for Children Project (DCP)</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Creating Better Learning Environments</h2>
          <p className="text-gray-600 mb-6">
            The Desk for Children Project (DCP) aims to provide proper study furniture to orphanages and schools, creating conducive learning environments for children. Many children lack basic furniture for studying, which affects their education and posture.
          </p>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Achievements</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 10,000+ desks distributed</li>
              <li>• 500+ schools supported</li>
              <li>• 30,000+ children benefited</li>
              <li>• 15 countries reached</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Children at desks"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Furniture</h3>
          <p className="text-gray-600">
            We provide durable, ergonomic desks and chairs designed for long-term use in challenging environments.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Production</h3>
          <p className="text-gray-600">
            We partner with local craftsmen to produce furniture, supporting local economies while reducing costs.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Maintenance Training</h3>
          <p className="text-gray-600">
            We provide training on furniture maintenance to ensure longevity and proper care of the equipment.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Support Our Cause</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Sponsor a Desk</h3>
            <p className="text-gray-600 mb-4">
              Your donation can provide a desk for a child, giving them a proper place to study and learn.
            </p>
            <a
              href="https://www.paypal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600"
            >
              Donate Now
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Partner With Us</h3>
            <p className="text-gray-600 mb-4">
              We welcome partnerships with organizations and businesses to expand our reach and impact.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DCP;