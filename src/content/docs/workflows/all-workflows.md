---
title: All Workflows
description: Complete reference for all 16 Archon workflows
sidebar:
  order: 2
---

All 16 workflows with detailed documentation, examples, and guidance.

## Quick Decision Tree

```
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
├─ Implement PRD with stories
│  ├─ Short PRD, coupled stories → archon-ralph-stateful
│  └─ Long PRD, independent stories → archon-ralph-fresh
│
└─ Generate videos → archon-remotion-generate
```

---

## Fix & Implement

Workflows for fixing issues and implementing features.

<details id="archon-fix-github-issue">
<summary><strong>archon-fix-github-issue</strong> — Fix a GitHub issue end-to-end</summary>

Sequential pipeline for fixing GitHub issues with investigation, implementation, and review.

**What it does:**
1. Investigates issue → root cause analysis, creates `investigation.md`
2. Implements fix → code changes, validation, commits
3. Creates PR → pushes branch, links to issue
4. Code review → single agent review with findings
5. Auto-fix → fixes surfaced issues, posts fix report

**Example:**
```bash
archon workflow run archon-fix-github-issue --branch fix/issue-42 "#42"
```

**When to use:**
- You have a GitHub issue and want it fixed end-to-end
- Want straightforward fix without comprehensive multi-agent review

**When NOT to use:**
- Need comprehensive 5-agent review (use `archon-issue-review-full`)
- Just asking questions about an issue (use `archon-assist`)
- Issue is a feature request with multiple stories (use `archon-ralph-fresh`)

</details>

<details id="archon-fix-github-issue-dag">
<summary><strong>archon-fix-github-issue-dag</strong> — Fix issue with parallel execution</summary>

DAG (Directed Acyclic Graph) workflow with parallel execution for efficient issue fixing.

**What it does:**
1. Extracts and classifies issue (bug/feature/enhancement/refactor/chore/docs)
2. Parallel research: web research + fetch PR template
3. Routes based on classification: investigate (bugs) or plan (features)
4. Implements fix from investigation
5. Validates (type-check, lint, tests)
6. Creates draft PR using repo's PR template
7. Classifies review scope → runs only relevant review agents in parallel
8. Synthesizes findings
9. Self-fixes all findings
10. Reports results back to GitHub issue

**Example:**
```bash
archon workflow run archon-fix-github-issue-dag --branch fix/issue-42 "#42"
```

**When to use:**
- Want parallel execution for efficiency
- Fixing, resolving, or implementing a GitHub issue

**When NOT to use:**
- Prefer sequential execution (use `archon-fix-github-issue`)
- PR reviews or general exploration

</details>

<details id="archon-idea-to-pr">
<summary><strong>archon-idea-to-pr</strong> — Build feature from idea</summary>

Complete end-to-end feature development from natural language idea to production-ready PR.

**What it does:**
1. Creates comprehensive implementation plan with codebase analysis
2. Verifies plan research is still valid
3. Implements all tasks with type-checking after each change
4. Runs full validation (type-check, lint, tests, build)
5. Creates PR, marks as ready
6. Runs 5 parallel review agents:
   - Code quality
   - Error handling
   - Test coverage
   - Comment quality
   - Documentation impact
7. Synthesizes findings and implements fixes
8. Posts summary with decision matrix to GitHub

**Example:**
```bash
archon workflow run archon-idea-to-pr --branch feat/dark-mode "Add dark mode toggle to settings page"
```

**When to use:**
- You have a feature idea in natural language
- No existing implementation plan
- Want end-to-end development with full quality review

**When NOT to use:**
- Already have a plan file (use `archon-plan-to-pr`)
- Quick fix, not a feature (use `archon-fix-github-issue`)
- Multi-story PRD (use `archon-ralph-fresh`)

</details>

<details id="archon-plan-to-pr">
<summary><strong>archon-plan-to-pr</strong> — Execute existing plan</summary>

Execute an existing implementation plan through to production-ready PR with full review.

**What it does:**
1. Reads and sets up plan, extracts scope limits
2. Verifies plan research is still valid
3. Implements all tasks with type-checking after each change
4. Runs full validation
5. Creates PR, marks as ready
6. Runs 5 parallel review agents
7. Synthesizes findings and implements fixes
8. Posts summary with decision matrix to GitHub

**Example:**
```bash
archon workflow run archon-plan-to-pr --branch feat/caching ".agents/plans/caching-layer.md"
```

**When to use:**
- You have an existing implementation plan file
- Want full review pipeline after implementation

**When NOT to use:**
- Creating plans from scratch (use `archon-idea-to-pr`)
- Quick implementation without review (use `archon-feature-development`)

**Requirements:** Plan file at `$ARTIFACTS_DIR/plan.md` or `.agents/plans/*.md`

</details>

<details id="archon-feature-development">
<summary><strong>archon-feature-development</strong> — Quick implement from plan</summary>

Lightweight feature implementation from an existing plan without comprehensive review.

**What it does:**
1. Implements all tasks from plan.md with validation loops
2. Creates and pushes pull request (no comprehensive review)

**Example:**
```bash
archon workflow run archon-feature-development --branch feat/minor-enhancement
```

**When to use:**
- Have an existing implementation plan
- Want quick implementation without full review pipeline
- Simple features or minor enhancements

**When NOT to use:**
- Creating plans from scratch (use `archon-idea-to-pr`)
- Bug fixes (use `archon-fix-github-issue`)
- Need comprehensive code review (use `archon-plan-to-pr`)

**Requirements:** Plan file must exist at `$ARTIFACTS_DIR/plan.md`

</details>

---

## Review

Workflows for reviewing pull requests.

<details id="archon-smart-pr-review">
<summary><strong>archon-smart-pr-review</strong> — Adaptive PR review</summary>

Intelligent PR review that adapts to complexity and only runs relevant agents.

**What it does:**
1. Gathers PR scope and diff information
2. Syncs PR branch with main (rebase if needed)
3. Classifies PR complexity (trivial/small/medium/large)
4. Runs only relevant review agents:
   - Code review: Always (unless empty or non-code changes)
   - Error handling: If touches try/catch, async/await, error paths
   - Test coverage: If touches source code (not just tests/docs/config)
   - Comment quality: If adds/modifies comments, docstrings, JSDoc
   - Documentation impact: If changes public APIs, CLI flags, env vars
5. Synthesizes findings
6. Auto-fixes CRITICAL/HIGH issues

**Example:**
```bash
archon workflow run archon-smart-pr-review --branch review/pr-123 "#123"
```

**When to use:**
- Want efficient PR review that adapts to size
- Small PRs that don't need all 5 agents

**When NOT to use:**
- Need ALL 5 agents always (use `archon-comprehensive-pr-review`)

**Why use this over comprehensive:** A 3-line typo fix doesn't need 5 review agents. Faster for small PRs, same thoroughness for complex PRs.

</details>

<details id="archon-comprehensive-pr-review">
<summary><strong>archon-comprehensive-pr-review</strong> — Full 5-agent review</summary>

Full-featured PR review that always runs all 5 specialized review agents.

**What it does:**
1. Gathers PR scope and diff information
2. Syncs PR branch with main (rebase if needed)
3. Runs all 5 review agents in parallel:
   - Code review (code quality, CLAUDE.md compliance)
   - Error handling (exception handling, async patterns)
   - Test coverage (test adequacy)
   - Comment quality (documentation, clarity)
   - Documentation impact (API/UX changes)
4. Synthesizes all findings
5. Auto-fixes CRITICAL/HIGH issues
6. Posts comprehensive review comment to PR

**Example:**
```bash
archon workflow run archon-comprehensive-pr-review --branch review/pr-456 "#456"
```

**When to use:**
- Want all review agents running regardless of PR size
- Complex changes that need all perspectives
- High-stakes PRs before release

**When NOT to use:**
- Simple changes where only some agents are needed (use `archon-smart-pr-review`)

</details>

<details id="archon-issue-review-full">
<summary><strong>archon-issue-review-full</strong> — Fix issue + comprehensive review</summary>

Complete issue fix plus comprehensive 5-agent review pipeline.

**What it does:**
1. Investigates issue → root cause analysis, creates `investigation.md`
2. Implements fix → code changes, validation, PR creation
3. Gathers PR review scope
4. Syncs PR with main branch
5. Runs all 5 parallel review agents
6. Synthesizes findings
7. Fixes CRITICAL/HIGH issues
8. Posts summary with decision matrix to GitHub

**Example:**
```bash
archon workflow run archon-issue-review-full --branch fix/issue-42 "#42"
```

**When to use:**
- Want full, comprehensive fix + review pipeline for a GitHub issue
- Need both fix AND deep review in one pipeline

**When NOT to use:**
- Simple issue fixes (use `archon-fix-github-issue`)
- Just asking questions about issues (use `archon-assist`)

</details>

<details id="archon-validate-pr">
<summary><strong>archon-validate-pr</strong> — E2E validation on both branches</summary>

Thorough PR validation that tests BOTH main branch (bug present) and feature branch (bug fixed).

**What it does:**
1. Fetches PR info, detects PR number
2. Finds free ports (cross-platform)
3. Runs code review on main and feature branch in parallel
4. Classifies PR testability:
   - E2E testable: Changes affect Web UI (components, hooks, styles, API routes)
   - Code review only: Backend logic, CLI, database, tests, docs
5. If E2E testable:
   - Renders server on main branch (reproduce bug)
   - Renders server on feature branch (verify fix)
   - Runs E2E tests with browser automation on both
6. Cleans up processes and ports
7. Final report synthesizing all findings

**Example:**
```bash
archon workflow run archon-validate-pr --branch validate/pr-123 "#123"
```

**When to use:**
- Want thorough PR validation testing both branches
- Need to confirm bug exists on main and fix works on feature branch

**When NOT to use:**
- Quick code-only reviews (use `archon-smart-pr-review`)

**Note:** Long idle timeout (30 mins) for rendering and E2E testing.

</details>

---

## PRD

Workflows for implementing Product Requirements Documents with multiple user stories.

<details id="archon-ralph-fresh">
<summary><strong>archon-ralph-fresh</strong> — Stateless PRD implementation</summary>

Autonomous PRD implementation loop with fresh context each iteration (stateless).

**What it does:**

Each iteration starts with a clean slate — AI re-reads progress.txt, prd.json, prd.md every iteration. Learnings persist via progress.txt file (external memory).

1. Detects PRD directory from message or auto-detect
2. Loads current state by reading files:
   - `progress.txt` (shows past work and patterns)
   - `prd.json` (story tracking)
   - `prd.md` (full requirements)
3. Selects next eligible story (highest priority, dependencies met)
4. Implements ONE story
5. Validates (type-check, lint, tests)
6. Commits with descriptive message
7. Updates prd.json (marks `passes: true`)
8. Updates progress.txt with learnings
9. Checks completion → creates PR if done, otherwise loops

**Example:**
```bash
archon workflow run archon-ralph-fresh --branch feat/auth-system ".archon/ralph/auth-system"
```

**When to use:**
- Long PRDs (7+ stories) — avoids context window bloat
- Independent stories that don't need shared context
- Want explicit, traceable progress via progress.txt

**When NOT to use:**
- Short, tightly-coupled PRDs (use `archon-ralph-stateful`)

**Requirements:**
- `.archon/ralph/{feature}/prd.md` — Full PRD with goals, UX, technical patterns
- `.archon/ralph/{feature}/prd.json` — Story tracking (pass/fail, dependencies)

**Trade-offs:**
- Pro: No context window bloat on long loops
- Pro: Each iteration is independent and predictable
- Con: Must re-read files each iteration (slightly slower)

</details>

<details id="archon-ralph-stateful">
<summary><strong>archon-ralph-stateful</strong> — Stateful PRD implementation</summary>

Autonomous PRD implementation loop with persistent memory across iterations (stateful).

**What it does:**

Each iteration, AI remembers what it did in previous iterations. Context accumulates in the session.

1. Loads PRD context (goals, UX, technical patterns, validation)
2. Reads story tracking (prd.json) to find incomplete stories
3. Selects next eligible story (highest priority, dependencies met)
4. Implements ONE story
5. Validates (type-check, lint, tests)
6. Commits with descriptive message
7. Updates prd.json (marks `passes: true`)
8. Updates progress.txt with learnings
9. Checks completion → creates PR if done, otherwise loops

**Example:**
```bash
archon workflow run archon-ralph-stateful --branch feat/checkout ".archon/ralph/checkout"
```

**When to use:**
- Short PRDs (under 5-7 stories)
- Stories are tightly coupled and benefit from shared context
- Want AI to remember patterns from earlier stories

**When NOT to use:**
- Long PRDs (15+ stories) — context window fills up
- Independent stories that don't benefit from shared memory

**Requirements:** Same as `archon-ralph-fresh`

**Trade-offs:**
- Pro: AI has full context of previous work, remembers patterns
- Con: Context window can fill up on long loops

</details>

---

## Utility

General-purpose workflows for exploration, conflicts, and architecture.

<details id="archon-assist">
<summary><strong>archon-assist</strong> — General assistance</summary>

Full Claude Code agent with all tools available for general-purpose tasks.

**What it does:**
- Questions and explanations
- Code debugging
- Codebase exploration
- One-off tasks and helpers
- CI failure diagnosis

**Examples:**
```bash
# Ask a question
archon workflow run archon-assist --no-worktree "What does the orchestrator do?"

# Debug an issue
archon workflow run archon-assist --no-worktree "Why is the SSE connection dropping?"

# Explore code
archon workflow run archon-assist --no-worktree "How does authentication work?"
```

**When to use:**
- No other workflow matches the request
- Questions, debugging, exploration, one-off tasks

**When NOT to use:**
- Use specific workflows when they match (they're more effective)

**Tip:** Use `--no-worktree` for assist since you're exploring, not making changes.

</details>

<details id="archon-resolve-conflicts">
<summary><strong>archon-resolve-conflicts</strong> — Fix merge conflicts</summary>

Semi-automated merge conflict resolution.

**What it does:**
1. Fetches latest base branch (rebase automatically)
2. Analyzes conflicting changes
3. Auto-resolves simple conflicts where intent is clear
4. Presents options for complex conflicts
5. Commits and pushes resolution

**Example:**
```bash
archon workflow run archon-resolve-conflicts --branch resolve/pr-789 "#789"
```

**When to use:**
- PR has merge conflicts

**When NOT to use:**
- PR doesn't have conflicts
- Squashing commits (do that manually)
- General rebasing without conflicts

</details>

<details id="archon-architect">
<summary><strong>archon-architect</strong> — Codebase health improvement</summary>

Comprehensive architectural sweep and complexity reduction.

**What it does:**
1. **Measure**: Scans codebase metrics
   - File size hotspots (largest 30 source files)
   - Import/export fan-out analysis
   - Function length hotspots (50+ line functions)
   - Type safety gaps (any usage, eslint-disable)
2. **Analyze**: Reads hotspot files with architectural lens
   - Assesses single responsibility, cognitive load, abstraction value
3. **Plan**: Prioritizes and scopes changes
   - Selects top 3-5 highest-impact, lowest-risk improvements
   - Ensures each change is independently revertable
4. **Execute**: Makes changes with validation after each edit
5. **Validate**: Runs full suite (type-check, lint, tests)
6. **Create PR**: Stages changes, pushes, creates PR with assessment summary

**Example:**
```bash
archon workflow run archon-architect --branch refactor/simplify "reduce complexity in core modules"
```

**When to use:**
- Architectural sweep or codebase health improvement
- Module design, dependencies, abstractions, code duplication

**When NOT to use:**
- Single-file fixes
- Feature development
- Bug fixes
- PR reviews

**Output:** `architecture-assessment.md` with findings ranked by impact

</details>

---

## Specialized

Domain-specific workflows.

<details id="archon-remotion-generate">
<summary><strong>archon-remotion-generate</strong> — Generate Remotion videos</summary>

AI-powered Remotion video composition generation with rendering.

**What it does:**
1. Checks project structure (must have `src/index.ts`, `src/Root.tsx`)
2. Generates composition code:
   - Reads existing compositions to understand structure
   - Creates/modifies composition matching request
   - Uses Remotion patterns: useCurrentFrame, interpolate, spring
3. Renders preview stills (early, mid, late frames)
4. Renders full video (MP4, H264, CRF 18)
5. Summarizes output with file locations

**Example:**
```bash
archon workflow run archon-remotion-generate "Create a 10-second intro animation with flying text"
```

**When to use:**
- Generate or modify a Remotion video composition

**When NOT to use:**
- Don't have a Remotion project set up

**Requirements:**
- Remotion project with `src/index.ts` and `src/Root.tsx`
- Node Remotion CLI available

**Output:**
- Composition code in `src/`
- Preview stills: `out/preview-early.png`, `out/preview-mid.png`, `out/preview-late.png`
- Full video: `out/video.mp4`

</details>

<details id="archon-test-loop">
<summary><strong>archon-test-loop</strong> — Test Archon loop engine</summary>

Simple autonomous loop for testing Archon's loop functionality.

**What it does:**
1. Reads counter file (`.archon/test-loop-counter.txt`)
2. Increments counter by 1
3. Writes new value back
4. If counter >= 3, completes; otherwise loops

**Example:**
```bash
archon workflow run archon-test-loop
```

**When to use:**
- Testing Archon's loop workflow engine itself

**When NOT to use:**
- Everything else

</details>

---

## Comparison Table

| Scenario | Workflow | Why |
|----------|----------|-----|
| Fix GitHub issue #42 | `archon-fix-github-issue` | Issue exists, want full fix flow |
| Fix issue with parallel execution | `archon-fix-github-issue-dag` | Want DAG efficiency |
| "Add dark mode" (idea only) | `archon-idea-to-pr` | Creates plan, then implements |
| Execute existing plan.md | `archon-plan-to-pr` | Plan exists, want full review |
| Quick implement from plan | `archon-feature-development` | Plan exists, skip review |
| Implement 10-story PRD | `archon-ralph-fresh` | Long PRD, stateless iterations |
| Implement 3-story PRD | `archon-ralph-stateful` | Short PRD, context preserved |
| Review PR before merge | `archon-smart-pr-review` | Adapts to complexity |
| Thorough review, all agents | `archon-comprehensive-pr-review` | Want every perspective |
| Fix issue + full review | `archon-issue-review-full` | Combined pipeline |
| E2E test both branches | `archon-validate-pr` | Verify fix works |
| PR has merge conflicts | `archon-resolve-conflicts` | Specialized for conflicts |
| Codebase health | `archon-architect` | Architectural sweep |
| "How does X work?" | `archon-assist` | Exploration, no changes |
| Generate video | `archon-remotion-generate` | Remotion composition |

---

## Still Not Sure?

1. **Start with `archon-assist`** — Ask it what to do
2. **Use the decision tree above** — Follow the branches
3. **Check [Which Workflow?](/archon-cli-docs/workflows/which-workflow/)** — Decision tree and quick lookup

When in doubt, `archon-assist` is always available and can help you figure out the right approach.
