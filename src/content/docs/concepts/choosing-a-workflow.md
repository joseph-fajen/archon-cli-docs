---
title: Choosing a Workflow
description: Find the right workflow for your task
sidebar:
  order: 2
---

Archon ships with 16 workflows. This guide helps you pick the right one.

## Quick Decision Tree

```
What do you need?
│
├─ Fix something
│  ├─ GitHub issue exists? → archon-fix-github-issue
│  └─ No issue, just an idea? → archon-idea-to-pr
│
├─ Build something
│  ├─ Have a PRD with multiple stories? → archon-ralph-fresh
│  ├─ Have an implementation plan? → archon-plan-to-pr
│  └─ Just an idea? → archon-idea-to-pr
│
├─ Review something
│  ├─ Quick, efficient review? → archon-smart-pr-review
│  └─ Thorough, all-agents review? → archon-comprehensive-pr-review
│
├─ Fix a problem
│  ├─ Merge conflicts? → archon-resolve-conflicts
│  └─ Something else? → archon-assist
│
└─ Explore / Ask / Debug
   └─ → archon-assist
```

---

## Fix Something

### archon-fix-github-issue

**Use when:** You have a GitHub issue and want it fixed end-to-end.

**What it does:**
1. Investigates the issue and writes root cause analysis
2. Implements a fix with tests
3. Creates a PR linked to the issue
4. Runs a code review
5. Auto-fixes review findings

**Example:**
```bash
archon workflow run archon-fix-github-issue --branch fix/issue-42 "#42"
```

**When NOT to use:**
- You want a comprehensive 5-agent review (use `archon-issue-review-full`)
- You just have questions about an issue (use `archon-assist`)
- The issue is actually a feature request with multiple stories (use `archon-ralph-fresh`)

---

### archon-idea-to-pr

**Use when:** You have a feature idea or description and want full end-to-end development.

**What it does:**
1. Creates a comprehensive implementation plan
2. Verifies the plan against current codebase
3. Implements all tasks with type-checking
4. Runs full validation
5. Creates a PR
6. Runs 5 parallel review agents
7. Auto-fixes review findings
8. Posts summary to GitHub

**Example:**
```bash
archon workflow run archon-idea-to-pr --branch feat/dark-mode "Add dark mode toggle to settings page"
```

**When NOT to use:**
- You already have a plan file (use `archon-plan-to-pr`)
- It's a quick fix, not a feature (use `archon-fix-github-issue`)
- You have a multi-story PRD (use `archon-ralph-fresh`)

---

## Build Something

### archon-ralph-fresh

**Use when:** You have a PRD with multiple user stories to implement.

**What it does:**
- Runs in a loop, implementing one story per iteration
- Each iteration starts fresh (no memory of previous iterations)
- Tracks progress in `progress.txt` file
- Continues until all stories pass validation
- Creates a PR when complete

**Example:**
```bash
archon workflow run archon-ralph-fresh --branch feat/auth-system ".archon/ralph/auth-system"
```

**Best for:**
- Long PRDs (7+ stories)
- Independent tasks that don't need shared context
- When you want explicit, traceable progress

**When NOT to use:**
- Short PRDs where context between stories matters (use `archon-ralph-stateful`)
- You don't have a structured PRD file
- Single-story features (use `archon-idea-to-pr`)

**Requires:** `.archon/ralph/{feature}/prd.md` and `prd.json`

---

### archon-plan-to-pr

**Use when:** You already have an implementation plan and want to execute it.

**What it does:**
1. Reads your existing plan file
2. Verifies plan is still valid against codebase
3. Implements all tasks
4. Validates and creates PR
5. Runs comprehensive review
6. Auto-fixes findings

**Example:**
```bash
archon workflow run archon-plan-to-pr --branch feat/caching ".archon/plans/caching-layer.md"
```

**When NOT to use:**
- You don't have a plan yet (use `archon-idea-to-pr` to create one)
- The plan is actually a PRD with stories (use `archon-ralph-fresh`)

---

## Review Something

### archon-smart-pr-review

**Use when:** You want an efficient PR review that adapts to complexity.

**What it does:**
1. Analyzes PR scope and complexity
2. Classifies which review agents are relevant
3. Runs only the necessary agents (skips irrelevant ones)
4. Synthesizes findings
5. Auto-fixes critical and high-severity issues

**Example:**
```bash
archon workflow run archon-smart-pr-review --branch review/pr-123 "#123"
```

**Why use this over comprehensive:**
- A 3-line typo fix doesn't need 5 review agents
- Faster for small PRs
- Same thoroughness for complex PRs

---

### archon-comprehensive-pr-review

**Use when:** You want all review agents to run, regardless of PR size.

**What it does:**
1. Syncs PR with main branch
2. Runs all 5 review agents in parallel:
   - Code review
   - Error handling
   - Test coverage
   - Comment quality
   - Docs impact
3. Synthesizes all findings
4. Auto-fixes critical and high-severity issues

**Example:**
```bash
archon workflow run archon-comprehensive-pr-review --branch review/pr-456 "#456"
```

**When to use:**
- You explicitly want every review perspective
- High-stakes PRs before release
- When you're not sure what to look for

---

## Fix a Problem

### archon-resolve-conflicts

**Use when:** Your PR has merge conflicts.

**What it does:**
1. Fetches latest base branch
2. Analyzes conflicts
3. Auto-resolves simple conflicts (non-overlapping changes)
4. Presents options for complex conflicts
5. Commits and pushes resolution

**Example:**
```bash
archon workflow run archon-resolve-conflicts --branch resolve/pr-789 "#789"
```

**When NOT to use:**
- PR doesn't have conflicts
- You want to squash commits (do that manually)
- General rebasing without conflicts

---

## Explore, Ask, Debug

### archon-assist

**Use when:** Nothing else fits.

**What it does:**
- Full Claude Code agent with all tools available
- Handles questions, debugging, exploration, one-off tasks
- No multi-step workflow structure

**Examples:**
```bash
# Ask a question
archon workflow run archon-assist --no-worktree "What does the orchestrator do?"

# Debug an issue
archon workflow run archon-assist --no-worktree "Why is the SSE connection dropping?"

# Explore code
archon workflow run archon-assist --no-worktree "How does authentication work in this codebase?"
```

**Tip:** Use `--no-worktree` for assist since you're exploring, not making changes.

---

## Workflow Comparison Table

| Scenario | Workflow | Why |
|----------|----------|-----|
| Fix GitHub issue #42 | `archon-fix-github-issue` | Issue exists, want full fix flow |
| "Add dark mode" (idea only) | `archon-idea-to-pr` | Creates plan, then implements |
| Execute existing plan.md | `archon-plan-to-pr` | Plan exists, skip planning phase |
| Implement 10-story PRD | `archon-ralph-fresh` | Multi-story, needs iteration loop |
| Review PR before merge | `archon-smart-pr-review` | Adapts to complexity |
| Thorough review, all agents | `archon-comprehensive-pr-review` | Want every perspective |
| PR has merge conflicts | `archon-resolve-conflicts` | Specialized for conflicts |
| "How does X work?" | `archon-assist` | Exploration, no changes |

---

## Still Not Sure?

If you're unsure which workflow to use:

1. **Start with `archon-assist`** — Ask it what to do
2. **Check the Quick Reference** — [All 16 workflows at a glance](/archon-cli-docs/reference/quick-reference/)
3. **Use the decision tree above** — Follow the branches

When in doubt, `archon-assist` is always available and can help you figure out the right approach.
