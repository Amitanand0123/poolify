import React from 'react';
import { X, ShoppingCart, Tag } from 'lucide-react';

const JoinPoolModal = ({ isOpen, poolData, onClose, onConfirm }) => {
  if (!isOpen || !poolData) return null;

  const totalNormalPrice = poolData.items.reduce((sum, item) => sum + item.price, 0);
  const totalPoolPrice = poolData.items.reduce((sum, item) => sum + item.poolPrice, 0);
  const totalSavings = totalNormalPrice - totalPoolPrice;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl border-t-8 border-walmart-yellow">
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Join Delivery Pool & Save!</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Item List */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          <p className="text-sm text-gray-600 mb-4">Add these items to your cart by joining the pool and get instant savings.</p>
          <div className="space-y-4">
            {poolData.items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-md">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-contain rounded-md flex-shrink-0" />
                <div className="flex-grow">
                  <p className="font-semibold text-gray-800">{item.name}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-lg text-green-600">${item.poolPrice.toFixed(2)}</p>
                  <p className="text-sm text-gray-500 line-through">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t rounded-b-lg">
           <div className="flex justify-between items-center mb-4">
             <span className="font-bold text-lg text-green-700">Your Total Savings:</span>
             <span className="text-2xl font-extrabold text-green-700">${totalSavings.toFixed(2)}</span>
           </div>
          <button
            onClick={() => onConfirm(poolData.items)}
            className="w-full py-3 px-6 rounded-full font-bold text-white bg-green-600 hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            Join Pool & Add {poolData.items.length} Items to Cart (${totalPoolPrice.toFixed(2)})
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinPoolModal;