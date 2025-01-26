import React from 'react';
import { Heart, DollarSign, Users } from 'lucide-react';
import DonateButton from './DonateButton';
import JoinMonthly from './JoinMonthly';

const Support = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Support Our Cause
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            By supporting an orphan, you are supporting an entire community
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-orange-500 shadow-lg">
                      <Heart className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Make a Donation
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Your donation helps provide food, shelter, education, and healthcare to
                    orphaned children.
                  </p>
                  <div className="mt-6">
                    <DonateButton />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-orange-500 shadow-lg">
                      <DollarSign className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Monthly Giving
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Become a monthly donor and help us provide consistent support to children
                    in need.
                  </p>
                  <div className="mt-6">
                    <JoinMonthly />
                    <button onClick={() => setShowModal(true)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium shadow-sm text-white bg-orange-500 hover:bg-orange-600"
                      >
                      Join Monthly
                    </button>

                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-orange-500 shadow-lg">
                      <Users className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Volunteer
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Join our community of volunteers and make a direct impact in children's
                    lives.
                  </p>
                  <div className="mt-6">
                    <button onClick={() => setShowModal(true)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium shadow-sm text-white bg-orange-500 hover:bg-orange-600"
                      >
                      Get Involved
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
