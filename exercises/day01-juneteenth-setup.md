# Day 1 — Juneteenth Setup Checklist

A full day is plenty. Goal: by tonight you have your personal toolchain running and a public repo, so Monday you build instead of install. None of this needs an employer login.

## 1. Core dev tools
- [ ] **VS Code** — https://code.visualstudio.com
- [ ] **Python 3.11+** — https://python.org (verify: `python3 --version`)
- [ ] **Node.js LTS** — https://nodejs.org (verify: `node --version`)
- [ ] **Git** — usually preinstalled on macOS (verify: `git --version`)
- [ ] **Claude Code** — install per https://docs.claude.com ; run `claude` once to confirm it launches

## 2. Accounts & keys
- [x] **GitHub account** — https://github.com (done — username `shanelabountyai`)
- [ ] **Anthropic API key** — https://console.anthropic.com → API keys → create. Save it safely.

## 3. n8n (your automation flagship engine)
The fastest way to run it locally:
```bash
npx n8n
```
Then open the editor at **http://localhost:5678**. (Alternative: Docker — see https://docs.n8n.io.)
- [ ] n8n editor opens in your browser
- [ ] Take a screenshot for your Day 1 proof

## 4. Obsidian (your second brain + MCP build target)
- [ ] Install **Obsidian** — https://obsidian.md
- [ ] Create a new vault called **FDE** in a folder you'll remember (you'll point the MCP server at this path in Week 3)
- [ ] Make one note: `Build Log.md`

## 5. Create your portfolio repo
```bash
mkdir fde-portfolio && cd fde-portfolio
git init
printf "# Forward Deployed Portfolio — Shane LaBounty\nBuilds, automations, and connectors from my forward-deployed sprint.\n" > README.md
git add README.md && git commit -m "Day 1: kickoff"
```
Create an empty **public** repo `fde-portfolio` on GitHub, then:
```bash
git remote add origin https://github.com/shanelabountyai/fde-portfolio.git
git branch -M main && git push -u origin main
```

## 6. Set your API key (persists across sessions)
```bash
echo 'export ANTHROPIC_API_KEY="sk-ant-..."' >> ~/.zshrc
source ~/.zshrc
```

## 7. Smoke test
```bash
pip3 install anthropic --break-system-packages
python3 day02-first-api-call.py   # copy this file in from /exercises
```
A printed response = you're done.

## ✅ Proof of skill
Public `fde-portfolio` repo + screenshots of the **n8n editor** and your **Obsidian vault**. Paste the repo URL into the tracker (Day 1 proof field).

> Working > perfect. Tomorrow you write real code.
