import React, { useState } from 'react';

const GetInvolved = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium shadow-sm text-white bg-orange-500 hover:bg-orange-600"
        >
        Get Involved
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <svg
                  className="h-8 w-8 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-9 3a1 1 0 012 0v2a1 1 0 11-2 0v-2zm1-11a1 1 0 00-1 1v4a1 1 0 002 0V3a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Volunteering Assistance
              </h3>
            </div>
            <p className="mt-4 text-sm text-gray-700">
              Get involved and be part of the change! Join hands with Orphan Life Foundation to support our mission of making a positive impact. Reach out to our customer service representative via Live Chat to explore how you can contribute to our cause!
            </p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GetInvolved;
