import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportRuntimeError } from "../lib/runtime-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SITE_NAME, SITE_URL, DEFAULT_KEYWORDS, images, img } from "@/lib/content";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="annotation">Error 404</p>
        <h1 className="font-display mt-4 text-6xl text-foreground md:text-7xl">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn btn-primary">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportRuntimeError(error, { boundary: "root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="annotation">Something went wrong</p>
        <h1 className="font-display mt-4 text-4xl tracking-tight text-foreground md:text-5xl">
          This page didn&apos;t load
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn btn-ghost">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  telephone: "+1-403-723-9450",
  email: "info@elegantwoodwork.com",
  sameAs: [
    "https://instagram.com/elegantwoodwork",
    "https://facebook.com/ElegantWoodwork1/",
  ],
  image: img(images.homeHero, 1200),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 26, 7155 - 64th Street SE",
    addressLocality: "Calgary",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  openingHours: "Mo-Fr 08:00-16:00",
  areaServed: "Alberta",
  priceRange: "$$",
};

const defaultOg = img(images.homeHero, 1600);

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: `${SITE_NAME} | Custom Cabinets, Closets & Finishing Carpentry in Calgary` },
      {
        name: "description",
        content:
          "Alberta’s leading experts in custom cabinets, closets and interior finishings. Locally manufactured in our Calgary facility.",
      },
      { name: "keywords", content: DEFAULT_KEYWORDS },
      { name: "author", content: SITE_NAME },
      { name: "theme-color", content: "#f7f4ef" },
      { name: "format-detection", content: "telephone=yes" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_CA" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: `${SITE_NAME} | Custom Cabinets, Closets & Finishing Carpentry in Calgary` },
      {
        property: "og:description",
        content:
          "Alberta’s leading experts in custom cabinets, closets and interior finishings. Locally manufactured in our Calgary facility.",
      },
      { property: "og:image", content: defaultOg },
      { property: "og:image:alt", content: `${SITE_NAME} custom cabinetry` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${SITE_NAME} | Custom Cabinets, Closets & Finishing Carpentry in Calgary` },
      {
        name: "twitter:description",
        content:
          "Alberta’s leading experts in custom cabinets, closets and interior finishings. Locally manufactured in our Calgary facility.",
      },
      { name: "twitter:image", content: defaultOg },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
      { rel: "canonical", href: SITE_URL },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://cdn.sanity.io" },
      { rel: "dns-prefetch", href: "https://cdn.sanity.io" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap",
      },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusiness) }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-CA">
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

function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
