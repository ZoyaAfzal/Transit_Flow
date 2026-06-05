import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { MagneticCursor } from "@/components/ui/MagneticCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-black px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-[10rem] leading-none text-brand-amber">404</h1>
        <h2 className="mt-4 font-display text-3xl text-brand-white tracking-wide">
          This Page Is Lost in Transit
        </h2>
        <p className="mt-3 text-sm text-brand-muted">
          The route you requested isn't on our manifest.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-brand-amber px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-black hover:bg-brand-gold transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-black px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-brand-white tracking-wide">
          This page didn't load
        </h1>
        <p className="mt-3 text-sm text-brand-muted">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-brand-amber px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-black"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-brand-border px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-white"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TransitFlow — Driving the Future of Freight" },
      {
        name: "description",
        content:
          "Global freight & logistics. TransitFlow moves your world forward with real-time tracking across 180+ countries.",
      },
      { property: "og:title", content: "TransitFlow — Driving the Future of Freight" },
      {
        property: "og:description",
        content:
          "Global freight & logistics. Real-time tracking, guaranteed timelines, zero excuses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="cursor-none-all bg-brand-black text-brand-white">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgress />
      <MagneticCursor />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}

