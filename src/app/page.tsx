import { SourcesSection } from "@/components/sources-section";
import { TimersDashboard } from "@/components/timers/timers-dashboard";

export default function Home() {
  return (
    <>
      <TimersDashboard />
      <SourcesSection
        ids={[
          "aion2hub",
          "gamers4life",
          "wikilySeason",
          "wikilyBosses",
          "timesaverServers",
          "vortexDaily",
          "u4nDuty",
          "skycoachChecklist",
        ]}
      />
      <p className="mt-6 text-xs text-muted-foreground">
        Spotted a wrong time? Every spawn lives in <code className="rounded bg-muted px-1">src/data/schedule.ts</code> —
        edit the server time there and the dashboard updates.
      </p>
    </>
  );
}
