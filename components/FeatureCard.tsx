import Icon from "./Icon";

type FeatureCardProps = {
  icon: string;
  title: string;
  body?: string;
  tone?: "light" | "soft";
};

export default function FeatureCard({
  icon,
  title,
  body,
  tone = "light",
}: FeatureCardProps) {
  const cardBg = tone === "soft" ? "bg-cream-2" : "bg-white";
  return (
    <div
      className={`group h-full rounded-2xl border border-line ${cardBg} p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift`}
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green transition-colors duration-300 group-hover:bg-green group-hover:text-white">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-display text-xl font-medium text-ink">{title}</h3>
      {body && (
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
          {body}
        </p>
      )}
    </div>
  );
}
