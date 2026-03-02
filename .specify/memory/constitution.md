# Portfolio Project Constitution

## Core Principles

### I. Tech Stack Standard
Use Next.js App Router, TypeScript, and Tailwind CSS as the default stack. New features must align with these tools and avoid introducing alternative frameworks or styling systems unless explicitly justified.

### II. Modular, Reusable Components
All UI components are functional, arrow-function React components and must be modular, reusable, and scoped to a single responsibility. Prefer composition over duplication.

### III. Consistent Minimalist UI
All UI elements must follow a clean, minimalist professional aesthetic. Use a consistent spacing system based on multiples of 4px for padding, margin, and layout.

### IV. Performance-First Media
Optimize images with `next/image` and ensure Lighthouse scores stay above 90. Treat performance regressions as blockers to release.

### V. Responsive and Motion-Safe UX
All pages must be mobile-first and fully responsive. Use Framer Motion for subtle, purposeful animations that do not harm performance or accessibility.

## Quality Gates
TypeScript strict mode must remain enabled. Write basic unit tests for utility functions, and ensure `tsc` reports zero errors before merging.

## Development Workflow
Prefer small, focused components and utilities. Keep Tailwind class usage consistent with the spacing system and extract reusable patterns into components or utilities when repeated. Use Bun as the package manager for installs and scripts.

## Governance
This constitution supersedes other project guidance. Changes require documentation of the rationale and impact, and must be reflected in project docs or templates.

**Version**: 1.0.0 | **Ratified**: 2026-03-02 | **Last Amended**: 2026-03-02
