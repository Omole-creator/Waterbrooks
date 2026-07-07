import { ArrowRight } from "lucide-react";
import WaveMark from "./WaveMark";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";
import { community, site } from "@/lib/content";

export default function CommunitySection() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    community.waitlist.subject,
  )}&body=${encodeURIComponent(community.waitlist.body)}`;

  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-white px-7 py-14 shadow-soft sm:px-14 sm:py-16">
          <WaveMark className="pointer-events-none absolute -right-6 -top-4 h-24 w-48 text-leaf/20" />
          <WaveMark className="pointer-events-none absolute -left-6 bottom-2 h-20 w-40 rotate-180 text-green/10" />
          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green">
                {community.eyebrow}
              </span>
              <h2 className="mt-3 text-balance text-3xl text-ink sm:text-4xl">
                {community.heading}
              </h2>
              {community.body.map((p) => (
                <p
                  key={p}
                  className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted"
                >
                  {p}
                </p>
              ))}

              <div className="mt-7">
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-green">
                  {community.followLabel}
                </span>
                <SocialLinks variant="light" className="mt-3" />
              </div>
            </div>

            <div className="rounded-2xl bg-green-deep p-7 text-cream shadow-lift sm:p-8">
              <p className="text-pretty text-base leading-relaxed text-cream/85">
                Want to be first in line when we roll out our solar cold storage?
                Join the waiting list and we will keep you posted.
              </p>
              <a
                href={mailto}
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-green-deep shadow-lift transition-colors hover:bg-cream"
              >
                {community.waitlist.label}
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
