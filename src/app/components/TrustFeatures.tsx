type Feature = {
  number: string;
  title: string;
  description: string;
  visual: React.ReactNode;
};

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 9l-6 6M9 9l6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BanknoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 7v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ApprovalVisual() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] sm:rounded-3xl sm:p-7 w-full">
      <div className="absolute inset-0 bg-linear-to-b from-zinc-900/20 to-transparent" />
      <div className="relative space-y-3">
        {/* Card 1: Approved */}
        <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 p-3 sm:p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
              <CheckCircleIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-200">Tech Weekly</p>
              <p className="text-xs text-zinc-500">$120 • 2 posts</p>
            </div>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-500 border border-emerald-500/20">
            Accepted
          </span>
        </div>

        {/* Card 2: Declined */}
        <div className="flex items-center justify-between rounded-xl border border-zinc-800/50 bg-black/40 p-3 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 sm:p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
              <XCircleIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-200">Random Crypto</p>
              <p className="text-xs text-zinc-500">$50 • 1 post</p>
            </div>
          </div>
          <span className="rounded-full bg-red-500/10 px-2.5 py-1 text-[10px] font-medium text-red-500 border border-red-500/20">
            Declined
          </span>
        </div>
      </div>
    </div>
  );
}

function PayoutVisual() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] sm:rounded-3xl sm:p-7 w-full">
      <div className="absolute inset-0 bg-linear-to-tr from-amber-400/5 via-transparent to-transparent" />
      
      <div className="relative flex flex-col gap-4">
        {/* Main Balance Card */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400">Current Balance</span>
            <BanknoteIcon className="h-4 w-4 text-amber-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-semibold text-zinc-100 sm:text-3xl">$840.00</span>
            <span className="text-xs text-emerald-400">+12%</span>
          </div>
          <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full w-[70%] bg-amber-400" />
          </div>
          <p className="mt-2 text-[10px] text-zinc-500">Next payout: Friday, Jan 18</p>
        </div>

        {/* Small Notification Item */}
        <div className="flex items-center gap-3 rounded-lg border border-zinc-800/50 bg-black/40 p-3">
          <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs text-zinc-300">Stripe transfer initiated</p>
          </div>
          <span className="text-[10px] text-zinc-500">Just now</span>
        </div>
      </div>
    </div>
  );
}

function TweetVisual() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] sm:rounded-3xl sm:p-7 w-full">
      <div className="absolute inset-0 bg-linear-to-bl from-blue-500/5 via-transparent to-transparent" />
      
      <div className="relative space-y-4">
        {/* Match Score Badge */}
        <div className="flex items-center justify-between">
           <span className="text-xs font-medium text-zinc-400">Audience Alignment</span>
           <span className="rounded-md bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold text-blue-400 border border-blue-500/20">98% MATCH</span>
        </div>

        {/* Tweet Card */}
        <div className="rounded-xl border border-zinc-800 bg-black/60 p-4">
          <div className="flex gap-3">
            <div className="h-8 w-8 shrink-0 rounded-full bg-zinc-800" />
            <div className="space-y-1">
              <div className="h-2 w-20 rounded bg-zinc-800" />
              <div className="h-2 w-32 rounded bg-zinc-800/50" />
            </div>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm leading-relaxed text-zinc-300">
              Just tried this new workflow tool. Actually saves me time instead of just adding noise.
            </p>
            <p className="text-sm text-blue-400">#productivity #tech</p>
          </div>
        </div>

        {/* Vibe Check */}
        <div className="flex gap-2">
           <div className="flex-1 rounded-lg border border-zinc-800 bg-zinc-900/50 p-2 text-center">
              <span className="block text-[10px] text-zinc-500">Tone</span>
              <span className="text-xs text-zinc-300">Authentic</span>
           </div>
           <div className="flex-1 rounded-lg border border-zinc-800 bg-zinc-900/50 p-2 text-center">
              <span className="block text-[10px] text-zinc-500">Niche</span>
              <span className="text-xs text-zinc-300">SaaS</span>
           </div>
        </div>
      </div>
    </div>
  );
}

export function TrustFeatures() {
  const features: Feature[] = [
    {
      number: "01",
      title: "Full approval control",
      description:
        "You have veto power. Reject any campaign that doesn't fit your aesthetic. No penalty, no questions asked.",
      visual: <ApprovalVisual />,
    },
    {
      number: "02",
      title: "Reliable payouts",
      description:
        "Payments are done pretty fast as soon as we verify that you have done your part; your payments would be made.",
      visual: <PayoutVisual />,
    },
    {
      number: "03",
      title: "Tweets that feel like you",
      description:
        "We connect you with top companies and top voices in tech, and we maintain quality on our side.",
      visual: <TweetVisual />,
    },
  ];

  return (
    <section className="space-y-10 sm:space-y-16">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Built for trust
        </h2>
        <p className="mt-3 text-sm text-zinc-400 sm:text-base">
          Your profile, your rules
        </p>
      </div>

      <div className="space-y-12 sm:space-y-20">
        {features.map((f, idx) => {
          const isReversed = idx % 2 === 1;
          return (
            <div
              key={f.title}
              className={`grid items-center gap-8 sm:gap-12 md:grid-cols-2 ${
                isReversed ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>{f.visual}</div>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-xs font-semibold tracking-[0.25em] text-amber-400/90">
                  {f.number}
                </p>
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                  {f.title}
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {f.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

