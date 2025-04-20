const axios = require('axios');

module.exports = async ({ userId }) => {
  const { CHANNELTALK_API_KEY, BASE_URL } = process.env;

  const response = await axios.post(`${BASE_URL}/users/${userId}/user-chats`, null, {
    headers: { Authorization: `Bearer ${CHANNELTALK_API_KEY}` }
  });

  const chat = response.data.userChat;

  return {
    id: chat.id,
    createdAt: chat.createdAt,
    status: chat.status
  };
};
