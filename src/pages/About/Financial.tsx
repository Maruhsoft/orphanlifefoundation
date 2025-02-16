import React from 'react';

const Financial = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Financial Information</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Financial Transparency</h2>
        <p className="text-gray-600 mb-6">
          At the Orphan Life Foundation, we believe in complete transparency with our donors and stakeholders. We are committed to ensuring that your donations are used effectively to support orphaned children worldwide.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl font-bold text-orange-500 mb-2">85%</div>
            <div className="text-gray-600">Program Services</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl font-bold text-orange-500 mb-2">10%</div>
            <div className="text-gray-600">Administrative Costs</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl font-bold text-orange-500 mb-2">5%</div>
            <div className="text-gray-600">Fundraising</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Annual Reports</h2>
          <div className="space-y-4">
            <a href="#" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="font-semibold text-gray-900">2023 Annual Report</div>
              <div className="text-gray-600">Download PDF (2.5MB)</div>
            </a>
            <a href="#" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="font-semibold text-gray-900">2022 Annual Report</div>
              <div className="text-gray-600">Download PDF (2.3MB)</div>
            </a>
            <a href="#" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="font-semibold text-gray-900">2021 Annual Report</div>
              <div className="text-gray-600">Download PDF (2.1MB)</div>
            </a>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Financial Certifications</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              We maintain the highest standards of financial accountability and transparency. Our financial statements are audited annually by independent certified public accountants.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Charity Navigator: 4-Star Rating</li>
              <li>GuideStar: Platinum Transparency</li>
              <li>BBB Wise Giving Alliance: Accredited Charity</li>
              <li>CharityWatch: Top-Rated Organization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financial;