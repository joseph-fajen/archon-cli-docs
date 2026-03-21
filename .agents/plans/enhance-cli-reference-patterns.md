# Feature: Enhance CLI Reference with Missing User Patterns

The following plan should be complete, but validate documentation and codebase patterns before implementing.

Pay special attention to maintaining the PRD's content principles: 2-4 sentence limit, tables over prose, copy-paste ready commands.

## Feature Description

Add three missing user-facing patterns from the Archon source material (SKILL.md, cli-user-guide.md) to complete the CLI documentation. These patterns help users name branches correctly, understand flag aliases, and run multiple workflows in parallel.

## User Story

As an Archon CLI user (new or returning)
I want complete yet concise documentation of CLI patterns
So that I can find commands quickly and use Archon correctly and confidently

## Problem Statement

The Archon CLI docs site is missing three user-facing patterns that exist in the source material:
1. `--from-branch` alias for `--from` flag (users may encounter both forms)
2. Branch naming conventions table (users guess at naming without guidance)
3. Multi-issue invocation pattern (users incorrectly combine multiple issues into one command)

## Solution Statement

Add the missing content to two existing reference files (quick-reference.md and cli-flags.md) following established formatting patterns. No new files needed. Changes are additive and preserve existing structure.

## Feature Metadata

**Feature Type**: Enhancement (content refinement)
**Estimated Complexity**: Low
**Primary Systems Affected**: `src/content/docs/reference/quick-reference.md`, `src/content/docs/reference/cli-flags.md`
**Dependencies**: None (content-only changes)

---

## CONTEXT REFERENCES

### Relevant Codebase Files - READ THESE BEFORE IMPLEMENTING!

**Files to Modify:**
- `src/content/docs/reference/cli-flags.md` (line 22) - Add `--from-branch` alias mention
- `src/content/docs/reference/quick-reference.md` (after line 40, after line 81) - Add two new sections

**Pattern Reference Files:**
- `src/content/docs/reference/quick-reference.md` (lines 12-29) - Table format for workflows
- `src/content/docs/reference/quick-reference.md` (lines 33-40) - CLI flags table format
- `src/content/docs/reference/quick-reference.md` (lines 64-81) - Code block format for commands
- `src/content/docs/reference/cli-flags.md` (lines 19-25) - Flag table with examples column

**Source Material (READ FOR ACCURATE CONTENT):**
- `/Users/josephfajen/git/remote-coding-agent/.claude/skills/archon/SKILL.md` (lines 123-133) - Branch naming conventions table
- `/Users/josephfajen/git/remote-coding-agent/.claude/skills/archon/SKILL.md` (lines 180-209) - Multi-issue invocation pattern
- `/Users/josephfajen/git/remote-coding-agent/docs/cli-user-guide.md` (line 90) - `--from-branch` alias

### Patterns to Follow

**Table Format (from quick-reference.md):**
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| `code` | Description | `example` |
```

**Code Block Format:**
```markdown
```bash
# Comment explaining the command
archon workflow run workflow-name --branch branch-name "message"
```
```

**Content Principles (from CLAUDE.md):**
- 2-4 sentence limit per section
- Tables over prose
- Copy-paste ready commands
- Backticks for all code elements

---

## IMPLEMENTATION PLAN

### Phase 1: Add --from-branch Alias

Update cli-flags.md to mention that `--from-branch` is an alias for `--from`.

### Phase 2: Add Branch Naming Conventions

Add new section to quick-reference.md with branch naming table after CLI Flags section.

### Phase 3: Add Multiple Workflows Pattern

Add new section to quick-reference.md showing how to run multiple workflows in parallel after Common Commands section.

---

## STEP-BY-STEP TASKS

IMPORTANT: Execute every task in order, top to bottom. Each task is atomic and independently testable.

---

### Task 1: UPDATE `src/content/docs/reference/cli-flags.md` - Add --from-branch alias

**IMPLEMENT**: Update the `--from` flag row in the Workflow Run Flags table to mention the `--from-branch` alias.

**CURRENT (line 22):**
```markdown
| `--from <branch>` | Base branch (default: main) | `--from develop` |
```

**NEW:**
```markdown
| `--from <branch>` | Base branch (default: main). Alias: `--from-branch` | `--from develop` |
```

**PATTERN**: Follows existing table format in cli-flags.md:19-25
**VALIDATE**: `grep "from-branch" src/content/docs/reference/cli-flags.md` should return 1 match

---

### Task 2: UPDATE `src/content/docs/reference/quick-reference.md` - Add Branch Naming Conventions section

**IMPLEMENT**: Add a new section after the CLI Flags table (after line 40) with branch naming conventions.

**INSERT AFTER LINE 40** (after the CLI Flags table, before the Decision Tree):

```markdown

## Branch Naming Conventions

| Task Type | Pattern | Example |
|-----------|---------|---------|
| Fix issue | `fix/issue-{number}` | `fix/issue-123` |
| Feature | `feat/{name}` | `feat/dark-mode` |
| PR review | `review/pr-{number}` | `review/pr-456` |
| Resolve conflicts | `resolve/pr-{number}` | `resolve/pr-456` |
| General assist | `assist/{description}` | `assist/debug-auth` |
```

**PATTERN**: Mirrors table format from quick-reference.md:12-29 and source SKILL.md:127-133
**GOTCHA**: Ensure blank line before and after the new section
**VALIDATE**: `grep -c "Branch Naming" src/content/docs/reference/quick-reference.md` should return 1

---

### Task 3: UPDATE `src/content/docs/reference/quick-reference.md` - Add Multiple Workflows section

**IMPLEMENT**: Add a new section at the end of the file (after Common Commands) showing how to run multiple workflows in parallel.

**APPEND AFTER LINE 81** (after Common Commands section):

```markdown

## Running Multiple Workflows

Run each workflow separately with its own branch. Do NOT combine multiple issues into one command.

```bash
# Correct: Run each issue in its own worktree (can run in parallel)
archon workflow run archon-fix-github-issue --branch fix/issue-1 "#1"
archon workflow run archon-fix-github-issue --branch fix/issue-2 "#2"
archon workflow run archon-fix-github-issue --branch fix/issue-3 "#3"
```

Each workflow gets its own isolated worktree, so they won't conflict.
```

**PATTERN**: Follows code block format from quick-reference.md:64-81 and source SKILL.md:189-201
**GOTCHA**: Keep explanation to 2 sentences per the PRD principle
**VALIDATE**: `grep -c "Multiple Workflows" src/content/docs/reference/quick-reference.md` should return 1

---

## TESTING STRATEGY

### Content Validation

After all edits, verify content accuracy:

```bash
# Check new content exists
grep "from-branch" src/content/docs/reference/cli-flags.md
grep "Branch Naming" src/content/docs/reference/quick-reference.md
grep "Multiple Workflows" src/content/docs/reference/quick-reference.md

# Verify branch naming examples are present
grep "fix/issue-123" src/content/docs/reference/quick-reference.md
grep "feat/dark-mode" src/content/docs/reference/quick-reference.md
```

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

Open http://localhost:4321/archon-cli-docs/reference/quick-reference/ and verify:
- Branch Naming Conventions table appears after CLI Flags
- Multiple Workflows section appears after Common Commands
- Table formatting is consistent with other tables on page

Open http://localhost:4321/archon-cli-docs/reference/cli-flags/ and verify:
- `--from` flag row mentions `--from-branch` alias

---

## VALIDATION COMMANDS

Execute every command to ensure zero regressions and 100% feature correctness.

### Level 1: Content Checks

```bash
# Verify new content exists
grep "from-branch" src/content/docs/reference/cli-flags.md && echo "PASS: --from-branch alias added" || echo "FAIL"
grep "Branch Naming Conventions" src/content/docs/reference/quick-reference.md && echo "PASS: Branch naming section added" || echo "FAIL"
grep "Multiple Workflows" src/content/docs/reference/quick-reference.md && echo "PASS: Multiple workflows section added" || echo "FAIL"

# Verify branch naming examples
grep "fix/issue-123" src/content/docs/reference/quick-reference.md && echo "PASS: fix example" || echo "FAIL"
grep "feat/dark-mode" src/content/docs/reference/quick-reference.md && echo "PASS: feat example" || echo "FAIL"
grep "review/pr-456" src/content/docs/reference/quick-reference.md && echo "PASS: review example" || echo "FAIL"
```

### Level 2: Build Check

```bash
cd /Users/josephfajen/git/archon-cli-docs && npm run build
```

### Level 3: Link Validation

```bash
# Check no broken internal links introduced
grep -r "](/archon-cli-docs/" src/content/docs/reference/ | head -10
```

---

## ACCEPTANCE CRITERIA

- [ ] `--from-branch` alias documented in cli-flags.md
- [ ] Branch Naming Conventions table added to quick-reference.md with 5 task types
- [ ] Multiple Workflows section added to quick-reference.md with parallel execution example
- [ ] All new content follows 2-4 sentence limit principle
- [ ] All new tables use backticks for code elements
- [ ] `npm run build` completes successfully
- [ ] All validation grep commands pass

---

## COMPLETION CHECKLIST

- [ ] Task 1: cli-flags.md updated with --from-branch alias
- [ ] Task 2: quick-reference.md updated with Branch Naming Conventions
- [ ] Task 3: quick-reference.md updated with Multiple Workflows section
- [ ] All validation commands pass
- [ ] Build succeeds
- [ ] Visual check confirms proper formatting

---

## NOTES

### Design Decisions

1. **Placed branch naming in quick-reference.md** rather than cli-flags.md because quick-reference is the "everything on one page" document and users looking up command syntax will naturally see it.

2. **Kept Multi-issue section brief** (2 sentences + code block) to match PRD's "scannable over comprehensive" principle. The source SKILL.md has more detail about "WRONG" examples, but that's unnecessary for user docs.

3. **Added alias inline** in the flag description rather than a separate row to avoid table clutter. The alias is a minor detail, not a primary lookup term.

### Content Sources

All content verified against authoritative source material:
- Branch naming: SKILL.md lines 123-133
- Multi-issue pattern: SKILL.md lines 180-209
- --from-branch alias: cli-user-guide.md line 90

### Risks

- **Very low risk**: Content-only changes to existing files
- **No structural changes**: Sidebar, navigation, and page structure unchanged
