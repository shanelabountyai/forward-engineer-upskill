# 04 — Target Role: CrowdStrike, Director of AI Operations & Marketing Transformation

*Added 2026-07-01. This is the first concrete job posting validated against the FDE roadmap — use it to pressure-test the plan, not just admire it.*

## The posting (verified facts)

- **Title:** Director, AI Operations & Marketing Transformation (Remote)
- **Company:** CrowdStrike
- **Req:** R29129 — [posting link](https://crowdstrike.wd5.myworkdayjobs.com/en-US/crowdstrikecareers/details/Director--AI-Operations---Marketing-Transformation--Remote-_R29129?q=Marketing+Transformation)
- **Reports to:** VP of Marketing Excellence & Transformation; visibility to CMO and the Marketing Leadership Team (MLT)
- **Comp:** $155,000–$240,000 base (US), plus bonus/equity — per the posting's pay transparency disclosure
- **Posting closes:** 2026-08-23 (per the listing)
- **Level:** Starts as an IC role, with an explicitly stated path to people leadership

## Why this is the right framing (not just "an AI job")

This is a marketing-transformation leadership role that owns the *operational and governance layer* of agentic AI inside a marketing org — not a hands-on engineering role and not a pure strategy/advisory seat. The JD's own words: *"The ideal candidate is more technical than a pure strategist, especially where work involves workflow logic, tool connections, and operational requirements that do not always require engineering support."* That is close to a direct description of [[project-fde-sprint]]'s target positioning: an enterprise operator who can also build.

Core responsibilities per the posting:
- Own agent performance, workflow reliability, output quality, and cost efficiency across agentic marketing systems (campaigns, content, localization, performance, measurement)
- Design human-AI workflows — where agents run autonomously vs. where a human approval gate is required
- Define AI governance: decision rights, what's sanctioned, how new use cases get greenlit
- Build evaluation/feedback infrastructure — "systematic quality loops that make agents measurably better over time"
- Manage prompt architecture, memory systems, and context strategies
- Monitor platform economics — token usage, model selection, cost-per-output
- Lead change management and adoption across marketing teams
- Build and prioritize a feature backlog that engineering executes against (does not write the code, but shapes what gets built)

## What they require vs. what closes the gap

| JD requirement | Status | Closing it |
|---|---|---|
| 15+ years in strategy/consulting/marketing transformation | **Met** — Director, Marketing Ops at PMI; Lumen/CenturyLink | — |
| Demonstrated org transformation, change management in practice | **Met** — $100M budgets, 1,000+ projects, Fortune 500 rebrand | Turn into before/after narrative for this specific JD |
| Strategic storytelling, executive presence | **Met** | — |
| **"Claude Code-level proficiency minimum"** with AI/agentic systems | **Gap, closing** | Anthropic Academy courses (below) + the 25-day FDE sprint builds |
| Design human-AI workflows w/ approval gates | **Partial** | [[project-fde-sprint]] Phase 2 agent/MCP work; explicitly design one workflow with a human checkpoint as a portfolio artifact |
| AI governance (decision rights, sanctioned tools/data) | **Gap, closeable fast** | Write an actual governance framework doc — this is PMO instinct translated to AI decision-rights, a natural extension, not new territory |
| Evaluation/feedback loops for agent quality | **Gap** | Build a lightweight eval on a recurring output (e.g., this tracker or a build-log post): define "good," test variants, track quality over iterations |
| Prompt architecture, memory, context strategy | **In progress** | Already building this via the memory system in this very project — document the "why," not just the "what" |
| Platform economics (token usage, model selection tradeoffs) | **Light gap** | Complete the relevant module in Building with the Claude API — conceptual fluency is enough here, no build required |
| Product thinking / backlog prioritization for engineering | **Met via PMO background** | Reframe existing prioritization experience in AI-feature-backlog language |

## Anthropic Academy — see [[05-anthropic-academy-tracker]] for the course checklist

Structured, certificate-backed courses are the fastest way to put a verifiable answer next to "Claude Code-level proficiency minimum." Certificates support the resume claim; the shipped FDE artifacts *are* the claim.

## Resume/positioning framing

Lead with **"built and operate an agentic marketing-ops system"** — specifics: memory architecture, multi-source validation, human-approval gates — not "completed AI courses." This mirrors the existing stealth-positioning guidance in [[01-roadmap.md]].

## Open question to resolve before applying

What does the FDE sprint's Claude Project training currently cover — API/build track, or something more workflow-specific (governance, eval design)? That determines whether to prioritize governance/eval artifacts or a technical-fluency gap first. Worth answering explicitly before treating this posting as "ready to apply."

## Next actions

- [ ] Decide: apply now (role closes 2026-08-23, well after the Aug 7 sprint end) or wait until the flagship n8n + MCP builds are polished
- [ ] Write the AI governance framework doc as a standalone portfolio artifact (maps directly to a JD bullet)
- [ ] Build the lightweight eval / feedback-loop artifact
- [ ] Document the memory-architecture write-up (in progress in this project already)
- [ ] Complete Anthropic Academy courses — track in [[05-anthropic-academy-tracker]]
- [ ] Rewrite resume bullets to match this JD's exact language (workflow logic, tool connections, governance, evaluation)
