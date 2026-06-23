# Daily Plan — Forward Deployed Sprint (25 working days)

**Built entirely on tools you own and control** — no employer access required. Your stack:
**Anthropic API · Claude Code · n8n · Obsidian · Claude Design · GitHub.**

**Flagship builds:**
- **n8n automation** — your integration/agent showcase ("intake → AI plan → logged → notify"), using free services + sample marketing-ops data.
- **Obsidian MCP server** — your connector showcase ("AI-accessible second brain"), built with Claude Code.

**How to use:** one day = one objective + one exercise + one proof. Log every proof in `tracker.html` and commit it to GitHub. The proof is what feeds your business plan, résumé, and interview stories.

**Feeds legend:** `BP` = business plan / your own practice · `JOB` = job-application / interview talking point · `EXPLORE` = business-exploration / offering idea.

---

## Day 1 — Fri Jun 19 (Juneteenth) · Setup *(full day)*
- **Objective:** Your personal toolchain stood up and a public home for the work.
- **Exercise:** Install VS Code, Python, Node, Git, **Claude Code**, and **Obsidian** (create an "FDE" vault). Get an Anthropic API key. Run **n8n** locally (`npx n8n`) and open the editor. Create a public GitHub repo `fde-portfolio` and commit a README. *(See `exercises/day01-juneteenth-setup.md`.)*
- **Proof:** Public `fde-portfolio` repo + screenshots of the n8n editor and your Obsidian vault running.
- **Feeds:** JOB (visible builder), EXPLORE (your own infrastructure).

---

## Week 1 — API + Claude Code fluency (Jun 22–26)

### Day 2 — Mon Jun 22 · First API call
- **Objective:** Make your first Anthropic API call from code.
- **Exercise:** Run `exercises/day02-first-api-call.py`. Change the prompt, print the response, commit.
- **Proof:** Committed script + screenshot of output.
- **Feeds:** JOB ("I write code that calls LLM APIs").

### Day 3 — Tue Jun 23 · Structured output
- **Objective:** Get reliable JSON back from the model.
- **Exercise:** Prompt for JSON only; parse it in Python; deliberately break it once and handle the error.
- **Proof:** Script that returns and safely parses JSON.
- **Feeds:** JOB, BP (reliable outputs = production-readiness).

### Day 4 — Wed Jun 24 · Tool use (function calling)
- **Objective:** Give the model a tool and run the loop.
- **Exercise:** Define one tool (e.g. `get_campaign_status(name)` returning a stub); handle `tool_use` → `tool_result`.
- **Proof:** Working tool-use script.
- **Feeds:** JOB (core FDE skill), BP.

### Day 5 — Thu Jun 25 · Build a real tool *with Claude Code*
- **Objective:** Use Claude Code to build something useful, fast.
- **Exercise:** In Claude Code, build a small CLI: a marketing brief (text) → a structured project plan (tasks, owners, durations) as JSON. Let Claude Code write and iterate it with you.
- **Proof:** `brief-to-plan` CLI in your repo + sample input/output.
- **Feeds:** BP (concrete asset), JOB (demo + "I build with Claude Code"), EXPLORE.

### Day 6 — Fri Jun 26 · Document Week 1 in Obsidian
- **Objective:** Make the week legible and start your build log.
- **Exercise:** Add READMEs. Start a `Build Log` note in Obsidian — one paragraph: "what I can now do that I couldn't Monday." Record a 60-second demo of `brief-to-plan`.
- **Proof:** Documented repo + Obsidian build-log note + demo clip.
- **Feeds:** JOB (portfolio), build-log material.

---

## Week 2 — n8n automation + meet MCP (Jun 29–Jul 2) *(Jul 3 holiday)*

### Day 7 — Mon Jun 29 · First n8n workflow
- **Objective:** Learn n8n's core: nodes, connections, executions.
- **Exercise:** Build a workflow: **Manual Trigger → HTTP Request** (call a free public API, e.g. Hacker News or a quotes API) **→ Set** (reshape the data) **→** view output. *(See `exercises/n8n/day07-n8n-quickstart.md`.)*
- **Proof:** Working workflow + screenshot of a successful execution.
- **Feeds:** JOB (automation skill), EXPLORE.

### Day 8 — Tue Jun 30 · n8n + Claude
- **Objective:** Put AI inside an automation.
- **Exercise:** Add an **HTTP Request** node that calls the Anthropic API (or n8n's AI/Anthropic node) so a workflow takes input text → Claude → structured output.
- **Proof:** Workflow that returns a Claude-generated result.
- **Feeds:** JOB, BP.

### Day 9 — Wed Jul 1 · The flagship workflow, end to end
- **Objective:** A complete "ops" automation on tools you control.
- **Exercise:** **Webhook/Form intake** → Claude drafts a campaign/project plan → write the result to a **Google Sheet** (free) *or* your **Obsidian vault** → **notify** (email or a Discord/Slack webhook). *(See `exercises/n8n/day09-n8n-ops-workflow.md`.)*
- **Proof:** Working end-to-end workflow + a recorded run.
- **Feeds:** BP (the offering), JOB (strong demo), EXPLORE (a sellable automation).

### Day 10 — Thu Jul 2 · Meet MCP
- **Objective:** Understand the Model Context Protocol by running one.
- **Exercise:** Clone an Anthropic MCP example server, run it, connect it to Claude Desktop/Code, call one tool.
- **Proof:** Notes + screenshot of a working MCP tool call.
- **Feeds:** JOB (MCP literacy is rare and in demand).

---

## Week 3 — Build the Obsidian MCP server (Jul 6–10) · *the connector centerpiece*

### Day 11 — Mon Jul 6 · Scaffold your server *with Claude Code*
- **Objective:** Stand up your own MCP server skeleton.
- **Exercise:** Use `exercises/mcp-server-starter/` (and Claude Code) to run a server with one stub tool `search_notes`.
- **Proof:** Server runs; the tool shows up in Claude.
- **Feeds:** JOB, BP.

### Day 12 — Tue Jul 7 · Read your vault
- **Objective:** Make the tool return real data.
- **Exercise:** Implement `search_notes` to read `.md` files from your Obsidian vault folder and return matches.
- **Proof:** MCP tool returns real notes from your vault.
- **Feeds:** BP, JOB (centerpiece).

### Day 13 — Wed Jul 8 · Write to your vault
- **Objective:** Let the connector do work, not just read.
- **Exercise:** Add `create_note` and `append_to_note` tools; test them through Claude.
- **Proof:** Connector can read *and* write your knowledge base.
- **Feeds:** BP, JOB.

### Day 14 — Thu Jul 9 · Connect the pieces
- **Objective:** Multi-tool, multi-step value.
- **Exercise:** A flow where Claude reads your notes via the MCP server, the n8n workflow processes something, and the result lands back in Obsidian as a new note.
- **Proof:** Recorded end-to-end run across n8n + MCP + Obsidian.
- **Feeds:** BP, JOB (the story), EXPLORE.

### Day 15 — Fri Jul 10 · Harden + README *(last day before vacation)*
- **Objective:** Leave both builds clean so two weeks off costs nothing.
- **Exercise:** Error handling. Real READMEs (problem → solution → how to run) for the n8n workflow and the MCP server. Commit, tag `v0.1`, record 90-second demos.
- **Proof:** Tagged releases + READMEs + demo videos.
- **Feeds:** JOB (portfolio centerpieces), BP, build-log.

---

## 🌴 Vacation — Jul 13–24 · fully off
The hard build is behind you. No obligation. If a product idea surfaces, drop it in your Obsidian vault and let it go.

---

## Week 4 — Polish + case study (Jul 27–31) · *gap-proof, lower-tech*

### Day 16 — Mon Jul 27 · Re-orient + bug bash
- **Objective:** Confirm the n8n workflow and MCP server still run.
- **Exercise:** Re-run both. Fix rough edges. Re-record demos if anything changed.
- **Proof:** Confirmed-working builds.
- **Feeds:** JOB.

### Day 17 — Tue Jul 28 · Write the deployment-story case study
- **Objective:** Turn the flagship n8n workflow into a narrative.
- **Exercise:** Use `templates/case-study-template.md`: problem → what you built → what it replaces → how it'd deploy in a real team.
- **Proof:** One-page case study.
- **Feeds:** BP (directly), JOB (interview story), EXPLORE (sales asset).

### Day 18 — Wed Jul 29 · Quantify the impact
- **Objective:** Put numbers on it — your signature move.
- **Exercise:** Estimate hours saved per use, error reduction, and what it looks like at scale (1,000+ requests). Add an Impact section.
- **Proof:** Defensible impact numbers in the case study.
- **Feeds:** BP, JOB ("$X / Y% saved" bullets).

### Day 19 — Thu Jul 30 · Second case study — the MCP server
- **Objective:** Show range beyond automation.
- **Exercise:** Write up the Obsidian MCP server as "an AI-accessible second brain" — what it does, who'd want it, how to run it.
- **Proof:** MCP server case study + clean README.
- **Feeds:** JOB (breadth), BP, EXPLORE.

### Day 20 — Fri Jul 31 · Package reusable templates
- **Objective:** Turn the work into IP you own.
- **Exercise:** Export the n8n workflow as JSON (shareable template). Document your existing LinkedIn + AJO Skills as portfolio pieces. These are assets you can reuse across clients.
- **Proof:** Exported workflow JSON + documented Skills.
- **Feeds:** JOB, BP, EXPLORE (productized IP).

---

## Week 5 — Portfolio (Claude Design), build-log, outreach (Aug 3–7)

### Day 21 — Mon Aug 3 · Build the portfolio page *with Claude Design*
- **Objective:** One polished place to point anyone.
- **Exercise:** Use **Claude Design** to design and build a portfolio/landing page linking the n8n workflow, MCP server, case studies, and Skills. (Publish via GitHub Pages or similar.)
- **Proof:** Live portfolio URL.
- **Feeds:** JOB, EXPLORE.

### Day 22 — Tue Aug 4 · Build-log post #1
- **Objective:** Public proof under your AI pillar — practitioner framing.
- **Exercise:** Use `templates/build-log-post-template.md`. Post the flagship n8n workflow deployment story.
- **Proof:** Published post.
- **Feeds:** JOB (visibility), EXPLORE (inbound interest).

### Day 23 — Wed Aug 5 · Post #2 + talking points
- **Objective:** Second post and a reusable talking-points sheet.
- **Exercise:** Post a "lesson learned" (e.g. building the MCP server). Draft 5 talking points mapping each build → a business outcome.
- **Proof:** Post + talking-points doc.
- **Feeds:** JOB (interviews), BP (pitch).

### Day 24 — Thu Aug 6 · Outreach
- **Objective:** Start the conversations.
- **Exercise:** 3–5 connection requests to applied-AI / automation / cross-functional leaders, and/or 2–3 exploration chats about your own practice (use the LinkedIn skill). Log them.
- **Proof:** Sent requests/chats logged.
- **Feeds:** JOB, EXPLORE.

### Day 25 — Fri Aug 7 · Review + next 30 days
- **Objective:** Consolidate and choose your next build.
- **Exercise:** Export the tracker. Write a short retro. Pick the next 30-day target: deeper n8n agents, a published Obsidian community plugin, or a productized n8n template you sell.
- **Proof:** Retro note + tracker export.
- **Feeds:** BP, JOB, EXPLORE.

---

## Your tool stack at a glance

| Tool | Role in the sprint | Cost |
|------|--------------------|------|
| **Anthropic API** | The brain behind every build | pay-as-you-go (small) |
| **Claude Code** | How you build (Days 5, 11+) | your Claude plan |
| **n8n** | Automation/agent flagship (Days 7–9) | free self-hosted (`npx n8n`) |
| **Obsidian** | MCP build target + your build log/second brain | free |
| **Claude Design** | Portfolio page + visuals (Day 21) | your Claude plan |
| **GitHub** | Public home for everything | free |

Free supporting services for realistic demos: Google Sheets, a Discord/Slack incoming webhook, and public APIs (Hacker News, quotes, weather) — no employer systems needed.
