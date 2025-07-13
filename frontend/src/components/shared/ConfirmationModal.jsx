import React, { useState } from 'react';

const ConfirmationModal = ({ isOpen, onCancel, onConfirm, title, children }) => {
  const [isChecked, setIsChecked] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (isChecked) {
      onConfirm();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-[100] flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 border border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-gray-800">{title}</h2>
        <div className="text-sm text-gray-600 mb-6">
          {children}
        </div>
        
        <div className="flex items-start mb-6">
          <input
            id="confirm-checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="h-5 w-5 mt-0.5 text-walmart-blue rounded border-gray-300 focus:ring-walmart-blue"
          />
          <label htmlFor="confirm-checkbox" className="ml-3 text-sm font-medium text-gray-800">
            I understand and want to continue pooling.
          </label>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-6 py-2 rounded-full font-bold text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={!isChecked}
            className="px-6 py-2 rounded-full font-bold text-white bg-yellow-500 hover:bg-walmart-blue-hover transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Confirm & Find Pool
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;