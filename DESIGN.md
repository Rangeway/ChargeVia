# ChargeVia design

Zak approved the Claude Design export on October 4, 2026 with three refinements: integrate more purple into the homepage, simplify its middle and closing sections, and remove the unsupported charging-time comparison. This supersedes the earlier photo-first landing-page composition while preserving the three-page architecture.

## Identity and palette

- Use the supplied ChargeVia identity, `by`, and the approved integrated Rangeway wordmark.
- Ink `#111111` forms the main page background; white `#FFFFFF` supplies body text.
- Charge Orange `#FF6B35` supplies the hero chevron, actions, and host invitation.
- Power Purple `#8B6BB4` supplies the second hero chevron, homepage headline, section labels, links, and footer tagline.
- Deep Purple `#7B5BA4` supplies the Idea page's Rangeway field, with white text.
- Outfit 700 headings, 600 leads, and 400 body, with Arial fallback and display=swap.

These orange and purple roles record Zak's approved revision and supersede the older purple-sparingly treatment.

## Layout and behavior

The shell is capped at 1320px with fluid side gutters. The homepage opens with paired copy and the supplied retail concept, framed by the ChargeVia chevron. A compact editorial section describes a useful property, followed by the night concept and the reliability standard. An inset orange host invitation closes the page. Avoid repeating feature-card grids and giant slogan bands on the homepage.

`/the-idea` explains the intended driver experience, property-dependent amenities, reliability standard, and Rangeway relationship. `/site-hosts` describes property fit, intended operating roles, and a short inquiry checklist linking to `partners@rangeway.co`. These pages retain the export's white editorial sections and color fields. Privacy and terms retain their legal content.

Below desktop breakpoints, pairs stack in reading order and the navigation wraps. All concept images retain visible captions and honest alt text. There is no capture form, drawer menu, or entrance animation.

## Accessibility

Purple against ink has approximately 4.37:1 contrast: use it only for large text or bold text at least 19px. White against ink, ink against orange, and white against deep purple pass normal-text AA. Orange buttons use ink text. Provide visible keyboard focus, a skip link, and 44px link targets. Focus outlines on orange fields use ink.

## Verification

The production build was reviewed in a real browser on desktop and at 360px. Both dedicated pages, image loading, navigation, host inquiry targets, wordmarks, and mobile overflow were checked. Astro source checks, the build, and whitespace checks passed. A Lighthouse score has not been measured; the 95+ mobile target remains unverified.
