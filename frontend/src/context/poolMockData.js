export const MOCK_POOL_DETAILS = {
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

export const MOCK_USER_DATA = {
  userId: "user_alice",
  cartId: "cart_abc123",
  location: { lat: 34.0522, lon: -118.2437 },
  items: [{ id: "item_1", category: "Pet Supplies" }],
};
