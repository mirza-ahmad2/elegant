import { Link } from "@tanstack/react-router";
import { useEffect, useId, useRef, useState } from "react";
import { nav, contact } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    if (open) closeRef.current?.focus();
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,height] duration-500 ${
        scrolled ? "border-b border-line bg-paper/90 shadow-[0_1px_0_rgba(46,42,38,0.04)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1500px] items-center justify-between px-4 transition-[height] duration-500 sm:px-5 md:px-10 ${
          scrolled ? "h-16" : "h-20 sm:h-24"
        }`}
      >
        <Link to="/" aria-label="Elegant Woodwork home" className="group shrink-0 focus-visible:outline-offset-4">
          <img
            src="/logo.svg"
            alt="Elegant Woodwork"
            width={180}
            height={36}
            className={`w-auto transition-all duration-500 group-hover:opacity-80 ${scrolled ? "h-7" : "h-8 sm:h-9"}`}
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="eyebrow link-draw pb-1 !text-ink transition-colors duration-300 hover:!text-wood"
              activeProps={{ className: "eyebrow pb-1 !text-wood" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a href={`tel:${contact.tel}`} className="eyebrow link-draw hidden !text-ink xl:inline" aria-label={`Call ${contact.phone}`}>
            {contact.phone}
          </a>
          <Link to="/contact" className="btn btn-primary hidden !min-h-11 !py-3 sm:inline-flex">
            Start your project
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center eyebrow !text-ink lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <div
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[70] flex flex-col bg-paper px-5 pb-10 pt-6 sm:px-6 lg:hidden"
        >
          <div className="pointer-events-none absolute inset-0 grid-paper opacity-60" aria-hidden />
          <div className="relative flex items-center justify-between">
            <img src="/logo.svg" alt="Elegant Woodwork" className="h-8 w-auto" width={160} height={32} />
            <button
              ref={closeRef}
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center eyebrow !text-ink"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <nav aria-label="Mobile" className="relative mt-14 flex flex-col gap-2 sm:mt-16 sm:gap-3">
            {nav.map((n, i) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="font-display rise py-1 text-4xl text-ink transition-colors hover:text-wood sm:text-5xl"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="relative mt-auto space-y-3 sm:space-y-4">
            <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary w-full justify-center !min-h-12">
              Start your project
            </Link>
            <a href={`tel:${contact.tel}`} className="btn btn-ghost w-full justify-center !min-h-12">
              Call {contact.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
