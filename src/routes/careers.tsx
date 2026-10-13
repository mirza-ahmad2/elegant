import { createFileRoute } from "@tanstack/react-router";
import { images, careers, contact, seo, breadcrumbLd } from "@/lib/content";
import { PageIntro, NextAction, SectionLabel, useReveal } from "@/components/site/primitives";

export const Route = createFileRoute("/careers")({
  head: () => {
    const s = seo({
      title: "Careers | Work With Us | Elegant Woodwork Calgary",
      description: "Join a locally owned, steadily growing Calgary team crafting custom cabinetry, finishing carpentry and closet solutions.",
      path: "/careers",
      image: images.careersHero,
      keywords:
        "Elegant Woodwork careers, cabinetry jobs Calgary, finishing carpenter jobs, millwork careers Alberta",
    });
    return { ...s, scripts: [breadcrumbLd([{ name: "Home", path: "/" }, { name: "Careers", path: "/careers" }])] };
  },
  component: Careers,
});

function Careers() {
  useReveal();
  return (
    <>
      <PageIntro eyebrow="Careers" title={<>Work <em className="text-wood">with us.</em></>} intro={careers.intro} image={images.careersHero} imageAlt="Elegant Woodwork workshop" />

      <section className="mx-auto grid max-w-[1500px] gap-10 px-4 py-20 sm:gap-12 sm:px-5 sm:py-28 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4" data-reveal>
          <SectionLabel>Why work with us?</SectionLabel>
        </div>
        <ol className="md:col-span-8">
          {careers.why.map((w, i) => (
            <li key={w} data-reveal className="flex gap-4 border-t border-line py-5 last:border-b sm:gap-6 sm:py-6">
              <span className="annotation pt-2">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-display text-xl sm:text-2xl md:text-3xl">{w}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-4 py-20 sm:gap-12 sm:px-5 sm:py-24 md:grid-cols-12 md:px-10">
          <div className="md:col-span-6" data-reveal>
            <p className="annotation">Current job openings</p>
            <h2 className="font-display mt-5 text-3xl sm:mt-6 sm:text-4xl md:text-5xl">See our open positions.</h2>
            <p className="mt-5 max-w-md opacity-75">Our current job openings are listed on our Indeed company page.</p>
            <a href={careers.indeed} target="_blank" rel="noopener noreferrer" className="btn btn-light mt-8">View openings on Indeed ↗</a>
          </div>
          <div className="md:col-span-5 md:col-start-8" data-reveal>
            <p className="annotation">General inquiries</p>
            <p className="mt-6 opacity-75">For general career inquiries or to submit your resume, email us at</p>
            <a href={`mailto:${contact.careersEmail}`} className="font-display link-draw mt-3 inline-block break-all text-2xl sm:text-3xl md:text-4xl">{contact.careersEmail}</a>
          </div>
        </div>
      </section>

      <NextAction />
    </>
  );
}
