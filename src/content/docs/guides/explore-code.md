---
title: Explore Code
description: Ask questions, debug issues, understand unfamiliar code
---

Use Archon for code exploration, debugging, and learning without making changes.

## The Command

```bash
archon workflow run archon-assist "How does authentication work in this codebase?"
```

## What Happens

1. **Creates isolated environment** — Safe exploration without affecting your code
2. **Analyzes codebase** — Claude Code reads relevant files
3. **Answers your question** — Clear explanation with file references

## What You Get

- Detailed answer with specific file and line references
- No code changes (read-only exploration)
- Session preserved for follow-up questions

## Example Questions

```bash
# Architecture understanding
archon workflow run archon-assist "What is the overall architecture?"

# Debugging
archon workflow run archon-assist "Why might the login flow be failing?"

# Learning
archon workflow run archon-assist "How do I add a new API endpoint?"

# Code review prep
archon workflow run archon-assist "What does the UserService class do?"
```

## Options

| Flag | Effect |
|------|--------|
| `--no-worktree` | Run in live checkout (faster, no isolation) |
| `--cwd <path>` | Target a different directory |

## When to Use archon-assist

| Situation | Use archon-assist? |
|-----------|-------------------|
| Understanding code | ✅ Yes |
| Debugging issues | ✅ Yes |
| Planning changes | ✅ Yes |
| Actually making changes | ❌ Use archon-idea-to-pr |
| Fixing issues | ❌ Use archon-fix-github-issue |

## Next Steps

- [Fix a GitHub Issue](/archon-cli-docs/guides/fix-github-issue/) — When you're ready to fix
- [Build a Feature](/archon-cli-docs/guides/build-feature/) — When you're ready to build
