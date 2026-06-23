# Day 13 — Write to your vault

Goal: let the connector *do work*, not just read. Add `create_note` and `append_to_note` so Claude can write into your knowledge base.

Builds on `exercises/mcp-server-starter/server.py`.

## Implement the write tools
1. `create_note(title, content)` is already in the starter — confirm it writes `<title>.md` into the vault.
2. **Implement `append_to_note(title, content)`** (currently commented out): open the note if it exists, append the content (with a newline), create it if missing. Return the path.
3. Restart the server so Claude picks up the new tool.

## Test through Claude
4. Ask Claude: "Create a note called *MCP Test* with today's date and three bullets."
5. Ask: "Append a line to *Build Log* saying my connector can now write."
6. Open Obsidian and confirm both notes changed on disk.

## Safety check
7. Add a guard so a title can't escape the vault folder (reject `/` or `..` in the title). One line, but it's the kind of thing that separates a toy from a tool.

## Commit
```bash
git add . && git commit -m "Day 13: create_note + append_to_note"
```

## ✅ Proof
Connector can read *and* write your knowledge base (show before/after in Obsidian).

## Why it feeds the work
"Read and write" is the story that makes this a real connector, not a search box (BP + JOB).
