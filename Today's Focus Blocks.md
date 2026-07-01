# Today's Focus Blocks — Mon Jun 29

Two 60-minute blocks. Start the timer before you open anything.

---

## Block 1 — FDE: Day 4 Tool Use (function calling)
**Goal:** `exercises/day04-tool-use.py` runs end-to-end — Claude calls your tool, gets the result, returns a natural-language answer. Committed to git.

Tool use is the core mechanic behind every MCP server and agent you'll build later. This is the skill FDE roles actually hire for.

### Minute-by-minute

**0:00–0:20 — Read and plan before you touch a key (hard thinking first)**
Open two files side by side:
- `exercises/day04-tool-use.md` (the spec)
- `exercises/day04-tool-use.py` (has Day 3 code — you're replacing it)

Read the spec once, top to bottom. Then close it and answer these on paper or in a comment block:
1. What are the three API calls you'll make? (Send message → get tool_use → send tool_result → get final answer)
2. What does `response.stop_reason == "tool_use"` mean in plain English?
3. What two IDs have to match between your tool_use block and your tool_result block?

If you can't answer #3 from memory, re-read step 7 of the spec. The `tool_use_id` match is the #1 bug beginners hit. Know it before you write a line.

**0:20–0:35 — Write the skeleton (replace Day 3 code)**
Delete everything below the imports in `day04-tool-use.py`. Write this structure from scratch (don't copy-paste — typing it builds the mental model):

```python
import os
import anthropic

client = anthropic.Anthropic()

# 1. Define the tool schema
TOOLS = [
    {
        "name": "get_campaign_status",
        "description": "Returns the live status and spend for a named campaign.",
        "input_schema": {
            "type": "object",
            "properties": {
                "name": {"type": "string", "description": "Campaign name"}
            },
            "required": ["name"]
        }
    }
]

# 2. The stub — fake data, real shape
def get_campaign_status(name: str) -> dict:
    return {"name": name, "status": "live", "spend": 4200}

# 3. First API call — send the user message
# 4. Check stop_reason and extract tool input
# 5. Call your stub
# 6. Second API call — send tool_result with matching tool_use_id
# 7. Print the final answer
```

Now fill in steps 3–7. The second API call's `messages` list must contain: the original user message, Claude's assistant response (the tool_use block), and your tool_result block. All three.

**0:35–0:45 — Run it and fix it**
```bash
cd "/path/to/your/project" && python3 exercises/day04-tool-use.py
```

Expected output: Claude's response should say something about the Spring Launch campaign being live with $4,200 in spend. If you see a Python traceback: read the first error line only and fix that one thing. Common issues:
- `KeyError`: you misspelled a key name in the tool_result block
- `ValidationError`: your tool_result content needs to be a string, not a dict — `json.dumps(result)`
- `stop_reason != "tool_use"`: your user message doesn't trigger the tool — try "What's the status of the Spring Launch campaign?"

**0:45–0:52 — Do the confirmation step (exercise item 9)**
Change the stub return value:
```python
return {"name": name, "status": "paused", "spend": 9800}
```
Run again. Claude should now say "paused" and "$9,800" — if it does, the loop is real and the data is flowing. Change it back or leave it, doesn't matter.

Then add a second tool — `get_budget_remaining` with the same pattern. Send a message that should trigger it. Verify Claude picks the right one.

**0:52–0:57 — Commit and log proof**
```bash
git add exercises/day04-tool-use.py && git commit -m "Day 4: tool use loop — get_campaign_status + get_budget_remaining"
```
Open `tracker.html` → add Day 4 entry: paste the terminal output showing Claude's final natural-language answer. That's your proof.

**0:57–1:00 — Shutdown ritual**
- Save and close `day04-tool-use.py`
- Write this at the top of tomorrow's to-do: "Day 5: build a CLI tool that uses today's tool-use loop as its backend (`exercises/day05-brief-to-plan-cli.md`)"
- Close the terminal. Block done.

### Done looks like
`day04-tool-use.py` runs without errors. Terminal shows Claude's final sentence referencing the campaign name, status, and spend. One git commit. `tracker.html` has a Day 4 entry.

---

## Block 2 — BD: Lab Intelligence Outreach Messages
**Goal:** Four send-ready messages saved to a file, plus three real names written down. Outreach tomorrow is copy-paste, not a decision.

The business plan, pitch deck, and contract exist. The missing piece is the first message sent to a real person. Today you write all four messages so "I'll do it when it's ready" is no longer an excuse.

### Minute-by-minute

**0:00–0:05 — Cold positioning test (hardest thinking goes here)**
Close everything. On paper, write two sentences from memory:
1. What specific problem does Lab Intelligence solve for a CMO?
2. What does a CMO have at day 90 that they didn't have at day 0?

Don't open the business plan. If you can't write it from memory, your pitch isn't tight enough yet — write it anyway. The gaps are the data. This forces clarity before you write a single word to a prospect.

**0:05–0:20 — Message 1: LinkedIn connection request (≤300 characters — hard limit)**
This fires the moment you hit "Connect." They've never heard of you. You have 300 characters.

Rules: One specific pain. No "I help companies." No jargon. Must end with something that earns a reply, not a close.

Draft this three times:
> Draft A: Lead with what you noticed about them
> Draft B: Lead with the pain they're probably feeling right now
> Draft C: Lead with a result, not a service

Pick the one you'd most want to receive if you were a CMO at a 200-person B2B SaaS company who gets 15 LinkedIn requests a week. Delete the other two.

**0:20–0:35 — Message 2: Cold email (≤5 sentences — one sentence per item)**
For CMOs you can't reach on LinkedIn, or for warm follow-up after they accept.

Write exactly one sentence for each:
1. A credible, specific observation about their company or their market right now
2. The exact pain that observation implies (not "marketing ops" — something visceral, like "your SDRs are flying blind on which MQL sources actually close")
3. What you do and who you do it for (one clause, no buzzwords)
4. One proof point — a number or a named outcome from past work
5. A low-friction ask: "15 minutes?" or "Worth a quick note back?"

Then read it out loud. Cut any sentence that's about you rather than them. If sentence 3 is the longest, something's wrong.

**0:35–0:45 — Message 3: LinkedIn DM (already connected, ≤4 sentences)**
They said yes to the connection request. Don't waste it.

Pick ONE trigger to lead with — choose whichever you'd use for your first real target:
- They just raised a round → "When teams scale fast, attribution is usually the first thing that breaks."
- New product launch → "Launching a new line is when GTM motion matters most and usually has the least process behind it."
- They're hiring a Marketing Ops person → "The fact that you're hiring tells me something about where things stand today."

Draft:
> "Congrats on [trigger]. [One sentence naming exactly what breaks in that situation.] That's precisely where I work. Worth 20 minutes to compare notes?"

No ask for a "meeting." No deck. Just one real question.

**0:45–0:50 — Message 4: Follow-up (≤2 sentences)**
Sent 5 days after Message 2 or 3, if no reply.

Rules: Don't apologize for following up. Don't ask if they saw your message. Add one new thing — a stat, an article, a question.

> "Saw [specific, relevant piece of news about their space or company] — thought of your situation immediately. Still happy to connect if the timing is better."

Write it. Then say it out loud. If it sounds like a template, it is — rewrite it until it doesn't.

**0:50–0:55 — The read-aloud test (all four messages)**
Read every message slowly, out loud. Flag anything that sounds like:
- A consulting brochure
- Something you'd never say in a real conversation
- A claim you can't back up with a specific story

Rewrite flagged sentences. Save the final four messages as:
`Lab Intelligence - Outreach Messages.md` in this folder.

**0:55–1:00 — Shutdown ritual**
In the file you just saved, add a section called `## First Three Targets` and write:
- First name, last name, company, title
- Which trigger (round / launch / hiring) applies to each
- Which message you're sending first

Set a calendar block for Wednesday or Thursday to send them. Close the doc. Block done.

### Done looks like
`Lab Intelligence - Outreach Messages.md` exists in this folder with all four messages, each under the word limit. Three real people are named with company and trigger. Nothing needs to be decided before sending — just fill in the brackets.

---

## Between blocks
Real break. 10–15 minutes. Don't check email. Don't "just quickly" start the next block early.
