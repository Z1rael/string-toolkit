# Contributing to @fsd24229/string-toolkit

Thank you for considering contributing! This document outlines how to get involved.

---

## Table of Contents

- [Contributing to @fsd24229/string-toolkit](#contributing-to-fsd24229string-toolkit)
  - [Table of Contents](#table-of-contents)
  - [Code of Conduct](#code-of-conduct)
  - [Getting Started](#getting-started)
  - [Development Workflow](#development-workflow)
  - [Commit Message Guidelines](#commit-message-guidelines)
  - [Submitting a Pull Request](#submitting-a-pull-request)
  - [Reporting Issues](#reporting-issues)
  - [Requesting Features](#requesting-features)

---

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone. Please be kind, constructive, and professional in all interactions.

---

## Getting Started

1. **Fork** the repository on GitHub.
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/Z1rael/string-toolkit.git
   cd string-toolkit
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the tests** to make sure everything works before you start:
   ```bash
   npm test
   ```

---

## Development Workflow

1. Create a new branch from `main` for your change:
   ```bash
   git checkout -b feat/your-feature-name
   ```
2. Make your changes.
3. Add or update tests to cover your changes.
4. Run the full test suite and make sure all tests pass:
   ```bash
   npm test
   ```
5. Commit your changes following the [commit guidelines](#commit-message-guidelines).
6. Push your branch and open a Pull Request.

---

## Commit Message Guidelines

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <short description>
```

| Type       | When to use                                             |
| ---------- | ------------------------------------------------------- |
| `feat`     | A new feature                                           |
| `fix`      | A bug fix                                               |
| `docs`     | Documentation changes only                              |
| `test`     | Adding or updating tests                                |
| `chore`    | Maintenance tasks (deps, config, etc.)                  |
| `refactor` | Code change that neither fixes a bug nor adds a feature |

**Examples:**
```
feat: add toCamelCase function
fix: handle empty string in toSnakeCase
docs: update README with new examples
```

---

## Submitting a Pull Request

- Fill out the pull request template completely.
- Link any related issues (e.g. `Closes #12`).
- Keep PRs focused — one feature or fix per PR.
- Make sure all tests pass and no new warnings are introduced.
- A maintainer will review your PR and may request changes before merging.

---

## Reporting Issues

Please use the [Issue Template](.github/ISSUE_TEMPLATE/ISSUE_TEMPLATE.md) when reporting bugs. Include as much detail as possible: what you expected, what actually happened, and a minimal reproducible example if possible.

---

## Requesting Features

Use the [Feature Request Template](.github/ISSUE_TEMPLATE/FEATURE_REQUEST_TEMPLATE.md) to suggest new ideas. Explain the problem you're trying to solve and why the feature would be valuable.
