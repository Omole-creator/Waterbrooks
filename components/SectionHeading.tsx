type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = tone === "dark" ? "text-cream" : "text-ink";
  const introColor = tone === "dark" ? "text-cream/75" : "text-muted";

  return (
    <div className={`max-w-2xl ${alignCls} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
            tone === "dark" ? "text-leaf" : "text-green"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-orange" />
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-4 text-balance text-3xl sm:text-4xl md:text-[2.75rem] ${titleColor}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-pretty text-base leading-relaxed sm:text-lg ${introColor}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
