# Feature: Phase 2 Content Accuracy Refinements

The following plan should be complete, but validate documentation and codebase patterns before implementing.

Pay special attention to maintaining the PRD's content principles: 2-4 sentence limit, Command → Outcome → Result pattern, copy-paste ready commands.

## Feature Description

Refine the Getting Started and Reference pages to ensure all content accurately reflects the actual Archon CLI behavior as documented in the source material (`remote-coding-agent` repository). This includes removing unsupported flags, fixing command syntax, and correcting fictional examples.

## User Story

As a new Archon CLI user
I want accurate, copy-paste-ready documentation
So that I can run workflows successfully on my first attempt

## Problem Statement

The current documentation contains inaccuracies that could confuse users or cause commands to fail:
- GitHub CLI listed as required but not mentioned in source material
- Command syntax uses `archon --version` but actual command is `archon version`
- CLI flags `--quiet/-q` and `--verbose/-v` documented but not present in source
- Fictional output examples and install URLs

## Solution Statement

Update 6 documentation files to match the actual Archon CLI behavior as documented in the source material. Remove unsupported flags, fix command syntax, and replace fictional content with accurate information or remove it entirely.

## Feature Metadata

**Feature Type**: Content Refinement / Bug Fix
**Estimated Complexity**: Low
**Primary Systems Affected**: Markdown content files in `src/content/docs/`
**Dependencies**: None (content-only changes)

---

## CONTEXT REFERENCES

### Relevant Codebase Files - READ THESE BEFORE IMPLEMENTING!

**Source of Truth (Archon repo):**
- `/Users/josephfajen/git/remote-coding-agent/.claude/skills/archon/SKILL.md` - Workflow details, CLI patterns
- `/Users/josephfajen/git/remote-coding-agent/docs/cli-user-guide.md` - CLI flags, commands, examples
- `/Users/josephfajen/git/remote-coding-agent/docs/workflow-quick-reference.md` - All workflows, decision tree
- `/Users/josephfajen/git/remote-coding-agent/.claude/skills/archon/guides/cli.md` - Installation steps

**Files to Modify:**
- `src/content/docs/getting-started/index.md` (Prerequisites) - Lines 10-16, requirements table
- `src/content/docs/getting-started/install.md` (Installation) - Lines 29-32, verify command
- `src/content/docs/getting-started/first-workflow.md` (First Workflow) - Lines 29-36, output example
- `src/content/docs/reference/quick-reference.md` (Quick Reference) - Lines 31-42, CLI flags table
- `src/content/docs/reference/cli-flags.md` (CLI Flags) - Lines 10-18, global flags section
- `src/content/docs/reference/troubleshooting.md` (Troubleshooting) - Lines 25-31, Claude install; Line 107, --verbose reference

### Patterns to Follow

**PRD Content Principles (from PRD.md):**
- 2-4 sentence limit per section
- Command → Outcome → Result pattern
- Copy-paste ready commands
- Tables for comparisons and references
- Scannable over comprehensive

**Markdown Frontmatter Pattern:**
```markdown
---
title: Page Title
description: One-sentence description
---
```

**Table Pattern:**
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Value    | Value    | Value    |
```

**Command Block Pattern:**
```markdown
```bash
# Comment explaining command
archon workflow run workflow-name "message"
```
```

---

## IMPLEMENTATION PLAN

### Phase 1: Prerequisites Fix

Update the requirements table to remove GitHub CLI (not in source material) or clarify it as optional for PR creation.

### Phase 2: Installation Fix

Fix the verify command from `archon --version` to `archon version`.

### Phase 3: First Workflow Fix

Remove or simplify the fictional output example that shows `[Archon]...` format.

### Phase 4: Reference Pages Fix

Remove unsupported `--quiet/-q` and `--verbose/-v` flags from Quick Reference and CLI Flags pages.

### Phase 5: Troubleshooting Fix

Fix Claude install URL and remove reference to `--verbose` flag.

---

## STEP-BY-STEP TASKS

IMPORTANT: Execute every task in order, top to bottom. Each task is atomic and independently testable.

---

### Task 1: UPDATE `src/content/docs/getting-started/index.md`

Remove GitHub CLI from required prerequisites. The source material (cli.md, setup.md) only lists Git, Bun, and Claude Code as requirements. GitHub CLI is only needed if manually creating PRs outside of Archon workflows.

**CURRENT (lines 10-16):**
```markdown
| Tool | Why | Check | Install |
|------|-----|-------|---------|
| **Git** | Version control for worktrees | `git --version` | [git-scm.com](https://git-scm.com/) |
| **Bun** | JavaScript runtime for Archon | `bun --version` | `curl -fsSL https://bun.sh/install \| bash` |
| **Claude Code** | AI assistant that Archon orchestrates | `claude --version` | [claude.ai/install](https://claude.ai/code) |
| **GitHub CLI** | Create PRs, manage issues | `gh --version` | `brew install gh` |
```

**NEW:**
```markdown
| Tool | Why | Check | Install |
|------|-----|-------|---------|
| **Git** | Version control for worktrees | `git --version` | [git-scm.com](https://git-scm.com/) |
| **Bun** | JavaScript runtime for Archon | `bun --version` | `curl -fsSL https://bun.sh/install \| bash` |
| **Claude Code** | AI assistant that Archon orchestrates | `claude --version` | [claude.ai/code](https://claude.ai/code) |
```

**ALSO UPDATE verify command (lines 19-22):**

**CURRENT:**
```markdown
```bash
# Run all checks
git --version && bun --version && claude --version && gh --version
```
```

**NEW:**
```markdown
```bash
# Run all checks
git --version && bun --version && claude --version
```
```

**ALSO UPDATE ready message (line 24):**

**CURRENT:**
```markdown
**You're ready when:** All four commands return version numbers.
```

**NEW:**
```markdown
**You're ready when:** All three commands return version numbers.
```

**VALIDATE:** `grep -c "GitHub CLI\|gh --version" src/content/docs/getting-started/index.md` should return `0`

---

### Task 2: UPDATE `src/content/docs/getting-started/install.md`

Fix verify command syntax. Source uses `archon version` not `archon --version`.

**CURRENT (lines 29-32):**
```markdown
```bash
# From any directory
archon --version
```

**You're ready when:** `archon --version` shows a version number.
```

**NEW:**
```markdown
```bash
# From any directory
archon version
```

**You're ready when:** `archon version` shows a version number.
```

**VALIDATE:** `grep "archon version" src/content/docs/getting-started/install.md` should match 2 lines

---

### Task 3: UPDATE `src/content/docs/getting-started/first-workflow.md`

Remove fictional output example. The `[Archon]...` format is fabricated and may not match actual CLI output. Replace with simpler guidance.

**CURRENT (lines 28-36):**
```markdown
## What You'll See

```
[Archon] Creating worktree...
[Archon] Running archon-assist...
[Claude] Analyzing codebase...

This project is a [description]...
```
```

**NEW:**
```markdown
## What You'll See

Archon will create an isolated worktree, run Claude Code to analyze your project, and return a detailed explanation. The workflow typically takes 1-2 minutes.
```

**VALIDATE:** `grep -c "\[Archon\]" src/content/docs/getting-started/first-workflow.md` should return `0`

---

### Task 4: UPDATE `src/content/docs/reference/quick-reference.md`

Remove `--quiet/-q` and `--verbose/-v` flags from CLI Flags table. These are not documented in the source material (cli-user-guide.md).

**CURRENT (lines 31-42):**
```markdown
## CLI Flags

| Flag | Effect |
|------|--------|
| `--cwd <path>` | Target directory |
| `--branch <name>` | Explicit branch for worktree |
| `--from <branch>` | Override base branch |
| `--no-worktree` | Skip isolation, run in live checkout |
| `--resume` | Resume from last failed run |
| `--quiet`, `-q` | Reduce log verbosity |
| `--verbose`, `-v` | Show debug output |
| `--json` | Machine-readable output (workflow list) |
```

**NEW:**
```markdown
## CLI Flags

| Flag | Effect |
|------|--------|
| `--cwd <path>` | Target directory |
| `--branch <name>` | Explicit branch for worktree |
| `--from <branch>` | Override base branch |
| `--no-worktree` | Skip isolation, run in live checkout |
| `--resume` | Resume from last failed run |
| `--json` | Machine-readable output (`workflow list` only) |
```

**VALIDATE:** `grep -c "quiet\|verbose" src/content/docs/reference/quick-reference.md` should return `0`

---

### Task 5: UPDATE `src/content/docs/reference/cli-flags.md`

Remove `--quiet/-q` and `--verbose/-v` from Global Flags section. These are not in the source material.

**CURRENT (lines 10-18):**
```markdown
## Global Flags

| Flag | Short | Description |
|------|-------|-------------|
| `--help` | `-h` | Show help |
| `--version` | | Show version |
| `--quiet` | `-q` | Reduce log verbosity |
| `--verbose` | `-v` | Show debug output |
```

**NEW:**
```markdown
## Global Flags

| Flag | Short | Description |
|------|-------|-------------|
| `--help` | `-h` | Show help |
| `--version` | | Show version |
```

**VALIDATE:** `grep -c "quiet\|verbose" src/content/docs/reference/cli-flags.md` should return `0`

---

### Task 6: UPDATE `src/content/docs/reference/troubleshooting.md`

Fix two issues:
1. Remove reference to `--verbose` flag in "Getting Help" section
2. Fix Claude Code install instructions (URL is fictional)

**ISSUE 1 - CURRENT (lines 101-108):**
```markdown
## Getting Help

If you're stuck:

1. Check `archon workflow status` for error details
2. Run with `--verbose` for debug output
3. Ask in the [Dynamous community](https://dynamous.ai)
4. File an issue on [GitHub](https://github.com/dynamous-community/remote-coding-agent/issues)
```

**ISSUE 1 - NEW:**
```markdown
## Getting Help

If you're stuck:

1. Check `archon workflow status` for error details
2. Ask in the [Dynamous community](https://dynamous.ai)
3. File an issue on [GitHub](https://github.com/dynamous-community/remote-coding-agent/issues)
```

**ISSUE 2 - CURRENT (lines 24-31):**
```markdown
### "claude: command not found"

Claude Code CLI isn't installed.

```bash
# macOS/Linux
curl -fsSL https://claude.ai/install.sh | bash

# Then authenticate
claude /login
```
```

**ISSUE 2 - NEW:**
```markdown
### "claude: command not found"

Claude Code CLI isn't installed. Visit [claude.ai/code](https://claude.ai/code) to install, then authenticate:

```bash
claude /login
```
```

**VALIDATE:**
- `grep -c "verbose" src/content/docs/reference/troubleshooting.md` should return `0`
- `grep -c "install.sh" src/content/docs/reference/troubleshooting.md` should return `0`

---

## TESTING STRATEGY

### Content Validation

After all edits, verify content accuracy:

```bash
# Check no remaining references to removed items
grep -r "gh --version\|GitHub CLI" src/content/docs/getting-started/
grep -r "quiet\|verbose" src/content/docs/reference/
grep -r "install.sh" src/content/docs/
grep -r "archon --version" src/content/docs/
```

All should return no matches.

### Build Validation

```bash
cd /Users/josephfajen/git/archon-cli-docs
npm run build
```

Build should complete with no errors.

### Visual Validation

```bash
npm run dev
```

Open http://localhost:4321/archon-cli-docs/ and manually verify:
- Prerequisites page shows 3 requirements (not 4)
- Installation page shows `archon version` command
- First Workflow page has no fictional output block
- Quick Reference CLI flags table has 6 rows (not 8)
- CLI Flags page Global Flags section has 2 rows (not 4)
- Troubleshooting page has clean Claude install instructions

---

## VALIDATION COMMANDS

Execute every command to ensure zero regressions and 100% feature correctness.

### Level 1: Content Checks

```bash
# Verify removed content is gone
grep -r "gh --version" src/content/docs/ && echo "FAIL: gh still referenced" || echo "PASS"
grep -r "\-\-quiet\|\-\-verbose" src/content/docs/ && echo "FAIL: quiet/verbose still referenced" || echo "PASS"
grep -r "install\.sh" src/content/docs/ && echo "FAIL: install.sh still referenced" || echo "PASS"
grep -r "archon --version" src/content/docs/ && echo "FAIL: archon --version still used" || echo "PASS"
grep -r "\[Archon\]" src/content/docs/ && echo "FAIL: fictional output still present" || echo "PASS"
```

### Level 2: Build Check

```bash
cd /Users/josephfajen/git/archon-cli-docs && npm run build
```

### Level 3: Link Validation

```bash
# After build, check for broken internal links
grep -r "](/archon-cli-docs/" src/content/docs/ | grep -v "^Binary" | head -20
```

Manually verify linked pages exist.

---

## ACCEPTANCE CRITERIA

- [ ] Prerequisites page lists only Git, Bun, Claude Code (no GitHub CLI)
- [ ] Installation page uses `archon version` command syntax
- [ ] First Workflow page has no fictional `[Archon]...` output block
- [ ] Quick Reference CLI flags table has no `--quiet`/`--verbose` entries
- [ ] CLI Flags page Global Flags section has no `--quiet`/`--verbose` entries
- [ ] Troubleshooting page has corrected Claude install instructions
- [ ] Troubleshooting page has no `--verbose` reference in Getting Help
- [ ] `npm run build` completes successfully
- [ ] All validation grep commands pass (return no matches for removed content)

---

## COMPLETION CHECKLIST

- [ ] Task 1: Prerequisites page updated
- [ ] Task 2: Installation page updated
- [ ] Task 3: First Workflow page updated
- [ ] Task 4: Quick Reference page updated
- [ ] Task 5: CLI Flags page updated
- [ ] Task 6: Troubleshooting page updated
- [ ] All validation commands pass
- [ ] Build succeeds
- [ ] Manual visual check complete

---

## NOTES

### Design Decisions

1. **Removed GitHub CLI entirely** rather than marking optional — keeps prerequisites simple and matches source material. Users who need `gh` for manual PR work will likely already have it.

2. **Removed fictional output example** rather than trying to capture real output — the CLI output format may change, and the PRD principle of "scannable over comprehensive" suggests a brief description is better.

3. **Removed `--quiet`/`--verbose` flags** — these are not in the source material. If they exist as undocumented flags, they can be added back later with verification.

### Risks

- **Low risk:** These are content-only changes with no code impact
- **Potential issue:** If `--quiet`/`--verbose` flags actually exist but aren't documented in source, we're removing valid documentation. Mitigation: can be restored if verified.

### Future Considerations

- Consider adding `archon complete` command to Recovery section (exists in source but not documented)
- Consider adding `archon setup` command reference (exists in source but not documented)
- The Claude Code install URL `claude.ai/code` should be verified as the actual install page
