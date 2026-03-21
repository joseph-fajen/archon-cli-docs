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
| **Claude Code** | AI assistant that Archon orchestrates | `claude --version` | [claude.ai/install](https://claude.ai/code) |
| **GitHub CLI** | Create PRs, manage issues | `gh --version` | `brew install gh` |

## Verify Your Setup

```bash
# Run all checks
git --version && bun --version && claude --version && gh --version
```

**You're ready when:** All four commands return version numbers.

## Next Steps

- [Install Archon CLI](/archon-cli-docs/getting-started/install/) — Clone and link the CLI
- [Run Your First Workflow](/archon-cli-docs/getting-started/first-workflow/) — See Archon in action
