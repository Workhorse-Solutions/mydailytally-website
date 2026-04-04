# MyDailyTally Website Deployment

Deploy to Cloudflare Pages for fast, global distribution.

## Cloudflare Pages Setup

### 1. Connect GitHub Repository

1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Click "Create a project"
3. Choose "Connect to Git"
4. Select "Workhorse-Solutions/mydailytally-website"
5. Click "Begin setup"

### 2. Build Configuration

**Project name:** `mydailytally-website`
**Production branch:** `main`
**Build command:** `# No build needed - static site`
**Build output directory:** `./`

### 3. Environment Variables

None needed - pure static site.

### 4. Custom Domain

1. After deployment, go to "Custom domains" tab
2. Click "Set up a custom domain"  
3. Enter: `mydailytally.app`
4. Follow DNS setup instructions

## DNS Configuration

Point your domain to Cloudflare Pages:

```
mydailytally.app    CNAME   mydailytally-website.pages.dev
www.mydailytally.app CNAME   mydailytally-website.pages.dev
```

## SSL/HTTPS

Cloudflare provides free SSL certificates automatically.

## Performance

Cloudflare Pages includes:
- ✅ Global CDN
- ✅ Automatic HTTPS  
- ✅ HTTP/2 and HTTP/3
- ✅ Brotli compression
- ✅ Edge caching

## Deployment URLs

- **Production:** https://mydailytally.app
- **Staging:** https://mydailytally-website.pages.dev
- **Preview:** Auto-generated for each PR

## Updates

Any push to `main` branch automatically deploys to production.

## Monitoring

Monitor via Cloudflare Dashboard:
- Analytics
- Performance metrics  
- Error rates
- Geographic distribution

## Required for App Store

These URLs must be live before App Store submission:
- ✅ https://mydailytally.app/privacy/
- ✅ https://mydailytally.app/support/  
- ✅ https://mydailytally.app/terms/

## Post-Launch Updates

When the app goes live on the App Store:

1. Update `js/main.js` with real App Store URL
2. Remove "coming soon" alerts
3. Add actual user testimonials
4. Update screenshots if needed

## Troubleshooting

**Build fails:** Check that all files are committed and pushed
**Domain not working:** Verify DNS settings, may take 24h to propagate
**Images not loading:** Check file paths are relative (`/images/` not `./images/`)

## Analytics (Optional)

If you want privacy-friendly analytics:
- Cloudflare Web Analytics (no personal data)
- Plausible (GDPR-compliant)
- Simple Analytics

Do NOT use Google Analytics - conflicts with privacy messaging.