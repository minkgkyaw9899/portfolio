# Implementation Plan: Fullstack Transition Portfolio

**Branch**: `001-portfolio-spec` | **Date**: 2026-03-02 | **Spec**: `.specify/specs/portfolio-spec.md`
**Input**: Feature specification from `.specify/specs/portfolio-spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Build a mobile-first portfolio in Next.js App Router that positions the candidate as a fullstack developer with deep mobile expertise, using local JSON/Markdown content for projects, sticky glassmorphism navigation, project case studies with dynamic metadata, and Framer Motion transitions.

## Technical Context

**Language/Version**: TypeScript (strict), React 19  
**Primary Dependencies**: Next.js 16+, Tailwind CSS, Framer Motion, lucide-react  
**Package Manager**: Bun  
**Storage**: Local JSON/Markdown content files in repo  
**Testing**: Add a lightweight unit-test runner (e.g., Vitest) for utility functions  
**Target Platform**: Web (modern browsers, mobile-first)  
**Project Type**: Web application (portfolio)  
**Performance Goals**: Lighthouse 90+ on key pages  
**Constraints**: Use `next/image` for media optimization; avoid heavy JS for animations  
**Scale/Scope**: Single-person portfolio with multiple case studies and blog entries

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Use Next.js App Router + TypeScript + Tailwind CSS.
- Components are modular, reusable functional arrow components.
- Consistent 4px-based spacing system across UI.
- Images use `next/image` and keep Lighthouse score above 90.
- Mobile-first, responsive layouts with subtle Framer Motion.
- TypeScript strict mode and basic unit tests for utilities.

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-spec/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx
│   └── blog/
│       └── page.tsx
├── components/
│   ├── ui/
│   │   └── project-card.tsx
│   └── sections/
│       ├── hero.tsx
│       ├── projects.tsx
│       ├── stack.tsx
│       └── learning.tsx
├── content/
│   ├── projects.json
│   └── blog.json
└── lib/
    ├── content.ts
    └── seo.ts
```

**Structure Decision**: Single Next.js App Router project. UI atoms live in `src/components/ui`, page blocks in `src/components/sections`, and content in `src/content` for easy updates.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | N/A | N/A |
