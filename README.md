# Kraken Ink Website

A simple static landing page for Kraken Ink, designed for GitHub Pages.

## Files

- `index.html` — page structure and content
- `styles.css` — design and responsive styling
- `assets/kraken-mark.svg` — temporary brand mark/favicon

## GitHub Pages Setup

1. Create a new GitHub repository, for example `krakenink-ca`.
2. Upload these files to the repository root.
3. Go to repository **Settings** → **Pages**.
4. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Save.
6. In the repository root, create a file named `CNAME` containing:

```text
krakenink.ca
```

7. At your domain DNS provider, point the domain to GitHub Pages using GitHub's current DNS instructions.

