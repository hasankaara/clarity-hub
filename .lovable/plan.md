## Tutoring Center Website — Plan

A calm, approachable, professional marketing site for a tutoring center. Placeholder name/logo/imagery throughout so the owner can swap in real branding later with one find-and-replace.

### Design direction

- **Palette (Sage & Cream):** cream background `#f5f0e8`, soft sage surface `#dce5d4`, sage accent `#a8c0a0`, deep sage primary `#7d9b76`, deep ink foreground for readable contrast. All wired as semantic tokens in `src/styles.css` using `oklch`.
- **Typography:** Outfit for headings (medium weight, slightly tight tracking), Figtree for body. Loaded via Google Fonts in the root `head()`.
- **Composition:** split-screen hero (message left, warm classroom photo right). Generous whitespace, rounded-2xl cards, soft shadows, subtle sage dividers. Restrained motion (fade/slide on scroll only).
- **Accessibility:** AA contrast, semantic HTML, alt text, focus states, large tap targets.

### Site structure (separate routes for SEO)

```
/             Home — split hero, programs preview, why-us, testimonials, CTA
/about        Mission, story, team (placeholder portraits)
/programs     Subjects & grade levels with detail cards
/pricing      Simple tiered pricing + FAQ teaser
/contact      Contact form + location/hours
```

Each route gets its own `head()` with unique title/description/og tags. Shared header (logo placeholder + nav + "Book a session" CTA) and footer (contact, hours, social placeholders) live in `__root.tsx`.

### Home page sections

1. **Split hero** — left: headline, sub-copy, two CTAs ("Book a free assessment", "Browse programs"); right: placeholder photo of a tutoring session.
2. **Trust strip** — small row of placeholder partner/school logos.
3. **Programs preview** — 3 cards (Elementary, Middle/High School, Test Prep) linking to `/programs`.
4. **Why choose us** — 4 feature tiles (certified tutors, personalized plans, small groups, progress tracking) with simple icons.
5. **How it works** — 3-step zigzag (Assess → Match → Grow) with placeholder images.
6. **Testimonials** — 3 parent/student quote cards.
7. **CTA band** — sage block with "Ready to get started?" + contact button.

### Placeholder images

Use generated soft, warm, on-brand placeholder images saved to `src/assets/`:
- hero classroom scene, 3 program thumbnails, 3 step illustrations, 3 team portraits, 1 about-page photo.

Every image is imported by name so the owner can drop in a replacement file with the same name later.

### Technical details

- TanStack Start file-based routes under `src/routes/` (flat dot convention if nested needed).
- Design tokens defined in `src/styles.css` `:root` (and `.dark` mirror) and mapped in `@theme inline`. No hex colors in components — only `bg-primary`, `text-foreground`, etc.
- Reusable components: `SiteHeader`, `SiteFooter`, `SectionHeading`, `ProgramCard`, `FeatureTile`, `TestimonialCard`, `CTASection`, `ContactForm` (frontend-only, shows a toast on submit — no backend until requested).
- shadcn `Button`, `Card`, `Input`, `Textarea`, `Accordion` (for FAQ), `Sonner` (toasts).
- Each route sets distinct meta; root has no `og:image` (leaves only).
- No backend, auth, or database in this pass. The contact form is non-functional pending a Lovable Cloud opt-in later.

### Out of scope (ask before adding)

- Real backend / contact form delivery / booking system
- CMS or blog
- Online payments
- Auth or student portal
