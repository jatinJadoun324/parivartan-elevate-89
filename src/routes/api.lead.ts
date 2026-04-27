import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
} as const;

const leadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().max(30).optional(),
  goal: z.enum([
    "Lose Fat",
    "Build Muscle",
    "Improve Energy",
    "Athletic Performance",
    "Overall Health",
  ]),
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Route = createFileRoute("/api/lead")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: corsHeaders }),
      POST: async ({ request }: { request: Request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return json({ error: "Invalid JSON body" }, 400);
        }

        const parsed = leadSchema.safeParse(payload);
        if (!parsed.success) {
          return json(
            {
              error: "Invalid input",
              issues: parsed.error.issues.map((i) => ({
                path: i.path.join("."),
                message: i.message,
              })),
            },
            400,
          );
        }

        const lead = {
          ...parsed.data,
          phone: parsed.data.phone || null,
          source: "website",
          submittedAt: new Date().toISOString(),
          userAgent: request.headers.get("user-agent") ?? null,
        };

        const webhook = process.env.N8N_WEBHOOK_URL;
        if (webhook) {
          try {
            const res = await fetch(webhook, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(lead),
            });
            if (!res.ok) {
              console.error(`n8n webhook responded ${res.status}:`, await res.text());
            }
          } catch (err) {
            console.error("n8n webhook error:", err);
          }
        } else {
          console.log("[lead] N8N_WEBHOOK_URL not configured. Lead:", lead);
        }

        return json({ ok: true });
      },
    },
  },
} as any);
