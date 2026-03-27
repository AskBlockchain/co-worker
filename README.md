# Co-Worker

Static marketing site (HTML) with a small build step for [Cloudflare Pages](https://developers.cloudflare.com/pages/).

## Cloudflare Pages (connect this repo)

| Setting | Value |
|--------|--------|
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `public` |
| **Deploy command** | **Leave blank** |

Pages uploads the `public` folder after a successful build. A **Deploy command** such as `npx wrangler deploy` is for **Workers**, not Pages, and will fail with “Missing entry-point”.

## Deploy from your machine (optional)

```bash
npm install
npx wrangler login
npm run deploy
```

`deploy` runs `wrangler pages deploy public` (not `wrangler deploy`).
