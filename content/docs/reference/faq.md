---
title: FAQ
description: Common questions and troubleshooting for nocommit.
---

Quick answers to common questions about nocommit.

## Common Errors

### "Missing API Key"

Configure your API key:

```bash
nocommit config set GEMINI_API_KEY=<your token>
```

Get your key for free from [Google AI Studio](https://aistudio.google.com/apikey).

### "No staged changes found"

Stage your changes first:

```bash
git add .
nocommit
```

Or use the `--all` flag to automatically stage all tracked files:

```bash
nocommit --all
```

### "Not a git repository"

Make sure you're inside a git repository:

```bash
git init  # If starting a new project
nocommit
```

Or navigate to an existing git repository before running nocommit.

### "Invalid Gemini API Key"

Your API key may be incorrect or expired. Verify and reset it:

```bash
# Check current key (partially masked)
nocommit config get GEMINI_API_KEY

# Set a new key
nocommit config set GEMINI_API_KEY=<your new token>
```

### "API quota exceeded"

You've hit Gemini's usage limits. Options:

1. **Wait** - Free tier limits reset periodically
2. **Check usage** - Visit [Google AI Studio](https://aistudio.google.com/) to view your quota
3. **Upgrade** - Consider a paid plan for higher limits

### "Network error"

Check your internet connection and try again. If you're behind a firewall or proxy, ensure API requests to Google are allowed.

### "AI returned empty response"

This occasionally happens. Simply try again:

```bash
nocommit  # Run again
```

Or use the **Regenerate** option in the interactive menu.

### Request timeout

If requests are timing out on slow connections, increase the timeout:

```bash
nocommit config set timeout=60000  # 60 seconds
```

## Quick Questions

### Why does nocommit use Gemini instead of other AI services?

nocommit uses Google's Gemini AI because it provides:

- **Advanced understanding** - Gemini analyzes your code changes semantically
- **Generous free tier** - Get started without any cost
- **Fast inference** - Get commit messages in seconds
- **Reliable** - Google's infrastructure ensures high uptime
- **Cost-effective** - Affordable pricing when you need more

### Does nocommit send my code to Google?

Only your **git diff** (staged changes) is sent to generate the commit message, not your entire codebase. nocommit also:

- Limits analysis to 5 files maximum
- Extracts only 30 lines per file
- Keeps total diff under 4000 characters
- Excludes lock files and build outputs automatically

### How much does it cost?

nocommit uses Google's Gemini API, which offers a generous free tier. For most developers, the free tier is sufficient for regular use. Check [Google AI Studio](https://aistudio.google.com/) for current pricing and limits.

### How does nocommit handle large diffs?

For large commits, nocommit automatically optimizes to stay within token limits:

1. **Limits files** - Processes up to 5 files
2. **Extracts changes** - Captures only added/removed lines (30 per file max)
3. **Enforces size limits** - Keeps total diff under 4000 characters
4. **Excludes noise** - Ignores lock files, build outputs, and generated files

This ensures you can commit large changes without hitting API limits while maintaining accuracy.

### What files are automatically excluded?

nocommit excludes these files from diff analysis:

- **Lock files**: `package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, `bun.lock`
- **Build outputs**: `dist/**`, `build/**`, `.next/**`
- **Generated files**: `*.min.js`, `*.map`, `*.log`
- **Dependencies**: `node_modules/**`

### Does nocommit support Conventional Commits?

Yes! nocommit automatically generates commit messages following the [Conventional Commits](https://conventionalcommits.org/) specification with proper types like `feat`, `fix`, `docs`, `refactor`, etc.

### Can I get multiple commit message suggestions?

Yes! Configure the `generate` setting:

```bash
nocommit config set generate=5  # Generate up to 5 options
```

Then use the **Regenerate** option in the interactive menu to cycle through suggestions.

### Can I change the AI model?

Yes! Set a different Gemini model:

```bash
nocommit config set model=gemini-2.0-flash
```

The default is `gemini-2.5-flash`, which provides a good balance of speed and quality.

### Where is my configuration stored?

nocommit uses [conf](https://github.com/sindresorhus/conf) for configuration storage, which saves settings in a platform-appropriate location:

- **macOS**: `~/Library/Preferences/nocommit-nodejs/config.json`
- **Linux**: `~/.config/nocommit-nodejs/config.json`
- **Windows**: `%APPDATA%\nocommit-nodejs\config.json`

### Can I use nocommit in CI/CD pipelines?

nocommit is designed for interactive use. For CI/CD, you might want to use the `--yes` flag to skip confirmation, but be aware that automated commits should be reviewed carefully.

## Need More Help?

- [Installation Guide](/docs/installation) - Setup and configuration
- [Usage Guide](/docs/usage) - Commands and flags
- [Configuration](/docs/configuration) - Settings and options
- [GitHub Issues](https://github.com/asimar007/no-commit/issues) - Report bugs or request features
