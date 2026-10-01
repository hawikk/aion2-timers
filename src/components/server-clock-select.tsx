"use client";

import { SERVER_CLOCKS } from "@/data/schedule";
import { useServerClock } from "@/hooks/use-server-clock";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const items = SERVER_CLOCKS.map((c) => ({ value: c.id, label: c.label }));

export function ServerClockSelect({ className }: { className?: string }) {
  const { clock, setClockId } = useServerClock();
  return (
    <Select
      items={items}
      value={clock.id}
      onValueChange={(value) => {
        if (value) setClockId(value);
      }}
    >
      <SelectTrigger size="sm" className={className} aria-label="Server clock">
        <SelectValue />
      </SelectTrigger>
      <SelectContent alignItemWithTrigger={false} align="end">
        {SERVER_CLOCKS.map((c) => (
          <SelectItem key={c.id} value={c.id}>
            {c.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
