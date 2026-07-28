# Michael Jinks Portfolio & Developer Blog

![Portfolio Screenshot](assets/images/readme/cover.png)

A premium, responsive developer portfolio and Markdown-powered technical blog built with **HTML**, **Tailwind CSS**, and **Vanilla JavaScript**.

The project showcases my journey from Mechanical Engineering to Full-Stack Development and AI/ML Engineering while documenting everything I learn through articles, tutorials, and project write-ups.

---

## Live Demo

Portfolio

```
https://your-domain.com
```

Developer Blog

```
https://your-domain.com/blog.html
```

---

# Features

## Portfolio

- Responsive Design
- Modern Glassmorphism UI
- Dark / Light Theme
- Animated Hero
- About Section
- Project Showcase
- Skills Timeline
- Contact Section
- Mobile Navigation
- Scroll Animations
- Typing Animation
- Read More Component

---

## Blog

- Markdown Powered Articles
- Automatic Syntax Highlighting
- Automatic Reading Time
- Table of Contents
- Reading Progress Bar
- Related Articles
- Search
- Categories
- Tags
- Featured Posts
- Newsletter Section
- Responsive Layout
- Dark Mode

---

# Tech Stack

### Frontend

- HTML5
- Tailwind CSS
- Vanilla JavaScript

### Markdown

- markdown-it

### Code Highlighting

- highlight.js

### Icons

- Font Awesome

### Fonts

- Google Fonts (Inter)

### Deployment

- GitHub Pages

---

# Project Structure

```text
portfolio/

│
├── index.html
├── blog.html
├── post.html
│
├── posts/
│
├── data/
│
├── docs/
│
├── assets/
│
│   ├── css/
│   ├── js/
│   ├── images/
│   └── icons/
│
├── README.md
├── CONTRIBUTING.md
├── CHANGELOG.md
└── LICENSE
```

---

# JavaScript Architecture

```text
assets/js/

main.js

theme.js

navbar.js

about.js

animations.js

typing.js

blog.js

post.js

markdown.js

toc.js

progress.js

search.js

copy-code.js

syntax.js

pagination.js

related.js
```

Each module has a single responsibility to keep the codebase maintainable and scalable.

---

# Design Philosophy

The portfolio follows a clean, premium aesthetic inspired by modern engineering-focused platforms such as:

- Vercel
- Stripe
- Linear
- GitHub
- OpenAI

The emphasis is on:

- simplicity
- readability
- accessibility
- performance
- consistency

---

# Color Palette

| Name | Hex |
|-------|------|
| Navy | #0F172A |
| Orange | #F97316 |
| Purple | #7C3AED |
| Slate | #64748B |
| White | #FFFFFF |

---

# Typography

Primary Font

```
Inter
```

---

# Running Locally

Clone the repository

```bash
git clone https://github.com/wanloq/portfolio.git
```

Open the project

```bash
cd portfolio
```

Install dependencies

```bash
npm install
```

Watch Tailwind

```bash
npm run dev
```

Build CSS

```bash
npm run build
```

Start a local server

```bash
python3 -m http.server
```

or

```bash
npx live-server
```

---

# Writing a Blog Post

Create

```text
posts/my-post.md
```

Add frontmatter

```yaml
---
title:
date:
slug:
category:
tags:
cover:
excerpt:
featured:
---
```

Write your article using Markdown.

The site automatically renders the article into the blog template.

---

# Future Improvements

- RSS Feed
- Comments
- Search Indexing
- PWA Support
- Offline Reading
- View Counter
- AI-powered Article Recommendations
- Series Support
- Multi-language Articles
- Estimated Reading Difficulty
- Image Optimization
- Lazy Loading
- Sitemap Generation

---

# Accessibility

This project aims to comply with WCAG recommendations by providing:

- Semantic HTML
- Keyboard Navigation
- Accessible Forms
- Proper Color Contrast
- ARIA Labels
- Responsive Typography

---

# Performance Goals

- Lighthouse 95+
- SEO 100
- Accessibility 100
- Best Practices 100

---

# Deployment

The project is automatically deployed through GitHub Pages.

Build

```bash
npm run build
```

Commit

```bash
git add .
git commit -m "Deploy"
git push
```

---

# Roadmap

- [x] Portfolio
- [x] Dark Mode
- [x] Mobile Navigation
- [x] Read More Component
- [x] Blog Homepage
- [ ] Markdown Engine
- [ ] Search
- [ ] Reading Progress
- [ ] Related Posts
- [ ] RSS Feed
- [ ] Newsletter Backend
- [ ] Analytics Dashboard

---

# About Me

I'm Michael Jinks, a Mechanical Engineering graduate transitioning into Full-Stack Development and AI/ML Engineering.

This portfolio documents everything I build and everything I learn while building software in public.

---

# License

MIT License

---

Made with ☕, curiosity, and continuous learning.