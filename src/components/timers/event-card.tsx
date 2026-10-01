import { MapPin } from "lucide-react";
import { CATEGORY_LABELS } from "@/data/schedule";
import { ConfidenceBadge } from "@/components/confidence-badge";
import { SourceLinks } from "@/components/sources-section";
import { CATEGORY_META } from "@/components/timers/category-meta";
import { describeRecurrence, type EventStatus } from "@/lib/schedule";
import { MINUTE, formatCountdown, formatDayTime } from "@/lib/time";
import { cn } from "@/lib/utils";

const SOON_MS = 15 * MINUTE;

export function EventCard({
  status,
  now,
  serverTimeZone,
  serverLabel,
}: {
  status: EventStatus;
  now: number;
  serverTimeZone: string;
  serverLabel: string;
}) {
  const { event, activeUntil, nextStart } = status;
  const meta = CATEGORY_META[event.category];
  const Icon = meta.icon;
  const live = activeUntil !== null;
  const soon = !live && nextStart - now <= SOON_MS;

  return (
    <article
      className={cn(
        "group relative flex flex-col gap-3 overflow-hidden rounded-xl border bg-card/70 p-4 pl-5 backdrop-blur transition-colors sm:flex-row sm:items-center sm:gap-6",
        live ? "border-live/50 shadow-[0_0_30px_-12px] shadow-live/60" : soon ? "border-amber-400/40" : "border-border/70",
      )}
    >
      <span className={cn("absolute inset-y-0 left-0 w-1", meta.accent)} aria-hidden />

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <Icon className={cn("size-4 shrink-0", meta.text)} />
          <h3 className="text-base font-semibold text-foreground">{event.name}</h3>
          <span className={cn("text-xs font-medium", meta.text)}>{CATEGORY_LABELS[event.category]}</span>
        </div>
        {event.location ? (
          <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="size-3" /> {event.location}
          </p>
        ) : null}
        <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
        <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <ConfidenceBadge confidence={event.confidence} note={event.timingNote} />
          <span className="text-xs text-muted-foreground">
            {describeRecurrence(event.recurrence)} <span className="opacity-70">server</span>
          </span>
          <SourceLinks ids={event.sources} />
        </div>
      </div>

      <div className="flex shrink-0 flex-row items-end justify-between gap-4 border-t border-border/50 pt-3 sm:w-52 sm:flex-col sm:items-end sm:border-0 sm:pt-0">
        {live ? (
          <div className="text-left sm:text-right">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-live/15 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-live">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-live opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-live" />
              </span>
              Happening now
            </span>
            <p className="mt-1 font-mono text-sm tabular-nums text-muted-foreground">
              ends in {formatCountdown(activeUntil - now)}
            </p>
          </div>
        ) : (
          <div className="text-left sm:text-right">
            <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              {soon ? <span className="text-amber-300">Starting soon</span> : "Next in"}
            </p>
            <p
              className={cn(
                "font-mono text-2xl font-semibold tabular-nums",
                soon ? "text-amber-200" : "text-foreground",
              )}
            >
              {formatCountdown(nextStart - now)}
            </p>
          </div>
        )}
        <dl className="grid grid-cols-[auto_auto] gap-x-2 text-right text-xs">
          <dt className="text-muted-foreground">{live ? "Next" : "Local"}</dt>
          <dd className="font-mono tabular-nums text-foreground">{formatDayTime(nextStart)}</dd>
          <dt className="text-muted-foreground">{serverLabel}</dt>
          <dd className="font-mono tabular-nums text-muted-foreground">{formatDayTime(nextStart, serverTimeZone)}</dd>
        </dl>
      </div>
    </article>
  );
}

export function EventCardSkeleton() {
  return (
    <div className="flex h-32 animate-pulse flex-col gap-3 rounded-xl border border-border/60 bg-card/50 p-4">
      <div className="h-4 w-48 rounded bg-muted" />
      <div className="h-3 w-full max-w-md rounded bg-muted/70" />
      <div className="h-3 w-64 rounded bg-muted/70" />
    </div>
  );
}
