---
title: Quick Reference
description: All workflows, all flags, at a glance
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

## All Workflows

For detailed documentation, examples, and decision guidance, see [Workflow Reference](/archon-cli-docs/reference/workflow-reference/).

| Workflow | Category | Use For |
|----------|----------|---------|
| [`archon-fix-github-issue`](/archon-cli-docs/reference/workflow-reference/#archon-fix-github-issue) | Fix & Implement | Issue → PR |
| [`archon-fix-github-issue-dag`](/archon-cli-docs/reference/workflow-reference/#archon-fix-github-issue-dag) | Fix & Implement | Parallel fix |
| [`archon-idea-to-pr`](/archon-cli-docs/reference/workflow-reference/#archon-idea-to-pr) | Fix & Implement | Idea → PR |
| [`archon-plan-to-pr`](/archon-cli-docs/reference/workflow-reference/#archon-plan-to-pr) | Fix & Implement | Plan → PR |
| [`archon-feature-development`](/archon-cli-docs/reference/workflow-reference/#archon-feature-development) | Fix & Implement | Quick implement |
| [`archon-smart-pr-review`](/archon-cli-docs/reference/workflow-reference/#archon-smart-pr-review) | Review | Adaptive review |
| [`archon-comprehensive-pr-review`](/archon-cli-docs/reference/workflow-reference/#archon-comprehensive-pr-review) | Review | Full review |
| [`archon-issue-review-full`](/archon-cli-docs/reference/workflow-reference/#archon-issue-review-full) | Review | Fix + review |
| [`archon-validate-pr`](/archon-cli-docs/reference/workflow-reference/#archon-validate-pr) | Review | E2E validation |
| [`archon-ralph-fresh`](/archon-cli-docs/reference/workflow-reference/#archon-ralph-fresh) | PRD | Long PRDs |
| [`archon-ralph-stateful`](/archon-cli-docs/reference/workflow-reference/#archon-ralph-stateful) | PRD | Short PRDs |
| [`archon-assist`](/archon-cli-docs/reference/workflow-reference/#archon-assist) | Utility | General help |
| [`archon-resolve-conflicts`](/archon-cli-docs/reference/workflow-reference/#archon-resolve-conflicts) | Utility | Merge conflicts |
| [`archon-architect`](/archon-cli-docs/reference/workflow-reference/#archon-architect) | Utility | Architecture |
| [`archon-remotion-generate`](/archon-cli-docs/reference/workflow-reference/#archon-remotion-generate) | Specialized | Video generation |
| [`archon-test-loop`](/archon-cli-docs/reference/workflow-reference/#archon-test-loop) | Specialized | Testing loops |

## Running Multiple Workflows

Run each workflow separately with its own branch. Do NOT combine multiple issues into one command.

```bash
# Correct: Run each issue in its own worktree (can run in parallel)
archon workflow run archon-fix-github-issue --branch fix/issue-1 "#1"
archon workflow run archon-fix-github-issue --branch fix/issue-2 "#2"
archon workflow run archon-fix-github-issue --branch fix/issue-3 "#3"
```

Each workflow gets its own isolated worktree, so they won't conflict.

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

## Need Help Choosing?

Use the [decision tree](/archon-cli-docs/reference/workflow-reference/#quick-decision-tree) or start with `archon-assist` — it can help you figure out the right workflow.
