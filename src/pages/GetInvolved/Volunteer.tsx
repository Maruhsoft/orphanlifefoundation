import React from 'react';

const Volunteer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Volunteer With Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Make a Difference</h2>
          <p className="text-gray-600 mb-6">
            Volunteering with the Orphan Life Foundation is a rewarding experience that allows you to make a real difference in the lives of orphaned children. We offer various opportunities for individuals and groups to contribute their time and skills.
          </p>
          <div className="bg-orange-50 p-6 ">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Volunteer Opportunities</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Teaching and Tutoring</li>
              <li>• Healthcare Services</li>
              <li>• Construction Projects</li>
              <li>• Administrative Support</li>
              <li>• Event Organization</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Volunteers working"
            className="w-full h-96 object-cover  shadow-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6  shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Volunteering</h3>
          <p className="text-gray-600">
            Support our programs in your local community through regular volunteering opportunities.
          </p>
        </div>
        <div className="bg-white p-6  shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">International Programs</h3>
          <p className="text-gray-600">
            Join our international volunteer programs and make a difference globally.
          </p>
        </div>
        <div className="bg-white p-6  shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills-Based Volunteering</h3>
          <p className="text-gray-600">
            Contribute your professional skills to support our organization's growth.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-8 ">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Application Process</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Complete the volunteer application form</li>
              <li>Attend an orientation session</li>
              <li>Complete required background checks</li>
              <li>Begin your volunteer journey</li>
            </ol>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-orange-500 text-white font-medium  hover:bg-orange-600 mt-6"
            >
              Apply Now
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-4">
              Have questions about volunteering? Our volunteer coordinator is here to help.
            </p>
            <div className="space-y-2 text-gray-600">
              <p>Email: volunteer@orphanlife.org</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
