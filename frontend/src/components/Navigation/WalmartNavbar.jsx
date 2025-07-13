import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, User, Menu, ChevronDown, MapPin, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const WalmartNavbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartTotalItems, cartSubtotal } = useCart();
  const { isLoggedIn, user } = useAuth();


  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg h-40">
      {/* Top Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 h-24 pt-4">
        <div className="flex items-center gap-4 h-16 justify-between">
          {/* Left Section - Logo and Location */}
          <div className="flex items-center space-x-4 gap-4">
            {/* Walmart Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <img src="https://www.vectorlogo.zone/logos/walmart/walmart-icon.svg" className='bg-blue-600' alt="" />
              </div>
            </div>

            {/* Location Picker */}
            <div className="hidden bg-blue-800 md:flex items-center space-x-2 cursor-pointer hover:bg-blue-900 px-3 py-2 transition-colors border border-blue-900 rounded-full w-96">
              <MapPin className="w-4 h-4" />
              <div className="text-lg">
                <div className="font-semibold">Pickup or delivery?</div>
                <div className="text-blue-200 text-xs">Sacramento, 95829 • Sacramento Supe...</div>
              </div>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          {/* Center Section - Search */}
          <div className="flex-1 w-5xl mx-4 py-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search everything at Walmart online and in store"
                className="w-full px-4 py-2.5 pr-12 text-blue-900 bg-white rounded-full border-2 border-transparent focus:outline-none text-lg"
              />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-colors"
              >
                <Search className="w-4 h-4 text-gray-800" />
              </button>
            </div>
          </div>

          {/* Right Section - User Actions */}
          <div className="flex items-center space-x-4 justify-between w-[22rem]">
            {/* Reorder */}
            <div className="hidden lg:flex flex-row items-center cursor-pointer hover:underline transition-colors gap-2">
              <Heart className="w-6 h-6" />
              <div className='flex flex-col'>
                <span className="text-lg mt-1">Reorder</span>
                <span className="text-lg text-white font-bold">My Items</span>
              </div>
            </div>

            {/* Sign In */}
            <div className="hidden lg:flex flex-row items-center cursor-pointer hover:underline transition-colors gap-2">
              {
                isLoggedIn && user ? (
                  <div>
                    <User className="w-6 h-6" />
                  </div>
                ) : (
                  <div className='flex flex-row gap-2'>
                    <User className="w-6 h-6 mt-4" />
                    <div className='flex flex-col'>
                      <span className="text-lg mt-1">Sign In</span>
                      <span className="text-lg text-white font-bold">Account</span>
                    </div>
                  </div>
                )
              }
              
            </div>

            {/* Cart */}
            <div className="relative flex flex-col items-center cursor-pointer hover:underline transition-colors top-2">
              <div className="relative">
                <ShoppingCart className="w-6 h-6" onClick={() => navigate('/cart')} />
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-blue-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartTotalItems}
                </span>
              </div>
              <span className="text-lg mt-1 hidden sm:block">
                {cartSubtotal ? `$${cartSubtotal.toFixed(2)}` : '0.00'}
              </span>
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
      <div className="bg-[#F0F5FF] border-t border-blue-500 text-blue-900 justify-between h-16 pt-1">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center h-12 space-x-8">
            {/* Departments */}
            <div className="flex items-center space-x-2 cursor-pointer hover:underline transition-colors">
              <Menu className="w-4 h-4" />
              <span className="font-bold text-lg">Departments</span>
              <ChevronDown className="w-4 h-4" />
            </div>

            {/* Services */}
            <div className="flex items-center space-x-2 cursor-pointer hover:underline transition-colors">
              <span className="font-bold text-lg">Services</span>
              <ChevronDown className="w-4 h-4" />
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6 text-1.5rem justify-between gap-4">
              <a href="#" className="hover:underline transition-colors">Get it Fast</a>
              <a href="#" className="hover:underline transition-colors">New Arrivals</a>
              <a href="#" className="hover:underline transition-colors">Deals</a>
              <a href="#" className="hover:underline transition-colors">Dinner Made Easy</a>
              <a href="#" className="hover:underline transition-colors">Pharmacy Delivery</a>
              <a href="#" className="hover:underline transition-colors">Trending</a>
              <a href="#" className="hover:underline transition-colors">Back to School</a>
              <a href="#" className="hover:underline transition-colors">My Items</a>
              <a href="#" className="hover:underline transition-colors">Auto Service</a>
              <a href="#" className="hover:underline transition-colors">Only at Walmart</a>
              <a href="#" className="hover:underline transition-colors">Registry</a>
              <a href="#" className="hover:underline transition-colors">Walmart+</a>
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
              <div className="text-lg">
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
            <div className="space-y-3  bg-blue-100">
              <div className="flex items-center space-x-2 py-2">
                <Menu className="w-4 h-4" />
                <span className="font-medium">Departments</span>
              </div>
              <div className="flex items-center space-x-2 py-2">
                <span className="font-medium">Services</span>
              </div>
              <div className="space-y-2 pl-6">
                <div className="py-1"><a href="#" className="hover:underline">Get it Fast</a></div>
                <div className="py-1"><a href="#" className="hover:underline">New Arrivals</a></div>
                <div className="py-1"><a href="#" className="hover:underline">Deals</a></div>
                <div className="py-1"><a href="#" className="hover:underline">Dinner Made Easy</a></div>
                <div className="py-1"><a href="#" className="hover:underline">Pharmacy Delivery</a></div>
                <div className="py-1"><a href="#" className="hover:underline">Trending</a></div>
                <div className="py-1"><a href="#" className="hover:underline">Back to School</a></div>
                <div className="py-1"><a href="#" className="hover:underline">My Items</a></div>
                <div className="py-1"><a href="#" className="hover:underline">Auto Service</a></div>
                <div className="py-1"><a href="#" className="hover:underline">Only at Walmart</a></div>
                <div className="py-1"><a href="#" className="hover:underline">Registry</a></div>
                <div className="py-1"><a href="#" className="hover:underline">Walmart+</a></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default WalmartNavbar;