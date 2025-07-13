const MOCK_PRODUCTS = {
  beauty: [
    { id: 'b1', name: 'Advanced Night Repair Serum', price: 75.00, discount: 15, imageUrl: '/beauty-serum.jpg', category: 'beauty' },
    { id: 'b2', name: 'Ultra Facial Cleanser', price: 22.00, discount: 10, imageUrl: '/beauty-cleanser.jpg', category: 'beauty' },
    { id: 'b3', name: 'Electric Sonic Toothbrush', price: 89.99, discount: 20, imageUrl: '/beauty-toothbrush.jpg', category: 'beauty' },
  ],
  'outdoor-gear': [
    { id: 'og1', name: '2-Person Camping Tent', price: 120.00, discount: 25, imageUrl: '/outdoor-tent.jpg', category: 'outdoor-gear' },
    { id: 'og2', name: 'Insulated Hiking Backpack', price: 65.00, discount: 10, imageUrl: '/outdoor-backpack.jpg', category: 'outdoor-gear' },
  ],
};

export const fetchProductsByCategory = (category) => {
  console.log(`Fetching products for category: ${category}`);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(MOCK_PRODUCTS[category] || []);
    }, 500);
  });
};