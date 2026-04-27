import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { CheckCircle2, Calendar } from "lucide-react";
import { z } from "zod";

const searchSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  goal: z.string().optional(),
});

// Set this in your env (see README) when you have a Calendly link.
// Example: https://calendly.com/your-handle/30min
const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL as string | undefined;

export const Route = createFileRoute("/book")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Book a Call — Parivartan Nutrition" },
      {
        name: "description",
        content:
          "Book your free 30-minute strategy call with the Parivartan Nutrition team. Personalized assessment, no pressure.",
      },
      { property: "og:title", content: "Book a Call — Parivartan Nutrition" },
      {
        property: "og:description",
        content: "Free 30-minute strategy call. Limited slots available this month.",
      },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const { name, email, goal } = Route.useSearch();
  const calendly = buildCalendlyUrl(CALENDLY_URL, { name, email, goal });

  return (
    <SiteShell>
      <section className="bg-radial-gold py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">
                Free 30-Min Strategy Call
              </span>
              <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-[1.05] text-balance">
                Let's design your <span className="gold-text">transformation</span>.
              </h1>
              <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
                Book a no-pressure call with our team. We'll assess your goal, your schedule, and
                whether the program is the right fit.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid lg:grid-cols-5 gap-8">
            <Reveal className="lg:col-span-2">
              <div className="rounded-3xl border border-white/8 bg-onyx-soft p-7 md:p-8">
                <h2 className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">What to expect</h2>
                <ul className="mt-6 space-y-4 text-sm">
                  {[
                    "30 minutes, video or phone — your choice",
                    "Personalized assessment of your goals",
                    "Honest review of whether we're a fit",
                    "Custom recommendations either way",
                    "Zero pressure. Zero pitch.",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/90">{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="hairline my-8" />
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 text-primary" />
                  Most calls booked within 48 hours.
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-3">
              <div className="relative rounded-3xl border border-primary/20 bg-onyx-soft p-7 md:p-8">
                {calendly ? (
                  <div className="overflow-hidden rounded-2xl">
                    <iframe
                      title="Schedule a call"
                      src={calendly}
                      className="w-full h-[720px] border-0 bg-white"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <LeadForm variant="page" />
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function buildCalendlyUrl(
  base: string | undefined,
  prefill: { name?: string; email?: string; goal?: string },
) {
  if (!base) return null;
  try {
    const url = new URL(base);
    if (prefill.name) url.searchParams.set("name", prefill.name);
    if (prefill.email) url.searchParams.set("email", prefill.email);
    if (prefill.goal) url.searchParams.set("a1", prefill.goal);
    url.searchParams.set("hide_gdpr_banner", "1");
    url.searchParams.set("background_color", "0B0F0F");
    url.searchParams.set("text_color", "ffffff");
    url.searchParams.set("primary_color", "D4AF37");
    return url.toString();
  } catch {
    return null;
  }
}
