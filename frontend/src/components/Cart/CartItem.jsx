import React from 'react';

const CartItem = () => {
  return (
    <div>
        <div className="flex gap-4">
            <img src="/bird-seed.jpg" alt="Bird Seed" className="w-24 h-24 object-contain border rounded-md" />
            <div className="flex-grow">
                <p className="text-sm text-gray-600">Sold and shipped by <span className="font-bold">Walmart</span></p>
                <p className="font-semibold mt-1">Pennington Classic Wild Bird Feed and Seed, 40 lb. Bag, Dry, 1 Pack</p>
                <p className="text-sm mt-1">Size: 40 lbs</p>
                <div className="mt-4 flex justify-between items-center">
                    <div className="flex gap-2">
                        <button className="text-walmart-blue font-bold hover:underline">Remove</button>
                        <span className="text-gray-300">|</span>
                        <button className="text-walmart-blue font-bold hover:underline">Save for later</button>
                    </div>
                </div>
            </div>
            <p className="text-xl font-bold">$18.94</p>
        </div>
    </div>
  );
};

export default CartItem;