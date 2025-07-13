const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000 || process.env.PORT;
const customerRoutes = require('./routes/customerRoutes');
const connectDB = require('./config/mongooseConfig');
const productRoutes = require('./routes/productRoutes');
// Connect to MongoDB
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/customers', customerRoutes);
app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});