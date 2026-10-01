/**
 * AION 2 (Global / EU) timed content — the single source of truth for the dashboard.
 *
 * All times are SERVER time ("HH:MM", 24h). The server clock itself is selectable in the
 * app because sources disagree (UTC+9 vs UTC); edit SERVER_CLOCKS / DEFAULT_SERVER_CLOCK_ID
 * once it is confirmed. To correct a spawn, edit the `recurrence` of the event below.
 */
import type { SourceId } from "./sources";

export type Weekday = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";

export type Category = "world-boss" | "rift" | "siege" | "event" | "reset";

/** confirmed = official / widely reported; datamined = from game files, sources agree; estimate = inferred or single-source. */
export type Confidence = "confirmed" | "datamined" | "estimate";

export type Recurrence =
  /** Repeats every `everyMinutes`, starting at `firstAt` each server day (e.g. every 180 min from 02:00). */
  | { type: "interval"; everyMinutes: number; firstAt: string }
  /** Fixed weekdays at a fixed server time. */
  | { type: "weekly"; days: Weekday[]; at: string };

export interface ScheduledEvent {
  id: string;
  name: string;
  category: Category;
  recurrence: Recurrence;
  /** How long the event counts as "happening now" after it starts. 0 = instant (resets). */
  durationMinutes: number;
  location?: string;
  description: string;
  confidence: Confidence;
  /** Shown next to the confidence badge — say exactly what is uncertain. */
  timingNote?: string;
  sources: SourceId[];
}

export interface ServerClock {
  id: string;
  label: string;
  /** IANA zone. Note the inverted sign on Etc/ zones: Etc/GMT-9 === UTC+9. */
  timeZone: string;
  description: string;
}

export const SERVER_CLOCKS: ServerClock[] = [
  {
    id: "global-utc9",
    label: "UTC+9 (Global client clock)",
    timeZone: "Etc/GMT-9",
    description:
      "AION2 Hub reports every Global region shares a GMT+9 clock. Fits the Season 1 start and a midnight-Pacific weekly reset.",
  },
  {
    id: "utc",
    label: "UTC",
    timeZone: "UTC",
    description: "Gamers4Life's Global timer runs the schedule on UTC.",
  },
  {
    id: "eu-berlin",
    label: "Europe/Berlin (CET/CEST)",
    timeZone: "Europe/Berlin",
    description: "EU servers are hosted in Frankfurt. Pick this if NC moves EU onto local time.",
  },
];

export const DEFAULT_SERVER_CLOCK_ID = "global-utc9";

export const RESETS = {
  daily: { at: "16:00" },
  weekly: { day: "Wed" as Weekday, at: "16:00" },
};

export const SEASON = {
  name: "Season 1",
  start: "2026-09-30 16:00",
  end: "2026-12-16 16:00",
  /** Ascension Trial alternates each weekly reset, starting with the first entry in the season's first week. */
  ascensionTrialRotation: ["Sanctum of Loathing", "Nightmare Altar"],
};

const EXECUTOR_DAYS: Weekday[] = ["Mon", "Thu", "Sat"];
const NAHMA_DAYS: Weekday[] = ["Sun", "Fri"];

export const EVENTS: ScheduledEvent[] = [
  {
    id: "daily-reset",
    name: "Daily reset",
    category: "reset",
    recurrence: { type: "interval", everyMinutes: 24 * 60, firstAt: RESETS.daily.at },
    durationMinutes: 0,
    description:
      "Duty Quests (5/day), urgent Supply Requests and daily entries refresh. Your daily checklist clears at this moment.",
    confidence: "estimate",
    timingNote:
      "Global daily reset hour isn't published. Assumed to match the weekly reset hour; KR/TW reset at 05:00. Compare with the Duty Quest timer (J) in game.",
    sources: ["wikilySeason", "vortexDaily", "u4nDuty"],
  },
  {
    id: "weekly-reset",
    name: "Weekly reset",
    category: "reset",
    recurrence: { type: "weekly", days: [RESETS.weekly.day], at: RESETS.weekly.at },
    durationMinutes: 0,
    description:
      "Daily Dungeon, Ascension Trial, raid entries, Orders, weekly shop limits and crafts reset. The open Ascension Trial swaps.",
    confidence: "datamined",
    timingNote: "Wednesday is widely reported; the 16:00 server hour comes from the Season 1 data.",
    sources: ["wikilySeason", "skycoachChecklist"],
  },
  {
    id: "spacetime-rift",
    name: "Spacetime Rift",
    category: "rift",
    recurrence: { type: "interval", everyMinutes: 180, firstAt: "02:00" },
    durationMinutes: 60,
    location: "Random spots in Verteron / Altgard",
    description:
      "Rifts open into the enemy faction's territory. Raid their camps and garrisons for Abyss Points; entry is capped, so arrive early.",
    confidence: "estimate",
    timingNote:
      "Global cadence every 3h from 02:00 (single source; KR/TW differs). Lands on the same real time under UTC or UTC+9. Open window (~1h) is estimated.",
    sources: ["gamers4life", "vortexDaily"],
  },
  {
    id: "watcher-kaira",
    name: "Watcher Kaira",
    category: "world-boss",
    recurrence: { type: "interval", everyMinutes: 180, firstAt: "01:00" },
    durationMinutes: 20,
    location: "Chaotic Lower Reshanta (Abyss)",
    description:
      "Level 65 Reshanta world boss on a short respawn — the easiest Abyss boss to catch. Abyss Points and a shot at gold gear.",
    confidence: "datamined",
    timingNote: "Global: every 3h from 01:00 (KR/TW: every 4h). Same real time under UTC or UTC+9.",
    sources: ["aion2hub", "gamers4life"],
  },
  {
    id: "artifact-siege",
    name: "Artifact Siege",
    category: "siege",
    recurrence: { type: "weekly", days: EXECUTOR_DAYS, at: "21:00" },
    durationMinutes: 60,
    location: "Reshanta (Abyss)",
    description:
      "Faction-vs-faction fight over Abyss artifacts. Big Abyss Point payout; Command Quests in the Abyss stack with it.",
    confidence: "estimate",
    timingNote: "Single source (Gamers4Life). Duration estimated.",
    sources: ["gamers4life", "redditGear"],
  },
  {
    id: "executors",
    name: "Executors Argo, Kaira & Tamasa",
    category: "world-boss",
    recurrence: { type: "weekly", days: EXECUTOR_DAYS, at: "21:30" },
    durationMinutes: 30,
    location: "Chaotic Lower Reshanta (Abyss)",
    description:
      "Three level 65 executor bosses spawn together, right after the siege. Expect heavy PvP around them; bring your legion.",
    confidence: "datamined",
    timingNote: "Both datamines agree on Mon/Thu/Sat 21:30 server. Server clock unconfirmed.",
    sources: ["aion2hub", "gamers4life"],
  },
  {
    id: "middle-reshanta-bosses",
    name: "Dramos, Marakha & Ducal",
    category: "world-boss",
    recurrence: { type: "weekly", days: EXECUTOR_DAYS, at: "21:30" },
    durationMinutes: 30,
    location: "Chaotic Middle Reshanta (Abyss)",
    description:
      "Executioner Dramos, Ravager Marakha and Turncoat Ducal. Middle Reshanta may not be open on Global yet.",
    confidence: "estimate",
    timingNote: "Gamers4Life lists these for Global; AION2 Hub says KR/TW only. May not exist on EU.",
    sources: ["gamers4life", "aion2hub"],
  },
  {
    id: "guardian-lord-nahma",
    name: "Guardian Lord Nahma (Abyss Siege Boss)",
    category: "world-boss",
    recurrence: { type: "weekly", days: NAHMA_DAYS, at: "21:00" },
    durationMinutes: 30,
    location: "Reshanta (Abyss)",
    description:
      "The Sunday/Friday Abyss siege boss. Level 65; one of the 7 scheduled field bosses in the Global client.",
    confidence: "datamined",
    timingNote: "Both datamines agree on Sun/Fri 21:00 server. Server clock unconfirmed.",
    sources: ["aion2hub", "gamers4life", "wikilyBosses"],
  },
  {
    id: "shugo-festival",
    name: "Shugo Festival",
    category: "event",
    recurrence: { type: "interval", everyMinutes: 60, firstAt: "00:00" },
    durationMinutes: 10,
    description:
      "Hourly Shugo mini-games (Jump Jump, Nyerk Shooter, Goldrin's Treasure…). Spend Shugo Festival keys before they cap.",
    confidence: "estimate",
    timingNote: "Hourly at :00 per Gamers4Life (Global). Window length estimated.",
    sources: ["gamers4life", "skycoachChecklist"],
  },
  {
    id: "dimensional-invasion",
    name: "Dimensional Invasion",
    category: "event",
    recurrence: { type: "interval", everyMinutes: 60, firstAt: "00:30" },
    durationMinutes: 15,
    description: "Hourly open-world invasion event. Quick rewards if you're nearby; not worth travelling for at 45.",
    confidence: "estimate",
    timingNote: "Hourly at :30 per Gamers4Life (Global). Window length estimated.",
    sources: ["gamers4life"],
  },
];

export const CATEGORY_LABELS: Record<Category, string> = {
  "world-boss": "World bosses",
  rift: "Rifts",
  siege: "Siege / PvP",
  event: "Events",
  reset: "Resets",
};

export const CATEGORIES = Object.keys(CATEGORY_LABELS) as Category[];
