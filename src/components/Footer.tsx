import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              123 Charity Street<br />
              New York, NY 10001<br />
              Email: info@orphanlife.org<br />
              Phone: (555) 123-4567
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white">Projects</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white">Programs</Link></li>
              <li><Link to="/get-involved" className="text-gray-400 hover:text-white">Get Involved</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/contact/faqs" className="text-gray-400 hover:text-white">FAQs</Link></li>
              <li><a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Donate Now</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Youtube /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Orphan Life Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;