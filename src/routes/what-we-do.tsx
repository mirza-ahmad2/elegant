import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { images, services, seo, breadcrumbLd } from "@/lib/content";
import { Pic, Elevation, PageIntro, NextAction, useReveal } from "@/components/site/primitives";

export const Route = createFileRoute("/what-we-do")({
  head: () => {
    const s = seo({
      title: "What We Do | Custom Cabinetry & Built-Ins Calgary | Elegant Woodwork",
      description: "Custom-made cabinets for kitchens, bathrooms, wet bars and laundry rooms, plus built-ins, lockers, desks, closets and finishing carpentry in Calgary.",
      path: "/what-we-do",
      image: images.servicesHero,
      keywords:
        "custom cabinetry Calgary, kitchen cabinets, bathroom cabinets, built-ins, custom closets, finishing carpentry, Elegant Woodwork services",
    });
    return { ...s, scripts: [breadcrumbLd([{ name: "Home", path: "/" }, { name: "What We Do", path: "/what-we-do" }])] };
  },
  component: WhatWeDo,
});

function WhatWeDo() {
  useReveal();
  const [active, setActive] = useState(0);
  const s = services[active]!;
  return (
    <>
      <PageIntro
        eyebrow="What we do"
        title={<>Cabinets for any area <em className="text-wood">of your home.</em></>}
        intro="At Elegant Woodwork, we specialize in creating custom-made cabinets for any area of your home including kitchens, bathrooms, wet bars, and laundry rooms. We also manufacture custom solutions including built-ins, lockers, desks, and more!"
      />

      <section className="mx-auto mt-14 grid max-w-[1500px] gap-12 px-4 pb-20 sm:mt-20 sm:px-5 sm:pb-28 md:px-10 lg:grid-cols-12">
        <ul className="lg:col-span-7" aria-label="Services">
          {services.map((sv, i) => (
            <li key={sv.slug} className="border-t border-line last:border-b">
              <Link
                to="/products/$slug" params={{ slug: sv.slug }}
                onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}
                className="group grid grid-cols-[2rem_1fr_auto] items-start gap-3 py-6 sm:grid-cols-[2.5rem_1fr_auto] sm:gap-4 sm:py-8"
              >
                <span className="annotation pt-2 sm:pt-3">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className={`font-display block text-4xl uppercase leading-[0.9] tracking-tight transition-colors duration-500 sm:text-5xl md:text-7xl ${active === i ? "text-ink" : "text-graphite/40"}`}>
                    {sv.lines[0]}<br />{sv.lines[1]}
                  </span>
                  <span className={`mt-1 block h-px bg-wood transition-all duration-700 ${active === i ? "w-full" : "w-0"}`} />
                  <span className={`grid transition-all duration-500 ${active === i ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <span className="overflow-hidden text-muted-foreground">{sv.short}</span>
                  </span>
                  <span className="media-frame mt-4 block aspect-[4/3] overflow-hidden bg-paper-deep lg:hidden">
                    <Pic id={sv.thumb} alt={`${sv.name} by Elegant Woodwork`} sizes="100vw" />
                  </span>
                </span>
                <span className="eyebrow link-draw pt-3 !text-ink sm:pt-4">View</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:col-span-5 lg:block">
          <div className="sticky top-28">
            <div className="media-frame relative aspect-[696/840] overflow-hidden bg-paper-deep">
              {services.map((sv, i) => (
                <div key={sv.slug} className={`absolute inset-0 transition-all duration-1000 ${active === i ? "opacity-100 [clip-path:inset(0)]" : "opacity-0 [clip-path:inset(100%_0_0_0)]"}`}>
                  <Pic id={sv.thumb} alt={`${sv.name} by Elegant Woodwork`} sizes="40vw" />
                </div>
              ))}
              <Elevation key={active} animate className="absolute inset-x-10 bottom-10 text-paper/70" />
            </div>
            <div className="mt-4 flex justify-between gap-4">
              <span className="annotation">Ref. {String(active + 1).padStart(2, "0")} · {s.name}</span>
              <span className="annotation">Custom · Calgary</span>
            </div>
          </div>
        </div>
      </section>

      <NextAction />
    </>
  );
}
