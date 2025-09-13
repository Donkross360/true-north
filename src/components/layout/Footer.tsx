import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Store Locator', href: '/store-locator' },
    { name: 'Careers', href: '/careers' },
    { name: 'Warranty', href: '/warranty' }
  ];

  const customerService = [
    { name: 'Help Center', href: '/help' },
    { name: 'Shipping Info', href: '/policies/shipping' },
    { name: 'Returns', href: '/policies/returns' },
    { name: 'Order Tracking', href: '/track-order' },
    { name: 'Size Guide', href: '/size-guide' }
  ];

  const policies = [
    { name: 'Privacy Policy', href: '/policies/privacy' },
    { name: 'Terms of Service', href: '/policies/terms' },
    { name: 'Return Policy', href: '/policies/returns' },
    { name: 'Cookie Policy', href: '/policies/cookies' },
    { name: 'Security', href: '/security' }
  ];

  const categories = [
    { name: 'Phones', href: '/shop/phones' },
    { name: 'Accessories', href: '/shop/accessories' },
    { name: 'Audio', href: '/shop/audio' },
    { name: 'Power Banks', href: '/shop/power' },
    { name: 'Wearables', href: '/shop/wearables' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Get the latest updates on new arrivals, exclusive deals, and tech tips. Plus, opt-in for WhatsApp notifications.
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg sm:rounded-r-none rounded-r-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-8 py-3 rounded-r-lg sm:rounded-l-none rounded-l-lg font-medium transition-all duration-200 mt-2 sm:mt-0">
                Subscribe
              </button>
            </div>
            
            <div className="mt-4">
              <label className="inline-flex items-center text-sm text-gray-400">
                <input type="checkbox" className="mr-2 rounded" />
                Also send me WhatsApp updates and exclusive offers
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TN</span>
              </div>
              <div className="ml-3">
                <div className="text-xl font-bold">Truenorth</div>
                <div className="text-sm text-gray-400">Communication Nig Ltd</div>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6">
              Your trusted source for authentic phones and tech accessories. Based in Ikeja, Lagos, 
              we deliver quality products with reliable after-sales support across Nigeria.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <MapPin size={16} className="mr-3 text-blue-400 flex-shrink-0" />
                <span>Dapson Street, Ikeja, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone size={16} className="mr-3 text-blue-400 flex-shrink-0" />
                <span>+234 803 123 4567</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail size={16} className="mr-3 text-blue-400 flex-shrink-0" />
                <span>hello@truenorth.ng</span>
              </div>
              <div className="flex items-center text-sm">
                <MessageCircle size={16} className="mr-3 text-green-400 flex-shrink-0" />
                <span>WhatsApp: +234 803 123 4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Categories</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {customerService.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <Link
                    to={policy.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {policy.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 lg:mb-0">
              © {currentYear} Truenorth Communication Nig Ltd. All rights reserved. | CEO: Aaron Chukwuka
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/2348031234567?text=Hi, I'm interested in your products"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50"
      >
        <MessageCircle size={24} />
      </a>
    </footer>
  );
};

export default Footer;