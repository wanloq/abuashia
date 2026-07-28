# Writing Blog Posts

> Version 1.0  
> Last Updated: July 2026

---

# Overview

All blog articles are written in **Markdown**.

The Portfolio Blog separates **content** from **presentation**, allowing authors to focus entirely on writing while the website automatically handles formatting, navigation, syntax highlighting, related posts, and other presentation features.

Every article follows the same workflow:

```
Create Markdown File

↓

Add Front Matter

↓

Write Article

↓

Add Images

↓

Update Metadata

↓

Preview

↓

Publish
```

---

# Creating a New Article

Navigate to:

```text
posts/
```

Create a new Markdown file.

Example:

```text
posts/building-ai-with-golang.md
```

Use lowercase filenames.

Separate words with hyphens.

Good examples:

```text
prompt-engineering-guide.md

learning-gofiber.md

my-first-ai-project.md
```

Avoid:

```text
My First Post.md

AIArticle.md

Article 1.md
```

---

# Front Matter

Every article begins with YAML Front Matter.

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

excerpt: Learn how to build scalable AI applications using Go and Python.

difficulty: Intermediate

featured: false
---
```

Everything below the closing `---` becomes the article body.

---

# Front Matter Reference

## title

The article title.

Example:

```yaml
title: Understanding Prompt Engineering
```

---

## slug

The unique URL identifier.

Example:

```yaml
slug: understanding-prompt-engineering
```

This produces:

```text
post.html?slug=understanding-prompt-engineering
```

The slug should never change after publication.

---

## date

Publication date.

Use ISO format.

```yaml
date: 2026-07-28
```

---

## author

Current value:

```yaml
author: Michael Jinks
```

Future versions may support multiple authors.

---

## category

Choose one primary category.

Examples:

```yaml
category: Artificial Intelligence

category: Golang

category: Python

category: Career

category: Web Development
```

---

## tags

Tags improve discovery and related article suggestions.

Example:

```yaml
tags:
  - golang
  - api
  - backend
  - docker
```

Use between **3 and 7** tags.

---

## cover

Path to the featured image.

Example:

```yaml
cover: assets/images/blog/go-ai.jpg
```

Recommended aspect ratio:

```
16 : 9
```

---

## excerpt

A short summary displayed on:

- Blog homepage
- Search results
- Related posts
- Social previews

Recommended length:

```
120–180 characters
```

---

## featured

Featured articles appear at the top of the blog.

Example:

```yaml
featured: true
```

---

## difficulty

Allowed values:

```text
Beginner

Intermediate

Advanced
```

Displayed beside the reading time.

---

# Writing the Article

After the front matter, write normally in Markdown.

Example:

```md
# Introduction

Artificial Intelligence is transforming software engineering.

## Why Golang?

Go provides excellent concurrency...

## Architecture

...
```

---

# Headings

Use headings consistently.

```
# Article Title

## Main Sections

### Subsections

#### Small Sections
```

Avoid skipping heading levels.

Good:

```
#

##

###
```

Avoid:

```
#

####

##
```

---

# Paragraphs

Keep paragraphs short.

Prefer:

```
2–5 lines
```

Long blocks of text are difficult to read.

---

# Lists

Unordered

```md
- Item
- Item
- Item
```

Ordered

```md
1. Step
2. Step
3. Step
```

---

# Emphasis

Bold

```md
**Important**
```

Italic

```md
*Emphasis*
```

Inline code

```md
`fmt.Println()`
```

---

# Links

Internal

```md
[Portfolio](../index.html)
```

External

```md
[Go Documentation](https://go.dev)
```

Always use descriptive link text.

Avoid:

```md
Click here
```

---

# Images

Store images in:

```text
assets/images/blog/
```

Example:

```md
![Architecture Diagram](assets/images/blog/architecture.png)
```

Always include descriptive alt text.

---

# Code Blocks

Always specify the language.

Example:

````md
```go
package main

func main() {

}
```