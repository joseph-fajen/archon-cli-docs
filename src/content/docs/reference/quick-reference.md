---
title: Quick Reference
description: All workflows, all flags, at a glance
sidebar:
  order: 1
---

Everything you need on one page.

## All Workflows

| Workflow | Category | When to Use |
|----------|----------|-------------|
| `archon-fix-github-issue` | Fix & Implement | Fix a GitHub issue → PR |
| `archon-fix-github-issue-dag` | Fix & Implement | Same, parallel execution |
| `archon-idea-to-pr` | Fix & Implement | Feature idea → plan → PR |
| `archon-plan-to-pr` | Fix & Implement | Execute existing plan → PR |
| `archon-feature-development` | Fix & Implement | Implement from plan (lighter) |
| `archon-smart-pr-review` | Review | Efficient PR review (adapts) |
| `archon-comprehensive-pr-review` | Review | Full 5-agent review |
| `archon-issue-review-full` | Review | Fix + comprehensive review |
| `archon-validate-pr` | Review | Test both branches |
| `archon-ralph-fresh` | PRD | Long PRDs (stateless) |
| `archon-ralph-stateful` | PRD | Short PRDs (with memory) |
| `archon-assist` | Utility | Questions, debugging, exploration |
| `archon-resolve-conflicts` | Utility | Fix merge conflicts |
| `archon-architect` | Utility | Codebase health |
| `archon-remotion-generate` | Specialized | Create Remotion videos |
| `archon-test-loop` | Specialized | Internal testing |

## CLI Flags

| Flag | Effect |
|------|--------|
| `--cwd <path>` | Target directory |
| `--branch <name>` | Explicit branch for worktree |
| `--from <branch>` | Override base branch |
| `--no-worktree` | Skip isolation, run in live checkout |
| `--resume` | Resume from last failed run |
| `--json` | Machine-readable output (`workflow list` only) |

## Workflow Selection Decision Tree

```
What do you need?
│
├─ Fix something
│  ├─ GitHub issue exists? → archon-fix-github-issue
│  └─ No issue, just fix? → archon-idea-to-pr
│
├─ Build something
│  ├─ Have a PRD? → archon-ralph-fresh
│  ├─ Have a plan? → archon-plan-to-pr
│  └─ Just an idea? → archon-idea-to-pr
│
├─ Review something
│  ├─ Quick review? → archon-smart-pr-review
│  └─ Thorough review? → archon-comprehensive-pr-review
│
└─ Explore / Ask
   └─ → archon-assist
```

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
