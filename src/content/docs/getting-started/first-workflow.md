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

Archon will create an isolated worktree, run Claude Code to analyze your project, and return a detailed explanation. The workflow typically takes 1-2 minutes.

## Next Steps

Now that you've seen Archon work, choose your pathway:

- [Fix a GitHub Issue](/archon-cli-docs/guides/fix-github-issue/) — Point at an issue, get a PR
- [Build a Feature](/archon-cli-docs/guides/build-feature/) — Describe an idea, get a PR
- [Explore Code](/archon-cli-docs/guides/explore-code/) — Ask questions, debug, understand
