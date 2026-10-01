"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Hourglass, ScrollText, Timer } from "lucide-react";
import { ServerClockSelect } from "@/components/server-clock-select";
import { useNow } from "@/hooks/use-now";
import { useServerClock } from "@/hooks/use-server-clock";
import { formatTime, shortZoneName } from "@/lib/time";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/", label: "Timers", icon: Timer },
  { href: "/guide", label: "Level 45 guide", icon: ScrollText },
];

function Clock({ label, value, zone }: { label: string; value: string; zone: string }) {
  return (
    <div className="flex flex-col leading-tight">
      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        {label} <span className="normal-case tracking-normal">· {zone}</span>
      </span>
      <span className="font-mono text-sm tabular-nums text-foreground">{value}</span>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const now = useNow();
  const { clock } = useServerClock();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-gold/90 to-asmo/70 text-primary-foreground shadow-lg shadow-gold/10">
            <Hourglass className="size-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-wide text-gold">Atreia Timers</span>
            <span className="text-[11px] text-muted-foreground">AION 2 · EU / Global</span>
          </span>
        </Link>

        <nav className="order-3 flex w-full gap-1 sm:order-none sm:w-auto">
          {NAV.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors sm:flex-none",
                  active
                    ? "bg-primary/15 text-gold ring-1 ring-gold/30"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground",
                )}
              >
                <Icon className="size-4" />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          {now === null ? (
            <div className="h-8 w-40 animate-pulse rounded-md bg-muted" />
          ) : (
            <>
              <Clock label="Local" value={formatTime(now, undefined, true)} zone={shortZoneName(now)} />
              <Clock
                label="Server"
                value={formatTime(now, clock.timeZone, true)}
                zone={shortZoneName(now, clock.timeZone)}
              />
            </>
          )}
          <ServerClockSelect className="hidden md:flex" />
        </div>
      </div>
    </header>
  );
}
