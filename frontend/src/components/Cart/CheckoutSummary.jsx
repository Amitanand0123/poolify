import React from 'react';
import Button from '../shared/Button';

const CheckoutSummary = () => {
    const subtotal = 18.94;
    const shipping = 6.99;
    const estimatedTotal = (subtotal + shipping).toFixed(2);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
        <Button>Continue to checkout</Button>
        <div className="text-sm text-gray-600 text-center my-2">For the best shopping experience, <a href="#" className="underline font-bold">sign in</a></div>

        <div className="mt-4 space-y-2 border-t pt-4">
            <div className="flex justify-between">
                <span>Subtotal (1 item)</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
                <span>Shipping <span className="text-gray-500">(below $35 order minimum)</span></span>
                <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold">
                <span>Taxes</span>
                <span>Calculated at checkout</span>
            </div>
        </div>
        <div className="flex justify-between font-bold text-xl border-t mt-4 pt-4">
            <span>Estimated total</span>
            <span>${estimatedTotal}</span>
        </div>
    </div>
  );
};

export default CheckoutSummary;