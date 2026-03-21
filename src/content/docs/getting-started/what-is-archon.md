---
title: What is Archon?
description: A workflow engine that makes AI coding repeatable
---

When you ask an AI coding assistant to "fix this bug," what happens depends on the model's mood. It might skip planning. It might forget to run tests. Every run is different.

Archon fixes this.

**Define once. Reuse everywhere.**

Think of it as **n8n, but for software development** — a layer on top of your AI coding agent that makes your process repeatable.

Take what works for you — your planning steps, your validation checks, your PR templates — and bundle it into a YAML workflow. Turn "fix issue #42" into a real process: fetch the issue, investigate root cause, implement a fix, run tests, open a PR. The workflow defines what happens; the AI figures out how.

Found a workflow that works? Run it across multiple repos in parallel — each in its own isolated git worktree, no conflicts. Stop repeating yourself to the AI.

## See It In Action

```bash
archon workflow run archon-fix-github-issue --branch fix/issue-42 "#42"
```

What happens:
- Fetches issue #42 from GitHub
- Investigates root cause
- Implements a fix
- Runs validation
- Opens a PR linked to the issue

One command. Full process. Ready for review.

## Batteries Included

Archon ships with [16 pre-defined workflows](/archon-cli-docs/reference/quick-reference/) for common development tasks — fixing GitHub issues, building features, running code reviews, resolving merge conflicts, and more. These workflows are referenced throughout this guide and work out of the box. You can use them as-is, customize them, or create your own from scratch.

## Next Steps

- [Prerequisites](/archon-cli-docs/getting-started/) — What you need before installing
- [Installation](/archon-cli-docs/getting-started/install/) — Get Archon running
- [First Workflow](/archon-cli-docs/getting-started/first-workflow/) — See it in action
