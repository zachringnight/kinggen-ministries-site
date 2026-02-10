# KingGen Ministries Website

## Project Overview

A professional nonprofit website for KingGen Ministries, a 501(c)(3) organization providing free gospel-centered clinical pastoral counseling services for women in need. The site serves three audiences: referrers (pastors, social workers), donors, and grant writers/foundations.

## Tech Stack

- **Framework**: Next.js 15.5 with App Router (static export)
- **Language**: TypeScript 5 (strict)
- **Styling**: Tailwind CSS 4 (via @tailwindcss/postcss)
- **Animation**: Framer Motion 12
- **Testing**: Vitest + React Testing Library
- **Deployment**: Static export (`output: "export"`) for Vercel or GitHub Pages

## Project Structure

```
app/
├── components/          # Reusable UI components (Button, Card, Hero, etc.)
├── config/              # Site configuration (site.ts)
├── about/               # About page
├── contact/             # Contact page (email, phone, mailing address)
├── donate/              # Donation page (PayPal)
├── for-referrers/       # Referrer information and process
├── for-grant-writers/   # Organization facts for grant applications
├── testimonials/        # Client testimonials
├── get-support/         # Client information and onboarding
├── forms/               # Downloadable resources (Coming Soon)
├── privacy/             # Privacy and confidentiality policy
├── disclaimer/          # Legal disclaimer and crisis resources
├── layout.tsx           # Root layout with metadata
├── page.tsx             # Homepage
└── globals.css          # Global styles and CSS variables
```

## Key Files

- `app/config/site.ts` - Single source of truth for all config (phone, email, URLs, nav links)
- `app/globals.css` - Color palette, animations, and custom utility classes
- `app/components/index.ts` - Barrel exports for all components

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build (static export)
npm run lint     # Run ESLint
npm run test     # Run tests (Vitest)
```

## Coding Conventions

- Use TypeScript for all files
- Follow existing component patterns in `app/components/`
- Use Tailwind utility classes for styling
- Keep components small and focused
- Export components through `app/components/index.ts`
- Import site config from `app/config/site.ts` (never hardcode contact info or URLs)
- Use `OptimizedBackground` for background images (not inline styles)

## Color Palette

- Primary: `#3D5A3D` (Forest Green)
- Secondary: `#4a6b4a` (Lighter Forest Green)
- Accent: `#7BA390` (Sage Green)
- Background: `#faf8f2` (Cream)

## External Services

- **PayPal**: Donation processing (`siteConfig.paypalUrl`)
- **Instagram**: Social media (`siteConfig.social.instagram`)
- **Facebook**: Social media (`siteConfig.social.facebook`)

## Testing

Run tests with `npm run test`. Tests use Vitest with JSDOM and React Testing Library. Tests are located alongside components or in `__tests__` directories.

## Common Tasks

- **Add a new page**: Create folder in `app/` with `page.tsx` and `layout.tsx` (for metadata)
- **Add a component**: Create in `app/components/` and export from `index.ts`
- **Update contact info**: Edit `app/config/site.ts`
- **Modify colors**: Update CSS variables in `app/globals.css`
- **Update navigation**: Edit `navLinks` and `footerLinks` in `app/config/site.ts`
