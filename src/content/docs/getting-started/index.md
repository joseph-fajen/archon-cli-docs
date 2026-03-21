---
title: Prerequisites
description: What you need before installing Archon CLI
---

Get everything you need to run Archon workflows. Most developers already have these installed.

## Requirements

| Tool | Why | Check | Install |
|------|-----|-------|---------|
| **Git** | Version control for worktrees | `git --version` | [git-scm.com](https://git-scm.com/) |
| **Bun** | JavaScript runtime for Archon | `bun --version` | `curl -fsSL https://bun.sh/install \| bash` |
| **Claude Code** | AI assistant that Archon orchestrates | `claude --version` | [claude.ai/code](https://claude.ai/code) |

## Verify Your Setup

```bash
# Run all checks
git --version && bun --version && claude --version
```

**You're ready when:** All three commands return version numbers.

## Next Steps

- [Install Archon CLI](/archon-cli-docs/getting-started/install/) — Clone and link the CLI
- [Run Your First Workflow](/archon-cli-docs/getting-started/first-workflow/) — See Archon in action
