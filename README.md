# ChargeVia

Pre-launch marketing site for **ChargeVia by Rangeway** — the reliable, no-frills fast-charging stop. ChargeVia is a Rangeway product and retail host-site charging format. No email capture, locations map, pricing, or accounts.

Pages: `/` (introduction), `/the-idea` (driver experience and Rangeway relationship), `/site-hosts` (property fit and host inquiries), `/privacy`, and `/terms`.

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
- **Host inquiries:** partners@rangeway.co. General and legal contact: hello@chargevia.net.
- **No invented operating claims:** no uptime percentage, locations, pricing, charger counts, launch dates, or unconfirmed partners.
- **No email capture form:** if one is added later, use a separate ChargeVia Buttondown list.

## Design and assets

The homepage uses the checked-in ChargeVia identity, rendered inline by `src/components/Lockup.astro` so its lettering uses Outfit, and the approved integrated Rangeway vector in `public/rangeway-lockup-white.svg`. The supplied retail concept and existing night and urban concepts have responsive WebP exports in `public/images/`. `public/og-image.jpg` is the 1200×630 social image. All concepts are labeled as renderings.

The approved Claude Design composition uses a split headline/photo hero with orange and purple chevrons, purple homepage typography, compact editorial sections, and an inset orange host invitation. See `DESIGN.md` and `PRODUCT.md`. The earlier direction is recorded in `docs/superpowers/specs/2026-10-04-chargevia-redesign-design.md`.

## Deploy

Push to `main` to trigger the existing deployment workflow. CI builds and force-pushes `dist/` to `deploy-dist`; the VPS pull-deploy serves it from `/var/www/ChargeVia`. The shared `rangeway-deploy.timer` checks every two minutes. Verify the production destination separately after a deployment. The Rangeway wordmark image URL carries a revision query because the VPS caches image files for 30 days; update that revision when replacing it. The ChargeVia identity is inline and deploys with each page.

## Brand discipline

Use `ChargeVia by Rangeway` as the default first-use expression. `ChargeVia - Powered by Rangeway` is the approved alternate. The header and footer may use the ChargeVia wordmark, `by`, and the Rangeway wordmark. See `AGENTS.md` for the full guardrails.
