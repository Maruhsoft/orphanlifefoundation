import React from 'react';

const GivingTuesday = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Giving Tuesday</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join the Global Movement</h2>
          <p className="text-gray-600 mb-6">
            Giving Tuesday is a global generosity movement that unleashes the power of people and organizations to transform their communities and the world. Join us in making a difference in the lives of orphaned children.
          </p>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Impact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Provide education for children</li>
              <li>• Support healthcare initiatives</li>
              <li>• Fund clean water projects</li>
              <li>• Enable shelter improvements</li>
              <li>• Support nutrition programs</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Children smiling"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ways to Participate</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Make a Donation</h3>
            <p className="text-gray-600 mb-4">
              Your contribution, no matter the size, can make a real difference in a child's life.
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
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Start a Fundraiser</h3>
            <p className="text-gray-600 mb-4">
              Create your own fundraising campaign to support our cause.
            </p>
            <a
              href="/get-involved/fundraising"
              className="inline-block px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600"
            >
              Start Fundraising
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Spread the Word</h3>
            <p className="text-gray-600 mb-4">
              Share our mission with your network and help us reach more supporters.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-orange-500 hover:text-orange-600">Facebook</a>
              <a href="#" className="text-orange-500 hover:text-orange-600">Twitter</a>
              <a href="#" className="text-orange-500 hover:text-orange-600">Instagram</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Double Your Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Matching Gifts</h3>
            <p className="text-gray-600 mb-4">
              Many companies match their employees' charitable donations. Check if your employer participates in matching gifts to double your impact.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600"
            >
              Learn More
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Corporate Partnerships</h3>
            <p className="text-gray-600 mb-4">
              Partner with us to make a bigger impact this Giving Tuesday.
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

export default GivingTuesday;