import Reveal from "./Reveal";
import WaveMark from "./WaveMark";

type PageHeroProps = {
  eyebrow: string;
  heading: string;
  body: string;
};

export default function PageHero({ eyebrow, heading, body }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-cream-2/70 bg-grain">
      <WaveMark className="pointer-events-none absolute right-[-2%] top-6 h-28 w-56 text-leaf/25 sm:h-40 sm:w-80" />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-green">
            <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl text-ink sm:text-5xl md:text-6xl">
            {heading}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
