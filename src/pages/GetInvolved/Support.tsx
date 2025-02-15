import React from 'react';

const Support = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Support Our Cause</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ways to Support</h2>
          <p className="text-gray-600 mb-6">
            There are many ways you can support the Orphan Life Foundation and make a difference in the lives of orphaned children. Every contribution, whether financial or through volunteering, helps us continue our mission.
          </p>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Impact of Your Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Provide education and school supplies</li>
              <li>• Ensure access to healthcare</li>
              <li>• Support housing and basic needs</li>
              <li>• Fund development programs</li>
              <li>• Enable emergency assistance</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Supporting children"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Monthly Giving</h3>
          <p className="text-gray-600 mb-4">
            Become a monthly donor to provide consistent support for our programs and children.
          </p>
          <a
            href="https://www.paypal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600"
          >
            Start Monthly Giving
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">One-Time Donation</h3>
          <p className="text-gray-600 mb-4">
            Make a one-time donation to support our immediate needs and projects.
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
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Legacy Giving</h3>
          <p className="text-gray-600 mb-4">
            Include the Orphan Life Foundation in your estate planning to create lasting impact.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Other Ways to Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Corporate Partnerships</h3>
            <p className="text-gray-600 mb-4">
              Partner with us through corporate giving, matching gifts, or sponsorship opportunities.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600"
            >
              Partner With Us
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Spread the Word</h3>
            <p className="text-gray-600 mb-4">
              Follow us on social media and share our mission with your network.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-orange-500 hover:text-orange-600">Facebook</a>
              <a href="#" className="text-orange-500 hover:text-orange-600">Twitter</a>
              <a href="#" className="text-orange-500 hover:text-orange-600">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;