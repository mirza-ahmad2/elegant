import { Link } from "@tanstack/react-router";
import { contact, nav, services } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden>
        <div className="grid-paper absolute inset-0" />
      </div>
      <div className="relative mx-auto max-w-[1500px] px-4 pb-10 pt-20 sm:px-5 md:px-10 md:pt-24">
        <div className="grid gap-12 sm:gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="annotation">Calgary, Alberta</p>
            <p className="font-display mt-5 max-w-md text-3xl leading-tight sm:mt-6 sm:text-4xl md:text-5xl">
              Local, custom, and ready to tackle your next project.
            </p>
            <Link to="/contact" className="btn btn-light mt-8 sm:mt-10">
              Start your project →
            </Link>
          </div>

          <div className="md:col-span-2">
            <h2 className="annotation mb-5">Navigate</h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="link-draw transition-opacity hover:opacity-100">
                  Home
                </Link>
              </li>
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="link-draw transition-opacity hover:opacity-100">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="annotation mb-5">Services</h2>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to="/products/$slug" params={{ slug: s.slug }} className="link-draw transition-opacity hover:opacity-100">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 text-sm md:col-span-3">
            <div>
              <h2 className="annotation mb-5">Contact</h2>
              <address className="not-italic leading-relaxed">
                Elegant Woodwork
                <br />
                {contact.street}
                <br />
                {contact.city}
              </address>
            </div>
            <p>
              <a href={`tel:${contact.tel}`} className="link-draw" aria-label={`Call ${contact.phone}`}>
                Tel: {contact.phone}
              </a>
              <br />
              <a href={`mailto:${contact.email}`} className="link-draw">
                {contact.email}
              </a>
            </p>
            <p className="flex flex-wrap gap-x-5 gap-y-2">
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="link-draw">
                Instagram
              </a>
              <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="link-draw">
                Facebook
              </a>
            </p>
            <p className="opacity-70">
              {contact.visits}
              <br />
              {contact.hoursDays}: {contact.hours}
              <br />
              {contact.holidays}
            </p>
            <p className="opacity-70">
              Careers:{" "}
              <a href={`mailto:${contact.careersEmail}`} className="link-draw">
                {contact.careersEmail}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-paper/15 pt-6 text-[11px] tracking-wide opacity-60 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Elegant Woodwork. Manufactured in Calgary, AB.</p>
          <p>
            Powered by{" "}
            <a
              href="https://www.involiq.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw"
            >
              Involiq
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
