import type { Confidence } from "./schedule";
import type { SourceId } from "./sources";

export interface ChecklistItem {
  id: string;
  label: string;
  detail: string;
}

export const DAILY_CHECKLIST: ChecklistItem[] = [
  {
    id: "duty-quests",
    label: "5 Duty Quests",
    detail: "J → Duty. Refresh with Kinah for crystal rewards in slot 1. 500 Abyss Points each.",
  },
  {
    id: "supply-urgent",
    label: "Urgent Supply Requests",
    detail: "Alt+O → Supply Request. Turn in spare drops for Abyss Points if the Kinah cost is fair.",
  },
  {
    id: "nightmare",
    label: "Nightmare runs",
    detail: "Solo boss fights for Dream Fragments. Tickets regenerate — don't sit at cap.",
  },
  {
    id: "conquest",
    label: "Expedition / Conquest",
    detail: "4-player gear dungeons. Farm Draupnir for the Bakarma armor set early on.",
  },
  {
    id: "transcendence",
    label: "Transcendence",
    detail: "Timed 4-player grand dungeon for Arcana cards — a big gear score jump.",
  },
  {
    id: "odyle",
    label: "Spend Odyle Energy",
    detail: "Opens Expedition / Transcendence reward chests. It regenerates, so a full bar is wasted energy.",
  },
  {
    id: "shugo-keys",
    label: "Use Shugo Festival keys",
    detail: "Hourly mini-games at :00. Keys regenerate; the Shugo shop sells Wisdom Stones.",
  },
];

export const WEEKLY_CHECKLIST: ChecklistItem[] = [
  {
    id: "daily-dungeon",
    label: "Daily Dungeon ×7",
    detail: "Despite the name it's 7 runs per week. Kill the mini boss for a higher score — more enhancement stones.",
  },
  {
    id: "ascension-trial",
    label: "Ascension Trial ×3",
    detail: "Timed solo dungeon; this week's trial is shown above. Run it late in the week when you're strongest.",
  },
  {
    id: "orders",
    label: "Buy & finish Orders",
    detail: "12 Verteron/Altgard Orders + 5 Abyss Orders per grade at the Order Merchant. 500 AP per site.",
  },
  {
    id: "weekly-shop",
    label: "Weekly shop purchases",
    detail: "Odyle Energy, Resurrection Spirit Stones, Bioresearch Base tickets.",
  },
  {
    id: "substance-morph",
    label: "Weekly Substance Morph crafts",
    detail: "Craft Odyle Energy and potential stones before the reset wipes the weekly limits.",
  },
  {
    id: "supply-weekly",
    label: "Weekly Supply Requests",
    detail: "Bigger Abyss Point turn-ins than the daily ones.",
  },
  {
    id: "abyss-bosses",
    label: "Reshanta bosses & Artifact Siege",
    detail: "Executors (Mon/Thu/Sat) and Guardian Lord Nahma (Sun/Fri) — see the Timers page.",
  },
  {
    id: "battlefield",
    label: "Battlefield win rewards",
    detail: "Claim the weekly PvP victory rewards (Arena 1v1, Battlefield 4v4).",
  },
  {
    id: "raid",
    label: "Raid / Sanctuary entries",
    detail: "4-player raid for amplification stone fragments; Sanctuary (CP 2700+) for heroic gear.",
  },
];

export const FIRST_STEPS: { title: string; body: string }[] = [
  {
    title: "Finish the level 45 story beat",
    body: "The main story hands you a belt and an amulet at 45 — equip them right away. Belts use Noble Belt Enhance Scrolls from strongholds; amulets use Fierce Battle Amulet scrolls from feather turn-ins.",
  },
  {
    title: "Clear every Sealed Dungeon",
    body: "One-time clears in Verteron/Altgard give Daevanion points and enhancement stones, plus the gold title “Through hell and back”.",
  },
  {
    title: "Collect Empyrean Trace feathers",
    body: "Feathers level your Empyrean Trace and turn into amulet enhance scrolls. Extra feathers can be exchanged at the regional Saint.",
  },
  {
    title: "Weapon to +10 first",
    body: "Pour early enhancement stones into your weapon, then the rest of your gear to +5–10. Rushing campaign + side quests and +5 gear lands around item level 1100–1300.",
  },
  {
    title: "Start the daily loop",
    body: "Duty Quests, Conquest and Transcendence are your gear and Abyss Point engine. Keep Odyle Energy below cap.",
  },
];

export const GEAR_PATH: { stage: string; source: string; note: string }[] = [
  { stage: "Story belt & amulet", source: "Main story at 45", note: "Enhance with stronghold / feather scrolls, then substance-morph upward after +10." },
  { stage: "Bakarma armor", source: "Expedition (Conquest) — Draupnir", note: "On par with early Abyss gear for PvE; no PvP stats." },
  { stage: "Arcana cards", source: "Transcendence", note: "Large gear score boost; levels skills too." },
  { stage: "Abyss gear", source: "Abyss Points shop", note: "PvP stats. Points come from Duty Quests, Orders, Supply Requests and Reshanta." },
  { stage: "Heroic gear", source: "Sanctuary (CP 2700+)", note: "2 entries per week on KR/TW." },
];

export const ENHANCE_RULES: string[] = [
  "Yellow (Unique) gear caps at +15, then 5 amplification levels.",
  "Orange (Heroic) gear caps at +20, then 5 amplification levels — amp unlocks the orange stats.",
  "Success rate soft-resets to 60% going from +15 to +16.",
  "Moving +15 yellow into orange lands at +20 amp 0: enhancement transfers, amp, manastones, theostones and potential don't.",
];

export const CURRENCIES: { name: string; use: string; from: string }[] = [
  { name: "Kinah", use: "Enhancing, Duty refreshes, Orders, market", from: "Conquest clears, Ascension Trial, selling drops" },
  { name: "Abyss Points", use: "Abyss (PvP) gear, Stigma shards", from: "Duty Quests, Orders, Supply Requests, Reshanta kills & bosses, rifts" },
  { name: "Enhancement stones", use: "+1 to +15/+20 on gear", from: "Daily Dungeon, Duty Quests, Sealed Dungeons" },
  { name: "Amplification stones", use: "Amp levels after max enhance", from: "Raid fragments" },
  { name: "Dream Fragments", use: "Nightmare shop: breakthrough scrolls, crystals, Wisdom Stones", from: "Nightmare" },
  { name: "Odyle Energy", use: "Opens Expedition / Transcendence chests", from: "Regenerates over time, weekly shop, crafting" },
  { name: "Ariel fragments", use: "Ariel (PvE) Daevanion board", from: "Ascension Trial, raid" },
  { name: "Shugo Festival keys", use: "Hourly Shugo mini-games", from: "Regenerate over time" },
];

export interface Activity {
  name: string;
  format: string;
  limit: string;
  reward: string;
  confidence: Confidence;
}

export const ACTIVITIES: Activity[] = [
  { name: "Duty Quests", format: "Daily quests", limit: "5 / day", reward: "Abyss Points, Kinah, stones, crystals", confidence: "confirmed" },
  { name: "Daily Dungeon", format: "Solo waves", limit: "7 / week", reward: "Enhancement stones", confidence: "datamined" },
  { name: "Ascension Trial", format: "Timed solo", limit: "3 / week", reward: "Ariel fragments, Kinah", confidence: "datamined" },
  { name: "Nightmare", format: "Solo boss", limit: "2 / day (tickets)", reward: "Dream Fragments", confidence: "estimate" },
  { name: "Expedition / Conquest", format: "4-player", limit: "2 / day", reward: "Gear, Kinah", confidence: "estimate" },
  { name: "Transcendence", format: "4-player timed", limit: "1 / day", reward: "Arcana cards", confidence: "estimate" },
  { name: "Raid", format: "4-player, 2 bosses", limit: "7 / week", reward: "Amp stone & Ariel fragments", confidence: "estimate" },
  { name: "Sanctuary", format: "Boss, CP 2700+", limit: "2 / week", reward: "Heroic gear", confidence: "estimate" },
  { name: "Spacetime Rift", format: "PvPvE invasion", limit: "Every 3h", reward: "Abyss Points", confidence: "estimate" },
  { name: "Abyss (Reshanta)", format: "RvR zone", limit: "Timed access", reward: "Abyss Points, boss loot", confidence: "estimate" },
];

export const GUIDE_SOURCES: SourceId[] = [
  "cogmGear",
  "cogmLeveling",
  "redditGear",
  "slashingcreeps",
  "vortexDaily",
  "mmoexpWeek1",
  "skycoachChecklist",
  "mmomLaunch",
  "wikilySeason",
];
