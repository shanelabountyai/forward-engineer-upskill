# Day 8 — n8n + Claude

Goal: put AI *inside* an automation. A workflow takes input text → Claude → structured output. This is the bridge between Day 7 (nodes) and Day 9 (the flagship).

## Run n8n
```bash
npx n8n        # editor at http://localhost:5678
```

## Build: "text in → Claude → structured out"
1. **Manual Trigger** (or **Set** node) to hold an input string — e.g. a short campaign brief.
2. **HTTP Request** node calling the Anthropic API:
   - Method: `POST`
   - URL: `https://api.anthropic.com/v1/messages`
   - Headers: `x-api-key: <your key>`, `anthropic-version: 2023-06-01`, `content-type: application/json`
   - Body (JSON): model `claude-sonnet-4-6`, `max_tokens` ~500, and a `messages` array whose user content is your input text + "return JSON only with keys …".
   - **Tip:** store the API key in n8n **Credentials** (or a header-auth credential), not hardcoded.
   - *Alternative:* use n8n's built-in **Anthropic / AI** node if you'd rather not hand-build the request.
3. Run it. Confirm Claude's response comes back in the node output.
4. **Set / Edit Fields** node to pull the model's text out of the response and (optionally) parse the JSON.

## Confirm you understand
5. Change the input text and re-run — the output should track it. You've now got an AI step you can drop into any workflow.

## ✅ Proof
A workflow that returns a Claude-generated structured result. Screenshot a successful execution; export the workflow JSON.

## Why it feeds the work
This is the reusable "AI node" pattern behind the Day 9 flagship (JOB + BP).
