---
title: Introduction
description: Learn what nocommit is and why you should use it.
---

nocommit is a CLI tool that writes your git commit messages for you with AI using Google Gemini. Never write a commit message again.

## Why nocommit?

Writing good commit messages is hard. We've all been there:

- Staring at a blank commit message box, unsure what to write
- Defaulting to vague messages like "fix bug" or "update stuff"
- Struggling to maintain consistency across team commits
- Spending more time writing commit messages than actually coding

nocommit takes the hassle out of commit messages. It looks at your changes and writes a clear, useful message for you—so you can skip the mental overhead and get back to coding.

## How It Works

```bash
# Stage your changes
git add .

# Generate and commit with AI-generated message
nocommit

# That's it!
```

## Features

- **Lightning Fast** - Powered by Google's Gemini AI for quick, intelligent responses
- **Context-Aware** - Analyzes actual code changes, not just file names
- **Token-Efficient** - Smart diff extraction limits files and lines to save API costs
- **Conventional Commits** - Generates proper conventional commit format automatically
- **Interactive Workflow** - Review, edit, regenerate, or commit with a beautiful CLI interface
- **Multiple Suggestions** - Generate up to 5 commit message options to choose from
- **Smart Defaults** - Works great out of the box, customizable when you need it

## What Makes nocommit Special

nocommit uses Google's Gemini AI, which provides:

- **Advanced understanding** - Gemini analyzes your code changes semantically
- **Cost-effective** - Generous free tier and affordable pricing
- **Fast inference** - Get commit messages in seconds
- **Reliable** - Google's infrastructure ensures high uptime and consistent performance

## Smart Diff Handling

For efficient API usage and accurate commit messages, nocommit automatically:

1. **Limits file count** - Processes up to 5 files to stay within token limits
2. **Extracts key changes** - Captures only added/removed lines (up to 30 per file)
3. **Enforces size limits** - Keeps total diff under 4000 characters
4. **Excludes noise** - Ignores lock files, build outputs, and generated files automatically

This ensures you get accurate commit messages without hitting API limits or wasting tokens on irrelevant content like `package-lock.json` or `node_modules`.

## Excluded Files

nocommit automatically excludes these files from diff analysis:

- Lock files: `package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, `bun.lock`
- Build outputs: `dist/**`, `build/**`, `.next/**`
- Generated files: `*.min.js`, `*.map`, `*.log`
- Dependencies: `node_modules/**`

**Ready to upgrade your commits?** Let's get you started with [installation](/docs/installation) and setup.
