import React from 'react';

const ServiceArea = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Service Area</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Global Reach, Local Impact</h2>
          <p className="text-gray-600 mb-6">
            The Orphan Life Foundation operates in multiple countries across Africa, Asia, and Latin America. Our programs are designed to meet the specific needs of each community while maintaining our high standards of care and support.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Current Service Areas:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>East Africa: Kenya, Uganda, Tanzania</li>
              <li>West Africa: Nigeria, Ghana</li>
              <li>South Asia: India, Bangladesh</li>
              <li>Southeast Asia: Philippines, Indonesia</li>
              <li>Latin America: Brazil, Colombia</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Children in a classroom"
            className="w-full h-96 object-cover  shadow-lg"
          />
        </div>
      </div>

      <div className="bg-gray-50 p-8  shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Impact Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">100k+</div>
            <div className="text-gray-600">Children Supported</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
            <div className="text-gray-600">Local Partners</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
