import React from 'react';
import { Play } from 'lucide-react';

const VideoGallery = () => {
  const videos = [
    {
      id: 1,
      title: 'Making a Difference',
      thumbnail: 'https://plus.unsplash.com/premium_photo-1683121334505-907a00cf904c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      duration: '2:45',
    },
    {
      id: 2,
      title: 'Hope for Tomorrow',
      thumbnail: 'https://plus.unsplash.com/premium_photo-1683121341746-defea7bfc148?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      duration: '3:20',
    },
    {
      id: 3,
      title: 'Building Dreams',
      thumbnail: 'https://images.unsplash.com/photo-1539893867126-7ce0b48971ca?q=80&w=1397&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      duration: '4:15',
    },
  ];

  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            See Our Impact
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
            Watch how your support transforms lives and communities.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div key={video.id} className="relative group">
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white bg-opacity-0 p-4 transform transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-6 w-6 text-orange-500" />
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-white">{video.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{video.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
