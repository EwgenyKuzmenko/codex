# КомКом React Shop


## Development

```bash
cd hello-world
npm install
npm run dev
```

## Deployment

The project includes a GitHub Actions workflow that builds the Vite project and deploys the `dist` folder to GitHub Pages whenever changes land on the `main` branch. A `404.html` file is provided so direct links like `/tvs` work when the site is hosted on GitHub Pages.

Available routes:

- `/tvs` – каталог телевизоров
- `/phones` – каталог телефонов
