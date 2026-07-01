#!/usr/bin/env python3
"""Turn a marketing brief into a structured project plan using Claude."""

import argparse
import json
import sys

import anthropic

SYSTEM_PROMPT = """You are a marketing project manager. Given a marketing brief,
produce a structured project plan. Identify concrete tasks, assign logical owner
roles (e.g. "Copywriter", "Designer", "Developer", "Project Manager"),
estimate realistic durations in business days, and note dependencies between tasks
by referencing task IDs. Also produce a one-line summary of the entire project."""

PLAN_SCHEMA = {
    "type": "object",
    "properties": {
        "summary": {
            "type": "string",
            "description": "One-line summary of the project plan",
        },
        "tasks": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {"type": "integer", "description": "Unique task ID"},
                    "name": {"type": "string", "description": "Short task name"},
                    "owner": {"type": "string", "description": "Role responsible"},
                    "duration_days": {"type": "integer", "description": "Estimated business days"},
                    "dependencies": {
                        "type": "array",
                        "items": {"type": "integer"},
                        "description": "IDs of tasks that must finish first",
                    },
                },
                "required": ["id", "name", "owner", "duration_days", "dependencies"],
                "additionalProperties": False,
            },
        },
    },
    "required": ["summary", "tasks"],
    "additionalProperties": False,
}


def read_brief(path: str | None) -> str:
    if path:
        with open(path) as f:
            return f.read()
    if not sys.stdin.isatty():
        return sys.stdin.read()
    print("Error: provide a file path or pipe text via stdin.", file=sys.stderr)
    sys.exit(1)


def generate_plan(brief: str, model: str) -> dict:
    client = anthropic.Anthropic()
    response = client.messages.create(
        model=model,
        max_tokens=4096,
        system=SYSTEM_PROMPT,
        output_config={
            "format": {
                "type": "json_schema",
                "schema": PLAN_SCHEMA,
            }
        },
        messages=[{"role": "user", "content": brief}],
    )
    text = next(b.text for b in response.content if b.type == "text")
    return json.loads(text)


def print_plan(plan: dict) -> None:
    print(f"\n{'=' * 60}")
    print(f"  PROJECT PLAN")
    print(f"{'=' * 60}")
    print(f"\n  Summary: {plan['summary']}\n")
    print(f"  {'ID':<4} {'Task':<30} {'Owner':<18} {'Days':<6} {'Depends On'}")
    print(f"  {'-'*4} {'-'*30} {'-'*18} {'-'*6} {'-'*15}")
    for t in plan["tasks"]:
        deps = ", ".join(str(d) for d in t["dependencies"]) if t["dependencies"] else "—"
        print(f"  {t['id']:<4} {t['name']:<30} {t['owner']:<18} {t['duration_days']:<6} {deps}")
    print(f"\n{'=' * 60}\n")


def main():
    parser = argparse.ArgumentParser(description="Turn a marketing brief into a project plan.")
    parser.add_argument("file", nargs="?", help="Path to a brief text file (or pipe via stdin)")
    parser.add_argument("--format", choices=["json", "table"], default="json",
                        help="Output format (default: json)")
    parser.add_argument("--model", default="claude-sonnet-4-6", help="Claude model to use")
    args = parser.parse_args()

    brief = read_brief(args.file)
    if not brief.strip():
        print("Error: brief is empty.", file=sys.stderr)
        sys.exit(1)
    plan = generate_plan(brief, args.model)

    if args.format == "table":
        print_plan(plan)
    else:
        print(json.dumps(plan, indent=2))


if __name__ == "__main__":
    main()
