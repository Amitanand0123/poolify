const redis = require('../utils/redisClient'); 

exports.createPool = async (req, res) => {
  try {
    const { poolId, lat, lng, category, userId, deliveryTime, ttl} = req.body;

    if (!poolId || !lat || !lng || !category || !userId || !deliveryTime) {
      return res.status(400).json({ message: 'Missing required pool fields' });
    }
    
    const poolKey = `pool:${poolId}`;
    const newPool = {
      poolId,
      users: [userId],
      lat,
      lng,
      category,
      deliveryTime,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + ttlSeconds * 1000).toISOString()
    };

    await redis.set(poolKey, JSON.stringify(newPool), { EX: ttlSeconds });
    await redis.geoAdd('active_pools', {
      longitude: lng,
      latitude: lat,
      member: poolKey
    });

    res.status(201).json({ message: 'New pool created', pool: newPool });
  } catch (error) {
    console.error('Error creating pool:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ✅ Update an existing pool (add user)
exports.updatePool = async (req, res) => {
  try {
    const { poolId, userId, expiry_time } = req.body;
    const poolKey = `pool:${poolId}`;

    const poolData = await redis.get(poolKey);
    if (!poolData) {
      return res.status(404).json({ message: 'Pool not found' });
    }

    const pool = JSON.parse(poolData);
    if (!pool.users.includes(userId)) {
      pool.users.push(userId);
    }

    // Update TTL if needed (optional)
    await redis.set(poolKey, JSON.stringify(pool), { EX: expiry_time || ttl });

    res.status(200).json({ message: 'Pool updated', pool });
  } catch (error) {
    console.error('Error updating pool:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
