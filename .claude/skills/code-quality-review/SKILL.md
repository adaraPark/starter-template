---
name: code-quality-review
description: Combined TypeScript and React quality review in one pass
---

# Code Quality Review

Run this after completing a feature or before merging.

## Process

1. **TypeScript check** — Apply typescript-best-practices skill
2. **React check** — Apply react-review skill  
3. **Project conventions** — Verify against CLAUDE.md rules

## Quick Checklist
- [ ] No `any` types
- [ ] No `eslint-disable` comments
- [ ] All components accept `className`
- [ ] Barrel exports updated
- [ ] CLAUDE.md updated if structural changes
- [ ] Tests co-located with source
- [ ] "use client" only where needed
- [ ] Metadata exported on all pages
