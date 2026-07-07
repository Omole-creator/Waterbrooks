import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import MetricCard from "@/components/MetricCard";
import PartnerCTA from "@/components/PartnerCTA";
import CommunitySection from "@/components/CommunitySection";
import Icon from "@/components/Icon";
import { home, contact } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <HeroGeometric
        badge={home.eyebrow}
        title1="Revolutionizing Food Preservation"
        title2="with Solar-Powered Innovation"
        subtitle={home.subheadline}
        primaryCta={home.primaryCta}
        secondaryCta={home.secondaryCta}
      />

      {/* Feature banner */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title={home.bannerHeading}
              intro={home.bannerBody}
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {home.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <FeatureCard icon={f.icon} title={f.title} body={f.body} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Traction metrics */}
      <section className="bg-cream-2/60 bg-grain py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Traction"
              title="Real progress, already on the ground"
              intro="We are not starting from scratch. Here is some of what we have achieved so far."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {home.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.09}>
                <MetricCard value={m.value} label={m.label} sub={m.sub} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why WaterBrooks */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Why us"
            title={home.why.heading}
            align="center"
            className="mx-auto"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {home.why.points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <FeatureCard icon={p.icon} title={p.title} body={p.body} tone="soft" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Who we serve teaser */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <Reveal>
          <div className="rounded-3xl border border-line bg-white p-8 shadow-soft sm:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-md">
                <SectionHeading
                  eyebrow="Who we serve"
                  title="Built for the people who feed us"
                  intro="From cooperatives to traders to NGOs, we work with the people who grow, move, and support Africa's food."
                />
              </div>
              <div className="flex flex-wrap gap-3">
                {contact.audiences.items.map((a) => (
                  <span
                    key={a.title}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-cream-2 px-4 py-2.5 text-sm font-medium text-ink"
                  >
                    <Icon name={a.icon} className="h-4 w-4 text-green" />
                    {a.title}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-green transition-colors hover:text-green-deep"
            >
              See all the ways to get involved
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2}
              />
            </Link>
          </div>
        </Reveal>
      </section>

      <div className="mb-20 sm:mb-28">
        <CommunitySection />
      </div>

      <PartnerCTA
        heading={home.closingCta.heading}
        body={home.closingCta.body}
        cta={home.closingCta.cta}
      />
    </>
  );
}
