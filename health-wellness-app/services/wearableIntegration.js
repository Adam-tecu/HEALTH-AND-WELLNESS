const axios = require('axios');

const syncWithWearables = async (userId) => {
  // Example integration with a wearable API
  const response = await axios.get(`https://api.wearable.com/user/${userId}/data`, {
    headers: { Authorization: `Bearer ${process.env.WEARABLE_API_KEY}` },
  });
  return response.data;
};

module.exports = syncWithWearables;