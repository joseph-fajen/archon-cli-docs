---
title: Resume Failed Workflows
description: How to continue when a workflow fails mid-run
sidebar:
  order: 1
---

Workflows can fail. When they do, you can resume from the last successful step.

## Check Workflow Status

```bash
# See recent workflow runs
archon workflow status
```

## Resume a Failed Run

```bash
# Resume the most recent failed run
archon workflow run <workflow-name> --resume
```

## Common Failure Scenarios

| Situation | Solution |
|-----------|----------|
| Network timeout | `--resume` (retries from last step) |
| Test failures | Fix tests manually, then `--resume` |
| Merge conflicts | See [Resolve Conflicts](/archon-cli-docs/recovery/cleanup/) |
| API rate limit | Wait, then `--resume` |
| Claude error | `--resume` (usually transient) |

## When Resume Won't Work

If the workflow state is corrupted or you want a fresh start:

```bash
# Cancel the stuck run
archon workflow cancel

# Start fresh
archon workflow run <workflow-name> --branch <new-branch> "message"
```

## Workflow Run History

```bash
# List recent runs
archon workflow status

# See details of a specific run
archon workflow status <run-id>
```

## Next Steps

- [Cleanup Worktrees](/archon-cli-docs/recovery/cleanup/) — Free up disk space
- [Troubleshooting](/archon-cli-docs/reference/troubleshooting/) — Common issues
