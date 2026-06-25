# DNA Infra & Investment

Marketing website for **DNA Infra & Investment** — a real estate and investment
company offering real estate projects, residential plots, hi-rise buildings,
commercial spaces, agriculture land, farm houses, project funding and investment
solutions.

Built with **React + Vite + Tailwind CSS**. Fully responsive and deploy-ready.

## Tech stack

- React 19
- Vite
- Tailwind CSS 3

## Project structure

```
src/
  components/      # All UI sections
    Header.jsx
    Hero.jsx
    About.jsx
    Services.jsx
    Projects.jsx
    Team.jsx
    Reviews.jsx
    Contact.jsx
    Footer.jsx
    Icon.jsx       # Inline SVG icon set
  data/
    content.js     # All site copy, services, projects, team, reviews
  App.jsx          # Composes every section
  main.jsx
  index.css        # Tailwind + base styles
```

All content (text, images, contact details, founders, services and projects)
lives in `src/data/content.js` so it can be edited without touching the
components.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build
npm run lint     # lint
```

## Deployment

The production build outputs static files to `dist/`. It can be deployed to any
static host:

- **Vercel / Netlify:** build command `npm run build`, output directory `dist`.
- **GitHub Pages / S3 / any static host:** upload the contents of `dist/`.

## Branding

White background with rich olive-green and wine accents plus gold highlights.
Theme colors are defined in `tailwind.config.js` (`olive`, `wine`, `gold`).
