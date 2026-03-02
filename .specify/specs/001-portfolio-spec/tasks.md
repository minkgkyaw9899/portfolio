---
description: "Task list for Fullstack Transition Portfolio"
---

# Tasks: Fullstack Transition Portfolio

**Input**: Design documents from `.specify/specs/001-portfolio-spec/`  
**Prerequisites**: `plan.md` (required), `portfolio-spec.md` (spec)

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1-US5)

---

## Setup

- [ ] T001 [P] [US1] Confirm Next.js App Router structure under `src/app`
- [ ] T002 [P] [US1] Install UI dependencies via Bun: `bun add framer-motion lucide-react`
- [ ] T003 [P] [US1] Add Tailwind base theme tokens for 4px spacing in `src/app/globals.css`
- [ ] T004 [P] [US1] Create content loading helpers in `src/lib/content.ts`
- [ ] T005 [P] [US2] Add metadata helpers in `src/lib/seo.ts` for project pages
- [ ] T006 [P] [US4] Add lightweight unit test runner (e.g., Vitest) with Bun scripts in `package.json`

---

## Components

- [ ] T101 [P] [US1] Build sticky glassmorphism header in `src/components/sections/header.tsx`
- [ ] T102 [P] [US1] Build hero section with fullstack + mobile positioning in `src/components/sections/hero.tsx`
- [ ] T103 [P] [US1] Add Framer Motion transitions for hero and project cards in `src/components/sections/hero.tsx` and `src/components/ui/project-card.tsx`
- [ ] T104 [P] [US2] Create reusable project card component in `src/components/ui/project-card.tsx`
- [ ] T105 [P] [US2] Build projects grid section in `src/components/sections/projects.tsx`
- [ ] T106 [P] [US3] Build stack section grouped by Mobile/Frontend/Backend in `src/components/sections/stack.tsx`
- [ ] T107 [P] [US4] Build learning path section in `src/components/sections/learning.tsx` with Golang progress timeline
- [ ] T108 [P] [US5] Implement navigation links and active states in `src/components/sections/header.tsx`

---

## Content

- [ ] T201 [P] [US2] Create `src/content/projects.json` with case studies for: FPB, SMEDB (Banking), Plus & Plus Admin, HR Hive, Oil Factory, Alpha Learn, Breeze
- [ ] T202 [P] [US2] Emphasize React Native banking expertise for FPB & SMEDB in `src/content/projects.json` (security + state management)
- [ ] T203 [P] [US2] Highlight Next.js expertise for Plus Admin portal in `src/content/projects.json` (admin workflows + web performance)
- [ ] T204 [P] [US4] Create `src/content/blog.json` with Golang learning posts and milestones
- [ ] T205 [US2] Implement dynamic route page `src/app/projects/[slug]/page.tsx` using content loader and `next/image`
- [ ] T206 [US2] Add dynamic Metadata API for project case studies in `src/app/projects/[slug]/page.tsx`
- [ ] T207 [US1] Assemble home page sections in `src/app/page.tsx` (hero, projects, stack, learning)
- [ ] T208 [US4] Implement blog/learning page in `src/app/blog/page.tsx`

---

## Deployment

- [ ] T301 [US1] Verify Lighthouse 90+ on home and a case study page using `next build` + `next start`
- [ ] T302 [US1] Configure Vercel project settings and connect Git repo
- [ ] T303 [US1] Deploy to Vercel and verify SEO metadata for a project page
