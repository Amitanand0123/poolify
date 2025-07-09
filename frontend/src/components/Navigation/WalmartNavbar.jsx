import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  User, 
  Menu, 
  ChevronDown, 
  MapPin,
  X
} from 'lucide-react';

const WalmartNavbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg p-2">
      {/* Top Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Logo and Location */}
          <div className="flex items-center space-x-4">
            {/* Walmart Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <img src="/walmart-logo.png" alt="" />
              </div>
            </div>

            {/* Location Picker */}
            <div className="hidden md:flex items-center space-x-2 bg-blue-700 px-3 py-2 rounded-lg cursor-pointer hover:bg-blue-800 transition-colors">
              <MapPin className="w-4 h-4" />
              <div className="text-sm">
                <div className="font-medium">Pickup or delivery?</div>
                <div className="text-blue-200 text-xs">Sacramento, 95829 • Sacramento Supe...</div>
              </div>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          {/* Center Section - Search */}
          <div className="flex-1 max-w-2xl mx-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search everything at Walmart online and in store"
                className="w-full px-4 py-3 pr-12 text-gray-800 bg-white rounded-full border-2 border-transparent focus:border-yellow-400 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-yellow-400 hover:bg-yellow-500 rounded-full transition-colors"
              >
                <Search className="w-5 h-5 text-gray-800" />
              </button>
            </form>
          </div>

          {/* Right Section - User Actions */}
          <div className="flex items-center space-x-4">
            {/* Reorder */}
            <div className="hidden lg:flex flex-col items-center cursor-pointer hover:text-yellow-300 transition-colors">
              <Heart className="w-6 h-6" />
              <span className="text-xs mt-1">Reorder</span>
              <span className="text-xs text-blue-200">My Items</span>
            </div>

            {/* Sign In */}
            <div className="hidden lg:flex flex-col items-center cursor-pointer hover:text-yellow-300 transition-colors">
              <User className="w-6 h-6" />
              <span className="text-xs mt-1">Sign In</span>
              <span className="text-xs text-blue-200">Account</span>
            </div>

            {/* Cart */}
            <div 
              onClick={handleCartClick}
              className="relative flex flex-col items-center cursor-pointer hover:text-yellow-300 transition-colors"
            >
              <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                {/* Cart Badge */}
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-blue-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  1
                </span>
              </div>
              <span className="text-xs mt-1 hidden sm:block">$18.94</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-blue-700 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Navigation Links */}
      <div className="bg-blue-700 border-t border-blue-500">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center h-12 space-x-8">
            {/* Departments */}
            <div className="flex items-center space-x-2 cursor-pointer hover:text-yellow-300 transition-colors">
              <Menu className="w-4 h-4" />
              <span className="font-medium">Departments</span>
              <ChevronDown className="w-4 h-4" />
            </div>

            {/* Services */}
            <div className="flex items-center space-x-2 cursor-pointer hover:text-yellow-300 transition-colors">
              <span className="font-medium">Services</span>
              <ChevronDown className="w-4 h-4" />
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="hover:text-yellow-300 transition-colors border-r border-blue-500 pr-6">Get it Fast</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">New Arrivals</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Deals</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Dinner Made Easy</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Pharmacy Delivery</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Trending</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Swim Shop</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">My Items</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Auto Service</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Only at Walmart</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Registry</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Walmart+</a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 border-t border-blue-500">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Location */}
            <div className="flex items-center space-x-2 bg-blue-800 px-3 py-2 rounded-lg">
              <MapPin className="w-4 h-4" />
              <div className="text-sm">
                <div className="font-medium">Pickup or delivery?</div>
                <div className="text-blue-200 text-xs">Sacramento, 95829</div>
              </div>
            </div>

            {/* Mobile User Actions */}
            <div className="flex justify-around py-4 border-b border-blue-500">
              <div className="flex flex-col items-center">
                <Heart className="w-6 h-6" />
                <span className="text-xs mt-1">Reorder</span>
              </div>
              <div className="flex flex-col items-center">
                <User className="w-6 h-6" />
                <span className="text-xs mt-1">Sign In</span>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 py-2">
                <Menu className="w-4 h-4" />
                <span className="font-medium">Departments</span>
              </div>
              <div className="flex items-center space-x-2 py-2">
                <span className="font-medium">Services</span>
              </div>
              <div className="space-y-2 pl-6">
                <div className="py-1"><a href="#" className="hover:text-yellow-300">Get it Fast</a></div>
                <div className="py-1"><a href="#" className="hover:text-yellow-300">New Arrivals</a></div>
                <div className="py-1"><a href="#" className="hover:text-yellow-300">Deals</a></div>
                <div className="py-1"><a href="#" className="hover:text-yellow-300">Dinner Made Easy</a></div>
                <div className="py-1"><a href="#" className="hover:text-yellow-300">Pharmacy Delivery</a></div>
                <div className="py-1"><a href="#" className="hover:text-yellow-300">Trending</a></div>
                <div className="py-1"><a href="#" className="hover:text-yellow-300">Swim Shop</a></div>
                <div className="py-1"><a href="#" className="hover:text-yellow-300">My Items</a></div>
                <div className="py-1"><a href="#" className="hover:text-yellow-300">Auto Service</a></div>
                <div className="py-1"><a href="#" className="hover:text-yellow-300">Only at Walmart</a></div>
                <div className="py-1"><a href="#" className="hover:text-yellow-300">Registry</a></div>
                <div className="py-1"><a href="#" className="hover:text-yellow-300">Walmart+</a></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default WalmartNavbar;