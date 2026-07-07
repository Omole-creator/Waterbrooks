import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

// The emblem is cropped from the top of LOGO.jpg so the mark reads cleanly
// next to a wordmark at any size.
export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const wordColor = variant === "dark" ? "text-cream" : "text-ink";
  const subColor = variant === "dark" ? "text-leaf" : "text-green";

  return (
    <Link
      href="/"
      aria-label="WaterBrooks Technologies home"
      className={`group flex items-center gap-2.5 ${className}`}
    >
      <span
        className="block h-11 w-11 shrink-0 rounded-full bg-white ring-1 ring-line shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5"
        style={{
          backgroundImage: "url(/logo.jpg)",
          backgroundSize: "148%",
          backgroundPosition: "center 20%",
          backgroundRepeat: "no-repeat",
        }}
      />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-medium tracking-tight ${wordColor}`}>
          WaterBrooks
        </span>
        <span className={`text-[0.62rem] font-semibold uppercase tracking-[0.22em] ${subColor}`}>
          Technologies
        </span>
      </span>
    </Link>
  );
}
