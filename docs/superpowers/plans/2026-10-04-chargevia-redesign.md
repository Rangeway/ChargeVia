# ChargeVia Redesign Implementation Plan

**Goal:** Build and open the approved photo-first ChargeVia page for iteration.

**Architecture:** Use the existing Astro static site, shared header/footer, and legal routes. Build the mockup as semantic HTML and mobile-first CSS, with repository-owned responsive image exports and the approved integrated Rangeway vector.

**Tech Stack:** Astro 6, Outfit, CSS, Sharp for asset exports.

## Global constraints

- Orange #FF6B35 framing and host field; purple #8B6BB4 headings and contact action; ink #111111 and white #FFFFFF.
- Preserve ChargeVia identity and use the approved integrated Rangeway wordmark.
- Driver-first pre-launch copy from the reviewed design brief, partners@rangeway.co for hosts, hello@chargevia.net for existing legal contact.
- Preserve unrelated CLAUDE.md, output/, and tmp/ changes.
- User directed immediate implementation and a working preview, with iteration afterward.

## Task 1: Assets and identity

- [x] Export the supplied retail concept to 640, 960, and 1672-pixel WebP versions without cropping. Export the night concept to 640 and 1000-pixel WebP versions.
- [x] Copy the integrated cream Rangeway vector into public/rangeway-lockup-white.svg and compare its appearance with the approved kit PNG.
- [x] Create an image-based social card from the supplied concept.

## Task 2: Page and shared presentation

- [x] Replace src/pages/index.astro with the photo mat, purple headline, idea copy, and orange host field from the design specification.
- [x] Simplify SiteHeader.astro navigation to The idea and For hosts; simplify SiteFooter.astro to the lockup, legal links, tagline, and copyright.
- [x] Replace global.css with focused responsive styles for the homepage and retained legal-page markup. No sticky-header script is needed.
- [x] Refresh BaseLayout.astro metadata and social image, and align PRODUCT.md, DESIGN.md, and README.md with the approved direction.

## Task 3: Verify and present

- [x] Run npm run check, npm run build, and git diff --check; resolve errors.
- [x] Start the built-site preview on an available local port and check the homepage and legal routes.
- [x] Open the working preview in the Codex browser panel. Inspect desktop and mobile rendering when a browser verification surface is available; document any unavailable verification honestly.
- [x] Keep implementation local for user iteration. Do not push to main or trigger public deployment as part of this preview round.

## Results

Astro checks: zero errors, warnings, or hints. Production build and whitespace checks passed. The local built preview runs at http://127.0.0.1:4321/ and is open in Codex. Desktop and mobile visual review, loaded assets, anchor navigation, host email target, legal navigation, and keyboard skip-link focus were checked through the in-app browser. Interceptor could not attach a test browser; Lighthouse has not been measured. Implementation remains on a local branch for iteration.
