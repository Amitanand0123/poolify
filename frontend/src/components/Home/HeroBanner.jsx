import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

const HeroBanner = ({ onCartClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "DEALS",
      subtitle: "JULY 8-13 ONLY!",
      description: "Don't miss up to 30% off!",
      buttonText: "Shop Deals",
      bgColor: "bg-gradient-to-r from-blue-500 to-blue-600",
      image: "/hero-electronics.jpg"
    },
    {
      id: 2,
      title: "SUMMER SAVINGS",
      subtitle: "HOT DEALS!",
      description: "Up to 50% off summer essentials",
      buttonText: "Shop Now",
      bgColor: "bg-gradient-to-r from-orange-500 to-red-500",
      image: "/hero-summer.jpg"
    },
    {
      id: 3,
      title: "BACK TO SCHOOL",
      subtitle: "READY TO LEARN!",
      description: "Everything you need for the new school year",
      buttonText: "Shop School",
      bgColor: "bg-gradient-to-r from-green-500 to-teal-500",
      image: "/hero-school.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg h-full min-h-[300px] md:min-h-[400px]">
      {/* Slide Content */}
      <div className={`${currentSlideData.bgColor} h-full flex items-center justify-center text-white relative`}>
        {/* Background Image */}
        {currentSlideData.image && (
          <div className="absolute inset-0 opacity-20">
            <img 
              src={currentSlideData.image} 
              alt={currentSlideData.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <div className="bg-white bg-opacity-90 text-gray-800 rounded-lg p-4 mb-4 inline-block">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {currentSlideData.title}
            </h2>
            <p className="text-lg md:text-xl font-semibold">
              {currentSlideData.subtitle}
            </p>
          </div>
          
          <p className="text-xl md:text-2xl font-semibold mb-6 bg-gray-800 bg-opacity-50 rounded-lg p-3 inline-block">
            {currentSlideData.description}
          </p>
          
          <div className="flex gap-4 justify-center">
            <button 
              className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              {currentSlideData.buttonText}
            </button>
            
            <button 
              onClick={onCartClick}
              className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors shadow-lg flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full shadow-md transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full shadow-md transition-all"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>

        {/* Pause Button */}
        <button
          className="absolute top-4 right-4 p-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full shadow-md transition-all"
          aria-label="Pause slideshow"
        >
          <div className="w-4 h-4 bg-gray-700 rounded-sm"></div>
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;