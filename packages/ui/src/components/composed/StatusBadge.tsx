import { cn } from "../../lib/utils";
import { Check, AlertTriangle, XCircle, Clock } from "lucide-react";

type Status = "success" | "warning" | "danger" | "info" | "neutral";

interface StatusBadgeProps {
  status: Status;
  label: string;
  showIcon?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const statusConfig = {
  success: {
    bg: "bg-success/20",
    text: "text-success",
    icon: Check,
  },
  warning: {
    bg: "bg-warning/20",
    text: "text-warning",
    icon: AlertTriangle,
  },
  danger: {
    bg: "bg-danger/20",
    text: "text-danger",
    icon: XCircle,
  },
  info: {
    bg: "bg-primary/20",
    text: "text-primary",
    icon: Clock,
  },
  neutral: {
    bg: "bg-muted",
    text: "text-muted-foreground",
    icon: Clock,
  },
};

const sizeConfig = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-2.5 py-1",
  lg: "text-base px-3 py-1.5",
};

/**
 * Status badge for showing state indicators.
 * Supports success, warning, danger, info, and neutral states.
 */
export function StatusBadge({
  status,
  label,
  showIcon = true,
  size = "sm",
  className,
}: StatusBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full font-medium",
        config.bg,
        config.text,
        sizeConfig[size],
        className
      )}
    >
      {showIcon && <Icon className={cn(size === "sm" ? "h-3 w-3" : "h-4 w-4")} />}
      {label}
    </span>
  );
}

interface ProgressStatusProps {
  percent: number;
  showLabel?: boolean;
  className?: string;
}

/**
 * Progress-based status badge.
 * Automatically determines status based on completion percentage.
 */
export function ProgressStatus({
  percent,
  showLabel = true,
  className,
}: ProgressStatusProps) {
  let status: Status;
  let label: string;

  if (percent >= 100) {
    status = "success";
    label = "Complete";
  } else if (percent >= 75) {
    status = "info";
    label = "Almost there";
  } else if (percent >= 50) {
    status = "neutral";
    label = "In progress";
  } else if (percent >= 25) {
    status = "warning";
    label = "Getting started";
  } else {
    status = "danger";
    label = "Just beginning";
  }

  return (
    <StatusBadge
      status={status}
      label={showLabel ? label : `${Math.round(percent)}%`}
      className={className}
    />
  );
}
