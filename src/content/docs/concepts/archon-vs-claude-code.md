---
title: Archon vs Claude Code
description: Understanding the relationship between Archon and Claude Code
sidebar:
  order: 1
---

Archon orchestrates Claude Code. Think of it like the difference between a conductor and the musicians.

## Quick Comparison

| | Claude Code | Archon |
|---|---|---|
| **What it is** | AI coding assistant | Workflow engine |
| **How you use it** | Interactive conversation | Run predefined workflows |
| **Behavior** | Varies based on prompts | Deterministic sequence |
| **GitHub integration** | Manual | Automatic (PRs, issues) |
| **Isolation** | None | Git worktrees |
| **Best for** | Exploration, one-off tasks | Repeatable processes |

## When to Use Each

**Use Claude Code directly when:**
- Exploring ideas interactively
- One-off tasks without a clear pattern
- You want to guide each step manually

**Use Archon when:**
- You want consistent, repeatable results
- The task maps to a known workflow (fix issue, build feature)
- You want automatic PR creation and review
- You need isolation (parallel work, safe experimentation)

## How They Work Together

```
┌─────────────────────────────────────────┐
│             Archon CLI                  │
│  (Workflow orchestration + isolation)   │
└──────────────────┬──────────────────────┘
                   │ Invokes
                   ▼
┌─────────────────────────────────────────┐
│           Claude Code                   │
│  (AI assistant executing each step)     │
└─────────────────────────────────────────┘
```

Archon defines the sequence. Claude Code provides the intelligence at each step.

## Next Steps

- [Why Isolation Matters](/archon-cli-docs/concepts/isolation/) — Understanding worktrees
- [Workflows Overview](/archon-cli-docs/concepts/workflows-overview/) — How workflows work
