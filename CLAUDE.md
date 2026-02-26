# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static single-page website for **LANA Immigration**, a Canadian immigration consulting service run by Svetlana Demb (Licensed RCIC - Regulated Canadian Immigration Consultant).

## Structure

The entire website is a single file: [index.html](index.html)

- All CSS is embedded in a `<style>` block within the HTML
- JavaScript is minimal — only an Intersection Observer for scroll-triggered fade-up animations
- [logo.jpg](logo.jpg) is the only external asset
- No build process, no dependencies, no package manager

## Development

**To view the site locally**, open `index.html` directly in a browser, or serve it with any static server:

```bash
python3 -m http.server 8080
# or
npx serve .
```

## Code Architecture

The HTML file is organized into these sections (in order):

1. **`<head>`** — Google Fonts (Playfair Display, Inter), CSS variables, all styles
2. **Header** — Logo + navigation
3. **Notice Banner** — Disclaimer strip
4. **Hero** — Main headline and CTA
5. **Trust Bar** — Credential/experience highlights
6. **Services** — Three service pillars (Strategy, Temporary Residence, Permanent Residency)
7. **Explore** — Six expandable content cards
8. **About** — Svetlana's background and qualifications
9. **Testimonials** — Three client stories
10. **CTA** — Consultation call-to-action
11. **Footer** — Contact info, social links, nav

## Styling Conventions

- CSS custom properties (variables) are defined at `:root` — use these for colors and spacing rather than hardcoding values
- Color scheme: teal (`--teal`), red (`--red`), dark (`--dark`), warm neutrals
- Typography: Playfair Display for headings, Inter for body text
- Animations use the `.fade-up` / `.visible` class pattern driven by IntersectionObserver
- Mobile breakpoints are handled with `@media (max-width: 768px)` and `@media (max-width: 480px)`
