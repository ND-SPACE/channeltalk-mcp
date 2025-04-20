const axios = require('axios');

module.exports = async ({ userId }) => {
  const { CHANNELTALK_API_KEY, BASE_URL } = process.env;

  const response = await axios.get(`${BASE_URL}/users/${userId}`, {
    headers: { Authorization: `Bearer ${CHANNELTALK_API_KEY}` }
  });

  const user = response.data.user;

  return {
    name: user.name,
    email: user.email,
    mobile: user.mobileNumber,
    tags: user.tags,
    createdAt: user.createdAt
  };
};
