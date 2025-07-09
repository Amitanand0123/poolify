import React from "react";
import CartItem from "../components/Cart/CartItem";
import CheckoutSummary from "../components/Cart/CheckoutSummary";
import PoolingOptIn from "../components/Pooling/PoolingOptIn";
import PoolStatus from "../components/Pooling/PoolStatus";
import usePool from "../context/usePool";
import { HiOutlineShoppingBag } from 'react-icons/hi';

const CartPage = () => {
  const { isPooling } = usePool();

  return (
    <div className="container mx-auto max-w-6xl p-4">
      <h1 className="text-3xl font-bold mb-4">Cart (1 item)</h1>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Main Content Area */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <HiOutlineShoppingBag className="h-6 w-6" /> {/* UPDATED */}
              Pickup and delivery options
            </h2>
            
            {/* Conditional Rendering: Show Pooling UI or standard options */}
            {isPooling ? <PoolStatus /> : <PoolingOptIn />}

          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm mt-4">
             <CartItem />
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3">
          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;