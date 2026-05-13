# Deployment Guide

This repository deploys to a single Vercel project. The previously documented
`kinggen-ministries-site-mwqc` "canonical" project no longer exists.

## Canonical Target

- Project: `kinggen-ministries-site`
- Production domain: `https://kinggenministries.org`
- Production branch: `Claude/main`

## Required Vercel Settings

Apply these in Vercel project settings:

1. **Settings → Git** → set Production Branch to `Claude/main`. Keep auto-deploy
   enabled.
2. **Settings → Domains** → both `kinggenministries.org` and
   `www.kinggenministries.org` must be attached to this project. The `www`
   subdomain in particular must not be left attached to a deleted/legacy
   project, or it will return `503` for end users. The `proxy.ts` middleware
   redirects `www → apex` once the domain is attached here.
3. **Settings → Environment Variables** → `NEXT_PUBLIC_SITE_URL` should be
   either unset or set to `https://kinggenministries.org`. Code defends
   against `*.vercel.app` overrides (they fall back to the production
   domain), but setting it explicitly is clearer.

## Redirects In Place

- `vercel.json` redirects requests on the bare project URL
  (`kinggen-ministries-site.vercel.app`) to `https://kinggenministries.org`.
- `proxy.ts` middleware redirects `www.kinggenministries.org` and
  `kinggen-ministries-site.vercel.app` to the production domain at request
  time.

## Verification Checklist

Run after every production push:

1. `npm run lint`
2. `npm run type-check`
3. `npm run test:run`
4. `npm run build`
5. `npm run verify:routes`

Then verify live URLs:

1. `GET https://kinggenministries.org/` returns `200`.
2. `GET https://kinggenministries.org/services` returns `200`.
3. `GET https://www.kinggenministries.org/` returns a permanent redirect to
   `https://kinggenministries.org/`.
4. `GET https://kinggen-ministries-site.vercel.app/` returns a permanent
   redirect to `https://kinggenministries.org/`.

## GitHub Status Context

Expected Vercel commit-status context:

- `Vercel – kinggen-ministries-site`

Use the helper script for manual validation (token required):

```bash
npm run verify:deploy-context
```

## Rollback Flow

1. In Vercel, open the project's Deployments tab.
2. Promote the last known-good deployment to Production.
3. Re-run route checks: `/`, `/services`, `/for-referrers`.
4. Confirm the Vercel commit-status context is green on `Claude/main`.

## Asset Hygiene Notes

- Runtime assets: `/public/brand` and `/public/resources`.
- Source artwork only: `/assets/brand-source`.
- Local test/debug artifacts are ignored via `.gitignore`.
