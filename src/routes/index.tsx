"use client";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Compass,
  Repeat,
  Calendar,
  ClipboardList,
  Truck,
  TrendingUp,
  Users,
  UtensilsCrossed,
  Pill,
  MessageSquare,
  LineChart,
  CheckCircle2,
  Star,
  Sparkles,
} from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { GoldButton } from "@/components/GoldButton";
import { Reveal } from "@/components/Reveal";
import { useLeadModal } from "@/components/LeadModal";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parivartan Nutrition — Transform Your Body Without Sacrificing Your Schedule" },
      {
        name: "description",
        content:
          "Premium done-for-you transformation coaching for busy professionals. 1-on-1 coaching, custom meal plans, nutrition included — Contact for pricing after free strategy call.",
      },
      { property: "og:title", content: "Parivartan Nutrition — Premium Transformation Coaching" },
      {
        property: "og:description",
        content:
          "The all-in-one transformation system trusted by 100+ founders and executives. Cancel anytime.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <TrustStrip />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <Pricing />
      <SocialProof />
      <FinalCTA />
    </SiteShell>
  );
}

/* ------------------------------- HERO ------------------------------- */
function Hero() {
  const { open } = useLeadModal();
  return (
    <section className="relative overflow-hidden bg-radial-gold pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="absolute inset-x-0 -top-24 h-[600px] pointer-events-none opacity-60"
           style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(76,175,80,0.18), transparent 60%)" }} />
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-12 gap-12 items-center relative">
        <div className="lg:col-span-7">
          <Reveal>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance">
              Transform your body without sacrificing your{" "}
              <span className="gold-text">schedule.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              A done-for-you transformation system for founders, executives, and
              high-performers. Coaching, custom nutrition, and premium nutrition products —
              delivered. <span className="text-foreground/90 font-medium">One flat price.</span>
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <GoldButton size="lg" onClick={open}>
                Book Free Strategy Call <ArrowRight className="h-4 w-4" />
              </GoldButton>
              <GoldButton variant="outline" size="lg" asChild>
                <a href="#how">See How It Works</a>
              </GoldButton>
            </div>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </span>
                <span className="text-foreground/80 font-medium">4.9 / 5</span>
                <span>· 100+ transformations</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 relative">
          <Reveal delay={0.2}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 via-transparent to-accent/20 blur-3xl opacity-60" />
              <div className="relative rounded-3xl border border-primary/20 bg-ivory-soft/80 backdrop-blur-xl p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)]">
                <Logo className="mx-auto h-40 w-40 object-contain" />
                <div className="mt-6 text-center">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-primary">
                    Transforming Bodies
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mt-1">
                    Building Habits · Changing Lives
                  </p>
                </div>
                <div className="gold-divider mt-6" />
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <Stat n="100+" l="Transformed" />
                  <Stat n="Contact for Pricing" l="After Free Strategy Call" />
                  <Stat n="4.9★" l="Client Rating" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold gold-text">{n}</div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{l}</div>
    </div>
  );
}

/* ---------------------------- TRUST STRIP --------------------------- */
function TrustStrip() {
  return (
    <section className="border-y border-foreground/10 bg-ivory-soft/40 py-6">
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span className="text-primary font-semibold">100+ Transformations</span>
        <span className="opacity-30">|</span>
        <span>4.9★ Client Rating</span>
        <span className="opacity-30">|</span>
        <span>Trusted by Founders & Executives</span>
        <span className="opacity-30">|</span>
        <span>Coaches Certified by Precision Nutrition</span>
      </div>
    </section>
  );
}

/* ----------------------------- PROBLEM ------------------------------ */
function Problem() {
  const items = [
    {
      icon: Clock,
      title: "No Time",
      body: "Back-to-back meetings, late dinners, weekend travel. Generic gym plans assume your day is empty. Yours isn't.",
    },
    {
      icon: Compass,
      title: "Confusing Diets",
      body: "Keto, carnivore, intermittent fasting, macros — endless noise, contradicting advice, no clear path forward.",
    },
    {
      icon: Repeat,
      title: "Inconsistency",
      body: "You start strong, then a deal closes, a launch hits, life happens — and 3 weeks later you're back at zero.",
    },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">The Problem</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight text-balance">
              You don't need more discipline. You need a <span className="gold-text">system</span>.
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-foreground/10 bg-ivory-soft p-8 hover:border-primary/30 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{it.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- SOLUTION ------------------------------ */
function Solution() {
  return (
    <section className="relative py-24 md:py-32 bg-ivory-soft/40 border-y border-foreground/10">
      <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">The Solution</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-balance">
            The All-in-One <span className="gold-text">Transformation System</span>
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Coaching, nutrition, and supplementation engineered around your calendar. We handle the
            strategy and the logistics — you execute and transform.
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {["1-on-1 Coaching", "Custom Meal Plans", "Nutrition Delivered", "Weekly Optimization"].map(
              (t) => (
                <div
                  key={t}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-5 py-2 text-sm text-foreground/90"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {t}
                </div>
              ),
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------- HOW IT WORKS ---------------------------- */
function HowItWorks() {
  const steps = [
    { n: "01", icon: Calendar, t: "Book Your Call", d: "Free 30-min strategy call to assess your goals, schedule, and constraints." },
    { n: "02", icon: ClipboardList, t: "Custom Plan", d: "Personalized nutrition, training, and recovery plan built around your real life." },
    { n: "03", icon: Truck, t: "Nutrition Delivered", d: "Premium nutrition and supplement stack shipped to your door — no extra cost, no thinking required." },
    { n: "04", icon: TrendingUp, t: "Daily Accountability Checks", d: "Daily check-ins and adjustments. Direct access to your coach between sessions." },
  ];
  return (
    <section id="how" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">How It Works</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight text-balance">
              Four steps. One transformation.
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="relative h-full rounded-2xl border border-foreground/10 bg-gradient-to-b from-ivory-soft to-ivory p-8 hover:border-primary/30 transition-colors">
                <div className="absolute top-6 right-6 font-display text-5xl font-bold text-primary/10">{s.n}</div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FEATURES ----------------------------- */
function Features() {
  const items = [
    { icon: Users, t: "1-on-1 Coaching", d: "Direct access to a senior coach who knows your goals, history, and schedule." },
    { icon: UtensilsCrossed, t: "Custom Meal Plans", d: "Built around your travel, taste, and calendar. Restaurant-friendly. Family-friendly." },
    { icon: Pill, t: "Nutrition Included", d: "Premium-grade nutrition stack tailored to your needs. Shipped monthly — no extra charges." },
    { icon: MessageSquare, t: "Weekly Check-ins", d: "Structured check-ins that catch plateaus before they happen and accelerate momentum." },
    { icon: Sparkles, t: "Direct Support", d: "Message your coach between sessions. Real responses from a real human, not a chatbot." },
    { icon: LineChart, t: "Progress Tracking", d: "Body composition, strength, energy, sleep — tracked and reviewed every week." },
  ];
  return (
    <section className="py-24 md:py-32 bg-ivory-soft/30 border-y border-foreground/10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">What's Included</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight text-balance">
              Everything you need. <span className="gold-text">Nothing you don't.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-foreground/10 bg-white p-7 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{it.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PRICING ------------------------------ */
function Pricing() {
  const { open } = useLeadModal();
  const includes = [
    "1-on-1 senior coach",
    "Custom nutrition plan",
    "Custom training plan",
    "Premium nutrition stack — delivered",
    "Weekly check-ins & adjustments",
    "Direct messaging with your coach",
    "Body composition & progress tracking",
    "Cancel anytime — no contracts",
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Pricing</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight text-balance">
              One price. <span className="gold-text">Everything included.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">No add-ons. No upsells. No hidden fees.</p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-12 relative">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-primary/40 via-primary/10 to-transparent" />
            <div className="relative rounded-3xl bg-ivory-soft border border-primary/20 p-8 md:p-12">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">
                  <Sparkles className="h-3 w-3" /> All-Inclusive
                </span>
                <span className="text-xs text-muted-foreground">Cancel anytime</span>
              </div>
              <div className="mt-8 text-center">
                <span className="font-display text-3xl md:text-5xl font-bold gold-text">Contact for Pricing</span>
                <p className="mt-3 text-base text-primary font-semibold">After Free Strategy Call</p>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">Coaching + nutrition + nutrition products — fully included.</p>

              <div className="hairline my-8" />

              <ul className="grid sm:grid-cols-2 gap-3">
                {includes.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <GoldButton size="lg" onClick={open} className="mt-10 w-full">
                Book Free Strategy Call <ArrowRight className="h-4 w-4" />
              </GoldButton>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                No commitment. We only enroll clients we know we can transform.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- SOCIAL PROOF --------------------------- */
const TESTIMONIALS = [
  {
    quote:
      "I'd tried every program. The difference here is the system — they remove every excuse. I lost 22 lbs in 16 weeks while closing the biggest quarter of my career.",
    name: "Marcus J.",
    role: "VP Sales · NYC",
  },
  {
    quote:
      "The nutrition products showing up at my door each month was a small detail that changed everything. No more decisions, no more excuses.",
    name: "Priya R.",
    role: "Founder · SaaS",
  },
  {
    quote:
      "Down 18 lbs and stronger than I've been since college. My coach actually adjusts the plan week to week — not a copy-paste template.",
    name: "Daniel K.",
    role: "Investment Director",
  },
  {
    quote:
      "I travel 3 weeks a month. They built a plan that works in airports, hotel gyms, and client dinners. Game-changer.",
    name: "Sarah L.",
    role: "Management Consultant",
  },
  {
    quote:
      "Energy is what surprised me. The body change came, but feeling sharp at 6pm meetings is what I'd pay for alone.",
    name: "Andre M.",
    role: "Tech Founder",
  },
  {
    quote:
      "Worth every dollar. Premium service, premium results, zero noise.",
    name: "Elena V.",
    role: "Creative Director",
  },
];

function SocialProof() {
  return (
    <section className="py-24 md:py-32 bg-ivory-soft/30 border-y border-foreground/10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Real Clients · Real Results</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight text-balance">
              100+ transformations and counting.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <BigStat n="100+" l="Transformations" />
            <BigStat n="12k+" l="Lbs Lost" />
            <BigStat n="4.9★" l="Avg Rating" />
            <BigStat n="92%" l="Client Retention" />
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full rounded-2xl border border-white/8 bg-onyx p-7 hover:border-primary/30 transition-colors"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-5 text-sm text-foreground/90 leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BigStat({ n, l }: { n: string; l: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-3xl md:text-5xl font-bold gold-text">{n}</div>
      <div className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
    </div>
  );
}

/* ---------------------------- FINAL CTA ----------------------------- */
function FinalCTA() {
  const { open } = useLeadModal();
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(76,175,80,0.18), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
        <Reveal>
          <h2 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-[1.05] text-balance">
            Ready to <span className="gold-text">transform</span>?
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Book your free 30-minute strategy call. No pressure, no pitch. We only take on clients we know we can transform.
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="mt-10">
            <GoldButton size="lg" onClick={open}>
              Book Free Strategy Call <ArrowRight className="h-4 w-4" />
            </GoldButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
