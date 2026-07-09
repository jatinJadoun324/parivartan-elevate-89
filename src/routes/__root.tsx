import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { LeadModalProvider } from "@/components/LeadModal";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display font-bold gold-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0B0F0F" },
      { title: "Parivartan Nutrition — Premium Transformation Coaching" },
      {
        name: "description",
        content:
          "Done-for-you fitness, nutrition, and nutrition products for busy professionals. Contact for pricing after free strategy call — all-inclusive premium transformation coaching.",
      },
      { name: "author", content: "Parivartan Nutrition" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Parivartan Nutrition — Premium Transformation Coaching" },
      {
        property: "og:description",
        content:
          "All-in-one transformation system: 1-on-1 coaching, custom meal plans, nutrition delivered. Built for busy professionals.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <LeadModalProvider>
      <Outlet />
    </LeadModalProvider>
  );
}

