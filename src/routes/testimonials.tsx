import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Reveal } from "@/components/Reveal";
import { GoldButton } from "@/components/GoldButton";
import { useLeadModal } from "@/components/LeadModal";
import { Star, ArrowRight } from "lucide-react";

const STORIES = [
  { quote: "I'd tried every program. The difference here is the system — they remove every excuse. I lost 22 lbs in 16 weeks while closing the biggest quarter of my career.", name: "Marcus J.", role: "VP Sales · NYC", result: "−22 lbs · 16 weeks" },
  { quote: "The supplements showing up at my door each month was a small detail that changed everything. No more decisions, no more excuses.", name: "Priya R.", role: "Founder · SaaS", result: "−14 lbs · 12 weeks" },
  { quote: "Down 18 lbs and stronger than I've been since college. My coach actually adjusts the plan week to week — not a copy-paste template.", name: "Daniel K.", role: "Investment Director", result: "−18 lbs · +15% strength" },
  { quote: "I travel 3 weeks a month. They built a plan that works in airports, hotel gyms, and client dinners. Game-changer.", name: "Sarah L.", role: "Management Consultant", result: "−16 lbs · 20 weeks" },
  { quote: "Energy is what surprised me. The body change came, but feeling sharp at 6pm meetings is what I'd pay for alone.", name: "Andre M.", role: "Tech Founder", result: "+ Energy · −9 lbs" },
  { quote: "Worth every dollar. Premium service, premium results, zero noise.", name: "Elena V.", role: "Creative Director", result: "−11 lbs · 14 weeks" },
  { quote: "After 40, I thought my best body was behind me. Six months in, I'm proving myself wrong every week.", name: "Rohan S.", role: "Hedge Fund PM", result: "−25 lbs · 24 weeks" },
  { quote: "What I appreciated most was the honesty. They told me exactly what I had to do — and made it doable.", name: "Maya T.", role: "Surgeon", result: "−13 lbs · 16 weeks" },
  { quote: "The check-ins kept me on track during a brutal launch quarter. Best investment I've made in myself.", name: "Liam P.", role: "Startup CEO", result: "−19 lbs · 18 weeks" },
];

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Results — Parivartan Nutrition" },
      { name: "description", content: "Real transformations from real professionals. 100+ clients coached. 4.9★ average rating. See the stories behind the numbers." },
      { property: "og:title", content: "Client Results — Parivartan Nutrition" },
      { property: "og:description", content: "Real transformations. Real busy professionals. See the stories." },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const { open } = useLeadModal();
  return (
    <SiteShell>
      <section className="bg-radial-gold py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Client Results</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold leading-[1.05] text-balance">
              100+ transformations. <span className="gold-text">Zero shortcuts.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Real founders, executives, and leaders who decided their health deserved the same standard as their work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { n: "100+", l: "Transformations" },
                { n: "12k+", l: "Lbs Lost" },
                { n: "4.9★", l: "Avg Rating" },
                { n: "92%", l: "Retention" },
              ].map((s) => (
                <div key={s.l} className="text-center rounded-2xl border border-white/8 bg-onyx-soft py-7">
                  <div className="font-display text-3xl md:text-4xl font-bold gold-text">{s.n}</div>
                  <div className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STORIES.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.06}>
                <div className="h-full rounded-2xl border border-white/8 bg-onyx-soft p-7 hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-primary font-semibold">{t.result}</span>
                  </div>
                  <p className="mt-5 text-sm text-foreground/90 leading-relaxed">"{t.quote}"</p>
                  <div className="hairline my-6" />
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-balance">
              Your story is <span className="gold-text">next</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8">
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
