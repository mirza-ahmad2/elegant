import { Link } from "@tanstack/react-router";
import { useEffect, type ReactNode, type CSSProperties } from "react";
import { img, srcSet, contact } from "@/lib/content";

/** Observe [data-reveal] elements on the page and add .is-in when they enter. */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)");
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

export function Pic({
  id,
  alt,
  className = "",
  sizes = "100vw",
  eager = false,
  style,
}: {
  id: string;
  alt: string;
  className?: string;
  sizes?: string;
  eager?: boolean;
  style?: CSSProperties;
}) {
  return (
    <img
      src={img(id, 1200)}
      srcSet={srcSet(id)}
      sizes={sizes}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
      className={`img-zoom h-full w-full object-cover ${className}`}
      style={style}
    />
  );
}

/** Thin dimension mark with label. */
export function Dim({ label, vertical = false, className = "" }: { label: string; vertical?: boolean; className?: string }) {
  if (vertical) {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`} aria-hidden>
        <span className="h-3 w-px bg-wood" />
        <span className="w-px flex-1 bg-wood/60" />
        <span className="annotation [writing-mode:vertical-rl]">{label}</span>
        <span className="w-px flex-1 bg-wood/60" />
        <span className="h-3 w-px bg-wood" />
      </div>
    );
  }
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-hidden>
      <span className="h-3 w-px bg-wood" />
      <span className="h-px flex-1 bg-wood/60" />
      <span className="annotation whitespace-nowrap">{label}</span>
      <span className="h-px flex-1 bg-wood/60" />
      <span className="h-3 w-px bg-wood" />
    </div>
  );
}

/** Cabinet elevation line drawing (decorative). */
export function Elevation({ className = "", animate = false }: { className?: string; animate?: boolean }) {
  return (
    <svg
      viewBox="0 0 400 260"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      className={`${animate ? "draw" : ""} ${className}`}
      aria-hidden
    >
      <rect x="10" y="20" width="380" height="60" />
      <line x1="105" y1="20" x2="105" y2="80" />
      <line x1="200" y1="20" x2="200" y2="80" />
      <line x1="295" y1="20" x2="295" y2="80" />
      <line x1="10" y1="130" x2="390" y2="130" />
      <rect x="10" y="140" width="380" height="110" />
      <line x1="130" y1="140" x2="130" y2="250" />
      <line x1="270" y1="140" x2="270" y2="250" />
      <line x1="130" y1="175" x2="270" y2="175" />
      <line x1="130" y1="212" x2="270" y2="212" />
      <line x1="185" y1="157" x2="215" y2="157" />
      <line x1="185" y1="193" x2="215" y2="193" />
      <line x1="185" y1="231" x2="215" y2="231" />
      <line x1="118" y1="160" x2="118" y2="200" />
      <line x1="282" y1="160" x2="282" y2="200" />
      <path d="M10 8 L390 8 M10 4 L10 12 M390 4 L390 12" strokeDasharray="2 3" />
    </svg>
  );
}

export function SectionLabel({ children, n }: { children: ReactNode; n?: string }) {
  return (
    <div className="flex items-center gap-4">
      {n && <span className="annotation">{n}</span>}
      <span className="h-px w-10 bg-wood" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="hero-screen relative flex flex-col overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 grid-paper [mask-image:linear-gradient(to_bottom,black,transparent)]"
        aria-hidden
      />
      <div
        className={`relative mx-auto flex w-full max-w-[1500px] flex-col px-4 sm:px-5 md:px-10 ${
          image
            ? "shrink-0 pt-24 sm:pt-28 md:pt-32"
            : "min-h-0 flex-1 justify-center py-24 sm:py-28 md:py-32"
        }`}
      >
        <div className="rise">
          <SectionLabel>{eyebrow}</SectionLabel>
        </div>
        <h1
          className="font-display rise mt-4 max-w-5xl text-4xl leading-[0.98] text-ink sm:mt-6 sm:text-5xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: "120ms" }}
        >
          {title}
        </h1>
        {intro && (
          <p
            className="rise mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base md:text-lg"
            style={{ animationDelay: "240ms" }}
          >
            {intro}
          </p>
        )}
      </div>
      {image && (
        <div className="relative mx-auto mt-5 flex min-h-0 w-full max-w-[1500px] flex-1 px-4 pb-5 sm:mt-6 sm:px-5 sm:pb-6 md:mt-8 md:px-10 md:pb-8">
          <div className="reveal-clip media-frame relative h-full w-full overflow-hidden bg-paper-deep">
            <Pic id={image} alt={imageAlt || eyebrow} eager className="absolute inset-0 h-full w-full" />
          </div>
        </div>
      )}
    </section>
  );
}

/** Closing next-action band used at the end of each page. */
export function NextAction({
  title = "Let’s draw up your space.",
  text = "Contact us today to get started on your custom cabinetry or millwork project.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <div className="pointer-events-none absolute inset-0 grid-paper" aria-hidden />
      <div
        data-reveal
        className="relative mx-auto grid max-w-[1500px] gap-8 px-4 py-20 sm:gap-10 sm:px-5 sm:py-24 md:grid-cols-12 md:px-10 md:py-32"
      >
        <div className="md:col-span-7">
          <p className="annotation">Next step</p>
          <h2 className="font-display mt-4 text-3xl leading-tight sm:mt-5 sm:text-4xl md:text-6xl">{title}</h2>
          <p className="mt-4 max-w-lg text-muted-foreground sm:mt-5">{text}</p>
        </div>
        <div className="flex flex-col items-start justify-end gap-4 md:col-span-5 md:items-end">
          <Link to="/contact" className="btn btn-primary">
            Start your project →
          </Link>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a href={`tel:${contact.tel}`} className="eyebrow link-draw !text-ink">
              Call {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="eyebrow link-draw !text-ink">
              Email us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
