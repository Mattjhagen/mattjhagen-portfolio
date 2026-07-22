# mattjhagen-portfolio

A dark, techy, multi-page static portfolio for Matt Hagen — software work and fiction in one place. No build step, no framework. Just open `index.html`.

## Structure

```
mattjhagen-portfolio/
├── index.html      # home + typed-terminal hero
├── work.html       # software projects
├── writing.html    # fiction (The Gentle Conquest)
├── about.html      # bio + contact
├── css/style.css   # all styles
├── js/main.js      # nav toggle, terminal typing, scroll reveal
└── assets/         # (drop images / favicon here)
```

## Before it's "done" — placeholders to fill

Search the files for `TODO`, `// edit`, and bracketed `[...]` notes:

- **work.html** — replace the three placeholder project cards with real repos/demos.
- **writing.html** — add a logline + description for *The Gentle Conquest*; add the Amazon/purchase link once published.
- **about.html** — write your real bio; set the `mailto:` address; fix or remove the LinkedIn link.

Nothing about you was invented — bios, project details, and publication status are left blank on purpose.

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Deploy

Works as-is on GitHub Pages: push to `main`, then enable Pages (Settings → Pages → deploy from `main` / root). Also works on Netlify, Vercel, or Cloudflare Pages with zero config.
