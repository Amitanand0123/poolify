const User = require('../models/userModel');
const Product = require('../models/productModel'); // You should have a product model
const mongoose = require('mongoose');

// Example: Add a cart field to your user model if not present
// cart: [{ productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, quantity: Number }]

// Add product to cart
exports.addToCart = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { productId, quantity } = req.body;

    // Validate product
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Find user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if product already in cart
    const cartItem = user.cart?.find(item => item.productId.toString() === productId);
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      user.cart = user.cart || [];
      user.cart.push({ productId, quantity });
    }

    await user.save();
    res.json({ message: 'Product added to cart', cart: user.cart });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get user's cart
exports.getCart = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId).populate('cart.productId');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ cart: user.cart });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Remove product from cart
exports.removeFromCart = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { productId } = req.body;

    // Find user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Remove product from cart
    user.cart = user.cart.filter(item => item.productId.toString() !== productId);

    await user.save();
    res.json({ message: 'Product removed from cart', cart: user.cart });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};