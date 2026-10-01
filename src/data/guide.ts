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
    detail: "Hourly mini-games at :00. Keys regenerate. Quai membership raises the reward-key cap to 21.",
  },
];

export const WEEKLY_CHECKLIST: ChecklistItem[] = [
  {
    id: "daily-dungeon",
    label: "Daily Dungeon ×14",
    detail: "14 basic entries refill at the weekly reset. A separate Recharge Count (0/30 here) is extra entries. Quai membership does not raise the 14.",
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
    detail: "Quai membership unlocks the Wind Breeze Merchant. Guides say that shop sells extra Daily Dungeon tickets on top of the 14.",
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

export interface GearScoreTarget {
  score: string;
  title: string;
  confidence: Confidence;
  body: string;
}

/** What 1,400 and 1,600 mean on the Global launch, and the order that gets there. */
export const GS_TARGETS: GearScoreTarget[] = [
  {
    score: "1,400",
    title: "The dungeon gate",
    confidence: "datamined",
    body: "In the September Global test client, 1,400 is the Conquest item level for Urugugu Canyon and Vakron Sky Island. Krao Cave and Draupnir are listed at 700 there. KR writeups often say 1,000 before those two will take you. Check the dungeon menu — retail can differ from the test build.",
  },
  {
    score: "1,600",
    title: "The number groups ask for",
    confidence: "estimate",
    body: "Party finder on KR/TW asks about 1,600 even for Draupnir and Krao, which you can enter lower. MeinMMO treats 1,600 as the point to start Abyss accessories. A white Arcana card is about 20 item level and a green one about 40, so cards close this gap faster than another armor piece.",
  },
];

export const GS_STEPS: { title: string; body: string }[] = [
  {
    title: "Clear your own map before you queue",
    body: "Sealed Dungeons (Daevanion points — take the orange offensive nodes), Strongholds (Noble Belt scrolls), every Monolith feather (amulet scrolls), and the blue regional quests. Players who only follow the red story stall under 1,100.",
  },
  {
    title: "Cross a rift and do the other faction's map",
    body: "The same sealed dungeons, strongholds, and feathers exist on the enemy side, and rifts are how you get there. A 1,500 player on the forum was told that both maps plus Abyss feathers is the jump toward 1,900. Bring a kisk; you will get ganked.",
  },
  {
    title: "Enhance the pieces you will not replace",
    body: "Story weapon to +10 (that range is the safe one). Belt and Revelation Amulet keep going, because they morph upward instead of being swapped. If you are a few points short of 1,600, the two arm rings are the upgrade MeinMMO says you will not replace for a while. Greens and blues can be enhanced and extracted later for the stones back.",
  },
  {
    title: "Spend weekly entries after the map, before Wednesday",
    body: "Daily Dungeon score, Ascension Trial, and conquest reward cubes pay off your current strength. The weekly reset is Wednesday 07:00 UTC. Do Duty Quests every day — those reset daily — and hold the weekly runs until the map clear is done.",
  },
  {
    title: "Then farm the dungeon that matches the hole",
    body: "Draupnir for Bakarma armor (PvE stats, on par with early Abyss gear, about 300k Kinah a clear). Vakron Sky Island for the gold weapon once the menu lets you in. Transcendence for Arcana as soon as a stage is clearable; S-rank opens the next stage. Skip Krao if you only need a weapon — its weapon drop rate is poor.",
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
    body: "Story weapon to +10. That range is widely reported as safe. Past +10, failures eat stones. A rushed story with +5 filler gear lands around 1,100–1,300, short of the 1,400 dungeons.",
  },
  {
    title: "Start the daily loop",
    body: "Duty Quests, Conquest and Transcendence are your gear and Abyss Point engine. Keep Odyle Energy below cap.",
  },
];

export const GEAR_PATH: { stage: string; source: string; note: string }[] = [
  { stage: "Story belt & amulet", source: "Main story at 45", note: "Enhance with stronghold / feather scrolls, then substance-morph upward after +10." },
  { stage: "Bakarma armor", source: "Draupnir", note: "First real PvE set. No PvP stats. Test client lists the dungeon at 700; groups often want more." },
  { stage: "Arcana cards", source: "Transcendence", note: "About 20 item level for a white card, 40 for green. Five green cards are the fast route through 1,600." },
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
  { name: "Odyle Energy", use: "Opens Expedition / Transcendence chests. Membership storage cap is 840, and it lets you open a second cube.", from: "Regenerates over time, weekly shop, crafting" },
  { name: "Ariel fragments", use: "Ariel (PvE) Daevanion board", from: "Ascension Trial, raid" },
  { name: "Shugo Festival keys", use: "Hourly Shugo mini-games", from: "Regenerate over time. Membership raises the reward-key cap to 21." },
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
  { name: "Daily Dungeon", format: "Solo waves", limit: "14 / week", reward: "Enhancement stones", confidence: "confirmed" },
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
  "meinmmoGear",
  "aion2hubLeveling",
  "vortexItemLevel",
];
