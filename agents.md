# Project Guide

This repository contains a simple React shop built with Vite.

## Development
1. Change into the `hello-world` directory.
2. Run `npm install` to install dependencies.
3. Use `npm run dev` for local development.

## Testing
- `npm run lint` checks code style.
- `npm run build` creates the production build.

## Deployment
A GitHub Actions workflow automatically builds the project and deploys the `dist` folder to GitHub Pages from the `main` branch.

Available routes:
- `/tvs` – television catalog
- `/phones` – phone catalog
- `/tvs/:id` – individual TV pages
- `/phones/:id` – individual phone pages
