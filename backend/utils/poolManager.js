// controllers/poolController.js
import axios from 'axios';
import { addUserToExistingPool, createNewPool } from '../utils/poolManager.js';

export const matchUserToPool = async (req, res) => {
  try {
    const {
      userId,
      lat,
      lng,
      itemCategory,
      cartItems,
      deliveryTime,
      regionType,
    } = req.body;

    // STEP 1: Send payload to Spark backend to get pool match decision
    const sparkResponse = await axios.post(process.env.SPARK_URL, {
      userId,
      lat,
      lng,
      itemCategory,
      cartItems,
      deliveryTime,
      regionType,
    });

    const result = sparkResponse.data;

    // STEP 2: Send decision to AI backend to get viability and expiry time
    const aiResponse = await axios.post(process.env.AI_MODEL_URL, {
      regionType,
      itemCategory,
      activeUsersNearby: result.activeUsersNearby || 0,
      timeOfDay: new Date().getHours(),
      dayOfWeek: new Date().getDay(),
      cartSize: cartItems.length,
      averageCartValue: result.averageCartValue || 0,
      deliveryTimePreference: result.deliveryTimePreference || 4 // fallback if not available
    });

    const aiDecision = aiResponse.data;
    const suggestedTTL = parseInt(aiDecision.suggestedExpiryTime.replace('h', '')) * 3600;

    // STEP 3: Based on Spark decision, create or join pool using AI expiry
    if (result.action === 'join_pool') {
      const updatedPool = await addUserToExistingPool(result.matchedPoolId, userId);
      return res.status(200).json({
        message: 'User added to existing pool',
        pool: updatedPool,
        aiDecision
      });
    } else if (result.action === 'create_pool') {
      const newPoolId = `pool:${Date.now()}`;
      const newPool = await createNewPool({
        poolId: newPoolId,
        userId,
        lat,
        lng,
        itemCategory,
        deliveryTime,
        ttlSeconds: suggestedTTL
      });
      return res.status(201).json({
        message: 'New pool created',
        pool: newPool,
        aiDecision
      });
    } else {
      return res.status(400).json({ message: 'Unknown Spark action response.' });
    }
  } catch (error) {
    console.error('Error in matchUserToPool:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};