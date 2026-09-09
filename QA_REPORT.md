# Nubelon pre-launch QA report

Date: 2026-09-09

## Passed

- Astro type check: 0 errors, 0 warnings, 0 hints.
- Static build: passed; 30 pages generated.
- Internal route generation: all declared page routes build successfully.
- Image references: all source image references resolve to project assets.
- Images: production references use WebP; card and secondary images are approximately 49–145 KB each. Original PNGs remain only as source backups.
- Image accessibility: all rendered `<img>` elements have `alt` text.
- Metadata foundation: title, description, canonical, Open Graph, Twitter card, favicon and Organization JSON-LD are present.
- Search discovery files: `public/robots.txt` and `public/sitemap.xml` are present for the production domain.

## Release blockers / external actions

- Contact form is not connected to a lead destination, CRM, email handler, upload service, consent logging or spam protection. The button is intentionally non-submitting until the destination is approved.
- Privacy notice is still a draft and must be replaced with the approved policy before public launch.
- Brand authorization, product catalog, customer cases, logistics and after-sales scope remain pending source approval.
- Canonical, Open Graph, JSON-LD, sitemap and robots now target nubeloncontrols.com; re-check after Cloudflare deployment.
- Localized routes currently cover the available language landing/product/service/contact/brand pages only; category, industries, solutions and resources do not yet have complete Arabic/Chinese counterparts.
- A map embed is not included. The contact page contains address/contact data but still needs an approved map destination or embed decision.
- Formal approval files still contain `FINAL_BUILD_APPROVED = NO` and `TECH_ARCHITECTURE_APPROVED = NO`; therefore this is pre-launch QA, not a production release approval.

## Current status

`IMPLEMENTATION_COMPLETE = YES`

`PRODUCTION_DEPLOYED = NO`

`RELEASE_READY = NO` until the blockers above are resolved.
