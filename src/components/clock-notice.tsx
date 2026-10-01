"use client";

import { BadgeCheck } from "lucide-react";
import { ServerClockSelect } from "@/components/server-clock-select";
import { useServerClock } from "@/hooks/use-server-clock";

export function ClockNotice({ compact = false }: { compact?: boolean }) {
  const { clock } = useServerClock();
  const checked = clock.id === "global-utc9";
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-live/30 bg-live/[0.06] p-4 sm:flex-row sm:items-center">
      <BadgeCheck className="hidden size-5 shrink-0 text-live sm:block" />
      <div className="flex-1 text-sm">
        <p className="font-medium text-live">
          {checked ? "Daily reset matches this server clock." : "This is not the clock checked in game."}
        </p>
        {compact ? (
          <p className="mt-0.5 text-muted-foreground">
            Checklists clear at the daily reset for the selected clock. UTC+9 was checked against the Duty timer on 1
            Oct 2026.
          </p>
        ) : (
          <p className="mt-0.5 text-muted-foreground">
            {clock.description}{" "}
            {checked
              ? "Weekday bosses use the same clock. The other options are there if a later patch moves the reset."
              : "The Duty timer on 1 Oct 2026 matched UTC+9, not this one."}
          </p>
        )}
      </div>
      <ServerClockSelect className="w-full sm:w-auto" />
    </div>
  );
}
