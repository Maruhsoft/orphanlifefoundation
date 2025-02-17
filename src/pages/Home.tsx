import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, MessageCircle } from 'lucide-react';
import InfoModal from '../components/InfoModal';

const Home = () => {
  const [activeModal, setActiveModal] = useState<'donate' | 'join' | 'contact' | null>(null);

  const handleOpenModal = (modal: 'donate' | 'join' | 'contact') => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Children smiling"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Give Hope to Children in Need
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Join us in our mission to provide care, education, and a brighter future for orphaned children worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleOpenModal('donate')}
                className="inline-block px-8 py-4 bg-orange-500 text-white font-bold  hover:bg-orange-600 transition-colors text-center"
              >
                Donate Now
              </button>
              <button
                onClick={() => handleOpenModal('join')}
                className="inline-block px-8 py-4 bg-white text-orange-500 font-bold  hover:bg-gray-100 transition-colors text-center"
              >
                Join Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8  shadow-md">
              <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="bg-white p-8  shadow-md">
              <div className="text-4xl font-bold text-orange-500 mb-2">100k+</div>
              <div className="text-gray-600">Children Supported</div>
            </div>
            <div className="bg-white p-8  shadow-md">
              <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-600">Local Partners</div>
            </div>
            <div className="bg-white p-8  shadow-md">
              <div className="text-4xl font-bold text-orange-500 mb-2">85%</div>
              <div className="text-gray-600">Funds to Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Impact in Action</h2>
          <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              alt="Impact video thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <button 
                onClick={() => handleOpenModal('contact')}
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
              >
                <Play className="w-8 h-8 text-orange-500 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white  shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1594753154778-273013529793?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Clean Water Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Clean Water for Children</h3>
                <p className="text-gray-600 mb-4">Providing safe, clean drinking water to orphanages and communities.</p>
                <Link
                  to="/projects/cwc"
                  className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white  shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Education Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Desk for Children Project</h3>
                <p className="text-gray-600 mb-4">Creating conducive learning environments for better education.</p>
                <Link
                  to="/projects/dcp"
                  className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white  shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Housing Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Roof for Rookies Project</h3>
                <p className="text-gray-600 mb-4">Providing safe and comfortable housing for orphaned children.</p>
                <Link
                  to="/projects/2rp"
                  className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Join Us in Making a Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white  shadow-md">
              <h3 className="text-xl font-semibold mb-4">Make a Donation</h3>
              <p className="text-gray-600 mb-4">Support our mission to help orphaned children thrive.</p>
              <button
                onClick={() => handleOpenModal('donate')}
                className="inline-block px-6 py-2 bg-orange-500 text-white  hover:bg-orange-600 transition-colors"
              >
                Donate Now
              </button>
            </div>
            <div className="p-6 bg-white  shadow-md">
              <h3 className="text-xl font-semibold mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-4">Share your time and skills to make a lasting impact.</p>
              <button
                onClick={() => handleOpenModal('join')}
                className="inline-block px-6 py-2 bg-orange-500 text-white  hover:bg-orange-600 transition-colors"
              >
                Join Us
              </button>
            </div>
            <div className="p-6 bg-white  shadow-md">
              <h3 className="text-xl font-semibold mb-4">Partner With Us</h3>
              <p className="text-gray-600 mb-4">Collaborate with us to expand our reach and impact.</p>
              <button
                onClick={() => handleOpenModal('contact')}
                className="inline-block px-6 py-2 bg-orange-500 text-white  hover:bg-orange-600 transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Information Modals */}
      <InfoModal
        isOpen={activeModal === 'donate'}
        onClose={handleCloseModal}
        title="How to Donate"
      >
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <MessageCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">Chat with a Support Agent</h3>
              <p className="text-gray-600">
                Our support agents are available 24/7 to assist you with your donation. Click the chat icon in the bottom right corner to start a conversation.
              </p>
            </div>
          </div>
          <div className="bg-orange-50 p-4 ">
            <h4 className="font-medium text-gray-900 mb-2">What to Expect:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Immediate assistance from our dedicated support team</li>
              <li>Secure donation process</li>
              <li>Multiple payment options available</li>
              <li>Tax deduction information</li>
              <li>Regular updates on your donation's impact</li>
            </ul>
          </div>
        </div>
      </InfoModal>

      <InfoModal
        isOpen={activeModal === 'join'}
        onClose={handleCloseModal}
        title="Join Our Team"
      >
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <MessageCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">Start Your Journey With Us</h3>
              <p className="text-gray-600">
                Connect with our team through the live chat to learn about volunteer opportunities and how you can make a difference.
              </p>
            </div>
          </div>
          <div className="bg-orange-50 p-4 ">
            <h4 className="font-medium text-gray-900 mb-2">Available Positions:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Field Volunteers</li>
              <li>Project Coordinators</li>
              <li>Education Specialists</li>
              <li>Healthcare Workers</li>
              <li>Administrative Support</li>
            </ul>
          </div>
        </div>
      </InfoModal>

      <InfoModal
        isOpen={activeModal === 'contact'}
        onClose={handleCloseModal}
        title="Get in Touch"
      >
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <MessageCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">Contact Our Support Team</h3>
              <p className="text-gray-600">
                Our customer support agents are ready to assist you through live chat. Click the chat icon to start a conversation about:
              </p>
            </div>
          </div>
          <div className="bg-orange-50 p-4 ">
            <h4 className="font-medium text-gray-900 mb-2">We Can Help With:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Partnership Opportunities</li>
              <li>Project Information</li>
              <li>Donation Inquiries</li>
              <li>Volunteer Programs</li>
              <li>General Questions</li>
            </ul>
          </div>
        </div>
      </InfoModal>
    </div>
  );
};

export default Home;
