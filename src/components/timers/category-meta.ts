import { Castle, PartyPopper, RotateCcw, Skull, Sparkles, type LucideIcon } from "lucide-react";
import type { Category } from "@/data/schedule";

export const CATEGORY_META: Record<Category, { icon: LucideIcon; accent: string; text: string }> = {
  "world-boss": { icon: Skull, accent: "bg-asmo", text: "text-asmo" },
  rift: { icon: Sparkles, accent: "bg-elyos", text: "text-elyos" },
  siege: { icon: Castle, accent: "bg-red-400", text: "text-red-300" },
  event: { icon: PartyPopper, accent: "bg-emerald-400", text: "text-emerald-300" },
  reset: { icon: RotateCcw, accent: "bg-gold", text: "text-gold" },
};
