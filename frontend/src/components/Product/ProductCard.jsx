import React from 'react';
import { useCart } from '../../context/CartContext';
import { Plus, Minus } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart, updateQuantity, cartItems } = useCart();
  const { name, price, discount, imageUrl } = product;
  
  const discountedPrice = price - (price * (discount / 100));
  
  const cartItem = cartItems.find(item => item.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  const handleIncrement = () => {
    if (quantityInCart === 0) {
      addToCart(product);
    } else {
      updateQuantity(product.id, 1);
    }
  };

  const handleDecrement = () => {
    if (quantityInCart > 0) {
      updateQuantity(product.id, -1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      <div>
        {discount > 0 && (
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full mb-2 inline-block">
            {discount}% OFF
          </span>
        )}
        <img src={imageUrl} alt={name} className="w-full h-32 sm:h-40 object-contain mb-4" />
        <p className="text-sm font-semibold text-gray-800 line-clamp-2 h-10">{name}</p>
      </div>
      <div>
        <div className="my-2">
          {discount > 0 ? (
            <div>
              <p className="text-xl font-bold text-red-600">${discountedPrice.toFixed(2)}</p>
              <p className="text-sm text-gray-500 line-through">${price.toFixed(2)}</p>
            </div>
          ) : (
            <p className="text-xl font-bold text-gray-800">${price.toFixed(2)}</p>
          )}
        </div>
        
        {/* Conditional rendering based on whether item is in cart */}
        {quantityInCart === 0 ? (
          <button
            onClick={handleIncrement}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-full font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add
          </button>
        ) : (
          <div className="flex items-center justify-between bg-blue-600 rounded-full py-2 px-4">
            <button
              onClick={handleDecrement}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 hover:bg-gray-100 transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-white font-bold text-lg">
              {quantityInCart}
            </span>
            <button
              onClick={handleIncrement}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 hover:bg-gray-100 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;