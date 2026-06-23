# Day 5 — Build a real tool *with Claude Code*

Goal: use Claude Code to build a useful CLI fast — a marketing brief → structured project plan. Today is about building *with* the agent, not hand-coding everything.

## Set up
1. `mkdir brief-to-plan && cd brief-to-plan`, then launch `claude`.
2. Tell Claude Code the spec in plain English:
   > "Build a Python CLI that takes a marketing brief (a text file or stdin) and uses the Anthropic API to return a structured project plan as JSON: tasks (each with owner, duration_days, dependencies), plus a one-line summary. Print it nicely. Include a README."

## Iterate with the agent
3. Let Claude Code scaffold it. Run it against a real-sounding brief.
4. Push on it: "add `--format table` for a readable view," "handle an empty brief gracefully," "make the JSON match this schema." You're directing, it's typing.
5. Keep a sample input file (`sample-brief.txt`) and capture the output.

## Ship it
6. Move/copy the project into your `fde-portfolio` repo.
7. Commit:
```bash
git add . && git commit -m "Day 5: brief-to-plan CLI built with Claude Code"
```

## ✅ Proof
`brief-to-plan` CLI in your repo + a sample input and its generated plan output.

## Why it feeds the work
This is a concrete, demoable asset (BP + EXPLORE) and direct evidence of "I build with Claude Code" (JOB). Save the sample I/O — you'll demo it on Day 6.
