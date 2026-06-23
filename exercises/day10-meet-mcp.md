# Day 10 — Meet MCP

Goal: understand the Model Context Protocol by *running one*. You don't need to build yet — today is literacy, so Week 3 (building your own) isn't starting cold.

## Run an example server
1. Pick an official example from Anthropic's MCP servers repo (e.g. a filesystem or "everything" demo server). Check the docs at https://modelcontextprotocol.io and the `modelcontextprotocol/servers` GitHub repo.
2. Clone it and follow its README to run it locally (Node or Python depending on the example).

## Connect it to Claude
3. Add the server to **Claude Desktop** (or Claude Code) config so it appears as an available tool. The example's README shows the exact config block — it's a small JSON entry pointing at the server command.
4. Restart Claude Desktop/Code so it picks up the server.

## Call a tool
5. In a Claude chat, trigger one of the server's tools (e.g. ask it to read a file the filesystem server exposes). Confirm the tool actually runs and returns real data.

## Capture what you learned
6. In your Obsidian vault, jot 3–5 bullets: what a "tool" looks like over MCP, what the config did, and how this maps to the server *you'll* build next week.

## ✅ Proof
Notes + a screenshot of a working MCP tool call.

## Why it feeds the work
MCP literacy is rare and in demand (JOB). These notes are your on-ramp to Days 11–15.
