# ChargeVia

Pre-launch marketing site for **ChargeVia by Rangeway** — the reliable, no-frills fast-charging stop. ChargeVia is a Rangeway product and retail host-site charging format. No email capture, locations map, pricing, or accounts.

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

- **Relationship:** `ChargeVia by Rangeway` is the primary expression. `ChargeVia - Powered by Rangeway` is the approved alternate.
- **Contact:** hello@chargevia.net.
- **No invented operating claims:** no uptime percentage, locations, pricing, charger counts, launch dates, or unconfirmed partners.
- **No email capture form:** if one is added later, use a separate ChargeVia Buttondown list.

## Brand assets (placeholders in `public/`)

`lockup.svg`, `lockup-dark.svg`, `icon.svg`, and `og-image.svg` are **placeholder** double-chevron marks. Replace them 1:1 with the real ChargeVia brand-kit files (same filenames). Exporting `og-image` to a 1200×630 PNG improves social-card compatibility.

## Deploy

Push to `main`. CI builds and force-pushes `dist/` to the `deploy-dist` branch; the VPS rsyncs it into `/var/www/ChargeVia`. Server-side setup still needed once (matching the other Rangeway sites):

1. Nginx vhost for `chargevia.net` → `/var/www/ChargeVia` + Let's Encrypt cert.
2. A per-repo deploy timer/service polling this repo's `deploy-dist` branch.
3. Cloudflare DNS (DNS-only) for `chargevia.net` → VPS `72.60.71.39`.

## Brand discipline

Use `ChargeVia by Rangeway` as the default first-use expression. `ChargeVia - Powered by Rangeway` is the approved alternate. The header and footer may use the ChargeVia wordmark, `by`, and the Rangeway wordmark. See `AGENTS.md` for the full guardrails.
