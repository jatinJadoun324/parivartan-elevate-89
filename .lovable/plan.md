
# Parivartan Nutrition — Premium Conversion Website

A high-end, black + gold marketing site engineered to convert busy professionals into booked strategy calls. Tech note: the project uses TanStack Start (not Next.js), which is the equivalent React full-stack framework on this platform — same SSR/SEO/serverless capabilities, deployed on Cloudflare via Lovable Cloud.

## Brand & Visual System

- **Palette**: Deep black `#0B0F0F` base, luxury gold `#D4AF37` (hover `#C19A2E`), accent green `#7A9A3A` used sparingly (~10%), light surface `#F7F8F5`, ivory text `#FFFFFF`, secondary text `#B8B8B8`.
- **Typography**: Inter for body, Poppins for display headings — bold hierarchy, generous spacing.
- **Style**: Minimal, editorial luxury feel. Rounded cards, soft gold-glow shadows, hairline gold dividers, subtle Framer Motion fades/slides on scroll. No clutter, no cheap gradients.
- **Logo**: Your uploaded Parivartan Nutrition logo placed in the header and footer.

## Pages

1. **Home (`/`)** — full conversion funnel
2. **Book a Call (`/book`)** — lead form + Calendly embed
3. **About (`/about`)** — brand mission, philosophy, methodology (founder-free for now)
4. **Testimonials (`/testimonials`)** — full wall of proof + stats
5. **Privacy Policy (`/privacy`)**
6. **Terms (`/terms`)**

Each page gets its own SEO metadata (title, description, og tags) for proper indexing and social sharing.

## Home Page Sections (in order)

1. **Sticky header** — logo left, nav center, gold "Book Free Strategy Call" CTA right. Transparent → solid black on scroll.
2. **Hero** — Headline: *"Transform Your Body Without Sacrificing Your Schedule."* Subheadline about the done-for-you $349/mo system. Primary gold CTA + secondary "See How It Works". Premium dark visual with subtle gold accent.
3. **Trust strip** — "100+ Transformations · 4.9★ Client Rating · Trusted by Founders & Executives".
4. **Problem** — 3 cards: No Time · Confusing Diets · Inconsistency.
5. **Solution** — "The All-in-One Transformation System" — single elevated statement with key pillars.
6. **How It Works** — 4 numbered steps: Book Call → Custom Plan → Supplements Delivered → Weekly Optimization.
7. **Features** — 6-card grid: 1-on-1 Coaching, Custom Meal Plans, Supplements Included, Weekly Check-ins, Direct Support, Progress Tracking.
8. **Pricing** — Single premium card: **$349/month — All Inclusive**, full feature list, gold CTA. "Cancel anytime · No hidden fees".
9. **Social Proof** — 4–6 realistic placeholder testimonials (clearly editable later) + stat counters (100+ transformations, 12,000+ lbs lost, etc.).
10. **Final CTA** — "Limited Slots Available This Month" — large gold CTA on dark gradient background.
11. **Footer** — logo, nav links, contact email, legal links, social icons.

## Lead Capture & Booking Flow

- **Sticky CTA button** on every page → opens lead form.
- **Lead form fields**: Name, Email, Phone (optional), Primary Goal (dropdown: Lose Fat, Build Muscle, Improve Energy, Athletic Performance, Overall Health).
- **On submit**:
  1. Client validates (Zod) and POSTs to `/api/lead`.
  2. Server validates again, inserts row into Supabase `leads` table.
  3. Server forwards the lead payload to your n8n webhook URL (stored as a secret).
  4. Returns success → frontend redirects user to `/book` where the **Calendly embed** loads with their name/email pre-filled via Calendly URL params.
- Until you provide your real Calendly URL, the embed shows a polished placeholder with instructions; swap by updating one env var.
- Until you provide your n8n webhook URL, leads still save to Supabase reliably; webhook step is skipped gracefully.

## Backend (Lovable Cloud + n8n)

- **Supabase table `leads`**: id, name, email, phone, goal, source, created_at. RLS enabled — only the server (service role) can write/read.
- **Server route `/api/lead`** (TanStack server route): input validation, DB insert, n8n webhook forward, structured error handling.
- **Secrets to add later**: `N8N_WEBHOOK_URL`, `CALENDLY_URL`. I'll prompt for these once the build is ready.
- No auth, no dashboard — purely a conversion funnel as requested.

## Extras

- **Floating WhatsApp button** (bottom-right, gold) — opens `wa.me/<your number>` (placeholder until you share the number).
- **Smooth section reveals** with Framer Motion (subtle, no excessive animation).
- **Mobile-first** layout, fully responsive, accessible (semantic HTML, focus rings, alt text).
- **SEO**: per-page meta + og tags, semantic structure, fast load, no client-side bloat.
- **404 + error boundaries** wired in.

## Out of Scope (per your spec)

- No login/auth, no dashboards, no Stripe (ready to bolt on later), no founder section, no real WhatsApp/Email automation in-app (those live in your n8n workflow).

After approval I'll build the full site, set up the database + lead API, and ask you for your n8n webhook URL, Calendly URL, and WhatsApp number when the moment comes.
