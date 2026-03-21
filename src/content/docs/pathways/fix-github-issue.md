---
title: Fix a GitHub Issue
description: Point Archon at a GitHub issue, get a complete PR
---

Turn any GitHub issue into a working PR with investigation, implementation, validation, and code review.

## The Command

```bash
archon workflow run archon-fix-github-issue --branch fix/issue-42 "#42"
```

## What Happens

1. **Fetches issue** — Reads issue title, description, and comments from GitHub
2. **Investigates** — Analyzes codebase to understand the problem
3. **Implements** — Makes the code changes to fix the issue
4. **Validates** — Runs tests, type-check, and lint
5. **Creates PR** — Opens a pull request linking to the issue
6. **Reviews** — Runs 5 parallel review agents (security, tests, types, docs, quality)
7. **Self-fixes** — Addresses review findings automatically

## What You Get

- A pull request ready for human review
- Issue linked in PR description
- All CI checks passing
- Review comments addressed

## Try It Now

```bash
# From your git repository
archon workflow run archon-fix-github-issue --branch fix/issue-NUMBER "#NUMBER"
```

Replace `NUMBER` with your issue number.

## Options

| Flag | Effect |
|------|--------|
| `--branch <name>` | Branch name for the worktree |
| `--from <branch>` | Base branch (default: main) |
| `--no-worktree` | Run in live checkout (no isolation) |

## Next Steps

- [Build a Feature](/archon-cli-docs/pathways/build-feature/) — For feature requests
- [Quick Reference](/archon-cli-docs/reference/quick-reference/) — All workflows at a glance
