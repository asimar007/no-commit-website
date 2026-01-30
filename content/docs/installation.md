---
title: Installation
description: Install and set up nocommit.
---

Getting nocommit up and running takes less than a minute. Let's walk through it.

## Prerequisites

- **Node.js** (v18 or higher)
- **Git** installed and configured
- A **Gemini API key** from [Google AI Studio](https://aistudio.google.com/apikey)

## Quick Install

Install nocommit globally using your package manager of choice.

### npm

```bash
npm install -g nocommit
```

That's it! You can now use `nocommit` from anywhere in your terminal.

### Homebrew (macOS/Linux)

Install via Homebrew tap:

```bash
brew tap asimar007/no-commit https://github.com/asimar007/no-commit
brew install nocommit
```

## API Key Setup

nocommit needs a Gemini API key to generate commit messages. Set the key so nocommit can use it:

```bash
nocommit config set GEMINI_API_KEY=<your_api_key>
```

This stores your configuration securely using [conf](https://github.com/sindresorhus/conf).

> **Note:** If you haven't already, you'll need to create an account at [Google AI Studio](https://aistudio.google.com/apikey) and get your API key. It's free to get started!

## Verify Installation

Check that nocommit is installed correctly:

```bash
nocommit --version
```

You should see the current version number (e.g., `0.0.4`). If you do, you're all set!

## Upgrading

Check the installed version with:

```bash
nocommit --version
```

If it's not the [latest version](https://github.com/asimar007/no-commit/releases/latest), run:

```bash
npm update -g nocommit
```

Or if you installed via Homebrew:

```bash
brew update
brew upgrade nocommit
```

**Having trouble?** Check out our [FAQ](/docs/reference/faq) or [open an issue](https://github.com/asimar007/no-commit/issues) on GitHub.
