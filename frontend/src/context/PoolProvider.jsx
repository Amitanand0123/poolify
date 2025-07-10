import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { PoolContext } from "./PoolContext";
import { findOrCreatePool } from "../services/api";
import ConfirmationModal from "../components/shared/ConfirmationModal"

// --- MOCK DATA (Single Source of Truth) ---
const MOCK_USER_DATA = {
  user_id: "user_alice",
  cart_id: "cart_abc123",
  address: "123 Main Street, Anytown, USA",
  location: { lat: 34.0522, lon: -118.2437 },
  items: [
    { id: "item_1", category: "Pet Supplies" },
    { id: "item_2", category: "Groceries" },
  ],
  delivery_window: {
    start: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
    end: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(),
  }
};

const MOCK_POOL_DETAILS = {
  id: "pool_123xyz",
  members: [
    { id: "user_alice", name: "You" },
    { id: "user_bob", name: "Bob" },
  ],
  itemTypes: ["Groceries", "Pet Supplies"],
  eta: "Today, 8:00 PM - 9:00 PM",
  expiresAt: new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString(),
  isConfirmed: false,
};

const PoolProvider = ({ children }) => {
  const [isPooling, setIsPooling] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [poolDetails, setPoolDetails] = useState(null);
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);

  useEffect(() => {
    const socket = io("http://localhost:3001");
    
    socket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    socket.on("poolUpdated", (updatedPool) => {
      console.log("Pool updated:", updatedPool);
      setPoolDetails(updatedPool);
    });

    socket.on("poolConfirmed", (confirmedPool) => {
      console.log("Pool confirmed:", confirmedPool);
      setPoolDetails((prev) => ({ ...prev, ...confirmedPool, isConfirmed: true }));
    });

    return () => socket.disconnect();
  }, []);

  // Step 1: User requests to pool, which opens the modal
  const requestPooling = () => {
    setConfirmationVisible(true);
  };

  // Step 2: User confirms in the modal, this function is called
  const confirmAndJoinPool = async () => {
    setConfirmationVisible(false); // Close modal
    setIsLoading(true);

    // --- CONSTRUCT PAYLOAD BASED ON SPARK SCHEMA ---
    const payload = {
      user_id: MOCK_USER_DATA.user_id,
      cart_id: MOCK_USER_DATA.cart_id,
      lat: MOCK_USER_DATA.location.lat,
      lon: MOCK_USER_DATA.location.lon,
      item_category: MOCK_USER_DATA.items[0]?.category || 'General',
      item_ids: MOCK_USER_DATA.items.map(item => item.id),
      cart_time: new Date().toISOString(),
      delivery_window: MOCK_USER_DATA.delivery_window,
      is_pool_opt_in: true,
      address: MOCK_USER_DATA.address,
    };

    try {
      const response = await findOrCreatePool(payload);
      console.log("API Payload Sent:", payload);
      console.log("API Response:", response);
      
      // Simulate delay for finding a pool
      setTimeout(() => {
        setPoolDetails(MOCK_POOL_DETAILS);
        setIsPooling(true);
        setIsLoading(false);
      }, 1500);

    } catch (error) {
      console.error("Failed to opt into pooling:", error);
      alert("Could not join a pool at this time. Please try again later.");
      setIsLoading(false);
    }
  };

  const cancelPooling = () => {
    console.log("User cancelled pooling.");
    setIsPooling(false);
    setPoolDetails(null);
  };
  
  const handleModalCancel = () => {
    setConfirmationVisible(false);
  };

  const value = {
    isPooling,
    isLoading,
    poolDetails,
    requestPooling, // Expose this function to trigger the modal
    cancelPooling,
  };

  return (
    <PoolContext.Provider value={value}>
      {children}
      <ConfirmationModal
        isOpen={isConfirmationVisible}
        onCancel={handleModalCancel}
        onConfirm={confirmAndJoinPool}
        title="Confirm Pool Participation"
      >
        <p>Joining a delivery pool helps reduce emissions and save costs.</p>
        <p className="mt-2 font-semibold">However, once the pool timer ends, your order will be locked and cannot be cancelled.</p>
      </ConfirmationModal>
    </PoolContext.Provider>
  );
};

export default PoolProvider;