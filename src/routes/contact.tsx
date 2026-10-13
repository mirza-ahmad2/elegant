import { createFileRoute } from "@tanstack/react-router";
import { images, contact, seo, breadcrumbLd } from "@/lib/content";
import { Pic, SectionLabel } from "@/components/site/primitives";
import { ProjectForm } from "@/components/site/ProjectForm";

export const Route = createFileRoute("/contact")({
  head: () => {
    const s = seo({
      title: "Contact | Start Your Project | Elegant Woodwork Calgary",
      description: `Contact Elegant Woodwork about custom cabinets, closets and interior finishing in Calgary. Unit 26, 7155 - 64th Street SE · ${contact.phone}.`,
      path: "/contact",
      image: images.contactHero,
      keywords:
        "contact Elegant Woodwork, custom cabinets Calgary quote, millwork consultation, 7155 64th Street SE Calgary",
    });
    return { ...s, scripts: [breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])] };
  },
  component: Contact,
});

function Contact() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-28 sm:pt-32 md:pt-36">
      <div className="pointer-events-none absolute inset-0 grid-paper [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-[1500px] flex-1 content-start gap-12 px-4 pb-20 sm:gap-16 sm:px-5 sm:pb-28 md:px-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <div className="rise"><SectionLabel>Contact Elegant Woodwork</SectionLabel></div>
          <h1 className="font-display rise mt-6 text-4xl leading-[0.95] sm:mt-8 sm:text-6xl md:text-7xl" style={{ animationDelay: "120ms" }}>
            Start your <em className="text-wood">project.</em>
          </h1>
          <p className="rise mt-6 max-w-md text-muted-foreground" style={{ animationDelay: "240ms" }}>
            To learn more about Elegant Woodwork’s custom cabinets, closets and interior finishing, please contact us today.
          </p>

          <div className="reveal-clip media-frame relative mt-10 aspect-[4/3] overflow-hidden bg-paper-deep sm:mt-12">
            <Pic id={images.contactHero} alt="Elegant Woodwork custom interior cabinetry" eager sizes="(min-width:1024px) 40vw, 100vw" />
          </div>

          <dl className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <dt className="annotation">Contact information</dt>
              <dd className="mt-3 text-sm leading-relaxed">
                <address className="not-italic">{contact.street}<br />{contact.city}</address>
                <a href={contact.maps} target="_blank" rel="noopener noreferrer" className="link-draw mt-2 inline-block text-wood">Open in Maps ↗</a>
              </dd>
            </div>
            <div>
              <dt className="annotation">Direct</dt>
              <dd className="mt-3 text-sm leading-relaxed">
                <a href={`tel:${contact.tel}`} className="link-draw">Tel: {contact.phone}</a><br />
                <a href={`mailto:${contact.email}`} className="link-draw">{contact.email}</a>
              </dd>
            </div>
            <div>
              <dt className="annotation">Location hours</dt>
              <dd className="mt-3 text-sm leading-relaxed">
                {contact.visits}<br />{contact.hoursDays}: {contact.hours}<br />{contact.holidays}
              </dd>
            </div>
            <div>
              <dt className="annotation">Social</dt>
              <dd className="mt-3 flex flex-col gap-2 text-sm leading-relaxed">
                <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="link-draw">
                  Instagram
                </a>
                <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="link-draw">
                  Facebook
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
          <h2 className="font-display text-3xl md:text-4xl">Contact us today to get started on your custom cabinetry or millwork project.</h2>
          <div className="mt-12"><ProjectForm /></div>
        </div>
      </div>
    </section>
  );
}
