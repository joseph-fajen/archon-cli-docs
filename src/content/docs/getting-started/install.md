---
title: Installation
description: Install Archon CLI in 2 minutes
---

Clone the Archon repository and link the CLI globally.

## Install Steps

```bash
# Clone Archon
git clone https://github.com/dynamous-community/remote-coding-agent
cd remote-coding-agent

# Install dependencies
bun install

# Link CLI globally
cd packages/cli && bun link && cd ../..

# Authenticate Claude (if not already done)
claude /login
```

## Verify Installation

```bash
# From any directory
archon --version
```

**You're ready when:** `archon --version` shows a version number.

## Next Steps

- [Run Your First Workflow](/archon-cli-docs/getting-started/first-workflow/) — See Archon working on your code
