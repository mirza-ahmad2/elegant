import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { images, services, why, seo } from "@/lib/content";
import { Pic, Dim, Elevation, SectionLabel, NextAction, useReveal } from "@/components/site/primitives";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Elegant Woodwork | Custom Cabinets, Closets & Finishing Carpentry in Calgary",
      description: "Alberta’s leading experts in custom cabinets, closets and interior finishings. Locally manufactured in our Calgary facility.",
      path: "/",
      image: images.homeHero,
      keywords:
        "Elegant Woodwork, custom cabinets Calgary, custom closets, finishing carpentry Alberta, kitchen cabinets, locally manufactured cabinetry",
    }),
  component: Home,
});

const story = [
  { k: "Sketch", t: "It starts with how you live.", d: "Our team works closely with you, carefully selecting materials and designs that fit your project.", img: services[0]!.photos[0]! },
  { k: "Design", t: "Materials, finishes, styles.", d: "Our knowledgeable design team will lead you through the process, then customize hardware and accessories to show off your unique style.", img: services[4]!.photos[1]! },
  { k: "Craft", t: "Built to the nearest 1/8th of an inch.", d: "Custom cabinets, closet solutions, built-ins and finishing carpentry are manufactured in our state-of-the-art Calgary facility.", img: services[0]!.photos[2]! },
  { k: "Install", t: "Finished on site.", d: "On-site finishing carpentry for new builds and renovations, from baseboards and casing to custom built-ins.", img: services[5]!.photos[3]! },
  { k: "Space", t: "The stage for life’s special moments.", d: "At Elegant Woodwork, we take pride that the products we manufacture become the stage for life’s special moments.", img: images.homeB },
];

function Home() {
  useReveal();
  const [active, setActive] = useState(0);

  return (
    <>
      {/* HERO */}
      <section className="hero-screen relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-paper [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_75%)]" aria-hidden />
        <div className="relative mx-auto grid h-full max-w-[1500px] grid-rows-[auto_minmax(0,1fr)] gap-5 px-4 pb-6 pt-24 sm:gap-6 sm:px-5 sm:pb-8 sm:pt-28 md:px-10 lg:grid-cols-12 lg:grid-rows-1 lg:items-center lg:gap-6 lg:pb-10 lg:pt-28">
          <div className="flex flex-col justify-center lg:col-span-5">
            <p className="eyebrow rise">Custom · Crafted · Local</p>
            <h1 className="font-display rise mt-4 text-[2.5rem] leading-[0.95] text-ink sm:mt-5 sm:text-6xl md:text-7xl xl:text-[6.5rem]" style={{ animationDelay: "150ms" }}>
              Built around<br />the way <em className="text-wood">you</em> live.
            </h1>
            <p className="rise mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base md:text-lg" style={{ animationDelay: "300ms" }}>
              Alberta’s leading experts in custom cabinets, closets, and interior finishings. Custom solutions in a similar timeframe and price to “off the shelf” products.
            </p>
            <div className="rise mt-6 flex flex-wrap gap-3 sm:mt-8" style={{ animationDelay: "450ms" }}>
              <Link to="/contact" className="btn btn-primary">Start your project →</Link>
              <Link to="/gallery" className="btn btn-ghost">Explore our work</Link>
            </div>
          </div>

          <div className="relative min-h-0 lg:col-span-7 lg:h-full">
            <svg className="draw pointer-events-none absolute -left-4 -top-4 z-10 hidden h-[calc(100%+2rem)] w-[calc(100%+2rem)] text-graphite/60 md:block" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="0.12" aria-hidden>
              <line x1="0" y1="5" x2="100" y2="5" /><line x1="5" y1="0" x2="5" y2="100" />
              <line x1="0" y1="95" x2="100" y2="95" /><line x1="95" y1="0" x2="95" y2="100" />
              <line x1="5" y1="62" x2="95" y2="62" strokeDasharray="0.6 0.8" />
            </svg>
            <div className="reveal-clip media-frame absolute inset-0 overflow-hidden bg-paper-deep">
              <Pic id={images.homeHero} alt="Custom kitchen cabinetry by Elegant Woodwork" eager sizes="(min-width:1024px) 58vw, 100vw" className="absolute inset-0 h-full w-full" />
            </div>
            <div className="fade-late absolute inset-x-0 bottom-3 z-10 px-3 md:bottom-4">
              <Dim label="Built to the nearest 1/8″" className="hidden md:flex" />
            </div>
            <div className="fade-late absolute left-3 top-3 z-10 bg-paper/90 px-3 py-2 backdrop-blur sm:left-5 sm:top-5">
              <p className="annotation">Ref. · Kitchen</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink">Custom finish · Calgary facility</p>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="mx-auto max-w-[1500px] px-4 py-20 sm:px-5 sm:py-28 md:px-10 md:py-40">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-12">
          <div className="md:col-span-3" data-reveal><SectionLabel>At Elegant, it’s simple</SectionLabel></div>
          <div className="md:col-span-8 md:col-start-5" data-reveal>
            <p className="font-display text-2xl leading-snug sm:text-3xl md:text-5xl">
              We produce custom solutions in a similar timeframe and price to other manufacturers’ “off the shelf” products. <span className="text-graphite">Elegant is local, custom, and ready to tackle your next project.</span>
            </p>
          </div>
        </div>
      </section>

      {/* STORY: SKETCH TO SPACE */}
      <section aria-labelledby="process" className="border-y border-line bg-paper-deep/40">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-4 py-20 sm:px-5 sm:py-24 md:px-10 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionLabel>From sketch to space</SectionLabel>
              <h2 id="process" className="sr-only">Our process</h2>
              <ol className="mt-8 space-y-1 sm:mt-10">
                {story.map((s, i) => (
                  <li key={s.k}>
                    <button
                      type="button" onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}
                      aria-pressed={active === i}
                      className="group flex w-full min-h-12 items-baseline gap-4 border-b border-line py-4 text-left sm:gap-5"
                    >
                      <span className={`annotation transition-opacity ${active === i ? "opacity-100" : "opacity-40"}`}>{String(i + 1).padStart(2, "0")}</span>
                      <span className={`font-display text-3xl transition-all duration-500 sm:text-4xl md:text-6xl ${active === i ? "translate-x-2 text-ink" : "text-graphite/50"}`}>{s.k}</span>
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="media-frame relative aspect-square overflow-hidden bg-paper-deep">
              {story.map((s, i) => (
                <div key={s.k} className={`absolute inset-0 transition-all duration-[1200ms] ${active === i ? "opacity-100 [clip-path:inset(0)]" : "opacity-0 [clip-path:inset(0_0_0_100%)]"}`}>
                  <Pic id={s.img} alt={`${s.k} stage, Elegant Woodwork project`} sizes="(min-width:1024px) 45vw, 100vw" />
                </div>
              ))}
              {active < 2 && <Elevation className="absolute inset-x-8 bottom-8 text-paper/80" animate key={active} />}
            </div>
            <div className="mt-8 min-h-[9rem]" aria-live="polite">
              <p className="annotation">Stage {String(active + 1).padStart(2, "0")} / 05</p>
              <h3 className="font-display mt-3 text-2xl sm:text-3xl md:text-4xl">{story[active]!.t}</h3>
              <p className="mt-3 max-w-lg text-muted-foreground">{story[active]!.d}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES INDEX */}
      <section className="mx-auto max-w-[1500px] px-4 py-20 sm:px-5 sm:py-28 md:px-10 md:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
          <div>
            <SectionLabel>What we do</SectionLabel>
            <h2 className="font-display mt-5 text-4xl sm:mt-6 sm:text-5xl md:text-6xl">Six disciplines. One workshop.</h2>
          </div>
          <Link to="/what-we-do" className="eyebrow link-draw !text-ink">Explore services →</Link>
        </div>
        <ul className="mt-12 grid border-t border-line sm:mt-16 md:grid-cols-2">
          {services.map((s, i) => (
            <li key={s.slug} data-reveal className="border-b border-line md:odd:border-r md:odd:pr-10 md:even:pl-10">
              <Link to="/products/$slug" params={{ slug: s.slug }} className="group flex items-center gap-4 py-6 sm:gap-6 sm:py-7">
                <span className="annotation w-6">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display flex-1 text-2xl transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl md:text-4xl">{s.name}</span>
                <span className="relative hidden h-16 w-14 overflow-hidden bg-paper-deep opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
                  <Pic id={s.thumb} alt={`${s.name} preview`} sizes="60px" />
                </span>
                <span aria-hidden className="text-wood transition-transform duration-500 group-hover:translate-x-1">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* WHY teaser */}
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-4 py-20 sm:gap-12 sm:px-5 sm:py-24 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-5" data-reveal>
            <p className="annotation">Why Elegant</p>
            <h2 className="font-display mt-5 text-4xl leading-tight sm:mt-6 sm:text-5xl md:text-6xl">The specification behind every project.</h2>
            <Link to="/why-choose-us" className="btn btn-light mt-8 sm:mt-10">Read the specification →</Link>
          </div>
          <ol className="md:col-span-6 md:col-start-7">
            {why.map((w, i) => (
              <li key={w.title} data-reveal className="flex items-baseline justify-between gap-4 border-b border-paper/15 py-5 sm:gap-6">
                <span className="font-display text-xl sm:text-2xl md:text-3xl">{w.title}</span>
                <span className="annotation shrink-0">{String(i + 1).padStart(2, "0")}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WORK */}
      <section className="mx-auto max-w-[1500px] px-4 py-20 sm:px-5 sm:py-28 md:px-10 md:py-36">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4" data-reveal>
            <SectionLabel>See our work</SectionLabel>
            <h2 className="font-display mt-5 text-4xl sm:mt-6 sm:text-5xl">Elegant living spaces.</h2>
            <Link to="/gallery" className="btn btn-ghost mt-8 sm:mt-10">View our work</Link>
          </div>
          {images.work.slice(0, 3).map((id, i) => (
            <Link key={id} to="/gallery" data-reveal className={`group media-frame relative block overflow-hidden bg-paper-deep aspect-[4/5] ${i === 0 ? "md:col-span-4" : "md:col-span-2 md:mt-24"}`}>
              <Pic id={id} alt={`Elegant Woodwork project photo ${i + 1}`} sizes="(min-width:768px) 30vw, 100vw" />
            </Link>
          ))}
        </div>
      </section>

      <NextAction />
    </>
  );
}
