# AGENTS.md

Guidelines for AI coding agents working in this repository.

## Project Overview

Static single-page portfolio site (no build step, no package manager). It deploys as-is to GitHub Pages. There is no test suite, linter, or formatter configured — verification is done by serving the site locally and checking the rendered output.

## Commands

There is no build/test/lint toolchain. To verify work:

- Serve locally: `npx serve .` (or any static server) and open `http://localhost:8000`
- JavaScript syntax check: `node --check script.js`
- For layout/style verification, use headless Edge: `msedge --headless=new --dump-dom --window-size=1440,900 <url>`

## Conventions

- **Files**: `index.html` (markup), `style.css` (all styles), `script.js` (all JS). No other source files.
- **JavaScript**: vanilla, ES5-compatible (no arrow functions, `var` only, `"use strict"` IIFE wrapper). Do not add dependencies — jQuery was deliberately removed.
- **CSS**: design tokens live in `:root` (e.g. `--navy-900`, `--accent`, `--shadow-md`, `--radius`). Use them instead of hardcoded values. Preserve the inline SVG `background` data-URI on `.hero-section` — do not reformat or rewrite it.
- **Colors**: professional navy (`#0d1b3e`) + electric blue accent (`#2e6ff2`); light sections `#f6f8fc` / white, dark footer. Keep contrast readable (white text only on navy).
- **Accessibility**: keep the skip link, `:focus-visible` outlines, descriptive `alt` text, and `prefers-reduced-motion` support. Content must never be hidden from no-JS users (scroll-reveal is gated behind the `.js` class on `<html>`).
- **SEO**: meta description, Open Graph, and JSON-LD are in `index.html` — update all three when changing site metadata. The canonical URLs point to `https://chebby.github.io/`.

## Git Workflow

- Commit messages are short and lowercase (e.g. `version 1.4.0`, `resume update part 2`).
- Branches are named like `feature-update-v1.2`.
- Push changes to GitHub with `git push -u origin <branch>`.
