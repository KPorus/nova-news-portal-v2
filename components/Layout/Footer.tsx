import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer
      id="footer--ts"
      className="bg-slate-900 text-gray-300 mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div id="footer-about--ts" className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4 text-white">
              <Globe className="h-6 w-6 mr-2" />
              <span className="text-xl font-bold font-serif">NovaNews</span>
            </div>
            <p className="text-sm text-gray-400">
              Delivering the latest and most trusted news from around the globe. Stay informed, stay ahead.
            </p>
          </div>

          <div id="footer-categories--ts">
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-500 transition-colors">National</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">International</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Sports</a></li>
            </ul>
          </div>

          <div id="footer-company--ts">
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div id="footer-followus--ts">
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-500 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
            <div className="mt-6">
              <p className="text-xs text-gray-500">&copy; 2026 Nova News. All rights reserved.</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
