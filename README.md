# MyDailyTally Website

Official marketing website for MyDailyTally - The habit tracker that forgives bad days.

## Overview

Static website built for App Store compliance and user acquisition. Includes required legal pages and a full marketing landing page.

## Structure

```
mydailytally-website/
├── index.html              # Main landing page
├── privacy/index.html      # Privacy Policy (required by Apple)
├── support/index.html      # Support & FAQ
├── terms/index.html        # Terms of Service
├── css/
│   ├── main.css           # Main styles
│   └── legal.css          # Legal pages styles
├── js/
│   └── main.js            # Interactive enhancements
├── images/                # Screenshots, icons, assets
└── README.md              # This file
```

## Required for App Store Submission

- **Privacy Policy:** `/privacy/` (mandatory for Apple review)
- **Support Page:** `/support/` (recommended, shows user care)
- **Terms of Service:** `/terms/` (legal protection)

## Assets Needed

Add these images to `/images/`:

1. **App Icon:** `app-icon.png` (180x180)
2. **Favicon:** `favicon-32x32.png`, `favicon-16x16.png` 
3. **Hero Screenshot:** `app-screenshot-hero.png`
4. **App Store Screenshots:** `screenshot-01.png` through `screenshot-05.png`
5. **App Store Badge:** `app-store-badge.svg`

## Deployment

Designed for **Cloudflare Pages** deployment:

1. Connect GitHub repo to Cloudflare Pages
2. Set build command: `# none needed - static site`
3. Set output directory: `./`
4. Point `mydailytally.app` domain to Cloudflare Pages

## Features

- **Responsive Design:** Mobile-first, works on all devices
- **Performance Optimized:** Minimal JS, efficient CSS
- **SEO Ready:** Meta tags, Open Graph, Twitter Cards
- **Privacy Focused:** No analytics, no tracking
- **App Store Compliant:** All required legal pages

## Content Strategy

- **Hero:** Leads with pain point ("forgives bad days")
- **Features:** Focus on differentiation vs competitors
- **Pricing:** Transparent vs "contact sales" competitors
- **Social Proof:** Ready for testimonials when available
- **Privacy:** Emphasizes local-only data storage

## App Store Integration

- Links prepared for App Store Connect
- Screenshots showcase key features
- Copy matches App Store metadata
- Legal pages satisfy Apple requirements

## Updates

When the app goes live:

1. Update `js/main.js` with real App Store URL
2. Add actual app screenshots to `/images/`
3. Update any "coming soon" messaging
4. Add real testimonials and reviews

## Brand Colors

- **Primary Teal:** #20B2AA
- **Primary Dark:** #1a9d96  
- **Background:** #f8fafc
- **Text:** #333333
- **Light Text:** #666666

## Typography

- **System Font Stack:** -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto...
- **Headers:** 700 weight
- **Body:** 400 weight
- **UI Elements:** 600 weight

Built with ❤️ by Workhorse Solutions LLC