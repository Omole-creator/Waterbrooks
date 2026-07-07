import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WaveMark from "./WaveMark";

type PartnerCTAProps = {
  heading: string;
  body: string;
  cta: { label: string; href: string };
};

export default function PartnerCTA({ heading, body, cta }: PartnerCTAProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-green-deep px-7 py-14 text-center sm:px-14 sm:py-20">
        <WaveMark className="pointer-events-none absolute -left-6 top-6 h-24 w-48 text-leaf/25" />
        <WaveMark className="pointer-events-none absolute -right-4 bottom-4 h-24 w-48 rotate-180 text-leaf/20" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance text-3xl text-cream sm:text-4xl md:text-[2.6rem]">
            {heading}
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-cream/75 sm:text-lg">
            {body}
          </p>
          <Link
            href={cta.href}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-green-deep shadow-lift transition-colors hover:bg-cream"
          >
            {cta.label}
            <ArrowRight
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              strokeWidth={2}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
