# Deployment Guide

This repository has two Vercel projects connected today. During stabilization, treat one project as canonical and the other as legacy.

## Canonical Target

- Canonical project: `kinggen-ministries-site-mwqc`
- Canonical URL: `https://kinggen-ministries-site-mwqc.vercel.app`
- Production branch: `Claude/main`

## Legacy Project

- Legacy project: `kinggen-ministries-site`
- Legacy URL: `https://kinggen-ministries-site.vercel.app`
- Expected final behavior: `301` redirect all paths to canonical URL.
- Repo-level support exists in `vercel.json` via host-scoped redirect rule:
  - host `kinggen-ministries-site.vercel.app` + `/:path*` -> `https://kinggen-ministries-site-mwqc.vercel.app/:path*`
  - This takes effect once the legacy project is deployed from this codebase.

## Required Vercel Settings

Apply these in Vercel project settings (or CLI/API if authenticated):

1. Canonical project (`kinggen-ministries-site-mwqc`)
1. Set **Production Branch** to `Claude/main`.
1. Keep auto-deploy enabled for the production branch.
1. Legacy project (`kinggen-ministries-site`)
1. Add redirects:
   - `/:path*` -> `https://kinggen-ministries-site-mwqc.vercel.app/:path*` (Permanent / 301)

## If Host-Level Redirect Is Blocked

Use this fallback and keep it temporary:

1. Sync the legacy project to the same branch and build config as canonical.
1. Remove legacy project links from team docs and handoffs.
1. Treat only `kinggen-ministries-site-mwqc` as production-of-record.

## Verification Checklist

Run after every production push:

1. `npm run lint`
1. `npm run type-check`
1. `npm run build`
1. `npm run verify:routes`

Then verify live URLs:

1. `GET https://kinggen-ministries-site-mwqc.vercel.app/` returns `200`.
1. `GET https://kinggen-ministries-site-mwqc.vercel.app/services` returns `200`.
1. `GET https://kinggen-ministries-site.vercel.app/services` returns `301` to canonical (or documented fallback behavior).

## GitHub Status Contexts

Canonical expected context:

- `Vercel – kinggen-ministries-site-mwqc`

Legacy context may still appear during transition:

- `Vercel – kinggen-ministries-site`

Use the helper script for manual validation (token required):

```bash
npm run verify:deploy-context
```

## Rollback Flow

1. In Vercel, open canonical project deployments.
1. Promote the last known-good deployment.
1. Re-run route checks:
   - `/`
   - `/services`
   - `/contact`
1. Confirm GitHub status context is green for canonical project.

## Asset Hygiene Notes

- Runtime assets: `/public/brand` and `/public/resources`.
- Source artwork only: `/assets/brand-source`.
- Local test/debug artifacts are ignored via `.gitignore`.
