import React from 'react';
import { usePool } from '../../context/PoolContext';
import { HiOutlineUserGroup } from 'react-icons/hi';

const PoolingOptIn = () => {
    const poolContext = usePool();
    console.log('PoolingOptIn - Context:', poolContext);
    const { 
        requestPooling = () => console.log('requestPooling not found'), 
        isLoading = false 
    } = poolContext || {};
    const handleClick = () => {
        console.log('Button clicked!');
        console.log('requestPooling function:', requestPooling);
        console.log('isLoading:', isLoading);
        if (typeof requestPooling === 'function') {
            console.log('Calling requestPooling...');
            requestPooling();
        } else {
            console.error('requestPooling is not a function:', typeof requestPooling);
        }
    };

    return (
        <div className="border border-walmart-blue rounded-lg p-4 bg-blue-50 flex flex-col md:flex-row items-center gap-4">
            <HiOutlineUserGroup className="h-12 w-12 text-walmart-blue" />
            <div className="flex-grow text-center md:text-left">
                <h3 className="font-bold text-lg">Opt for Order Pooling & Save!</h3>
                <p className="text-sm text-gray-700">Group your order with neighbors to save on fees and reduce delivery emissions. We'll find a match for you.</p>
            </div>
            <button
                onClick={handleClick}
                disabled={isLoading}
                className="w-full md:w-auto px-6 py-2 rounded-full font-bold text-white bg-yellow-500 hover:bg-walmart-blue-hover transition-colors disabled:bg-gray-400"
            >
                {isLoading ? 'Finding Pool...' : 'Find a Pool'}
            </button>
        </div>
    );
};

export default PoolingOptIn;