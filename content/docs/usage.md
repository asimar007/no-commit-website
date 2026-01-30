---
title: Usage
description: Use nocommit's commands and features.
---

nocommit makes generating commit messages effortless. Here's everything you need to know.

## Generating Commits

### Basic Usage

Stage your changes and run nocommit:

```bash
git add <files...>
nocommit
```

nocommit analyzes your staged changes and generates a commit message. You'll see an interactive menu to:

- ✓ Commit the message
- ✎ Edit the message
- ↻ Regenerate a new suggestion
- ✖ Cancel

### Stage All Changes

You can stage all tracked file changes as you commit:

```bash
nocommit --all # or -a
```

This runs `git add --update` before generating the commit message.

### Skip Confirmation

If you trust nocommit and want to commit immediately with the first suggestion:

```bash
nocommit --yes # or -y
```

This skips the interactive menu and commits directly.

### Combine Flags

You can combine flags for a streamlined workflow:

```bash
nocommit -a -y  # Stage all and commit immediately
```

## Interactive Menu

After generating a message, nocommit presents an interactive menu:

```bash
Generated commit message:
feat: add user authentication with JWT tokens

? What would you like to do?
❯ ✓ Commit
  ✎ Edit
  ↻ Regenerate
  ✖ Cancel
```

### Menu Options

| Option         | Description                            |
| -------------- | -------------------------------------- |
| **Commit**     | Use the message and create the commit  |
| **Edit**       | Modify the message in an inline editor |
| **Regenerate** | Generate a fresh commit message        |
| **Cancel**     | Exit without committing                |

### Editing Messages

**Edit** opens a small text editor with the generated message. Tweak it however you like, and your changes become the new commit message.

## Conventional Commits

nocommit automatically generates commit messages following the [Conventional Commits](https://conventionalcommits.org/) specification:

```bash
<type>: <description>
```

### Supported Types

| Type       | When to Use                            |
| ---------- | -------------------------------------- |
| `feat`     | New user-facing feature                |
| `fix`      | Bug fix                                |
| `docs`     | Documentation only                     |
| `style`    | Formatting, missing semi-colons        |
| `refactor` | Code change without new feature or fix |
| `perf`     | Performance improvement                |
| `test`     | Adding or correcting tests             |
| `build`    | Build system, dependencies             |
| `ci`       | CI configuration                       |
| `chore`    | Maintenance, config updates            |

> **Note:** nocommit does not use scopes (e.g., `feat(auth): add login`). It generates clean messages like `feat: add login` for simplicity.

## Smart Diff Handling

nocommit is designed to be token-efficient while maintaining accuracy:

### Automatic Optimizations

- **File limiting** - Analyzes up to 5 files to stay within token limits
- **Line extraction** - Captures only changed lines (up to 30 per file)
- **Size constraints** - Keeps total diff under 4000 characters
- **Noise filtering** - Excludes lock files, build outputs, and generated files

### Auto-Excluded Files

These files are automatically excluded from diff analysis:

| Category      | Files                                                          |
| ------------- | -------------------------------------------------------------- |
| Lock files    | `package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, `bun.lock` |
| Build outputs | `dist/**`, `build/**`, `.next/**`                              |
| Generated     | `*.min.js`, `*.map`, `*.log`                                   |
| Dependencies  | `node_modules/**`                                              |

This ensures you get accurate commit messages without wasting tokens on irrelevant content.

## All Available Flags

| Flag         | Description                                        |
| ------------ | -------------------------------------------------- |
| `-a, --all`  | Stage all tracked changes before generating        |
| `-y, --yes`  | Skip confirmation and commit with first suggestion |
| `-h, --help` | Show help information                              |
| `--version`  | Show version number                                |

## Quick Examples

```bash
# Basic commit
git add .
nocommit

# Stage all tracked changes and commit
nocommit --all

# Skip confirmation, commit immediately
nocommit --yes

# Stage all and commit immediately (fastest workflow)
nocommit -a -y

# Check version
nocommit --version

# Get help
nocommit --help
```

## Workflow Tips

### For Quick Commits

When you're confident in your changes and want speed:

```bash
nocommit -a -y
```

### For Thoughtful Commits

When you want to review and potentially edit:

```bash
git add <specific-files>
nocommit
# Review → Edit if needed → Commit
```

### For Multiple Options

If you want more suggestions to choose from, configure the `generate` setting:

```bash
nocommit config set generate=5
nocommit  # Now generates 5 options
```

> **Tip:** Need to configure API keys, models, or other settings? Check out [Configuration](/docs/configuration) for setup instructions.
