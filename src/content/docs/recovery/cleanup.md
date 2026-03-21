---
title: Cleanup Worktrees
description: Manage disk space by removing old worktrees
sidebar:
  order: 2
---

Archon creates worktrees for each workflow run. Over time, these accumulate. Clean them up periodically.

## List Active Worktrees

```bash
archon isolation list
```

## Cleanup Stale Worktrees

```bash
# Remove worktrees older than 7 days (default)
archon isolation cleanup

# Remove worktrees older than 14 days
archon isolation cleanup 14
```

## Cleanup Merged Branches

```bash
# Remove worktrees whose branches are merged to main
archon isolation cleanup --merged
```

This also deletes the remote branch.

## Manual Removal

```bash
# Remove a specific worktree and its branches
archon complete <branch-name>

# Force remove (even with uncommitted changes)
archon complete <branch-name> --force
```

## Where Worktrees Live

```
~/.archon/workspaces/
  └── owner/repo/
      └── worktrees/
          ├── fix-issue-42/
          ├── feat-dark-mode/
          └── ...
```

## Next Steps

- [Resume Failed Workflows](/archon-cli-docs/recovery/resume/) — When things go wrong
- [Quick Reference](/archon-cli-docs/reference/quick-reference/) — All commands
