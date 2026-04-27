import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Parivartan Nutrition" },
      { name: "description", content: "How Parivartan Nutrition collects, uses, and protects your information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-3xl px-5 md:px-8 py-20 md:py-28 prose-invert">
        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Legal</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: April 2026</p>

        <div className="mt-10 space-y-8 text-foreground/85 leading-relaxed text-[15px]">
          <Section title="Information We Collect">
            We collect information you provide when booking a strategy call (name, email, phone,
            health goals) and basic technical data such as IP address and browser type.
          </Section>
          <Section title="How We Use It">
            We use your information to: contact you about your inquiry, deliver the coaching service
            you've requested, improve our offerings, and comply with legal obligations. We never
            sell your data.
          </Section>
          <Section title="Sharing">
            We share information only with trusted vendors required to operate the service (e.g.
            scheduling, email delivery, payment processing). All vendors are bound by strict
            confidentiality.
          </Section>
          <Section title="Data Retention">
            We retain lead data for as long as necessary to serve you and as required by law. You
            may request deletion at any time by emailing hello@parivartannutrition.com.
          </Section>
          <Section title="Your Rights">
            You have the right to access, correct, or delete your personal data. Contact us to
            exercise these rights.
          </Section>
          <Section title="Contact">
            Questions? Email us at hello@parivartannutrition.com.
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
