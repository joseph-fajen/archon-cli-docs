---
title: Which Workflow?
description: Find the right Archon workflow for your task in seconds
sidebar:
  order: 1
---

Find the right workflow for your task.

## Decision Tree

```text
What do you need?
│
├─ Answer a question / explore → archon-assist
│
├─ Fix a GitHub issue
│  ├─ Standard sequential → archon-fix-github-issue
│  ├─ Parallel execution → archon-fix-github-issue-dag
│  └─ + Full 5-agent review → archon-issue-review-full
│
├─ Build a feature
│  ├─ From idea (no plan yet) → archon-idea-to-pr
│  ├─ From existing plan → archon-plan-to-pr
│  └─ Quick implement (no review) → archon-feature-development
│
├─ Review a PR
│  ├─ Smart (adaptive agents) → archon-smart-pr-review
│  ├─ Comprehensive (all agents) → archon-comprehensive-pr-review
│  └─ E2E validation (both branches) → archon-validate-pr
│
├─ Merge conflicts → archon-resolve-conflicts
│
├─ Architecture cleanup → archon-architect
│
├─ Run tests in a loop → archon-test-loop
│
├─ Implement PRD with stories
│  ├─ Short PRD, coupled stories → archon-ralph-stateful
│  └─ Long PRD, independent stories → archon-ralph-fresh
│
└─ Generate videos → archon-remotion-generate
```

## All Workflows

For detailed documentation and examples, see [All Workflows](/archon-cli-docs/workflows/all-workflows/).

| Workflow | Category | Use For |
|----------|----------|---------|
| [`archon-fix-github-issue`](/archon-cli-docs/workflows/all-workflows/#archon-fix-github-issue) | Fix & Implement | Issue → PR |
| [`archon-fix-github-issue-dag`](/archon-cli-docs/workflows/all-workflows/#archon-fix-github-issue-dag) | Fix & Implement | Parallel fix |
| [`archon-idea-to-pr`](/archon-cli-docs/workflows/all-workflows/#archon-idea-to-pr) | Fix & Implement | Idea → PR |
| [`archon-plan-to-pr`](/archon-cli-docs/workflows/all-workflows/#archon-plan-to-pr) | Fix & Implement | Plan → PR |
| [`archon-feature-development`](/archon-cli-docs/workflows/all-workflows/#archon-feature-development) | Fix & Implement | Quick implement |
| [`archon-smart-pr-review`](/archon-cli-docs/workflows/all-workflows/#archon-smart-pr-review) | Review | Adaptive review |
| [`archon-comprehensive-pr-review`](/archon-cli-docs/workflows/all-workflows/#archon-comprehensive-pr-review) | Review | Full review |
| [`archon-issue-review-full`](/archon-cli-docs/workflows/all-workflows/#archon-issue-review-full) | Review | Fix + review |
| [`archon-validate-pr`](/archon-cli-docs/workflows/all-workflows/#archon-validate-pr) | Review | E2E validation |
| [`archon-ralph-fresh`](/archon-cli-docs/workflows/all-workflows/#archon-ralph-fresh) | PRD | Long PRDs |
| [`archon-ralph-stateful`](/archon-cli-docs/workflows/all-workflows/#archon-ralph-stateful) | PRD | Short PRDs |
| [`archon-assist`](/archon-cli-docs/workflows/all-workflows/#archon-assist) | Utility | General help |
| [`archon-resolve-conflicts`](/archon-cli-docs/workflows/all-workflows/#archon-resolve-conflicts) | Utility | Merge conflicts |
| [`archon-architect`](/archon-cli-docs/workflows/all-workflows/#archon-architect) | Utility | Architecture |
| [`archon-remotion-generate`](/archon-cli-docs/workflows/all-workflows/#archon-remotion-generate) | Specialized | Video generation |
| [`archon-test-loop`](/archon-cli-docs/workflows/all-workflows/#archon-test-loop) | Specialized | Testing loops |

## Running Multiple Workflows

Run each workflow separately with its own branch. Do NOT combine multiple issues into one command.

```bash
# Correct: Run each issue in its own worktree (can run in parallel)
archon workflow run archon-fix-github-issue --branch fix/issue-1 "#1"
archon workflow run archon-fix-github-issue --branch fix/issue-2 "#2"
archon workflow run archon-fix-github-issue --branch fix/issue-3 "#3"
```

Each workflow gets its own isolated worktree, so they won't conflict.

## Need Help Choosing?

Start with `archon-assist` — it can help you figure out the right workflow.
