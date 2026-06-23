# 00 — START HERE

Your complete forward-deployed sprint, ready to run and ready to move into a new Claude Project.

## What's in this package

| File | What it's for |
|------|---------------|
| `00-START-HERE.md` | This guide |
| `01-roadmap.md` | The strategy: target role, your edge, phases, and the drop-in **business-plan section** |
| `02-daily-plan.md` | The **25-day daily plan** — one objective, exercise, and proof per day |
| `03-skills-to-narrative.md` | Converts each proof into **business-plan content, résumé bullets, interview stories** |
| `tracker.html` | The **live tracker** — open in a browser; logs progress + proofs; exports a markdown log |
| `exercises/` | Starter files: setup checklist, first API call, n8n quickstart + ops workflow, Obsidian MCP server starter |
| `templates/` | Proof log, case-study, and build-log-post templates |

## How to use it day to day

1. Open `tracker.html` in your browser (double-click it). Keep it bookmarked.
2. Each working day: do the day's exercise from `02-daily-plan.md`, using the matching file in `exercises/`.
3. Log the **proof** (a commit link, repo URL, or video) in the tracker and check the day off.
4. On Day 25 — and any time you want to update the project — hit **Export Markdown log** and drop the file into your project.

> The tracker saves to your browser's local storage. It does **not** sync. Use **Export JSON** before switching computers, and **Import JSON** on the other machine.

## How to move this into a new Claude Project

1. Download this whole package (the zip).
2. In Claude, create a new project — call it something like **"Forward Deployed Sprint."**
3. Add `01-roadmap.md`, `02-daily-plan.md`, and `03-skills-to-narrative.md` to the project's knowledge/files. (These are the docs Claude should reason over.)
4. Optionally add the `exercises/` and `templates/` files too, for reference.
5. Paste the instructions below into the project's custom instructions.
6. Keep `tracker.html` on your computer — open it in a browser; it's a tool you use, not project knowledge. Each Friday, export the markdown log and refresh it in the project.

### Paste-in project instructions

```
This project supports my transition into an applied-AI / forward-deployed solutions
role and my own independent practice. My background: senior marketing-operations and
transformation leader (Director, Marketing Ops at PMI; previously Lumen/CenturyLink),
PMP + CPMAI, deep martech experience. I have left my employer, so I build only on
tools I own: Anthropic API, Claude Code, n8n, Obsidian, Claude Design, GitHub. I am
building hands-on AI/agent skills via a 25-day plan (see 02-daily-plan.md), with proofs
tracked in a separate tracker.

When I work in this project:
- Use 01-roadmap.md for strategy and the business-plan positioning.
- Use 02-daily-plan.md as the source of truth for what I'm doing each day; help me
  with the specific day's exercise when I ask.
- When I share a completed proof, help me turn it into business-plan content, a
  résumé bullet, and an interview story using 03-skills-to-narrative.md.
- My flagship builds are an n8n automation and an Obsidian MCP connector, built with Claude Code.
- Keep job-search framing stealth and practitioner-led — never "actively job hunting."
- Be concrete and build-oriented; favor working code and shipped artifacts over theory.
```

## A note on your tool stack

Everything is built on tools you personally own and control — no employer access needed: **Anthropic API, Claude Code, n8n, Obsidian, Claude Design, GitHub**, plus free supporting services (Google Sheets, a Discord/Slack webhook, public APIs) for realistic demos. Your flagship builds are an **n8n automation** (Days 7–9) and an **Obsidian MCP connector** (Days 11–15). Your marketing-ops background still shows up — the demos use sample marketing-ops data, so the work speaks to the roles and clients you want. On Day 25 you pick your next build.

---

*Built to be run, not just read. Day 1 is a full day on Juneteenth — see `exercises/day01-juneteenth-setup.md`.*
