import React from 'react';

const Board = () => {
  const boardMembers = [
    {
      name: "Dr. Sarah Johnson",
      title: "Board Chair",
      bio: "Dr. Johnson has over 20 years of experience in international development and child welfare. She has led numerous initiatives focused on improving education access in developing countries.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Michael Chen",
      title: "Vice Chair",
      bio: "With a background in finance and nonprofit management, Michael brings valuable expertise in sustainable program development and organizational growth.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Dr. Lisa Williams",
      title: "Secretary",
      bio: "Dr. Williams is a pediatrician with extensive experience in global health initiatives. She has worked with various international organizations to improve children's healthcare access.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Board Members</h1>
      
      <div className="mb-12">
        <p className="text-gray-600 max-w-3xl">
          Our board members bring diverse expertise and passionate commitment to the Orphan Life Foundation's mission. They provide strategic guidance and oversight to ensure we achieve our goals effectively and ethically.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {boardMembers.map((member) => (
          <div key={member.name} className="bg-white  shadow-md overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <div className="text-orange-500 font-medium mb-4">{member.title}</div>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50  p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Board Responsibilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Strategic Direction</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Setting organizational goals and objectives</li>
              <li>Monitoring program effectiveness</li>
              <li>Ensuring financial sustainability</li>
              <li>Developing strategic partnerships</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Oversight</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Financial accountability</li>
              <li>Program evaluation</li>
              <li>Compliance with regulations</li>
              <li>Risk management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
