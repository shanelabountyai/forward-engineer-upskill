# Day 3 — Structured Output (reliable JSON)

Goal: make the model return JSON you can actually parse and trust. This is the difference between a demo and something you'd put in a workflow.

## Build it
1. Copy `day02-first-api-call.py` to `day03-structured-output.py`.
2. Rewrite the prompt to ask for **JSON only** — e.g. "Return ONLY valid JSON with keys `summary` (string), `priority` (high|med|low), `tasks` (array of strings). No prose, no markdown fences."
3. Feed it a short marketing-ops brief as input text.
4. Parse the response with `json.loads()` and print one field (e.g. `data["priority"]`).

## Make it production-safe
5. Wrap the parse in `try/except json.JSONDecodeError`. On failure, print the raw text so you can see what broke.
6. **Break it on purpose once:** change the prompt to invite prose ("explain your reasoning, then give JSON"). Watch `json.loads()` fail. Then fix the prompt and confirm it parses again. You now know the failure mode.
7. (Optional) Strip stray markdown fences before parsing: `text.strip().removeprefix("```json").removesuffix("```")`.

## Commit
```bash
git add . && git commit -m "Day 3: structured JSON output + error handling"
```

## ✅ Proof
A script that returns and safely parses JSON, plus your note on what caused the one failure and how you fixed it.

## Why it feeds the work
"Reliable outputs = production-readiness" — this is a BP + JOB talking point. Note it for the build log.
