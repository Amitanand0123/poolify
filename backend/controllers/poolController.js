const axios = require('axios');

exports.getPoolViability = async (req, res) => {
  try {
    // Simulated matched pool info
    const matchedPool = {
      latitude: 25.119949,
      longitude: 75.851366,
      regionType: "Suburban",
      itemCategory: "Groceries",
      timeOfDay: 20,
      dayOfWeek: 6,
      cartSize: 50,
      averageCartValue: 500,
      deliveryTimePreference: 12
    };

    const mlResponse = await axios.post(process.env.AI_MODEL_URL, matchedPool);

    res.status(200).json({
      input: matchedPool,
      modelResponse: mlResponse.data
    });
  } catch (error) {
    console.error('ML model error:', error);
    res.status(500).json({ message: 'Error contacting ML model', error: error.message });
  }
};
