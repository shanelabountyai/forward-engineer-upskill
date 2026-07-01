# Day 9 — The Flagship n8n Workflow (end to end)

Goal: a complete "ops" automation entirely on tools you control. This is your portfolio centerpiece for automation. Use sample marketing-ops data — no employer access needed.

## The shape
```
[Webhook / Form intake]
      → [Anthropic: draft a project plan from the brief]
      → [Code node: parse plan + build Obsidian note]
      → [HTTP Request: create note in Obsidian (Local REST API)]
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

3. **Code** node → parse the model's text (the plan JSON lives in `content[0].text`) and build the Obsidian note content + filename.
   - See the exact JS below — it also slugifies the brief into a safe filename and builds a markdown note with frontmatter and a checklist.

4. **HTTP Request** node → create the note directly in your vault via the **Obsidian Local REST API** community plugin (no Day 13 MCP dependency needed for this).
   - Method: `PUT`
   - URL: `={{ 'https://127.0.0.1:27124/vault/' + $json.notePath }}`
   - Authentication: **Header Auth** credential → Header name `Authorization`, value `Bearer <your Local REST API key>`
   - Headers: `Content-Type: text/markdown`
   - Body: **Raw/Text**, value `={{ $json.noteBody }}`
   - Options → enable **"Ignore SSL Issues / Allow Unauthorized Certs"** (the plugin uses a self-signed cert on port 27124). If you'd rather skip certs entirely, enable the plugin's **non-encrypted HTTP server** in Obsidian settings and hit `http://127.0.0.1:27123/vault/...` instead.
   - `PUT` creates the file if it doesn't exist and overwrites if it does — since the filename is unique per run (date + slug), this always creates a fresh note.
   - **Gotcha:** this only works if n8n runs on the *same machine* as Obsidian (localhost). If you move to n8n Cloud later, you'd need a tunnel (e.g. ngrok) pointed at your Obsidian REST API port.

5. **Send Email** or **HTTP Request to a Discord/Slack incoming webhook** → notify that a plan is ready, e.g. `✅ New project plan created: Plans/{{ $json.filename }}`.

## Step 3 in full: the Code node

Language: JavaScript (n8n Code node, "Run Once for All Items" or "Run Once for Each Item" — either works for a single webhook run).

```javascript
const response = $input.first().json;
const raw = response.content[0].text;

let plan;
try {
  plan = JSON.parse(raw);
} catch (e) {
  plan = { tasks: [], error: 'Could not parse model output as JSON', raw };
}

const brief = $('Webhook').first().json.body.brief;
const now = new Date();
const dateStr = now.toISOString().slice(0, 10); // e.g. 2026-07-01

const slug = brief
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '')
  .slice(0, 60);

const filename = `${dateStr}-${slug}.md`;
const notePath = `Plans/${filename}`;

const taskLines = (plan.tasks || [])
  .map(t => `- [ ] **${t.task || t.name || 'Untitled task'}** — Owner: ${t.owner || 'TBD'} — Duration: ${t.duration || 'TBD'}`)
  .join('\n');

const noteBody = `---
brief: "${brief.replace(/"/g, '\\"')}"
created: ${now.toISOString()}
source: n8n-ops-workflow
---

# Project Plan: ${brief}

## Tasks
${taskLines}

## Raw model output
\`\`\`json
${JSON.stringify(plan, null, 2)}
\`\`\`
`;

return [{ json: { filename, notePath, noteBody, brief, plan } }];
```

Adjust the `Plans/` folder to whatever folder already exists in your vault (create it once manually first — the plugin won't auto-create parent folders on every setup).

## ✅ Proof
A working webhook-to-notification run, with a real note landing in your Obsidian vault. Record a 60–90 second screen capture of one execution (webhook fires → Obsidian note appears → notification arrives). Export the workflow JSON (Day 20) — that's reusable IP.

## Why this matters
This is the "strategy that ships" story in miniature: a request goes in, AI does the thinking, the result is logged and the team is notified — built on infrastructure you own and can hand to any client.
