import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { PoolContext } from "./PoolContext";
import { findOrCreatePool } from "../services/api";

const MOCK_POOL_DETAILS = {
  id: "pool_123xyz", 
  members: [
    { id: "user_alice", name: "You" },
    { id: "user_bob", name: "Bob" },
  ],
  itemTypes: ["Groceries", "Pet Supplies"],
  eta: "Today, 8:00 PM - 9:00 PM",
  expiresAt: new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString(), // 6 hours from now
  isConfirmed: false,
};

const PoolProvider = ({ children }) => {
  const [isPooling, setIsPooling] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [poolDetails, setPoolDetails] = useState(null);

  const MOCK_USER_DATA = {
    userId: "user_alice",
    cartId: "cart_abc123",
    location: { lat: 34.0522, lon: -118.2437 },
    items: [{ id: "item_1", category: "Pet Supplies" }],
  };

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
      setPoolDetails({ ...confirmedPool, isConfirmed: true });
    });

    return () => socket.disconnect();
  }, []);

  const optIntoPooling = async () => {
    setIsLoading(true);
    try {
      const response = await findOrCreatePool(MOCK_USER_DATA);
      
      console.log("API Response:", response);
      setTimeout(() => {
        setPoolDetails(MOCK_POOL_DETAILS);
        setIsPooling(true);
        setIsLoading(false);
      }, 2000);

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

  const value = {
    isPooling,
    isLoading,
    poolDetails,
    optIntoPooling,
    cancelPooling,
  };

  return <PoolContext.Provider value={value}>{children}</PoolContext.Provider>;
};

// This file now ONLY exports a single React component.
export default PoolProvider;