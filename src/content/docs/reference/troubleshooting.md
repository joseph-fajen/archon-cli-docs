---
title: Troubleshooting
description: Common issues and how to fix them
sidebar:
  order: 3
---

Solutions for common Archon issues.

## Installation Issues

### "archon: command not found"

The CLI isn't linked globally.

```bash
cd remote-coding-agent/packages/cli
bun link
```

### "claude: command not found"

Claude Code CLI isn't installed. Visit [claude.ai/code](https://claude.ai/code) to install, then authenticate:

```bash
claude /login
```

## Workflow Issues

### "No project registered"

Archon doesn't know about your repo.

```bash
# From your repo
archon workflow run archon-assist "register this project"
```

### "Workflow failed mid-run"

Resume from the last successful step.

```bash
archon workflow run <workflow> --resume
```

### "Worktree already exists"

A previous run left a worktree. Clean it up.

```bash
archon complete <branch-name>
```

## Git Issues

### "Cannot create worktree: uncommitted changes"

You have changes in the target branch.

```bash
# Option 1: Commit or stash your changes
git stash

# Option 2: Run without isolation
archon workflow run <workflow> --no-worktree "message"
```

### "Merge conflicts"

Use the conflict resolution workflow.

```bash
archon workflow run archon-resolve-conflicts
```

## API Issues

### "Rate limit exceeded"

Wait and retry.

```bash
# After waiting
archon workflow run <workflow> --resume
```

### "Authentication failed"

Re-authenticate with Claude.

```bash
claude /login
```

## Getting Help

If you're stuck:

1. Check `archon workflow status` for error details
2. Ask in the [Dynamous community](https://dynamous.ai)
3. File an issue on [GitHub](https://github.com/dynamous-community/remote-coding-agent/issues)
