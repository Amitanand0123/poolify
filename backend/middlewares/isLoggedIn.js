const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.cookies?.token || req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY); // Use your secret
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};