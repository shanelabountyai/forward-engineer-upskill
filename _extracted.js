
const STORE_KEY = "fde_tracker_v1";

// phase: 0 setup, 1 api, 2 integrate+mcp, 3 portfolio. Vacation rendered as a divider.
const DAYS = [
  {id:1,  date:"Fri Jun 19", phase:0, title:"Setup (Juneteenth, full day)", obj:"Personal toolchain + a public repo.", ex:"Install Claude Code, n8n (npx n8n), Obsidian; get API key; create public fde-portfolio repo.", feeds:["JOB","EXPLORE"], file:"exercises/day01-juneteenth-setup.md"},
  {id:2,  date:"Mon Jun 22", phase:1, title:"First API call", obj:"Make your first Anthropic API call from code.", ex:"Run day02-first-api-call.py, change the prompt, commit.", feeds:["JOB"], file:"exercises/day02-first-api-call.py"},
  {id:3,  date:"Tue Jun 23", phase:1, title:"Structured output", obj:"Get reliable JSON back from the model.", ex:"Prompt for JSON only; parse it; handle a parse error.", feeds:["JOB","BP"], file:"exercises/day03-structured-output.md"},
  {id:4,  date:"Wed Jun 24", phase:1, title:"Tool use (function calling)", obj:"Give the model a tool and run the loop.", ex:"Define get_campaign_status(); handle tool_use to tool_result.", feeds:["JOB","BP"], file:"exercises/day04-tool-use.md"},
  {id:5,  date:"Thu Jun 25", phase:1, title:"Build a tool with Claude Code", obj:"Use Claude Code to build something useful, fast.", ex:"A CLI: marketing brief to structured project plan (JSON).", feeds:["BP","JOB","EXPLORE"], file:"exercises/day05-brief-to-plan-cli.md"},
  {id:6,  date:"Fri Jun 26", phase:1, title:"Document Week 1 in Obsidian", obj:"Make the week legible; start your build log.", ex:"READMEs, an Obsidian Build Log note, a 60-sec demo.", feeds:["JOB"], file:"exercises/day06-document-week1.md"},
  {id:7,  date:"Mon Jun 29", phase:2, title:"First n8n workflow", obj:"Learn nodes, connections, executions.", ex:"Manual Trigger to HTTP Request (public API) to Set to output.", feeds:["JOB","EXPLORE"], file:"exercises/n8n/day07-n8n-quickstart.md"},
  {id:8,  date:"Tue Jun 30", phase:2, title:"n8n + Claude", obj:"Put AI inside an automation.", ex:"HTTP/AI node: text in to Claude to structured output.", feeds:["JOB","BP"], file:"exercises/n8n/day08-n8n-claude.md"},
  {id:9,  date:"Wed Jul 1",  phase:2, title:"Flagship n8n workflow", obj:"A complete ops automation, end to end.", ex:"Intake to Claude plan to write to Obsidian to notify.", feeds:["BP","JOB","EXPLORE"], file:"exercises/n8n/day09-n8n-ops-workflow.md"},
  {id:10, date:"Thu Jul 2",  phase:2, title:"Meet MCP", obj:"Understand MCP by running one.", ex:"Clone an example server, connect to Claude, call a tool.", feeds:["JOB"], file:"exercises/day10-meet-mcp.md"},
  {id:11, date:"Mon Jul 6",  phase:2, title:"Scaffold your MCP server", obj:"Stand up your own server (with Claude Code).", ex:"Use mcp-server-starter/; stub tool search_notes.", feeds:["JOB","BP"], file:"exercises/mcp-server-starter/README.md"},
  {id:12, date:"Tue Jul 7",  phase:2, title:"Read your Obsidian vault", obj:"Return real data through MCP.", ex:"Implement search_notes to read .md files from your vault.", feeds:["BP","JOB"], file:"exercises/day12-read-vault.md"},
  {id:13, date:"Wed Jul 8",  phase:2, title:"Write to your vault", obj:"Let the connector do work.", ex:"Add create_note / append_to_note; test via Claude.", feeds:["BP","JOB"], file:"exercises/day13-write-vault.md"},
  {id:14, date:"Thu Jul 9",  phase:2, title:"Connect the pieces", obj:"Multi-tool, multi-step value.", ex:"Claude reads notes to n8n processes to result back in Obsidian.", feeds:["BP","JOB","EXPLORE"], file:"exercises/day14-connect-pieces.md"},
  {id:15, date:"Fri Jul 10", phase:2, title:"Harden + README (pre-vacation)", obj:"Leave both builds clean before two weeks off.", ex:"Error handling, READMEs, tag v0.1, 90-sec demos.", feeds:["JOB","BP"], file:"exercises/day15-harden-readme.md"},
  {id:16, date:"Mon Jul 27", phase:3, title:"Re-orient + bug bash", obj:"Confirm both builds still run.", ex:"Re-run n8n + MCP, fix edges, re-record demos.", feeds:["JOB"], file:"exercises/day16-bug-bash.md"},
  {id:17, date:"Tue Jul 28", phase:3, title:"Write the case study", obj:"Turn the n8n flagship into a narrative.", ex:"Use case-study-template.md: problem to build to replaces to deploy.", feeds:["BP","JOB","EXPLORE"], file:"exercises/day17-case-study.md"},
  {id:18, date:"Wed Jul 29", phase:3, title:"Quantify the impact", obj:"Put numbers on it (your signature move).", ex:"Hours saved, error reduction, at-scale; add Impact section.", feeds:["BP","JOB"], file:"exercises/day18-quantify-impact.md"},
  {id:19, date:"Thu Jul 30", phase:3, title:"Second case study (MCP server)", obj:"Show range beyond automation.", ex:"Write up the Obsidian MCP server as an AI second brain.", feeds:["JOB","BP","EXPLORE"], file:"exercises/day19-mcp-case-study.md"},
  {id:20, date:"Fri Jul 31", phase:3, title:"Package reusable templates", obj:"Turn the work into IP you own.", ex:"Export n8n workflow JSON; document LinkedIn + AJO Skills.", feeds:["JOB","BP","EXPLORE"], file:"exercises/day20-package-templates.md"},
  {id:21, date:"Mon Aug 3",  phase:3, title:"Portfolio page (Claude Design)", obj:"One polished place to point people.", ex:"Design + build a portfolio linking your builds; publish it.", feeds:["JOB","EXPLORE"], file:"exercises/day21-portfolio-page.md"},
  {id:22, date:"Tue Aug 4",  phase:3, title:"Build-log post #1", obj:"Public proof under your AI pillar.", ex:"Use build-log-post-template.md; flagship n8n story.", feeds:["JOB","EXPLORE"], file:"exercises/day22-build-log-post.md"},
  {id:23, date:"Wed Aug 5",  phase:3, title:"Post #2 + talking points", obj:"Second post + reusable talking points.", ex:"Lesson-learned post; 5 build to outcome talking points.", feeds:["JOB","BP"], file:"exercises/day23-post2-talking-points.md"},
  {id:24, date:"Thu Aug 6",  phase:3, title:"Outreach", obj:"Start the conversations.", ex:"3-5 stealth/exploration chats with applied-AI leaders.", feeds:["JOB","EXPLORE"], file:"exercises/day24-outreach.md"},
  {id:25, date:"Fri Aug 7",  phase:3, title:"Review + next 30 days", obj:"Consolidate; pick your next build.", ex:"Export tracker, retro, choose next: deeper n8n / Obsidian plugin / template.", feeds:["BP","JOB","EXPLORE"], file:"exercises/day25-review-next30.md"},
];

const EXSRC = {};
const POSTS = {"1": "Day 1 of teaching myself to build AI systems end-to-end — not just advise on them.\n\nSpent today standing up the workbench: Claude Code, a local n8n instance, an Obsidian vault, a live API key, and a public repo.\n\n15 years in marketing ops taught me to scope and buy these systems. The next chapter is building them myself.\n\n25 working days. One shipped proof a day. All public.", "2": "First line of code I've written that talks to an LLM. ✅\n\nPython → prompt → response → committed.\n\nSmall, but it's the line between 'I get how AI works' and 'I build with it.' I'm done staying on the advising side of that line.\n\nDay 2/25.", "3": "Getting an AI to *talk* is easy. Getting it to return data your systems can actually use is the real job.\n\nToday: forced clean JSON out of the model, parsed it, then broke it on purpose to see the failure mode and handle it.\n\nReliable outputs are what separate a demo from production. Day 3/25.", "4": "Today I gave a model a tool and let it decide when to use it.\n\nRequest → the model asks for data → my code answers → it finishes the job. That loop is the engine behind every AI agent and connector.\n\nLearning the mechanism, not just the buzzword. Day 4/25.", "5": "Built a real tool today: feed it a marketing brief, it returns a structured project plan — tasks, owners, durations.\n\nThe twist: I built it *with* Claude Code, directing the agent instead of hand-typing every line.\n\nThis is the workflow I think most teams are about to adopt. Day 5/25.", "6": "One week in. What I couldn't do last Monday and can now: call an LLM from code, force reliable JSON, run a tool-use loop, and ship a small CLI built with an AI agent.\n\nWrote it all up and recorded a 60-second demo. If it isn't documented, it didn't happen. Day 6/25.", "7": "Started on automation this week. Built my first n8n workflow: trigger → pull live data from an API → reshape it → out.\n\nNo code, all nodes — but now I can see exactly how data moves through an automation. That visibility is the whole point. Day 7/25.", "8": "Put an AI step *inside* an automation today: text goes in, Claude returns structured output, the workflow keeps moving.\n\nThis is the pattern I keep seeing teams want — AI as one reliable node in a larger process, not a chatbot off to the side. Day 8/25.", "9": "Shipped my first end-to-end ops automation today:\n\nintake form → Claude drafts a project plan → logged automatically → team gets notified.\n\nThe kind of workflow that quietly removes hours of manual coordination every week. Built entirely on tools I control. Day 9/25.", "10": "Spent today getting hands-on with MCP — the protocol that lets AI safely plug into real systems.\n\nRan an example server, connected it to Claude, called a live tool. Most people are still reading about this; building one is next.\n\nDay 10/25.", "11": "Started building my own MCP server today — a connector that lets Claude work directly with my knowledge base.\n\nSkeleton's up, first tool registered and showing in Claude. This is the centerpiece of the build. Day 11/25.", "12": "My connector returned real data for the first time today — Claude searching and pulling notes straight from my own knowledge base over MCP.\n\nThe moment it stopped being a demo and started being a tool. Day 12/25.", "13": "Today my AI connector started doing work, not just reading it — creating and updating notes in my knowledge base on command.\n\nRead + write is the line where a connector becomes genuinely useful. Also added guardrails so it can't write where it shouldn't. Day 13/25.", "14": "Connected all three builds today: Claude reads my notes through my MCP server → an n8n workflow processes them → the result lands back as a new note.\n\nOne flow, three tools I built, orchestrated end-to-end. The demo I'm most proud of so far. Day 14/25.", "15": "Last build day before two weeks off. Spent it making both flagship builds bulletproof: error handling, real READMEs, tagged release, fresh demos.\n\nLeaving it clean so it still tells its own story when I'm back. Good engineering is mostly the unglamorous part. Day 15/25.", "16": "Back from a break. First job: confirm everything I built still runs.\n\nRe-ran both flagships, fixed the rough edges, re-recorded the demos. Re-entry day. Day 16/25.", "17": "The build is only half the work — the other half is making it legible to someone who wasn't there.\n\nWrote up my flagship automation as a one-page case study: the problem, what I built, what it replaces, how it'd deploy on a real team. Day 17/25.", "18": "Put numbers on the build today. Hours saved per run, error reduction, what it looks like at 1,000+ requests.\n\nEvery figure tied to a stated assumption — defensible beats impressive. Quantifying impact has been my move for 15 years; same rigor, new kind of work. Day 18/25.", "19": "Wrote up my second build today — the MCP server — as an AI-accessible 'second brain.'\n\nAutomation and connectors are two different muscles, and I wanted to show both. Day 19/25.", "20": "Turned the work into assets I own today: exported my automation as a reusable template and documented the Skills I've built.\n\nBuild once, reuse across contexts. That's how a practice compounds. Day 20/25.", "21": "Put everything in one place today — a portfolio page linking my automation, my MCP connector, the case studies, and the numbers.\n\nOne link to point anyone to. Built and shipped it with Claude Design. Day 21/25.", "22": "Sharing the flagship: an ops automation that turns an intake form into a drafted, logged, and routed project plan — no manual coordination.\n\nHere's the problem it solves and how it'd drop into a real team. [link]\n\nDay 22/25.", "23": "A lesson from building an AI connector from scratch: the hard part isn't the model, it's the plumbing — safe reads, safe writes, clear boundaries.\n\nWrote up what I learned, and boiled the whole sprint into five build → business-outcome talking points. Day 23/25.", "24": "Twenty-four days of building in public, and the conversations are starting.\n\nIf you're working on applied AI, automation, or connecting these systems to how teams actually work — I'd genuinely like to compare notes. Reaching out to a few of you this week. Day 24/25.", "25": "25 days ago I could spec AI solutions. Today I can build them — automations, an MCP connector, case studies with real numbers, all shipped and public.\n\nWrote the retro and picked the next build. The gap between advising and building is closeable. Here's the proof. ▶️"};

let state = load();

function load(){
  let s;
  try { s = JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
  catch(e){ s = {}; }
  // Day 9 shipped — seed done + gotcha notes once, without clobbering anything you've already entered.
  if (!s[9] || (!s[9].done && !s[9].proof && !s[9].notes)) {
    s[9] = Object.assign({done:false, proof:"", notes:""}, s[9]||{}, {
      done: true,
      notes: "Gotchas hit building this: (1) Obsidian Local REST API over HTTPS on 127.0.0.1 throws a Node TLS SNI error (IP address not allowed as SNI) — switched to the plugin's plain HTTP server on 127.0.0.1:27123 instead. (2) n8n's Header Auth credential has two separate name fields — the credential's display label vs. the literal header key. The header key must be exactly 'Authorization' or 'x-api-key', nothing else, or you get 'Header name must be a valid HTTP token'. (3) A 401 from Anthropic is almost always a stale/mistyped key — verify with a standalone curl call before touching n8n. (4) $('Webhook') only has data when the whole chain runs from a real triggered webhook call, not when testing a single downstream node in isolation."
    });
  }
  // Day 10 shipped — seed done + change-in-approach notes once, without clobbering anything you've already entered.
  if (!s[10] || (!s[10].done && !s[10].proof && !s[10].notes)) {
    s[10] = Object.assign({done:false, proof:"", notes:""}, s[10]||{}, {
      done: true,
      notes: "Changed approach from the original plan: instead of cloning an example server off GitHub and hand-editing claude_desktop_config.json, installed the official filesystem MCP server as a Claude Desktop extension (Settings > Extensions) pointed at a scoped folder (Filesystemaccess) — the current documented mechanism, no manual JSON or restart needed. Along the way: (1) the live app config file on this machine has a different schema than older public docs describe (no mcpServers key, just preferences/coworkUserFilesPath/etc.) — a sign the Extensions UI has replaced hand-edited config as the primary path. (2) Anthropic's docs are inconsistent about whether local MCP servers work inside Cowork sessions specifically — an older support article says no, a newer 'Cowork desktop architecture' article (updated same day) says the agent loop runs local MCP servers natively unless an admin disables it — worth re-checking if this matters later. (3) Verified the reference filesystem server's tool-call mechanics independently in a sandbox (listed its 14 tools, called read_text_file, got real file content back) before touching the live app, to separate 'does MCP work' from 'does this app's UI work.'"
    });
  }
  // Day 12 shipped — seed done + gotcha notes once, without clobbering anything you've already entered.
  if (!s[12] || (!s[12].done && !s[12].proof && !s[12].notes)) {
    s[12] = Object.assign({done:false, proof:"", notes:""}, s[12]||{}, {
      done: true,
      proof: "commit 8b36eeb",
      notes: "Gotchas hit building this: (1) the iCloud-synced Obsidian vault path has a doubled folder — .../Documents/FDE contains another FDE folder, and the actual .md notes live in .../Documents/FDE/FDE, not the top-level path. (2) search_notes matches file *content*, not filenames — a query for 'build log' missed Build Log.md.md because that exact phrase isn't in the note body, even though the title matches. (3) On this machine, claude_desktop_config.json had no mcpServers key at all (just preferences/coworkUserFilesPath) — added it by hand rather than relying on a UI, then the app itself reformatted/reordered the file on restart, confirming it actually read the new config."
    });
  }
  // Day 13 shipped — seed done + gotcha notes once, without clobbering anything you've already entered.
  if (!s[13] || (!s[13].done && !s[13].proof && !s[13].notes)) {
    s[13] = Object.assign({done:false, proof:"", notes:""}, s[13]||{}, {
      done: true,
      proof: "append_to_note verified live in Claude Desktop against Build Log.md.md",
      notes: "Gotchas hit building this: (1) after editing server.py and re-running `python3 server.py` by hand in a terminal, nothing actually updates for Claude — stdio MCP servers only work when the client spawns the process itself and owns its stdin/stdout, so a manually-run copy just hangs waiting on input (expected, not broken) and isn't the instance Claude talks to. (2) picking up code changes requires fully quitting Claude Desktop (Cmd+Q) and reopening it — closing the window doesn't respawn the configured mcpServers subprocess. (3) testing has to happen in a normal Claude Desktop chat, not a Cowork session — Cowork uses its own separately pre-wired Obsidian connector, unrelated to this hand-rolled server.py, so testing there would silently prove nothing. append_to_note itself: reads the existing note if present, ensures a trailing newline before appending so new content doesn't glue onto the last line, and falls back to create-if-missing — confirmed working end to end."
    });
  }
  return s;
}
function save(){ try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch(e){} }
function st(id){ return state[id] || (state[id] = {done:false, proof:"", notes:""}); }

function render(){
  const list = document.getElementById("list");
  list.innerHTML = "";
  let lastPhase = null;
  const phaseNames = {0:"Setup", 1:"Phase 1 · API fluency", 2:"Phase 2 · Integrate + MCP", 3:"Phase 3 · Portfolio & positioning"};

  DAYS.forEach((d, i) => {
    if (d.phase !== lastPhase){
      const h = document.createElement("div");
      h.className = "phase-head";
      h.innerHTML = `<span class="tag">›</span> ${phaseNames[d.phase]}`;
      list.appendChild(h);
      lastPhase = d.phase;
    }
    // insert vacation divider before day 16
    if (d.id === 16){
      const v = document.createElement("div");
      v.className = "vac";
      v.textContent = "🌴  Vacation — Jul 13–24 · fully off. The hard build is done.";
      list.appendChild(v);
    }
    const s = st(d.id);
    const card = document.createElement("div");
    card.className = "day" + (s.done ? " done":"");
    card.dataset.phase = d.phase;
    const postDraft = (s.post!=null && s.post!=="") ? s.post : (POSTS[d.id]||"");
    card.innerHTML = `
      <div class="day-top">
        <input class="chk" type="checkbox" ${s.done?"checked":""} aria-label="Mark day ${d.id} done" data-id="${d.id}" data-act="done">
        <div class="meta">
          <div class="date">DAY ${d.id} · ${d.date}</div>
          <div class="title">${d.title}</div>
          <p class="obj">${d.obj}</p>
          <p class="ex">${d.ex}</p>
          <div class="feeds">${d.feeds.map(f=>`<span class="feed ${f}">${f}</span>`).join("")}</div>
          <div class="fields">
            <input type="text" placeholder="Proof — paste a commit / repo / video link" value="${esc(s.proof)}" data-id="${d.id}" data-act="proof">
            <textarea rows="1" placeholder="Notes / what to recycle into the plan…" data-id="${d.id}" data-act="notes">${esc(s.notes)}</textarea>
          </div>
          <div class="day-actions">
            ${d.file?`<button class="lnk" data-id="${d.id}" data-act="toggle-ex">▸ Steps</button>`:""}
            <button class="lnk" data-id="${d.id}" data-act="toggle-post">▸ LinkedIn draft</button>
            <button class="lnk ship-btn" data-id="${d.id}" data-act="done-btn" style="margin-left:auto;background:${s.done?'var(--ship)':'transparent'};color:${s.done?'#0c1a14':'var(--ship)'};border-color:var(--ship)">${s.done ? '✓ Shipped' : '▸ Mark complete'}</button>
          </div>
          ${d.file?`<div class="panel" id="ex-${d.id}" hidden><pre class="md">${esc(EXSRC[d.id]||"Exercise content not loaded.")}</pre></div>`:""}
          <div class="panel" id="post-${d.id}" hidden>
            <textarea class="posttext" rows="9" data-id="${d.id}" data-act="post" placeholder="Draft a LinkedIn post…">${esc(postDraft)}</textarea>
            <div class="panel-btns"><button class="copybtn" data-id="${d.id}" data-act="copy-post">Copy</button><span class="muted-note">Draft for consideration — edit before posting.</span></div>
          </div>
        </div>
      </div>`;
    list.appendChild(card);
  });
  updateProgress();
}

function esc(s){ return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }

function updateProgress(){
  const done = DAYS.filter(d => st(d.id).done).length;
  document.getElementById("dayCount").textContent = `${done} / 25`;
  document.getElementById("pct").textContent = Math.round(done/25*100) + "%";
  const rail = document.getElementById("rail");
  rail.innerHTML = DAYS.map(d => `<div class="seg ${st(d.id).done?'done':''}" data-phase="${d.phase}" title="Day ${d.id}"></div>`).join("");
}

document.getElementById("list").addEventListener("input", e => {
  const id = e.target.dataset.id, act = e.target.dataset.act;
  if (!id) return;
  const s = st(id);
  if (act === "done"){ s.done = e.target.checked; render(); }
  else if (act === "proof"){ s.proof = e.target.value; updateProgress(); }
  else if (act === "notes"){ s.notes = e.target.value; }
  else if (act === "post"){ s.post = e.target.value; }
  save();
});

document.getElementById("list").addEventListener("click", e => {
  const b = e.target.closest("[data-act]"); if (!b) return;
  const id = b.dataset.id, act = b.dataset.act;
  if (act === "done-btn"){ const s = st(id); s.done = !s.done; save(); render(); }
  else if (act === "toggle-ex"){ const p = document.getElementById("ex-"+id); if(p){ p.hidden = !p.hidden; b.textContent = (p.hidden?"\u25b8":"\u25be")+" Steps"; } }
  else if (act === "toggle-post"){ const p = document.getElementById("post-"+id); if(p){ p.hidden = !p.hidden; b.textContent = (p.hidden?"\u25b8":"\u25be")+" LinkedIn draft"; } }
  else if (act === "copy-post"){
    const ta = document.querySelector('.posttext[data-id="'+id+'"]'); if(!ta) return;
    const done = ()=>{ b.textContent="Copied \u2713"; setTimeout(()=>b.textContent="Copy",1500); };
    if (navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(ta.value).then(done).catch(()=>{ ta.select(); document.execCommand("copy"); done(); }); }
    else { ta.select(); document.execCommand("copy"); done(); }
  }
});

document.getElementById("exportMd").addEventListener("click", () => {
  let md = `# FDE Proof Log — exported ${new Date().toLocaleDateString()}\n\n`;
  md += `Progress: ${DAYS.filter(d=>st(d.id).done).length}/25 days.\n\n`;
  md += `| Day | Date | Skill | Done | Proof | Feeds | Notes |\n|---|---|---|---|---|---|---|\n`;
  DAYS.forEach(d => { const s = st(d.id);
    md += `| ${d.id} | ${d.date} | ${d.title} | ${s.done?"✅":"☐"} | ${s.proof||""} | ${d.feeds.join(", ")} | ${(s.notes||"").replace(/\n/g," ")} |\n`;
  });
  md += `\n## Completed proofs (harvest for business plan + talking points)\n`;
  DAYS.filter(d=>st(d.id).done && st(d.id).proof).forEach(d=>{ md += `- **${d.title}** → ${st(d.id).proof}\n`; });
  download("fde-proof-log.md", md);
});

document.getElementById("exportJson").addEventListener("click", () => {
  download("fde-tracker.json", JSON.stringify(state, null, 2));
});

document.getElementById("importJson").addEventListener("click", () => document.getElementById("fileInput").click());
document.getElementById("fileInput").addEventListener("change", e => {
  const file = e.target.files[0]; if(!file) return;
  const r = new FileReader();
  r.onload = () => { try { state = JSON.parse(r.result); save(); render(); } catch(err){ alert("Could not read that file."); } };
  r.readAsText(file);
});

document.getElementById("reset").addEventListener("click", () => {
  if (confirm("Clear all progress in this browser? Export first if you want a backup.")){
    state = {}; save(); render();
  }
});

function download(name, text){
  const blob = new Blob([text], {type:"text/plain"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = name; a.click();
  URL.revokeObjectURL(a.href);
}

/* ---------- Academy Tracker (second tab) ---------- */
const ACAD_STORE_KEY = "fde_academy_v1";

// group 1 = priority track (closes the "Claude Code-level proficiency" JD gap), group 2 = also relevant.
const COURSES = [
  {id:"cc101",      group:1, title:"Claude Code 101", url:"https://anthropic.skilljar.com/claude-code-101",
    covers:"Explore → Plan → Code → Commit workflow, agentic-loop basics.", maps:"Baseline Claude Code fluency."},
  {id:"ccia",       group:1, title:"Claude Code in Action", url:"https://anthropic.skilljar.com/claude-code-in-action",
    covers:"CLAUDE.md memory files, MCP integration, day-to-day dev workflow.", maps:"Directly overlaps the sprint's Phase 2 (memory, MCP)."},
  {id:"skills",     group:1, title:"Introduction to Agent Skills", url:"https://anthropic.skilljar.com/introduction-to-agent-skills",
    covers:"Building, configuring, and distributing reusable Skills.", maps:"You're already shipping Skills (LinkedIn, AJO) — formalizes what you know."},
  {id:"subagents",  group:1, title:"Introduction to Subagents", url:"https://anthropic.skilljar.com/introduction-to-subagents",
    covers:"Delegation, context management, specialized sub-agent workflows.", maps:"Human-in-the-loop workflow design — a named JD requirement."},
  {id:"api",        group:1, title:"Building with the Claude API", url:"https://anthropic.skilljar.com/claude-with-the-anthropic-api",
    covers:"Messages, tool use, streaming, token usage, model selection tradeoffs. (~8 hrs, the largest course)", maps:"Covers the JD's 'platform economics' bullet — no build needed, just complete it."},
  {id:"cowork",     group:2, title:"Introduction to Claude Cowork", url:"https://anthropic.skilljar.com/introduction-to-claude-cowork",
    covers:"Cowork task loop, plugins & skills, file and research workflows.", maps:"On-ramp for training non-technical marketers — a named JD responsibility."},
  {id:"mcp",        group:2, title:"Introduction to Model Context Protocol", url:"https://anthropic.skilljar.com/introduction-to-model-context-protocol",
    covers:"Building MCP servers/clients from scratch in Python.", maps:"Complements the sprint's Phase 2 MCP build."},
  {id:"platform101",group:2, title:"Claude Platform 101", url:"https://anthropic.skilljar.com/claude-platform-101",
    covers:"Ground-up intro to the Claude Developer Platform.", maps:"Lighter on-ramp if the API course feels heavy to start."},
];
const GROUP_NAMES = {1:"Priority track — closes the JD's “Claude Code-level proficiency” gap", 2:"Also relevant"};

let acadState = acadLoad();

function acadLoad(){
  let s;
  try { s = JSON.parse(localStorage.getItem(ACAD_STORE_KEY)) || {}; }
  catch(e){ s = {}; }
  return s;
}
function acadSave(){ try { localStorage.setItem(ACAD_STORE_KEY, JSON.stringify(acadState)); } catch(e){} }
function acadSt(id){ return acadState[id] || (acadState[id] = {status:"not-started", certDate:"", notes:""}); }

function acadRender(){
  const list = document.getElementById("acadList");
  if (!list) return;
  list.innerHTML = "";
  let lastGroup = null;
  COURSES.forEach(c => {
    if (c.group !== lastGroup){
      const h = document.createElement("div");
      h.className = "phase-head";
      h.innerHTML = `<span class="tag">›</span> ${GROUP_NAMES[c.group]}`;
      list.appendChild(h);
      lastGroup = c.group;
    }
    const s = acadSt(c.id);
    const card = document.createElement("div");
    card.className = "day" + (s.status === "complete" ? " done" : "");
    card.dataset.phase = c.group === 1 ? 1 : 2;
    card.innerHTML = `
      <div class="day-top">
        <div class="meta">
          <div class="title"><a class="course-link" href="${c.url}" target="_blank" rel="noopener">${esc(c.title)}</a></div>
          <p class="obj">${esc(c.covers)}</p>
          <p class="ex">Maps to: ${esc(c.maps)}</p>
          <div class="fields">
            <select data-id="${c.id}" data-act="acad-status">
              <option value="not-started" ${s.status==="not-started"?"selected":""}>Not started</option>
              <option value="in-progress" ${s.status==="in-progress"?"selected":""}>In progress</option>
              <option value="complete" ${s.status==="complete"?"selected":""}>Complete</option>
            </select>
            <input type="text" placeholder="Certificate date (e.g. 2026-07-15)" value="${esc(s.certDate)}" data-id="${c.id}" data-act="acad-cert">
            <textarea rows="1" placeholder="Notes…" data-id="${c.id}" data-act="acad-notes">${esc(s.notes)}</textarea>
          </div>
        </div>
      </div>`;
    list.appendChild(card);
  });
  acadUpdateProgress();
}

function acadUpdateProgress(){
  const priority = COURSES.filter(c => c.group === 1);
  const done = priority.filter(c => acadSt(c.id).status === "complete").length;
  const countEl = document.getElementById("acadCount"), pctEl = document.getElementById("acadPct"), railEl = document.getElementById("acadRail");
  if (countEl) countEl.textContent = `${done} / ${priority.length}`;
  if (pctEl) pctEl.textContent = Math.round(done/priority.length*100) + "%";
  if (railEl) railEl.innerHTML = COURSES.map(c => `<div class="seg ${acadSt(c.id).status==='complete'?'done':''}" data-phase="${c.group===1?1:2}" title="${esc(c.title)}"></div>`).join("");
}

document.getElementById("acadList").addEventListener("input", e => {
  const id = e.target.dataset.id, act = e.target.dataset.act;
  if (!id) return;
  const s = acadSt(id);
  if (act === "acad-status"){ s.status = e.target.value; acadRender(); }
  else if (act === "acad-cert"){ s.certDate = e.target.value; }
  else if (act === "acad-notes"){ s.notes = e.target.value; }
  acadSave();
});

document.getElementById("acadExportMd").addEventListener("click", () => {
  const priority = COURSES.filter(c => c.group === 1);
  const done = priority.filter(c => acadSt(c.id).status === "complete").length;
  let md = `# Anthropic Academy Tracker — exported ${new Date().toLocaleDateString()}\n\n`;
  md += `Priority track: ${done}/${priority.length} complete.\n\n`;
  md += `| Course | Group | Status | Cert date | Notes |\n|---|---|---|---|---|\n`;
  COURSES.forEach(c => { const s = acadSt(c.id);
    md += `| [${c.title}](${c.url}) | ${c.group===1?"priority":"other"} | ${s.status} | ${s.certDate||""} | ${(s.notes||"").replace(/\n/g," ")} |\n`;
  });
  download("anthropic-academy-log.md", md);
});

/* ---------- Tab switching ---------- */
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => { b.classList.remove("active"); b.setAttribute("aria-selected","false"); });
    btn.classList.add("active"); btn.setAttribute("aria-selected","true");
    document.getElementById("tab-sprint").hidden = btn.dataset.tab !== "sprint";
    document.getElementById("tab-academy").hidden = btn.dataset.tab !== "academy";
  });
});

function buildExsrc(){ document.querySelectorAll('script.exsrc').forEach(s => { EXSRC[s.dataset.id] = s.textContent.split('<\\/script>').join('<\/script>').replace(/^\n/,'').replace(/\n$/,''); }); }
if (document.readyState === "loading"){ document.addEventListener("DOMContentLoaded", () => { buildExsrc(); render(); acadRender(); }); }
else { buildExsrc(); render(); acadRender(); }
