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
    detail: "4-player gear dungeons. Bakarma is in the Draupnir Odyle cube at the end. Open it before you leave. Wikily lists 10 Conquest cubes a week for that dungeon, Wednesday 16:00 server time. KR writeups also describe a daily recharge, so use the in-game counter.",
  },
  {
    id: "transcendence",
    label: "Transcendence",
    detail: "Timed 4-player grand dungeon for Arcana cards — a big gear score jump.",
  },
  {
    id: "odyle",
    label: "Spend Odyle Energy",
    detail: "Spend it on the Odyle Energy Cube at the end of an Expedition or Transcendence run. The boss kill leaves that cube unclaimed. Wikily lists 40 energy for Draupnir and for Krao Conquest. It regenerates, so a full bar is wasted energy.",
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
    body: "Daily Dungeon score and Ascension Trial pay off your current strength. Conquest loot is the Odyle cube you open before you leave. The weekly reset is Wednesday 07:00 UTC. Do Duty Quests every day — those reset daily — and hold the weekly runs until the map clear is done.",
  },
  {
    title: "Then farm the dungeon that matches the hole",
    body: "Draupnir for Bakarma armor. Open the Odyle Energy Cube before you leave. Wikily (1 Oct 2026) lists 40 energy for both Draupnir modes, and both modes are item level 700. The Conquest cube lists 70,000 Kinah. A chosen Bakarma piece is the pity pick after 3 Exploration cubes or 14 Conquest cubes, so one clear is not a guaranteed chest. Vakron Sky Island for the gold weapon once the menu lets you in. Transcendence uses the same kind of cube for Arcana. Skip Krao if you only need a weapon — its weapon rate on the cube sheet is poor.",
  },
];

export const FIRST_STEPS: { title: string; body: string }[] = [
  {
    title: "Finish the level 45 story beat",
    body: "The main story hands you a belt and an amulet at 45 — equip them right away. Belts use Noble Belt Enhance Scrolls from strongholds; amulets use Fierce Battle Amulet scrolls from feather turn-ins.",
  },
  {
    title: "Clear every Sealed Dungeon",
    body: "One-time clears in Verteron/Altgard give Daevanion points and enhancement stones, plus the gold title \u201cThrough hell and back\u201d.",
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
  { stage: "Bakarma armor", source: "Draupnir Odyle cube", note: "Open the cube at the end (Wikily: 40 energy). Both modes are item level 700. The boss kill does not place the chest in your bags." },
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
  { name: "Odyle Energy", use: "Claims the cube at the end of Expedition / Transcendence. A clear with an empty bar pays no cube loot. Membership storage cap is 840, and it lets you open a second cube.", from: "Regenerates over time, weekly shop, crafting" },
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
  { name: "Expedition / Conquest", format: "4-player", limit: "Conquest 10 / week", reward: "Odyle cube: gear, Kinah", confidence: "datamined" },
  { name: "Transcendence", format: "4-player timed", limit: "1 / day", reward: "Arcana cards", confidence: "estimate" },
  { name: "Raid", format: "4-player, 2 bosses", limit: "7 / week", reward: "Amp stone & Ariel fragments", confidence: "estimate" },
  { name: "Sanctuary", format: "Boss, CP 2700+", limit: "2 / week", reward: "Heroic gear", confidence: "estimate" },
  { name: "Spacetime Rift", format: "PvPvE invasion", limit: "Every 3h", reward: "Abyss Points", confidence: "estimate" },
  { name: "Abyss (Reshanta)", format: "RvR zone", limit: "Timed access", reward: "Abyss Points, boss loot", confidence: "estimate" },
];

export interface RangerNote {
  name: string;
  detail: string;
}

export interface RangerSkill {
  name: string;
  target: string;
  picks: string;
}

export interface RangerBind {
  piece: string;
  lines: string;
}

export interface RangerArcana {
  slot: string;
  card: string;
  skills: string;
}

/**
 * Welps, Chaos server, about 1,000,000 CP. PvE only.
 * Specialty names are the Wikily effects in the order he counted.
 */
export const RANGER_ROTATION: RangerNote = {
  name: "The fight",
  detail:
    "Buff Bow of Blessing, Supporting Fire, and Vaizel's Authority. Marking Shot, then a full Deadshot charge. After that, hold Deadshot together with both macro clicks. Refresh Marking Shot when Precision drops under about 3 seconds. It is +300 Critical Hit, +5% Perfect Chance, and +35% Deadshot damage while Precision is up. Rebuff when the buffs come off cooldown.",
};

export const RANGER_MACRO: RangerNote = {
  name: "Two rows, Aion 2 mode",
  detail:
    "Use Aion 2 control mode. Aion 1 mode blocks the mouse macro. One row starts with Griffon Arrow, the other with Gale Arrow. The macro is those two rows, delay around 10ms. Test 10 to 20ms on your own ping. Deadshot and Marking Shot stay on their own keys. He puts Deadshot on a mouse side button and the macro on right click.",
};

export const RANGER_SKILLS: RangerSkill[] = [
  {
    name: "Deadshot",
    target: "20",
    picks: "Skill Speed and mobile until the third slot, then add the extra damage. Standing still for that damage is the bigger hit. Mobile is what he plays before level 20.",
  },
  {
    name: "Gale Arrow",
    target: "20",
    picks: "Mobile, the fewer-target buff, and the cooldown cut. Before 20, mobile plus the cooldown cut. Take the fewer-target buff instead of mobile if you will stand still.",
  },
  {
    name: "Drill Dart",
    target: "16, then 20",
    picks: "The extra hit and Skill Speed. At 20 add Multi-Hit. Need healing? Take the HP absorb instead of Skill Speed, and at 20 instead of Multi-Hit. He says Skill Speed is not applying on the KR client. If Global does the same, stop at 16.",
  },
  {
    name: "Snipe",
    target: "16, 20 if the cards allow",
    picks: "The Deadshot cooldown cut and the Rapid Fire chain. At 20 add Multi-Hit. A fourth skill at 20 is hard in Season 1.",
  },
  {
    name: "Tempest Shot",
    target: "16",
    picks: "Fewer-target damage and Skill Speed. Skip the Critical Hit specialty. He expects you to be crit capped, and skill levels barely raise the damage number. PvP wants the knockback, so that is the reason to push this to 20.",
  },
  {
    name: "Snare Shot",
    target: "12",
    picks: "Skill Speed and mobile. Daevanion already gives +4, so 12 is cheap.",
  },
  {
    name: "Marking Shot",
    target: "12",
    picks: "Perfect Chance and the longer Precision. Keep it off the macro so the dash stays yours. His first pass also named the knockback slot.",
  },
  {
    name: "Burst Arrow",
    target: "12",
    picks: "Mobile and the fewer-target damage. The cooldown reset is only if this skill ever reaches 20.",
  },
  {
    name: "Explosion Trap",
    target: "12",
    picks: "The pull and the extra damage. He uses it to group trash in Transcendence, not on the boss.",
  },
  {
    name: "Suppressing Arrow",
    target: "12",
    picks: "Multi-Hit and Skill Speed. A stun for leveling and PvP. He does not use it in endgame PvE.",
  },
  {
    name: "Defiance",
    target: "16",
    picks: "The HP restore, then either Stamina or the longer Tenacity. At 16, HP restore and the damage tolerance. Its own button.",
  },
];

export const RANGER_STIGMAS: RangerNote[] = [
  {
    name: "Vaizel's Authority",
    detail: "Take this to 20 before the others. Level 20 is a 50% chance, on a Critical Hit, to cut every skill cooldown by 1 second while the buff is up. He resets the other stigma levels to afford it. That is the point where the rotation speeds up.",
  },
  {
    name: "Bow of Blessing",
    detail: "Manual buff. Second stigma he takes to 20, after Vaizel.",
  },
  {
    name: "Supporting Fire",
    detail: "Same cooldown as Vaizel's Authority, so he presses them together. Third one to 20.",
  },
  {
    name: "Griffon Arrow",
    detail: "First icon on the damage macro. Fourth one to 20. The auto-caption garbles this name. Explosive Arrow is the skill he saves for a fifth slot, and the macro he shows starts on Griffon.",
  },
];

export const RANGER_PASSIVES: string[] = [
  "Focused Eye first, then Hunter's Resolve. Hunter's Soul is the third if you have the points.",
  "Then the other damage passives: Concentrated Fire, Rooting Eye, Melee Fire.",
  "Then Vigilant Eye and Revitalization Contract. Unyielding Resolve and Wind Vigor are last.",
  "Skip Arrow Scattershot. It only matters during Stagger, and he says the normal rotation does more damage.",
];

export const RANGER_BOARD: RangerNote[] = [
  {
    name: "Open the specialty slots",
    detail: "Active-skill nodes first, until Deadshot, Snipe, and Gale Arrow hit 12. Pick up Snare Shot on the way. A new specialty slot opens at skill levels 8, 12, and 20, and 16 adds another specialty you can slot.",
  },
  {
    name: "Orange damage corners",
    detail: "Combat Speed and cooldown reduction, by the shortest path. Grab Burst Arrow, Drill Dart, Tempest Shot, and Marking Shot if you pass them. Passives can wait.",
  },
  {
    name: "Then the small damage nodes",
    detail: "Attack, Critical Hit, Focused Eye, and Hunter's Resolve. Defensive nodes after that: Defense, max HP, then Critical Hit Resist.",
  },
  {
    name: "Skip Max MP on the last pass",
    detail: "When the board is almost full, route around the Max MP +50 nodes. Resetting is cheap. The filled board he shows is a KR board, so the Global layout can differ.",
  },
];

export const RANGER_BINDS: RangerBind[] = [
  { piece: "Weapon", lines: "Combat Speed, weapon damage boost, damage boost, Might. Crafted weapons add Multi-Hit." },
  { piece: "Helm", lines: "Double Chance and Attack Increase." },
  { piece: "Shoulder", lines: "Double Chance and critical damage boost." },
  { piece: "Chest", lines: "Damage boost." },
  { piece: "Legs", lines: "Attack Increase and damage tolerance." },
  { piece: "Cloak", lines: "Double Chance and Attack Increase." },
  { piece: "Gloves", lines: "Combat Speed." },
  { piece: "Boots", lines: "Move Speed." },
  { piece: "Earring", lines: "Move Speed and Might." },
  { piece: "Necklace", lines: "Combat Speed and Might." },
  { piece: "Rings", lines: "Deadshot and Gale Arrow on both rings. Drill Dart or Snipe only if that skill can reach 20. Otherwise Might." },
];

export const RANGER_ACCURACY =
  "Accuracy is the second soul bind, until you stop getting parried. He does not know the Global Season 1 cap. On his KR dungeon it was 1,300, and he aimed for 1,100 to 1,200 because a Cleric or Chanter aura adds 100 and those auras do not stack. A back attack cannot be parried, but a Ranger cannot live on the back, and some phases force the front. He puts a parry at more than half the hit, and guesses about 70%. Critical Hit is easier: Marking Shot is +300 with full uptime. On a dungeon piece with one slot left, keep the first of Attack, Critical Hit, or Focused Eye. He would not reroll a Critical Hit line into Attack. Focused Eye matched about 20 Attack on his endgame sheet.";

export const RANGER_STONES =
  "Save superior manastones for the endgame piece. He does not recommend forcing front-attack or back-attack lines onto every slot in Season 1. That needs about 80% uptime in one direction, and front still needs the Accuracy. Keep a back-attack line if one drops. Otherwise stop at one yellow Attack line. High Accuracy and Critical Hit rolls are worth keeping while you are under the cap. An extra weapon slot from a Philosopher's Stone would be Attack. He does not expect that item in Season 1.";

export const RANGER_ARCANA: RangerArcana[] = [
  { slot: "Grail", card: "Vigor, the Time line (Combat Speed)", skills: "Craft Deadshot and Gale Arrow. The other two skills are random." },
  { slot: "Parchment", card: "Same type. Life, and the 2-set: +60 PvE Attack above 70% HP", skills: "Craft Snipe and Tempest Shot. Tempest is not on the rings, so the card has to carry it to 16." },
  { slot: "Compass", card: "Death for Critical Hit, or Freedom for Accuracy", skills: "Whichever copy rolled better. Craft Deadshot and Gale Arrow." },
  { slot: "Bell", card: "Destruction, the Attack line", skills: "Craft Hunter's Resolve only. A second skill costs more Kinah and he skips it." },
  { slot: "Mirror", card: "Wisdom, Double Chance, and the mana 2-set", skills: "Craft Focused Eye only. Other passives on this card do not matter." },
];

export const RANGER_PET: string[] = [
  "Start locking at pet level 10, when every slot can hit its max roll. Lock slot 4 first.",
  "Slot 4, PvE preset: PvE damage boost. He looks for about 3.7 and would not keep one under about 3.5. A hybrid preset takes damage boost around 2.7, and he would not go under about 2.5. Critical damage boost is the casual stop.",
  "Slots 1 and 5: max Attack, ideally 20. He would not lock Attack bonus under 15 or max Attack under 18. If one of these maxes while you are still rolling slot 4, lock it. Finish these three slots inside the first three locks. Max Attack matters here because Perfect Chance comes from Vaizel's Authority and Marking Shot.",
  "Slots 3, 6, and 9: Accuracy or Critical Hit. Accuracy max is 40 and he wants 30 or more. Critical Hit max is 30 and he wants 20 or more. Either one is fine. Fix the gap on soul binds.",
  "Then HP on slots 2 and 8. The max is 2.4%. Even a low HP line is worth keeping once the locks get expensive. Slot 7 can be any defensive line.",
  "A special pet uses the same order, except slot 4 is Double Chance. He aims for 2.7 or more, ignores front attack, and might keep a 3% back-attack line.",
];

export const RANGER_NOTES: string[] = [
  "A skill stops at 10 by itself. Level 20 is +4 from Daevanion, +2 from the two rings, and +4 from Arcana. 16 and 20 are the stops that matter. 17, 18, and 19 do not open anything.",
  "Level stigma skills in steps of 5 so they hit their breakpoints together. After Vaizel's Authority is 20, go back to even steps, then 20 on Bow of Blessing, Supporting Fire, and Griffon Arrow.",
  "The launch test stopped at level 37 with four stigma slots. He thinks 45 adds a fifth, and that slot would be Explosive Arrow, left at 5 or 10 until the other four are 20. That fifth slot is unchecked.",
  "Spend early skill points on the actives: Snipe, Tempest Shot, Snare Shot, Marking Shot, Drill Dart, Gale Arrow, Burst Arrow, and Deadshot. Passives come after those.",
  "Arcana starts once you can farm unique cards. Feed bad copies into the one you keep. Each level raises the fixed stat and one random skill. He expects these cards to be replaced in a later season, so Deadshot and Gale Arrow to 20 is the whole goal.",
  "Gear is still just the highest item level you can equip. This soul-bind list is his endgame sheet: crafted weapon, crafted accessories, Ludra bracelets, dungeon armor. He would not roll armor lines until a drop already has one of them.",
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
  "welpsRanger",
  "wikilyRanger",
  "wikilyDraupnir",
  "wikilyDraupnirRewards",
  "metabotCubes",
];
