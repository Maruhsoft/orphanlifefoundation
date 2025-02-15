import React from 'react';

const CWC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Clean Water for Children (CWC)</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">About the Project</h2>
          <p className="text-gray-600 mb-6">
            Clean Water for Children (CWC) is our flagship initiative to provide safe, clean drinking water to orphanages and children's homes across developing regions. We believe that access to clean water is a fundamental right and essential for children's health and development.
          </p>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Impact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 100+ water wells installed</li>
              <li>• 50,000+ children with access to clean water</li>
              <li>• 75% reduction in water-borne diseases</li>
              <li>• 200+ communities served</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Clean water project"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Water Wells</h3>
          <p className="text-gray-600">
            We construct deep-water wells that provide sustainable access to clean water for orphanages and surrounding communities.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Filtration Systems</h3>
          <p className="text-gray-600">
            Installation of water filtration systems to ensure water safety and prevent waterborne diseases.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
          <p className="text-gray-600">
            Training on water safety, hygiene practices, and system maintenance for long-term sustainability.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">How You Can Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Donate</h3>
            <p className="text-gray-600 mb-4">
              Your contribution can help provide clean water to children in need. Every donation makes a difference.
            </p>
            <a
              href="https://www.paypal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600"
            >
              Support This Project
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Volunteer</h3>
            <p className="text-gray-600 mb-4">
              Join our team of volunteers helping to implement water projects and educate communities.
            </p>
            <a
              href="/get-involved/volunteer"
              className="inline-block px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CWC;