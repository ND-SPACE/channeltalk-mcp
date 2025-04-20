#!/usr/bin/env node

const express = require('express');
const app = express();
const port = 3123;
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
app.use(express.json());

app.post('/invoke', async (req, res) => {
  const { action, params } = req.body;

  try {
    const actionHandlerPath = path.join(__dirname, 'actions', `${action}.js`);
    const actionHandler = require(actionHandlerPath);

    const result = await actionHandler(params);
    return res.json({ result });
  } catch (e) {
    console.error(`❌ Failed to execute action: ${action}`, e);
    return res.status(500).json({ error: `Failed to execute action: ${action}` });
  }
});

app.listen(port, () => {
  console.log(`[MCP] ChannelTalk MCP server listening on port ${port}`);
});
