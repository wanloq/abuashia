# Blog System

> Version 1.0
> Last Updated: July 2026

---

# Overview

The Portfolio Blog is designed as a lightweight Markdown-powered publishing system.

Instead of writing every article directly in HTML, articles are authored in Markdown and rendered dynamically inside a reusable HTML template.

This approach separates **content** from **presentation**, making articles significantly easier to write, maintain, and scale while preserving the speed of a static website.

---

# Goals

The blog system is designed around five principles:

- Write articles once.
- Reuse the same layout for every article.
- Keep deployment simple.
- Keep the website fast.
- Avoid unnecessary frameworks.

---

# High-Level Workflow

```
               Author

                 │

         Write Markdown

                 │

        posts/article.md

                 │

        Front Matter Parser

                 │

        Metadata Generator

                 │

           posts.json

                 │

     ┌───────────┴───────────┐

     │                       │

 blog.html             post.html

     │                       │

 Blog Cards        Markdown Renderer

     │                       │

     └───────────┬───────────┘

                 │

          Rendered Website
```

---

# Folder Structure

```text
posts/

├── building-ai-with-go.md
├── prompt-engineering.md
├── gofiber-rest-api.md
├── software-career.md
└── ...
```

Each Markdown file represents one article.

---

# Markdown File Structure

Every article begins with **Front Matter**.

Example:

```yaml
---
title: Building AI Applications with Golang

slug: building-ai-with-golang

date: 2026-07-28

author: Michael Jinks

category: Artificial Intelligence

tags:

- golang
- backend
- llm

cover: assets/images/blog/go-ai.jpg

featured: true

difficulty: Intermediate

excerpt: Learn how to build scalable AI software using Go and Python.

---
```

Everything below the front matter becomes the article body.

---

# Why Front Matter?

Front Matter stores article metadata separately from the article itself.

Benefits include:

- cleaner articles
- automatic blog cards
- automatic SEO
- automatic categories
- automatic tags
- automatic related articles
- automatic pagination

---

# Metadata Fields

| Field | Description |
|--------|-------------|
| title | Article title |
| slug | URL identifier |
| date | Publish date |
| author | Article author |
| category | Main category |
| tags | List of keywords |
| excerpt | Short summary |
| cover | Featured image |
| featured | Whether the article appears in Featured Posts |
| difficulty | Beginner, Intermediate or Advanced |

Future fields may include:

- updated
- series
- canonical URL
- reading level
- featured image caption
- estimated completion time

---

# Source of Truth

The Markdown file is always the source of truth.

All metadata originates from the article itself.

The blog should never require editing multiple files when publishing a new article.

---

# Rendering Pipeline

The rendering process follows these stages.

```
Markdown File

↓

Read Front Matter

↓

Extract Metadata

↓

Convert Markdown

↓

Generate HTML

↓

Insert into post.html

↓

Display
```

The article template remains identical regardless of content.

---

# Blog Listing

The Blog Homepage does not read Markdown files directly.

Instead, it loads a lightweight metadata file.

```
posts.json
```

Example:

```json
[
    {
        "title":"Building AI Applications with Golang",
        "slug":"building-ai-with-golang",
        "excerpt":"...",
        "cover":"...",
        "date":"2026-07-28",
        "featured":true
    }
]
```

This allows the homepage to load quickly without parsing every article.

---

# Blog Card Generation

Each object inside `posts.json` is converted into a reusable card.

```
posts.json

↓

blog.js

↓

createCard()

↓

HTML

↓

Displayed on blog.html
```

Cards are never written manually.

---

# Opening an Article

Each article uses its slug.

Example:

```
post.html?slug=building-ai-with-golang
```

The renderer performs the following:

```
Read URL

↓

Extract slug

↓

Find Markdown file

↓

Load article

↓

Render article

↓

Display
```

---

# Markdown Rendering

Markdown is converted into semantic HTML.

Examples:

Markdown:

```md
# Heading

## Subtitle

- List

**Bold**
```

Becomes:

```html
<h1>

<h2>

<ul>

<strong>
```

No manual HTML is required.

---

# Syntax Highlighting

Code blocks are automatically detected.

Example:

````md
```go
fmt.Println("Hello")
```