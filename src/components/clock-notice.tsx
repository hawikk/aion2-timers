"use client";

import Link from "next/link";
import { TriangleAlert } from "lucide-react";
import { ServerClockSelect } from "@/components/server-clock-select";
import { useServerClock } from "@/hooks/use-server-clock";

export function ClockNotice({ compact = false }: { compact?: boolean }) {
  const { clock } = useServerClock();
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-amber-400/25 bg-amber-400/[0.06] p-4 sm:flex-row sm:items-center">
      <TriangleAlert className="hidden size-5 shrink-0 text-amber-300 sm:block" />
      <div className="flex-1 text-sm">
        <p className="font-medium text-amber-200">The EU server clock isn&apos;t confirmed yet.</p>
        {compact ? (
          <p className="mt-0.5 text-muted-foreground">
            Checklists clear at the reset for the selected clock.{" "}
            <Link href="/" className="underline decoration-dotted underline-offset-2 hover:text-gold">
              How to verify it
            </Link>
          </p>
        ) : (
          <p className="mt-0.5 text-muted-foreground">
            {clock.description} To check: open{" "}
            <kbd className="rounded border border-border bg-muted px-1 text-xs">J</kbd> → Duty in game and compare its
            reset countdown with the <em>Daily reset</em> card. If they differ, switch the clock. Rifts, Watcher Kaira
            and hourly events land on the same times under UTC and UTC+9 either way.
          </p>
        )}
      </div>
      <ServerClockSelect className="w-full sm:w-auto" />
    </div>
  );
}
