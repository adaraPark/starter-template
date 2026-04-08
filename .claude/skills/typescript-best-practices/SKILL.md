---
name: typescript-best-practices
description: Apply Total TypeScript Pro Essentials patterns for type safety, narrowing, generics, and idiomatic TypeScript
---

# TypeScript Best Practices

When reviewing or writing TypeScript code, apply these key principles:

## Type Safety
- Prefer `unknown` over `any` — narrow before using
- Use discriminated unions over optional fields for state modeling
- Enable `strict: true`, `noUncheckedIndexedAccess: true`
- Use `satisfies` operator for type-safe object literals
- Avoid type assertions (`as`) — use type guards instead

## Narrowing
- Use `typeof`, `instanceof`, and `in` operator for runtime checks
- Prefer discriminated unions with a `type` or `status` field
- Use exhaustive switch with `never` for completeness checking
- Avoid non-null assertions (`!`) — handle the null case

## Generics
- Add type parameters only when they connect input to output
- Use constraints (`extends`) to narrow generic types
- Prefer `Record<string, T>` over `{ [key: string]: T }`
- Use `infer` in conditional types for extraction

## Functions
- Use overloads sparingly — prefer unions or generics
- Return specific types, not `any` or overly broad types
- Use `readonly` for parameters you don't mutate

## Objects & Arrays
- Use `as const` for literal object/tuple types
- Prefer mapped types over manual repetition
- Use `Pick`, `Omit`, `Partial`, `Required` for derived types
