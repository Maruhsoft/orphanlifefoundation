import React from 'react';

const Videos = () => {
  const videos = [
    {
      title: "Our Mission in Action",
      description: "See how we're making a difference in children's lives through our various programs and initiatives.",
      thumbnail: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "4:30"
    },
    {
      title: "Clean Water Project Update",
      description: "Watch our latest progress in providing clean water access to communities in need.",
      thumbnail: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "3:45"
    },
    {
      title: "Education Changes Lives",
      description: "Stories of transformation through our education support programs.",
      thumbnail: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "5:15"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Video Gallery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {videos.map((video, index) => (
          <div key={index} className="bg-white  shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                {video.duration}
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h2>
              <p className="text-gray-600 mb-4">{video.description}</p>
              <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
                Watch Video →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-8 ">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Video</h2>
        <div className="aspect-w-16 aspect-h-9 mb-6">
          <div className="w-full h-[400px] bg-gray-200  flex items-center justify-center">
            <p className="text-gray-600">Featured video player placeholder</p>
          </div>
        </div>
        <div className="max-w-3xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">2024 Impact Report</h3>
          <p className="text-gray-600">
            Watch our comprehensive overview of the impact we've made in the past year through our various programs and initiatives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Videos;
