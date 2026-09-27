function StainedGlassPanel() {
  return (
    <svg
      viewBox="0 0 400 520"
      className="h-full w-full"
      role="img"
      aria-label="Abstract stained-glass window illustration"
    >
      <defs>
        <clipPath id="archShape">
          <path d="M20,520 L20,220 C20,100 110,20 200,20 C290,20 380,100 380,220 L380,520 Z" />
        </clipPath>
      </defs>

      <g clipPath="url(#archShape)">
        <rect x="0" y="0" width="400" height="520" fill="#263A5C" />

        <polygon points="200,20 20,220 200,260 380,220" fill="#3B5580" opacity="0.9" />
        <polygon points="200,260 20,220 20,520 200,520" fill="#A44A2F" opacity="0.85" />
        <polygon points="200,260 380,220 380,520 200,520" fill="#B08D3E" opacity="0.85" />
        <circle cx="200" cy="200" r="70" fill="#5C6E4C" opacity="0.9" />
        <circle cx="200" cy="200" r="40" fill="#EDE9E0" opacity="0.95" />

        <line x1="200" y1="20" x2="200" y2="520" stroke="#EDE9E0" strokeWidth="3" opacity="0.5" />
        <line x1="20" y1="220" x2="380" y2="220" stroke="#EDE9E0" strokeWidth="3" opacity="0.5" />
        <line x1="20" y1="220" x2="200" y2="20" stroke="#EDE9E0" strokeWidth="2" opacity="0.4" />
        <line x1="380" y1="220" x2="200" y2="20" stroke="#EDE9E0" strokeWidth="2" opacity="0.4" />
      </g>

      <path
        d="M20,520 L20,220 C20,100 110,20 200,20 C290,20 380,100 380,220 L380,520"
        fill="none"
        stroke="#24231F"
        strokeWidth="4"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
      <div>
        <p className="font-body text-sm tracking-wide text-ember">
          Sundays at 9am and 11am
        </p>
        <h1 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
          A church home for
          <br />
          every season of life.
        </h1>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-ink/80">
          Grace Assembly is a community built on faith, service, and belonging.
          Find out what&apos;s happening this week, catch up on a past message,
          or take your first step toward getting involved.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#visit"
            className="rounded-sm bg-ember px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-ember-dark"
          >
            Plan your visit
          </a>
          <a
            href="#sermons"
            className="text-sm font-medium text-vesper underline decoration-vesper/30 underline-offset-4 hover:decoration-vesper"
          >
            Watch the latest message
          </a>
        </div>
      </div>

      <div className="mx-auto aspect-400/520 w-full max-w-sm">
        <StainedGlassPanel />
      </div>
    </section>
  );
}