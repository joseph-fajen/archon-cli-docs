---
title: CLI Flags Reference
description: Complete reference for all Archon CLI flags
sidebar:
  order: 2
---

All flags available for the Archon CLI.

## Global Flags

| Flag | Short | Description |
|------|-------|-------------|
| `--help` | `-h` | Show help |
| `--version` | | Show version |

## Workflow Run Flags

| Flag | Description | Example |
|------|-------------|---------|
| `--branch <name>` | Branch name for worktree | `--branch fix/issue-42` |
| `--from <branch>` | Base branch (default: main) | `--from develop` |
| `--cwd <path>` | Target directory | `--cwd /path/to/repo` |
| `--no-worktree` | Run in live checkout | `--no-worktree` |
| `--resume` | Resume from last step | `--resume` |

## Workflow List Flags

| Flag | Description |
|------|-------------|
| `--json` | Output as JSON |
| `--cwd <path>` | Target directory |

## Isolation Flags

| Flag | Description |
|------|-------------|
| `--merged` | Only cleanup branches merged to main |
| `--force` | Force removal (skip uncommitted check) |

## Examples

```bash
# Run with specific branch and base
archon workflow run archon-fix-github-issue \
  --branch fix/issue-42 \
  --from develop \
  "#42"

# Quick exploration without isolation
archon workflow run archon-assist --no-worktree "What is this?"

# Machine-readable workflow list
archon workflow list --json

# Cleanup merged branches
archon isolation cleanup --merged

# Force remove a stuck worktree
archon complete feature-branch --force
```
