import { BarChart3, PieChart, TrendingUp, Activity } from "lucide-react";

interface ChartEmptyProps {
  message?: string;
  description?: string;
  height?: number;
  type?: "line" | "bar" | "pie" | "gauge";
  action?: {
    label: string;
    href: string;
  };
}

/**
 * Empty state placeholder for charts with no data.
 */
export function ChartEmpty({
  message = "No data to display",
  description,
  height = 300,
  type = "bar",
  action,
}: ChartEmptyProps) {
  const Icon = getIconForType(type);

  return (
    <div
      className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/50"
      style={{ height }}
      role="status"
      aria-label={message}
    >
      <Icon className="h-12 w-12 text-muted-foreground/50" strokeWidth={1.5} />

      <p className="mt-3 text-sm font-medium text-muted-foreground">{message}</p>

      {description && (
        <p className="mt-1 max-w-xs text-center text-xs text-muted-foreground">
          {description}
        </p>
      )}

      {action && (
        <a
          href={action.href}
          className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          {action.label}
        </a>
      )}
    </div>
  );
}

function getIconForType(type: string) {
  switch (type) {
    case "line":
      return TrendingUp;
    case "pie":
      return PieChart;
    case "gauge":
      return Activity;
    default:
      return BarChart3;
  }
}
