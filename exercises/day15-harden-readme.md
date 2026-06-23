# Day 15 — Harden + README *(last day before vacation)*

Goal: leave both flagship builds clean so two weeks off costs you nothing. When you come back, everything still runs and tells its own story.

## Harden
1. **n8n workflow:** add error handling on the AI/HTTP nodes (what happens on a bad response or timeout?). Confirm a failed run doesn't corrupt the output.
2. **MCP server:** confirm the read/write tools handle a missing file, an empty vault, and a bad title gracefully (you started this Day 13).

## Write real READMEs (problem → solution → how to run)
3. For the **n8n workflow**: what problem it solves, what it replaces, how to import and run it.
4. For the **MCP server**: what it does, env vars (`VAULT_PATH`), how to run and connect to Claude, the tools it exposes.

## Tag + record
5. Commit everything, then tag a release:
```bash
git add . && git commit -m "Day 15: harden + READMEs"
git tag v0.1 && git push origin main --tags
```
6. Record a **90-second demo** for each build (problem → it running → result).

## ✅ Proof
Tagged `v0.1` release + READMEs + two demo videos.

## Why it feeds the work
These are your two portfolio centerpieces (JOB + BP). Clean now = a Week 4 of polish, not repair.

> 🌴 Then go on vacation Jul 13–24. The hard build is behind you. If a product idea surfaces, drop it in the vault and let it go.
