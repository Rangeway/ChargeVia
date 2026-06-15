# CLAUDE.md — ChargeVia

Pre-launch marketing one-pager for **ChargeVia**, a sub-brand of Rangeway. Astro 6 static site, deployed to the Hostinger VPS via the same `deploy-dist` pull-deploy as the other Rangeway sites (`.github/workflows/deploy.yml`). Domain: **chargevia.net**.

## What ChargeVia is

The reliable, no-frills, fast-charging stop — "the stop that always works." Reliability is the product (the Buc-ee's move: clean and always right, not luxury). It is **not** Rangeway: Rangeway is the premium hospitality network where you linger; ChargeVia is the plain stop where you don't have to.

## Hard rules (from the rebuild spec)

- **Do not invent facts.** No locations/addresses, no uptime %, no price per kWh, no charger counts, no launch dates. Unknowns stay as `[TOKENS]` for Zak to fill (see README table).
- **`Powered by Rangeway` is the only Rangeway reference allowed** anywhere on the site (copy, meta, alt, comments).
- **Never include:** specific locations or "coming to [city]", pricing numbers, real uptime % (unless supplied), charger counts, Pathfinder Rewards (shelved), Altara Energy (absorbed into Rangeway), "EV gas station"/convenience-store framing as a headline, Rangeway pipeline/partners/funding, or technical jargon in headlines.

## Voice

Punchy, cheeky, direct, human. Short lines and fragments are fine. ChargeVia does **not** follow Rangeway's punctuation rules (sentence-initial "And" is on-brand here). Avoid premium/luxury language (that's Rangeway's lane) and "revolutionary/disrupting/seamless".

## Brand system (exact — see `src/styles/global.css`)

- Colors: `--charge-orange #FF6B35`, `--orange-deep #E85A24`, `--power-purple #8B6BB4`, `--purple-deep #7B5BA4`, `--ink #111111`, `--white #FFFFFF`. **No** `#2C3E50` (deprecated Asphalt). **No yellow.**
- Type: **Outfit** (700 headings, 400 body), `display=swap`, Arial fallback.
- Dark-forward, high contrast, orange as energy accent, purple used sparingly. Double chevron (`»`) is a restrained forward-motion motif.

## Accessibility (load-bearing with these colors)

- Never set body text in Charge Orange on white (fails contrast).
- Primary CTA = `#111` button, white text. Orange is the hover/accent.
- If a button is orange, text must be `#111`, never white (white on `#FF6B35` fails AA).
- Keyboard-navigable with visible focus states. Target WCAG 2.1 AA, Lighthouse 95+ mobile, responsive from 360px.

## Email capture

None. Per Zak, all email capture was intentionally removed — this is a pure brand splash. Contact is `hello@chargevia.net` (privacy/terms). If a launch signup is added later, use a Buttondown form on a **separate** ChargeVia list/tag, never the Rangeway list.

## Imagery

Concept renders live in `public/images/` (`cv-hero-night`, `cv-station-day`, `cv-urban-night`), web-optimized from the brand asset folder. Source art (logopack + Concept Images) is in the Synology drive under `Rangeway/Redwood Mobility/ChargeVia`. Alt text must stay honest ("concept rendering") and must not imply a real location.
