import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Parivartan Nutrition" },
      { name: "description", content: "Terms governing your use of Parivartan Nutrition's coaching services." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-3xl px-5 md:px-8 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Legal</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: April 2026</p>

        <div className="mt-10 space-y-8 text-foreground/85 leading-relaxed text-[15px]">
          <Section title="Service">
            Parivartan Nutrition provides coaching, nutrition planning, and supplement supply on a
            month-to-month subscription basis — contact for pricing after free strategy call.
          </Section>
          <Section title="Eligibility">
            Services are intended for adults (18+) in general good health. By enrolling, you confirm
            you have consulted a physician about beginning a fitness/nutrition program where
            appropriate.
          </Section>
          <Section title="Not Medical Advice">
            Our coaching is educational and motivational. It is not medical advice and does not
            replace consultation with licensed healthcare providers.
          </Section>
          <Section title="Cancellation">
            You may cancel your subscription at any time before the next billing cycle. Already
            billed periods are non-refundable.
          </Section>
          <Section title="Limitation of Liability">
            To the maximum extent permitted by law, Parivartan Nutrition is not liable for any
            indirect, incidental, or consequential damages arising from your use of the service.
          </Section>
          <Section title="Contact">
            Questions about these terms? Email hello@parivartannutrition.com.
          </Section>
        </div>
      </article>
    </SiteShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-foreground">{title}</h2>
      <p className="mt-3">{children}</p>
    </section>
  );
}
