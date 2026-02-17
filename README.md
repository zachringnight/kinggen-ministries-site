# KingGen Ministries Website

A professional nonprofit website for KingGen Ministries, a 501(c)(3) organization providing free gospel-centered clinical pastoral counseling services for women in need.

## Tech Stack

- **Framework**: Next.js 16.1 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Testing**: Vitest + React Testing Library
- **Deployment**: Vercel (or GitHub Pages)

## Getting Started

### Prerequisites

- Node.js 20.18.2 or higher (see `.nvmrc`)
- npm 10.0.0 or higher

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Run TypeScript type checking
npm run type-check

# Run tests
npm run test

# Run tests once (CI-safe, passes if no tests exist yet)
npm run test:run

# Run tests with UI
npm run test:ui

# Rebuild optimized legacy background assets
npm run optimize-images

# Rebuild optimized brand WebP assets
npm run optimize-brand-images
```

## Project Structure

```
app/
├── components/     # Reusable UI components
├── config/         # Site configuration (site.ts)
├── about/          # About page
├── contact/        # Contact page with form
├── donate/         # Donation page
├── for-referrers/  # Information for referrers
├── for-grant-writers/ # Grant writer resources
├── get-support/    # Support request page
├── forms/          # Downloadable forms page
├── testimonials/   # Testimonials page
├── privacy/        # Privacy policy
├── disclaimer/     # Disclaimer
├── layout.tsx      # Root layout with metadata
├── page.tsx        # Homepage
└── globals.css     # Global styles and CSS variables
```

## Configuration

Update `app/config/site.ts` with your organization's information:

- Contact information (phone, email, address)
- EIN number
- PayPal donation URL
- Social media links
- Formspree endpoint (for contact form)

## Asset Notes

- Runtime web assets live under `/public`.
- Large source artwork files used for editing are stored under `/assets/brand-source` so static export does not ship them.
- If source PNGs are updated, regenerate public WebP assets with `npm run optimize-brand-images`.

## CI/CD

This project uses GitHub Actions for continuous integration:

- **Linting**: ESLint runs on every push and pull request
- **Type Checking**: TypeScript type checking ensures type safety
- **Testing**: Vitest runs the test suite
- **Building**: Production build is created and validated

See `.github/workflows/ci.yml` for the complete workflow.

### Add Favicon

Replace `/public/favicon.ico` with your organization's favicon.

## Deployment

The site is configured for static export. Build outputs to the `out/` directory.

### Vercel

1. Import repository to Vercel
2. Deploy automatically

## Color Palette

- **Primary**: `#3D5A3D` (Forest Green)
- **Secondary**: `#4a6b4a` (Lighter Forest Green)
- **Accent**: `#7BA390` (Sage Green)
- **Background**: `#faf8f2` (Cream)

## License

All rights reserved. KingGen Ministries.
