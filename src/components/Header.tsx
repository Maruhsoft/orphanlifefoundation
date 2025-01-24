import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import DonateButton from './DonateButton';

interface NavItem {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navigation: NavItem[] = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '/about',
      submenu: [
        { name: 'Our Mission and Story', href: '/about/mission' },
        { name: 'What We Do', href: '/about/what-we-do' },
        { name: 'Our Service Area', href: '/about/service-area' },
        { name: 'Financial Information', href: '/about/financials' },
        { name: 'Board Members', href: '/about/board' },
      ],
    },
    {
      name: 'Projects',
      href: '/projects',
      submenu: [
        { name: 'Clean Water for Children (CWC)', href: '/projects/cwc' },
        { name: 'Desk for Children Project (DCP)', href: '/projects/dcp' },
        { name: 'Roof for Rookies Project (2RP)', href: '/projects/2rp' },
      ],
    },
    {
      name: 'Programs',
      href: '/programs',
      submenu: [
        { name: 'Orphan Education Programs', href: '/programs/education' },
        { name: 'Orphan Lifestyle Programs', href: '/programs/lifestyle' },
        { name: 'Orphan Health Programs', href: '/programs/health' },
      ],
    },
    {
      name: 'Get Involved',
      href: '/get-involved',
      submenu: [
        { name: 'Support', href: '/get-involved/support' },
        { name: 'Fundraising', href: '/get-involved/fundraising' },
        { name: 'Giving Tuesday', href: '/get-involved/giving-tuesday' },
        { name: 'Volunteer', href: '/get-involved/volunteer' },
        { name: 'Global Pandemic Relief Fund', href: '/get-involved/relief-fund' },
      ],
    },
    {
      name: 'Media',
      href: '/media',
      submenu: [
        { name: 'Blogs', href: '/media/blogs' },
        { name: 'Videos', href: '/media/videos' },
      ],
    },
    {
      name: 'Contact',
      href: '/contact',
      submenu: [
        { name: 'Contact Page', href: '/contact' },
        { name: 'FAQs', href: '/contact/faqs' },
      ],
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavigation = (href: string, isMainItem = false) => {
    if (isMainItem) {
      const item = navigation.find(item => item.href === href);
      if (item?.submenu) {
        setActiveDropdown(activeDropdown === item.name ? null : item.name);
      } else {
        navigate(href);
        setActiveDropdown(null);
      }
    } else {
      navigate(href);
      setActiveDropdown(null);
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, href: string, isMainItem = false) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavigation(href, isMainItem);
    }
  };

  return (
    <header className="bg-black bg-opacity-50 shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" ref={dropdownRef}>
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Heart className="h-8 w-8 text-orange-500" aria-hidden="true" />
              <span className="ml-2 text-xl font-bold">Orphan Life Foundation</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown(item.name)} // Show dropdown on hover
                  onMouseLeave={() => setActiveDropdown(null)} // Hide dropdown when pointer leaves
                  onClick={() => handleNavigation(item.href, true)}
                  onKeyDown={(e) => handleKeyDown(e, item.href, true)}
                  className={`px-3 py-2 text-sm font-medium text-white hover:text-orange-500 bg-opacity-50 hover:bg-opacity-70 flex items-center ${
                    location.pathname === item.href ? 'text-orange-500' : ''
                  }`}
                  aria-expanded={activeDropdown === item.name}
                  aria-haspopup={!!item.submenu}
                  >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                      />
                  )}
                </button>
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-48 shadow-lg bg-opacity-50 bg-black ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu">
                      {item.submenu.map((subitem) => (
                        <button
                          key={subitem.name}
                          onClick={() => handleNavigation(subitem.href)}
                          onKeyDown={(e) => handleKeyDown(e, subitem.href)}
                          className={`block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-orange-500 ${
                            location.pathname === subitem.href ? 'bg-gray-700 text-orange-500' : ''
                          }`}
                          role="menuitem"
                        >
                          {subitem.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <DonateButton />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleNavigation(item.href, true)}
                    className={`w-full text-left px-3 py-2 text-base font-medium ${
                      location.pathname === item.href
                        ? 'text-orange-500 bg-gray-50'
                        : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </button>
                  {item.submenu && (
                    <div className="pl-4">
                      {item.submenu.map((subitem) => (
                        <button
                          key={subitem.name}
                          onClick={() => handleNavigation(subitem.href)}
                          className={`w-full text-left px-3 py-2 text-sm font-medium ${
                            location.pathname === subitem.href
                              ? 'text-orange-500 bg-gray-50'
                              : 'text-gray-500 hover:text-orange-500 hover:bg-gray-50'
                          }`}
                        >
                          {subitem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <DonateButton />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
