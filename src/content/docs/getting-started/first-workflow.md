---
title: First Workflow
description: Run your first Archon workflow in 2 minutes
---

See Archon in action by asking a question about any codebase.

## The Command

```bash
# From any git repository
archon workflow run archon-assist "What does this codebase do?"
```

## What Happens

1. Archon creates an isolated worktree for safe exploration
2. Claude Code analyzes the codebase structure
3. You get a clear explanation of the project

## Try It Now

```bash
cd /path/to/your/project
archon workflow run archon-assist "Explain the main entry point"
```

## What You'll See

```
[Archon] Creating worktree...
[Archon] Running archon-assist...
[Claude] Analyzing codebase...

This project is a [description]...
```

## Next Steps

Now that you've seen Archon work, choose your pathway:

- [Fix a GitHub Issue](/archon-cli-docs/pathways/fix-github-issue/) — Point at an issue, get a PR
- [Build a Feature](/archon-cli-docs/pathways/build-feature/) — Describe an idea, get a PR
- [Explore Code](/archon-cli-docs/pathways/explore-code/) — Ask questions, debug, understand
