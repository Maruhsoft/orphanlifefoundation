import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const navigation = {
    main: [
      { name: 'About', href: '#' },
      { name: 'Projects', href: '#' },
      { name: 'Programs', href: '#' },
      { name: 'Get Involved', href: '#' },
      { name: 'Media', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: Facebook,
      },
      {
        name: 'Twitter',
        href: '#',
        icon: Twitter,
      },
      {
        name: 'Instagram',
        href: '#',
        icon: Instagram,
      },
      {
        name: 'YouTube',
        href: '#',
        icon: Youtube,
      },
    ],
  };

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-orange-500" />
              <span className="text-white text-xl font-bold">Orphan Life Foundation</span>
            </div>
            <p className="text-gray-400 text-base">
              Making a difference in the lives of orphaned children around the world.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-orange-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Quick Links
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-300 hover:text-orange-500"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Contact Us
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <p className="text-base text-gray-300">
                      8 The Green
                      <br />
                      Suite # 7165
                      <br />
                      Dover, DE 1990107950
                      <br />
                      Charity Number: 81-4314076
                    </p>
                  </li>
                  <li>
                    <a
                      href="tel:+13607049400"
                      className="text-base text-gray-300 hover:text-orange-500"
                    >
                      +1-360-704-9400
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@orphanlifefoundation.com"
                      className="text-base text-gray-300 hover:text-orange-500"
                    >
                      info@orphanlifefoundation.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Orphan Life Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
