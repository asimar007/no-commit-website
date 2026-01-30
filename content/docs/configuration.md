---
title: Configuration
description: Configure nocommit for your workflow.
---

nocommit is designed to work great out of the box, but it's also highly configurable. Here's how to tailor nocommit to your workflow.

## Configuration Storage

nocommit stores config via [conf](https://github.com/sindresorhus/conf), which puts settings wherever your OS expects them. You can manage everything through nocommit's commands—no need to touch the file directly.

## Reading Configuration Values

To retrieve a specific configuration option:

```bash
nocommit config get <key>
```

For example, to retrieve the model:

```bash
nocommit config get model
```

To view all configuration values at once:

```bash
nocommit config get
```

This displays all current settings, with API keys partially masked for security.

## Setting Configuration Values

To set a configuration option:

```bash
nocommit config set <key>=<value>
```

For example, to set the API key:

```bash
nocommit config set GEMINI_API_KEY=<your-api-key>
```

## Available Options

### GEMINI_API_KEY

**Required**

The Google Gemini API key. You can get one for free from [Google AI Studio](https://aistudio.google.com/apikey).

```bash
nocommit config set GEMINI_API_KEY=<your token>
```

### model

**Default:** `gemini-2.5-flash`

The Gemini model to use for generating commit messages.

```bash
nocommit config set model=gemini-2.0-flash
```

### generate

**Default:** `3`

The number of commit messages to generate to pick from. Must be between 1 and 5.

```bash
nocommit config set generate=5
```

> **Note:** Higher values use more tokens as the AI generates more results.

### maxLength

**Default:** `72`

The maximum character length of the generated commit message. Must be between 20 and 500.

```bash
nocommit config set maxLength=100
```

> **Tip:** The default of 72 characters follows the widely-accepted git commit message convention for subject lines.

### timeout

**Default:** `30000` (30 seconds)

The timeout for network requests to the Gemini API in milliseconds. Must be between 5000 and 120000.

```bash
nocommit config set timeout=60000 # 60s
```

## Configuration Summary

| Option           | Default            | Range       | Description                           |
| ---------------- | ------------------ | ----------- | ------------------------------------- |
| `GEMINI_API_KEY` | —                  | —           | Your Google Gemini API key (required) |
| `model`          | `gemini-2.5-flash` | —           | Gemini model to use                   |
| `maxLength`      | `72`               | 20–500      | Max commit message length             |
| `timeout`        | `30000`            | 5000–120000 | API timeout in milliseconds           |
| `generate`       | `3`                | 1–5         | Number of suggestions to generate     |

## Example Configuration

Here's a typical setup for a developer who wants longer commit messages and more options:

```bash
# Set your API key
nocommit config set GEMINI_API_KEY=your_api_key_here

# Allow longer commit messages
nocommit config set maxLength=100

# Generate 5 suggestions to choose from
nocommit config set generate=5

# Increase timeout for slow connections
nocommit config set timeout=60000
```

## Verify Your Configuration

After setting up, verify everything is configured correctly:

```bash
nocommit config get
```

You should see output like:

```bash
Current configuration:
  GEMINI_API_KEY: AIza...xyz
  model: gemini-2.5-flash
  maxLength: 72
  timeout: 30000
  generate: 3
```
