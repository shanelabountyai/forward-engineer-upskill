# Day 12 — Read your vault

Goal: make `search_notes` return *real* notes from your Obsidian vault instead of a stub. The connector starts doing actual work.

Builds on `exercises/mcp-server-starter/server.py`.

## Point the server at your vault
1. Find the full path to your FDE vault folder (the one with your `.md` notes).
2. Set it and run the server:
```bash
cd exercises/mcp-server-starter
python3 -m pip install "mcp[cli]" --break-system-packages
export VAULT_PATH="/full/path/to/your/FDE/vault"
python3 server.py
```
(If `pip3` errors with "command not found," `python3 -m pip install ...` is the more reliable form.)

## Confirm it reads real files
3. `search_notes` already walks `*.md` and returns `{file, snippet}` matches. Make sure you have a few notes in the vault with searchable words (your Build Log counts).
4. (If Day 11 still had a stub) replace it with the real implementation in the starter.

## Test through Claude
5. With the server connected to Claude Desktop/Code, ask: "Search my notes for *build log*" (or any word you know is in a note).
6. Confirm Claude returns the actual snippet from your vault.

## Commit
```bash
git add . && git commit -m "Day 12: search_notes reads the real vault"
```

## ✅ Proof
The MCP tool returns real notes from your vault (screenshot the Claude call + result).

## Why it feeds the work
This is the centerpiece moving from demo to real (BP + JOB). Note the moment it first returned your own note.
