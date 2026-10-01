"use client";

import { Bell, BellOff } from "lucide-react";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useNotifySettings } from "@/hooks/use-event-notifications";

const LEAD_OPTIONS = [2, 5, 10, 15].map((m) => ({ value: String(m), label: `${m} min before` }));

export function NotificationControl() {
  const [settings, setSettings] = useNotifySettings();

  async function toggle(enabled: boolean) {
    if (enabled && typeof Notification !== "undefined" && Notification.permission === "default") {
      const result = await Notification.requestPermission();
      if (result === "denied") {
        toast.warning("Browser notifications are blocked", {
          description: "You'll still get in-app alerts while this tab is open.",
        });
      }
    } else if (enabled && typeof Notification !== "undefined" && Notification.permission === "denied") {
      toast.warning("Browser notifications are blocked", {
        description: "Allow them in your browser's site settings. In-app alerts still work.",
      });
    }
    setSettings((s) => ({ ...s, enabled }));
  }

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border/60 bg-card/50 px-3 py-2">
      <label className="flex cursor-pointer items-center gap-2 text-sm">
        {settings.enabled ? <Bell className="size-4 text-gold" /> : <BellOff className="size-4 text-muted-foreground" />}
        <span>Alerts</span>
        <Switch checked={settings.enabled} onCheckedChange={(v) => void toggle(v)} />
      </label>
      <Select
        items={LEAD_OPTIONS}
        value={String(settings.leadMinutes)}
        onValueChange={(v) => {
          if (v) setSettings((s) => ({ ...s, leadMinutes: Number(v) }));
        }}
        disabled={!settings.enabled}
      >
        <SelectTrigger size="sm" aria-label="Alert lead time">
          <SelectValue />
        </SelectTrigger>
        <SelectContent alignItemWithTrigger={false}>
          {LEAD_OPTIONS.map((o) => (
            <SelectItem key={o.value} value={o.value}>
              {o.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
