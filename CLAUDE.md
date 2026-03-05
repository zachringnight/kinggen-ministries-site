# KingGen Ministries Website

## Project Overview

A professional nonprofit website for KingGen Ministries, a 501(c)(3) organization providing free gospel-centered clinical pastoral counseling services for women in need.

## Tech Stack

- **Framework**: Next.js 16.1 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Testing**: Vitest + React Testing Library
- **Deployment**: Vercel only

## Project Structure

```
app/
├── components/     # Reusable UI components (Button, Card, Hero, etc.)
├── config/         # Site configuration (site.ts)
├── about/          # About page
├── contact/        # Contact page with form
├── donate/         # Donation page
├── services/       # Services listing
├── layout.tsx      # Root layout with metadata
├── page.tsx        # Homepage
└── globals.css     # Global styles and CSS variables
```

## Key Files

- `app/config/site.ts` - Centralized configuration (phone, email, URLs)
- `app/globals.css` - Color palette and custom animations
- `app/components/index.ts` - Component exports

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run test     # Run tests
npm run lint     # Run ESLint
```

## Coding Conventions

- Use TypeScript for all files
- Follow existing component patterns in `app/components/`
- Use Tailwind utility classes for styling
- Keep components small and focused
- Export components through `app/components/index.ts`

## Color Palette

- Primary: `#3D5A3D` (Forest Green)
- Secondary: `#4a6b4a` (Lighter Forest Green)
- Accent: `#7BA390` (Sage Green)
- Background: `#faf8f2` (Cream)

## External Services

- **Vercel Blob**: Content storage and contact submission storage
- **Calendly**: Appointment scheduling
- **Donorbox**: Donation processing

## Testing

Run tests with `npm run test`. Tests are located alongside components or in `__tests__` directories.

## Common Tasks

- **Add a new page**: Create folder in `app/` with `page.tsx`
- **Add a component**: Create in `app/components/` and export from `index.ts`
- **Update contact info**: Edit `app/config/site.ts`
- **Modify colors**: Update CSS variables in `app/globals.css`
