import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { images, why, seo, breadcrumbLd } from "@/lib/content";
import { Pic, Dim, Elevation, PageIntro, NextAction, useReveal } from "@/components/site/primitives";

export const Route = createFileRoute("/why-choose-us")({
  head: () => {
    const s = seo({
      title: "Why Choose Elegant Woodwork | Locally Manufactured Custom Cabinetry, Alberta",
      description: "Full customization, 100% local manufacturing, expert design, value add pricing, outstanding quality and industry leading service.",
      path: "/why-choose-us",
      image: images.whyHero,
      keywords:
        "why choose Elegant Woodwork, local manufacturing Calgary, custom cabinetry Alberta, value pricing, quality millwork",
    });
    return { ...s, scripts: [breadcrumbLd([{ name: "Home", path: "/" }, { name: "Why Choose Us", path: "/why-choose-us" }])] };
  },
  component: Why,
});

function Why() {
  useReveal();
  const [a, setA] = useState(0);
  return (
    <>
      <PageIntro
        eyebrow="Why Elegant"
        title={<>Why choose <em className="text-wood">Elegant Woodwork?</em></>}
        intro="At Elegant Woodwork, we pride ourselves in providing the absolute highest quality cabinets, closets and finishing carpentry available in Alberta. Our team works closely with you, carefully selecting materials and designs that fit your project. With a focus on quality craftsmanship, we’re committed to providing a smooth and reliable experience from start to finish, ensuring your project meets expectations without unnecessary complications."
        image={images.whyHero}
        imageAlt="Finished Elegant Woodwork interior"
      />

      <section aria-labelledby="spec" className="mx-auto max-w-[1500px] px-4 py-20 sm:px-5 sm:py-28 md:px-10 md:py-36">
        <div className="flex items-end justify-between gap-4" data-reveal>
          <h2 id="spec" className="font-display text-3xl sm:text-4xl md:text-5xl">Specification sheet</h2>
          <span className="annotation hidden md:inline">Sheet 01 / 06 principles</span>
        </div>

        <div className="mt-10 grid gap-12 sm:mt-14 lg:grid-cols-12">
          <ol className="lg:col-span-6">
            {why.map((w, i) => (
              <li key={w.title} className="border-t border-line last:border-b">
                <button
                  type="button" aria-expanded={a === i} aria-controls={`why-${i}`}
                  onMouseEnter={() => setA(i)} onFocus={() => setA(i)} onClick={() => setA(i)}
                  className="flex w-full min-h-12 items-baseline gap-4 py-5 text-left sm:gap-6 sm:py-6"
                >
                  <span className="annotation w-8">{String(i + 1).padStart(2, "0")}</span>
                  <span className={`font-display flex-1 text-2xl transition-all duration-500 sm:text-3xl md:text-[2.6rem] ${a === i ? "translate-x-2 text-ink" : "text-graphite/50"}`}>{w.title}</span>
                </button>
                <div id={`why-${i}`} className={`grid transition-all duration-500 ${a === i ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden pl-12 text-muted-foreground sm:pl-14 lg:hidden">{w.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="hidden lg:col-span-5 lg:col-start-8 lg:block">
            <div className="sticky top-28">
              <div className="relative border border-line p-8 shadow-[0_20px_50px_-36px_rgba(46,42,38,0.35)]">
                <div className="pointer-events-none absolute inset-0 grid-paper" aria-hidden />
                <div className="relative flex gap-6">
                  <div className="relative aspect-square w-1/2 overflow-hidden bg-paper-deep">
                    {why.map((w, i) => (
                      <div key={w.title} className={`absolute inset-0 transition-opacity duration-700 ${a === i ? "opacity-100" : "opacity-0"}`}>
                        <Pic id={w.img} alt={`${w.title} detail`} sizes="20vw" />
                      </div>
                    ))}
                  </div>
                  <Dim vertical label="Detail" className="h-auto" />
                  <Elevation key={a} animate className="w-1/2 self-end text-graphite" />
                </div>
                <div className="relative mt-8" aria-live="polite">
                  <p className="annotation">Note · {why[a]!.note}</p>
                  <h3 className="font-display mt-3 text-3xl">{why[a]!.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{why[a]!.body}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NextAction />
    </>
  );
}
