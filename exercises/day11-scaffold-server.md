# Day 11 — Scaffold your server (with Claude Code)

Goal: stand up your own MCP server skeleton. This is the start of Week 3's centerpiece — the Obsidian connector — built with Claude Code.

Builds on `exercises/mcp-server-starter/` (`server.py` + `README.md`).

## Install the SDK
```bash
cd exercises/mcp-server-starter
python3 -m pip install "mcp[cli]" --break-system-packages
```
If `pip3` isn't found or resolves to the wrong Python, `python3 -m pip ...` is the more reliable form — it always uses the same interpreter you'll run the server with. (Also watch for typos like `Pip` — shells are case-sensitive.)

## Run the stub server
```bash
export VAULT_PATH="/full/path/to/your/FDE/vault"
python3 server.py
```
`search_notes` is stubbed for now — Day 12 makes it read real notes.

## Connect it to Claude
Add it to your Claude Desktop / Claude Code MCP config (see `mcp-server-starter/README.md` for the JSON snippet), pointing `args` at the full path to `server.py`. Restart the client.

## Confirm the tool shows up
In a Claude chat, check that `search_notes` appears as an available tool and can be called (even if the result is just the stub).

## ✅ Proof
Server runs; the tool shows up in Claude (screenshot the tool-call card).

## Why it feeds the work
This is the skeleton the rest of Week 3 (Days 12–15) builds on — real vault reads, writes, and the end-to-end flow. See [[day12-read-vault]].

## Note (2026-07-01)
First run hit `command not found: Pip` — traced to running `pip` (or a typo'd `Pip`) instead of the resolvable command. Switched the standard install line to `python3 -m pip install ... --break-system-packages`, which sidesteps both the case-sensitivity and pip-not-on-PATH issues. Applied the same fix across `mcp-server-starter/README.md`, `server.py`, and `day12-read-vault.md`.
