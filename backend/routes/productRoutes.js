const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const upload = require('../config/multer-config');
const { addProducts } = productController;
const { listProductsFromCategory } = productController;
// Add multiple products
router.post('/add-products', upload.array('images'), addProducts);

// List all products
router.get('/list', listProductsFromCategory);

module.exports = router;