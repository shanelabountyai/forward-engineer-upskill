# brief-to-plan

A Python CLI that turns a marketing brief into a structured project plan using Claude.

## Setup

```bash
python3 -m pip install -r requirements.txt --break-system-packages
export ANTHROPIC_API_KEY="your-api-key"
```
(If `pip3` works for you, `pip3 install -r requirements.txt --break-system-packages` is equivalent.)

## Usage

Pass a brief as a file:

```bash
python3 brief_to_plan.py sample_brief.txt
```

Or pipe from stdin:

```bash
cat sample_brief.txt | python3 brief_to_plan.py
```

### Options

| Flag | Description |
|------|-------------|
| `--format json\|table` | Output format (default: `json`) |
| `--model` | Claude model to use (default: `claude-sonnet-4-6`) |

### Table output

```bash
$ python3 brief_to_plan.py sample_brief.txt --format table

============================================================
  PROJECT PLAN
============================================================

  Summary: Full-stack marketing campaign for CloudSync Pro launch on September 15th,
  covering landing page, blog posts, social media, email drip, press release, and
  paid search ads targeting small business owners.

  ID   Task                           Owner              Days   Depends On
  ---- ------------------------------ ------------------ ------ ---------------
  1    Project Kickoff & Brief Alignment Project Manager    1      —
  2    Define Key Messaging & Value Proposition Copywriter         2      1
  3    Develop Visual Brand & Style Guide Designer           3      1
  4    Landing Page Wireframe & UX Design Designer           3      2, 3
  5    Landing Page Copywriting       Copywriter         2      2
  6    Landing Page Development       Developer          4      4, 5
  7    Landing Page QA & Testing      Developer          2      6
  8    Landing Page Launch            Project Manager    1      7
  9    Blog Post 1 - Product Announcement Copywriter         2      2
  10   Blog Post 2 - Feature Deep-Dive Copywriter         3      2
  11   Blog Post 3 - Customer Testimonials Copywriter         3      2
  12   Blog Posts Editorial Review    Project Manager    2      9, 10, 11
  ...

============================================================
```

### JSON output (default)

```bash
$ python3 brief_to_plan.py sample_brief.txt
```

```json
{
  "summary": "Full-stack marketing campaign for CloudSync Pro launch on September 15th...",
  "tasks": [
    {
      "id": 1,
      "name": "Project Kickoff & Brief Alignment",
      "owner": "Project Manager",
      "duration_days": 1,
      "dependencies": []
    },
    {
      "id": 2,
      "name": "Messaging & Positioning Framework",
      "owner": "Copywriter",
      "duration_days": 3,
      "dependencies": [1]
    },
    {
      "id": 3,
      "name": "Brand & Visual Style Guide for Campaign",
      "owner": "Designer",
      "duration_days": 3,
      "dependencies": [1]
    }
  ]
}
```

## How it works

1. Reads a marketing brief from a file or stdin
2. Sends it to Claude with a project-manager system prompt
3. Uses structured outputs (JSON schema) to guarantee a valid plan
4. Prints a formatted table or raw JSON
