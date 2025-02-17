import React from 'react';

const Health = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Orphan Health Programs</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Comprehensive Healthcare</h2>
          <p className="text-gray-600 mb-6">
            Our health programs ensure orphaned children receive comprehensive medical care, preventive services, and health education. We believe that good health is fundamental to a child's development and future success.
          </p>
          <div className="bg-orange-50 p-6 ">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Program Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Regular Medical Check-ups</li>
              <li>• Dental Care</li>
              <li>• Mental Health Support</li>
              <li>• Nutrition Programs</li>
              <li>• Health Education</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Healthcare for children"
            className="w-full h-96 object-cover  shadow-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6  shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Medical Care</h3>
          <p className="text-gray-600">
            Providing access to quality medical care, including regular check-ups and specialized treatments.
          </p>
        </div>
        <div className="bg-white p-6  shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Mental Health</h3>
          <p className="text-gray-600">
            Supporting emotional well-being through counseling and therapeutic activities.
          </p>
        </div>
        <div className="bg-white p-6  shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Nutrition</h3>
          <p className="text-gray-600">
            Ensuring proper nutrition through balanced meals and dietary supplements when needed.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-8 ">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Support Health Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Donate for Healthcare</h3>
            <p className="text-gray-600 mb-4">
              Your contribution helps provide essential medical care and health services to children in need.
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
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Medical Volunteers</h3>
            <p className="text-gray-600 mb-4">
              Healthcare professionals can volunteer their services to support our health programs.
            </p>
            <a
              href="/get-involved/volunteer"
              className="inline-block px-6 py-3 bg-orange-500 text-white font-medium  hover:bg-orange-600"
            >
              Join Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
