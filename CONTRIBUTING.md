# Contributing Guide

> Version 1.0  
> Last Updated: July 2026

Thank you for your interest in contributing to this project.

Although this portfolio is currently maintained by a single developer, the project follows professional open-source practices to ensure consistency, maintainability, and scalability.

Whether you're fixing a typo, improving documentation, reporting a bug, or proposing a new feature, your contributions are welcome.

---

# Table of Contents

- Code of Conduct
- Ways to Contribute
- Getting Started
- Project Structure
- Development Workflow
- Branch Naming
- Commit Messages
- Coding Standards
- Documentation Standards
- Pull Requests
- Reporting Issues
- Feature Requests
- Testing
- Style Guidelines
- Accessibility
- Security
- License

---

# Code of Conduct

Be respectful.

Be constructive.

Be patient.

Everyone contributing to this project is expected to create a welcoming and inclusive environment.

Discrimination, harassment, or abusive behavior will not be tolerated.

---

# Ways to Contribute

Contributions may include:

- Bug fixes
- Documentation improvements
- Accessibility improvements
- Performance optimizations
- New UI components
- Blog improvements
- Responsive design fixes
- Typographical corrections
- Feature suggestions

---

# Getting Started

Clone the repository.

```bash
git clone https://github.com/wanloq/portfolio.git
```

Navigate into the project.

```bash
cd portfolio
```

Install dependencies.

```bash
npm install
```

Run the development server.

```bash
npm run dev
```

---

# Project Structure

```
portfolio/

├── assets/
│   ├── css/
│   ├── images/
│   └── js/

├── posts/

├── docs/

├── index.html

├── blog.html

├── post.html

├── package.json

└── README.md
```

Please review the documentation inside the `docs/` directory before making major changes.

---

# Development Workflow

1. Fork the repository.
2. Create a feature branch.
3. Implement the change.
4. Test thoroughly.
5. Update documentation if needed.
6. Commit your changes.
7. Open a Pull Request.

---

# Branch Naming

Use descriptive branch names.

Examples

```
feature/blog-search

feature/mobile-navbar

feature/dark-mode

feature/rss-feed

fix/navbar-scroll

fix/mobile-layout

docs/readme-update

refactor/blog-renderer
```

Avoid generic names such as:

```
new

update

changes

test
```

---

# Commit Messages

Use clear, descriptive commit messages.

Recommended format:

```
type(scope): description
```

Examples

```
feat(blog): add markdown rendering

feat(search): implement article search

fix(navbar): close menu after navigation

fix(theme): preserve user preference

docs(readme): improve installation guide

style(hero): refine spacing

refactor(blog): simplify rendering pipeline
```

Recommended commit types:

```
feat

fix

docs

style

refactor

perf

test

build

chore
```

---

# Coding Standards

## HTML

- Use semantic elements.
- Maintain proper indentation.
- Include accessible labels.
- Avoid inline styles.

---

## CSS / Tailwind

- Prefer utility classes.
- Avoid duplicated styles.
- Reuse existing design patterns.
- Support both light and dark themes.

---

## JavaScript

Follow these principles:

- Single Responsibility
- Small reusable functions
- Avoid global variables
- Early returns
- Descriptive names
- Modular architecture

Example

Good

```javascript
initializeNavbar()
```

Avoid

```javascript
start()
```

---

# Documentation Standards

Every significant feature should include documentation updates.

Possible files include:

```
README.md

architecture.md

blog-system.md

deployment.md

components.md

content-strategy.md
```

Documentation should stay synchronized with the implementation.

---

# Blog Articles

When adding articles:

- Use Markdown.
- Complete all Front Matter fields.
- Use descriptive slugs.
- Compress images.
- Verify code examples.

Refer to:

```
docs/writing-posts.md
```

---

# UI Components

Before introducing a new component:

- Check whether a similar component already exists.
- Follow the design system.
- Maintain spacing consistency.
- Support dark mode.
- Ensure responsive behavior.

See:

```
docs/components.md
```

---

# Accessibility

All contributions should meet accessibility best practices.

Requirements:

- Semantic HTML
- Keyboard navigation
- Focus indicators
- Descriptive alt text
- Appropriate ARIA attributes
- Sufficient color contrast

Test using Lighthouse whenever practical.

---

# Performance

Contributors should avoid introducing unnecessary bloat.

Priorities:

- Lazy-load images where appropriate.
- Minimize JavaScript.
- Optimize assets.
- Avoid duplicate code.

Performance should remain a first-class concern.

---

# Testing Checklist

Before submitting a Pull Request:

- HTML validates.
- No JavaScript console errors.
- Mobile layout verified.
- Desktop layout verified.
- Dark mode tested.
- Navigation tested.
- Images load correctly.
- Links verified.
- Lighthouse score checked after significant UI changes.

---

# Pull Requests

A good Pull Request should:

- Focus on a single feature or fix.
- Include a clear description.
- Explain the motivation.
- Reference related issues if applicable.
- Update documentation when necessary.

Small, focused Pull Requests are preferred over large unrelated changes.

---

# Reporting Bugs

When opening an issue, include:

- Description
- Expected behavior
- Actual behavior
- Browser
- Operating system
- Steps to reproduce
- Screenshots (if applicable)

This helps reproduce and resolve issues more efficiently.

---

# Feature Requests

Feature requests should include:

- Problem statement
- Proposed solution
- Alternative approaches considered
- Potential benefits
- Any drawbacks or trade-offs

Discussion is encouraged before implementing large features.

---

# Security

If you discover a security issue, please avoid creating a public issue immediately.

Instead:

- Describe the issue privately to the maintainer.
- Include reproduction steps if possible.
- Allow time for investigation and remediation before public disclosure.

---

# Dependencies

When adding a dependency, ask:

- Is it actively maintained?
- Does it solve a real problem?
- Can the same outcome be achieved with existing tools?
- Does it increase bundle size unnecessarily?

Favor lightweight, well-maintained libraries.

---

# Design Philosophy

This project values:

- Simplicity over complexity.
- Readability over cleverness.
- Maintainability over shortcuts.
- Performance over unnecessary abstraction.
- Accessibility by default.

Every contribution should reinforce these principles.

---

# Recognition

Contributors may be acknowledged in the project's release notes or documentation.

Every contribution, regardless of size, is appreciated.

---

# License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project itself.

Refer to the project's `LICENSE` file for details.

---

# Thank You

Thank you for taking the time to improve this project.

Whether you're fixing a typo, suggesting a feature, or contributing code, your efforts help make the project better for everyone.

Happy building! 🚀