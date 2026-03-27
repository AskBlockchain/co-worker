# Co-Worker

Static marketing site (HTML). `npm run build` writes deployable files to `public/`.

## Cloudflare Workers (Git / Workers Builds)

Use this when you connect the repo under **Workers** and the dashboard requires a **Deploy command**.

| Setting | Value |
|--------|--------|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |

[`wrangler.toml`](./wrangler.toml) uses **[static assets](https://developers.cloudflare.com/workers/static-assets/binding/)** (`./public`). No separate Worker script is required.

## Cloudflare Pages (optional)

Create the project under **Workers & Pages → Pages → Connect to Git** (not Workers Builds).

| Setting | Value |
|--------|--------|
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `public` |

If the UI allows an empty **Deploy command**, leave it empty; Pages publishes `public` after the build. If your flow only offers Workers-style deploys, use the **Workers** section above instead.

## Deploy from your machine

```bash
npm install
npx wrangler login
npm run deploy
```

- **`npm run deploy`** — `wrangler deploy` (Workers / static assets).
- **`npm run deploy:pages`** — `wrangler pages deploy` (Pages project by name).
