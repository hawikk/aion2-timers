import { ExternalLink } from "lucide-react";
import { SOURCES, type SourceId } from "@/data/sources";

export function SourcesSection({ ids, intro }: { ids?: SourceId[]; intro?: string }) {
  const list = (ids ?? (Object.keys(SOURCES) as SourceId[])).map((id) => ({ id, ...SOURCES[id] }));
  return (
    <section id="sources" className="mt-14 scroll-mt-24">
      <h2 className="font-display text-xl font-bold text-gold">Sources</h2>
      <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
        {intro ??
          "NC hasn't published an official Global event schedule yet, so timings come from community datamines of the Global client and early-access reports (researched 1 Oct 2026). Anything not marked Confirmed should be double-checked in game."}
      </p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {list.map((s) => (
          <li key={s.id} className="rounded-lg border border-border/60 bg-card/50 p-3">
            <a
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-start gap-1.5 text-sm font-medium text-foreground hover:text-gold"
            >
              {s.publisher} — {s.title}
              <ExternalLink className="mt-0.5 size-3.5 shrink-0 opacity-60 group-hover:opacity-100" />
            </a>
            <p className="mt-1 text-xs text-muted-foreground">{s.usedFor}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SourceLinks({ ids }: { ids: SourceId[] }) {
  return (
    <span className="inline-flex flex-wrap gap-x-2 gap-y-0.5">
      {ids.map((id) => (
        <a
          key={id}
          href={SOURCES[id].url}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-muted-foreground underline decoration-dotted underline-offset-2 hover:text-gold"
        >
          {SOURCES[id].publisher}
        </a>
      ))}
    </span>
  );
}
