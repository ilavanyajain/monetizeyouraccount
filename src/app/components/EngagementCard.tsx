interface PricingRowProps {
  label: string;
  value: string;
}

function PricingRow({ label, value }: PricingRowProps) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
      <span className="text-zinc-400">{label}</span>
      <span className="text-sm font-semibold text-zinc-50 sm:text-base">
        {value}
      </span>
    </div>
  );
}

interface EngagementCardProps {
  title: string;
  description: string;
  pricePerAction: string;
  volume: string;
  disclaimer: string;
  isPremium?: boolean;
  priceLabel?: string;
}

export function EngagementCard({
  title,
  description,
  pricePerAction,
  volume,
  disclaimer,
  isPremium = false,
  priceLabel = "Per action",
}: EngagementCardProps) {
  return (
    <div
      className={`space-y-3 ${
        isPremium
          ? "sm:space-y-4 md:pl-6"
          : "border-b border-zinc-800 pb-5 sm:space-y-4 md:border-b-0 md:border-r md:pb-0 md:pr-6"
      }`}
    >
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-semibold tracking-tight sm:text-xl text-zinc-50">
          {title}
        </h2>
        {isPremium && (
          <span className="rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] font-medium text-amber-400 border border-amber-400/20">
            High Value
          </span>
        )}
      </div>
      <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
      <div
        className={`rounded-xl border ${
          isPremium
            ? "border-amber-400/20 bg-amber-400/5"
            : "border-zinc-800 bg-black/60"
        } p-3 text-xs sm:rounded-2xl sm:p-4 sm:text-sm`}
      >
        <div className="space-y-1.5">
          <PricingRow label={priceLabel} value={pricePerAction} />
          <PricingRow label="Typical volume" value={volume} />
        </div>
        <p className="mt-2 text-[10px] text-zinc-500 sm:mt-1 sm:text-xs">
          {disclaimer}
        </p>
      </div>
    </div>
  );
}
