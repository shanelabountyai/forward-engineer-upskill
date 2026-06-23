# Day 16 — Re-orient + bug bash

Goal: after two weeks off, confirm both flagships still run and fix whatever drifted. Low-stakes re-entry day.

## Re-run both builds
1. Start n8n (`npx n8n`), import/open the flagship workflow, run it end to end.
2. Start the MCP server (`export VAULT_PATH=...; python3 server.py`), connect to Claude, call read and write tools.

## Fix the rough edges
3. Note anything that broke or felt clunky (expired key? changed path? a node that errored?). Fix them.
4. If behavior changed, re-record the affected demo so your proofs match reality.

## Reset your head
5. Re-read your `Build Log` and the Day 15 READMEs so you're back in context for the Week 4 case studies.

## Commit
```bash
git add . && git commit -m "Day 16: post-vacation bug bash"
```

## ✅ Proof
Both builds confirmed working (note the fixes you made).

## Why it feeds the work
Confidence that the demos are live before you start writing them up (JOB).
