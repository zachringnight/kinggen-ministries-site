# KingGen Ministries Website

A fast, easy-to-manage site using Next.js + Tailwind, deployed on Vercel.

## Quick Start (Local)

1. Prereqs: Node 18+ and Git
2. Install deps:
   ```bash
   npm install
   ```
3. Run dev:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000

## Configure Fonts (Adobe Fonts)
- Your kit is already linked in `app/layout.tsx`:
  ```html
  <link rel="stylesheet" href="https://use.typekit.net/yqt0fpz.css" />
  ```
- Publish your Adobe Fonts kit if you just created/edited it.

## One-place Settings
Edit `app/config/site.ts`:
- `phone`, `email` (for Call/Email buttons)
- `calendlyUrl` (appointments embed + link fallback)
- `donorboxCampaignId` OR use the iframe in `/donate`
- `donorboxPageUrl` (for the link fallback)
- `formspreeEndpoint` (contact form action URL)

## Donations (Donorbox)
- Create a campaign in Donorbox
- In `app/config/site.ts`, set:
  - `donorboxCampaignId` (for widget embed)
  - `donorboxPageUrl` (for fallback link)
- Or replace the widget with the Donorbox iframe (see comments in `/donate`)

## Forms (Formspree)
- Create a form in Formspree
- Set `formspreeEndpoint` in `app/config/site.ts`
- In Formspree settings, enable email notifications for LeeAnn

## Appointments (Calendly)
- Set `calendlyUrl` in `app/config/site.ts`
- In Calendly, enable email/SMS notifications for LeeAnn

## Deploy to Vercel
- Push this repo to GitHub
- In Vercel, "Add New Project" -> import your repo -> Deploy
- Connect your domain in Vercel Settings -> Domains and follow DNS instructions

## Customization
- Colors: adjust Tailwind brand colors in `tailwind.config.ts`
- Typography: Cera Pro for headings, Archivo for body (via Adobe Fonts kit)
- Navigation: update links in `app/layout.tsx` Header
- SEO: edit `metadata` in `app/layout.tsx`

## Support
If you need help, open an issue or contact the maintainer.