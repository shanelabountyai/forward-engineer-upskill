# MCP Server Starter — `obsidian-mcp`

Your connector portfolio piece (Days 11–15): a Model Context Protocol server that lets Claude read and write your **Obsidian vault** — an "AI-accessible second brain." Fully personal, no employer systems.

## What MCP is, in one line
A standard way to expose **tools** to an AI client like Claude/Claude Code, so the model can work with your systems through a clean contract.

## Setup
```bash
python3 -m pip install "mcp[cli]" --break-system-packages
export VAULT_PATH="/full/path/to/your/FDE/vault"
python3 server.py
```
> If `pip3` isn't found (or you get `command not found`), `python3 -m pip install ...` is the more reliable form — it always installs into the same interpreter you run the server with. Shells are also case-sensitive, so double-check for typos like `Pip`.

The starter reads `.md` files directly from the vault folder — the simplest, most reliable approach (no Obsidian plugin required). If you later want live two-way sync while Obsidian is open, the **Local REST API** community plugin is an option.

## Connect it to Claude
Add it to your Claude Desktop / Claude Code MCP config (path in the docs at https://docs.claude.com):
```json
{
  "mcpServers": {
    "obsidian": {
      "command": "python3",
      "args": ["/full/path/to/server.py"],
      "env": { "VAULT_PATH": "/full/path/to/your/FDE/vault" }
    }
  }
}
```
Restart the client; the `search_notes` tool should appear.

## Build order (matches the daily plan)
- **Day 11:** server runs with a stub `search_notes` (use Claude Code to scaffold it).
- **Day 12:** `search_notes` reads real `.md` files from your vault.
- **Day 13:** add `create_note` and `append_to_note`.
- **Day 14:** drive a flow — Claude reads notes, n8n processes, result is written back as a note.
- **Day 15:** error handling, README, tag `v0.1`, 90-sec demo.

## Proof of skill
A running MCP server whose tools Claude can call to read and modify your Obsidian vault. Link the repo + demo in the tracker.
