---
title: Why Isolation Matters
description: How Archon uses git worktrees for safe, parallel development
sidebar:
  order: 2
---

Every Archon workflow runs in an isolated git worktree. This prevents conflicts and enables parallel work.

## What's a Worktree?

A git worktree is a linked copy of your repository with its own branch. Changes in one worktree don't affect others.

```
your-project/              # Main checkout (your working branch)
~/.archon/workspaces/
  └── owner/repo/
      └── worktrees/
          ├── fix-issue-42/   # Worktree for issue #42
          ├── feat-dark-mode/ # Worktree for dark mode feature
          └── debug-auth/     # Worktree for debugging
```

## Why This Matters

| Without Isolation | With Isolation |
|---|---|
| One task at a time | Run 5 workflows in parallel |
| Uncommitted changes block work | Each workflow has clean state |
| Mistakes affect your branch | Safe experimentation |
| Must stash/commit before switching | Just start a new workflow |

## How Archon Uses Worktrees

1. **Workflow starts** → Creates worktree with fresh branch
2. **AI makes changes** → Only affects the worktree
3. **Workflow completes** → PR created from worktree branch
4. **You review** → Merge or discard

## Opting Out

If you want to run in your current checkout (no isolation):

```bash
archon workflow run archon-assist --no-worktree "Quick question"
```

**Use `--no-worktree` for:** Quick questions, read-only exploration, when you want changes in your current branch.

## Next Steps

- [Resume & Cleanup](/archon-cli-docs/reference/resume-and-cleanup/) — When things go wrong or managing disk space
