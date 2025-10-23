# lorevoon.github.io

Simple, responsive portfolio for a graphics programmer — built as a single static site (no build tools).

Live site (after pushing to main): https://lorevoon.github.io/

## Quick Edit Guide

Most content is in `index.html`. Open it and replace placeholders:

- Name/title: `index.html:6` and `index.html:31` and footer `index.html:168`
- Description and meta: `index.html:7-11` and `index.html:18-27`
- Email + links: `index.html:148-152`
- Hero image: replace `assets/images/profile-placeholder.svg` with your own (same path/filename) or update the `<img>` `src`.
- Social preview card: edit `assets/images/og-card.svg` text, or export a 1200×630 PNG and update the `<meta property="og:image">` path.

Projects (cards → project pages):

1) Create a new page under `projects/` (e.g., `projects/my-project.html`). You can copy one of the existing pages as a template.
2) In `index.html`, under `#work`, duplicate an `<a class="card project" href="/projects/your-page.html"> ... </a>` block.
3) Update the card title/description and the `href` to your new page.
4) Set a thumbnail: put an image in `assets/images/thumbs/` and set `style="--thumb: url('/assets/images/thumbs/your-thumb.svg');"` on the card’s `.thumb`.
5) Optional: add the new page URL to `sitemap.xml`.

Skills/About sections are plain text — just edit the lists and paragraphs.

## Structure

- `index.html` — main page with all sections
- `assets/css/styles.css` — colors, spacing, layout
- `assets/js/main.js` — small UX (mobile menu, smooth scroll, year)
- `assets/images/` — placeholders for profile and thumbnails
- `assets/favicon.svg` — site icon
- `.nojekyll` — disable Jekyll processing on GitHub Pages
- `robots.txt`, `sitemap.xml` — basic SEO

## GitHub Pages

Because this is a user site (`lorevoon.github.io`), GitHub Pages serves the root of the `main` branch automatically. Push commits to `main` and the site should go live in a minute or two.

If it doesn’t appear, check: Settings → Pages → Build and deployment → Branch: `main` (root).

## Customization Tips

- Colors: tweak CSS variables at the top of `assets/css/styles.css`.
- Accent gradient: `--accent` and `--accent-2`.
- Max width and radius: `--maxw`, `--radius`.
- Fonts: currently loads Inter from Google Fonts with system fallbacks. You can remove the `<link>` if you prefer only system fonts.

## Adding Real Demos

- Link `Demo` to your pages (itch.io, GitHub Pages demos, YouTube, etc.).
- Link `Code` to repositories or gists.
- You can embed a YouTube showreel by adding an iframe in the hero or work section if you like.

## License

You own your content. The scaffolding here is unlicensed boilerplate intended for your personal use.
