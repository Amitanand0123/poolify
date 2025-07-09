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
      <div className="relative p-6 h-full flex flex-col justify-between min-h-[200px]">
        {/* Content */}
        <div className="z-10 relative">
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

        {/* Image */}
        {imageUrl && (
          <div className="absolute right-2 bottom-2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
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