---
name: react-review
description: Review React/Next.js code for performance issues, anti-patterns, and best practices based on Vercel guidelines
---

# React Review Checklist

## Critical Priority
- [ ] No async waterfalls in Server Components (parallel data fetching)
- [ ] No unnecessary "use client" directives
- [ ] No state for values derivable from props/other state
- [ ] No missing keys or index-as-key in dynamic lists
- [ ] No direct DOM manipulation bypassing React

## High Priority
- [ ] Memoization used correctly (useMemo/useCallback only for expensive ops or referential equality)
- [ ] useEffect dependencies are correct
- [ ] No state updates during render
- [ ] Error boundaries wrap fallible components
- [ ] Heavy components code-split with dynamic imports

## Performance
- [ ] Images use next/image with proper sizing
- [ ] Lists > 100 items use virtualization
- [ ] No unnecessary re-renders (check with React DevTools)
- [ ] Suspense boundaries for streaming
- [ ] Prefetching for predictable navigations

## Next.js Specific
- [ ] Server Components by default, "use client" only when needed
- [ ] Metadata exports on all pages
- [ ] Loading/error/not-found states for route segments
- [ ] API routes use proper HTTP methods and validation
- [ ] Environment variables properly typed
