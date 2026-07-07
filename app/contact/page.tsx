import type { Metadata } from "next";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FeatureCard from "@/components/FeatureCard";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { contact, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact and Get Involved",
  description:
    "Partner with WaterBrooks Technologies, support farmer programs, or collaborate on innovation. Reach us by email, phone, or the contact form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={contact.hero.eyebrow}
        heading={contact.hero.heading}
        body={contact.hero.body}
      />

      {/* Ways to engage */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <SectionHeading eyebrow="Get involved" title={contact.ways.heading} />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contact.ways.items.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08}>
              <FeatureCard icon={w.icon} title={w.title} body={w.body} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + contact details */}
      <section className="border-y border-line bg-cream-2/60 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <Reveal>
              <div className="rounded-3xl border border-line bg-white p-7 shadow-soft sm:p-9">
                <h2 className="font-display text-2xl text-ink">
                  {contact.formHeading}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {contact.formIntro}
                </p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            <div className="flex flex-col gap-6">
              <Reveal delay={0.08}>
                <div className="rounded-3xl bg-green-deep p-7 text-cream shadow-lift sm:p-9">
                  <h2 className="font-display text-2xl text-cream">
                    Talk to us directly
                  </h2>
                  <ul className="mt-6 space-y-5 text-sm">
                    <li>
                      <a
                        href={`mailto:${site.email}`}
                        className="group flex items-start gap-3.5 hover:text-white"
                      >
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-leaf/20 text-leaf">
                          <Mail className="h-5 w-5" strokeWidth={1.8} />
                        </span>
                        <span>
                          <span className="block text-xs uppercase tracking-[0.18em] text-cream/50">
                            Email
                          </span>
                          <span className="break-all text-cream/90 group-hover:text-white">
                            {site.email}
                          </span>
                        </span>
                      </a>
                    </li>
                    <li className="flex items-start gap-3.5">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-leaf/20 text-leaf">
                        <Phone className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-[0.18em] text-cream/50">
                          Phone
                        </span>
                        <span className="flex flex-wrap gap-x-2 text-cream/90">
                          {site.phones.map((p, i) => (
                            <a key={p} href={`tel:${p}`} className="hover:text-white">
                              {p}
                              {i < site.phones.length - 1 ? "," : ""}
                            </a>
                          ))}
                        </span>
                      </span>
                    </li>
                    <li>
                      <a
                        href={site.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-start gap-3.5 hover:text-white"
                      >
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-leaf/20 text-leaf">
                          <MapPin className="h-5 w-5" strokeWidth={1.8} />
                        </span>
                        <span>
                          <span className="block text-xs uppercase tracking-[0.18em] text-cream/50">
                            Visit us
                          </span>
                          <span className="text-cream/90 group-hover:text-white">
                            {site.address}
                            <ArrowUpRight className="ml-1 inline h-3.5 w-3.5 opacity-60" />
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="rounded-3xl border border-line bg-white p-7 shadow-soft sm:p-9">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
                    {contact.audiences.heading}
                  </h2>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {contact.audiences.items.map((a) => (
                      <div
                        key={a.title}
                        className="flex items-center gap-3 rounded-2xl border border-line bg-cream-2/70 px-4 py-3.5"
                      >
                        <Icon name={a.icon} className="h-5 w-5 shrink-0 text-green" />
                        <span className="text-sm font-medium text-ink">
                          {a.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
