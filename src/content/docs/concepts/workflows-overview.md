---
title: Workflows Overview
description: How Archon workflows work
sidebar:
  order: 3
---

A workflow is a YAML file that defines a sequence of AI-powered steps. Archon executes them deterministically.

## Workflow Structure

```yaml
# .archon/workflows/my-workflow.yaml
name: my-workflow
description: What this workflow does

steps:
  - command: create-plan    # Step 1: Generate a plan
  - command: implement      # Step 2: Execute the plan
  - command: validate       # Step 3: Run tests/lint
  - command: create-pr      # Step 4: Open a PR
```

## Execution Model

1. **Sequential** — Steps run in order
2. **Context preserved** — Each step sees previous outputs
3. **Parallel blocks** — Some steps can run concurrently
4. **Deterministic** — Same workflow = same sequence every time

## Built-in Workflows

Archon ships with 16 workflows. The most common:

| Workflow | Purpose |
|----------|---------|
| `archon-fix-github-issue` | Issue → PR |
| `archon-idea-to-pr` | Idea → Plan → PR |
| `archon-assist` | Q&A, exploration |
| `archon-smart-pr-review` | Efficient PR review |

See [Quick Reference](/archon-cli-docs/reference/quick-reference/) for the full list.

## Commands vs Workflows

- **Commands** are single prompts (markdown files in `.archon/commands/`)
- **Workflows** are sequences of commands (YAML files in `.archon/workflows/`)

Workflows call commands. Commands are the building blocks.

## Next Steps

- [Quick Reference](/archon-cli-docs/reference/quick-reference/) — All workflows at a glance
- [Fix a GitHub Issue](/archon-cli-docs/pathways/fix-github-issue/) — Try a workflow
