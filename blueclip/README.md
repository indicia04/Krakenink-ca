# BlueClip — Marketing Site

Single static page. Plain HTML / CSS / JS. No build step, no dependencies.

## Deploy to GitHub Pages

1. Create a repo (e.g. `blueclip-site`) and push these files so `index.html` sits at the repo root.
2. Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main`, folder: `/ (root)` → Save.
3. Site goes live at `https://<username>.github.io/blueclip-site/` within a minute or two.

Using a custom domain? Add a `CNAME` file at the root containing the domain, and point DNS at GitHub Pages.

## Files

```
index.html      Page markup (all sections)
style.css       All styling — theme tokens in :root at the top
script.js       Scroll reveal + nav shadow (IntersectionObserver)
assets/         Screenshots, app icon, App Store badge
```

## Assets

All eleven simulator screenshots are already in `assets/`, renamed and
compressed for the web (~820px wide, progressive JPEG). Note: your simulator
exports were JPEG data despite the `.png` extension, so they're saved as `.jpg`
here — the HTML already references the right filenames.

| File | Used in section |
|---|---|
| `screenshot-dashboard.jpg` | Hero |
| `screenshot-wellness.jpg` | Wellness |
| `screenshot-overtime.jpg` | Overtime (statistics chart) |
| `screenshot-investigations.jpg` | Investigations (map view) |
| `screenshot-lens.jpg` | LENs (calendar) |
| `screenshot-cliptypes.jpg` | "14 clip types" |
| `screenshot-contacts.jpg` | Contacts |
| `screenshot-paystub.jpg` | Paystub Audit |
| `screenshot-patchover.jpg` | Patch Over (career timeline) |
| `screenshot-insights.jpg` | Spare — wellness insights, unused |
| `screenshot-dashboard-alt.jpg` | Spare — second dashboard, unused |
| `blueclip-icon.png` | Nav, footer, favicon (real app icon, corners pre-rounded with transparency) |
| `app-store-badge.svg` | Hero + Pricing CTAs (recreated; swap in Apple's official badge from the marketing toolkit before launch) |

## Before launch

- [ ] Replace the two `href="#"` App Store badge links with your real App Store URL.
- [ ] Swap `assets/app-store-badge.svg` for Apple's official badge (required by their marketing guidelines).
- [ ] Wire up the footer Privacy Policy / Terms / Support links.
- [ ] Set the final `og:image` to an absolute URL once the domain is live.
