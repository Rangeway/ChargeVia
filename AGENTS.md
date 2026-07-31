# AGENTS.md — ChargeVia

Pre-launch marketing one-pager for **ChargeVia by Rangeway**, a Rangeway product and retail host-site charging format. Astro 6 static site, deployed to the Hostinger VPS via the same `deploy-dist` pull-deploy as the other Rangeway sites (`.github/workflows/deploy.yml`). Domain: **chargevia.net**.

## What ChargeVia is

The reliable, no-frills, fast-charging stop — "the stop that always works." Reliability is the product (the Buc-ee's move: clean and always right, not luxury). ChargeVia is Rangeway's customer-facing product for reliable, hardware-flexible charging at third-party retail, urban, fuel, and gap-fill host locations where a full Rangeway hospitality destination does not fit.

ChargeVia is **not** a separate company, standalone brand, fourth destination format, or lesser version of a Rangeway destination. It sits inside the Rangeway brand but outside the Waystation, Basecamp, and Summit destination-format progression. Rangeway is the company and operating party; ChargeVia is the product and host-site format.

## Brand architecture

- Primary external expression: **`ChargeVia by Rangeway`**.
- Acceptable alternate physical or digital lockup: **`ChargeVia - Powered by Rangeway`**.
- The approved header and footer lockup may use the ChargeVia wordmark, `by`, and the Rangeway wordmark.
- The ChargeVia identity must remain visibly connected to Rangeway.
- Use `Rangeway Energy, Inc.` only in approved legal or formal contexts. Do not present `ChargeVia LLC` or ChargeVia itself as the legal counterparty without current, explicit confirmation from Zak.
- Rangeway controls the ChargeVia product identity, pricing, customer relationship, network experience, and site operations. Physical assets may sit in a project AssetCo, while the retailer or property owner is the site host. This is internal operating context, not default public-site copy.

## Hard rules (from the rebuild spec)

- **Do not invent facts.** No locations/addresses, no uptime %, no price per kWh, no charger counts, no launch dates. Unknowns stay as `[TOKENS]` for Zak to fill (see README table).
- **Use the approved Rangeway relationship.** Use `ChargeVia by Rangeway` as the default first-use and explanatory expression. `ChargeVia - Powered by Rangeway` is the only approved alternate lockup. Do not describe ChargeVia as merely owned by Rangeway, independent from Rangeway, or a separate sub-brand.
- **Never include:** specific locations or "coming to [city]", pricing numbers, real uptime % (unless supplied), charger counts, Pathfinder Rewards (shelved), Altara Energy (absorbed into Rangeway), "EV gas station"/convenience-store framing as a headline, Rangeway pipeline/partners/funding, or technical jargon in headlines.
- **Keep exploratory commercial work private.** Do not name or imply a commitment from Maggie's ReFuel, Electric Era, Evergreen Charging Solutions, an AssetCo, or any other host, equipment, financing, or delivery party. Do not publish internal equipment configurations, project costs, host economics, capital structures, or pilot assumptions without Zak's explicit approval.

## Voice

Punchy, cheeky, direct, human. Short lines and fragments are fine. ChargeVia may have a more utilitarian voice than Rangeway's hospitality destinations; sentence-initial "And" is on-brand here. Avoid premium/luxury language, which belongs to Rangeway's destination formats, and avoid "revolutionary/disrupting/seamless".

Keep public-site copy sharp and concise. Add substance through specific structure, labels, and concrete details, not long paragraphs. Humor can range from dry to cheeky to bold, but should appear as punctuation rather than in every line.

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

## Source hierarchy and workspace boundary

For current business and brand context, read the maintained Rangeway sources before substantive copy, positioning, partnership, or legal-identity work:

- `/Users/zakwinnick/Documents/Codex/Rangeway/CURRENT_STATE.md`
- `/Users/zakwinnick/Documents/Codex/Rangeway/DECISIONS.md`
- `/Users/zakwinnick/Documents/Codex/Rangeway/INITIATIVES/chargevia.md`
- `/Users/zakwinnick/Documents/Codex/Rangeway/BRAND_AND_VOICE.md`
- `/Users/zakwinnick/Documents/Codex/Rangeway/PEOPLE_AND_PARTNERS.md` before characterizing any relationship

Zak's current instruction controls when it conflicts with older repository copy or documentation. The Rangeway workspace supplies business context only; website code, assets, implementation decisions, and deployment work belong in this ChargeVia repository. Do not edit the Rangeway operating workspace unless Zak explicitly asks.
