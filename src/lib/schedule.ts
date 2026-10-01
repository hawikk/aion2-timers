import {
  EVENTS,
  RESETS,
  SEASON,
  type Recurrence,
  type ScheduledEvent,
} from "@/data/schedule";
import { DAY, MINUTE, WEEKDAYS, getZonedParts, parseHHMM, zonedToEpoch } from "@/lib/time";

interface ServerDay {
  year: number;
  month: number;
  day: number;
  weekday: (typeof WEEKDAYS)[number];
}

function serverDaysAround(now: number, timeZone: string, before: number, after: number): ServerDay[] {
  const p = getZonedParts(now, timeZone);
  const base = Date.UTC(p.year, p.month - 1, p.day);
  const days: ServerDay[] = [];
  for (let i = -before; i <= after; i++) {
    const d = new Date(base + i * DAY);
    days.push({
      year: d.getUTCFullYear(),
      month: d.getUTCMonth() + 1,
      day: d.getUTCDate(),
      weekday: WEEKDAYS[d.getUTCDay()],
    });
  }
  return days;
}

function startsOnDay(recurrence: Recurrence, day: ServerDay, timeZone: string): number[] {
  switch (recurrence.type) {
    case "interval": {
      const [h, m] = parseHHMM(recurrence.firstAt);
      const starts: number[] = [];
      for (let minute = h * 60 + m; minute < 24 * 60; minute += recurrence.everyMinutes) {
        starts.push(
          zonedToEpoch(day.year, day.month, day.day, Math.floor(minute / 60), minute % 60, timeZone),
        );
      }
      return starts;
    }
    case "weekly": {
      if (!recurrence.days.includes(day.weekday)) return [];
      const [h, m] = parseHHMM(recurrence.at);
      return [zonedToEpoch(day.year, day.month, day.day, h, m, timeZone)];
    }
    default: {
      const exhaustive: never = recurrence;
      return exhaustive;
    }
  }
}

function occurrences(recurrence: Recurrence, now: number, timeZone: string): number[] {
  const span = recurrence.type === "weekly" ? 8 : 2;
  return serverDaysAround(now, timeZone, span, span)
    .flatMap((day) => startsOnDay(recurrence, day, timeZone))
    .sort((a, b) => a - b);
}

export function describeRecurrence(recurrence: Recurrence): string {
  switch (recurrence.type) {
    case "interval": {
      const { everyMinutes, firstAt } = recurrence;
      if (everyMinutes === 24 * 60) return `Daily · ${firstAt}`;
      if (everyMinutes === 60) return `Hourly at :${firstAt.split(":")[1]}`;
      const every = everyMinutes % 60 === 0 ? `${everyMinutes / 60}h` : `${everyMinutes} min`;
      return `Every ${every} from ${firstAt}`;
    }
    case "weekly":
      return `${recurrence.days.join(", ")} · ${recurrence.at}`;
    default: {
      const exhaustive: never = recurrence;
      return exhaustive;
    }
  }
}

export interface EventStatus {
  event: ScheduledEvent;
  /** Set while the event is inside its "happening now" window. */
  activeUntil: number | null;
  activeSince: number | null;
  nextStart: number;
  /** Sort key: active events first (by end), then upcoming by start. */
  sortKey: number;
}

export function getEventStatus(event: ScheduledEvent, now: number, timeZone: string): EventStatus {
  const starts = occurrences(event.recurrence, now, timeZone);
  const durationMs = event.durationMinutes * MINUTE;
  const active = durationMs > 0 ? starts.findLast((s) => s <= now && now < s + durationMs) : undefined;
  const nextStart = starts.find((s) => s > now) ?? now + 7 * DAY;
  return {
    event,
    activeSince: active ?? null,
    activeUntil: active !== undefined ? active + durationMs : null,
    nextStart,
    sortKey: active !== undefined ? -1e15 + active + durationMs : nextStart,
  };
}

export function getAllStatuses(now: number, timeZone: string): EventStatus[] {
  return EVENTS.map((e) => getEventStatus(e, now, timeZone)).sort((a, b) => a.sortKey - b.sortKey);
}

export function previousStart(recurrence: Recurrence, now: number, timeZone: string): number {
  return occurrences(recurrence, now, timeZone).findLast((s) => s <= now) ?? now - 7 * DAY;
}

export function nextStart(recurrence: Recurrence, now: number, timeZone: string): number {
  return occurrences(recurrence, now, timeZone).find((s) => s > now) ?? now + 7 * DAY;
}

const DAILY_RESET: Recurrence = { type: "interval", everyMinutes: 24 * 60, firstAt: RESETS.daily.at };
const WEEKLY_RESET: Recurrence = { type: "weekly", days: [RESETS.weekly.day], at: RESETS.weekly.at };

export function resetWindow(kind: "daily" | "weekly", now: number, timeZone: string) {
  const recurrence = kind === "daily" ? DAILY_RESET : WEEKLY_RESET;
  return {
    last: previousStart(recurrence, now, timeZone),
    next: nextStart(recurrence, now, timeZone),
  };
}

function parseServerDateTime(value: string, timeZone: string): number {
  const [date, time] = value.split(" ");
  const [y, mo, d] = date.split("-").map(Number);
  const [h, m] = parseHHMM(time);
  return zonedToEpoch(y, mo, d, h, m, timeZone);
}

export function seasonInfo(now: number, timeZone: string) {
  const start = parseServerDateTime(SEASON.start, timeZone);
  const end = parseServerDateTime(SEASON.end, timeZone);
  const week = Math.max(0, Math.floor((now - start) / (7 * DAY)));
  const rotation = SEASON.ascensionTrialRotation;
  return {
    name: SEASON.name,
    start,
    end,
    week: week + 1,
    ascensionTrial: rotation[week % rotation.length],
    nextAscensionTrial: rotation[(week + 1) % rotation.length],
  };
}
