import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import PartnerCTA from "@/components/PartnerCTA";
import Icon from "@/components/Icon";
import { solutions, home } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Solar-powered off-grid cold storage with IoT and AI monitoring extends shelf life from 5 to 21 days and cuts spoilage by up to 65 percent.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow={solutions.hero.eyebrow}
        heading={solutions.hero.heading}
        body={solutions.hero.body}
      />

      {/* Our solution */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="The technology"
                title={solutions.solution.heading}
              />
            </Reveal>
            <div className="mt-6 space-y-4">
              {solutions.solution.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p className="text-pretty leading-relaxed text-muted">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:content-start">
            {solutions.solution.highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-cream-2/70 p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-green shadow-sm">
                    <Icon name={h.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-ink">{h.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {h.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Shelf-life visual */}
        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-5 overflow-hidden rounded-3xl border border-line bg-white p-8 shadow-soft sm:grid-cols-3 sm:p-10">
            <div>
              <p className="font-display text-5xl font-medium text-green-deep">5 to 21</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Days of shelf life, so produce lasts more than four times longer.
              </p>
            </div>
            <div>
              <p className="font-display text-5xl font-medium text-green-deep">60 to 65%</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Less spoilage, which means far more of the harvest gets sold.
              </p>
            </div>
            <div>
              <p className="font-display text-5xl font-medium text-green-deep">Off-grid</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Solar power that works in rural villages and busy city markets alike.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Education and community */}
      <section className="border-y border-line bg-cream-2/60 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Beyond the hardware"
                title={solutions.education.heading}
              />
            </Reveal>
            <div className="space-y-5">
              {solutions.education.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className="text-pretty text-lg leading-relaxed text-ink/85">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Impact and traction"
            title={solutions.impact.heading}
            intro={solutions.impact.intro}
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {solutions.impact.items.map((item, i) => (
            <Reveal key={i} delay={(i % 2) * 0.08}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <p className="text-pretty leading-relaxed text-ink/85">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why WaterBrooks */}
      <section className="bg-green-deep py-20 text-cream sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Why WaterBrooks"
              title="A solution built to last"
              tone="dark"
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {solutions.why.points.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex items-center gap-4 rounded-2xl border border-cream/15 bg-cream/[0.04] p-5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-leaf/20 text-leaf">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <p className="font-medium text-cream/90">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-20 sm:pt-28">
        <PartnerCTA
          heading={home.closingCta.heading}
          body={home.closingCta.body}
          cta={home.closingCta.cta}
        />
      </div>
    </>
  );
}
