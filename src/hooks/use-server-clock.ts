"use client";

import { DEFAULT_SERVER_CLOCK_ID, SERVER_CLOCKS } from "@/data/schedule";
import { useLocalStorage } from "@/hooks/use-local-storage";

export function useServerClock() {
  const [id, setId] = useLocalStorage<string>("aion2:server-clock", DEFAULT_SERVER_CLOCK_ID);
  const clock = SERVER_CLOCKS.find((c) => c.id === id) ?? SERVER_CLOCKS[0];
  return { clock, setClockId: setId };
}
