import React from 'react';

const Education = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Orphan Education Programs</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Empowering Through Education</h2>
          <p className="text-gray-600 mb-6">
            Our education programs provide orphaned children with access to quality education, from primary school through university. We believe education is the key to breaking the cycle of poverty and creating opportunities for a better future.
          </p>
          <div className="bg-orange-50 p-6 ">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Program Impact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 5,000+ children enrolled in school</li>
              <li>• 500+ university scholarships awarded</li>
              <li>• 95% graduation rate</li>
              <li>• 200+ partner schools</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Children studying"
            className="w-full h-96 object-cover  shadow-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6  shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Primary Education</h3>
          <p className="text-gray-600">
            We ensure every child has access to quality primary education, including school fees, uniforms, and supplies.
          </p>
        </div>
        <div className="bg-white p-6  shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Secondary Education</h3>
          <p className="text-gray-600">
            Support for secondary education, including vocational training options for practical skills development.
          </p>
        </div>
        <div className="bg-white p-6  shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Higher Education</h3>
          <p className="text-gray-600">
            University scholarships and support for talented students to pursue higher education.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-8 ">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Support Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Sponsor a Child's Education</h3>
            <p className="text-gray-600 mb-4">
              Your monthly contribution can provide a child with education, supplies, and support.
            </p>
            <a
              href="https://www.paypal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-orange-500 text-white font-medium  hover:bg-orange-600"
            >
              Sponsor Now
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Volunteer as a Tutor</h3>
            <p className="text-gray-600 mb-4">
              Share your knowledge and skills by tutoring children in our education programs.
            </p>
            <a
              href="/get-involved/volunteer"
              className="inline-block px-6 py-3 bg-orange-500 text-white font-medium  hover:bg-orange-600"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
