import React from "react";
import CartItem from "../components/Cart/CartItem";
import CheckoutSummary from "../components/Cart/CheckoutSummary";
import PoolingOptIn from "../components/Pooling/PoolingOptIn";
import PoolStatus from "../components/Pooling/PoolStatus";
import { usePool } from "../context/PoolContext";
import { useCart } from "../context/CartContext";
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { isPooling } = usePool();
  const { cartItems, cartTotalItems } = useCart();

  return (
    <div className="container mx-auto max-w-6xl p-4">
      <h1 className="text-3xl font-bold mb-4">Cart ({cartTotalItems} item{cartTotalItems !== 1 && 's'})</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center bg-white p-10 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold">Your cart is empty!</h2>
            <p className="text-gray-600 mt-2">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/" className="mt-6 inline-block px-8 py-3 rounded-full font-bold text-white bg-walmart-blue hover:bg-walmart-blue-hover">
                Continue Shopping
            </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-2/3 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <HiOutlineShoppingBag className="h-6 w-6" />
                Pickup and delivery options
              </h2>
              {isPooling ? <PoolStatus /> : <PoolingOptIn />}
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm space-y-6">
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <CheckoutSummary />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;