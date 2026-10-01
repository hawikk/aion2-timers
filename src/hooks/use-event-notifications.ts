"use client";

import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { useLocalStorage } from "@/hooks/use-local-storage";
import type { EventStatus } from "@/lib/schedule";
import { MINUTE, formatTime } from "@/lib/time";

export interface NotifySettings {
  enabled: boolean;
  leadMinutes: number;
}

export function useNotifySettings() {
  return useLocalStorage<NotifySettings>("aion2:notify", { enabled: false, leadMinutes: 5 });
}

/** Fires one browser notification (plus an in-app toast) per occurrence, `leadMinutes` before start. */
export function useEventNotifications(statuses: EventStatus[], now: number | null) {
  const [settings] = useNotifySettings();
  const fired = useRef(new Set<string>());

  useEffect(() => {
    if (!settings.enabled || now === null) return;
    const lead = settings.leadMinutes * MINUTE;
    for (const { event, nextStart } of statuses) {
      if (event.category === "reset") continue;
      const remaining = nextStart - now;
      const key = `${event.id}@${nextStart}`;
      if (remaining <= 0 || remaining > lead || fired.current.has(key)) continue;
      fired.current.add(key);
      const minutes = Math.max(1, Math.round(remaining / MINUTE));
      const body = `Starts in ${minutes} min (${formatTime(nextStart)})${event.location ? ` · ${event.location}` : ""}`;
      toast(event.name, { description: body });
      if (typeof Notification !== "undefined" && Notification.permission === "granted") {
        new Notification(`AION 2 · ${event.name}`, { body, tag: key });
      }
    }
  }, [statuses, now, settings]);
}
