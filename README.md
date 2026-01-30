# KingGen Ministries Website

A professional nonprofit website for KingGen Ministries, a 501(c)(3) organization providing free gospel-centered clinical pastoral counseling services for women in need.

## Tech Stack

- **Framework**: Next.js 15.5 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
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
- Image assets 

## Code Quality & Optimization

This codebase has been reviewed and optimized for:
- ✅ **Performance**: Throttled scroll handlers (~60fps), optimized animations
- ✅ **Accessibility**: WCAG 2.1 AA compliant, skip-to-content link, proper form labels
- ✅ **Security**: No vulnerabilities, dependencies updated, CodeQL verified
- ✅ **Maintainability**: Centralized configuration, no duplicate code

See `OPTIMIZATION_NOTES.md` for detailed optimization documentation.  
See `SECURITY_SUMMARY.md` for security analysis and recommendations.

### Required Configuration Before Deployment

1. **Formspree Form ID**: Update `formspreeEndpoint` in `app/config/site.ts`
   ```typescript
   formspreeEndpoint: "https://formspree.io/f/YOUR-ACTUAL-FORM-ID"
   ```

2. **HTTPS**: Deploy on HTTPS-enabled hosting (Vercel does this automatically)

3. **Test Forms**: Verify contact form works after deployment

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
