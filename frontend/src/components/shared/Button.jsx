import React from 'react';

const Button = ({ children, onClick, disabled = false, className = '' }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3 px-6 rounded-full font-bold text-white bg-walmart-blue hover:bg-walmart-blue-hover transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;