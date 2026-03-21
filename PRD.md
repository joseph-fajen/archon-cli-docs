# Archon CLI User Documentation - Product Requirements Document

## 1. Executive Summary

The Archon CLI User Documentation project creates a dedicated, pathway-based documentation site for new Archon CLI users. Rather than comprehensive reference material, this documentation provides crystal-clear guidance for practitioners who want to apply AI-powered workflows to their coding projects.

The documentation organizes content around **user intent** rather than features. Users identify themselves ("I want to fix a GitHub issue") and follow a clear pathway showing exact commands, expected outcomes, and GitHub integration. This approach addresses the core pain point: users know Archon is powerful but don't know where to start.

**MVP Goal:** Deliver a navigable Astro/Starlight documentation site covering CLI installation, the three essential workflows (fix issue, build feature, explore code), and recovery procedures — enabling new users to successfully run their first Archon workflow within 10 minutes of landing on the site.

---

## 2. Mission

**Mission Statement:** Provide Archon CLI users with immediate, scannable access to essential workflows so they can confidently apply AI-powered development automation without confusion about where to start or what to do next.

### Core Principles

1. **Pathway-Based Navigation** — Users self-select their intent and follow a clear path, not a feature list
2. **Scannable Over Comprehensive** — Tables, decision trees, and copy-paste commands over prose
3. **Command → Outcome → Result** — Every pathway shows: what to type, what happens, what you get
4. **2-4 Sentence Limit** — Ruthless conciseness at every level
5. **Assume Intelligence, Not Context** — Readers are smart but may be unfamiliar with Archon

---

## 3. Target Users

### Primary Persona: Course Practitioner

- **Background:** Developer/technical writer who has completed or is taking the Dynamous Agentic Coding Course
- **Technical Comfort:** Comfortable with CLI, git, AI coding assistants; understands PIV loop methodology
- **Context of Use:** Wants to apply Archon workflows to their own coding projects
- **Primary Need:** Crystal-clear path from "I just heard about Archon" to "I'm running workflows effectively"

### Secondary Persona: Workflow User

- **Background:** Technical developer who discovered Archon; may not know the Agentic Coding Course
- **Technical Comfort:** Comfortable with terminal, git, GitHub; less familiar with AI agent orchestration
- **Context of Use:** Wants to run AI workflows without deep understanding of internals
- **Primary Need:** Copy-paste commands that work, with clear explanations of outcomes

### Key User Needs

| Need | Description |
|------|-------------|
| **Entry Point** | "Where do I start?" — obvious first step |
| **Pathway Selection** | "Which workflow is for me?" — self-identification |
| **Exact Commands** | "What do I type?" — copy-paste ready |
| **Expected Outcome** | "What will happen?" — no surprises |
| **Recovery** | "What if it fails?" — clear next steps |

### Pain Points Addressed

- Workshop/course provides too much information without clear "next step"
- Existing docs are scattered across `/docs/`, skills, README — no single entry point
- Documentation mixes user concerns with developer/contributor concerns
- No pathway-based navigation — users must synthesize information themselves

---

## 4. MVP Scope

### In Scope

**Core Content**
- ✅ Landing page with pathway selection ("Who are you? What do you want to do?")
- ✅ Prerequisites pathway (Git, Bun, Claude Code, Archon CLI)
- ✅ Three essential workflow pathways:
  - ✅ Fix a GitHub Issue (`archon-fix-github-issue`)
  - ✅ Build a Feature from Idea (`archon-idea-to-pr`)
  - ✅ Explore Code / Ask Questions (`archon-assist`)
- ✅ Recovery pathway (resume failed runs, cleanup worktrees)
- ✅ Archon vs Claude Code explainer
- ✅ Quick reference card (all workflows, all flags)

**Technical**
- ✅ Astro framework with Starlight documentation theme
- ✅ GitHub Pages deployment
- ✅ GitHub Actions for automated build/deploy on merge to main
- ✅ Mobile-responsive design (Starlight built-in)
- ✅ Full-text search (Starlight/Pagefind built-in)
- ✅ Dark/light mode (Starlight built-in)

**Content Structure**
- ✅ 2-4 sentence summaries at each level
- ✅ Copy-paste command blocks
- ✅ Tables for comparisons and reference
- ✅ Decision trees for workflow selection

### Out of Scope (Future Phases)

**Content**
- ❌ Web UI documentation (Archon server, browser interface)
- ❌ Platform adapter docs (Slack, Telegram, Discord, GitHub webhooks)
- ❌ Workflow authoring guide (creating custom workflows)
- ❌ Command authoring guide (creating custom commands)
- ❌ PRD/Ralph workflow deep-dives
- ❌ Contributor/developer documentation

**Features**
- ❌ Interactive tutorials or exercises
- ❌ Video content
- ❌ User accounts or progress tracking
- ❌ Comments or annotations
- ❌ PDF export

**Technical**
- ❌ Custom domain (use GitHub Pages URL initially)
- ❌ Analytics beyond basic GitHub Pages stats
- ❌ Backend or database

---

## 5. User Stories

### Primary User Stories

**US-1: Pathway Selection**
> As a new Archon user, I want to see 3-4 clear pathways on the landing page so that I can immediately identify which one matches my goal.

*Example: I land on the site and see "Fix a GitHub Issue", "Build a Feature", "Explore Code" — I click "Fix a GitHub Issue" because that's what I need.*

**US-2: First Workflow Success**
> As a course practitioner with Archon installed, I want to copy a single command and run my first workflow so that I can experience Archon working on my own codebase.

*Example: I copy `archon workflow run archon-fix-github-issue --branch fix/issue-42 "#42"`, run it, and see Archon investigating my issue.*

**US-3: Prerequisites Clarity**
> As someone who just heard about Archon, I want to see exactly what I need to install so that I don't waste time with incomplete setup.

*Example: I see a 5-row table: Git, Bun, Claude Code, Authentication, Archon CLI — each with a one-liner install command.*

**US-4: Understand the Outcome**
> As a user about to run a workflow, I want to know what will happen and what I'll get so that I'm not surprised by the behavior.

*Example: Before running `archon-idea-to-pr`, I see: "Creates plan → implements → validates → creates PR → runs 5 review agents → auto-fixes issues. Result: PR ready for your review."*

**US-5: Recovery from Failure**
> As a user whose workflow failed, I want to know how to resume or clean up so that I'm not stuck with broken state.

*Example: I see a table: "Workflow failed mid-run" → `archon workflow run <name> --resume` → "Resumes from last completed step".*

**US-6: Workflow Selection**
> As a user unsure which workflow to use, I want a decision tree so that I can identify the right workflow for my situation.

*Example: "What do you need? → Fix a GitHub issue → Standard fix or comprehensive review?" with arrows to specific workflows.*

**US-7: Quick Reference**
> As an experienced user, I want a single-page reference with all workflows and flags so that I can quickly look up syntax without navigating multiple pages.

*Example: One page with: all 16 workflows (table), all CLI flags (table), variable substitution reference.*

**US-8: Conceptual Foundation**
> As a new user, I want to understand how Archon relates to Claude Code so that I understand what I'm using.

*Example: A comparison table: Claude Code = interactive AI assistant, Archon = workflow engine that orchestrates Claude Code with structure and GitHub integration.*

---

## 6. Core Architecture & Patterns

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      GitHub Pages                            │
│                    (Static Hosting)                          │
└─────────────────────────────────────────────────────────────┘
                            ▲
                            │ Deploy (GitHub Actions)
                            │
┌─────────────────────────────────────────────────────────────┐
│                    Astro + Starlight                         │
│  ┌─────────────┐  ┌─────────────┐  ┌───────────────────┐    │
│  │   Sidebar   │  │   Search    │  │   Content Pages   │    │
│  │ (Pathways)  │  │ (Pagefind)  │  │    (Markdown)     │    │
│  └─────────────┘  └─────────────┘  └───────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                            ▲
                            │ Build
                            │
┌─────────────────────────────────────────────────────────────┐
│                   Content (Markdown)                         │
│  ┌─────────────────────────────────────────────────────┐    │
│  │   Pathway → Section → Topic → Command/Example        │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

### Directory Structure

```
archon-cli-docs/
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── index.mdx                      # Landing page with pathway cards
│   │       ├── getting-started/
│   │       │   ├── index.md                   # Prerequisites overview
│   │       │   ├── install.md                 # Step-by-step installation
│   │       │   └── first-workflow.md          # Run your first workflow
│   │       ├── pathways/
│   │       │   ├── fix-github-issue.md        # Pathway 1
│   │       │   ├── build-feature.md           # Pathway 2
│   │       │   └── explore-code.md            # Pathway 3
│   │       ├── concepts/
│   │       │   ├── archon-vs-claude-code.md   # Conceptual foundation
│   │       │   ├── isolation.md               # Why worktrees matter
│   │       │   └── workflows-overview.md      # What workflows are
│   │       ├── recovery/
│   │       │   ├── resume.md                  # Resume failed workflows
│   │       │   └── cleanup.md                 # Clean up worktrees
│   │       └── reference/
│   │           ├── quick-reference.md         # All workflows, all flags
│   │           ├── cli-flags.md               # Complete flag reference
│   │           └── troubleshooting.md         # Common issues
│   └── assets/                                # Images, diagrams
├── astro.config.mjs                           # Astro + Starlight config
├── package.json
└── README.md
```

### Content Structure Pattern

Each pathway page follows this structure:

```markdown
---
title: [Pathway Name]
description: [One-sentence description]
---

## What You'll Accomplish

[2-3 sentences describing the outcome]

## The Command

```bash
archon workflow run [workflow] --branch [branch] "[message]"
```

## What Happens

1. [Step 1 — 1 sentence]
2. [Step 2 — 1 sentence]
3. [Step 3 — 1 sentence]

## What You Get

[Description of the end result: PR created, issue updated, etc.]

## Try It Now

```bash
# From your git repository
archon workflow run [workflow] --branch [branch] "[your message]"
```

## Next Steps

- [Link to related pathway]
- [Link to reference]
```

### Key Design Patterns

1. **Pathway-First Navigation** — Sidebar organized by user intent, not features
2. **Command-Outcome-Result** — Every pathway shows all three
3. **Progressive Disclosure** — Overview → pathway → details → reference
4. **Scannable Tables** — Comparisons, options, and references in table format
5. **Copy-Paste Ready** — All commands in copyable code blocks

---

## 7. Features

### 7.1 Landing Page

**Purpose:** Immediate pathway selection for new users

**Key Features:**
- 3 prominent pathway cards (Fix Issue, Build Feature, Explore Code)
- "Getting Started" call-to-action for users without Archon installed
- Single sentence describing what Archon does
- No lengthy explanation — straight to action

### 7.2 Prerequisites/Installation

**Purpose:** Get users from zero to running in minimal steps

**Key Features:**
- Prerequisites table (5 items, each with one-liner install)
- Step-by-step installation for Archon CLI
- Verification command for each step
- "You're ready when..." checklist

### 7.3 Pathway Pages

**Purpose:** Guide users through their chosen task end-to-end

**Key Features:**
- The exact command (copy-paste ready)
- What happens (numbered steps, 1 sentence each)
- What you get (concrete outcome)
- Try it now (with their repo)
- Related pathways

### 7.4 Concepts Section

**Purpose:** Build foundational understanding without blocking action

**Key Features:**
- Archon vs Claude Code comparison table
- Why isolation matters (worktrees explained simply)
- Workflow mental model (YAML → commands → AI agents)

### 7.5 Recovery Section

**Purpose:** Unblock users when things go wrong

**Key Features:**
- Resume table (situation → command → result)
- Cleanup commands with explanations
- Common failure scenarios

### 7.6 Quick Reference

**Purpose:** Single-page lookup for experienced users

**Key Features:**
- All 16 workflows in one table (name, when to use, one-liner)
- All CLI flags in one table
- Variable substitution reference
- Decision tree for workflow selection

### 7.7 Search

**Purpose:** Fast lookup of any concept or command

**Key Features:**
- Full-text search via Starlight/Pagefind (built-in)
- Keyboard shortcut (Cmd/Ctrl + K)
- Search results with context preview

---

## 8. Technology Stack

### Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| **Astro** | ^4.x | Static site generator |
| **Starlight** | ^0.x | Documentation theme for Astro |
| **Node.js** | ^18.x | Build environment |

### Built-in Dependencies (via Starlight)

| Dependency | Purpose |
|------------|---------|
| **Pagefind** | Client-side full-text search |
| **Shiki** | Syntax highlighting for code blocks |
| **Expressive Code** | Enhanced code blocks with copy button |

### Development Dependencies

| Dependency | Purpose |
|------------|---------|
| **TypeScript** | Type safety (Starlight default) |

### Deployment

| Service | Purpose |
|---------|---------|
| **GitHub Pages** | Static hosting |
| **GitHub Actions** | Automated build and deploy on merge to main |

---

## 9. Security & Configuration

### Security Scope

**In Scope:**
- ✅ No user data collection
- ✅ No authentication required
- ✅ Static content only (no server-side processing)
- ✅ HTTPS via GitHub Pages

**Out of Scope:**
- ❌ User accounts
- ❌ Form submissions
- ❌ API endpoints
- ❌ Database connections
- ❌ Analytics tracking (beyond GitHub Pages default)

### Configuration

**Astro Configuration (`astro.config.mjs`):**

```javascript
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://[username].github.io',
  base: '/archon-cli-docs',
  integrations: [
    starlight({
      title: 'Archon CLI',
      sidebar: [
        { label: 'Home', link: '/' },
        {
          label: 'Getting Started',
          autogenerate: { directory: 'getting-started' },
        },
        {
          label: 'Pathways',
          items: [
            { label: 'Fix a GitHub Issue', link: '/pathways/fix-github-issue' },
            { label: 'Build a Feature', link: '/pathways/build-feature' },
            { label: 'Explore Code', link: '/pathways/explore-code' },
          ],
        },
        {
          label: 'Concepts',
          autogenerate: { directory: 'concepts' },
        },
        {
          label: 'Recovery',
          autogenerate: { directory: 'recovery' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
```

**GitHub Actions Workflow (`.github/workflows/deploy.yml`):**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

---

## 10. Success Criteria

### MVP Definition of Done

The MVP is complete when:

**Functional Requirements:**
- ✅ Landing page with 3 pathway cards is live
- ✅ Prerequisites page lists all 5 requirements with install commands
- ✅ All 3 primary pathways have complete content
- ✅ Recovery section covers resume and cleanup
- ✅ Quick reference page includes all 16 workflows
- ✅ Search returns relevant results
- ✅ Site is deployed and accessible on GitHub Pages
- ✅ Site is responsive on mobile devices

**Content Requirements:**
- ✅ Every command is copy-paste ready
- ✅ Every pathway shows: command, what happens, what you get
- ✅ 2-4 sentence limit respected throughout
- ✅ Tables used for all comparisons and references
- ✅ Decision tree for workflow selection included

**Quality Indicators:**
- ✅ Page load time < 3 seconds
- ✅ Search returns results in < 1 second
- ✅ No broken internal links
- ✅ Consistent formatting across all pages
- ✅ All code blocks have copy button

### User Experience Goals

| Goal | Measure |
|------|---------|
| Time to first workflow | User can run first workflow within 10 minutes of landing |
| Pathway identification | User can identify correct pathway in < 30 seconds |
| Command discovery | User can find any command via search in < 15 seconds |
| Recovery success | User can resume failed workflow without external help |

---

## 11. Implementation Phases

### Phase 1: Foundation

**Goal:** Establish project structure and deploy placeholder site

**Deliverables:**
- ✅ Create GitHub repository `archon-cli-docs`
- ✅ Initialize Astro project with Starlight
- ✅ Configure sidebar with pathway structure
- ✅ Create placeholder pages for all sections
- ✅ Set up GitHub Actions deployment
- ✅ Deploy to GitHub Pages

**Validation:**
- Site is accessible at GitHub Pages URL
- Navigation between sections works
- Search functionality is active

---

### Phase 2: Core Pathways

**Goal:** Complete the three essential workflow pathways

**Deliverables:**
- ✅ Write landing page with pathway cards
- ✅ Write Prerequisites/Installation content
- ✅ Write "Fix a GitHub Issue" pathway
- ✅ Write "Build a Feature" pathway
- ✅ Write "Explore Code" pathway
- ✅ Write "First Workflow" getting-started page

**Validation:**
- User can follow any pathway from start to finish
- All commands are verified to work
- Content reviewed for 2-4 sentence limit

---

### Phase 3: Concepts & Recovery

**Goal:** Provide foundational understanding and failure recovery

**Deliverables:**
- ✅ Write Archon vs Claude Code explainer
- ✅ Write Isolation/Worktrees explainer
- ✅ Write Resume pathway
- ✅ Write Cleanup pathway
- ✅ Add troubleshooting page

**Validation:**
- User can understand Archon's role without prior knowledge
- User can recover from common failure scenarios

---

### Phase 4: Reference & Polish

**Goal:** Complete reference material and polish UX

**Deliverables:**
- ✅ Write Quick Reference page (all workflows, all flags)
- ✅ Add decision tree for workflow selection
- ✅ Review all content for consistency
- ✅ Test mobile responsiveness
- ✅ Verify all internal links
- ✅ Final deployment

**Validation:**
- Meets all success criteria
- Usable by new Archon users (real user testing)
- Ready to share with Dynamous community

---

## 12. Future Considerations

### Post-MVP Content

- Web UI documentation (Archon server, browser interface)
- Platform adapter guides (Slack, Telegram, Discord, GitHub webhooks)
- Workflow authoring guide (creating custom YAML workflows)
- Command authoring guide (creating custom markdown commands)
- PRD/Ralph workflow deep-dives
- Advanced configuration guide

### Feature Enhancements

- Interactive workflow selector (guided questions → recommended workflow)
- Video walkthroughs for each pathway
- Progress tracking (localStorage-based "completed pathways")
- Diagram visualizations (workflow execution flow)
- Print-friendly / PDF export view

### Technical Enhancements

- Custom domain (e.g., `docs.archon.dev`)
- Analytics integration (privacy-respecting)
- Versioned documentation (for Archon releases)
- Integration with Archon repo (auto-sync workflow descriptions)

### Community Contributions

- Contribution guide for documentation
- Community-submitted examples
- Translation support

---

## 13. Risks & Mitigations

### Risk 1: Content Accuracy

**Risk:** Documentation may not accurately reflect Archon CLI behavior

**Mitigation:**
- Test all commands against actual Archon installation
- Link to source of truth (Archon repo) for dynamic content
- Version documentation with Archon releases
- Establish update process when Archon changes

### Risk 2: Scope Creep

**Risk:** Temptation to add Web UI docs, workflow authoring, etc. before CLI docs are complete

**Mitigation:**
- Strict adherence to MVP scope (CLI only)
- Document future ideas in this PRD's "Future Considerations"
- Complete all 4 phases before expanding scope

### Risk 3: Content Staleness

**Risk:** Documentation becomes outdated as Archon evolves

**Mitigation:**
- Structure allows incremental updates
- Clear mapping from Archon features to doc sections
- Consider future auto-sync from Archon repo workflow descriptions
- Git history tracks all changes

### Risk 4: Discoverability

**Risk:** Users don't find the documentation site

**Mitigation:**
- Link prominently from Archon README
- Link from Archon skill files
- Share in Dynamous community
- Consider PR to Archon repo to add link

### Risk 5: Wrong Pathway Abstraction

**Risk:** The 3-pathway structure doesn't match how users actually think

**Mitigation:**
- Test with real new users (including PRD author)
- Gather feedback after launch
- Be willing to restructure based on usage patterns

---

## 14. Appendix

### A. Source Material

Content will be synthesized from these existing sources:

| Source | Location | Purpose |
|--------|----------|---------|
| Archon CLAUDE.md | `remote-coding-agent/CLAUDE.md` | Architecture, commands, patterns |
| CLI User Guide | `remote-coding-agent/docs/cli-user-guide.md` | CLI reference |
| Workflow Quick Reference | `remote-coding-agent/docs/workflow-quick-reference.md` | Workflow summaries |
| Archon Skill | `remote-coding-agent/.claude/skills/archon/SKILL.md` | Workflow selection, examples |
| Setup Guide | `remote-coding-agent/.claude/skills/archon/guides/setup.md` | Installation steps |
| CLI Guide | `remote-coding-agent/.claude/skills/archon/guides/cli.md` | CLI setup |

### B. All Archon Workflows Reference

| Workflow | Category | When to Use |
|----------|----------|-------------|
| `archon-fix-github-issue` | Fix & Implement | Fix a GitHub issue → PR |
| `archon-fix-github-issue-dag` | Fix & Implement | Same, parallel execution |
| `archon-idea-to-pr` | Fix & Implement | Feature idea → plan → PR |
| `archon-plan-to-pr` | Fix & Implement | Execute existing plan → PR |
| `archon-feature-development` | Fix & Implement | Implement from plan (lighter) |
| `archon-smart-pr-review` | Review | Efficient PR review (adapts) |
| `archon-comprehensive-pr-review` | Review | Full 5-agent review |
| `archon-issue-review-full` | Review | Fix + comprehensive review |
| `archon-validate-pr` | Review | Test both branches |
| `archon-ralph-fresh` | PRD | Long PRDs (stateless) |
| `archon-ralph-stateful` | PRD | Short PRDs (with memory) |
| `archon-assist` | Utility | Questions, debugging, exploration |
| `archon-resolve-conflicts` | Utility | Fix merge conflicts |
| `archon-architect` | Utility | Codebase health |
| `archon-remotion-generate` | Specialized | Create Remotion videos |
| `archon-test-loop` | Specialized | Internal testing |

### C. CLI Flags Reference

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

### D. Related Projects

| Project | URL | Relationship |
|---------|-----|--------------|
| Archon (remote-coding-agent) | `github.com/dynamous-community/remote-coding-agent` | The tool being documented |
| Agentic Coding Companion | `github.com/joseph-fajen/agentic-coding-companion` | Template/inspiration for doc site |
| Dynamous Community | `dynamous.ai` | Community context |

### E. Repository Setup Checklist

When creating the `archon-cli-docs` repository:

- [ ] Create repository on GitHub
- [ ] Initialize with Astro + Starlight
- [ ] Configure GitHub Pages deployment
- [ ] Add GitHub Actions workflow
- [ ] Create initial directory structure
- [ ] Deploy placeholder site
- [ ] Add link from Archon README (future PR)
