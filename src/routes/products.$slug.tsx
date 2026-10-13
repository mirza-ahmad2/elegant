import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { services, seo, breadcrumbLd, SITE_URL, type Service } from "@/lib/content";
import { Pic, Dim, Elevation, SectionLabel, useReveal } from "@/components/site/primitives";
import { ProjectForm } from "@/components/site/ProjectForm";

const keywords: Record<string, string> = {
  "kitchen-cabinets": "Custom Kitchen Cabinets Calgary",
  "bathroom-cabinets": "Custom Bathroom Cabinets & Vanities Calgary",
  "bar-cabinets": "Custom Bar Cabinets, Wet Bars & Coffee Stations Calgary",
  "storage-and-built-ins": "Custom Built-Ins & Storage Calgary",
  "custom-closets": "Custom Closets Calgary",
  "finishing-carpentry": "Finishing Carpentry Calgary",
};

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const s = loaderData.service;
    const base = seo({
      title: `${keywords[s.slug]} | Elegant Woodwork`,
      description: s.short,
      path: `/products/${s.slug}`,
      image: s.hero,
      keywords: `${s.name}, ${keywords[s.slug]}, Elegant Woodwork Calgary, custom millwork Alberta`,
    });
    return {
      ...base,
      scripts: [
        breadcrumbLd([{ name: "Home", path: "/" }, { name: "What We Do", path: "/what-we-do" }, { name: s.name, path: `/products/${s.slug}` }]),
        { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: s.name, description: s.intro, areaServed: "Alberta", provider: { "@type": "LocalBusiness", name: "Elegant Woodwork", url: SITE_URL }, url: `${SITE_URL}/products/${s.slug}` }) },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service: s } = Route.useLoaderData();
  useReveal();
  const idx = services.findIndex((x) => x.slug === s.slug);
  const next = services[(idx + 1) % services.length]!;

  return (
    <>
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden pb-6 sm:pb-8 md:pb-10">
        <div className="pointer-events-none absolute inset-0 grid-paper [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
        <div className="relative mx-auto w-full max-w-[1500px] shrink-0 px-4 pt-28 sm:px-5 sm:pt-32 md:px-10 md:pt-36">
          <nav aria-label="Breadcrumb" className="rise">
            <ol className="eyebrow flex flex-wrap gap-2">
              <li><Link to="/what-we-do" className="link-draw">Services</Link> /</li>
              <li aria-current="page" className="!text-ink">{s.name}</li>
            </ol>
          </nav>
          <div className="mt-8 grid gap-8 sm:mt-10 sm:gap-10 md:grid-cols-12">
            <h1 className="font-display rise text-5xl uppercase leading-[0.88] tracking-tight sm:text-6xl md:col-span-7 md:text-8xl lg:text-[8.5rem]" style={{ animationDelay: "100ms" }}>
              {s.lines[0]}<br /><span className="text-wood">{s.lines[1]}</span>
            </h1>
            <p className="rise self-end text-base leading-relaxed text-muted-foreground sm:text-lg md:col-span-5" style={{ animationDelay: "250ms" }}>{s.intro}</p>
          </div>
        </div>
        <div className="relative mx-auto mt-8 flex min-h-0 w-full max-w-[1500px] flex-1 flex-col px-4 sm:mt-10 sm:px-5 md:px-10">
          <div className="reveal-clip media-frame relative min-h-[42vh] w-full flex-1 overflow-hidden bg-paper-deep sm:min-h-[46vh]">
            <Pic id={s.hero} alt={`${s.name} by Elegant Woodwork`} eager className="absolute inset-0" />
          </div>
          <Dim label={`Ref. ${String(idx + 1).padStart(2, "0")} · ${s.name}`} className="fade-late mt-4" />
        </div>
      </section>

      {s.layout === "feature" ? <FeatureSpec s={s} /> : s.layout === "config" ? <ConfigSpec s={s} /> : <SheetSpec s={s} />}

      <Photos s={s} />

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-4 py-20 sm:gap-12 sm:px-5 sm:py-24 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <SectionLabel>Start your project</SectionLabel>
            <h2 className="font-display mt-5 text-3xl sm:mt-6 sm:text-4xl md:text-5xl">Contact us today to get started on your {s.name.toLowerCase()}.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6"><ProjectForm compact /></div>
        </div>
      </section>

      <Link to="/products/$slug" params={{ slug: next.slug }} className="group block border-t border-line bg-ink text-paper">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-4 py-12 sm:gap-6 sm:px-5 sm:py-16 md:px-10">
          <div>
            <p className="annotation">Next service</p>
            <p className="font-display mt-3 text-3xl transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl md:text-6xl">{next.name}</p>
          </div>
          <span className="text-3xl text-wood transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl" aria-hidden>→</span>
        </div>
      </Link>
    </>
  );
}

/** Technical spec sheet (kitchen, built-ins, finishing). */
function SheetSpec({ s }: { s: Service }) {
  return (
    <section className="mx-auto max-w-[1500px] px-4 py-20 sm:px-5 sm:py-28 md:px-10 md:py-36">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4" data-reveal>
          <SectionLabel>{s.layout === "detail" ? "Construction details" : "Specification"}</SectionLabel>
          {s.closing && <p className="font-display mt-8 text-2xl leading-snug sm:text-3xl">{s.closing}</p>}
          <Elevation animate className="mt-12 hidden w-full text-graphite lg:block" />
        </div>
        <dl className="lg:col-span-7 lg:col-start-6">
          {s.specs.map((g, i) => (
            <div key={g.label} data-reveal className="grid gap-4 border-t border-line py-7 last:border-b sm:py-8 md:grid-cols-[10rem_1fr]">
              <dt className="annotation pt-1">{String(i + 1).padStart(2, "0")} · {g.label.length > 24 ? "Features" : g.label}</dt>
              <dd>
                {g.label.length > 24 && <p className="mb-4 text-muted-foreground">{g.label}:</p>}
                {g.items.length === 1 ? (
                  <p className="text-xl leading-relaxed md:text-2xl">{g.items[0]}</p>
                ) : (
                  <ul className="flex flex-wrap gap-x-8 gap-y-2">
                    {g.items.map((it) => <li key={it} className="font-display text-3xl">{it}</li>)}
                  </ul>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/** Single strong image + two-column list (bathroom, bar). */
function FeatureSpec({ s }: { s: Service }) {
  return (
    <section className="mx-auto max-w-[1500px] px-4 py-20 sm:px-5 sm:py-28 md:px-10 md:py-36">
      <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-12">
        <div className="media-frame relative aspect-[4/5] overflow-hidden bg-paper-deep lg:col-span-6" data-reveal>
          <Pic id={s.photos[0]!} alt={`${s.name} detail`} sizes="(min-width:1024px) 50vw, 100vw" />
          <span className="absolute left-4 top-4 bg-paper/90 px-3 py-2 annotation sm:left-5 sm:top-5">Custom sizes</span>
        </div>
        <div className="space-y-10 sm:space-y-12 lg:col-span-5 lg:col-start-8">
          {s.specs.map((g, i) => (
            <div key={g.label} data-reveal>
              <p className="annotation">{String(i + 1).padStart(2, "0")} · {g.label}</p>
              {g.items.length === 1 ? (
                <p className="mt-4 text-lg leading-relaxed sm:text-xl">{g.items[0]}</p>
              ) : (
                <ul className="mt-4">
                  {g.items.map((it) => (
                    <li key={it} className="font-display flex items-baseline justify-between border-b border-line py-3 text-2xl sm:text-3xl">
                      {it}<span className="h-px w-8 bg-wood" aria-hidden />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Closet configuration story: layered build-up. */
function ConfigSpec({ s }: { s: Service }) {
  return (
    <section className="bg-paper-deep/40">
      <div className="mx-auto max-w-[1500px] px-4 py-20 sm:px-5 sm:py-28 md:px-10 md:py-36">
        <div data-reveal>
          <SectionLabel>Configure your closet</SectionLabel>
          <h2 className="font-display mt-5 max-w-2xl text-3xl sm:mt-6 sm:text-4xl md:text-5xl">Beauty, storage and purpose, built in layers.</h2>
        </div>
        <ol className="mt-12 grid gap-px bg-line sm:mt-16 md:grid-cols-5">
          {s.specs.map((g, i) => (
            <li key={g.label} data-reveal className="flex flex-col bg-paper p-5 sm:p-6 md:min-h-[22rem]" style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="annotation">Layer {String(i + 1).padStart(2, "0")}</span>
              <span className="font-display mt-3 text-2xl sm:text-3xl">{g.label}</span>
              <div className="mt-auto pt-8">
                <div className="mb-5 flex h-10 items-end gap-1" aria-hidden>
                  {Array.from({ length: i + 1 }).map((_, k) => <span key={k} className="w-full bg-wood/70" style={{ height: `${30 + k * 15}%` }} />)}
                </div>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {g.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Photos({ s }: { s: Service }) {
  const p = s.photos.slice(1, 7);
  return (
    <section aria-label={`${s.name} projects`} className="mx-auto max-w-[1500px] px-4 pb-20 sm:px-5 sm:pb-28 md:px-10">
      <div className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:thin] md:grid md:grid-cols-12 md:gap-6 md:overflow-visible">
        {p.map((id, i) => (
          <div key={id} data-reveal className={`media-frame group relative aspect-square w-[75vw] shrink-0 overflow-hidden bg-paper-deep md:w-auto ${["md:col-span-5", "md:col-span-4 md:mt-20", "md:col-span-3", "md:col-span-3 md:col-start-2", "md:col-span-4 md:-mt-10", "md:col-span-4"][i]}`}>
            <Pic id={id} alt={`${s.name} project ${i + 1}`} sizes="(min-width:768px) 35vw, 75vw" />
          </div>
        ))}
      </div>
      <div className="mt-8 sm:mt-10" data-reveal><Link to="/gallery" className="eyebrow link-draw !text-ink">View all work →</Link></div>
    </section>
  );
}

