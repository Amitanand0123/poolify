import React from 'react';
import usePool from '../../context/usePool';
import CountdownTimer from './CountdownTimer';
import PoolingMap from './PoolingMap';

const PoolStatus = () => {
    const { poolDetails, cancelPooling } = usePool();

    if (!poolDetails) return null;

    const { members, itemTypes, eta, expiresAt, isConfirmed } = poolDetails;

    return (
        <div className="border-2 border-green-500 rounded-lg p-4 bg-green-50">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-lg text-green-800">You're in a delivery pool!</h3>
                    <p className="text-sm text-green-700">Your order is grouped to save time and emissions.</p>
                </div>
                {!isConfirmed && (
                    <button onClick={cancelPooling} className="text-sm text-gray-500 hover:text-red-600 hover:underline">
                        Leave Pool
                    </button>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {/* Left Side: Details */}
                <div className="space-y-4">
                    <div>
                        <h4 className="font-bold text-sm">Pool closes in:</h4>
                        <CountdownTimer expiryTimestamp={expiresAt} isConfirmed={isConfirmed} />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm">Members ({members.length})</h4>
                        <p className="text-sm">{members.map(m => m.name).join(', ')}</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-sm">Item Categories</h4>
                        <p className="text-sm">{itemTypes.join(', ')}</p>
                    </div>
                     <div>
                        <h4 className="font-bold text-sm">Estimated Delivery</h4>
                        <p className="text-sm">{eta}</p>
                    </div>
                </div>

                {/* Right Side: Map */}
                <div className="w-full h-48 rounded-lg overflow-hidden border">
                    <PoolingMap />
                </div>
            </div>
             {isConfirmed && (
                <div className="mt-4 p-2 bg-green-200 text-green-900 font-bold text-center rounded-md">
                    Pool Confirmed! Your order is locked and will be delivered soon.
                </div>
            )}
        </div>
    );
};

export default PoolStatus;