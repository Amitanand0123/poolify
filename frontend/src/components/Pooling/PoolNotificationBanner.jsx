import React from 'react';
import { Users, Sparkles } from 'lucide-react';

const PoolNotificationBanner = ({ poolData, onOpenModal }) => {
  return (
    <div className="mb-4 p-4 border-2 border-green-400 rounded-lg bg-gradient-to-r from-blue-50 to-green-50 shadow-md">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
            <Users className="w-7 h-7 text-green-700" />
          </div>
        </div>
        <div className="flex-grow text-center sm:text-left">
          <h3 className="font-bold text-lg text-gray-800 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            A Delivery Pool is available nearby!
          </h3>
          <p className="text-sm text-gray-600">
            It includes items you might be interested in. Join to save on your order.
          </p>
        </div>
        <div className="flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto px-6 py-2 rounded-full font-bold text-white bg-walmart-blue hover:bg-walmart-blue-hover transition-colors"
          >
            View Pool & Savings
          </button>
        </div>
      </div>
    </div>
  );
};

export default PoolNotificationBanner;