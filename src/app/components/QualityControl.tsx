export function QualityControl() {
  const Tick = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 h-4 w-4 shrink-0 text-white"
      {...props}
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section className="grid gap-6 sm:gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-base font-semibold tracking-tight sm:text-lg text-zinc-50">
          Our Quality Standard
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400">
          We protect your reputation above all else. We only partner with brands
          that match your niche and values.
        </p>
        <ul className="space-y-2 text-sm text-zinc-300">
          <li className="flex gap-2">
            <Tick />
            <span>
              Curated campaigns that feel natural to your timeline.
            </span>
          </li>
          <li className="flex gap-2">
            <Tick />
            <span>
              Strict vetting process for all advertisers.
            </span>
          </li>
        </ul>
      </div>

      <div className="rounded-2xl border border-zinc-700/70 bg-zinc-950/40 p-6 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:rounded-3xl sm:p-8">
        <h3 className="text-sm font-semibold tracking-tight text-zinc-100 sm:text-base">
          One-tap decline policy
        </h3>
        <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-zinc-300 sm:mt-6 sm:text-base">
          Reject any request that doesn't align with your personal brand.
        </p>
        <p className="mt-3 text-sm font-medium text-zinc-200 sm:text-base">
          You have full control.
        </p>
      </div>
    </section>
  );
}
