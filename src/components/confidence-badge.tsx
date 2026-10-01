import { BadgeCheck, Database, HelpCircle } from "lucide-react";
import type { Confidence } from "@/data/schedule";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const META: Record<Confidence, { label: string; className: string; icon: typeof BadgeCheck; help: string }> = {
  confirmed: {
    label: "Confirmed",
    className: "border-live/40 bg-live/10 text-live",
    icon: BadgeCheck,
    help: "Official or widely reported.",
  },
  datamined: {
    label: "Datamined",
    className: "border-elyos/40 bg-elyos/10 text-elyos",
    icon: Database,
    help: "From the Global client files; independent sources agree. Not announced by NC.",
  },
  estimate: {
    label: "Estimate",
    className: "border-amber-400/40 bg-amber-400/10 text-amber-300",
    icon: HelpCircle,
    help: "Single source or inferred. Double-check in game.",
  },
};

export function ConfidenceBadge({ confidence, note }: { confidence: Confidence; note?: string }) {
  const meta = META[confidence];
  const Icon = meta.icon;
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Badge variant="outline" className={cn("cursor-help gap-1", meta.className)}>
            <Icon className="size-3" />
            {meta.label}
          </Badge>
        }
      />
      <TooltipContent className="max-w-72 text-xs">
        <p className="font-medium">{meta.help}</p>
        {note ? <p className="mt-1 opacity-80">{note}</p> : null}
      </TooltipContent>
    </Tooltip>
  );
}
