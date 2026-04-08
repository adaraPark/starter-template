# Starter Template — Design Document

**Date:** 2026-04-07
**Status:** Validated and implemented

## Overview

A reusable Bun monorepo starter template that codifies the EmberFy architecture patterns into a clean, domain-agnostic foundation for new projects.

## Decisions

| Question | Decision | Rationale |
|----------|----------|-----------|
| Purpose | Starter template (not new product) | Reusable boilerplate with proven patterns |
| Monorepo structure | `apps/web` + `packages/ui` | Component library as shared package from day one |
| Theming | All 6 OKLCH themes | Rich showcase out of the box |
| Components | Generic subset only | No finance-specific components |
| Backend | tRPC + Prisma, no auth | Backend-ready without auth overhead |
| Learning Hub | Generic educational template | Demonstrates pattern with substance |
| Code quality | Full ESLint + Prettier + Husky | Start with high standards |
| AI-native | Multi-layered CLAUDE.md system | Any AI session is immediately productive |

## Architecture

### Monorepo Layout
- **Root:** Bun workspaces (`apps/*`, `packages/*`)
- **`apps/web`:** Next.js 15 (App Router, Turbopack)
- **`packages/ui`:** Shared design system (`@starter/ui`)

### Theme System
- 6 themes: Ember, Barbie, Forest, Ocean, Gold, Royalty
- OKLCH color space with light/dark mode
- CSS variables with `data-color-theme` attribute
- React Context for runtime switching + localStorage persistence

### Component Library
- **Primitives:** 12 shadcn/ui components (Button, Card, Dialog, etc.)
- **Composed:** 9 generic components (StatCard, NumberInput, ConfirmDialog, etc.)
- Barrel exports at every level

### Backend
- tRPC 11 with `publicProcedure` + commented `protectedProcedure`
- Prisma 6 with User + Item models
- No auth, no Supabase dependency — works with any PostgreSQL

### Pages
- Landing page with hero + CTA
- Learning Hub with 3 articles (Getting Started, Core Concepts, Advanced Topics)
- Example dashboard with stat cards

### AI-Native Layer
- Root CLAUDE.md with monorepo overview and global rules
- `apps/web/CLAUDE.md` with route map, tRPC patterns, Prisma conventions
- `packages/ui/CLAUDE.md` with component taxonomy, theme reference, creation checklists
- Insertion markers throughout codebase for AI-guided code placement
