const axios = require('axios');

module.exports = async ({ userChatId, botName }) => {
  const { CHANNELTALK_API_KEY, BASE_URL } = process.env;

  const response = await axios.patch(
    `${BASE_URL}/user-chats/${userChatId}/close`,
    null,
    {
      headers: { Authorization: `Bearer ${CHANNELTALK_API_KEY}` },
      params: { botName }
    }
  );

  return {
    status: 'closed',
    chatId: userChatId,
    closedAt: new Date().toISOString()
  };
};
