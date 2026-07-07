import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FeatureCard from "@/components/FeatureCard";
import PartnerCTA from "@/components/PartnerCTA";
import Icon from "@/components/Icon";
import { about, home } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "WaterBrooks Technologies builds solar-powered cold storage with IoT monitoring, plus farmer training, to cut post-harvest losses across Africa.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={about.hero.eyebrow}
        heading={about.hero.heading}
        body={about.hero.body}
      />

      {/* Mission and Vision */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-green-deep p-8 text-cream shadow-lift sm:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-leaf/20 text-leaf">
                <Icon name="Sprout" className="h-6 w-6" />
              </span>
              <h2 className="mt-6 font-display text-2xl text-cream">Our mission</h2>
              <p className="mt-3 text-pretty leading-relaxed text-cream/80">
                {about.mission}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-line bg-white p-8 shadow-soft sm:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange/15 text-orange">
                <Icon name="Globe2" className="h-6 w-6" />
              </span>
              <h2 className="mt-6 font-display text-2xl text-ink">Our vision</h2>
              <p className="mt-3 text-pretty leading-relaxed text-muted">
                {about.vision}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="border-y border-line bg-cream-2/60 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Who we are"
                title="Good tools, in good hands."
              />
            </Reveal>
            <div className="space-y-5">
              {about.story.map((p, i) => (
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

      {/* TEN model */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Our approach"
            title={about.ten.heading}
            intro={about.ten.intro}
            align="center"
            className="mx-auto"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {about.ten.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-line bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green/10 text-green transition-colors duration-300 group-hover:bg-green group-hover:text-white">
                  <Icon name={p.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl text-ink">{p.title}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Problem statement */}
      <section className="bg-green-deep py-20 text-cream sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="The problem"
                  title={about.problem.heading}
                  tone="dark"
                />
              </Reveal>
              <div className="mt-6 space-y-4">
                {about.problem.paragraphs.map((p, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <p className="text-pretty leading-relaxed text-cream/80">{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center gap-5">
              {about.problem.stats.map((s, i) => (
                <Reveal key={s.value} delay={i * 0.12}>
                  <div className="rounded-2xl border border-cream/15 bg-cream/[0.04] p-7">
                    <p className="font-display text-5xl font-medium text-leaf">
                      {s.value}
                    </p>
                    <p className="mt-2 text-pretty leading-relaxed text-cream/75">
                      {s.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading eyebrow="Our team" title={about.team.heading} />
            </Reveal>
            <div className="mt-6 space-y-4">
              {about.team.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p className="text-pretty leading-relaxed text-muted">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-line bg-cream-2/70 p-8 sm:p-10">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
                Expertise on the team
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {about.team.disciplines.map((d) => (
                  <span
                    key={d}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-line bg-cream-2/60 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our core values"
              title="What we hold onto, every day"
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {about.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-line bg-white p-6 text-center shadow-soft">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green">
                    <Icon name={v.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-ink">{v.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Partnerships"
            title={about.partnerships.heading}
            intro={about.partnerships.body}
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {about.partnerships.partners.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.08}>
              <FeatureCard icon={p.icon} title={p.label} tone="soft" />
            </Reveal>
          ))}
        </div>
      </section>

      <PartnerCTA
        heading={home.closingCta.heading}
        body={home.closingCta.body}
        cta={home.closingCta.cta}
      />
    </>
  );
}
