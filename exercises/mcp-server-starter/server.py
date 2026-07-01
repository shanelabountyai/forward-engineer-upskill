"""
obsidian-mcp — MCP server starter.

Reads/writes Markdown notes in your Obsidian vault so Claude can use it as
an AI-accessible knowledge base. Reads files directly from disk (no plugin needed).

Day 11: runs with search_notes (stub).
Day 12: search_notes reads the real vault.
Day 13: add create_note / append_to_note (stubs below — implement them).

Run:
    python3 -m pip install "mcp[cli]" --break-system-packages
    export VAULT_PATH="/full/path/to/your/FDE/vault"
    python3 server.py

(If pip3 isn't found, `python3 -m pip install ...` is the safer form.)
"""

import os
from pathlib import Path
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("obsidian")

def _vault() -> Path:
    p = os.environ.get("VAULT_PATH")
    if not p:
        raise RuntimeError("Set VAULT_PATH to your Obsidian vault folder.")
    return Path(p).expanduser()

def _note_path(title: str) -> Path:
    """Resolve a note title to a path inside the vault, rejecting anything
    that could escape it (path separators or '..')."""
    if "/" in title or "\\" in title or ".." in title:
        raise ValueError("title can't contain '/', '\\\\', or '..'")
    return _vault() / f"{title}.md"

@mcp.tool()
def search_notes(query: str, limit: int = 5) -> list[dict]:
    """Search the Obsidian vault for notes whose text contains the query.
    Returns a list of {file, snippet}."""
    results = []
    for md in _vault().rglob("*.md"):
        try:
            text = md.read_text(encoding="utf-8", errors="ignore")
        except Exception:
            continue
        idx = text.lower().find(query.lower())
        if idx != -1:
            start = max(0, idx - 60)
            snippet = text[start:idx + 140].replace("\n", " ")
            results.append({"file": md.name, "snippet": snippet})
            if len(results) >= limit:
                break
    return results or [{"file": "", "snippet": f"No notes matched '{query}'."}]

# ---- Day 13: implement these ----
@mcp.tool()
def create_note(title: str, content: str) -> dict:
    """Create a new note in the vault. Returns the path created."""
    path = _note_path(title)
    path.write_text(content, encoding="utf-8")
    return {"created": str(path)}

@mcp.tool()
def append_to_note(title: str, content: str) -> dict:
    """Append content to an existing note (create if missing). Returns the path."""
    path = _note_path(title)
    if path.exists():
        existing = path.read_text(encoding="utf-8")
        if existing and not existing.endswith("\n"):
            existing += "\n"
        path.write_text(existing + content, encoding="utf-8")
    else:
        path.write_text(content, encoding="utf-8")
    return {"path": str(path)}

if __name__ == "__main__":
    mcp.run()
