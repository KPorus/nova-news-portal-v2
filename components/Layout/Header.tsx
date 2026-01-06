import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, Globe } from "lucide-react";
import { useNews } from "../../context/NewsContext";
import { Category } from "../../types";

const CATEGORIES: Category[] = [
  "All",
  "National",
  "International",
  "Sports",
  "Technology",
  "Business",
  "Entertainment",
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { state, dispatch } = useNews();
  const navigate = useNavigate();

  const handleCategoryClick = (category: Category) => {
    dispatch({ type: "SET_CATEGORY", payload: category });
    setIsMenuOpen(false);
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_SEARCH", payload: e.target.value });
    if (window.location.hash !== "#/") {
      navigate("/");
    }
  };

  return (
    <header id="header-section--ts" className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="desktop-header--ts" className="flex justify-between items-center h-16">
          <div
          id="logo-section--ts"
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => handleCategoryClick("All")}
          >
            <Globe className="h-8 w-8 text-primary-600 mr-2" />
            <h1 className="text-2xl font-bold font-serif tracking-tight text-slate-900">
              Nova<span className="text-primary-600">News</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav--ts" className="hidden md:flex space-x-6">
            {CATEGORIES.slice(0, 5).map((cat) => (
              <button
              id="desktop-category-btn--ts"
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  state.selectedCategory === cat
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : "text-gray-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div id="desktop-serach--ts" className="hidden md:flex items-center space-x-4">
            <div id="desktop-search-bar--ts"
              className={`relative transition-all duration-300 ${
                isSearchOpen ? "w-64" : "w-8"
              }`}
            >
              <div
                className="absolute inset-y-0 left-0 pl-0 flex items-center cursor-pointer"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="h-5 w-5 text-gray-500 hover:text-primary-600" />
              </div>
              <input
                type="text"
                className={`w-full pl-8 pr-4 py-1 text-sm border-b-2 focus:outline-none bg-transparent ${
                  isSearchOpen
                    ? "border-primary-600 opacity-100"
                    : "border-transparent opacity-0 pointer-events-none"
                }`}
                placeholder="Search news..."
                value={state.searchQuery}
                onChange={handleSearch}
              />
            </div>
            <button id="desktop-subscribe-btn--ts" className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-700 transition-colors">
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div id="mobile-menu-btn--ts" className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-slate-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div id="mobile-header--ts" className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div id="mobile-search--ts" className="px-3 py-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-100 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                onChange={handleSearch}
                value={state.searchQuery}
              />
            </div>
            {CATEGORIES.map((cat) => (
              <button
              id="mobile-category-btn--ts"
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  state.selectedCategory === cat
                    ? "bg-primary-50 text-primary-700"
                    : "text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
