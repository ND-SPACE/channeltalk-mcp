# ChannelTalk MCP for Claude

This MCP server connects Claude Desktop with ChannelTalk Open API via npx.

## Usage (Claude Desktop config)

```json
{
  "mcpServers": {
    "channeltalk-mcp": {
      "command": "npx",
      "args": ["-y", "channeltalk-mcp"],
      "env": {
        "CHANNELTALK_API_KEY": "your_api_key"
      }
    }
  }
}
