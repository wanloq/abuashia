# Portfolio Architecture

> Version 1.0  
> Last Updated: July 2026

---

# Overview

This repository contains my personal developer portfolio and technical blog.

The project serves two primary purposes:

- Showcase my projects, skills, and professional journey.
- Document everything I learn while transitioning into Full-Stack Development and AI/ML Engineering.

Rather than using a heavyweight framework, this project is intentionally built using **HTML**, **Tailwind CSS**, and **Vanilla JavaScript**, with a modular architecture that emphasizes maintainability, performance, and scalability.

The long-term objective is to maintain a fast, framework-independent website that can be deployed directly to GitHub Pages while still providing many of the features found in modern developer blogs.

---

# High-Level Architecture

```
                    GitHub Pages
                          │
                          │
             Static HTML + CSS + JS
                          │
        ┌─────────────────┴──────────────────┐
        │                                    │
 Portfolio Website                    Blog System
        │                                    │
        │                                    │
  Static HTML Pages                Markdown Articles
        │                                    │
        └───────────────┬────────────────────┘
                        │
                JavaScript Modules
                        │
        Theme • Navigation • Search
        Markdown Rendering
        Syntax Highlighting
        Related Posts
```

---

# Project Structure

```text
portfolio/

├── index.html
├── blog.html
├── post.html
│
├── posts/
│   ├── article-one.md
│   ├── article-two.md
│   └── ...
│
├── data/
│   └── posts.json
│
├── docs/
│   ├── architecture.md
│   ├── blog-system.md
│   ├── deployment.md
│   ├── javascript.md
│   ├── styling-guide.md
│   ├── writing-posts.md
│   ├── roadmap.md
│   └── decisions.md
│
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── icons/
│
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
└── LICENSE
```

---

# Architectural Principles

The project follows a small set of engineering principles that guide every design decision.

## 1. Separation of Concerns

Content, presentation, and behaviour are kept independent.

| Layer | Responsibility |
|--------|----------------|
| Markdown | Content |
| HTML | Layout |
| Tailwind CSS | Styling |
| JavaScript | Behaviour |

Each layer should evolve independently whenever possible.

---

## 2. Component-Based Design

Although the site is built with static HTML, every section is treated as a reusable component.

Examples include:

- Navigation Bar
- Hero Section
- About Section
- Project Cards
- Blog Cards
- Newsletter
- Footer

Each component has a clearly defined responsibility.

---

## 3. Modular JavaScript

Every JavaScript file has a single responsibility.

Example:

```
theme.js

Only controls dark mode.
```

```
navbar.js

Only controls navigation.
```

```
blog.js

Only renders blog cards.
```

This keeps the project maintainable as it grows.

---

## 4. Progressive Enhancement

The website should remain usable even if JavaScript fails.

Core content should always be accessible.

JavaScript is used to improve the experience rather than make the site functional.

---

## 5. Performance First

The project prioritizes:

- minimal dependencies
- fast loading
- small bundle sizes
- responsive interactions

Every feature should justify its cost.

---

# Page Responsibilities

## index.html

Purpose:

Personal portfolio.

Contains:

- Hero
- About
- Skills
- Projects
- Contact

---

## blog.html

Purpose:

Display a searchable collection of articles.

Responsibilities:

- Featured article
- Recent articles
- Search
- Categories
- Tags
- Pagination

---

## post.html

Purpose:

Render a single Markdown article.

Responsibilities:

- Article rendering
- Table of contents
- Reading progress
- Code highlighting
- Related posts

---

# Assets

## CSS

```
output.css

Compiled Tailwind stylesheet.
```

Additional files may include:

- prose.css
- highlight.css

---

## Images

Stores:

- profile images
- blog covers
- project screenshots
- logos
- icons

---

## JavaScript

Every file has one responsibility.

Detailed documentation can be found in:

```
docs/javascript.md
```

---

# Blog Architecture

Articles are not written directly in HTML.

Instead:

```
Markdown

↓

JavaScript

↓

HTML Rendering

↓

Displayed inside post.html
```

Advantages include:

- easier writing
- cleaner version control
- automatic syntax highlighting
- automatic table of contents
- reusable templates

Detailed documentation is available in:

```
docs/blog-system.md
```

---

# Why Vanilla JavaScript?

This project intentionally avoids large frontend frameworks.

Reasons include:

- excellent performance
- smaller downloads
- easier deployment
- easier learning
- no build complexity for simple pages

The architecture remains modular enough that a future migration to Astro, Next.js, or another framework would be straightforward if project requirements change.

---

# Design Philosophy

The visual design is inspired by modern engineering-focused products.

Key influences include:

- Vercel
- Stripe
- GitHub
- Linear
- OpenAI

The guiding principles are:

- simplicity
- readability
- consistency
- accessibility
- generous whitespace
- restrained animations

---

# Scalability

The architecture is designed to support future features without major restructuring.

Planned additions include:

- RSS feed
- comments
- analytics
- newsletter integration
- image optimization
- AI-powered search
- article series
- multi-language support

---

# Future Migration

If this project eventually moves to Astro, Hugo, or Next.js:

- Markdown articles can be reused.
- Tailwind styles can be reused.
- Images can be reused.
- Design language remains unchanged.

Only the rendering layer would change.

---

# Summary

The architecture prioritizes:

- Maintainability
- Simplicity
- Performance
- Scalability
- Developer Experience

By separating content, presentation, and behaviour, the project remains easy to understand, extend, and maintain while continuing to serve as both a professional portfolio and a long-term learning platform.