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
  meinmmoGear: {
    title: "Aion 2 Equipment Guide: How to Quickly Obtain the Best Gear in PvE",
    publisher: "MeinMMO",
    url: "https://mein-mmo.de/en/aion-2-equipment-guide-how-to-quickly-obtain-the-best-gear-in-pve,1586095/",
    usedFor: "EU item-level phases: 1,000, 1,300, 1,600, and arm rings as the stopgap before 1,600.",
  },
  aion2hubLeveling: {
    title: "Asmodian 40–45 and Krao Cave",
    publisher: "AION2 Hub",
    url: "https://aion2hub.com/leveling/asmodian-levels-40-45-krao",
    usedFor: "Global dungeon item levels: Krao and Draupnir 700, Urugugu 1,400, Fire Temple 2,100.",
  },
  vortexItemLevel: {
    title: "How to Increase Item Level and Essential Content",
    publisher: "Vortex Gaming",
    url: "https://vortexgaming.io/en/postdetail/605874",
    usedFor: "Video notes: Draupnir for armor, skip Krao for weapons, Transcendence for green Arcana.",
  },
  welpsRanger: {
    title: "Ranger PvE guide",
    publisher: "Welps",
    url: "https://youtu.be/wKOm6yKuu_I",
    usedFor:
      "Chaos-server Ranger at about 1,000,000 CP. PvE rotation, stigma order, skill levels, Daevanion, soul binds, Arcana, and pet rolls. He flags the Global accuracy cap, the fifth stigma slot, and the Daevanion layout as unchecked.",
  },
  wikilyRanger: {
    title: "Ranger",
    publisher: "Wikily (AION 2 wiki)",
    url: "https://wikily.gg/aion-2/classes/ranger",
    usedFor:
      "Names the specialty effects Welps counted by slot. Vaizel's Authority level 20 is the crit cooldown cut he treats as the power spike.",
  },
  wikilyDraupnir: {
    title: "Draupnir",
    publisher: "Wikily (AION 2 wiki)",
    url: "https://new.wikily.gg/aion-2/dungeons/draupnir",
    usedFor:
      "Both Draupnir modes are item level 700. The cube costs 40 Odyle. Conquest lists 10 cube rewards a week, Wednesday 16:00 server time. Updated 1 Oct 2026.",
  },
  wikilyDraupnirRewards: {
    title: "Draupnir Rewards",
    publisher: "Wikily (AION 2 wiki)",
    url: "https://new.wikily.gg/aion-2/dungeons/draupnir/rewards",
    usedFor:
      "Bakarma and Kinah are Odyle cube rewards. Pity pick after 3 Exploration cubes or 14 Conquest cubes. Conquest cube lists 70,000 Kinah.",
  },
  metabotCubes: {
    title: "AION 2 Endgame Guide: Daily and Weekly Checklist",
    publisher: "MetaBot.GG",
    url: "https://metabot.gg/en/aion-2/guides/endgame-guide",
    usedFor:
      "Client-tooltip writeup: leaving without the Odyle cube still spends a Conquest/Transcendence count. That page also lists later-season dungeons, so the leave rule is unchecked on EU.",
  },
  mmomLaunch: {
    title: "AION 2 Global Launch Guide",
    publisher: "MMOM",
    url: "https://www.mmom.com/aion-2-news/detail_aion-2-global-launch-guide.html",
    usedFor: "Duty Quest rewards (500 AP each), weapon to +10 first.",
  },
} satisfies Record<string, Source>;

export type SourceId = keyof typeof SOURCES;
