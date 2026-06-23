"""
Day 3 — Structured output from the Anthropic API.

Run it:
    python3 day03-structured-output.py

Goal: get the model to return valid JSON every time by engineering the prompt.
"""

import os
import json
from anthropic import Anthropic

client = Anthropic()

# A short marketing-ops brief as the input text
BRIEF = """
Q3 Campaign Brief — Marketing Ops
We need to launch a nurture email sequence for mid-market leads who downloaded
our ROI calculator but haven't booked a demo. Sequence should run 4 weeks,
3 emails per week. Owner: Shane. Deadline: July 15. Budget: $0 (in-house only).
Biggest risk: low open rates due to crowded inbox.
"""

PROMPT = f"""You are a marketing-ops analyst. Analyze the brief below and return a structured summary.

BRIEF:
{BRIEF}

Return ONLY valid JSON with these keys:
- summary (string): one sentence describing the campaign goal
- priority (string): one of high | med | low
- tasks (array of strings): 3-5 concrete next steps to execute this brief

No prose, no markdown fences. Valid JSON only."""

def main():
    if not os.environ.get("ANTHROPIC_API_KEY"):
        raise SystemExit("Set ANTHROPIC_API_KEY first (see day01 checklist).")

    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=400,
        messages=[{"role": "user", "content": PROMPT}],
    )

    text = "".join(block.text for block in response.content if block.type == "text")
    print("--- Raw response ---")
    print(text)

 # Parse to verify it's valid JSON
    try:
        parsed = json.loads(text)
        print("\n--- Parsed ---")
        print(f"Summary:  {parsed['summary']}")
        print(f"Priority: {parsed['priority']}")
        print(f"Tasks:")
        for task in parsed["tasks"]:
            print(f"  - {task}")
    except json.JSONDecodeError as e:
        print(f"\n❌ JSON parse failed: {e}")
        print("Raw text was:")
        print(text)
if __name__ == "__main__":
    main()
