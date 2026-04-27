"use client";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { GoldButton } from "./GoldButton";
import { useLeadModal } from "./LeadModal";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/testimonials", label: "Results" },
  { to: "/book", label: "Book Call" },
] as const;

export function Header() {
  const { open } = useLeadModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-onyx/85 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-20 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Parivartan Nutrition home">
          <Logo className="h-12 w-12 md:h-14 md:w-14 object-contain" />
          <span className="hidden sm:block font-display font-bold text-base tracking-wider">
            PARIVARTAN
            <span className="block text-[10px] tracking-[0.3em] text-primary -mt-0.5">NUTRITION</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/75 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <GoldButton size="sm" onClick={open} className="hidden sm:inline-flex">
            Book Free Call
          </GoldButton>
          <button
            className="md:hidden text-foreground p-2 -mr-2"
            aria-label="Menu"
            onClick={() => setMobile((v) => !v)}
          >
            {mobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {mobile && (
        <div className="md:hidden bg-onyx border-t border-white/5">
          <div className="px-5 py-6 flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobile(false)}
                className="text-base font-medium text-foreground/85 hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <GoldButton
              size="md"
              onClick={() => {
                setMobile(false);
                open();
              }}
              className="mt-2 w-full"
            >
              Book Free Call
            </GoldButton>
          </div>
        </div>
      )}
    </header>
  );
}
