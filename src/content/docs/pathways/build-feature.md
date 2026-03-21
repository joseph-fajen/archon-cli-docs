---
title: Build a Feature
description: Describe an idea, get a complete PR with planning and reviews
---

Go from feature idea to merged PR with planning, implementation, validation, and multi-agent code review.

## The Command

```bash
archon workflow run archon-idea-to-pr --branch feat/dark-mode "Add dark mode to settings"
```

## What Happens

1. **Creates plan** — Designs implementation approach with specific tasks
2. **Implements** — Executes each task from the plan
3. **Validates** — Runs tests, type-check, and lint
4. **Creates PR** — Opens a pull request with summary
5. **Runs 5 parallel reviews** — Security, tests, types, docs, quality
6. **Self-fixes** — Addresses review findings automatically

## What You Get

- A pull request ready for human review
- Implementation plan in PR description
- All CI checks passing
- Review comments addressed

## Try It Now

```bash
# From your git repository
archon workflow run archon-idea-to-pr --branch feat/your-feature "Your feature description"
```

## Options

| Flag | Effect |
|------|--------|
| `--branch <name>` | Branch name for the worktree |
| `--from <branch>` | Base branch (default: main) |
| `--no-worktree` | Run in live checkout (no isolation) |

## Related Workflows

| Workflow | When to Use |
|----------|-------------|
| `archon-idea-to-pr` | Full pipeline with planning |
| `archon-plan-to-pr` | Skip planning, execute existing plan |
| `archon-feature-development` | Lighter version without reviews |

## Next Steps

- [Fix a GitHub Issue](/archon-cli-docs/pathways/fix-github-issue/) — For bug fixes
- [Quick Reference](/archon-cli-docs/reference/quick-reference/) — All workflows at a glance
