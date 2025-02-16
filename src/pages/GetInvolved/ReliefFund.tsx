import React from 'react';

const ReliefFund = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Global Pandemic Relief Fund</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Emergency Support</h2>
          <p className="text-gray-600 mb-6">
            The Global Pandemic Relief Fund provides critical support to orphaned children and their caregivers during health crises. We ensure continued access to essential services, healthcare, and education during challenging times.
          </p>
          <div className="bg-orange-50 p-6 ">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fund Priorities</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Emergency Medical Care</li>
              <li>• Personal Protective Equipment</li>
              <li>• Remote Learning Support</li>
              <li>• Mental Health Services</li>
              <li>• Food Security Programs</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Relief support"
            className="w-full h-96 object-cover  shadow-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6  shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Healthcare Support</h3>
          <p className="text-gray-600">
            Providing medical care, medications, and preventive measures to protect vulnerable children.
          </p>
        </div>
        <div className="bg-white p-6  shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Educational Continuity</h3>
          <p className="text-gray-600">
            Ensuring children can continue their education through remote learning resources.
          </p>
        </div>
        <div className="bg-white p-6  shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic Necessities</h3>
          <p className="text-gray-600">
            Supplying food, hygiene products, and other essential items during crises.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-8 ">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Support the Relief Fund</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Make a Donation</h3>
            <p className="text-gray-600 mb-4">
              Your contribution helps provide essential support during global health emergencies.
            </p>
            <a
              href="https://www.paypal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-orange-500 text-white font-medium  hover:bg-orange-600"
            >
              Donate Now
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Corporate Support</h3>
            <p className="text-gray-600 mb-4">
              Partner with us to provide large-scale relief support during global crises.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-orange-500 text-white font-medium  hover:bg-orange-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReliefFund;
