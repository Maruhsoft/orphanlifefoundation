import React from 'react';

const Blogs = () => {
  const blogPosts = [
    {
      title: "Transforming Lives Through Education",
      date: "March 15, 2024",
      excerpt: "Discover how our education programs are creating lasting change in the lives of orphaned children...",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Education"
    },
    {
      title: "Clean Water Initiative Success Stories",
      date: "March 10, 2024",
      excerpt: "Learn about the impact of our Clean Water for Children project in rural communities...",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Projects"
    },
    {
      title: "Supporting Children During Global Crises",
      date: "March 5, 2024",
      excerpt: "How our Global Pandemic Relief Fund is helping orphaned children navigate challenging times...",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Healthcare"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-sm text-orange-500 mb-2">{post.category}</div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
              <div className="text-sm text-gray-500 mb-4">{post.date}</div>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Subscribe to Our Newsletter</h2>
        <div className="max-w-2xl">
          <p className="text-gray-600 mb-6">
            Stay updated with our latest news, success stories, and ways to get involved.
          </p>
          <form className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blogs;