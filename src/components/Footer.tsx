import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-foreground/10 bg-ivory pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2 max-w-sm">
            <div className="flex items-center gap-3">
              <Logo className="h-14 w-14 object-contain" />
              <div>
                <div className="font-display font-bold tracking-wider">PARIVARTAN</div>
                <div className="text-[10px] tracking-[0.3em] text-primary">NUTRITION</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              Transforming Bodies · Building Habits · Changing Lives. A premium done-for-you
              transformation system for high-performing professionals.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/testimonials", label: "Testimonials" },
                { to: "/book", label: "Book a Call" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-foreground/70 hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                href="mailto:parivartannutrition@gmail.com"
                className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" /> parivartannutrition@gmail.com
              </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/parivartan.nutrition"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" /> @parivartan.nutrition
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-14 mb-6" />

        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Parivartan Nutrition. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-primary">Privacy</Link>
            <Link to="/terms" className="hover:text-primary">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
