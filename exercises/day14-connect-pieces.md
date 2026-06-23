# Day 14 — Connect the pieces

Goal: one flow that spans all three builds — Claude reads your notes via the MCP server, the n8n workflow processes something, and the result lands back in Obsidian as a new note. Multi-tool, multi-step value.

## Design the flow (pick one concrete example)
Example: "Summarize this week's build-log notes into a status update."
1. **Read** — Claude uses `search_notes` to pull your build-log entries from the vault.
2. **Process** — hand that text to your n8n workflow (the Day 9 flagship, or a trimmed version): it calls Claude to draft a structured summary/status.
3. **Write back** — the result returns to Obsidian as a new note via `create_note` (directly through the MCP server, or have n8n write the file / call the server).

## Wire it
4. Decide the handoff: simplest is Claude (with MCP) → you paste/trigger n8n → n8n writes the note. Cleaner is n8n calling the pieces in sequence. Either is a valid Day 14.
5. Run it end to end. Fix the seams where data shape doesn't match between steps.

## Record it
6. Screen-record the full run: notes in → processed → new note appears in Obsidian.

## Commit
```bash
git add . && git commit -m "Day 14: end-to-end n8n + MCP + Obsidian flow"
```

## ✅ Proof
A recorded end-to-end run across n8n + MCP + Obsidian.

## Why it feeds the work
This is *the story* — orchestration across tools you built (BP + JOB + EXPLORE). It's your strongest interview demo.
