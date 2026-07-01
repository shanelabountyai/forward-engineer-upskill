# Day 10 — Meet MCP

Goal: understand the Model Context Protocol by *running one*. You don't need to build yet — today is literacy, so Week 3 (building your own) isn't starting cold.

## Install an example server (Desktop Extensions, not manual config)
1. Open Claude Desktop → Settings → Extensions.
2. Install the official **filesystem** MCP server as a desktop extension — one click, no cloning a repo or hand-editing a JSON config file.
3. Point it at a scoped local folder (not your whole home directory) — e.g. a dedicated `Filesystemaccess` folder.

## Connect it to Claude
4. The extension activates once configured — no separate `claude_desktop_config.json` edit or app restart needed for this path.

## Call a tool
5. In a Claude chat, ask it to list the folder or read a specific file. Confirm it actually calls the tool (look for the tool-call card, not just a text answer) and returns real data. Bonus: ask it to create/write a file in the same folder to see the write side of the server too.

## Capture what you learned
6. In your Obsidian vault, jot 3–5 bullets: what a "tool" looks like over MCP, what the extension install did under the hood, and how this maps to the server *you'll* build next week.

## ✅ Proof
Notes + a screenshot of a working MCP tool call.

## Why it feeds the work
MCP literacy is rare and in demand (JOB). These notes are your on-ramp to Days 11–15.

## Note on approach (changed 2026-07-01)
Originally scoped as "clone an official example server from GitHub + hand-edit `claude_desktop_config.json`." Current Claude Desktop instead manages local MCP servers through **Settings → Extensions** (one-click installable packages) — that's now the documented, supported path, so the exercise was updated to match rather than have you hand-edit a config file that isn't the primary mechanism anymore. Used the official **filesystem** server, installed via Extensions, pointed at a scoped folder (`Filesystemaccess`).
