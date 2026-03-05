# KingGen Admin CMS: Build Instructions (Vercel Blob)

## Goal

Wire the existing `/admin` editor UI to Vercel Blob so content edits persist and the public site reads from Blob instead of hardcoded values.

## Current State

- Next.js app (v16), React 19, Tailwind 4, Framer Motion
- All site content is hardcoded in page components and `app/config/site.ts`
- A front-end-only `/admin` page exists in the deployed build but Save/Submit buttons do nothing
- **Vercel Blob store `bamboo-blob` already exists** (created Feb 2, store ID: `store_y7ApxvYZQ3r9hDNK`)
- **`BLOB_READ_WRITE_TOKEN` env var is already set** on the Vercel project (all environments)
- The store is currently empty (0 B)
- The only existing API route is `app/api/contact/route.ts` (private contact-submission storage)
- Deployed to Vercel under team `zach-soskins-projects-95c2533d`

## Architecture

Vercel Blob stores JSON files. One JSON file per page. The admin writes to Blob, the front-end reads from Blob.

```
bamboo-blob/
  content/home.json
  content/about.json
  content/services.json
  content/contact.json
  content/donate.json
  content/for-referrers.json
  content/for-grant-writers.json
  content/get-support.json
  content/testimonials.json
  content/forms.json
  content/privacy.json
  content/disclaimer.json
  content/site-config.json    <-- org name, phone, email, address, EIN, social
```

Each JSON file has this shape:

```json
{
  "hero": {
    "badge": "Free & Confidential",
    "headline": "Free Gospel-centered counseling for women in need.",
    "subheading": "KingGen Ministries provides...",
    "cta_primary_text": "Refer a Client",
    "cta_primary_href": "/for-referrers",
    "cta_secondary_text": "Support Our Mission",
    "cta_secondary_href": "/donate"
  },
  "services": {
    "title": "Our Services",
    "items": [
      { "title": "Individual Pastoral Counseling", "description": "..." },
      { "title": "Crisis & Trauma Support", "description": "..." },
      { "title": "Spiritual & Emotional Growth", "description": "..." }
    ]
  },
  "impact": { ... },
  "testimonials": { ... },
  "_meta": {
    "updatedAt": "2026-03-04T12:00:00Z",
    "updatedBy": "admin"
  }
}
```

## Step 1: Install Dependencies

```bash
npm install @vercel/blob
```

## Step 2: Create Content Helper

**`app/lib/content.ts`**

```typescript
import { list, put } from '@vercel/blob';

const CONTENT_PREFIX = 'content/';

// All pages that have editable content
export const CONTENT_PAGES = [
  'home', 'about', 'services', 'contact', 'donate',
  'for-referrers', 'for-grant-writers', 'get-support',
  'testimonials', 'forms', 'privacy', 'disclaimer', 'site-config'
] as const;

export type ContentPage = typeof CONTENT_PAGES[number];

// Fetch content for a page from Blob
// Returns parsed JSON or null if not found
export async function getPageContent(page: ContentPage): Promise<Record<string, any> | null> {
  try {
    const url = `${process.env.BLOB_STORE_URL ?? ''}/${CONTENT_PREFIX}${page}.json`;
    // List blobs to find the URL (Blob URLs include a hash)
    const { blobs } = await list({ prefix: `${CONTENT_PREFIX}${page}.json` });

    if (blobs.length === 0) return null;

    const response = await fetch(blobs[0].url, { next: { revalidate: 60 } });
    if (!response.ok) return null;

    return await response.json();
  } catch {
    return null;
  }
}

// Save content for a page to Blob
export async function savePageContent(page: ContentPage, content: Record<string, any>) {
  const blob = await put(
    `${CONTENT_PREFIX}${page}.json`,
    JSON.stringify({
      ...content,
      _meta: {
        updatedAt: new Date().toISOString(),
        updatedBy: 'admin'
      }
    }),
    {
      access: 'public',
      addRandomSuffix: false,    // IMPORTANT: overwrite same path each time
      contentType: 'application/json',
    }
  );
  return blob;
}
```

## Step 3: Seed Script

Create **`scripts/seed-content.ts`** that extracts all hardcoded content from every page component and writes it to Blob.

The script must:
1. Read every page.tsx file and extract all text content, arrays, and data objects
2. Structure it into the JSON format above
3. Call `savePageContent()` for each page
4. Run via `npx tsx scripts/seed-content.ts` (add `tsx` as a dev dependency)

**Content to extract per page:**

| Page | Sections to extract |
|------|-------------------|
| `app/page.tsx` (home) | hero (badge, headline, subheading, CTAs), services (title, items array), impact (stats array), testimonials (items array), audience cards, speaking section, about preview, values |
| `app/about/page.tsx` | hero, bio, credentials, mission, approach |
| `app/services/page.tsx` | hero, services list, process, FAQ |
| `app/contact/page.tsx` | hero, contact info, form labels |
| `app/donate/page.tsx` | hero, donation info, impact stats, FAQ |
| `app/for-referrers/page.tsx` | hero, process, benefits, FAQ |
| `app/for-grant-writers/page.tsx` | hero, org info, financials, programs |
| `app/get-support/page.tsx` | hero, what to expect, FAQ |
| `app/testimonials/page.tsx` | hero, all testimonials |
| `app/forms/page.tsx` | hero, available forms list |
| `app/privacy/page.tsx` | full policy content |
| `app/disclaimer/page.tsx` | full disclaimer content |
| `app/config/site.ts` (site-config) | name, tagline, description, phone, email, address, EIN, social links, PayPal URL |

**IMPORTANT**: Read each actual page file. Do NOT guess at content. Extract the real hardcoded strings.

## Step 4: API Routes

**`app/api/content/route.ts`** -- Read content

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { getPageContent, CONTENT_PAGES, ContentPage } from '@/app/lib/content';

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get('page') as ContentPage;

  if (!page || !CONTENT_PAGES.includes(page)) {
    return NextResponse.json({ error: 'Invalid page' }, { status: 400 });
  }

  const content = await getPageContent(page);

  if (!content) {
    return NextResponse.json({ error: 'No content found' }, { status: 404 });
  }

  return NextResponse.json(content, {
    headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' }
  });
}
```

**`app/api/content/route.ts`** -- Save content (same file, add POST)

```typescript
import { savePageContent } from '@/app/lib/content';

export async function POST(request: NextRequest) {
  // Simple auth check
  const authHeader = request.headers.get('authorization');
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword || authHeader !== `Bearer ${adminPassword}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { page, content } = await request.json();

  if (!page || !CONTENT_PAGES.includes(page) || !content) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const blob = await savePageContent(page, content);
  return NextResponse.json({ success: true, url: blob.url });
}
```

## Step 5: Update Page Components

Refactor each page to try Blob first, fall back to hardcoded values.

**Pattern for every page:**

```typescript
import { getPageContent } from '@/app/lib/content';

// Hardcoded defaults (keep existing values as fallback)
const DEFAULTS = {
  hero: {
    headline: "Free Gospel-centered counseling for women in need.",
    // ... all current hardcoded values
  },
  // ... all sections
};

export const revalidate = 60; // ISR: re-fetch every 60 seconds

export default async function HomePage() {
  const content = await getPageContent('home');

  // Merge: Blob content wins, defaults fill gaps
  const hero = { ...DEFAULTS.hero, ...content?.hero };
  const services = content?.services ?? DEFAULTS.services;
  // etc.

  return (
    // ... use merged content in JSX
  );
}
```

Do this for EVERY page listed in Step 3. Keep ALL existing animation, layout, and component structure intact. Only change where text values come from.

## Step 6: Wire the Admin Page

The `/admin` page already has the editor UI. Wire it up:

1. **Password gate**: Add a login screen. On submit, store the password in React state (NOT localStorage). Use it as the Bearer token for API calls.

2. **Load content**: On page select, `GET /api/content?page={page}`. Populate all form fields with returned values.

3. **Save Draft**: Collect all form field values into the JSON structure. `POST /api/content` with `{ page, content }` and the Bearer token. Show success/error toast.

4. **Preview**: Open the public page URL in a new tab.

5. **Reset**: Re-fetch from the API, discard local edits.

6. **Page selector**: The nav already shows page names. Wire each to load that page's content.

## Step 7: Environment Variables

Add to Vercel project settings (Settings > Environment Variables):

```
ADMIN_PASSWORD=<pick a password for LeeAnn>
```

`BLOB_READ_WRITE_TOKEN` is already set. No other env vars needed.

For local development, create `.env.local`:

```
BLOB_READ_WRITE_TOKEN=<copy from Vercel dashboard>
ADMIN_PASSWORD=<same password>
```

## Step 8: next.config.ts

Make sure there is NO `output: "export"` setting. API routes and ISR require server-side rendering.

```typescript
import type { NextConfig } from "next";
const nextConfig: NextConfig = {};
export default nextConfig;
```

## Step 9: Deploy and Seed

1. Push code to GitHub
2. Vercel auto-deploys
3. Run the seed script once: `npx tsx scripts/seed-content.ts`
   (or create a one-time API route `/api/seed` that runs the seed logic, hit it once, then delete it)
4. Verify: visit `/admin`, log in, edit a field, save, check the public page updates within 60 seconds

## Constraints

- Do NOT break existing design, layout, animations, or SEO
- Keep all Framer Motion animations and component structure
- Every page MUST have hardcoded fallback values so the site works if Blob is empty or unreachable
- The admin page must work on mobile (LeeAnn may edit from her phone)
- Use ISR (revalidate = 60) so edits appear within a minute
- Do NOT add any auth beyond simple password. Single-user CMS.
- Use `addRandomSuffix: false` on all `put()` calls so content overwrites cleanly

## Why Vercel Blob over Supabase

- Blob store already exists and is connected (`bamboo-blob`)
- Token already set (`BLOB_READ_WRITE_TOKEN`)
- Zero additional infrastructure to provision
- Simpler: just JSON files, no SQL schema, no migrations
- Free tier is generous (500 MB storage, 1 GB transfer)
- Native to Vercel, no cross-service latency

## File Structure After Build

```
app/
  admin/
    page.tsx              -- Content editor (wire save/load to API)
  api/
    content/
      route.ts            -- GET/POST content from Vercel Blob
    contact/
      route.ts            -- (existing) contact submission endpoint
  lib/
    content.ts            -- Blob read/write helpers
  config/
    site.ts               -- (existing) static fallback config
  [all existing page directories unchanged]
scripts/
  seed-content.ts         -- One-time script to populate Blob from hardcoded content
```
