# UI Components

> Version 1.0
> Last Updated: July 2026

---

# Overview

The Portfolio and Blog are built from a collection of reusable UI components.

Rather than designing each page independently, every page is assembled from a common set of components that follow the project's design language.

This ensures:

- Visual consistency
- Faster development
- Easier maintenance
- Better scalability
- Improved accessibility

Every component should have a single purpose and remain reusable throughout the project.

---

# Component Hierarchy

```
Website

│

├── Layout

│   ├── Navbar

│   ├── Footer

│   └── Page Container

│

├── Hero

├── About

├── Projects

├── Skills

├── Contact

├── Blog

│   ├── Featured Post

│   ├── Blog Card

│   ├── Category

│   ├── Search

│   └── Pagination

│

└── Shared Components

    ├── Buttons

    ├── Cards

    ├── Tags

    ├── Badges

    ├── Code Blocks

    ├── Callouts

    └── Forms
```

---

# Naming Convention

Reusable components should use descriptive names.

Examples

```
project-card

blog-card

section-heading

hero-button

newsletter-form

social-links

skill-chip
```

Avoid names based on appearance.

Bad

```
orange-box

blue-card

big-button
```

---

# Navbar

Purpose

Primary navigation throughout the website.

---

## Features

- Sticky navigation
- Glassmorphism effect
- Active section highlighting
- Mobile navigation
- Theme toggle
- Smooth scrolling

---

## Desktop

```
Logo

Home

About

Projects

Blog

Podcast

Contact

Theme Toggle
```

---

## Mobile

```
Logo

Menu Button

↓

Slide Down Navigation
```

---

## States

Normal

Scrolled

Mobile Open

Dark Theme

Light Theme

---

# Hero Section

Purpose

Introduce the owner and establish the first impression.

---

## Contains

- Greeting
- Name
- Title
- Typing animation
- CTA buttons
- Social links
- Hero image

---

## Guidelines

The Hero should answer:

- Who are you?
- What do you build?
- Why should visitors continue scrolling?

---

# Section Heading

Purpose

Used across every major section.

Structure

```
Label

↓

Heading

↓

Description (optional)
```

Example

```
About Me

My Journey

A brief introduction...
```

---

# Buttons

Three button styles are used.

---

## Primary

Used for primary actions.

Examples

- Contact
- Download Resume
- Read Article

Appearance

```
Rounded Full

Brand Navy

White Text
```

---

## Secondary

Used for less important actions.

Appearance

```
Border

Transparent

Hover Fill
```

---

## Ghost

Used for navigation and utility actions.

Appearance

```
No Background

Hover Background
```

---

# Cards

Cards are the primary content container.

Shared properties

```
rounded-3xl

border

shadow

transition

hover elevation
```

---

# Project Card

Purpose

Display projects.

Contains

- Screenshot
- Title
- Description
- Technologies
- GitHub
- Live Demo

---

## Layout

```
Image

Title

Description

Technology Chips

Buttons
```

---

# Blog Card

Purpose

Display articles.

Contains

- Cover image
- Category
- Reading time
- Publish date
- Title
- Excerpt
- Read More button

---

## Hover

- Slight elevation
- Image zoom
- Title color transition

---

# Skill Card

Purpose

Display technical skills.

Contains

- Icon
- Name
- Description

---

# Timeline Card

Purpose

Represent learning journey.

Used for

- Education
- Experience
- Certifications

---

# Tag

Purpose

Represent metadata.

Examples

```
Go

Python

AI

Backend

Docker
```

Style

```
Rounded Full

Small

Muted Background
```

---

# Badge

Purpose

Highlight important information.

Examples

```
Featured

New

Coming Soon

Open Source

Live
```

---

# Avatar

Purpose

Represent people.

Types

Profile

Author

Comment

---

# Newsletter Section

Purpose

Encourage subscriptions.

Contains

```
Heading

Description

Email Input

Button
```

---

# Search Component

Purpose

Search blog posts.

Contains

```
Search Icon

Input

Clear Button
```

Future

```
Autocomplete

Recent Searches
```

---

# Category Filter

Purpose

Filter articles.

Appearance

```
Pill Buttons
```

Selected

```
Brand Orange
```

---

# Pagination

Contains

```
Previous

1

2

3

Next
```

Should collapse gracefully on mobile.

---

# Reading Progress

Fixed progress indicator.

Location

Top of page.

Behavior

Updates continuously while scrolling.

---

# Table of Contents

Generated automatically.

Contains

```
Introduction

Installation

Configuration

Deployment
```

Current section remains highlighted.

---

# Code Block

Purpose

Display source code.

Contains

```
Language

Copy Button

Highlighted Code
```

Features

- Horizontal scrolling
- Syntax highlighting
- Copy animation

---

# Callout

Four variants.

---

## Note

Blue

General information.

---

## Tip

Green

Helpful advice.

---

## Warning

Orange

Potential issues.

---

## Danger

Red

Critical information.

---

# Image Component

Supports

- Hero
- Inline
- Gallery

Features

- Rounded corners
- Lazy loading
- Lightbox (future)

---

# Social Links

Contains

- GitHub
- LinkedIn
- X
- YouTube
- Email

Icons should be consistent in size.

---

# Contact Form

Contains

```
Name

Email

Subject

Message

Submit
```

Validation

- Required fields
- Email format
- Accessible labels

---

# Footer

Contains

- Logo
- Navigation
- Social links
- Copyright
- Built with statement

---

# Empty State

Used when no content exists.

Example

```
No Articles Found

Try another search.
```

---

# Loading State

Use skeleton loaders where appropriate.

Avoid layout shifts.

---

# Error State

Display friendly messages.

Example

```
Unable to load articles.

Please refresh the page.
```

---

# Responsive Behaviour

Every component should support:

```
Mobile

Tablet

Desktop
```

Components should stack naturally on smaller screens.

---

# Accessibility Checklist

Every component should provide:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- ARIA attributes where appropriate
- Sufficient color contrast
- Screen reader compatibility

---

# Animation Guidelines

Animations should:

- Feel responsive
- Never delay interaction
- Enhance understanding
- Respect reduced-motion preferences

Preferred duration

```
200–300ms
```

---

# Future Components

Planned additions

```
Breadcrumb

Toast Notification

Modal

Accordion

Tabs

Carousel

Image Gallery

Testimonials

Statistics Counter

Command Palette

Theme Selector

AI Chat Widget

Resume Timeline

Podcast Player

Video Card

Article Series

View Counter

Reading History

Bookmark Button
```

---

# Component Development Checklist

Before adding a new component, verify:

- Has a single responsibility.
- Supports light and dark themes.
- Is responsive.
- Is accessible.
- Uses existing design tokens.
- Avoids duplicate functionality.
- Includes hover and focus states.
- Is documented in this file.

---

# Summary

Every page within the Portfolio and Blog is assembled from reusable components that share a common design language.

By documenting each component's purpose, structure, behavior, and accessibility requirements, the project remains consistent, maintainable, and scalable as it evolves into a larger developer platform.