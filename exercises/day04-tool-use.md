# Day 4 — Tool Use (function calling)

Goal: give the model a tool, run the request → tool_use → tool_result loop. This is the core mechanic behind every agent and connector you'll build later.

## Build it
1. Copy your Day 3 script to `day04-tool-use.py`.
2. Define **one tool** in the `tools=[...]` parameter — e.g. `get_campaign_status` with an input schema of `{ "name": string }`.
3. Write a Python stub function that returns fake data: `def get_campaign_status(name): return {"name": name, "status": "live", "spend": 4200}`.
4. Send a message that should trigger it: "What's the status of the Spring Launch campaign?"

## Run the loop
5. Inspect the response. When `response.stop_reason == "tool_use"`, find the `tool_use` block and read its `input`.
6. Call your stub with that input.
7. Send a **second** API call appending a `tool_result` block (matching the `tool_use_id`) with your stub's return value.
8. Print the model's final natural-language answer.

## Confirm you understand
9. Add a second tool or change the stub data and verify the model picks the right tool and reflects the new data.

## Commit
```bash
git add . && git commit -m "Day 4: tool use loop"
```

## ✅ Proof
A working tool-use script where the model calls your tool and uses the result in its answer.

## Why it feeds the work
Tool use is *the* FDE skill — it's what MCP servers expose. Flag this as a JOB highlight.
