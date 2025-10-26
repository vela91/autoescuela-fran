# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for "Autoescola Fran", a driving school in Salou, Catalonia. The site is multilingual (Catalan, Spanish, English) and showcases driving school services focused exclusively on the B license (car driving license), intensive theory courses, and contact details.

## Technology Stack

- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Radix UI + shadcn/ui components
- **Icons**: Lucide React
- **Fonts**: Geist Sans and Geist Mono
- **Forms**: React Hook Form with Zod validation
- **Package Manager**: pnpm (as evidenced by pnpm-lock.yaml)

## Commands

### Development
```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## Project Structure

```
autoescuela-fran/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Home page (multilingual landing) - UPDATED
│   ├── layout.tsx           # Root layout with LanguageProvider
│   ├── globals.css          # Global styles and CSS variables
│   ├── permisos/            # Licenses page (B license only) - UPDATED
│   ├── sobre-nosaltres/     # About us page (Fran's profile) - UPDATED
│   ├── curso-intensivo/     # Intensive course page - NEW
│   ├── blog/                # Blog page
│   └── contacte/            # Contact page - UPDATED
├── components/
│   ├── header.tsx           # Main navigation header with language switcher - UPDATED
│   ├── footer.tsx           # Site footer - UPDATED
│   ├── theme-provider.tsx   # Theme context (next-themes)
│   └── ui/                  # shadcn/ui components (50+ components)
├── hooks/
│   ├── use-language.tsx     # Language context and hook (ca/es/en)
│   ├── use-mobile.tsx       # Mobile detection hook
│   └── use-toast.ts         # Toast notifications hook
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── public/                  # Static assets (images, flags, logos)
└── styles/                  # Additional style files
```

## Architecture Patterns

### Multilingual System
The site uses a custom language context instead of i18n libraries:
- **LanguageProvider** (`hooks/use-language.tsx`) wraps the entire app in `app/layout.tsx`
- Languages: `'ca'` (Catalan - default), `'es'` (Spanish), `'en'` (English)
- Language preference persisted in localStorage as `'autoescola-language'`
- **useLanguage hook** provides `{ language, setLanguage }` to all components
- Each page/component defines inline translation objects keyed by language code
- Language selector in Header switches between languages globally

### Component Pattern
All pages follow this pattern:
```tsx
'use client'

import { useLanguage } from '@/hooks/use-language'

const translations = {
  ca: { /* Catalan translations */ },
  es: { /* Spanish translations */ },
  en: { /* English translations */ }
}

export default function Page() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div>
      <Header />
      {/* Page content using t.key for translations */}
      <Footer />
    </div>
  )
}
```

### Path Aliases
Configured in `tsconfig.json` and `components.json`:
- `@/*` → Root directory
- `@/components` → Components directory
- `@/lib` → Library/utilities
- `@/hooks` → Custom React hooks
- `@/components/ui` → shadcn/ui components

### Build Configuration
`next.config.mjs` disables strict checks:
- ESLint ignored during builds
- TypeScript errors ignored during builds
- Images unoptimized (static export friendly)

## Styling

### Color Scheme
Defined in `tailwind.config.ts`:
- **Primary**: Yellow (#FFD700) - matches logo
- **Accent**: Red (#DC2626, #B91C1C) - used for CTAs and highlights
- **Background**: White/Gray gradients
- Uses CSS custom properties for theme colors (HSL variables)

### UI Components
All shadcn/ui components are in `components/ui/`:
- Pre-configured with `cn()` utility for className merging
- Radix UI primitives with Tailwind styling
- Includes: Button, Card, Dialog, Form controls, Toast, etc.

## Key Features

1. **Responsive Design**: Mobile-first with hamburger menu in header
2. **Hero Section**: Full-width banner with CTA on homepage
3. **B License Focus**: Only displays B license (car) - all other licenses removed
4. **Real Testimonials**: Google Reviews integrated (5.0 stars, 10 reviews)
5. **Intensive Course Page**: Dedicated page for monthly intensive theory courses
6. **Google Maps Integration**: Embedded map for school location (Calle Barcelona 35, local 3)
7. **External Links**:
   - Exam results: https://share.google/FiSu0qypsKD8coE2w
   - Google Maps: https://www.google.com/maps/place/AUTOESCOLA+FRAN.+En+Salou./@41.0784008,1.1285014,17z

## Business Information

- **Address**: Calle Barcelona 35, local 3, 43840 Salou, Tarragona
- **Office Hours**: 10:00-14:00 and 16:00-20:00
- **Theory Classes**: 10:00 and 18:00, Monday to Friday
- **Intensive Courses**: Monthly intensive theory courses available
- **Contact**:
  - Email: autoescolafransalou@gmail.com
  - Phone: 977 017 165
  - WhatsApp: 610 777 027

## About the School

- **Director**: Fran
  - Road Training Certificate since 2007
  - Driving School Director Certificate since 2011
  - Licensed for: B, AM, A1, A2, A, C, E, and C+E
- **Focus**: Exclusively offers B license (car driving license)
- **Google Rating**: 5.0 stars with 10 reviews

## Development Notes

- All pages are client components (`'use client'`) due to language context usage
- Static assets in `/public` include vehicle images, flags, and logo
- Geist font family loaded via `geist/font/sans` and `geist/font/mono`
- Form validation uses React Hook Form + Zod resolvers
- Toast notifications via Sonner library
