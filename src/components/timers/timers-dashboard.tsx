"use client";

import { useMemo } from "react";
import { CalendarClock, Crown, RotateCcw } from "lucide-react";
import { CATEGORIES, CATEGORY_LABELS, type Category } from "@/data/schedule";
import { ClockNotice } from "@/components/clock-notice";
import { CATEGORY_META } from "@/components/timers/category-meta";
import { EventCard, EventCardSkeleton } from "@/components/timers/event-card";
import { NotificationControl } from "@/components/timers/notification-control";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useEventNotifications } from "@/hooks/use-event-notifications";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useNow } from "@/hooks/use-now";
import { useServerClock } from "@/hooks/use-server-clock";
import { getAllStatuses, resetWindow, seasonInfo, type EventStatus } from "@/lib/schedule";
import { formatCountdown, formatDate, formatDayTime, shortZoneName } from "@/lib/time";
import { cn } from "@/lib/utils";

function StatTile({
  icon: Icon,
  label,
  value,
  sub,
  text = false,
}: {
  icon: typeof RotateCcw;
  label: string;
  value: string;
  sub: string;
  text?: boolean;
}) {
  return (
    <div className="rounded-xl border border-border/60 bg-card/60 p-4">
      <p className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        <Icon className="size-3.5 text-gold" /> {label}
      </p>
      <p className={cn("mt-1 font-semibold", text ? "font-display text-lg leading-snug text-gold" : "font-mono text-xl tabular-nums")}>
        {value}
      </p>
      <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>
    </div>
  );
}

function NextUpHero({ status, now, serverTz }: { status: EventStatus; now: number; serverTz: string }) {
  const { event, activeUntil, activeSince, nextStart } = status;
  const meta = CATEGORY_META[event.category];
  const Icon = meta.icon;
  const live = activeUntil !== null;
  const shownStart = activeSince ?? nextStart;
  return (
    <section className="relative overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-br from-card via-card/80 to-asmo/10 p-6 sm:p-8">
      <div
        className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
        {live ? "Happening now" : "Next up"}
      </p>
      <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="flex items-center gap-3 font-display text-2xl font-bold sm:text-4xl">
            <Icon className={cn("size-7 shrink-0 sm:size-9", meta.text)} />
            {event.name}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {event.location ?? CATEGORY_LABELS[event.category]} · {live ? "started " : ""}
            {formatDayTime(shownStart)} local · {formatDayTime(shownStart, serverTz)} server
          </p>
        </div>
        <div className="sm:text-right">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
            {live ? "Ends in" : "Starts in"}
          </p>
          <p className={cn("font-mono text-4xl font-bold tabular-nums sm:text-5xl", live ? "text-live" : "text-gold")}>
            {formatCountdown((live ? activeUntil : nextStart) - now)}
          </p>
        </div>
      </div>
    </section>
  );
}

export function TimersDashboard() {
  const now = useNow();
  const { clock } = useServerClock();
  const [selected, setSelected, hydrated] = useLocalStorage<Category[]>("aion2:categories", CATEGORIES);

  const statuses = useMemo(() => (now === null ? [] : getAllStatuses(now, clock.timeZone)), [now, clock.timeZone]);
  const visible = useMemo(() => statuses.filter((s) => selected.includes(s.event.category)), [statuses, selected]);
  useEventNotifications(visible, now);

  if (now === null || !hydrated) {
    return (
      <div className="flex flex-col gap-4">
        <div className="h-40 animate-pulse rounded-2xl border border-border/60 bg-card/50" />
        {Array.from({ length: 4 }, (_, i) => (
          <EventCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  const daily = resetWindow("daily", now, clock.timeZone);
  const weekly = resetWindow("weekly", now, clock.timeZone);
  const season = seasonInfo(now, clock.timeZone);
  const hero = visible.find((s) => s.event.category !== "reset") ?? visible[0];
  const serverLabel = `Server (${shortZoneName(now, clock.timeZone)})`;

  return (
    <div className="flex flex-col gap-6">
      {hero ? <NextUpHero status={hero} now={now} serverTz={clock.timeZone} /> : null}

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatTile
          icon={RotateCcw}
          label="Daily reset"
          value={formatCountdown(daily.next - now)}
          sub={`${formatDayTime(daily.next)} local`}
        />
        <StatTile
          icon={CalendarClock}
          label="Weekly reset"
          value={formatCountdown(weekly.next - now)}
          sub={`${formatDayTime(weekly.next)} local`}
        />
        <StatTile
          icon={Crown}
          label="Ascension Trial"
          value={season.ascensionTrial}
          text
          sub={`Next week: ${season.nextAscensionTrial}`}
        />
        <StatTile
          icon={CalendarClock}
          label={`${season.name} · week ${season.week}`}
          value={formatCountdown(season.end - now)}
          sub={`Ends ${formatDate(season.end)}`}
        />
      </div>

      <ClockNotice />

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <ToggleGroup
          multiple
          value={selected}
          onValueChange={(v) => setSelected(v as Category[])}
          variant="outline"
          size="sm"
          className="flex-wrap"
          aria-label="Filter by category"
        >
          {CATEGORIES.map((c) => {
            const Icon = CATEGORY_META[c].icon;
            return (
              <ToggleGroupItem key={c} value={c} className="gap-1.5 data-pressed:border-gold/40 data-pressed:text-gold">
                <Icon className="size-3.5" />
                {CATEGORY_LABELS[c]}
              </ToggleGroupItem>
            );
          })}
        </ToggleGroup>
        <NotificationControl />
      </div>

      {visible.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border p-10 text-center">
          <p className="font-medium">No categories selected.</p>
          <p className="mt-1 text-sm text-muted-foreground">Pick at least one filter to see upcoming events.</p>
          <Button className="mt-4" size="sm" onClick={() => setSelected(CATEGORIES)}>
            Show everything
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {visible.map((s) => (
            <EventCard
              key={s.event.id}
              status={s}
              now={now}
              serverTimeZone={clock.timeZone}
              serverLabel={serverLabel}
            />
          ))}
        </div>
      )}
    </div>
  );
}
