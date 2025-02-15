import React from 'react';

const TRP = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Roof for Rookies Project (2RP)</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Building Safe Spaces</h2>
          <p className="text-gray-600 mb-6">
            The Roof for Rookies Project (2RP) focuses on providing safe and stable housing for orphaned children. We renovate and improve orphanage facilities to ensure children have a comfortable place to call home.
          </p>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Impact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 50+ facilities renovated</li>
              <li>• 2,000+ children housed</li>
              <li>• 100% safety compliance</li>
              <li>• 20+ communities served</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Building renovation"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Facility Renovation</h3>
          <p className="text-gray-600">
            Complete renovation of existing facilities to meet safety and comfort standards.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Upgrades</h3>
          <p className="text-gray-600">
            Implementation of safety features and emergency systems in all facilities.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Maintenance Training</h3>
          <p className="text-gray-600">
            Training staff in facility maintenance and emergency procedures.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Support Our Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Make a Donation</h3>
            <p className="text-gray-600 mb-4">
              Your contribution helps provide safe shelter for children in need. Every donation makes a difference.
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
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Volunteer</h3>
            <p className="text-gray-600 mb-4">
              Join our construction and renovation projects. We need skilled volunteers and general helpers.
            </p>
            <a
              href="/get-involved/volunteer"
              className="inline-block px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600"
            >
              Join Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TRP;