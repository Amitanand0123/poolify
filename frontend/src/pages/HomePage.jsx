import React from 'react';
import WalmartNavbar from '../components/Navigation/WalmartNavbar';
import HeroBanner from '../components/Home/HeroBanner';
import CategoryCard from '../components/Home/CategoryCard';

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-4">
        {/* Main Grid Layout - Walmart Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          
          {/* Left Column - Beauty Tools */}
          <div className="lg:col-span-1">
            <CategoryCard 
              title="Beauty tools,"
              subtitle="big savings"
              linkText="Shop Deals"
              imageUrl="/beauty.jpg"
              bgColor="bg-gradient-to-br from-blue-300 to-blue-400"

            />
          </div>

          {/* Center Large Banner */}
          <div className="lg:col-span-2 xl:col-span-2 lg:row-span-2">
            <HeroBanner />
          </div>

          {/* Right Column - Top */}
          <div className="lg:col-span-1 xl:col-span-1">
            <CategoryCard 
              title="Up to 40% off"
              subtitle="outdoor gear"
              linkText="Shop Deals"
              imageUrl="/outdoor-gear.jpg"
              bgColor="bg-gradient-to-br from-blue-200 to-blue-300"
            />
          </div>

          {/* Far Right Column - Only visible on XL screens */}
          <div className="hidden xl:block xl:col-span-1 xl:row-span-2">
            <CategoryCard 
              title="Up to 30% off"
              subtitle="food & drinks"
              linkText="Shop Deals"
              imageUrl="/red-bull.jpg"
              bgColor="bg-gradient-to-br from-blue-200 to-blue-300"
            />
          </div>

          {/* Left Column - Floor Care */}
          <div className="lg:col-span-1 lg:row-span-2">
            <CategoryCard 
              title="Floor care up to"
              subtitle="35% off"
              linkText="Shop Deals"
              imageUrl="/vaccum-cleaner.jpg"
              bgColor="bg-gradient-to-br from-blue-300 to-blue-400"
            />
          </div>

          {/* Right Column - Bottom */}
          <div className="lg:col-span-1 xl:col-span-1">
            <CategoryCard 
              title="Up to 30% off"
              subtitle="bikes & ride-ons"
              linkText="Shop Deals"
              imageUrl="/bikes.jpg"
              bgColor="bg-gradient-to-br from-blue-200 to-blue-300"
            />
          </div>

          {/* Bottom Row - Jewelry & Watches */}
          <div className="lg:col-span-2 xl:col-span-2">
            <CategoryCard 
              title="Jewelry & watches"
              subtitle="up to 65% off"
              linkText="Shop Deals"
              imageUrl="/jewelry.jpg"
              bgColor="bg-gradient-to-br from-blue-300 to-blue-400"
            />
          </div>

          {/* Bottom Row - Special Offer */}
          <div className="lg:col-span-1 xl:col-span-1">
            <CategoryCard 
              title="Up to 55% off"
              linkText="Shop now"
              imageUrl="/electronics.jpg"
              bgColor="bg-gradient-to-br from-yellow-200 to-yellow-300"
            />
          </div>

          {/* Mobile/Tablet visible food & drinks (hidden on XL) */}
          <div className="xl:hidden lg:col-span-1">
            <CategoryCard 
              title="Up to 30% off"
              subtitle="food & drinks"
              linkText="Shop Deals"
              imageUrl="/red-bull.jpg"
              bgColor="bg-gradient-to-br from-blue-200 to-blue-300"
            />
          </div>

          {/* Additional Categories Row */}
          <div className="lg:col-span-2 xl:col-span-2">
            <CategoryCard 
              title="Up to 30% off"
              subtitle="home decor"
              linkText="Shop Deals"
              imageUrl="/pillow.jpg"
              bgColor="bg-gradient-to-br from-blue-300 to-blue-400"
            />
          </div>

          <div className="lg:col-span-1 xl:col-span-1">
            <CategoryCard 
              title="Up to 40% off"
              subtitle="cooking & dining"
              linkText="Shop Deals"
              imageUrl="/kitchenware.jpg"
              bgColor="bg-gradient-to-br from-blue-200 to-blue-300"
            />
          </div>

          <div className="lg:col-span-1 xl:col-span-1">
            <CategoryCard 
              title="TVs up to"
              subtitle="25% off"
              linkText="Shop Deals"
              imageUrl="/lgtv.jpg"
              bgColor="bg-gradient-to-br from-blue-300 to-blue-400"
            />
          </div>

        </div>

        {/* Additional Content Sections */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Free shipping, no minimum</h3>
            <p className="text-gray-600 text-sm">Get free shipping on orders of $35 or more</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Save even more</h3>
            <p className="text-gray-600 text-sm">Get exclusive deals with Walmart+</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Easy returns</h3>
            <p className="text-gray-600 text-sm">Return items within 90 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;