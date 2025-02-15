import React from 'react';

const Fundraising = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Fundraising</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Start Your Fundraiser</h2>
          <p className="text-gray-600 mb-6">
            Create your own fundraising campaign to support orphaned children. Whether it's a birthday fundraiser, athletic event, or creative initiative, your efforts can make a real difference.
          </p>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fundraising Ideas</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Birthday Fundraisers</li>
              <li>• Athletic Events</li>
              <li>• School Fundraisers</li>
              <li>• Community Events</li>
              <li>• Virtual Fundraisers</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Fundraising event"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Fundraising</h3>
          <p className="text-gray-600">
            Create a personal fundraising page to share with friends and family.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Team Fundraising</h3>
          <p className="text-gray-600">
            Organize a group fundraising event or campaign with your team.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Corporate Fundraising</h3>
          <p className="text-gray-600">
            Engage your company in fundraising through matching gifts or events.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Fundraising Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Fundraising Guide</h3>
            <p className="text-gray-600 mb-4">
              Download our comprehensive guide with tips and best practices for successful fundraising.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600"
            >
              Download Guide
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Support Team</h3>
            <p className="text-gray-600 mb-4">
              Our team is here to help you plan and execute your fundraising campaign.
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

export default Fundraising;