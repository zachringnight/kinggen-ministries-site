# KingGen Ministries - Brand Asset Guide

**Brand:** KingGen Ministries - Christian Counseling for Women
**Colors:** Dark green (#3B5E3A approx), off-white/light gray, white
**Icon:** Stone cairn with cross

---

## File Naming Convention

All files follow: `USE-FOR_[placement]_[description]_[color]_[dimensions].[ext]`

Each asset has a PNG (raster) and SVG (vector) version.

---

## Asset Map

### headers/ - Full Logo with Text (USE SPARINGLY: 2-3 pages max)

These contain the full "KingGen Ministries - Christian Counseling for Women" wordmark. Do NOT repeat across every page.

| File | Use Where | Background | Text Color |
|------|-----------|------------|------------|
| homepage-hero | Homepage hero/banner only | Dark green | White |
| about-page-header | About or landing page header | Light gray | Green |
| inner-page-header | Services, contact, or secondary pages | Light gray (alt layout) | Green |

**Dimensions:** 2460 x 1080 px (landscape banner ratio)

---

### logo/ - Icon Only (USE EVERYWHERE for brand consistency)

Square cairn + cross mark. No text. Use for repeated brand touchpoints.

| File | Use Where | Background |
|------|-----------|------------|
| dark-green-bg | Navbar on light pages, favicon, social profile pic | Dark green |
| light-gray-bg | Footer on dark sections, email signatures | Light gray |
| white-bg | Navbar on dark pages, overlay contexts, transparent bg needs | White |

**Dimensions:** 960 x 960 px (square)

**Favicon:** Crop/resize the dark-green-bg version to 32x32, 180x180 (Apple touch), and 512x512.

---

### social/ - Section Backgrounds (USE AS FULL-BLEED BEHIND CONTENT)

Large textured backgrounds with a subtle stone cairn + cross watermark. No text. Layer content on top.

| File | Use Where | Color |
|------|-----------|-------|
| cta-testimonial-section-bg | Call-to-action blocks, testimonial sections, footer | Dark green texture |
| content-section-bg | General content sections, feature blocks, FAQ | Off-white texture |

**Dimensions:** 3240 x 4050 px (portrait, designed for vertical scroll sections)

**Tip:** Use CSS `background-size: cover` and `background-position: center` for responsive sections.

---

## Pairing Guide for AI Builders

| Page Section | Background | Logo | Text Color |
|-------------|------------|------|------------|
| Navbar | Transparent or white | Icon (dark-green-bg) | Dark green |
| Homepage Hero | Use homepage-hero banner | Built into banner | White |
| About Header | Use about-page-header banner | Built into banner | Green |
| Content Section | content-section-bg (off-white) | None | Dark green |
| CTA / Testimonials | cta-testimonial-section-bg (dark green) | None | White |
| Footer | Dark green solid or cta bg | Icon (light-gray-bg or white-bg) | White/light gray |

---

## Root-Level Files

Files prefixed `DUPLICATE_` are copies of the organized subfolder versions. Safe to delete.
