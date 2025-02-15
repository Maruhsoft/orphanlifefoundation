import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Children playing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Us. Change Their World.<br />
              Change Yours.<br />
              This Will Change Everything.
            </h1>
            <a
              href="https://www.paypal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 transition-colors"
            >
              Donate Now
            </a>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Each day, an estimated 734 children become orphans</h2>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Dedicated to looking after the welfare of orphan children</h2>
          <Link
            to="/about/mission"
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors"
          >
            Our Mission <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Children playing"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Children playing"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            By supporting an orphan, you are supporting an entire community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Make a Donation</h3>
              <p className="text-gray-600 mb-4">Your contribution can make a real difference in a child's life.</p>
              <a
                href="https://www.paypal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
              >
                Donate Now
              </a>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-4">Join our team and help make a difference in children's lives.</p>
              <Link
                to="/get-involved/volunteer"
                className="inline-block px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
              >
                Learn More
              </Link>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Fundraise</h3>
              <p className="text-gray-600 mb-4">Start your own fundraising campaign to support our cause.</p>
              <Link
                to="/get-involved/fundraising"
                className="inline-block px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
              >
                Start Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;