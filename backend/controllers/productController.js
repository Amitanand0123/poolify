const Product =  require('../models/productModel');

exports.addProducts = async (req, res) => {
  try {
    const productsData = JSON.parse(req.body.products); // Expecting JSON string array
    const files = req.files;

    if (!Array.isArray(productsData) || productsData.length === 0) {
      return res.status(400).json({ message: 'Products array is required' });
    }

    const productsToInsert = [];

    for (let i = 0; i < productsData.length; i++) {
      const product = productsData[i];

      if (!product.name || !product.price || !product.category || !product.description) {
        return res.status(400).json({ message: `Missing fields in product at index ${i}` });
      }

      const imageFile = files[i];
      if (!imageFile) {
        return res.status(400).json({ message: `Missing image for product at index ${i}` });
      }

      const productObj = {
        name: product.name,
        price: product.price,
        category: product.category,
        description: product.description,
        image: {
          data: imageFile.buffer,
          contentType: imageFile.mimetype,
        },
      };

      productsToInsert.push(productObj);
    }

    const createdProducts = await Product.insertMany(productsToInsert);

    res.status(201).json({ message: 'Products added successfully', products: createdProducts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// List all products
exports.listProductsFromCategory = async (req, res) => {
  try {
    const { category } = req.query;

    if (!category) {
      return res.status(400).json({ message: 'Category is required' });
    }

    const products = await Product.find({ category: category.trim() });

    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};