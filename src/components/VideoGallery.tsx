import React from 'react';
import { Play } from 'lucide-react';

const VideoGallery = () => {
  const videos = [
    {
      id: 1,
      title: 'Making a Difference',
      thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '2:45',
    },
    {
      id: 2,
      title: 'Hope for Tomorrow',
      thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '3:20',
    },
    {
      id: 3,
      title: 'Building Dreams',
      thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
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
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white bg-opacity-90 rounded-full p-4 transform transition-transform duration-300 group-hover:scale-110">
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