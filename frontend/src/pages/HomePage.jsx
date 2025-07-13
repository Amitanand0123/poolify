import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/Home/HeroBanner';
import CategoryCard from '../components/Home/CategoryCard';

const DealLinkCard = ({ to, children }) => (
  <Link to={to} className="block h-full">
    {children}
  </Link>
);
const HomePage = () => {
  return (
    <div className="w-full px-2 sm:px-4 lg:px-8 py-4">
      {/* --- RESPONSIVE GRID --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
          {/* Left Column - Beauty Tools */}
          <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1">
            <DealLinkCard to="/deals/beauty">
              <CategoryCard 
                title="Beauty tools,"
                subtitle="big savings"
                linkText="Shop Deals"
                imageUrl="/beauty.jpg"
                bgColor="bg-gradient-to-br from-blue-300 to-blue-400"

              />
            </DealLinkCard>
          </div>

          {/* Center Large Banner */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2 lg:row-span-2">
            <HeroBanner />
          </div>

          {/* Right Column - Top */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <DealLinkCard to="/deals/outdoor-gear">
                <CategoryCard 
                title="Up to 40% off"
                subtitle="outdoor gear"
                linkText="Shop Deals"
                imageUrl="/surfboard.jpg"
                bgColor="bg-gradient-to-br from-blue-200 to-blue-300"
              />
            </DealLinkCard>
          </div>

          {/* Far Right Column - Only visible on XL screens */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <DealLinkCard to="/deals/food">
              <CategoryCard 
                title="Up to 30% off"
                subtitle="food & drinks"
                linkText="Shop Deals"
                imageUrl="/red-bull.jpg"
                bgColor="bg-gradient-to-br from-blue-200 to-blue-300"
              />
            </DealLinkCard>
          </div>

          {/* Left Column - Floor Care */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <DealLinkCard to="/deals/floor-care">
              <CategoryCard 
                title="Floor care up to"
                subtitle="35% off"
                linkText="Shop Deals"
                imageUrl="/vaccum-cleaner.jpg"
                bgColor="bg-gradient-to-br from-blue-300 to-blue-400"
              />
            </DealLinkCard>
          </div>

          {/* Right Column - Bottom */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <DealLinkCard to="/deals/bikes">
              <CategoryCard 
                title="Up to 30% off"
                subtitle="bikes & ride-ons"
                linkText="Shop Deals"
                imageUrl="/bike.jpg"
                bgColor="bg-gradient-to-br from-blue-200 to-blue-300"
              />
            </DealLinkCard>
          </div>

          {/* Bottom Row - Jewelry & Watches */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <DealLinkCard to="/deals/jewelry">
              <CategoryCard 
                title="Jewelry & watches"
                subtitle="up to 65% off"
                linkText="Shop Deals"
                imageUrl="/jewelry.jpg"
                bgColor="bg-gradient-to-br from-blue-300 to-blue-400"
              />
            </DealLinkCard>
          </div>

          {/* Bottom Row - Special Offer */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <DealLinkCard to="/deals/electronics">
              <CategoryCard 
                title="Electronics"
                subtitle="Up to 55% off"
                linkText="Shop now"
                imageUrl="/tablet.jpg"
                bgColor="bg-gradient-to-br from-yellow-200 to-yellow-300"
              />
            </DealLinkCard>
          </div>

          {/* Mobile/Tablet visible food & drinks (hidden on XL) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <DealLinkCard to="/deals/food">
              <CategoryCard 
                title="Up to 30% off"
                subtitle="food & drinks"
                linkText="Shop Deals"
                imageUrl="/red-bull.jpg"
                bgColor="bg-gradient-to-br from-blue-200 to-blue-300"
              />
            </DealLinkCard>
          </div>

          {/* Additional Categories Row */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <DealLinkCard to="/deals/home-decor">
              <CategoryCard 
                title="Up to 30% off"
                subtitle="home decor"
                linkText="Shop Deals"
                imageUrl="/pillow.jpg"
                bgColor="bg-gradient-to-br from-blue-300 to-blue-400"
              />
            </DealLinkCard>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <DealLinkCard to="/deals/kitchenware">
              <CategoryCard 
                title="Up to 40% off"
                subtitle="cooking & dining"
                linkText="Shop Deals"
                imageUrl="/kitchenware.jpg"
                bgColor="bg-gradient-to-br from-blue-200 to-blue-300"
              />
            </DealLinkCard>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <DealLinkCard to="/deals/tvs">
              <CategoryCard 
                title="TVs up to"
                subtitle="25% off"
                linkText="Shop Deals"
                imageUrl="/lgtv.jpg"
                bgColor="bg-gradient-to-br from-blue-300 to-blue-400"
              />
            </DealLinkCard>
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
  );
};

export default HomePage;