---
title: Resume & Cleanup
description: Resume failed workflows and manage worktrees
sidebar:
  order: 2
---

## Resume a Failed Workflow

Workflows can fail. When they do, you can resume from the last successful step.

```bash
# See recent workflow runs
archon workflow status

# Resume the most recent failed run
archon workflow run <workflow-name> --resume
```

### Common Failure Scenarios

| Situation | Solution |
|-----------|----------|
| Network timeout | `--resume` (retries from last step) |
| Test failures | Fix tests manually, then `--resume` |
| Merge conflicts | Use `archon-resolve-conflicts` workflow |
| API rate limit | Wait, then `--resume` |
| Claude error | `--resume` (usually transient) |

### When Resume Won't Work

If the workflow state is corrupted or you want a fresh start:

```bash
# Cancel the stuck run
archon workflow cancel

# Start fresh
archon workflow run <workflow-name> --branch <new-branch> "message"
```

---

## Cleanup Worktrees

Archon creates worktrees for each workflow run. Over time, these accumulate. Clean them up periodically.

```bash
# List active worktrees
archon isolation list

# Remove worktrees older than 7 days (default)
archon isolation cleanup

# Remove worktrees older than 14 days
archon isolation cleanup 14

# Remove worktrees whose branches are merged to main
archon isolation cleanup --merged
```

### Manual Removal

```bash
# Remove a specific worktree and its branches
archon complete <branch-name>

# Force remove (even with uncommitted changes)
archon complete <branch-name> --force
```

### Where Worktrees Live

```text
~/.archon/workspaces/
  └── owner/repo/
      └── worktrees/
          ├── fix-issue-42/
          ├── feat-dark-mode/
          └── ...
```

## Next Steps

- [Troubleshooting](/archon-cli-docs/reference/troubleshooting/) — Common issues
- [Which Workflow?](/archon-cli-docs/workflows/which-workflow/) — Find the right workflow
