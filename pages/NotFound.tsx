import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Globe } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div
      id="not-found-page--ts"
      className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div id="not-found-container--ts" className="max-w-md w-full text-center">
        <div id="not-found-icon--ts" className="flex justify-center mb-6">
          <div className="p-4 bg-primary-50 rounded-full">
            <Globe className="h-12 w-12 text-primary-600 animate-pulse" />
          </div>
        </div>
        
        <h1
          id="not-found-code--ts"
          className="text-9xl font-extrabold text-primary-600 font-serif opacity-20"
        >
          404
        </h1>
        
        <div id="not-found-hero--ts" className="relative -mt-16">
          <h2
            id="not-found-title--ts"
            className="text-3xl font-bold text-slate-900 font-serif mb-4"
          >
            Page Not Found
          </h2>
          <p id="not-found-message--ts" className="text-gray-600 mb-8 leading-relaxed">
            The headline you're looking for might have been moved, deleted, or never existed. Let's get you back to the latest news.
          </p>
          
          <div id="not-found-actions--ts" className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              id="not-found-home-link--ts"
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-all shadow-sm"
            >
              <Home className="mr-2 h-5 w-5" />
              Return Home
            </Link>
            
            <Link
              id="not-found-back-link--ts"
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all shadow-sm"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Link>
          </div>
        </div>

        <div
          id="not-found-search--ts"
          className="mt-12 pt-8 border-t border-gray-100"
        >
          <p className="text-sm text-gray-500 mb-4">Try searching for a topic:</p>
          <div className="relative max-w-xs mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              id="not-found-search-input--ts"
              type="text"
              readOnly
              placeholder="Search news..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-primary-500 sm:text-sm cursor-not-allowed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
