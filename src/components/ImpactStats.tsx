import React from 'react';
import { Users, Heart, Globe, Home } from 'lucide-react';

const ImpactStats = () => {
  const stats = [
    {
      id: 1,
      stat: '734',
      description: 'Children become orphans daily',
      icon: Users,
    },
    {
      id: 2,
      stat: '15K+',
      description: 'Children supported',
      icon: Heart,
    },
    {
      id: 3,
      stat: '50+',
      description: 'Countries reached',
      icon: Globe,
    },
    {
      id: 4,
      stat: '100+',
      description: 'Orphanages supported',
      icon: Home,
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Impact in Numbers
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Every number represents a life changed, a future brightened, and hope restored.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.id}
              className="relative bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute top-0 right-0 -mt-4 mr-4 w-12 h-12 bg-orange-100 flex items-center justify-center">
                <item.icon className="h-6 w-6 text-orange-500" />
              </div>
              <dt>
                <p className="mt-4 text-4xl font-extrabold text-orange-500">{item.stat}</p>
                <p className="mt-2 text-lg leading-6 font-medium text-gray-900">
                  {item.description}
                </p>
              </dt>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactStats;
