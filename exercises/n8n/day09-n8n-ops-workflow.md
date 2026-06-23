# Day 9 — The Flagship n8n Workflow (end to end)

Goal: a complete "ops" automation entirely on tools you control. This is your portfolio centerpiece for automation. Use sample marketing-ops data — no employer access needed.

## The shape
```
[Webhook / Form intake]
      → [Anthropic: draft a project plan from the brief]
      → [Write result to Google Sheet OR Obsidian]
      → [Notify: email or Discord/Slack webhook]
```

## Step by step
1. **Webhook** node (trigger). Copy its test URL. (Later you can put an n8n **Form** in front of it.)
   - Input shape: `{ "brief": "Launch a Q3 webinar promo across email and social" }`

2. **HTTP Request** node → call the Anthropic API (most reliable, version-independent):
   - Method: `POST`
   - URL: `https://api.anthropic.com/v1/messages`
   - Headers:
     - `x-api-key`: your key (store it in n8n **Credentials**, don't hardcode)
     - `anthropic-version`: `2023-06-01`
     - `content-type`: `application/json`
   - Body (JSON), using the incoming brief:
     ```json
     {
       "model": "claude-sonnet-4-6",
       "max_tokens": 1024,
       "messages": [
         { "role": "user", "content": "Turn this marketing brief into a JSON project plan with tasks, owners, and durations. Return JSON only. Brief: {{ $json.body.brief }}" }
       ]
     }
     ```
   *(Tip: n8n also has a native Anthropic / AI Agent node — either works. The HTTP node teaches you the real request.)*

3. **Set / Code** node → parse the model's text into clean fields (the plan lives in `content[0].text`).

4. **Google Sheets** node (free) → append a row with the brief + plan.
   *Alternative:* write a note to **Obsidian** via your Day 13 MCP `create_note` tool, or via the Local REST API plugin.

5. **Send Email** or **HTTP Request to a Discord/Slack incoming webhook** → notify that a plan is ready.

## ✅ Proof
A working webhook-to-notification run. Record a 60–90 second screen capture of one execution. Export the workflow JSON (Day 20) — that's reusable IP.

## Why this matters
This is the "strategy that ships" story in miniature: a request goes in, AI does the thinking, the result is logged and the team is notified — built on infrastructure you own and can hand to any client.
