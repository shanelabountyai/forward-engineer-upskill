"""
obsidian-mcp — MCP server starter.

Reads/writes Markdown notes in your Obsidian vault so Claude can use it as
an AI-accessible knowledge base. Reads files directly from disk (no plugin needed).

Day 11: runs with search_notes (stub).
Day 12: search_notes reads the real vault.
Day 13: add create_note / append_to_note (stubs below — implement them).

Run:
    pip3 install "mcp[cli]" --break-system-packages
    export VAULT_PATH="/full/path/to/your/FDE/vault"
    python3 server.py
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
    path = _vault() / f"{title}.md"
    path.write_text(content, encoding="utf-8")
    return {"created": str(path)}

# @mcp.tool()
# def append_to_note(title: str, content: str) -> dict:
#     """Append content to an existing note (create if missing)."""
#     ...

if __name__ == "__main__":
    mcp.run()
