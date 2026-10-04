# ChargeVia design

The approved October 4, 2026 direction leads with the supplied retail concept, followed by a short driver introduction and a clear host invitation. A continuous ink background, asymmetric text, and an inset orange host field provide the rhythm. Avoid feature-card grids, repeated slogan bands, and oversized rounded panels.

## Identity and palette

- Use the actual ChargeVia wordmark followed by `by` and the approved integrated Rangeway vector.
- Ink `#111111`: page background and text on color fields.
- White `#FFFFFF`: body text on ink.
- Charge Orange `#FF6B35`: photograph mat, idea label, host field.
- Power Purple `#8B6BB4`: headline, navigation, idea link, host contact action.
- Outfit 700 headings and emphasized links; Outfit 400 body, with Arial fallback and display=swap.

These orange and purple roles record Zak's approved revision and supersede the older purple-sparingly treatment for this page.

## Layout and behavior

The shell is capped at 1440px with fluid side gutters. Preserve the retail image's full aspect ratio. At 768px and above, use paired columns for the introduction, idea, and host story; let the night image sit slightly into the orange field. Below 768px, use one reading column, stack the host image and copy, and allow the Rangeway endorsement and navigation to wrap. Both concepts retain visible captions and honest alt text.

The homepage contains short previews linking to `/the-idea` and `/site-hosts`. Header navigation opens those dedicated pages and underlines the current page, with `aria-current="page"`. The hosts page contains the `mailto:partners@rangeway.co` action. Legal routes retain their content. There is no form, drawer menu, or entrance animation.

Dedicated pages start with purple headlines and a short introduction. The Idea page pairs the existing urban concept with the driver narrative, then explains reliability and the Rangeway relationship. The Hosts page uses the supplied retail concept, property-fit descriptions, intended operating roles, and an orange contact invitation. At narrow widths, all editorial pairs stack in reading order.

## Accessibility

Purple against ink has approximately 4.37:1 contrast: use it only for large text or bold text at least 19px. White against ink and ink against orange pass normal-text AA. The purple contact action uses bold large ink text. Legal body links remain white with a purple underline. Provide visible focus, a keyboard skip link, 44px link targets, and reduced-motion support.

## Verification

The built page was reviewed at 360px, 768px, and 1440px. The supplied image, both wordmarks, host composition, captions, anchors, email target, and legal routes were checked in the actual preview. Astro checks, the production build, and whitespace checks passed. A Lighthouse score has not been measured for this preview; the 95+ mobile target remains unverified.
