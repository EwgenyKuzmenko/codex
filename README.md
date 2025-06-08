# КомКом React Shop

This repository contains a minimal React application for a demo store named **КомКом**. It lists 20 hard-coded television products with images. When running the dev server, the products can be viewed at `/tvs`.

## Development

```bash
cd hello-world
npm install
npm run dev
```

## Deployment

The project includes a GitHub Actions workflow that builds the Vite project and deploys the `dist` folder to GitHub Pages whenever changes land on the `main` branch. A `404.html` file is provided so direct links like `/tvs` work when the site is hosted on GitHub Pages.
