# JavaScript Architecture

> Version 1.0
> Last Updated: July 2026

---

# Overview

The Portfolio and Blog use **modular Vanilla JavaScript**.

Each file has a **single responsibility**, making the codebase easier to understand, maintain, test, and extend.

Instead of placing all JavaScript inside one large file, functionality is separated into independent modules that work together.

---

# Design Principles

The JavaScript architecture follows five principles.

## Single Responsibility

Every module should perform one task only.

Good example:

```
theme.js

↓

Controls dark mode only
```

Bad example:

```
theme.js

↓

Dark mode

↓

Navigation

↓

Animations

↓

Search
```

---

## Loose Coupling

Modules should communicate through clearly defined interfaces rather than directly modifying one another.

Example

```
main.js

↓

initializeNavbar()

↓

initializeTheme()

↓

initializeAnimations()
```

Each module remains independent.

---

## Progressive Enhancement

Core website functionality should remain available even if JavaScript fails.

JavaScript enhances the experience by adding:

- animations
- search
- syntax highlighting
- markdown rendering
- reading progress
- theme switching

---

## Performance

Only load scripts where they are needed.

Example

Portfolio page:

```
theme.js

navbar.js

typing.js

animations.js
```

Blog page:

```
theme.js

navbar.js

blog.js

search.js
```

Article page:

```
theme.js

navbar.js

markdown.js

toc.js

progress.js

related.js

syntax.js
```

---

## Scalability

Adding new features should require creating a new module rather than modifying unrelated code.

---

# Directory Structure

```text
assets/

└── js/

    ├── main.js
    ├── theme.js
    ├── navbar.js
    ├── about.js
    ├── animations.js
    ├── typing.js

    ├── blog.js
    ├── post.js
    ├── markdown.js

    ├── toc.js
    ├── progress.js
    ├── syntax.js
    ├── copy-code.js
    ├── search.js
    ├── pagination.js
    ├── related.js

    └── utils.js
```

---

# Module Responsibilities

## main.js

Purpose

Application entry point.

Responsibilities

- initialize modules
- page detection
- event registration

Example

```
DOMContentLoaded

↓

initializeTheme()

↓

initializeNavbar()

↓

initializeAnimations()

↓

initializeBlog()
```

---

## theme.js

Responsibilities

- dark mode
- local storage
- system preference detection
- theme switching

Public API

```javascript
initializeTheme()

toggleTheme()
```

---

## navbar.js

Responsibilities

- mobile menu
- active links
- navbar scroll effect
- close on navigation

Public API

```javascript
initializeNavbar()
```

---

## about.js

Responsibilities

- Read More
- Read Less

Public API

```javascript
initializeAbout()
```

---

## animations.js

Responsibilities

- fade animations
- scroll animations
- reveal effects
- intersection observer

Public API

```javascript
initializeAnimations()
```

---

## typing.js

Responsibilities

- hero typing animation

Public API

```javascript
initializeTyping()
```

---

# Blog Modules

---

## blog.js

Responsibilities

- load posts.json
- create article cards
- featured article
- categories
- tags

Workflow

```
Load JSON

↓

Create Cards

↓

Insert HTML
```

---

## post.js

Responsibilities

- load article
- initialize article features
- metadata
- related posts

Workflow

```
Read slug

↓

Load markdown

↓

Render

↓

Initialize article
```

---

## markdown.js

Responsibilities

- load markdown
- parse markdown
- convert HTML
- render article

Workflow

```
Markdown

↓

Parser

↓

HTML

↓

Insert
```

---

## toc.js

Responsibilities

Automatically generate the table of contents.

Workflow

```
Scan Headings

↓

Generate Links

↓

Highlight Current Section
```

---

## progress.js

Responsibilities

- reading progress
- scroll percentage

Workflow

```
Scroll

↓

Calculate

↓

Update Progress Bar
```

---

## syntax.js

Responsibilities

- syntax highlighting
- initialize Highlight.js

Workflow

```
Code Blocks

↓

Highlight.js

↓

Rendered
```

---

## copy-code.js

Responsibilities

- create copy buttons
- copy code
- success animation

Workflow

```
Click

↓

Copy

↓

Success
```

---

## search.js

Responsibilities

- search articles
- filter categories
- filter tags

Workflow

```
Search Input

↓

posts.json

↓

Filtered Results
```

---

## pagination.js

Responsibilities

- page calculation
- next page
- previous page

Workflow

```
Posts

↓

Pages

↓

Navigation
```

---

## related.js

Responsibilities

Display related articles.

Algorithm

```
Same Category

+

Shared Tags

↓

Similarity Score

↓

Top Three Results
```

---

## utils.js

Purpose

Reusable helper functions.

Examples

```javascript
debounce()

throttle()

slugify()

formatDate()

escapeHTML()
```

---

# Initialization Flow

```
Page Loads

↓

main.js

↓

Determine Current Page

↓

Initialize Required Modules

↓

Page Ready
```

---

# Event Flow

Example

```
User Clicks Theme

↓

theme.js

↓

Save Preference

↓

Update HTML

↓

Update Icons
```

---

Example

```
User Opens Mobile Menu

↓

navbar.js

↓

Toggle Menu

↓

Animate Icon

↓

Prevent Background Scroll
```

---

Example

```
Open Blog Post

↓

post.js

↓

markdown.js

↓

Render Article

↓

toc.js

↓

syntax.js

↓

progress.js

↓

related.js
```

---

# Error Handling

Modules should fail gracefully.

Example

```javascript
if (!element) return;
```

Avoid stopping unrelated functionality because one component is missing.

---

# Naming Conventions

Functions

```javascript
initializeTheme()

toggleTheme()

renderArticle()

createCard()
```

Variables

```javascript
themeToggle

articleContainer

blogPosts

currentPage
```

Constants

```javascript
const POSTS_PER_PAGE = 6;
```

---

# Performance Guidelines

Prefer:

- event delegation
- Intersection Observer
- requestAnimationFrame
- passive event listeners

Avoid:

- unnecessary DOM queries
- repeated event listeners
- large global variables

Cache frequently used elements.

Example

```javascript
const navbar = document.getElementById("navbar");
```

---

# Future Modules

Potential additions

```
analytics.js

newsletter.js

comments.js

rss.js

share.js

views.js

bookmarks.js

offline.js

notifications.js

series.js
```

Each feature should remain independent.

---

# Best Practices

- One responsibility per module.
- Avoid global variables.
- Prefer reusable functions.
- Keep modules loosely coupled.
- Minimize DOM manipulation.
- Cache DOM references.
- Write descriptive function names.
- Fail gracefully when elements are missing.

---

# Summary

The JavaScript architecture is intentionally modular.

Each file performs one well-defined task, making the project easier to maintain, extend, and debug as it grows.

This approach provides many of the benefits of modern frontend frameworks while preserving the simplicity, performance, and portability of a Vanilla JavaScript application.