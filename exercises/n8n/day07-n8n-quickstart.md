# Day 7 — n8n Quickstart

Goal: understand nodes, connections, and executions by building one real workflow. No code, no employer systems.

## Run n8n
```bash
npx n8n        # editor at http://localhost:5678
```

## Build: "fetch + reshape" workflow
1. **Manual Trigger** — add it; this is your "run" button.
2. **HTTP Request** node → connect it to the trigger.
   - Method: `GET`
   - URL: `https://hacker-news.firebaseio.com/v0/topstories.json`
     (a free public API — returns top story IDs)
3. Run it. You'll see an array of IDs in the output.
4. **Limit** node → set the limit to `5`. This keeps the first 5 items (each ID is its own n8n item from the HTTP Request).
5. Run the whole workflow with the Manual Trigger.

## What you just learned
- Nodes pass JSON to each other along the connections.
- Each node shows its input and output — that's how you debug.
- "Executions" (left sidebar) logs every run.

## ✅ Proof
A workflow that runs end to end. Screenshot a successful execution; save/export the workflow.

## Stretch
Swap the URL for a quotes API (`https://zenquotes.io/api/random`) and reshape the response. The point is fluency with nodes, not the data.
