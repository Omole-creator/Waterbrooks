// Three flowing lines echoing the water motif in the WaterBrooks logo.
export default function WaveMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M4 20c14-12 26-12 40 0s26 12 40 0 26-12 32-6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M4 34c14-12 26-12 40 0s26 12 40 0 26-12 32-6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M4 48c14-12 26-12 40 0s26 12 40 0 26-12 32-6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
}
