import React from 'react';

const CategoryCard = ({ 
  title, 
  subtitle, 
  linkText = "Shop Deals", 
  imageUrl, 
  bgColor = "bg-gradient-to-br from-blue-300 to-blue-400",
  className = ""
}) => {
  return (
    <div className={`relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full ${bgColor} ${className}`}>
      <div className="relative p-6 h-full flex flex-row items-center justify-between min-h-[200px] gap-4">
        {/* Content - Left Side */}
        <div className="flex-1 z-10">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {title}
          </h3>
          {subtitle && (
            <p className="text-lg font-semibold text-gray-800 mb-3">
              {subtitle}
            </p>
          )}
          <button className="text-sm font-medium text-gray-700 hover:text-gray-900 underline hover:no-underline transition-colors">
            {linkText}
          </button>
        </div>

        {/* Image - Right Side */}
        {imageUrl && (
          <div className="flex-shrink-0 w-32 h-32 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;