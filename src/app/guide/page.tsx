import type { Metadata } from "next";
import { Coins, Gem, ListChecks, Swords, TrendingUp } from "lucide-react";
import { ClockNotice } from "@/components/clock-notice";
import { ConfidenceBadge } from "@/components/confidence-badge";
import { ChecklistPanel } from "@/components/guide/checklist-panel";
import { SourcesSection } from "@/components/sources-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ACTIVITIES,
  CURRENCIES,
  ENHANCE_RULES,
  FIRST_STEPS,
  GEAR_PATH,
  GS_STEPS,
  GS_TARGETS,
  GUIDE_SOURCES,
} from "@/data/guide";

export const metadata: Metadata = {
  title: "Level 45 endgame guide — Atreia Timers",
  description: "What to chase at AION 2 level 45: gear path, currencies, activities and a daily/weekly checklist.",
};

function SectionTitle({ icon: Icon, children }: { icon: typeof Swords; children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-2 font-display text-xl font-bold text-gold">
      <Icon className="size-5" />
      {children}
    </h2>
  );
}

export default function GuidePage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="relative overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-br from-card via-card/80 to-elyos/10 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">Endgame · Global cap</p>
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">You hit level 45. Now what?</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
          At 45 your level stops mattering and <strong className="text-foreground">item level</strong> gates the
          dungeons. 1,400 is the next real gate on the Global test client. 1,600 is what groups ask for. The weekly
          reset is Wednesday 07:00 UTC, so raise the score before you spend the weekly entries.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <SectionTitle icon={TrendingUp}>Get to 1,400, then 1,600</SectionTitle>
        <p className="-mt-2 max-w-3xl text-sm text-muted-foreground">
          Forums, MeinMMO, and the Global launch videos agree on the order: your map, the enemy map through a rift,
          then the dungeon that fills the empty slot. They disagree on the exact number on the door. KR Season 3 sets
          (level 84 Fire Temple, Naukum) are not the Global Season 1 path.
        </p>
        <div className="grid gap-3 lg:grid-cols-2">
          {GS_TARGETS.map((target) => (
            <div key={target.score} className="rounded-xl border border-gold/25 bg-card/70 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-display text-2xl font-bold text-gold">{target.score}</p>
                <ConfidenceBadge confidence={target.confidence} />
              </div>
              <h3 className="mt-1 font-semibold">{target.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{target.body}</p>
            </div>
          ))}
        </div>
        <ol className="grid gap-3 md:grid-cols-2">
          {GS_STEPS.map((step, i) => (
            <li key={step.title} className="rounded-xl border border-border/70 bg-card/60 p-4">
              <span className="font-display text-2xl font-bold text-gold/70">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-1 font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-4">
        <SectionTitle icon={ListChecks}>Daily &amp; weekly checklist</SectionTitle>
        <ClockNotice compact />
        <ChecklistPanel />
      </section>

      <section className="flex flex-col gap-4">
        <SectionTitle icon={TrendingUp}>Your first session at 45</SectionTitle>
        <ol className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {FIRST_STEPS.map((step, i) => (
            <li key={step.title} className="rounded-xl border border-border/70 bg-card/60 p-4">
              <span className="font-display text-2xl font-bold text-gold/70">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-1 font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-4 lg:grid-cols-5">
        <Card className="border-border/70 bg-card/60 lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display text-gold">
              <Swords className="size-5" /> Gear path
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="relative flex flex-col gap-4 border-l border-gold/30 pl-5">
              {GEAR_PATH.map((g) => (
                <li key={g.stage} className="relative">
                  <span className="absolute -left-[26px] top-1.5 size-2.5 rounded-full bg-gold ring-4 ring-background" />
                  <p className="font-medium">
                    {g.stage} <span className="text-sm font-normal text-elyos">· {g.source}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">{g.note}</p>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
        <Card className="border-border/70 bg-card/60 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display text-gold">
              <Gem className="size-5" /> Enhancement rules
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex list-disc flex-col gap-2 pl-4 text-sm text-muted-foreground marker:text-gold">
              {ENHANCE_RULES.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-col gap-4">
        <SectionTitle icon={Swords}>Content at 45</SectionTitle>
        <p className="-mt-2 text-sm text-muted-foreground">
          Entry limits mostly come from KR/TW guides; Global may differ, so check the in-game counter.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border/70 bg-card/60">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="border-b border-border/70 text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="p-3 font-medium">Activity</th>
                <th className="p-3 font-medium">Format</th>
                <th className="p-3 font-medium">Limit</th>
                <th className="p-3 font-medium">Main reward</th>
                <th className="p-3 font-medium">Certainty</th>
              </tr>
            </thead>
            <tbody>
              {ACTIVITIES.map((a) => (
                <tr key={a.name} className="border-b border-border/40 last:border-0">
                  <td className="p-3 font-medium">{a.name}</td>
                  <td className="p-3 text-muted-foreground">{a.format}</td>
                  <td className="p-3 font-mono text-xs tabular-nums">{a.limit}</td>
                  <td className="p-3 text-muted-foreground">{a.reward}</td>
                  <td className="p-3">
                    <ConfidenceBadge confidence={a.confidence} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <SectionTitle icon={Coins}>Currencies worth tracking</SectionTitle>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CURRENCIES.map((c) => (
            <div key={c.name} className="rounded-xl border border-border/70 bg-card/60 p-4">
              <p className="font-semibold text-foreground">{c.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                <span className="text-elyos">Spend on:</span> {c.use}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                <span className="text-asmo">Earn from:</span> {c.from}
              </p>
            </div>
          ))}
        </div>
      </section>

      <SourcesSection
        ids={GUIDE_SOURCES}
        intro="Compiled from Global-focused guides and KR/TW player guides (Global launched 30 Sep 2026, so some numbers are carried over from Asia). Entries marked Estimate may change on EU servers."
      />
    </div>
  );
}
