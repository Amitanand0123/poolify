import React from 'react';
import { useCart } from '../../context/CartContext';
import { Plus, Minus, Trash2 } from 'lucide-react';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { id, name, price, imageUrl, quantity } = item;

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <img src={imageUrl} alt={name} className="w-24 h-24 object-contain border rounded-md self-center sm:self-start" />
      <div className="flex-grow">
        <p className="font-semibold">{name}</p>
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          {/* Quantity Controls */}
          <div className="flex items-center border rounded-full p-1 gap-2 mb-4 sm:mb-0">
            <button onClick={() => updateQuantity(id, -1)} className="p-1 rounded-full hover:bg-gray-200"><Minus className="w-4 h-4"/></button>
            <span className="font-bold w-6 text-center">{quantity}</span>
            <button onClick={() => updateQuantity(id, 1)} className="p-1 rounded-full hover:bg-gray-200"><Plus className="w-4 h-4"/></button>
          </div>
          {/* Remove Button */}
          <button onClick={() => removeFromCart(id)} className="text-red-600 hover:text-red-800 flex items-center gap-1 text-sm">
            <Trash2 className="w-4 h-4"/> Remove
          </button>
        </div>
      </div>
      <p className="text-xl font-bold text-right sm:text-left">${(price * quantity).toFixed(2)}</p>
    </div>
  );
};

export default CartItem;