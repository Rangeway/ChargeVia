# ChargeVia

Pre-launch marketing site for **ChargeVia** — the reliable, no-frills fast-charging stop. A sub-brand of Rangeway. Single-page, long-scroll brand splash with concept imagery. No email capture, locations map, pricing, or accounts.

- **Domain:** chargevia.net
- **Stack:** Astro 6 (static, near-zero JS)
- **Hosting:** Hostinger VPS (Nginx), via the same GitHub Actions → `deploy-dist` pull-deploy as the other Rangeway sites.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview
```

## Facts on the site

All copy is real — no placeholder tokens remain:

- **Uptime promise:** 95% (floor card 1).
- **Legal entity:** ChargeVia LLC (footer, `/privacy`, `/terms`). Confirm this is the exact registered name before launch.
- **Contact:** hello@chargevia.net.
- **No email capture form** — this is a brand splash. If a launch signup is wanted later, wire a Buttondown form on its own ChargeVia list (separate from Rangeway).

## Brand assets (placeholders in `public/`)

`lockup.svg`, `lockup-dark.svg`, `icon.svg`, and `og-image.svg` are **placeholder** double-chevron marks. Replace them 1:1 with the real ChargeVia brand-kit files (same filenames). Exporting `og-image` to a 1200×630 PNG improves social-card compatibility.

## Deploy

Push to `main`. CI builds and force-pushes `dist/` to the `deploy-dist` branch; the VPS rsyncs it into `/var/www/ChargeVia`. Server-side setup still needed once (matching the other Rangeway sites):

1. Nginx vhost for `chargevia.net` → `/var/www/ChargeVia` + Let's Encrypt cert.
2. A per-repo deploy timer/service polling this repo's `deploy-dist` branch.
3. Cloudflare DNS (DNS-only) for `chargevia.net` → VPS `72.60.71.39`.

## Brand discipline

`Powered by Rangeway` is the **only** Rangeway reference allowed on the site. No locations, pricing numbers, charger counts, Pathfinder Rewards, or Altara Energy. See the rebuild spec for the full guardrails.
