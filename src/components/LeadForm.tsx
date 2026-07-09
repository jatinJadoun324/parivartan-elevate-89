"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "@tanstack/react-router";
import { Loader2, X, CheckCircle2 } from "lucide-react";
import { GoldButton } from "./GoldButton";
import { cn } from "@/lib/utils";

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z.string().trim().email("Enter a valid email address").max(160),
  phone: z.string().trim().max(30).optional(),
  goal: z.enum([
    "Lose Fat",
    "Build Muscle",
    "Improve Energy",
    "Athletic Performance",
    "Overall Health",
  ]),
});

export type LeadInput = z.infer<typeof leadSchema>;

interface LeadFormProps {
  onClose?: () => void;
  variant?: "modal" | "page";
}

export function LeadForm({ onClose, variant = "modal" }: LeadFormProps) {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(leadSchema as any),
    defaultValues: { goal: "Lose Fat" },
  });

  const onSubmit = async (data: LeadInput) => {
    setServerError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }
      setSubmitted(true);
      // Redirect to /book with prefill so Calendly (when configured) picks it up
      const params = new URLSearchParams({
        name: data.name,
        email: data.email,
        goal: data.goal,
      });
      setTimeout(() => {
        if (onClose) onClose();
        navigate({ to: "/book", search: Object.fromEntries(params) as never });
      }, 1100);
    } catch (e) {
      setServerError(e instanceof Error ? e.message : "Network error");
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
        <h3 className="text-2xl font-bold">You're in.</h3>
        <p className="text-muted-foreground mt-2">Redirecting you to schedule your call…</p>
      </div>
    );
  }

  return (
    <div className={cn(variant === "modal" && "p-2")}>
      {onClose && (
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-muted-foreground hover:text-primary transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      )}

      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
          Free 30-Min Strategy Call
        </p>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-balance">
          Tell us about your goal.
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We'll review your info and reach out within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Field label="Full Name" error={errors.name?.message}>
          <input
            {...register("name")}
            placeholder="Jane Doe"
            className={inputCls}
            autoComplete="name"
          />
        </Field>

        <Field label="Email" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            placeholder="jane@company.com"
            className={inputCls}
            autoComplete="email"
          />
        </Field>

        <Field label="Phone" optional error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+1 (555) 000-0000"
            className={inputCls}
            autoComplete="tel"
          />
        </Field>

        <Field label="Primary Goal" error={errors.goal?.message}>
          <select {...register("goal")} className={cn(inputCls, "appearance-none pr-10")}>
            <option>Lose Fat</option>
            <option>Build Muscle</option>
            <option>Improve Energy</option>
            <option>Athletic Performance</option>
            <option>Overall Health</option>
          </select>
        </Field>

        {serverError && (
          <p className="text-sm text-destructive">{serverError}</p>
        )}

        <GoldButton type="submit" size="lg" className="w-full mt-2" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            "Book My Strategy Call"
          )}
        </GoldButton>

        <p className="text-[11px] text-muted-foreground text-center pt-1">
          Your info stays private. No spam — ever.
        </p>
      </form>
    </div>
  );
}

const inputCls =
  "w-full h-12 rounded-xl bg-ivory-soft border border-foreground/10 px-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors";

function Field({
  label,
  optional,
  error,
  children,
}: {
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
        {label} {optional && <span className="opacity-60 normal-case tracking-normal">(optional)</span>}
      </span>
      {children}
      {error && <span className="block mt-1 text-xs text-destructive">{error}</span>}
    </label>
  );
}
