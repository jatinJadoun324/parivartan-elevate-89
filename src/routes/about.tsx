import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";
import { GoldButton } from "@/components/GoldButton";
import { useLeadModal } from "@/components/LeadModal";
import { Target, ShieldCheck, HeartPulse, Award, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Parivartan Nutrition" },
      {
        name: "description",
        content:
          "Parivartan means transformation. We build done-for-you fitness and nutrition systems for high-performing professionals — coaching, meal plans, and nutrition products in one premium service.",
      },
      { property: "og:title", content: "About Parivartan Nutrition" },
      {
        property: "og:description",
        content:
          "A premium transformation system designed for busy professionals who refuse to compromise on results.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { open } = useLeadModal();
  const pillars = [
    { icon: Target, t: "Personalization", d: "Every plan is built — not picked from a template — around your body, schedule, and goals." },
    { icon: ShieldCheck, t: "Premium Standard", d: "Senior coaches, premium-grade nutrition products, and a service experience worthy of executives." },
    { icon: HeartPulse, t: "Sustainable Results", d: "We optimize for what holds at month 12, not month 1. No crashes, no extremes." },
    { icon: Award, t: "Accountability", d: "Weekly structure, direct messaging, and real human coaching — not apps and dashboards." },
  ];

  return (
    <SiteShell>
      <section className="bg-radial-gold py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">About</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold leading-[1.05] text-balance">
              Parivartan means <span className="gold-text">transformation</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We build premium, done-for-you transformation systems for the people who run companies,
              close deals, and lead teams — and refuse to let their health slide while doing it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8 grid md:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Our Philosophy</p>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold leading-tight text-balance">
                Health is the foundation of every other ambition.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-foreground/85 leading-relaxed">
              <p>
                Most fitness programs were designed for people with empty calendars. They demand
                two-hour gym sessions, perfect meal prep, and a quiet life. That's not the world our
                clients live in.
              </p>
              <p>
                Parivartan was built around a simple idea: if the program respects your time and
                removes friction, results compound. We handle the planning, the nutrition products, and
                the weekly optimization. You execute. You transform.
              </p>
              <p>
                We're selective about who we work with — and we're selective about how we work. The
                outcome is a premium service that quietly produces real, lasting change.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ivory-soft/30 border-y border-foreground/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">What We Stand For</p>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight text-balance">
                Four pillars. <span className="gold-text">Every client. Every plan.</span>
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-foreground/10 bg-white p-7 hover:border-primary/30 transition-colors">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-balance">
              Curious if we're the right fit?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              Book a free 30-minute call. We'll tell you honestly — even if the answer is no.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10">
              <GoldButton size="lg" onClick={open}>
                Book Free Strategy Call <ArrowRight className="h-4 w-4" />
              </GoldButton>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
