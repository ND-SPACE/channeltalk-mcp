const axios = require('axios');

module.exports = async ({ userChatId, managerId, botName }) => {
  const { CHANNELTALK_API_KEY, BASE_URL } = process.env;

  const response = await axios.patch(
    `${BASE_URL}/user-chats/${userChatId}/assign-to/managers/${managerId}`,
    null,
    {
      headers: { Authorization: `Bearer ${CHANNELTALK_API_KEY}` },
      params: { botName }
    }
  );

  return {
    status: 'assigned',
    managerId,
    chatId: userChatId
  };
};
