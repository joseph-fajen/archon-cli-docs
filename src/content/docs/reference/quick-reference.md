---
title: Quick Reference
description: Common commands, CLI flags, and branch naming at a glance
sidebar:
  order: 1
---

Everything you need on one page.

## Common Commands

```bash
# List available workflows
archon workflow list

# Run a workflow
archon workflow run <name> --branch <branch> "message"

# Check status
archon workflow status

# List worktrees
archon isolation list

# Cleanup old worktrees
archon isolation cleanup
```

## CLI Flags

| Flag | Effect |
|------|--------|
| `--branch <name>` | Explicit branch for worktree |
| `--cwd <path>` | Target directory |
| `--no-worktree` | Skip isolation, run in live checkout |

See [CLI Flags Reference](/archon-cli-docs/reference/cli-flags/) for all flags.

## Branch Naming Conventions

| Task Type | Pattern | Example |
|-----------|---------|---------|
| Fix issue | `fix/issue-{number}` | `fix/issue-123` |
| Feature | `feat/{name}` | `feat/dark-mode` |
| PR review | `review/pr-{number}` | `review/pr-456` |
| Resolve conflicts | `resolve/pr-{number}` | `resolve/pr-456` |
| General assist | `assist/{description}` | `assist/debug-auth` |

## Need Help Choosing a Workflow?

See [Which Workflow?](/archon-cli-docs/workflows/which-workflow/) for the decision tree and all 16 workflows.
