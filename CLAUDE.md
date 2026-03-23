# Archon CLI Docs - Global Rules

## Core Principles

- **Pathway-based navigation** — Organize content by user intent, not features
- **Command → Outcome → Result** — Every pathway shows what to type, what happens, what you get
- **2-4 sentence limit** — Ruthless conciseness at every level
- **Copy-paste ready** — All commands in copyable code blocks
- **Tables over prose** — Use tables for comparisons and references
- **Assume intelligence, not context** — Readers are smart but may be unfamiliar with Archon

## Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Astro | ^6.x |
| Theme | @astrojs/starlight | ^0.38.x |
| Runtime | Node.js | 22 |
| Package Manager | npm | - |
| Hosting | GitHub Pages | - |
| CI/CD | GitHub Actions | - |

## Architecture

```
src/content/docs/           # All documentation content (Markdown/MDX)
├── index.mdx               # Landing page with pathway cards
├── getting-started/        # Prerequisites, Install, First Workflow
├── workflows/              # Which Workflow?, All Workflows
├── guides/                 # Fix Issue, Build Feature, Explore Code
├── concepts/               # Archon vs Claude Code, Isolation, Workflows
└── reference/              # Quick Reference, Resume & Cleanup, CLI Flags, Troubleshooting

astro.config.mjs            # Starlight config, sidebar structure
.github/workflows/deploy.yml # GitHub Pages deployment
```

### Content Structure Pattern

Each guide page follows this structure:
1. **The Command** — Copy-paste ready bash block
2. **What Happens** — Numbered steps, 1 sentence each
3. **What You Get** — Concrete outcome description
4. **Options** — Table of relevant flags
5. **Next Steps** — Links to related guides

## Code Style

### Markdown Content
- Use ATX headers (`##`) not Setext
- Code blocks require language identifier (```bash, ```yaml)
- Tables: left-align text columns, use consistent column widths
- Links: use relative paths within docs, full URLs for external

### Frontmatter
```yaml
---
title: Page Title
description: One-sentence description for SEO/previews
sidebar:
  order: 1  # Optional: explicit ordering
---
```

### MDX Components
Import Starlight components as needed:
```mdx
import { Card, CardGrid } from '@astrojs/starlight/components';
```

## Common Commands

```bash
# Development
npm run dev          # Start dev server at localhost:4321

# Build
npm run build        # Build to ./dist/
npm run preview      # Preview production build locally

# Deployment
# Automatic via GitHub Actions on push to main
```

## Content Guidelines

### When Adding New Pages
1. Create file in appropriate directory under `src/content/docs/`
2. Add frontmatter with title and description
3. Update `astro.config.mjs` sidebar if not using autogenerate
4. Follow the pathway structure pattern for pathway pages

### When Editing Existing Content
- Preserve the 2-4 sentence limit
- Keep commands copy-paste ready (no placeholders without explanation)
- Update related pages if changing workflow names or flags

## Out of Scope (Future)

Do not add documentation for:
- Web UI (Archon server, browser interface)
- Platform adapters (Slack, Telegram, Discord)
- Workflow/command authoring guides
- Contributor/developer documentation
