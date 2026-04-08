import { cn } from "../../lib/utils";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: LucideIcon;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  className?: string;
  variant?: "default" | "success" | "warning" | "danger";
}

/**
 * Stat card for displaying key metrics.
 * Used in dashboards and summary views.
 */
export function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendValue,
  className,
  variant = "default",
}: StatCardProps) {
  const variantStyles = {
    default: "bg-card",
    success: "bg-success/10 border-success/30",
    warning: "bg-warning/10 border-warning/30",
    danger: "bg-danger/10 border-danger/30",
  };

  const iconStyles = {
    default: "text-muted-foreground",
    success: "text-success",
    warning: "text-warning",
    danger: "text-danger",
  };

  const trendStyles = {
    up: "text-success bg-success/10",
    down: "text-danger bg-danger/10",
    neutral: "text-muted-foreground bg-muted",
  };

  return (
    <div
      className={cn(
        "rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md",
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>

        {Icon && (
          <div className={cn("rounded-lg p-2", iconStyles[variant])}>
            <Icon className="h-6 w-6" />
          </div>
        )}
      </div>

      {trend && trendValue && (
        <div className="mt-4">
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
              trendStyles[trend]
            )}
          >
            {trend === "up" && "\u2191"}
            {trend === "down" && "\u2193"}
            {trendValue}
          </span>
        </div>
      )}
    </div>
  );
}

interface MiniStatProps {
  label: string;
  value: string | number;
  className?: string;
}

/**
 * Compact stat for inline display.
 */
export function MiniStat({ label, value, className }: MiniStatProps) {
  return (
    <div className={cn("text-center", className)}>
      <p className="text-2xl font-bold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
