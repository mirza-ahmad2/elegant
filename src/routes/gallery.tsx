import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { images, gallery, seo, breadcrumbLd } from "@/lib/content";
import { Pic, SectionLabel, NextAction, useReveal } from "@/components/site/primitives";

export const Route = createFileRoute("/gallery")({
  head: () => {
    const s = seo({
      title: "Gallery | Custom Kitchens, Closets & Built-Ins | Elegant Woodwork Calgary",
      description: "A look at our elegant living spaces: custom cabinetry, closets and interior finishing manufactured in Calgary.",
      path: "/gallery",
      image: images.galleryHero,
      keywords:
        "Elegant Woodwork gallery, custom kitchens Calgary, custom closets, built-ins photos, Calgary millwork projects",
    });
    return { ...s, scripts: [breadcrumbLd([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }])] };
  },
  component: Gallery,
});

// Curated sequence: layout spans for a 12-col editorial grid
const layout = [
  "md:col-span-12 aspect-[16/9]",
  "md:col-span-7 aspect-[4/3]",
  "md:col-span-4 md:col-start-9 aspect-[3/4] md:mt-32",
  "md:col-span-5 md:col-start-2 aspect-[4/5]",
  "md:col-span-6 md:col-start-7 aspect-[3/2] md:mt-40",
  "md:col-span-12 aspect-[21/9]",
  "md:col-span-4 aspect-[2/3]",
  "md:col-span-8 aspect-[3/2] md:mt-20",
  "md:col-span-6 aspect-[3/2]",
  "md:col-span-5 md:col-start-8 aspect-[4/5] md:mt-24",
  "md:col-span-7 md:col-start-3 aspect-[3/2]",
  "md:col-span-4 aspect-square",
  "md:col-span-8 aspect-[3/2] md:mt-16",
  "md:col-span-10 md:col-start-2 aspect-[21/9]",
];

function Gallery() {
  useReveal();
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o === null ? o : (o + 1) % gallery.length));
      if (e.key === "ArrowLeft") setOpen((o) => (o === null ? o : (o - 1 + gallery.length) % gallery.length));
    };
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32">
        <div className="pointer-events-none absolute inset-0 grid-paper [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
        <div className="relative mx-auto w-full max-w-[1500px] px-4 py-16 sm:px-5 sm:py-20 md:px-10">
          <div className="rise"><SectionLabel>Our work</SectionLabel></div>
          <h1 className="font-display rise mt-6 max-w-4xl text-4xl leading-[0.95] sm:mt-8 sm:text-6xl md:text-8xl" style={{ animationDelay: "120ms" }}>
            A look at our <em className="text-wood">elegant</em> living spaces.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-4 pb-24 pt-6 sm:px-5 sm:pb-32 md:px-10">
        <ul className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-12 md:gap-x-8 md:gap-y-10">
          {gallery.map((id, i) => (
            <li key={id} data-reveal className={layout[i % layout.length]}>
              <button type="button" onClick={() => setOpen(i)} className="group media-frame relative block h-full min-h-11 w-full overflow-hidden bg-paper-deep" aria-label={`View project image ${i + 1} of ${gallery.length}`}>
                <Pic id={id} alt={`Elegant Woodwork custom cabinetry project ${i + 1}`} eager={i === 0} sizes="(min-width:768px) 70vw, 100vw" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/60 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 sm:p-5">
                  <span className="annotation !text-paper">Project {String(i + 1).padStart(2, "0")}</span>
                  <span className="annotation !text-paper">View project →</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {open !== null && (
        <div role="dialog" aria-modal="true" aria-label="Project image" className="fixed inset-0 z-[80] flex flex-col bg-ink/95 p-4 md:p-10" onClick={() => setOpen(null)}>
          <div className="flex justify-between text-paper">
            <span className="annotation !text-paper">{String(open + 1).padStart(2, "0")} / {gallery.length}</span>
            <button type="button" className="eyebrow !text-paper" onClick={() => setOpen(null)} autoFocus>Close</button>
          </div>
          <div className="relative flex flex-1 items-center justify-center py-6" onClick={(e) => e.stopPropagation()}>
            <img key={open} src={`https://cdn.sanity.io/images/y6k7qhx0/production/${gallery[open]}?w=1800&fm=webp&q=80`} alt={`Elegant Woodwork project ${open + 1}`} className="rise max-h-full max-w-full object-contain" />
          </div>
          <div className="flex justify-between" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="eyebrow !text-paper" onClick={() => setOpen((open - 1 + gallery.length) % gallery.length)}>← Previous</button>
            <button type="button" className="eyebrow !text-paper" onClick={() => setOpen((open + 1) % gallery.length)}>Next →</button>
          </div>
        </div>
      )}

      <NextAction title="Imagine your space here." />
    </>
  );
}
