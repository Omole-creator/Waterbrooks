type MetricCardProps = {
  value: string;
  label: string;
  sub?: string;
};

export default function MetricCard({ value, label, sub }: MetricCardProps) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1">
      <span className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-leaf/15 transition-transform duration-500 group-hover:scale-150" />
      <p className="font-display text-4xl font-medium tracking-tight text-green-deep sm:text-[2.75rem]">
        {value}
      </p>
      <p className="mt-3 text-sm font-semibold text-ink">{label}</p>
      {sub && <p className="mt-1 text-sm leading-relaxed text-muted">{sub}</p>}
    </div>
  );
}
