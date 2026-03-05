# Deployment Guide

This repository now has one active Vercel production target.

## Canonical Target

- Canonical project: `kinggen-ministries-site`
- Canonical URL: `https://kinggen-ministries-site.vercel.app`
- Production branch: `main`

## Custom Domain Status

- Desired marketing domain: `https://kinggenministries.org`
- Current state on March 5, 2026: the domain is not serving this Vercel project yet.
- Until DNS is moved to Vercel, keep `NEXT_PUBLIC_SITE_URL` pointed at `https://kinggen-ministries-site.vercel.app`.

## Required Vercel Settings

Apply these in the `kinggen-ministries-site` project settings:

1. Set **Production Branch** to `main`.
1. Keep auto-deploy enabled for the production branch.
1. Set `ADMIN_PASSWORD`.
1. Set `BLOB_READ_WRITE_TOKEN`.
1. Set `NEXT_PUBLIC_SITE_URL=https://kinggen-ministries-site.vercel.app` until the custom domain is migrated.

## Redirect Behavior

- `proxy.ts` redirects inactive hosts to the configured canonical host.
- Do not add host redirects in `vercel.json` unless the destination host is confirmed live.
- If `kinggenministries.org` is moved to Vercel later, update `NEXT_PUBLIC_SITE_URL` to that domain and redeploy.

## Verification Checklist

Run after every production push:

1. `npm run lint`
1. `npm run type-check`
1. `npm run build`
1. `npm run verify:routes`

Then verify live URLs:

1. `GET https://kinggen-ministries-site.vercel.app/` returns `200`.
1. `GET https://kinggen-ministries-site.vercel.app/services` returns `200`.
1. `GET https://kinggen-ministries-site-rj83usjsr.vercel.app/` or the newest deployment URL returns `200`.

## GitHub Status Contexts

Canonical expected context:

- `Vercel – kinggen-ministries-site`

Use the helper script for manual validation (token required):

```bash
npm run verify:deploy-context
```

## Rollback Flow

1. In Vercel, open `kinggen-ministries-site` deployments.
1. Promote the last known-good deployment.
1. Re-run route checks:
   - `/`
   - `/services`
   - `/contact`
1. Confirm the `Vercel – kinggen-ministries-site` status is green.

## Asset Hygiene Notes

- Runtime assets: `/public/brand` and `/public/resources`.
- Source artwork only: `/assets/brand-source`.
- Local test/debug artifacts are ignored via `.gitignore`.
