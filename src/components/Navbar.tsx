import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', path: '/' },
    {
      title: 'About',
      path: '/about',
      submenu: [
        { title: 'Our Mission and Story', path: '/about/mission' },
        { title: 'What We Do', path: '/about/what-we-do' },
        { title: 'Our Service Area', path: '/about/service-area' },
        { title: 'Financial Information', path: '/about/financial' },
        { title: 'Board Members', path: '/about/board' },
      ],
    },
    {
      title: 'Projects',
      path: '/projects',
      submenu: [
        { title: 'Clean Water for Children (CWC)', path: '/projects/cwc' },
        { title: 'Desk for Children Project (DCP)', path: '/projects/dcp' },
        { title: 'Roof for Rookies Project (2RP)', path: '/projects/2rp' },
      ],
    },
    {
      title: 'Programs',
      path: '/programs',
      submenu: [
        { title: 'Orphan Education Programs', path: '/programs/education' },
        { title: 'Orphan Lifestyle Programs', path: '/programs/lifestyle' },
        { title: 'Orphan Health Programs', path: '/programs/health' },
      ],
    },
    {
      title: 'Get Involved',
      path: '/get-involved',
      submenu: [
        { title: 'Support', path: '/get-involved/support' },
        { title: 'Fundraising', path: '/get-involved/fundraising' },
        { title: 'Giving Tuesday', path: '/get-involved/giving-tuesday' },
        { title: 'Volunteer', path: '/get-involved/volunteer' },
        { title: 'Global Pandemic Relief Fund', path: '/get-involved/relief-fund' },
      ],
    },
    {
      title: 'Media',
      path: '/media',
      submenu: [
        { title: 'Blogs', path: '/media/blogs' },
        { title: 'Videos', path: '/media/videos' },
      ],
    },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">Orphan Life Foundation</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  to={item.path}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500"
                >
                  {item.title}
                </Link>
                {item.submenu && (
                  <div className="absolute z-10 hidden group-hover:block w-48 bg-white shadow-lg">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="https://www.paypal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600"
            >
              Donate Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <div key={item.title}>
                <Link
                  to={item.path}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
                {item.submenu && (
                  <div className="pl-4">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.path}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-orange-500"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="https://www.paypal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 mt-4 text-center text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;