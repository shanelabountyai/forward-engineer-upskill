# Forward Deployed Path — Shane LaBounty

*A learning, portfolio, and positioning roadmap to become an applied-AI / forward-deployed solutions leader — leveraging marketing-ops and transformation experience rather than restarting as a junior engineer.*

---

## The target (be precise about which FDE this is)

Not the classic Palantir software-engineer FDE — that's a step down and a craft you'd be starting late. The target is the **applied-AI / solutions FDE**: the person who embeds with an enterprise customer, scopes an AI workflow from a messy business problem, and ships a working prototype in the room. It's customer-facing, integration-heavy, fast, and increasingly the hottest role at AI and martech companies.

**The one-line goal:** *Walk into an enterprise, scope an AI solution, and build a working demo the same day — backed by the credibility to sit in the budget-holder's room.*

This is a level **up** from Director of Marketing Ops, not a reset.

---

## Your starting assets (what most FDEs don't have)

| Asset | Why it matters for FDE |
|---|---|
| $100M budgets, 1,000+ projects, Fortune 500 rebrand | You read enterprise orgs and politics instantly — rare in builders |
| Workfront–Assets integration (Hoodoo), RainFocus→AEP | You've already done the *conceptual* integration work; now make it hands-on |
| Sitecore product ownership, martech stack depth | Deep domain credibility — your demos speak to problems you know cold |
| CPMAI v7 + Adobe Content Supply Chain Advisory Board | AI framing credibility + senior peer network |
| Already using Claude Code, Dispatch, writing Skills | You're past the on-ramp — this roadmap accelerates what you started |

**The gap, stated honestly:** you can *spec and advise* a solution but can't yet *build the thing yourself* end-to-end. Closing that one gap is the entire program.

---

## The plan — four phases (full-time: ~5 focused weeks, June 19 → Aug 7)

*With full-time availability the phases compress hard. Your vacation (July 13–24) splits the run, so the schedule below puts the heavy technical build before the break and the writing/positioning after. See the calendar-anchored schedule for exact weeks.*

### Phase 0 — Foundations (Weeks 1–3)
**Goal:** Be dangerous with the basics so nothing later blocks you.

- Get fluent in **Claude Code** for real work (you've started) — use it daily for glue tasks.
- Refresh **Python + JavaScript basics** — enough to read, modify, and write scripts. Don't aim for CS depth; aim for "I can wire two systems together."
- Set up a real dev environment: GitHub account, VS Code, a place to ship.
- **Proof of phase:** a public GitHub repo with one small script that does something useful (e.g. pulls data from an API and reformats it).

### Phase 1 — Build fluency (Weeks 4–8)
**Goal:** Go from "I can edit code" to "I can build a working tool."

- Learn the **Anthropic API**: messages, system prompts, tool use (function calling), streaming. Build 2–3 tiny apps.
- Learn **API integration patterns**: REST calls, auth (API keys), moving JSON between systems — using tools you own (n8n, public APIs, your Obsidian vault).
- Build a **simple AI-powered internal tool** — e.g. a script that takes a marketing brief and drafts a project plan, or summarizes campaign data.
- **Proof of phase:** one deployed/working app that calls the API and does a real marketing-ops task.

### Phase 2 — Integrations & agents (Weeks 9–16)
**Goal:** This is the actual forward-deployed skillset. Spend the most time here.

- Learn **MCP (Model Context Protocol)** — build a connector against a tool you own (your Obsidian vault: read and write notes).
- Build an **agentic workflow** in n8n: multi-step input → tools → outcome (e.g. "intake → draft plan → log to a sheet/Obsidian → notify").
- Practice the **"vague ask → working demo in a day"** drill repeatedly. Speed is the job.
- **Proof of phase:** one MCP connector or agent in your domain, with a short README explaining the business problem it solves.

### Phase 3 — Portfolio, positioning & deployment (Weeks 12–24, overlapping)
**Goal:** Make the work legible to hiring managers and clients, and start the stealth conversations.

- Package 3–5 artifacts (below) into a clean portfolio (GitHub + a simple site or LinkedIn featured section).
- Write each as a **deployment story**, not a tutorial: problem → what you built → what it replaced → time/cost saved. (This mirrors your $10M / 400% impact narratives — your strongest move.)
- Start the **stealth positioning** on LinkedIn under your existing "AI Integration" pillar — build logs, not announcements.
- **Proof of phase:** a portfolio you'd send to a VP of Applied AI or a prospective client without flinching.

---

## Portfolio artifacts (build these specifically — 3 minimum, 5 ideal)

1. **An n8n automation + an MCP connector for your Obsidian vault** — built on tools you own with Claude Code. *These are your flagship pieces.*
2. **"Messy ops problem → working automation" case study** — pick a real pain from your PMI/Lumen experience, rebuild a slice of it in n8n with sample data, write the deployment story.
3. **A reusable Skill or internal agent for marketing ops** — you already have the LinkedIn and AJO Skills; document and publish them as portfolio pieces with before/after impact.
4. **A reusable, exportable template** — your n8n workflow exported as JSON, plus your documented Skills: IP you own and can hand to any client.
5. **A build log series** — 4–6 short LinkedIn posts or demo clips showing real builds, tied to your Scale / Impact / AI pillars.

> Rule of thumb: **shipped artifacts with an impact story beat any certificate.** Don't collect courses — collect demos.

---

## Calendar-anchored schedule (full-time)

**Key constraint:** your two-week vacation (July 13–24) falls *mid-stream*. So the heavy technical learning and the flagship build are sequenced **before** the break; the post-vacation work is writing and positioning, which survives a two-week gap easily.

### This week — June 15–18 (wrap-up)
No roadmap work expected — clear your plate. If you have a spare 20 minutes, create a GitHub account so Juneteenth starts clean. Otherwise, nothing.

### Kickoff — Friday June 19 (Juneteenth), full day
A full day is perfect for setup. Get everything stood up so Monday you build.
- GitHub + VS Code installed; Claude Code running.
- First small script committed (pull from an API, reformat output).
- Skim the Anthropic API + MCP docs once — prime the pump, don't memorize.
- **Confirm your stack** (n8n, Claude Code, Obsidian, Claude Design) and pick the sample domain for the flagship workflow.

### Build run — full-time, June 22 → July 10 (the technical core, before vacation)
| Week | Dates | Focus | Ship by end of week |
|---|---|---|---|
| 1 | Jun 22–26 | Phase 1 — API fluency: messages, tool use, streaming | A working API script that does a real marketing-ops task |
| 2 | Jun 29–Jul 2 *(Jul 3 holiday)* | Phase 1→2 — n8n automation + meet MCP | A working n8n workflow that calls Claude |
| 3 | Jul 6–10 | Phase 2 — Obsidian MCP connector | The connector working (read/write vault), rough README |

### Vacation — July 13–24 (out two weeks, fully off)
- Zero obligation. The hard build is already behind you.
- Optional only: a podcast or doc on agents/MCP. Nothing hands-on.

### Polish & position — full-time, July 27 → Aug 7 (lower-tech, gap-proof)
| Week | Dates | Focus | Ship by end of week |
|---|---|---|---|
| 4 | Jul 27–31 | Phase 3 — finish/polish flagship + write the deployment-story case study | Flagship build clean + 1 case study written |
| 5 | Aug 3–7 | Phase 3 — portfolio assembly, build-log posts, outreach | Portfolio page live; 2 build-log posts; 3–5 stealth conversations opened |

**By ~August 7:** a real portfolio of builds on tools you own, and the positioning to start serious applied-AI conversations.

### Daily rhythm during the sprint (full-time)
- **Morning (2–3 hrs):** focused build on the week's artifact — hardest thinking first.
- **Midday (1 hr):** learning rep tied directly to what you're building (no abstract courses).
- **Afternoon (2–3 hrs):** finish, debug, commit, and jot one line for a future build-log post.
- End each day with something committed to GitHub, however small. Momentum compounds.

---

## Learning resources (lean, not a course graveyard)

- **Anthropic docs:** API getting-started, tool use, MCP — primary source, build as you read.
- **Claude Code + Skills:** keep using them as your daily driver; you learn by shipping.
- **Python/JS:** any quick "automate the boring stuff"–style ramp; stop once you can read and modify scripts.
- **MCP:** Anthropic's MCP documentation and example servers — clone one, modify it for your tool.
- Avoid long passive courses. If a resource isn't producing a commit or a demo within a week, drop it.

---

## Job-search positioning (stealth — consistent with your current approach)

- Frame everything as **practitioner thought leadership**, never "I'm learning to code to switch careers."
- Lean into the rare combination: *enterprise transformation leader who now builds AI workflows hands-on.*
- Target titles where your profile is a strength, not a deficit: **Applied AI Lead, AI Solutions Architect, Forward Deployed Engineer (enterprise/martech), Head of AI Transformation, Director/VP of AI Solutions.**
- Use connection requests with cross-functional leaders (CTO/CPO/Heads of Applied AI) — your existing playbook already covers this angle.

---

## "Forward Deployed" — drop-in section for your business plan

> **Approach: Forward-Deployed Delivery**
>
> Unlike traditional fractional or advisory engagements that stop at strategy and decks, this practice embeds directly with the client's team to **build and deploy working AI workflows alongside them** — and leaves functioning tooling behind.
>
> The model pairs two scarce things: senior enterprise-transformation judgment (having run $100M budgets, 1,000+ project portfolios, and a Fortune 500 rebrand) with hands-on AI build capability (n8n automations, custom MCP connectors, and agentic workflows built with Claude Code).
>
> **What a forward-deployed engagement delivers:**
> - Rapid, in-room scoping of a real operational problem
> - A working AI prototype within the first engagement, not a future roadmap
> - Integrations into the client's existing stack rather than yet another tool to buy
> - Knowledge transfer so the client's team can run and extend it
>
> **Why it's differentiated:** most AI consultants advise but can't build; most builders can't read an enterprise org. This approach does both — strategy that ships.
>
> **Positioning as a service line or core offering:** can run as a premium standalone offer, as the "build" tier above a strategy/advisory tier, or as the signature differentiator for the whole practice.

---

## 90-day quick-start checklist

- [ ] GitHub + VS Code set up; first small script committed
- [ ] Daily Claude Code use established
- [ ] First Anthropic API app (tool use) working
- [ ] One n8n automation that calls Claude
- [ ] First MCP connector for your Obsidian vault (flagship artifact)
- [ ] One deployment-story case study written
- [ ] Two build-log posts published under the AI pillar
- [ ] Portfolio page live (GitHub + LinkedIn featured)
- [ ] "Forward Deployed" section added to the business plan
- [ ] 3–5 stealth connection conversations started with applied-AI leaders

---

*Next: tighten any phase to your real availability, and pick the sample domain for your flagship n8n workflow.*
