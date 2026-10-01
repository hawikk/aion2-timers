export interface Source {
  title: string;
  publisher: string;
  url: string;
  usedFor: string;
}

export const SOURCES = {
  aion2hub: {
    title: "AION 2 World Boss Timer & Spawn Schedule",
    publisher: "AION2 Hub",
    url: "https://aion2hub.com/tools/world-bosses",
    usedFor:
      "Global-client world boss cadence (Launch Scale Test datamine, 19 Sep 2026); claims Global server clock is GMT+9.",
  },
  gamers4life: {
    title: "AION 2 Event Timer — Rifts, World Bosses & Live Events",
    publisher: "Gamers4Life",
    url: "https://gamers4.life/aion-2/database/en/events/",
    usedFor:
      "Global rift / hourly event / siege cadence; claims Global server clock is UTC.",
  },
  wikilySeason: {
    title: "Season 1",
    publisher: "Wikily (AION 2 wiki)",
    url: "https://new.wikily.gg/aion-2/season-1",
    usedFor: "Weekly reset (Wed 16:00 server), Season 1 dates, Ascension Trial rotation.",
  },
  wikilyBosses: {
    title: "Field Bosses",
    publisher: "Wikily (AION 2 wiki)",
    url: "https://new.wikily.gg/aion-2/bosses",
    usedFor: "Boss list: 56 field bosses, 7 on a fixed schedule; open-world bosses are location-based.",
  },
  timesaverServers: {
    title: "AION 2 Server List: Every Region, All Servers",
    publisher: "timesaver.gg",
    url: "https://timesaver.gg/blog/aion-2-server-list",
    usedFor: "Official launch times (13:00 UTC) and EU server pairings.",
  },
  meinmmoServers: {
    title: "Aion 2 Server für Europa",
    publisher: "MeinMMO",
    url: "https://mein-mmo.de/aion-2-server-europa/",
    usedFor: "EU server list (4 Elyos + 4 Asmodian) and cross-server features.",
  },
  vortexDaily: {
    title: "Aion 2 Newbie Must-Read! Daily & Weekly Task Summary",
    publisher: "Vortex Gaming",
    url: "https://vortexgaming.io/en/postdetail/650135",
    usedFor: "Daily/weekly task list and KR reset hour (05:00) — KR-derived.",
  },
  u4nDuty: {
    title: "Aion 2 Duty Quest Completion Reset",
    publisher: "U4N",
    url: "https://www.u4n.com/news/aion-2-duty-quest-completion-reset.html",
    usedFor: "Duty Quests: 5 per day, check the in-game timer for your reset.",
  },
  slashingcreeps: {
    title: "Endgame Aion 2 Guide",
    publisher: "SlashingCreeps",
    url: "https://www.slashingcreeps.com/en/aion-2/guide-endgame/",
    usedFor: "Endgame activity list with entry limits and recommended CP (KR/TW-based).",
  },
  cogmGear: {
    title: "Aion 2 gear",
    publisher: "CoGM",
    url: "https://cogm.app/aion2/guides/gear",
    usedFor: "Belt/amulet, enhancement caps (+15/+20 with amp), gear transfer rules.",
  },
  cogmLeveling: {
    title: "Aion 2 leveling guide (1-45)",
    publisher: "CoGM",
    url: "https://cogm.app/aion2/leveling",
    usedFor: "Global level cap 45, Abyss Point sources, Daevanion boards.",
  },
  redditGear: {
    title: "Linear and efficient gear progression after hitting level 45",
    publisher: "r/Aion2",
    url: "https://www.reddit.com/r/Aion2/comments/1pcrjak/aion_2_linear_and_efficient_way_for_gear/",
    usedFor: "Post-45 progression order: Sealed Dungeons, Empyrean Traces, Conquest, Transcendence.",
  },
  mmoexpWeek1: {
    title: "Aion 2 Week 1 Guide: Daily Routine, Weekly Checklist and Reset Strategy",
    publisher: "MMOExp",
    url: "https://www.mmoexp.com/News/aion-2-october-5-week-1-guide-best-daily-routine-weekly-checklist-and-reset-strategy.html",
    usedFor: "Week-one plan, Ascension Trial 3/week, Daily Dungeon 14 entries per week.",
  },
  skycoachChecklist: {
    title: "AION 2 Daily and Weekly Checklist Guide",
    publisher: "Skycoach",
    url: "https://skycoach.gg/blog/aion-2/articles/checklist-guide",
    usedFor: "14 Daily Dungeon entries per week, and subscriber Wind Breeze shop stock (extra tickets).",
  },
  mmomLaunch: {
    title: "AION 2 Global Launch Guide",
    publisher: "MMOM",
    url: "https://www.mmom.com/aion-2-news/detail_aion-2-global-launch-guide.html",
    usedFor: "Duty Quest rewards (500 AP each), weapon to +10 first.",
  },
} satisfies Record<string, Source>;

export type SourceId = keyof typeof SOURCES;
