"use client";

import { useState } from "react";
import { Info, ChevronDown, ChevronUp } from "lucide-react";

interface CollapsibleDisclaimerProps {
  summary: string;
  details: string;
}

export function CollapsibleDisclaimer({ summary, details }: CollapsibleDisclaimerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="rounded-lg border border-muted-foreground/20 bg-muted/50 px-3 py-2.5">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between gap-2 text-left"
      >
        <div className="flex items-center gap-2">
          <Info className="h-4 w-4 shrink-0 text-muted-foreground" />
          <span className="text-xs text-muted-foreground sm:text-sm">
            {summary}
          </span>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
        )}
      </button>
      {isExpanded && (
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground/70">
          {details}
        </p>
      )}
    </div>
  );
}
