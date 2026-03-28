type SectionDividerProps = {
  variant?: "soft" | "brand";
  flip?: boolean;
};

export function SectionDivider({ variant = "soft", flip = false }: SectionDividerProps) {
  const colorClass = variant === "brand" ? "text-primary/10" : "text-muted/35";

  return (
    <div aria-hidden className={`-my-0.5 overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1440 120" className={`block h-6 w-full md:h-8 ${colorClass}`} preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0,74 C140,92 260,92 380,80 C510,66 620,46 740,44 C860,42 980,60 1100,74 C1220,88 1330,92 1440,82 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
