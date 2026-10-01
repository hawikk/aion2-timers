"use client";

import { RotateCcw } from "lucide-react";
import { DAILY_CHECKLIST, WEEKLY_CHECKLIST, type ChecklistItem } from "@/data/guide";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useNow } from "@/hooks/use-now";
import { useServerClock } from "@/hooks/use-server-clock";
import { resetWindow, seasonInfo } from "@/lib/schedule";
import { formatCountdown, formatDayTime } from "@/lib/time";

type Kind = "daily" | "weekly";

interface Stored {
  /** Epoch ms of the reset that started the period these ticks belong to. */
  period: number;
  done: string[];
}

function ChecklistCard({
  kind,
  title,
  items,
  now,
  timeZone,
  footnote,
}: {
  kind: Kind;
  title: string;
  items: ChecklistItem[];
  now: number;
  timeZone: string;
  footnote?: string;
}) {
  const [stored, setStored] = useLocalStorage<Stored>(`aion2:checklist:${kind}`, { period: 0, done: [] });
  const { last, next } = resetWindow(kind, now, timeZone);
  const done = stored.period === last ? stored.done : [];
  const pct = Math.round((done.length / items.length) * 100);

  function toggle(id: string, checked: boolean) {
    const base = stored.period === last ? stored.done : [];
    const nextDone = checked ? [...new Set([...base, id])] : base.filter((d) => d !== id);
    setStored({ period: last, done: nextDone });
  }

  return (
    <Card className="border-border/70 bg-card/70">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="font-display text-lg text-gold">{title}</CardTitle>
            <CardDescription>
              Resets in <span className="font-mono tabular-nums text-foreground">{formatCountdown(next - now)}</span>{" "}
              · {formatDayTime(next)} local
            </CardDescription>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setStored({ period: last, done: [] })}
            disabled={done.length === 0}
            aria-label={`Clear ${kind} checklist`}
          >
            <RotateCcw className="size-3.5" /> Clear
          </Button>
        </div>
        <div className="mt-2 flex items-center gap-3">
          <Progress value={pct} className="flex-1" />
          <span className="font-mono text-xs tabular-nums text-muted-foreground">
            {done.length}/{items.length}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-1">
          {items.map((item) => {
            const checked = done.includes(item.id);
            return (
              <li key={item.id}>
                <label className="flex cursor-pointer items-start gap-3 rounded-lg p-2 transition-colors hover:bg-accent/50">
                  <Checkbox
                    className="mt-0.5"
                    checked={checked}
                    onCheckedChange={(v) => toggle(item.id, v === true)}
                  />
                  <span className="flex flex-col">
                    <span className={checked ? "text-sm text-muted-foreground line-through" : "text-sm font-medium"}>
                      {item.label}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.detail}</span>
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
        {footnote ? <p className="mt-3 text-xs text-muted-foreground">{footnote}</p> : null}
      </CardContent>
    </Card>
  );
}

export function ChecklistPanel() {
  const now = useNow();
  const { clock } = useServerClock();

  if (now === null) {
    return (
      <div className="grid gap-4 lg:grid-cols-2">
        {[0, 1].map((i) => (
          <div key={i} className="h-96 animate-pulse rounded-xl border border-border/60 bg-card/50" />
        ))}
      </div>
    );
  }

  const season = seasonInfo(now, clock.timeZone);

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <ChecklistCard
        kind="daily"
        title="Daily checklist"
        items={DAILY_CHECKLIST}
        now={now}
        timeZone={clock.timeZone}
        footnote="Daily reset checked in game on 1 Oct 2026: 16:00 server time, 07:00 UTC."
      />
      <ChecklistCard
        kind="weekly"
        title="Weekly checklist"
        items={WEEKLY_CHECKLIST}
        now={now}
        timeZone={clock.timeZone}
        footnote={`This week's Ascension Trial: ${season.ascensionTrial}. Next week: ${season.nextAscensionTrial}.`}
      />
    </div>
  );
}
