const axios = require('axios');

module.exports = async ({ userId, sortOrder = 'desc', limit = 25 }) => {
  const { CHANNELTALK_API_KEY, BASE_URL } = process.env;

  const response = await axios.get(`${BASE_URL}/users/${userId}/user-chats`, {
    headers: { Authorization: `Bearer ${CHANNELTALK_API_KEY}` },
    params: { sortOrder, limit }
  });

  const chats = response.data.userChats || [];

  return chats.map(chat => ({
    id: chat.id,
    createdAt: chat.createdAt,
    status: chat.status,
    assignee: chat.managerName || '미지정'
  }));
};
