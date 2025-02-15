import React from 'react';

const Lifestyle = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Orphan Lifestyle Programs</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Building Life Skills</h2>
          <p className="text-gray-600 mb-6">
            Our lifestyle programs focus on developing essential life skills, social competencies, and personal development for orphaned children. We aim to prepare them for independent, successful lives.
          </p>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Program Components</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Personal Development Workshops</li>
              <li>• Social Skills Training</li>
              <li>• Financial Literacy Education</li>
              <li>• Cultural Activities</li>
              <li>• Sports and Recreation</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Children in activities"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Life Skills Training</h3>
          <p className="text-gray-600">
            Teaching practical skills like cooking, budgeting, and personal care for independent living.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Social Development</h3>
          <p className="text-gray-600">
            Building communication skills, emotional intelligence, and healthy relationships.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Creative Expression</h3>
          <p className="text-gray-600">
            Encouraging artistic expression through music, art, dance, and other creative activities.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get Involved</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Support Our Programs</h3>
            <p className="text-gray-600 mb-4">
              Your donation helps provide life-changing experiences and skills development for orphaned children.
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
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Share Your Skills</h3>
            <p className="text-gray-600 mb-4">
              Volunteer to teach workshops or lead activities in your area of expertise.
            </p>
            <a
              href="/get-involved/volunteer"
              className="inline-block px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600"
            >
              Volunteer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lifestyle;