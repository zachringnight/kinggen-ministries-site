# Handoff Document — UX Audit & Improvement Pass

**Date:** 2026-04-06
**Branch:** `claude/upbeat-hertz` (at commit `3ca88e0`)
**Base branch:** `Claude/main`

---

## Current Task

Systematic UX/design/bug-fix pass to get the site launch-ready. The full codebase has been reviewed. The next session should start with the dev server, do a visual audit of every page, then design and execute improvements.

## User Priorities (confirmed)

1. **Improve design execution** — keep the existing brand (green/cream palette, Cormorant Garamond + Nunito Sans typography, cross logo). Improve how it's applied: spacing, visual hierarchy, consistency, mobile polish.
2. **Visitor flow** — how visitors move through the site, CTAs, conversion funnels (contact, donate, get support).
3. **UI/UX polish** — interactions, animations, responsiveness, accessibility.
4. **Bug fixes** — anything broken or half-implemented.
5. **Launch readiness** — security, SEO, performance, infrastructure.

## Key Decision Made

- **Brand stays, execution improves.** Do NOT change colors, fonts, or logo. Focus on how they're applied.

---

## Full Codebase Review Findings

### Architecture (Solid)
- Next.js 16.1 with App Router, React 19.1, Tailwind CSS 4, Framer Motion
- Clean component library: Button (8 variants), Card (4 types), Hero, Section (10 themes), Header, Footer, Logo system
- Centralized config in `app/config/site.ts` with tested utility functions
- CI pipeline: lint + typecheck + test + build + route verification
- Vercel Blob CMS scaffolded in `app/lib/content.ts` (60s revalidation)
- 12 routes in sitemap: /, /about, /services, /for-referrers, /for-grant-writers, /testimonials, /get-support, /forms, /contact, /donate, /privacy, /disclaimer

### Pages Reviewed

| Page | Quality | Key Issues |
|------|---------|------------|
| **Homepage** (`app/page.tsx`) | Good | Two separate testimonial layouts (grid desktop / accordion mobile) — messy. No primary CTA above the fold. Metrics hardcoded. |
| **About** (`app/about/page.tsx`) | Good | No team bios/photos. Expectations section could use `<dl>` semantics. |
| **Services** (`app/services/page.tsx`) | Good | Service cards are dead-ends (link nowhere). `tabIndex={0}` on cards but no visible focus indicator. |
| **Contact** (`app/contact/page.tsx`) | Very Good | Client-side only validation. Email/phone regex too permissive. No rate limiting. No CSRF. Success message doesn't clear form. |
| **Donate** (`app/donate/page.tsx`) | Good | No suggested giving amounts. No recurring giving option. PayPal link hardcoded. |
| **For Referrers** (`app/for-referrers/page.tsx`) | Good | Long page with no TOC or anchor nav. No downloadable referral forms. |
| **For Grant Writers** (`app/for-grant-writers/page.tsx`) | Good | No downloadable materials (990, annual report). No link to GuideStar. |
| **Testimonials** (`app/testimonials/page.tsx`) | Very Good | Hardcoded testimonials. No submission mechanism. TiltCard respects reduced motion. |

### Components Reviewed

| Component | Lines | Issues |
|-----------|-------|--------|
| **MotionComponents.tsx** | 1,411 | Way too large — should be split into multiple files. |
| **OptimizedBackground.tsx** | ~100 | `optimizedImageMap` is empty — WebP optimization not actually working. |
| **Section.tsx** | ~300 | Some variants (inner, about, inner-logo) have near-identical opacity values — could consolidate. |
| **Header.tsx** | ~250 | Desktop Resources menu uses `getElementById` instead of React state. Otherwise excellent. |
| **Card.tsx** | ~200 | `TestimonialCard` uses `author.charAt(0)` — fails on empty string. |
| **All others** | — | Clean, well-typed, accessible. |

### Cross-Cutting Issues

**Security (High)**
- API routes (`/api/contact`) need review: rate limiting, CSRF, server-side validation
- Form validation is client-side only
- Honeypot field present (good)
- No reCAPTCHA

**Testing (High)**
- Only `app/config/site.test.ts` exists (4 test cases)
- CI uses `--passWithNoTests` — passes with zero tests
- No component, page, or integration tests

**Accessibility (Medium)**
- Skip-to-main-content link: present
- Reduced motion: respected in all animation components
- ARIA labels: proper on forms
- **Missing:** Visible focus indicators on some interactive elements (service cards, buttons)
- **Missing:** Keyboard navigation on complex components (testimonial accordion)

**Performance (Medium)**
- MotionComponents.tsx is 1,411 lines — no code splitting
- Multiple animation definitions could impact low-end devices
- No explicit lazy loading strategy beyond Next.js defaults

**SEO (Good, minor gaps)**
- JSON-LD schema for NGO: present
- Open Graph + Twitter cards: configured
- Sitemap: uses `new Date()` for all lastModified (should track per-page)
- Missing: FAQ schema, testimonial/review schema

**Infrastructure (Low)**
- No `.env.example` — Formspree endpoint defaults to placeholder
- Legacy Vercel project still active (should disable production deploys)
- `proxy.ts` provides redundant host-level redirects

---

## Files Modified This Session

- `.claude/launch.json` — Created (dev server config for preview tool)
- `.superpowers/` — Created (brainstorming session, not committed)

## Issues Encountered

- `node_modules` installation repeatedly failed with `ENOTEMPTY` errors in this worktree. May need to delete `node_modules` from a terminal with full permissions, or install from the main repo root first.

---

## Next Steps (Recommended Order)

### Phase 1: Get Running & Visual Audit
1. Fix `node_modules` installation (try from main repo, or fresh clone)
2. Start dev server (`npm run dev`)
3. Screenshot every page (desktop + mobile) using preview tools
4. Catalog specific visual/UX issues with screenshots

### Phase 2: Design Improvements (brainstorm → spec → plan)
5. Present visual issues to user in browser companion for prioritization
6. Write improvement spec covering: visual hierarchy, spacing, CTA placement, mobile polish, animation reduction, page flow
7. Get user approval on spec

### Phase 3: Execute
8. Fix visitor flow — clear CTAs on every page, logical next-steps
9. Polish visual hierarchy — consistent spacing, typography scale, card alignment
10. Fix accessibility — focus indicators, keyboard nav, form UX
11. Fix bugs — empty OptimizedBackground map, TestimonialCard edge case, form validation
12. Tighten security — server-side validation, rate limiting on contact API
13. Add basic test coverage for critical paths

### Phase 4: Launch Prep
14. Verify build passes (`npm run build && npm run verify:routes`)
15. Run Lighthouse audit
16. Create `.env.example`
17. Disable legacy Vercel project production deploys

---

## Quick Reference

**Branch:** `claude/upbeat-hertz`
**Last Commit:** `3ca88e0 feat: add Vercel Blob CMS with admin editor`
**Base:** `Claude/main`

### Commands to Run
```bash
npm run dev          # Start development server (port 3000)
npm run build        # Production build
npm run test         # Run tests (only config tests exist)
npm run lint         # ESLint
npm run type-check   # TypeScript validation
npm run verify:routes # Build + smoke test routes
```

### Key File Locations
- Site config: `app/config/site.ts`
- Global styles: `app/globals.css`
- Component library: `app/components/`
- Content CMS: `app/lib/content.ts`
- Icon resolver: `app/lib/icon-map.ts`
- CI pipeline: `.github/workflows/ci.yml`
- Brand assets: `public/brand/curated/`
