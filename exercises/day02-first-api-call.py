"""
Day 2 — Your first Anthropic API call.

Run it:
    pip3 install anthropic --break-system-packages
    export ANTHROPIC_API_KEY="sk-ant-..."
    python3 day02-first-api-call.py

Exercises:
  1. Run it as-is and confirm you get a response.
  2. Change PROMPT to something about marketing ops.
  3. Change the model or max_tokens and see what happens.
  4. Commit it to your repo with: git add . && git commit -m "Day 2: first API call"

Proof of skill: committed script + a screenshot of the printed output.
"""

import os
from anthropic import Anthropic

# The SDK automatically reads ANTHROPIC_API_KEY from your environment.
client = Anthropic()

PROMPT = "In two sentences, explain what a 'forward deployed engineer' does. This is updated by Shane"

def main():
    if not os.environ.get("ANTHROPIC_API_KEY"):
        raise SystemExit("Set ANTHROPIC_API_KEY first (see day01 checklist).")

    response = client.messages.create(
        model="claude-sonnet-4-6",   # fast + capable; fine for everything in this sprint
        max_tokens=400,
        messages=[{"role": "user", "content": PROMPT}],
    )

    # response.content is a list of blocks; for plain text, grab the text blocks.
    text = "".join(block.text for block in response.content if block.type == "text")
    print(text)

if __name__ == "__main__":
    main()
