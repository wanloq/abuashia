# Deployment Guide

> Version 1.0
> Last Updated: July 2026

---

# Overview

This document describes how to set up, develop, build, and deploy the Portfolio and Blog project.

The project is intentionally designed as a static website with a lightweight development workflow.

Current deployment target:

- GitHub Pages

Future deployment targets:

- Cloudflare Pages
- Netlify
- Vercel
- Self-hosted Nginx
- Docker

---

# Requirements

Install the following tools before contributing.

## Git

Download:

https://git-scm.com

Verify installation

```bash
git --version
```

---

## Node.js

Download:

https://nodejs.org

Verify

```bash
node -v
```

```bash
npm -v
```

---

## Python (Optional)

Used only for serving local files.

```bash
python --version
```

or

```bash
python3 --version
```

---

# Clone Repository

```bash
git clone https://github.com/wanloq/portfolio.git
```

Navigate into the project.

```bash
cd portfolio
```

---

# Install Dependencies

Install project dependencies.

```bash
npm install
```

---

# Tailwind CSS

Development mode

```bash
npm run dev
```

Production build

```bash
npm run build
```

---

# Running the Website Locally

Because browsers block some local file requests, always use a local web server.

Option 1

Python

```bash
python3 -m http.server 8000
```

Open

```
http://localhost:8000
```

---

Option 2

Live Server (VS Code)

Install the Live Server extension.

Right-click

```
index.html
```

Select

```
Open with Live Server
```

---

Option 3

npm

```bash
npx live-server
```

---

# Development Workflow

Typical workflow

```
Pull Latest Changes

↓

Create Feature Branch

↓

Develop

↓

Test

↓

Commit

↓

Push

↓

Merge
```

---

# Git Workflow

Create a feature branch.

```bash
git checkout -b feature/blog-search
```

Commit changes.

```bash
git add .

git commit -m "Add blog search"
```

Push branch.

```bash
git push origin feature/blog-search
```

---

# Recommended Branch Strategy

```
main

│

├── feature/blog

├── feature/search

├── feature/comments

└── feature/newsletter
```

Only merge stable code into `main`.

---

# Build Process

Development

```
HTML

↓

Tailwind

↓

JavaScript

↓

Browser
```

Production

```
Source

↓

Tailwind Build

↓

Minified CSS

↓

Deploy
```

---

# File Structure

```
Portfolio

│

├── HTML

├── Markdown

├── CSS

├── JavaScript

└── Images
```

No backend compilation is required.

---

# GitHub Pages Deployment

Push to GitHub.

```bash
git push origin main
```

Open

```
Repository

↓

Settings

↓

Pages
```

Choose

```
Deploy from branch

↓

main

↓

/root
```

Save.

GitHub automatically publishes the website.

---

# Custom Domain

If using a personal domain.

Example

```
abuashiamichael.xyz
```

or

```
www.abuashiamichael.xyz
```

Create:

```
CNAME
```

Example

```
abuashiamichael.xyz
```

Update DNS records according to GitHub Pages documentation.

---

# Tailwind Production Build

Always build before deployment.

```bash
npm run build
```

Verify

```
assets/css/output.css
```

has been updated.

---

# Deployment Checklist

Before pushing, confirm:

- All pages load correctly.
- Mobile navigation works.
- Dark mode functions correctly.
- Images load successfully.
- Internal links are valid.
- External links open correctly.
- Markdown articles render correctly.
- Code highlighting works.
- Reading progress functions.
- Search returns expected results.
- No JavaScript console errors.

---

# Lighthouse Targets

Performance

```
95+
```

Accessibility

```
100
```

SEO

```
100
```

Best Practices

```
100
```

Run Lighthouse after major changes.

---

# Browser Support

The project is tested on:

- Chrome
- Microsoft Edge
- Firefox
- Safari

Target:

Latest two major versions.

---

# Mobile Testing

Minimum widths

```
320px

375px

390px

414px

768px

1024px

1280px

1536px
```

Test portrait and landscape orientations.

---

# Performance Guidelines

Optimize images.

Prefer:

- WebP
- AVIF (when supported)

Enable:

- lazy loading
- responsive images

Minimize unnecessary JavaScript.

Load modules only when required.

---

# Cache Strategy

Static assets should use long cache lifetimes.

Example:

```
CSS

JavaScript

Fonts

Images
```

HTML should remain fresh to ensure new content is visible quickly.

---

# Future CI/CD

Planned automation:

```
Git Push

↓

GitHub Actions

↓

Build

↓

Run Tests

↓

Generate posts.json

↓

Deploy

↓

GitHub Pages
```

No manual deployment required.

---

# Rollback

If a deployment introduces an issue:

Identify the previous stable commit.

```bash
git log
```

Checkout the commit.

```bash
git checkout <commit>
```

Or revert it.

```bash
git revert <commit>
```

Push the fix.

```bash
git push
```

---

# Troubleshooting

## Tailwind changes not appearing

Run

```bash
npm run build
```

or

```bash
npm run dev
```

---

## Images missing

Verify:

- File exists.
- Correct filename.
- Correct relative path.
- Case-sensitive spelling.

---

## JavaScript not loading

Check:

- Browser console
- File path
- Module imports
- Script order

---

## Markdown not rendering

Verify:

- Markdown file exists.
- Slug matches filename.
- Front Matter is valid.
- Renderer is loaded.

---

## GitHub Pages not updating

Wait several minutes.

Then verify:

- Latest commit pushed.
- GitHub Pages enabled.
- Correct branch selected.
- Browser cache cleared.

---

# Future Deployment Targets

The architecture is compatible with:

- Cloudflare Pages
- Netlify
- Vercel
- Astro
- Hugo
- Docker
- Nginx

Only the deployment pipeline changes.

The project structure remains the same.

---

# Summary

The deployment workflow is intentionally simple:

```
Develop

↓

Test

↓

Build

↓

Commit

↓

Push

↓

GitHub Pages
```

This keeps the portfolio easy to maintain while providing a reliable path for future growth, automation, and migration to more advanced hosting platforms if needed.