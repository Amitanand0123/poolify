const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const cartController = require('../controllers/cartController');

// Auth routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Cart routes
router.post('/cart/add', isLoggedIn, cartController.addToCart);
router.get('/cart', isLoggedIn, cartController.getCart);

module.exports = router;