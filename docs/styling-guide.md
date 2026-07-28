# Styling Guide

> Version 1.0
> Last Updated: July 2026

---

# Overview

The Portfolio design system provides a consistent visual language across every page of the website.

Rather than designing each page independently, every component follows a shared set of design principles covering:

- colors
- typography
- spacing
- borders
- shadows
- animations
- responsiveness
- accessibility

This ensures the website remains visually cohesive as it grows.

---

# Design Philosophy

The visual style is inspired by modern engineering and software companies.

Primary influences include:

- OpenAI
- Vercel
- Linear
- Stripe
- GitHub
- Raycast

The design emphasizes:

- simplicity
- clarity
- premium aesthetics
- generous whitespace
- subtle motion
- accessibility
- readability

Every element should have a clear purpose.

---

# Brand Identity

The portfolio represents:

- Full-Stack Development
- Artificial Intelligence
- Engineering
- Innovation
- Professionalism

The overall feeling should be:

```
Modern

Minimal

Premium

Technical

Approachable
```

---

# Color Palette

## Primary Colors

| Name | Tailwind Variable | Hex |
|-------|-------------------|-----|
| Brand Navy | `brand-navy` | `#0F172A` |
| Brand Orange | `brand-orange` | `#F97316` |
| Brand Purple | `brand-purple` | `#7C3AED` |

---

## Neutral Palette

| Color | Usage |
|---------|------|
| White | Cards |
| Slate 50 | Page background |
| Slate 100 | Borders |
| Slate 500 | Secondary text |
| Slate 700 | Headings |
| Slate 900 | Dark backgrounds |

---

# Theme Support

Every component must support:

- Light Mode
- Dark Mode

Always pair classes.

Example

```html
bg-white dark:bg-slate-900
```

Example

```html
text-slate-900 dark:text-white
```

Never design exclusively for one theme.

---

# Typography

Primary font

```
Inter
```

Fallback

```
system-ui
```

---

# Font Weights

| Weight | Usage |
|----------|------|
| 400 | Paragraphs |
| 500 | Labels |
| 600 | Buttons |
| 700 | Headings |
| 800 | Hero headings |
| 900 | Display titles |

---

# Heading Scale

| Element | Tailwind |
|-----------|----------|
| Hero | text-6xl |
| Page Title | text-5xl |
| Section Title | text-4xl |
| Card Title | text-xl |
| Small Heading | text-lg |

Maintain a clear visual hierarchy.

---

# Paragraph Width

Ideal reading width

```
60–75 characters
```

Avoid overly wide text blocks.

---

# Spacing System

Prefer Tailwind spacing scale.

Common spacing

```
4

6

8

10

12

16

20

24
```

Avoid arbitrary values unless necessary.

---

# Containers

Primary content width

```
max-w-7xl
```

Article width

```
max-w-4xl
```

Reading width

```
prose
```

---

# Cards

Cards should follow a consistent pattern.

```html
rounded-3xl

border

shadow-sm

transition

hover:shadow-xl
```

Cards should feel elevated but not heavy.

---

# Border Radius

| Size | Usage |
|-------|------|
| rounded-lg | Small controls |
| rounded-xl | Buttons |
| rounded-2xl | Cards |
| rounded-3xl | Feature sections |
| rounded-full | Avatars |

---

# Shadows

Small

```
shadow-sm
```

Medium

```
shadow-md
```

Large

```
shadow-xl
```

Feature

```
shadow-2xl
```

Avoid excessive shadow usage.

---

# Buttons

Primary

```html
bg-brand-navy

text-white

hover:bg-brand-orange

rounded-full
```

Secondary

```html
border

hover:bg-slate-100
```

Ghost

Transparent with hover background.

---

# Icons

Use

```
Font Awesome
```

Consistent sizing

```
text-lg

text-xl

text-2xl
```

Icons should complement text rather than dominate it.

---

# Images

Preferred format

```
WebP
```

Fallback

```
PNG

JPEG
```

Hero images

```
16:9
```

Profile images

```
1:1
```

Project screenshots

```
16:10
```

Blog thumbnails

```
16:9
```

---

# Animations

Animations should be subtle.

Preferred duration

```
200ms

300ms

500ms
```

Use easing

```
ease-out
```

Avoid long or distracting animations.

---

# Hover Effects

Examples

```html
hover:-translate-y-1
```

```html
hover:scale-105
```

```html
hover:shadow-xl
```

Hover effects should communicate interactivity.

---

# Transitions

Standard transition

```html
transition-all duration-300
```

For transforms

```html
transition-transform duration-300
```

For colors

```html
transition-colors duration-300
```

---

# Forms

Inputs

```html
rounded-xl

border

focus:ring

focus:border-brand-orange
```

Labels should always accompany form fields.

---

# Navigation

Desktop

Horizontal navigation with clear spacing.

Mobile

Slide-down navigation with animated hamburger icon.

Navbar should remain sticky.

---

# Blog Cards

Every blog card contains:

- Cover image
- Category
- Title
- Excerpt
- Reading time
- Date
- Author

Cards should remain equal height whenever possible.

---

# Project Cards

Every project card contains:

- Image
- Title
- Description
- Technologies
- Links

Use consistent spacing throughout.

---

# Code Blocks

Use syntax highlighting.

Include:

- Copy button
- Language label
- Rounded corners
- Overflow scrolling

---

# Tables

Tables should be responsive.

On smaller screens, enable horizontal scrolling.

---

# Accessibility

Minimum contrast ratio

```
4.5 : 1
```

Interactive elements should include:

- hover state
- focus state
- keyboard navigation

Never rely on color alone to communicate meaning.

---

# Responsive Breakpoints

Tailwind defaults

| Breakpoint | Width |
|-------------|------|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |

Design mobile-first.

---

# Performance

Prefer:

- CSS transitions
- GPU transforms
- lazy loading
- compressed images

Avoid:

- layout thrashing
- excessive animations
- oversized assets

---

# Naming Conventions

Use semantic class names when creating reusable components.

Example

```
project-card

blog-card

hero-title

section-heading
```

Avoid names based solely on appearance.

---

# Future Enhancements

Potential additions include:

- Component library
- Design tokens
- Theme customization
- Accent color switching
- Motion preferences
- Print styles
- High-contrast mode

---

# Summary

The Styling Guide defines the visual foundation of the Portfolio and Blog.

Following these standards ensures every new page and component feels like part of a unified product rather than a collection of individual designs.

Consistency in spacing, typography, color, and interaction is just as important as consistency in code.