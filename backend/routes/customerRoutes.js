const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Customer API' });
});

module.exports = router;